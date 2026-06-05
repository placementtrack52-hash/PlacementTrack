export const sqlNotes = [
  {
    id: 'sql-introduction',
    title: 'SQL Introduction',
    slug: 'sql-introduction',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d',
    readTime: '10 min read',
    difficulty: 'Beginner',
    description: 'Learn SQL fundamentals, database basics, tables, and CRUD queries.',
    companyTags: ['TCS', 'Infosys', 'Accenture', 'Cognizant', 'Capgemini'],
    sections: [
      {
        heading: 'What is SQL?',
        content: `
SQL stands for **Structured Query Language**. It is a standard language for accessing and manipulating databases.
SQL is ANSI/ISO standard, but there are different versions of the SQL language (e.g. MySQL, SQL Server, Oracle, PostgreSQL).
        `.trim(),
      },
      {
        heading: 'What can SQL do?',
        content: `
• SQL can execute queries against a database
• SQL can retrieve data from a database
• SQL can insert records in a database
• SQL can update records in a database
• SQL can delete records from a database
• SQL can create new databases
• SQL can create new tables in a database
        `.trim(),
      }
    ],
    codeExamples: [
      {
        title: 'Select All Customers',
        language: 'sql',
        code: `SELECT * FROM Customers;`,
        output: 'Fetches all columns and rows from the Customers table.'
      }
    ],
    mcqs: [
      {
        question: 'What does SQL stand for?',
        options: [
          'Structured Query Language',
          'Structured Question Language',
          'Strong Query Language',
          'Sequential Query Language'
        ],
        answer: 0,
        explanation: 'SQL stands for Structured Query Language.'
      }
    ],
    interviewQuestions: [
      {
        question: 'What is a Primary Key?',
        answer: 'A Primary Key is a unique identifier for a record in a database table. It must contain unique values and cannot contain NULL values.'
      }
    ],
    nextTopic: ''
  }
]
