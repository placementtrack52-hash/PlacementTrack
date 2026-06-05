export const gitNotes = [
  {
    id: 'git-introduction',
    title: 'Git & Version Control',
    slug: 'git-introduction',
    image: 'https://images.unsplash.com/photo-1556075798-482a134b1553',
    readTime: '10 min read',
    difficulty: 'Beginner',
    description: 'Learn Git version control fundamentals, repository setups, commits, branching, and collaboration.',
    companyTags: ['Google', 'Microsoft', 'Amazon', 'TCS', 'Infosys'],
    sections: [
      {
        heading: 'What is Git?',
        content: `
Git is a free and open-source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
It was created by Linus Torvalds in 2005 for development of the Linux kernel.
        `.trim(),
      },
      {
        heading: 'Key Git Workflow Concepts',
        content: `
• **Working Directory**: The local folder where you modify files.
• **Staging Area (Index)**: A file/area where you list changes that will go into the next commit.
• **Local Repository**: The stored database of historical commits locally (.git folder).
• **Remote Repository**: The hosted database online (e.g. GitHub, GitLab, Bitbucket).
        `.trim(),
      }
    ],
    codeExamples: [
      {
        title: 'Basic Git Setup & Commit',
        language: 'bash',
        code: `git init\ngit add .\ngit commit -m "Initial commit"\ngit status`,
        output: 'Initializes repository, stages all files, creates commit, and displays clean status.'
      }
    ],
    mcqs: [
      {
        question: 'Which command is used to record file snapshots in the version history?',
        options: [
          'git add',
          'git commit',
          'git log',
          'git push'
        ],
        answer: 1,
        explanation: 'git commit registers staging area snapshots into the local database history.'
      }
    ],
    interviewQuestions: [
      {
        question: 'What is the difference between git fetch and git pull?',
        answer: 'git fetch downloads commits from remote branch but does not merge them into your local branch. git pull runs git fetch followed by git merge to combine changes immediately.'
      }
    ],
    nextTopic: ''
  }
]
