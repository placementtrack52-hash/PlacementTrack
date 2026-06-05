export const reactNotes = [
  {
    id: 'react-introduction',
    title: 'React Introduction',
    slug: 'react-introduction',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
    readTime: '15 min read',
    difficulty: 'Beginner',
    description: 'Learn the fundamentals of React JS, components, JSX, and state.',
    companyTags: ['Amazon', 'Microsoft', 'Accenture', 'TCS'],
    sections: [
      {
        heading: 'What is React?',
        content: `
React is a free and open-source front-end JavaScript library for building user interfaces based on components.
It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.
        `.trim(),
      },
      {
        heading: 'Core Concepts: Component-Based Architecture',
        content: `
React allows you to build encapsulated components that manage their own state, then compose them to make complex UIs.
Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
        `.trim(),
      }
    ],
    codeExamples: [
      {
        title: 'Basic React Component',
        language: 'jsx',
        code: `import React from 'react';\n\nfunction Greeting({ name }) {\n    return <h1>Hello, {name}!</h1>;\n}\n\nexport default Greeting;`,
        output: 'Renders <h1>Hello, World!</h1> when name="World"'
      }
    ],
    mcqs: [
      {
        question: 'Who created and maintains React?',
        options: [
          'Google',
          'Apple',
          'Meta (Facebook)',
          'Microsoft'
        ],
        answer: 2,
        explanation: 'React was created and is maintained by Meta (formerly Facebook).'
      }
    ],
    interviewQuestions: [
      {
        question: 'What is JSX?',
        answer: 'JSX is a syntax extension for JavaScript that looks similar to XML or HTML. React uses JSX to describe what the UI should look like.'
      }
    ],
    nextTopic: ''
  }
]
