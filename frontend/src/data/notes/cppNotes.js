export const cppNotes = [
  {
    id: 'cpp-introduction',
    title: 'C++ Introduction',
    slug: 'cpp-introduction',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3',
    readTime: '15 min read',
    difficulty: 'Beginner',
    description: 'Learn C++ fundamentals, object-oriented programming (OOP) introduction, and syntax.',
    companyTags: ['Amazon', 'Microsoft', 'Adobe', 'TCS', 'Infosys'],
    sections: [
      {
        heading: 'What is C++?',
        content: `
C++ is a cross-platform language that can be used to create high-performance applications.
C++ was developed by Bjarne Stroustrup at Bell Labs in 1979 as an extension of the C language.
C++ gives programmers a high level of control over system resources and memory.
        `.trim(),
      },
      {
        heading: 'Key Differences Between C and C++',
        content: `
• **OOP Support**: C is procedural, whereas C++ supports both procedural and object-oriented programming concepts (Classes, Objects, Inheritance, Polymorphism, Encapsulation, Abstraction).
• **Standard Template Library (STL)**: C++ provides a rich library of template classes (STL) for common data structures and algorithms, which is absent in C.
• **References**: C++ introduces references, whereas C only has pointers.
        `.trim(),
      }
    ],
    codeExamples: [
      {
        title: 'Basic C++ Program',
        language: 'cpp',
        code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello C++!" << endl;\n    return 0;\n}`,
        output: 'Hello C++!'
      }
    ],
    mcqs: [
      {
        question: 'Who created C++?',
        options: [
          'Dennis Ritchie',
          'Bjarne Stroustrup',
          'James Gosling',
          'Ken Thompson'
        ],
        answer: 1,
        explanation: 'C++ was created by Bjarne Stroustrup in 1979.'
      }
    ],
    interviewQuestions: [
      {
        question: 'What is class and object in C++?',
        answer: 'A class is a user-defined template or blueprint from which objects are created. An object is an instance of a class.'
      }
    ],
    nextTopic: ''
  }
]
