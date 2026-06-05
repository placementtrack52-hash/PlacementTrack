export const csharpNotes = [
  {
    id: 'csharp-introduction',
    title: 'C# Introduction',
    slug: 'csharp-introduction',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
    readTime: '15 min read',
    difficulty: 'Beginner',
    description: 'Learn C# fundamentals, .NET framework introduction, syntax, and OOP concepts.',
    companyTags: ['Microsoft', 'Accenture', 'TCS', 'Infosys', 'Wipro'],
    sections: [
      {
        heading: 'What is C#?',
        content: `
C# (pronounced **C-Sharp**) is a modern, object-oriented, and type-safe programming language. C# enables developers to build many types of secure and robust applications that run in the .NET ecosystem.
It was developed by Microsoft in 2000 and led by Anders Hejlsberg.
        `.trim(),
      },
      {
        heading: 'Key Features of C#',
        content: `
• **Object-Oriented**: Fully supports OOP concepts like encapsulation, inheritance, polymorphism, and abstraction.
• **Component-Oriented**: Designed to build reusable components.
• **Type-Safe**: Prevents variables from holding values of incompatible types.
• **Memory Management**: Uses an automatic Garbage Collector (GC) to free up memory.
        `.trim(),
      }
    ],
    codeExamples: [
      {
        title: 'Basic C# Program',
        language: 'csharp',
        code: `using System;\n\nnamespace HelloWorld {\n    class Program {\n        static void Main(string[] args) {\n            Console.WriteLine("Hello C#!");\n        }\n    }\n}`,
        output: 'Hello C#!'
      }
    ],
    mcqs: [
      {
        question: 'C# was developed by which company?',
        options: [
          'Sun Microsystems',
          'Microsoft',
          'Oracle',
          'Google'
        ],
        answer: 1,
        explanation: 'C# was developed by Microsoft as part of the .NET initiative.'
      }
    ],
    interviewQuestions: [
      {
        question: 'What is the Common Language Runtime (CLR)?',
        answer: 'CLR is the execution engine of the .NET framework. It handles memory management, security, exception handling, and code execution.'
      }
    ],
    nextTopic: ''
  }
]
