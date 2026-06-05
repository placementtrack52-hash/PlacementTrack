export const javascriptNotes = [
  {
    id: 'javascript-introduction',
    title: 'JavaScript Introduction',
    slug: 'javascript-introduction',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a',
    readTime: '15 min read',
    difficulty: 'Beginner',
    description: 'Learn the fundamentals of JavaScript, variables, data types, and functions.',
    companyTags: ['Amazon', 'Wipro', 'Accenture', 'TCS'],
    sections: [
      {
        heading: 'What is JavaScript?',
        content: `
JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js.
        `.trim(),
      },
      {
        heading: 'Variables and Scope',
        content: `
JavaScript variables can be declared using:
• \`var\`: Declares a function-scoped or globally-scoped variable (older way).
• \`let\`: Declares a block-scoped local variable.
• \`const\`: Declares a block-scoped read-only named constant.
        `.trim(),
      }
    ],
    codeExamples: [
      {
        title: 'JavaScript Variables and Function',
        language: 'javascript',
        code: `const name = 'JavaScript';\nfunction greet(lang) {\n    return 'Hello, ' + lang;\n}\nconsole.log(greet(name));`,
        output: 'Hello, JavaScript'
      }
    ],
    mcqs: [
      {
        question: 'Which keyword is used to declare a block-scoped variable in JavaScript?',
        options: [
          'var',
          'let',
          'define',
          'global'
        ],
        answer: 1,
        explanation: 'The let and const keywords declare block-scoped variables. var declares function-scoped variables.'
      }
    ],
    interviewQuestions: [
      {
        question: 'What is the difference between let, const, and var?',
        answer: 'var is function-scoped and hoisted. let and const are block-scoped and not initialized until their definition is evaluated (TDZ). variables declared with const cannot be reassigned.'
      }
    ],
    nextTopic: ''
  }
]
