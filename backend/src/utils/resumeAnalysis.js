import mammoth from 'mammoth'
import { PDFParse } from 'pdf-parse'

const KEYWORDS = [
  'Java',
  'React',
  'SQL',
  'MongoDB',
  'Node.js',
  'DSA',
  'Python',
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'Express',
  'Git',
  'GitHub',
  'REST API',
  'Next.js',
  'Tailwind',
  'Redux',
  'C++',
  'C',
  'Machine Learning',
  'AWS',
  'Docker',
]

const ACTION_VERBS = [
  'built',
  'developed',
  'created',
  'designed',
  'implemented',
  'optimized',
  'improved',
  'launched',
  'led',
  'engineered',
  'automated',
  'delivered',
  'integrated',
  'collaborated',
  'reduced',
  'increased',
  'analyzed',
]

const SECTION_DEFINITIONS = [
  { id: 'contact', label: 'Contact Information', aliases: ['contact', 'contact information'] },
  { id: 'education', label: 'Education', aliases: ['education', 'academic background', 'academics'] },
  { id: 'skills', label: 'Skills', aliases: ['skills', 'technical skills', 'core skills', 'tech stack'] },
  { id: 'projects', label: 'Projects', aliases: ['projects', 'personal projects', 'academic projects'] },
  { id: 'experience', label: 'Experience', aliases: ['experience', 'work experience', 'internship', 'internships'] },
  { id: 'certifications', label: 'Certifications', aliases: ['certifications', 'certificates', 'licenses'] },
  { id: 'achievements', label: 'Achievements', aliases: ['achievements', 'accomplishments'] },
]

const PRIORITY_KEYWORDS = ['Java', 'React', 'SQL', 'MongoDB', 'Node.js', 'DSA', 'Python', 'TypeScript']

const DEMO_RESUME_TEXT = `
Priya Sharma
priya.sharma.dev@gmail.com | +91 98765 43210
LinkedIn: https://linkedin.com/in/priyasharma-dev
Portfolio: https://priyasharma.dev

Education
B.Tech in Computer Science, XYZ Institute of Technology, 2025
CGPA: 8.6/10

Skills
Java, React, JavaScript, HTML, CSS, SQL, Git, GitHub, Tailwind CSS, REST API

Projects
Smart Placement Tracker
- Built a React dashboard to track company deadlines, coding rounds, and application status for 300+ students.
- Improved task completion visibility by 40% using progress analytics and personalized reminders.

Resume Coach
- Developed a web tool that checks missing resume sections, keyword strength, and ATS formatting issues.
- Added PDF export, score ring visuals, and section-level feedback for faster resume improvement.

Experience
Frontend Intern, Bright Labs
- Implemented reusable UI components with React and Tailwind, reducing page build time by 25%.
- Collaborated with backend developers to integrate REST APIs and improve dashboard responsiveness.
`

const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const normalizeWhitespace = (value = '') =>
  value
    .replace(/\r/g, '')
    .replace(/\u0000/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()

const normalizeHeading = (value = '') =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const parsePdf = async (buffer) => {
  const parser = new PDFParse({ data: buffer })
  try {
    const result = await parser.getText()
    return result.text ?? ''
  } finally {
    await parser.destroy()
  }
}

const parseDocx = async (buffer) => {
  const result = await mammoth.extractRawText({ buffer })
  return result.value ?? ''
}

const getNameFromText = (text) => {
  const firstMeaningfulLine = text
    .split('\n')
    .map((line) => line.trim())
    .find((line) => line && !/@/.test(line) && !/\d{6,}/.test(line) && !/^https?:\/\//i.test(line))

  if (!firstMeaningfulLine) return 'Candidate'
  return firstMeaningfulLine.split('|')[0].trim()
}

const extractLinks = (text) => {
  const matches = text.match(/https?:\/\/[^\s)]+/gi) ?? []
  const github = matches.find((link) => /github\.com/i.test(link)) ?? null
  const linkedin = matches.find((link) => /linkedin\.com/i.test(link)) ?? null
  const portfolio = matches.find((link) => !/github\.com|linkedin\.com/i.test(link)) ?? null

  return {
    all: matches,
    github,
    linkedin,
    portfolio,
  }
}

const extractSectionBlocks = (text) => {
  const lines = text.split('\n')
  const headings = []

  lines.forEach((line, index) => {
    const normalizedLine = normalizeHeading(line)
    const match = SECTION_DEFINITIONS.find((section) =>
      section.aliases.some((alias) => {
        const normalizedAlias = normalizeHeading(alias)
        return (
          normalizedLine === normalizedAlias ||
          normalizedLine.startsWith(`${normalizedAlias} `) ||
          normalizedLine.startsWith(`${normalizedAlias}:`)
        )
      }),
    )

    if (match) {
      headings.push({ id: match.id, label: match.label, index })
    }
  })

  const blocks = {}
  headings.forEach((heading, idx) => {
    const nextIndex = headings[idx + 1]?.index ?? lines.length
    const content = lines
      .slice(heading.index + 1, nextIndex)
      .join('\n')
      .trim()

    if (content) {
      blocks[heading.id] = content
    }
  })

  return blocks
}

const countKeywordMatches = (text) =>
  KEYWORDS.map((keyword) => {
    const pattern = new RegExp(`\\b${escapeRegex(keyword).replace(/\\ /g, '\\s+')}\\b`, 'gi')
    const matches = text.match(pattern) ?? []
    return {
      keyword,
      count: matches.length,
    }
  })

const scoreKeywordStrength = (detectedCount) => {
  if (detectedCount >= 10) return 'Strong'
  if (detectedCount >= 6) return 'Good'
  if (detectedCount >= 3) return 'Moderate'
  return 'Needs work'
}

const getParagraphs = (text) =>
  text
    .split(/\n\s*\n/g)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)

const getBulletLines = (text) =>
  text
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => /^[-*•]/.test(line))

const getActionVerbCount = (text) => {
  const lower = text.toLowerCase()
  return ACTION_VERBS.reduce((count, verb) => count + (lower.match(new RegExp(`\\b${verb}\\b`, 'g'))?.length ?? 0), 0)
}

const getSectionPresence = (blocks, basics) => {
  const hasContactBasics = Boolean(basics.email && basics.phone)

  return [
    { id: 'education', label: 'Education', present: Boolean(blocks.education) },
    { id: 'skills', label: 'Skills', present: Boolean(blocks.skills) },
    { id: 'projects', label: 'Projects', present: Boolean(blocks.projects) },
    { id: 'experience', label: 'Experience', present: Boolean(blocks.experience) },
    { id: 'certifications', label: 'Certifications', present: Boolean(blocks.certifications) },
    { id: 'contact', label: 'Contact Information', present: hasContactBasics },
  ]
}

const buildIssue = (id, label, status, message) => ({ id, label, status, message })

const unique = (items) => [...new Set(items.filter(Boolean))]

const buildSuggestions = ({
  missingSections,
  keywordMissing,
  atsIssues,
  qualityIssues,
  basics,
  measurableAchievementCount,
}) => {
  const suggestions = []

  missingSections.forEach((section) => {
    suggestions.push(`Add a clear ${section.label.toLowerCase()} section so ATS systems can classify your resume correctly.`)
  })

  if (!basics.links.github) {
    suggestions.push('Add your GitHub profile link to strengthen technical credibility for placement reviews.')
  }

  if (!basics.links.linkedin) {
    suggestions.push('Include a LinkedIn URL so recruiters can verify your professional profile quickly.')
  }

  if (keywordMissing.length > 0) {
    suggestions.push(`Include relevant placement keywords like ${keywordMissing.slice(0, 4).join(', ')} where they genuinely match your work.`)
  }

  if (measurableAchievementCount === 0) {
    suggestions.push('Add measurable outcomes such as percentages, users, or performance gains to make impact visible.')
  }

  if (atsIssues.some((issue) => issue.id === 'long-paragraphs' && issue.status !== 'pass')) {
    suggestions.push('Break long paragraphs into short bullets so ATS parsing and recruiter scanning both improve.')
  }

  if (qualityIssues.some((issue) => issue.id === 'action-language' && issue.status !== 'pass')) {
    suggestions.push('Start project and experience bullets with strong action verbs like built, implemented, optimized, or improved.')
  }

  return unique(suggestions).slice(0, 6)
}

const getStrengthLabel = (score) => {
  if (score >= 85) return 'Strong Resume'
  if (score >= 70) return 'Good Resume'
  if (score >= 55) return 'Promising Resume'
  return 'Needs Improvement'
}

const getPlacementReadiness = (score) => {
  if (score >= 85) {
    return {
      label: 'Placement Ready',
      summary: 'Your resume looks competitive for most student placement shortlisting flows.',
    }
  }

  if (score >= 70) {
    return {
      label: 'Almost Ready',
      summary: 'A few focused improvements can make this resume more shortlist-friendly.',
    }
  }

  return {
    label: 'Needs Revision',
    summary: 'Fix missing structure and keyword gaps before using this resume for major applications.',
  }
}

export const parseResumeFile = async (file) => {
  if (!file?.buffer?.length) {
    throw new Error('Uploaded file is empty.')
  }

  const mimeType = file.mimetype ?? ''
  const extension = file.originalname?.split('.').pop()?.toLowerCase()

  if (mimeType.includes('pdf') || extension === 'pdf') {
    return parsePdf(file.buffer)
  }

  if (
    mimeType.includes('wordprocessingml.document') ||
    extension === 'docx'
  ) {
    return parseDocx(file.buffer)
  }

  throw new Error('Only PDF and DOCX resumes are supported.')
}

export const analyzeResumeText = ({ text, fileName = 'Demo resume', mimeType = 'text/plain', source = 'upload', rawBuffer }) => {
  const normalizedText = normalizeWhitespace(text)
  const lowerText = normalizedText.toLowerCase()
  const words = normalizedText ? normalizedText.split(/\s+/).filter(Boolean) : []
  const lines = normalizedText.split('\n').map((line) => line.trim()).filter(Boolean)
  const paragraphs = getParagraphs(normalizedText)
  const bulletLines = getBulletLines(normalizedText)
  const sectionBlocks = extractSectionBlocks(normalizedText)

  const email = normalizedText.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0] ?? null
  const phone = normalizedText.match(/(?:\+?\d{1,3}[\s-]?)?(?:\(?\d{3,4}\)?[\s-]?)?\d{3}[\s-]?\d{4}/)?.[0] ?? null
  const links = extractLinks(normalizedText)
  const basics = {
    name: getNameFromText(normalizedText),
    email,
    phone,
    links,
  }

  const sectionPresence = getSectionPresence(sectionBlocks, basics)
  const missingSections = sectionPresence.filter((section) => !section.present)

  const keywordCounts = countKeywordMatches(normalizedText)
  const detectedKeywords = keywordCounts.filter((entry) => entry.count > 0)
  const matchedPriorityKeywords = PRIORITY_KEYWORDS.filter((keyword) =>
    detectedKeywords.some((entry) => entry.keyword === keyword),
  )
  const missingKeywords = PRIORITY_KEYWORDS.filter(
    (keyword) => !detectedKeywords.some((entry) => entry.keyword === keyword),
  )
  const keywordMatchPercent = Math.round((matchedPriorityKeywords.length / PRIORITY_KEYWORDS.length) * 100)
  const keywordStrength = scoreKeywordStrength(detectedKeywords.length)

  const longParagraphs = paragraphs.filter((paragraph) => paragraph.split(/\s+/).length > 110)
  const actionVerbCount = getActionVerbCount(normalizedText)
  const measurableAchievementCount = (normalizedText.match(/\b\d+(?:\.\d+)?%?\+?\b/g) ?? []).length
  const tableLikeLineCount = lines.filter((line) => /\|/.test(line) || / {4,}/.test(line) || /\t/.test(line)).length
  const colorSignalCount = rawBuffer ? (rawBuffer.toString('latin1').match(/(?:\srg\s|\sRG\s|w:color|fillcolor|strokecolor)/gi) ?? []).length : 0
  const projectLineCount = (sectionBlocks.projects?.split('\n').filter(Boolean).length ?? 0)
  const experienceLineCount = (sectionBlocks.experience?.split('\n').filter(Boolean).length ?? 0)

  const atsChecks = [
    buildIssue(
      'colors',
      'Excessive Colors',
      colorSignalCount > 12 ? 'warn' : 'pass',
      colorSignalCount > 12 ? 'Heavy color styling can hurt ATS readability. Prefer cleaner formatting.' : 'Formatting appears ATS-friendly from a styling perspective.',
    ),
    buildIssue(
      'long-paragraphs',
      'Long Paragraphs',
      longParagraphs.length > 0 ? 'warn' : 'pass',
      longParagraphs.length > 0 ? 'Long text blocks were found. Break them into short bullets for better scanability.' : 'Content is reasonably broken into scannable chunks.',
    ),
    buildIssue(
      'links',
      'Professional Links',
      links.all.length === 0 ? 'fail' : !links.github || !links.linkedin ? 'warn' : 'pass',
      links.all.length === 0
        ? 'No professional links were detected.'
        : !links.github || !links.linkedin
          ? 'Some important profile links are missing.'
          : 'Linked profiles were detected clearly.',
    ),
    buildIssue(
      'tables',
      'Table-heavy Layout',
      tableLikeLineCount >= 6 ? 'warn' : 'pass',
      tableLikeLineCount >= 6 ? 'The resume may rely on table-like formatting, which some ATS systems parse poorly.' : 'No strong table-heavy formatting signals were detected.',
    ),
    buildIssue(
      'action-verbs',
      'Action Verbs',
      actionVerbCount < 4 ? 'warn' : 'pass',
      actionVerbCount < 4 ? 'Use stronger action-led bullet points to improve recruiter readability.' : 'Action-oriented language is present.',
    ),
  ]

  const pageEstimate = Number((words.length / 500).toFixed(1))
  const qualityChecks = [
    buildIssue(
      'length',
      'Resume Length',
      words.length < 250 ? 'warn' : words.length > 900 ? 'warn' : 'pass',
      words.length < 250
        ? 'The resume feels short for a placement-ready profile. Add stronger project and experience detail.'
        : words.length > 900
          ? 'The resume may be too long. Tighten content for a more focused one-page experience.'
          : 'Resume length is in a healthy range for student applications.',
    ),
    buildIssue(
      'project-depth',
      'Project Depth',
      projectLineCount < 4 ? 'warn' : 'pass',
      projectLineCount < 4 ? 'Projects need stronger description depth and impact bullets.' : 'Projects include enough supporting detail.',
    ),
    buildIssue(
      'experience-depth',
      'Experience Depth',
      experienceLineCount === 0 ? 'warn' : experienceLineCount < 3 ? 'warn' : 'pass',
      experienceLineCount === 0 ? 'No experience or internship section was found.' : experienceLineCount < 3 ? 'Experience can be expanded with clearer outcomes and responsibilities.' : 'Experience content has reasonable detail.',
    ),
    buildIssue(
      'measurable-impact',
      'Measurable Achievements',
      measurableAchievementCount === 0 ? 'warn' : measurableAchievementCount >= 4 ? 'pass' : 'warn',
      measurableAchievementCount === 0
        ? 'No measurable achievements were detected.'
        : measurableAchievementCount >= 4
          ? 'Good use of metrics and quantified outcomes.'
          : 'Add more measurable impact statements to strengthen credibility.',
    ),
    buildIssue(
      'action-language',
      'Action-oriented Language',
      actionVerbCount >= 6 ? 'pass' : actionVerbCount >= 3 ? 'warn' : 'fail',
      actionVerbCount >= 6
        ? 'Bullets use strong action language.'
        : actionVerbCount >= 3
          ? 'Action language is present but can be stronger.'
          : 'Most bullet points are not action-driven yet.',
    ),
  ]

  const sectionScore = sectionPresence.reduce((sum, section) => sum + (section.present ? 5 : 0), 0)
  const keywordScore = Math.min(25, detectedKeywords.length * 3 + (missingKeywords.length <= 2 ? 4 : 0))
  const atsScore = Math.max(0, 20 - atsChecks.reduce((sum, issue) => sum + (issue.status === 'fail' ? 6 : issue.status === 'warn' ? 3 : 0), 0))
  const qualityScore = Math.max(0, 25 - qualityChecks.reduce((sum, issue) => sum + (issue.status === 'fail' ? 8 : issue.status === 'warn' ? 4 : 0), 0))
  const overallScore = Math.max(0, Math.min(100, sectionScore + keywordScore + atsScore + qualityScore))

  const suggestions = buildSuggestions({
    missingSections,
    keywordMissing: missingKeywords,
    atsIssues: atsChecks,
    qualityIssues: qualityChecks,
    basics,
    measurableAchievementCount,
  })

  return {
    source,
    fileName,
    mimeType,
    score: overallScore,
    strengthLabel: getStrengthLabel(overallScore),
    placementReadiness: getPlacementReadiness(overallScore),
    extracted: {
      name: basics.name,
      email: basics.email,
      phone: basics.phone,
      skills: detectedKeywords.map((entry) => entry.keyword),
      education: sectionBlocks.education ? [sectionBlocks.education.split('\n')[0]] : [],
      projects: sectionBlocks.projects ? sectionBlocks.projects.split('\n').filter(Boolean).slice(0, 4) : [],
      experience: sectionBlocks.experience ? sectionBlocks.experience.split('\n').filter(Boolean).slice(0, 4) : [],
      links: basics.links.all,
    },
    metrics: {
      wordCount: words.length,
      lineCount: lines.length,
      bulletCount: bulletLines.length,
      pageEstimate,
      actionVerbCount,
      measurableAchievementCount,
    },
    sectionChecks: sectionPresence,
    missingSections: missingSections.map((section) => section.label),
    keywordAnalysis: {
      detected: detectedKeywords,
      missing: missingKeywords,
      strength: keywordStrength,
      matchPercent: keywordMatchPercent,
    },
    atsChecks,
    qualityChecks,
    suggestions,
    tips: [
      'Keep your resume to one focused page if you are an early-career student.',
      'Use bullet points over long paragraphs wherever possible.',
      'Mirror placement-relevant keywords from the roles you are applying for.',
      'Make GitHub, LinkedIn, and portfolio links easy to find in the header.',
    ],
    breakdown: [
      { label: 'Required Sections', score: sectionScore, maxScore: 30, tone: 'amber' },
      { label: 'Keyword Match', score: keywordScore, maxScore: 25, tone: 'sky' },
      { label: 'ATS Compatibility', score: atsScore, maxScore: 20, tone: 'emerald' },
      { label: 'Resume Quality', score: qualityScore, maxScore: 25, tone: 'violet' },
    ],
  }
}

export const getDemoResumeAnalysis = () =>
  analyzeResumeText({
    text: DEMO_RESUME_TEXT,
    fileName: 'demo-placement-resume.txt',
    source: 'demo',
  })
