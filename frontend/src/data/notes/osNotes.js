export const osNotes = [
  {
    id: 'os-introduction',
    title: 'Operating Systems Introduction',
    slug: 'os-introduction',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    readTime: '12 min read',
    difficulty: 'Beginner',
    description: 'Learn operating system fundamentals, types of OS, processes, and CPU scheduling.',
    companyTags: ['TCS', 'Infosys', 'Cognizant', 'Accenture', 'Microsoft'],
    sections: [
      {
        heading: 'What is an Operating System?',
        content: `
An **Operating System (OS)** is a program that acts as an interface between the user and the computer hardware.
It controls the execution of all kinds of programs, manages resource allocation, and controls input/output operations.
        `.trim(),
      },
      {
        heading: 'Functions of an Operating System',
        content: `
• **Processor Management**: Controls CPU allocation to different processes.
• **Memory Management**: Coordinates virtual/physical allocations of memory.
• **Device Management**: Controls I/O drivers.
• **File Management**: Keeps track of directories and file actions.
• **Security**: Protects user data and prevents unauthorized system access.
        `.trim(),
      }
    ],
    codeExamples: [
      {
        title: 'Linux Shell Command Process List',
        language: 'bash',
        code: `ps -ef`,
        output: 'Lists all currently running processes in the system with their PIDs.'
      }
    ],
    mcqs: [
      {
        question: 'Which of the following is not a function of the Operating System?',
        options: [
          'Memory Management',
          'Database Design',
          'Process Scheduling',
          'File System Control'
        ],
        answer: 1,
        explanation: 'Database Design is done by application developers/DBAs. The OS is responsible for memory, process, and file systems.'
      }
    ],
    interviewQuestions: [
      {
        question: 'What is the difference between a process and a thread?',
        answer: 'A process is an executing program with its own memory space. A thread is a path of execution within a process, sharing memory and resources with other threads in the same process.'
      }
    ],
    nextTopic: ''
  }
]
