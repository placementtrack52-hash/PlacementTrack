export const htmlNotes = [
  {
    id: 'html-introduction',
    title: 'HTML Introduction',
    slug: 'html-introduction',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713',
    readTime: '10 min read',
    difficulty: 'Beginner',
    description: 'Learn the basics of HTML, elements, attributes, and page structure.',
    companyTags: ['TCS', 'Infosys', 'Cognizant', 'Wipro'],
    sections: [
      {
        heading: 'What is HTML?',
        content: `
HTML stands for **HyperText Markup Language**. It is the standard markup language for creating web pages.
• **HyperText**: Refers to the way web pages (HTML documents) are linked together.
• **Markup Language**: Uses tags to define the structure and layout of a web page.
        `.trim(),
      },
      {
        heading: 'Basic HTML Document Structure',
        content: `
Every HTML5 document starts with a document type declaration: \`<!DOCTYPE html>\`.
The structure consists of nested elements:
• \`<html>\`: The root element of an HTML page.
• \`<head>\`: Contains meta information, page title, and stylesheets.
• \`<body>\`: Contains the visible page content like headings, paragraphs, and images.
        `.trim(),
      }
    ],
    codeExamples: [
      {
        title: 'Basic HTML Template',
        language: 'html',
        code: `<!DOCTYPE html>\n<html>\n<head>\n    <title>My First Page</title>\n</head>\n<body>\n    <h1>Hello World</h1>\n    <p>This is a paragraph.</p>\n</body>\n</html>`,
        output: 'Hello World\nThis is a paragraph.'
      }
    ],
    mcqs: [
      {
        question: 'What does HTML stand for?',
        options: [
          'Hyperlinks and Text Markup Language',
          'Hyper Text Markup Language',
          'Home Tool Markup Language',
          'Hyper Tool Markup Language'
        ],
        answer: 1,
        explanation: 'HTML stands for Hyper Text Markup Language.'
      }
    ],
    interviewQuestions: [
      {
        question: 'What are HTML tags and elements?',
        answer: 'HTML tags are labels used to mark up the start and end of an HTML element (e.g., <p> and </p>). An HTML element is defined by a start tag, some content, and an end tag.'
      }
    ],
    nextTopic: ''
  }
]
