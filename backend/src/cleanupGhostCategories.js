import 'dotenv/config'
import mongoose from 'mongoose'

/**
 * This script removes ghost/duplicate categories from the database.
 * 
 * WHY THESE APPEARED:
 * The old seedSearchingSorting.js and seedBitManipulation.js files contained 
 * problems with WRONG category names:
 *   - 'Array' instead of 'Arrays'
 *   - 'Math' instead of 'Mathematics'
 *   - 'String' instead of 'Strings'
 *   - 'Binary Search' (from old mixed seed - duplicate entries)
 *   - 'Sorting' (from old mixed seed - duplicate entries)
 *   - 'Stack' / 'Queue' (likely from old data)
 *   - 'Dynamic Programming' (duplicate from old seed)
 *   - 'Divide and Conquer' (from old seed)
 * 
 * When those seeds ran, MongoDB created documents with these wrong category
 * names. The /api/code/categories route uses `$group: { _id: '$category' }`
 * which shows ALL distinct categories in the database — so both 'Arrays' 
 * AND 'Array' appeared as separate topics in Code Learning.
 * 
 * The seed files have been fixed to use correct names and upsert pattern,
 * but the OLD records with wrong names are still in the database.
 * This script deletes those ghost records.
 */

const GHOST_CATEGORIES = [
  'Array',        // Should be 'Arrays'
  'Math',         // Should be 'Mathematics'  
  'String',       // Should be 'Strings'
  'Stack',        // Should be 'Stacks & Queues'
  'Queue',        // Should be 'Stacks & Queues'
  'Binary Search',// Duplicate from old mixed seed (now in correct file)
  'Sorting',      // Duplicate from old mixed seed (now in correct file)
]

const cleanup = async () => {
  try {
    await mongoose.connect((process.env.MONGO_URI || process.env.MONGODB_URI))
    console.log('Connected to MongoDB')

    const db = mongoose.connection.db
    const coll = db.collection('codeproblems')

    // Show what we're about to delete
    for (const cat of GHOST_CATEGORIES) {
      const count = await coll.countDocuments({ category: cat })
      if (count > 0) {
        console.log(`  Found ${count} problems with ghost category '${cat}'`)
      }
    }

    // Delete all problems with ghost categories
    const result = await coll.deleteMany({
      category: { $in: GHOST_CATEGORIES }
    })

    console.log(`\nRemoved ${result.deletedCount} ghost/duplicate problems`)

    // Also run duplicate cleanup (same title appearing multiple times)
    const dups = await coll.aggregate([
      { $group: { _id: '$title', count: { $sum: 1 }, docs: { $push: '$_id' } } },
      { $match: { count: { $gt: 1 } } }
    ]).toArray()

    let dupRemoved = 0
    for (const d of dups) {
      d.docs.shift() // Keep the first, delete the rest
      const res = await coll.deleteMany({ _id: { $in: d.docs } })
      dupRemoved += res.deletedCount
    }

    if (dupRemoved > 0) {
      console.log(`Removed ${dupRemoved} additional duplicate entries`)
    }

    // Show remaining categories
    const remaining = await coll.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $sort: { _id: 1 } }
    ]).toArray()

    console.log('\nRemaining categories:')
    for (const c of remaining) {
      console.log(`  ${c._id}: ${c.count} problems`)
    }

    await mongoose.disconnect()
    process.exit(0)
  } catch (err) {
    console.error('Cleanup failed:', err)
    process.exit(1)
  }
}

cleanup()
