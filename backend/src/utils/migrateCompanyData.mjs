import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const companyDataDir = path.resolve(__dirname, '../../../src/data/companyPrep')
const technicalFilePath = path.join(companyDataDir, 'technical.json')

async function migrate() {
  try {
    // Read the shared technical.json
    const technicalRaw = await fs.readFile(technicalFilePath, 'utf-8')
    const technicalData = JSON.parse(technicalRaw)

    // Read all files in the directory
    const files = await fs.readdir(companyDataDir)

    for (const file of files) {
      if (file.endsWith('.json') && file !== 'technical.json') {
        const filePath = path.join(companyDataDir, file)
        
        // Read the company JSON
        const rawData = await fs.readFile(filePath, 'utf-8')
        const companyData = JSON.parse(rawData)

        // Merge technical data into company data
        const mergedData = { ...companyData, ...technicalData }

        // Write back to the company file
        await fs.writeFile(filePath, JSON.stringify(mergedData, null, 2))
        console.log(`Migrated ${file}`)
      }
    }

    console.log('Migration complete. You can now safely delete technical.json.')
  } catch (error) {
    console.error('Migration failed:', error)
  }
}

migrate()
