export const resolveCoachSubjectId = (subjectId) => {
  const map = {
    aptitude: 'aptitude',
    verbal: 'verbal',
    reasoning: 'reasoning',
    technical: 'technical',
    'interview-question': 'interviewquestion',
    code: 'codelearning',
    pyq: 'companypyq',
    projects: 'projects',
    'company-prep': 'companywiseprep',
  }
  return map[subjectId] ?? subjectId?.replace(/-/g, '') ?? 'aptitude'
}

export const SUBJECT_ACCENT_HEX = {
  aptitude: '#FFF3CD',
  verbal: '#E8F4FD',
  reasoning: '#E0F2FE',
  technical: '#E8EAF6',
  'interview-question': '#FCE4EC',
  codelearning: '#E8F5E9',
  companywiseprep: '#E3F2FD',
  companypyq: '#FFF8E1',
  projects: '#F3E5F5',
}

export const getAccentColor = (subjectId, accentColorProp) =>
  accentColorProp ?? SUBJECT_ACCENT_HEX[resolveCoachSubjectId(subjectId)] ?? '#FFF3CD'
