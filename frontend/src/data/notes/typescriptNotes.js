export const typescriptNotes = [
  {
    id: 'typescript-introduction',
    title: 'TypeScript Introduction',
    slug: 'typescript-introduction',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a',
    readTime: '12 min read',
    difficulty: 'Beginner',
    description: 'Learn the fundamentals of TypeScript, static typing, benefits over JavaScript, and compiling.',
    companyTags: ['Microsoft', 'Amazon', 'Accenture', 'TCS'],
    sections: [
      {
        heading: 'What is TypeScript?',
        content: `
TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
It is a syntactic superset of JavaScript, which means all valid JavaScript code is also valid TypeScript code. TypeScript compiles to clean JavaScript.
        `.trim(),
      },
      {
        heading: 'Why Use TypeScript?',
        content: `
• **Static Typing**: Detect type errors during development before the code runs.
• **Better IDE Support**: Provides rich autocompletion, refactoring, and code navigation.
• **Modern JS Features**: Allows using the latest JavaScript features while compiling down to older JS targets (like ES5/ES6) for browser compatibility.
        `.trim(),
      }
    ],
    codeExamples: [
      {
        title: 'Basic TypeScript Types',
        language: 'typescript',
        code: `interface User {\n    id: number;\n    name: string;\n}\n\nconst user: User = {\n    id: 1,\n    name: "Alice"\n};\n\nfunction greet(person: User): string {\n    return "Hello, " + person.name;\n}\nconsole.log(greet(user));`,
        output: 'Hello, Alice'
      }
    ],
    mcqs: [
      {
        question: 'Who developed and maintains TypeScript?',
        options: [
          'Google',
          'Microsoft',
          'Meta',
          'Oracle'
        ],
        answer: 1,
        explanation: 'TypeScript is developed and maintained by Microsoft.'
      }
    ],
    interviewQuestions: [
      {
        question: 'What is the main difference between JavaScript and TypeScript?',
        answer: 'JavaScript is a dynamically typed scripting language, whereas TypeScript is a statically typed superset of JavaScript that requires compilation to produce JavaScript.'
      }
    ],
    nextTopic: ''
  }
]
