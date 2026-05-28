export const pythonNotes = [
 {
  id: 'python-introduction',

  title: 'Python Introduction',

  slug: 'python-introduction',

  image:
    'https://images.unsplash.com/photo-1526379095098-d400fd0bf935',

  readTime: '28 min read',

  difficulty: 'Beginner',

  description:
    'Learn Python Introduction deeply including features, advantages, uses, and beginner concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Infosys', 'TCS'],

  sections: [
    {
      heading: 'Python Introduction',

      content: `
• What is Python?

• Features of Python

• Why Learn Python?

• Applications of Python

• Advantages of Python

• Career Opportunities

• Interview Concepts
`,
    },

    {
      heading: 'What is Python?',

      content: `
Python is a high-level, interpreted, and easy-to-learn programming language.

It was created by Guido van Rossum and released in 1991.

Python is famous for its simple syntax and readable code.
`.trim(),
    },

    {
      heading: 'Why Python is Popular',

      content: `
Python is popular because:

• Easy syntax
• Beginner friendly
• Huge community support
• Powerful libraries
• Used in modern technologies
`.trim(),
    },

    {
      heading: 'Applications of Python',

      content: `
Python is used in:

• Web Development
• Artificial Intelligence
• Machine Learning
• Data Science
• Automation
• Game Development
• Cyber Security
`.trim(),
    },

    {
      heading: 'Advantages of Python',

      content: `
• Easy to read and write
• Less code compared to other languages
• Platform independent
• Large collection of libraries
• Supports multiple programming styles
`.trim(),
    },

    {
      heading: 'Important Points About Python',

      content: `
• Python is case-sensitive
• Python uses indentation
• No need to declare data types
• Python code is executed line by line

Common Beginner Mistakes:

• Incorrect indentation
• Forgetting colon (:)
• Mixing tabs and spaces
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'First Python Program',

      language: 'python',

      code: `print("Welcome to Python")`,

      output: 'Welcome to Python',
    },
  ],

  mcqs: [
    {
      question:
        'Python was created by?', 

      options: [
        'James Gosling',
        'Dennis Ritchie',
        'Guido van Rossum',
        'Bjarne Stroustrup'
      ],

      answer: 2,

      explanation:
        'Python was created by Guido van Rossum.',
    },

    {
      question:
        'Python is which type of language?',

      options: [
        'Low-level',
        'Machine language',
        'High-level',
        'Assembly language'
      ],

      answer: 2,

      explanation:
        'Python is a high-level programming language.',
    },

    {
      question:
        'Python is famous for?', 

      options: [
        'Complex syntax',
        'Simple syntax',
        'No libraries',
        'Hardware design'
      ],

      answer: 1,

      explanation:
        'Python is famous for simple and readable syntax.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Python?',

      answer:
        'Python is a high-level, interpreted, and beginner-friendly programming language.',
    },

    {
      question:
        'Why is Python widely used?',

      answer:
        'Python is easy to learn, has huge libraries, and supports modern technologies like AI and Data Science.',
    },
  ],

  nextTopic: 'python-syntax',
},

{
  id: 'python-syntax',

  title: 'Python Syntax',

  slug: 'python-syntax',

  image:
    'https://images.unsplash.com/photo-1518770660439-4636190af475',

  readTime: '24 min read',

  difficulty: 'Beginner',

  description:
    'Learn Python Syntax deeply including indentation, statements, variables, and beginner concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Wipro', 'Infosys'],

  sections: [
    {
      heading: 'Python Syntax',

      content: `
• Python Statements

• Indentation

• Variables

• Comments

• Blocks in Python

• Code Readability

• Interview Concepts
`,
    },

    {
      heading: 'What is Python Syntax?',

      content: `
Syntax means the rules used to write valid Python programs.

Python syntax is simple and beginner friendly.
`.trim(),
    },

    {
      heading: 'Indentation in Python',

      content: `
Python uses indentation to define blocks of code.

Example:

if 5 > 2:
    print("Correct")

Indentation is mandatory in Python.
`.trim(),
    },

    {
      heading: 'Why Python Syntax is Easy',

      content: `
• Simple structure
• Less code
• No unnecessary symbols
• Easy readability
`.trim(),
    },

    {
      heading: 'Important Syntax Rules',

      content: `
• Use colon (:) after conditions and loops
• Maintain proper indentation
• Python is case-sensitive
• Statements execute line by line
`.trim(),
    },

    {
      heading: 'Important Points About Python Syntax',

      content: `
• Indentation replaces curly braces
• Spaces matter in Python
• Python code is highly readable
• Beginners can learn quickly

Common Beginner Mistakes:

• Missing colon (:)
• Wrong indentation
• Using inconsistent spaces
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Python Syntax Example',

      language: 'python',

      code: `age = 18

if age >= 18:
    print("Eligible")`,

      output: 'Eligible',
    },
  ],

  mcqs: [
    {
      question:
        'Python uses which thing to define blocks?',

      options: [
        'Curly braces',
        'Semicolon',
        'Indentation',
        'Comma'
      ],

      answer: 2,

      explanation:
        'Python uses indentation for code blocks.',
    },

    {
      question:
        'Python is?', 

      options: [
        'Case-sensitive',
        'Case-insensitive',
        'Hardware',
        'Database'
      ],

      answer: 0,

      explanation:
        'Python is case-sensitive.',
    },

    {
      question:
        'Which symbol is important after if condition?',

      options: [
        ';',
        ':',
        '{}',
        '@'
      ],

      answer: 1,

      explanation:
        'Colon (:) is required after conditions.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is syntax in Python?',

      answer:
        'Syntax means the rules used to write valid Python programs.',
    },

    {
      question:
        'Why is indentation important in Python?',

      answer:
        'Indentation defines blocks of code and improves readability.',
    },
  ],

  nextTopic: 'python-output',
},

{
  id: 'python-output',

  title: 'Python Output',

  slug: 'python-output',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '22 min read',

  difficulty: 'Beginner',

  description:
    'Learn Python Output deeply including print() function, formatting, escape characters, and beginner concepts.',

  companyTags: ['Google', 'Amazon', 'Infosys', 'TCS', 'Capgemini'],

  sections: [
    {
      heading: 'Python Output',

      content: `
• print() Function

• Output Formatting

• Escape Characters

• Multiple Values

• String Output

• Interview Concepts
`,
    },

    {
      heading: 'What is Python Output?',

      content: `
Python output means displaying information on the screen using print() function.
`.trim(),
    },

    {
      heading: 'print() Function',

      content: `
print() is used to display output.

Example:

print("Hello Python")
`.trim(),
    },

    {
      heading: 'Escape Characters in Python',

      content: `
Important escape characters:

• \\n → New line
• \\t → Tab space
• \\" → Double quote
`.trim(),
    },

    {
      heading: 'Advantages of print() Function',

      content: `
• Easy output display
• Supports multiple values
• Useful for debugging
• Beginner friendly
`.trim(),
    },

    {
      heading: 'Important Points About Python Output',

      content: `
• print() automatically adds new line
• Multiple values can be printed together
• Strings must be inside quotes
• Escape characters improve formatting

Common Beginner Mistakes:

• Forgetting quotes
• Incorrect brackets
• Wrong escape characters
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Python Output Example',

      language: 'python',

      code: `name = "Python"

print("Welcome to", name)`,

      output: 'Welcome to Python',
    },
  ],

  mcqs: [
    {
      question:
        'Which function is used for output in Python?',

      options: [
        'scan()',
        'println()',
        'print()',
        'input()'
      ],

      answer: 2,

      explanation:
        'print() function is used for output.',
    },

    {
      question:
        'Which escape character creates new line?',

      options: [
        '\\t',
        '\\n',
        '\\a',
        '\\b'
      ],

      answer: 1,

      explanation:
        '\\n creates a new line.',
    },

    {
      question:
        'Strings in Python are written inside?', 

      options: [
        'Brackets',
        'Quotes',
        'Colon',
        'Semicolon'
      ],

      answer: 1,

      explanation:
        'Strings are written inside quotes.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is print() function in Python?',

      answer:
        'print() function is used to display output on the screen.',
    },

    {
      question:
        'What are escape characters in Python?',

      answer:
        'Escape characters are special characters used for formatting output.',
    },
  ],

  nextTopic: 'python-comments',
},

{
  id: 'python-comments',

  title: 'Python Comments',

  slug: 'python-comments',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '20 min read',

  difficulty: 'Beginner',

  description:
    'Learn Python Comments deeply including single-line comments, multi-line comments, and beginner concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Infosys', 'TCS'],

  sections: [
    {
      heading: 'Python Comments',

      content: `
• Introduction to Comments

• Single-line Comments

• Multi-line Comments

• Code Documentation

• Readability

• Interview Concepts
`,
    },

    {
      heading: 'What are Comments in Python?',

      content: `
Comments are non-executable lines used to explain code.
`.trim(),
    },

    {
      heading: 'Types of Comments',

      content: `
Python supports:

• Single-line comments
• Multi-line comments
`.trim(),
    },

    {
      heading: 'Single-line Comment',

      content: `
Single-line comments use # symbol.

Example:

# This is comment
`.trim(),
    },

    {
      heading: 'Multi-line Comment',

      content: `
Triple quotes are commonly used for multi-line comments.

Example:

"""
This is
multi-line comment
"""
`.trim(),
    },

    {
      heading: 'Important Points About Python Comments',

      content: `
• Comments improve readability
• Comments are ignored by Python interpreter
• Useful for documentation
• Helps teamwork and maintenance

Common Beginner Mistakes:

• Forgetting # symbol
• Writing unnecessary comments
• Confusing strings with comments
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Python Comments Example',

      language: 'python',

      code: `# This is single-line comment

print("Python")`,

      output: 'Python',
    },
  ],

  mcqs: [
    {
      question:
        'Which symbol is used for single-line comments?',

      options: [
        '//',
        '#',
        '/*',
        '@'
      ],

      answer: 1,

      explanation:
        '# symbol is used for comments.',
    },

    {
      question:
        'Comments are executed by Python interpreter?',

      options: [
        'Yes',
        'No',
        'Sometimes',
        'Only in loops'
      ],

      answer: 1,

      explanation:
        'Comments are ignored by interpreter.',
    },

    {
      question:
        'Comments mainly improve?', 

      options: [
        'Hardware',
        'Readability',
        'Networking',
        'Compilation speed'
      ],

      answer: 1,

      explanation:
        'Comments improve readability.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What are comments in Python?',

      answer:
        'Comments are non-executable lines used to explain code.',
    },

    {
      question:
        'Why are comments important?',

      answer:
        'Comments improve readability and help understand the code easily.',
    },
  ],

  nextTopic: 'python-variables',
},
]
