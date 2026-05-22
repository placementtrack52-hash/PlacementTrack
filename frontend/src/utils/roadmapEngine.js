const COMPANIES = {
  'google': 'Google',
  'amazon': 'Amazon',
  'microsoft': 'Microsoft',
  'apple': 'Apple',
  'meta': 'Meta',
  'netflix': 'Netflix',
  'tcs': 'TCS',
  'infosys': 'Infosys',
  'wipro': 'Wipro',
  'accenture': 'Accenture'
}

const ROLES = {
  'frontend': 'Frontend Engineer',
  'backend': 'Backend Engineer',
  'fullstack': 'Full Stack Engineer',
  'devops': 'DevOps Engineer',
  'qa': 'QA Engineer',
  'data-science': 'Data Scientist'
}

const LEVELS = ['Beginner', 'Intermediate', 'Advanced']

const PHASE_CONFIG = {
  Beginner: {
    phases: [
      {
        name: 'Foundation',
        duration: '2-3 weeks',
        focus: 'Core fundamentals and basics'
      },
      {
        name: 'Skill Building',
        duration: '3-4 weeks',
        focus: 'Intermediate concepts and projects'
      },
      {
        name: 'Interview Preparation',
        duration: '2-3 weeks',
        focus: 'Mock interviews and final polish'
      }
    ]
  },
  Intermediate: {
    phases: [
      {
        name: 'DSA Mastery',
        duration: '3-4 weeks',
        focus: 'Data structures and algorithms'
      },
      {
        name: 'System Design Basics',
        duration: '2-3 weeks',
        focus: 'Design patterns and scalability'
      },
      {
        name: 'Interview Excellence',
        duration: '2-3 weeks',
        focus: 'Mock interviews and refinement'
      }
    ]
  },
  Advanced: {
    phases: [
      {
        name: 'System Design Deep Dive',
        duration: '3-4 weeks',
        focus: 'Advanced architecture and design'
      },
      {
        name: 'Advanced DSA & Optimization',
        duration: '2-3 weeks',
        focus: 'Complex algorithms and optimization'
      },
      {
        name: 'Leadership & Communication',
        duration: '2-3 weeks',
        focus: 'Behavioral prep and leadership questions'
      }
    ]
  }
}

const TASK_TEMPLATES = {
  Beginner: {
    'Foundation': [
      'Learn language basics and syntax',
      'Understand core data structures',
      'Practice 5-10 easy problems',
      'Build a simple CRUD project',
      'Study fundamentals of the role'
    ],
    'Skill Building': [
      'Solve medium-level DSA problems',
      'Learn intermediate concepts',
      'Build a portfolio project',
      'Participate in coding contests',
      'Study company tech stack'
    ],
    'Interview Preparation': [
      'Take 3 mock interviews',
      'Practice behavioral questions',
      'Review common interview questions',
      'Polish resume and GitHub',
      'Final project refinement'
    ]
  },
  Intermediate: {
    'DSA Mastery': [
      'Master sorting and searching algorithms',
      'Learn tree and graph algorithms',
      'Solve 50+ medium problems',
      'Study dynamic programming',
      'Practice on LeetCode/CodeChef'
    ],
    'System Design Basics': [
      'Learn database design patterns',
      'Study distributed systems basics',
      'Design 5 simple systems',
      'Learn microservices concepts',
      'Study API design principles'
    ],
    'Interview Excellence': [
      'Take 5 mock interviews',
      'Practice system design discussions',
      'Discuss projects in detail',
      'Handle stress and edge cases',
      'Polish interview delivery'
    ]
  },
  Advanced: {
    'System Design Deep Dive': [
      'Design Netflix/Twitter/Uber scale systems',
      'Learn consistency and availability trade-offs',
      'Study distributed algorithms',
      'Learn caching and CDN strategies',
      'Design multi-region systems'
    ],
    'Advanced DSA & Optimization': [
      'Solve hard-level DSA problems',
      'Optimize space and time complexity',
      'Learn advanced DP techniques',
      'Study competitive programming',
      'Handle edge cases and constraints'
    ],
    'Leadership & Communication': [
      'Practice explaining complex concepts',
      'Answer behavioral questions deeply',
      'Discuss impact and learnings',
      'Handle difficult technical questions',
      'Demonstrate leadership potential'
    ]
  }
}

const SUGGESTIONS = {
  Beginner: [
    'Focus on consistent daily practice for 1-2 hours',
    'Build at least 2-3 real projects to strengthen portfolio',
    'Join online communities and participate in discussions',
    'Don\'t skip fundamentals - they are essential'
  ],
  Intermediate: [
    'Practice 1-2 DSA problems daily with optimal solutions',
    'Contribute to open-source projects',
    'Learn system design with practical examples',
    'Start with mock interviews weekly'
  ],
  Advanced: [
    'Design complex systems and explain trade-offs clearly',
    'Mentor others and improve communication skills',
    'Study company-specific technologies and challenges',
    'Demonstrate problem-solving under pressure'
  ]
}

const calculateReadinessScore = (level) => {
  const baseScores = {
    Beginner: 35,
    Intermediate: 65,
    Advanced: 85
  }
  const variance = Math.random() * 10 - 5
  return Math.min(100, Math.max(0, baseScores[level] + variance))
}

const generateRoadmap = (company, role, level) => {
  const phases = PHASE_CONFIG[level].phases.map((phase, index) => {
    const tasksList = TASK_TEMPLATES[level][phase.name] || []
    return {
      ...phase,
      id: `phase-${index + 1}`,
      number: index + 1,
      tasks: tasksList.map((task, taskIndex) => ({
        id: `task-${index + 1}-${taskIndex + 1}`,
        title: task,
        completed: false,
        priority: taskIndex === 0 ? 'High' : taskIndex === 1 ? 'Medium' : 'Low'
      }))
    }
  })

  const dailyTasks = [
    {
      type: 'DSA Problem',
      title: `Solve 1 ${level === 'Beginner' ? 'Easy' : level === 'Intermediate' ? 'Medium' : 'Hard'} problem`,
      duration: '45 min',
      importance: 'High'
    },
    {
      type: 'Learning',
      title: `Study a new ${role} concept`,
      duration: '30 min',
      importance: 'High'
    },
    {
      type: 'Project Work',
      title: 'Work on portfolio project',
      duration: '60 min',
      importance: level === 'Advanced' ? 'High' : 'Medium'
    }
  ]

  const readinessScore = calculateReadinessScore(level)

  return {
    company: COMPANIES[company] || company,
    role: ROLES[role] || role,
    level,
    readinessScore: Math.round(readinessScore),
    phases,
    dailyTasks,
    suggestions: SUGGESTIONS[level] || [],
    totalDuration: level === 'Beginner' ? '7-10 weeks' : level === 'Intermediate' ? '7-10 weeks' : '7-10 weeks',
    startDate: new Date().toLocaleDateString()
  }
}

export { generateRoadmap, COMPANIES, ROLES, LEVELS }
