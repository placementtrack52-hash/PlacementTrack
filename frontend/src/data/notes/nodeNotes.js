export const nodeNotes = [
  {
    id: 'node-introduction',
    title: 'Node.js Introduction',
    slug: 'node-introduction',
    image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8',
    readTime: '12 min read',
    difficulty: 'Beginner',
    description: 'Learn the basics of Node.js, V8 engine, event-driven architecture, and asynchronous code.',
    companyTags: ['Amazon', 'Microsoft', 'Accenture', 'TCS'],
    sections: [
      {
        heading: 'What is Node.js?',
        content: `
Node.js is an open-source, cross-platform JavaScript runtime environment. It executes JavaScript code outside a web browser.
Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.
        `.trim(),
      },
      {
        heading: 'Asynchronous and Event-Driven',
        content: `
Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
All APIs of Node.js library are asynchronous (non-blocking). It essentially means a Node.js based server never waits for an API to return data. The server moves to the next API after calling it and a notification mechanism of Events of Node.js helps the server to get a response from the previous API call.
        `.trim(),
      }
    ],
    codeExamples: [
      {
        title: 'Basic HTTP Server in Node.js',
        language: 'javascript',
        code: `const http = require('http');\n\nconst server = http.createServer((req, res) => {\n    res.end('Hello from Node.js');\n});\n\nserver.listen(3000, () => {\n    console.log('Server running on port 3000');\n});`,
        output: 'Starts a web server listening on port 3000.'
      }
    ],
    mcqs: [
      {
        question: 'Node.js is built on which JavaScript engine?',
        options: [
          'SpiderMonkey',
          'V8',
          'Chakra',
          'JavaScriptCore'
        ],
        answer: 1,
        explanation: 'Node.js runtime environment is built on Chrome\'s V8 JavaScript engine.'
      }
    ],
    interviewQuestions: [
      {
        question: 'What is the Event Loop in Node.js?',
        answer: 'The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.'
      }
    ],
    nextTopic: ''
  }
]
