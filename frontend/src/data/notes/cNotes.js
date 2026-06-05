export const cNotes = [
  {
    id: 'c-introduction',
    title: 'C Introduction',
    slug: 'c-introduction',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
    readTime: '15 min read',
    difficulty: 'Beginner',
    description: 'Learn the fundamentals of C programming, its history, features, and structure.',
    companyTags: ['TCS', 'Wipro', 'Accenture', 'Infosys', 'Cognizant'],
    sections: [
      {
        heading: 'Introduction to C',
        content: `
• What is C Programming?
• History of C
• Key Features of C
• Basic Structure of a C Program
• Execution Flow in C
• Why Learn C?
        `.trim(),
      },
      {
        heading: 'What is C Programming?',
        content: `
C is a general-purpose, procedural computer programming language. It is a structured programming language that has been widely used for system and application software development.

C is often called a "middle-level" language because it combines the power and speed of low-level assembly language with the readability and ease of high-level programming languages.
        `.trim(),
      },
      {
        heading: 'History of C',
        content: `
• Developed in 1972 by **Dennis Ritchie** at AT&T Bell Laboratories.
• Created to write the UNIX operating system.
• Influenced by earlier languages like B and BCPL.
• Standardized by ANSI (American National Standards Institute) in 1989 (C89/C90) and updated multiple times (C99, C11, C17, C23).
        `.trim(),
      },
      {
        heading: 'Key Features of C',
        content: `
• **Procedural**: Executes statements step by step using functions.
• **Fast and Efficient**: Low overhead, compiling directly to machine code.
• **Statically Typed**: Type checks are performed at compile time.
• **Portability**: C programs can run on different hardware platforms with minor or no changes.
• **Extensible**: Supports adding new libraries and functions easily.
• **Memory Management**: Allows direct manipulation of memory using pointers.
        `.trim(),
      },
      {
        heading: 'Basic Structure of a C Program',
        content: `
A typical C program consists of:
1. **Preprocessor Directives**: e.g., \`#include <stdio.h>\` to include standard input/output libraries.
2. **Main Function**: The entry point of execution (\`int main()\`).
3. **Variables & Declarations**: Declaring variables before using them.
4. **Statements & Expressions**: Instructions executed by the CPU.
5. **Return Statement**: Usually \`return 0;\` to indicate successful termination.
        `.trim(),
      }
    ],
    codeExamples: [
      {
        title: 'Hello World in C',
        language: 'c',
        code: `#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}`,
        output: 'Hello, World!'
      }
    ],
    mcqs: [
      {
        question: 'Who is the father of C language?',
        options: [
          'Bjarne Stroustrup',
          'Dennis Ritchie',
          'James Gosling',
          'Guido van Rossum'
        ],
        answer: 1,
        explanation: 'C language was created and developed by Dennis Ritchie at Bell Labs in 1972.'
      },
      {
        question: 'Which of the following is the correct file extension for a C source file?',
        options: [
          '.cpp',
          '.c',
          '.h',
          '.obj'
        ],
        answer: 1,
        explanation: 'C source code files use the .c extension. Header files use .h.'
      },
      {
        question: 'What is the entry point function of every standard C program?',
        options: [
          'start()',
          'main()',
          'printf()',
          'run()'
        ],
        answer: 1,
        explanation: 'The main() function serves as the starting point for program execution.'
      }
    ],
    interviewQuestions: [
      {
        question: 'Why is C known as a mother language?',
        answer: 'C is called the mother language because most compilers, JVMs, and kernels are written in C, and many modern languages (like C++, Java, C#, and JavaScript) borrow their syntax and core concepts from C.'
      },
      {
        question: 'What is the role of #include <stdio.h> in C?',
        answer: '#include <stdio.h> is a preprocessor directive that tells the compiler to include the Standard Input Output header file before compiling. It is necessary to use functions like printf() and scanf().'
      }
    ],
    nextTopic: ''
  }
]
