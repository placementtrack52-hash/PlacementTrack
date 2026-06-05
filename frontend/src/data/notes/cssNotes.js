export const cssNotes = [
  {
    id: 'css-introduction',
    title: 'CSS Introduction',
    slug: 'css-introduction',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8',
    readTime: '12 min read',
    difficulty: 'Beginner',
    description: 'Learn CSS fundamentals, selectors, properties, and styling basics.',
    companyTags: ['TCS', 'Accenture', 'Infosys', 'Capgemini'],
    sections: [
      {
        heading: 'What is CSS?',
        content: `
CSS stands for **Cascading Style Sheets**. It describes how HTML elements are to be displayed on screen, paper, or in other media.
CSS saves a lot of work by controlling the layout of multiple web pages all at once.
        `.trim(),
      },
      {
        heading: 'CSS Syntax and Selectors',
        content: `
A CSS rule-set consists of a selector and a declaration block:
• **Selector**: Points to the HTML element you want to style (e.g., \`h1\`, \`.class-name\`, \`#id-name\`).
• **Declaration Block**: Contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon.
        `.trim(),
      }
    ],
    codeExamples: [
      {
        title: 'Basic CSS Styling',
        language: 'css',
        code: `body {\n    background-color: lightblue;\n}\nh1 {\n    color: navy;\n    margin-left: 20px;\n}`,
        output: 'Applies lightblue background to body and navy color to h1 elements.'
      }
    ],
    mcqs: [
      {
        question: 'What does CSS stand for?',
        options: [
          'Colorful Style Sheets',
          'Cascading Style Sheets',
          'Creative Style Sheets',
          'Computer Style Sheets'
        ],
        answer: 1,
        explanation: 'CSS stands for Cascading Style Sheets.'
      }
    ],
    interviewQuestions: [
      {
        question: 'What is the box model in CSS?',
        answer: 'The CSS box model is a container that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.'
      }
    ],
    nextTopic: ''
  }
]
