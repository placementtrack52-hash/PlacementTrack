export const phpNotes = [
  {
    id: 'php-introduction',
    title: 'PHP Introduction',
    slug: 'php-introduction',
    image: 'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667',
    readTime: '10 min read',
    difficulty: 'Beginner',
    description: 'Learn PHP server-side scripting basics, syntax, echo/print, and variables.',
    companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini'],
    sections: [
      {
        heading: 'What is PHP?',
        content: `
PHP is an acronym for **PHP: Hypertext Preprocessor**. It is a widely-used, open-source server-side scripting language.
PHP scripts are executed on the server, and the result is returned to the browser as plain HTML.
        `.trim(),
      },
      {
        heading: 'Key Features of PHP',
        content: `
• **Server-side**: Executed entirely on the web server before delivery.
• **Database Integration**: Supports databases like MySQL, Oracle, Sybase, PostgreSQL, etc.
• **Easy to Learn**: Simple syntax inspired by C, Java, and Perl.
• **Platform Independent**: Runs on Windows, Linux, Unix, macOS, etc.
        `.trim(),
      }
    ],
    codeExamples: [
      {
        title: 'Basic PHP Script',
        language: 'php',
        code: `<?php\necho "Hello, PHP!";\n?>`,
        output: 'Hello, PHP!'
      }
    ],
    mcqs: [
      {
        question: 'What does PHP stand for?',
        options: [
          'Personal Hypertext Processor',
          'Private Home Page',
          'PHP: Hypertext Preprocessor',
          'Preprocessed Hypertext Pages'
        ],
        answer: 2,
        explanation: 'PHP is a recursive acronym standing for PHP: Hypertext Preprocessor.'
      }
    ],
    interviewQuestions: [
      {
        question: 'How do you declare variables in PHP?',
        answer: 'Variables in PHP are declared using a dollar sign ($) followed by the name of the variable (e.g., $txt = "Hello World";).'
      }
    ],
    nextTopic: ''
  }
]
