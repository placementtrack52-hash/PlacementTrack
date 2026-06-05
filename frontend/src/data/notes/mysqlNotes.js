export const mysqlNotes = [
  {
    id: 'mysql-introduction',
    title: 'MySQL Introduction',
    slug: 'mysql-introduction',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d',
    readTime: '10 min read',
    difficulty: 'Beginner',
    description: 'Learn about MySQL relational database management system, features, and setup.',
    companyTags: ['TCS', 'Infosys', 'Cognizant', 'Capgemini'],
    sections: [
      {
        heading: 'What is MySQL?',
        content: `
MySQL is a widely used relational database management system (RDBMS). It is free and open-source software under the terms of the GNU General Public License.
MySQL is developed, distributed, and supported by Oracle Corporation.
        `.trim(),
      },
      {
        heading: 'Key Features of MySQL',
        content: `
• **Relational Model**: Stores data in tables consisting of rows and columns.
• **High Performance & Scalability**: Capable of handling massive databases efficiently.
• **Security**: Strong data protection mechanisms.
• **Connectivity**: Highly compatible with other programming platforms and languages (PHP, Java, Python, Node.js).
        `.trim(),
      }
    ],
    codeExamples: [
      {
        title: 'Create Table in MySQL',
        language: 'sql',
        code: `CREATE TABLE Employees (\n    EmployeeID int NOT NULL AUTO_INCREMENT,\n    LastName varchar(255) NOT NULL,\n    FirstName varchar(255),\n    Age int,\n    PRIMARY KEY (EmployeeID)\n);`,
        output: 'Creates an Employees table with an auto-incrementing Primary Key.'
      }
    ],
    mcqs: [
      {
        question: 'MySQL is owned and distributed by which corporation?',
        options: [
          'Microsoft',
          'Oracle',
          'Google',
          'IBM'
        ],
        answer: 1,
        explanation: 'MySQL is owned, supported, and distributed by Oracle Corporation.'
      }
    ],
    interviewQuestions: [
      {
        question: 'What is the difference between MySQL and SQL?',
        answer: 'SQL (Structured Query Language) is a standard database query language used to manage databases. MySQL is a relational database management system (RDBMS) that uses SQL to execute database operations.'
      }
    ],
    nextTopic: ''
  }
]
