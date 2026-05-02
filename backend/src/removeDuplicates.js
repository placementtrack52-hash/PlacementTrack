import 'dotenv/config';
import mongoose from 'mongoose';

const cleanDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');
        
        const db = mongoose.connection.db;
        const coll = db.collection('codeproblems');
        
        const pipeline = [
            { $group: { _id: '$title', count: { $sum: 1 }, docs: { $push: '$_id' } } },
            { $match: { count: { $gt: 1 } } }
        ];
        
        const dups = await coll.aggregate(pipeline).toArray();
        console.log(`Found ${dups.length} problems with duplicates`);
        
        let removed = 0;
        for (let d of dups) {
            d.docs.shift(); // Keep the first one, delete the rest
            const res = await coll.deleteMany({ _id: { $in: d.docs } });
            removed += res.deletedCount;
        }
        
        console.log(`Successfully removed ${removed} duplicate entries!`);
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

cleanDB();
