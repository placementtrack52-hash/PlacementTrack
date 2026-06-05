export const mongodbNotes = [
  {
    id: 'mongodb-introduction',
    title: 'MongoDB Introduction',
    slug: 'mongodb-introduction',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d',
    readTime: '12 min read',
    difficulty: 'Beginner',
    description: 'Learn MongoDB NoSQL database fundamentals, collections, documents, and CRUD operations.',
    companyTags: ['Amazon', 'Microsoft', 'Accenture', 'Cognizant'],
    sections: [
      {
        heading: 'What is MongoDB?',
        content: `
MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.
MongoDB is developed by MongoDB Inc.
        `.trim(),
      },
      {
        heading: 'SQL vs NoSQL (MongoDB)',
        content: `
• **Table vs Collection**: In SQL, data is stored in tables. In MongoDB, data is stored in collections.
• **Row vs Document**: In SQL, records are rows. In MongoDB, records are JSON-like documents.
• **Column vs Field**: In SQL, columns define attributes. In MongoDB, fields define dynamic key-value pairs.
        `.trim(),
      }
    ],
    codeExamples: [
      {
        title: 'Insert Document in MongoDB',
        language: 'javascript',
        code: `db.users.insertOne({\n    name: "John Doe",\n    age: 30,\n    skills: ["JavaScript", "MongoDB"]\n});`,
        output: 'Inserts one document into the users collection with an auto-generated _id.'
      }
    ],
    mcqs: [
      {
        question: 'MongoDB stores data in which format?',
        options: [
          'SQL Tables',
          'BSON (Binary JSON)',
          'XML Files',
          'CSV Sheets'
        ],
        answer: 1,
        explanation: 'MongoDB stores documents internally in BSON format, which is a binary representation of JSON.'
      }
    ],
    interviewQuestions: [
      {
        question: 'What is a Document in MongoDB?',
        answer: 'A document is a set of key-value pairs. It has a dynamic schema, which means documents in the same collection do not need to have the same set of fields or structure.'
      }
    ],
    nextTopic: ''
  }
]
