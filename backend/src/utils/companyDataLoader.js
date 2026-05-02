import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const companyDataDir = path.resolve(__dirname, '../../../src/data/companyPrep')

const formatCompanyNameFromFile = (fileName) =>
  fileName
    .replace('.json', '')
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
    .replace('Ibm', 'IBM')
    .replace('Sap', 'SAP')
    .replace('Tcs', 'TCS')

const normalizeName = (value) => value.toLowerCase().replace(/[^a-z0-9]/g, '')

const readCompanyFiles = async () => {
  const files = await fs.readdir(companyDataDir)
  return files.filter((file) => file.endsWith('.json'))
}

export const getCompanyCatalog = async () => {
  const files = await readCompanyFiles()

  return files.map((file) => ({
    id: file.replace('.json', ''),
    name: formatCompanyNameFromFile(file),
  }))
}

const findCompanyFile = async (companyName) => {
  const files = await readCompanyFiles()
  const target = normalizeName(companyName)

  return files.find((file) => normalizeName(file.replace('.json', '')) === target) ?? null
}

export const getCompanyQuestions = async (companyName) => {
  const file = await findCompanyFile(companyName)

  if (!file) {
    return null
  }

  const rawData = await fs.readFile(path.join(companyDataDir, file), 'utf-8')
  const sections = JSON.parse(rawData)

  return {
    id: file.replace('.json', ''),
    name: formatCompanyNameFromFile(file),
    sections,
  }
}

export const getCompanyQuestionsWithoutAnswers = async (companyName) => {
  const company = await getCompanyQuestions(companyName)

  if (!company) {
    return null
  }

  const sections = Object.fromEntries(
    Object.entries(company.sections).map(([sectionName, questions]) => [
      sectionName,
      questions.map(({ correctAnswer, explanation, ...safeQuestion }) => safeQuestion),
    ]),
  )

  return {
    ...company,
    sections,
  }
}
