import tcsQuestions from '../../data/companyPrep/tcs.json'
import wiproQuestions from '../../data/companyPrep/wipro.json'
import accentureQuestions from '../../data/companyPrep/accenture.json'
import amazonQuestions from '../../data/companyPrep/amazon.json'
import infosysQuestions from '../../data/companyPrep/infosys.json'
import cognizantQuestions from '../../data/companyPrep/cognizant.json'
import capgeminiQuestions from '../../data/companyPrep/capgemini.json'
import hcltechQuestions from '../../data/companyPrep/hcltech.json'
import techMahindraQuestions from '../../data/companyPrep/tech-mahindra.json'
import ltiMindtreeQuestions from '../../data/companyPrep/lti-mindtree.json'
import mphasysQuestions from '../../data/companyPrep/mphasis.json'
import zohoQuestions from '../../data/companyPrep/zoho.json'
import sapQuestions from '../../data/companyPrep/sap.json'
import oracleQuestions from '../../data/companyPrep/oracle.json'
import ciscoQuestions from '../../data/companyPrep/cisco.json'
import ibmQuestions from '../../data/companyPrep/ibm.json'
import freshworksQuestions from '../../data/companyPrep/freshworks.json'
import paytmQuestions from '../../data/companyPrep/paytm.json'
import phonepeQuestions from '../../data/companyPrep/phonepe.json'
import razorpayQuestions from '../../data/companyPrep/razorpay.json'
import technicalQuestions from '../../data/companyPrep/technical.json'

export type SectionKey = 'aptitude' | 'reasoning' | 'verbal' | 'technical'
export type TechnicalTopicKey = 'python' | 'c' | 'c++' | 'java' | 'sql'
export type CompanyName = 'TCS' | 'Wipro' | 'Accenture' | 'Amazon' | 'Infosys' | 'Cognizant' | 'Capgemini' | 'HCLTech' | 'Tech Mahindra' | 'LTI Mindtree' | 'Mphasis' | 'Zoho' | 'SAP' | 'Oracle' | 'Cisco' | 'IBM' | 'Freshworks' | 'Paytm' | 'PhonePe' | 'Razorpay'

export interface Question {
  questionId: string
  question: string
  options: string[]
  correctAnswer: string
  explanation: string
}

export interface CompanySections {
  aptitude: Question[]
  reasoning: Question[]
  verbal: Question[]
  technical: TechnicalQuestionGroups
}

export type TechnicalQuestionGroups = Record<TechnicalTopicKey, Question[]>

export const technicalTopicLabels: Record<TechnicalTopicKey, string> = {
  python: 'Python',
  c: 'C',
  'c++': 'C++',
  java: 'Java',
  sql: 'SQL',
}

export const companyData: Record<CompanyName, CompanySections> = {
  TCS: { ...(tcsQuestions as Omit<CompanySections, 'technical'>), technical: technicalQuestions as TechnicalQuestionGroups },
  Wipro: { ...(wiproQuestions as Omit<CompanySections, 'technical'>), technical: technicalQuestions as TechnicalQuestionGroups },
  Accenture: { ...(accentureQuestions as Omit<CompanySections, 'technical'>), technical: technicalQuestions as TechnicalQuestionGroups },
  Amazon: { ...(amazonQuestions as Omit<CompanySections, 'technical'>), technical: technicalQuestions as TechnicalQuestionGroups },
  Infosys: { ...(infosysQuestions as Omit<CompanySections, 'technical'>), technical: technicalQuestions as TechnicalQuestionGroups },
  Cognizant: { ...(cognizantQuestions as unknown as Omit<CompanySections, 'technical'>), technical: technicalQuestions as TechnicalQuestionGroups },
  Capgemini: { ...(capgeminiQuestions as Omit<CompanySections, 'technical'>), technical: technicalQuestions as TechnicalQuestionGroups },
  HCLTech: { ...(hcltechQuestions as Omit<CompanySections, 'technical'>), technical: technicalQuestions as TechnicalQuestionGroups },
  'Tech Mahindra': { ...(techMahindraQuestions as Omit<CompanySections, 'technical'>), technical: technicalQuestions as TechnicalQuestionGroups },
  'LTI Mindtree': { ...(ltiMindtreeQuestions as Omit<CompanySections, 'technical'>), technical: technicalQuestions as TechnicalQuestionGroups },
  Mphasis: { ...(mphasysQuestions as Omit<CompanySections, 'technical'>), technical: technicalQuestions as TechnicalQuestionGroups },
  Zoho: { ...(zohoQuestions as Omit<CompanySections, 'technical'>), technical: technicalQuestions as TechnicalQuestionGroups },
  SAP: { ...(sapQuestions as Omit<CompanySections, 'technical'>), technical: technicalQuestions as TechnicalQuestionGroups },
  Oracle: { ...(oracleQuestions as Omit<CompanySections, 'technical'>), technical: technicalQuestions as TechnicalQuestionGroups },
  Cisco: { ...(ciscoQuestions as Omit<CompanySections, 'technical'>), technical: technicalQuestions as TechnicalQuestionGroups },
  IBM: { ...(ibmQuestions as Omit<CompanySections, 'technical'>), technical: technicalQuestions as TechnicalQuestionGroups },
  Freshworks: { ...(freshworksQuestions as Omit<CompanySections, 'technical'>), technical: technicalQuestions as TechnicalQuestionGroups },
  Paytm: { ...(paytmQuestions as Omit<CompanySections, 'technical'>), technical: technicalQuestions as TechnicalQuestionGroups },
  PhonePe: { ...(phonepeQuestions as Omit<CompanySections, 'technical'>), technical: technicalQuestions as TechnicalQuestionGroups },
  Razorpay: { ...(razorpayQuestions as Omit<CompanySections, 'technical'>), technical: technicalQuestions as TechnicalQuestionGroups },
}

export const companyCards: Array<{
  name: CompanyName
  tagline: string
  accent: string
  icon: string
}> = [
  {
    name: 'TCS',
    tagline: 'Balanced rounds with speed-focused aptitude and communication.',
    accent: 'from-sky-500/20 via-white to-cyan-100',
    icon: 'T',
  },
  {
    name: 'Wipro',
    tagline: 'Quant + reasoning emphasis with clean fundamentals.',
    accent: 'from-emerald-500/20 via-white to-emerald-100',
    icon: 'W',
  },
  {
    name: 'Accenture',
    tagline: 'Business-style verbal sections and logic-heavy screening.',
    accent: 'from-orange-500/20 via-white to-amber-100',
    icon: 'A',
  },
  {
    name: 'Amazon',
    tagline: 'Sharper timed rounds that reward accuracy under pressure.',
    accent: 'from-slate-300 via-white to-yellow-100',
    icon: 'Am',
  },
  {
    name: 'Infosys',
    tagline: 'Structured test with strong verbal and analytical focus.',
    accent: 'from-blue-500/20 via-white to-blue-100',
    icon: 'I',
  },
  {
    name: 'Cognizant',
    tagline: 'Comprehensive rounds balancing all three core sections.',
    accent: 'from-indigo-500/20 via-white to-indigo-100',
    icon: 'C',
  },
  {
    name: 'Capgemini',
    tagline: 'Fast-paced aptitude with emphasis on problem-solving skills.',
    accent: 'from-[#e6007e]/20 via-white to-pink-100',
    icon: 'Cg',
  },
  {
    name: 'HCLTech',
    tagline: 'Balanced assessment across reasoning and communication.',
    accent: 'from-red-500/20 via-white to-red-100',
    icon: 'HCL',
  },
  {
    name: 'Tech Mahindra',
    tagline: 'Practical questions focused on real-world applications.',
    accent: 'from-purple-500/20 via-white to-purple-100',
    icon: 'TM',
  },
  {
    name: 'LTI Mindtree',
    tagline: 'Mix of analytical, reasoning and communication excellence.',
    accent: 'from-teal-500/20 via-white to-teal-100',
    icon: 'LMT',
  },
  {
    name: 'Mphasis',
    tagline: 'Technical depth with strong focus on logical reasoning.',
    accent: 'from-cyan-500/20 via-white to-cyan-100',
    icon: 'M',
  },
  {
    name: 'Zoho',
    tagline: 'SAAS leader focusing on scalable algorithms and product thinking.',
    accent: 'from-[#1B4965]/20 via-white to-blue-100',
    icon: 'Z',
  },
  {
    name: 'SAP',
    tagline: 'Enterprise software expertise with process optimization.',
    accent: 'from-[#0052CC]/20 via-white to-blue-100',
    icon: 'SAP',
  },
  {
    name: 'Oracle',
    tagline: 'Database mastery with complex data structure challenges.',
    accent: 'from-red-600/20 via-white to-red-100',
    icon: 'O',
  },
  {
    name: 'Cisco',
    tagline: 'Networking fundamentals with systems thinking emphasis.',
    accent: 'from-[#1BA0E2]/20 via-white to-cyan-100',
    icon: 'Cs',
  },
  {
    name: 'IBM',
    tagline: 'Legacy systems expertise with strong technical depth.',
    accent: 'from-blue-700/20 via-white to-blue-100',
    icon: 'IBM',
  },
  {
    name: 'Freshworks',
    tagline: 'Customer success platform with user-centric design focus.',
    accent: 'from-orange-500/20 via-white to-orange-100',
    icon: 'FW',
  },
  {
    name: 'Paytm',
    tagline: 'Digital payments innovation with fintech problem-solving.',
    accent: 'from-blue-500/20 via-white to-blue-100',
    icon: 'PT',
  },
  {
    name: 'PhonePe',
    tagline: 'UPI ecosystem mastery with transaction processing expertise.',
    accent: 'from-purple-500/20 via-white to-purple-100',
    icon: 'PP',
  },
  {
    name: 'Razorpay',
    tagline: 'Payment gateway solutions with API integration focus.',
    accent: 'from-indigo-500/20 via-white to-indigo-100',
    icon: 'RP',
  },
]
