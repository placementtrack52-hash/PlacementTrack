export const dbmsNotes = [
  {
    id: 'dbms-introduction',
    title: 'DBMS Introduction',
    slug: 'dbms-introduction',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d',
    readTime: '12 min read',
    difficulty: 'Beginner',
    description: 'Learn database management systems, characteristics, schemas, architecture, and ACID properties.',
    companyTags: ['TCS', 'Wipro', 'Infosys', 'Accenture', 'Cognizant'],
    sections: [
      {
        heading: 'What is DBMS?',
        content: `
A **Database Management System (DBMS)** is software used to store, retrieve, define, and manage data in a database.
It serves as an interface between the database and its end-users or programs, ensuring that data is consistently organized and remains easily accessible.
        `.trim(),
      },
      {
        heading: 'ACID Properties in DBMS',
        content: `
To maintain integrity, a DBMS must adhere to **ACID** properties during database transactions:
• **Atomicity**: Either the entire transaction succeeds or none of it does.
• **Consistency**: Transaction transforms database from one valid state to another.
• **Isolation**: Multiple transactions can execute concurrently without interfering.
• **Durability**: Committed data is stored permanently even in system crashes.
        `.trim(),
      }
    ],
    codeExamples: [
      {
        title: 'SQL Transaction Example',
        language: 'sql',
        code: `START TRANSACTION;\nUPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 1;\nUPDATE Accounts SET Balance = Balance + 100 WHERE AccountID = 2;\nCOMMIT;`,
        output: 'Executes bank transfer safely as an atomic transaction block.'
      }
    ],
    mcqs: [
      {
        question: 'Which of the following properties ensures a transaction is all-or-nothing?',
        options: [
          'Consistency',
          'Isolation',
          'Durability',
          'Atomicity'
        ],
        answer: 3,
        explanation: 'Atomicity ensures that all operations within a transaction are completed successfully, or the database is rolled back to its original state.'
      }
    ],
    interviewQuestions: [
      {
        question: 'What is the difference between DBMS and RDBMS?',
        answer: 'DBMS stores data as files and does not enforce relations between tables. RDBMS (Relational DBMS) stores data in tabular format (rows and columns) and enforces integrity constraints like primary/foreign keys.'
      }
    ],
    nextTopic: ''
  }
]
