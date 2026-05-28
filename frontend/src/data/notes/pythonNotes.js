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
{
  id: 'python-variables',

  title: 'Python Variables',

  slug: 'python-variables',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '35 min read',

  difficulty: 'Beginner',

  description:
    'Learn Python Variables deeply including declaration, rules, naming conventions, dynamic typing, and interview concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Infosys', 'TCS'],

  sections: [
    {
      heading: 'Python Variables',

      content: `
• Introduction to Variables

• Creating Variables

• Dynamic Typing

• Naming Rules

• Multiple Assignment

• Memory Concept

• Interview Concepts
`,
    },

    {
      heading: 'What are Variables in Python?',

      content: `
Variables are containers used to store data values.

Python automatically decides the data type based on assigned value.

Example:

name = "Python"
age = 20
`.trim(),
    },

    {
      heading: 'How Variables Work in Python',

      content: `
1. Variable name is created
2. Value is assigned
3. Memory is allocated automatically
4. Variable references the stored object

Python does not require explicit type declaration.
`.trim(),
    },

    {
      heading: 'Rules for Naming Variables',

      content: `
Important rules:

• Variable name can contain letters, digits, and underscore
• Variable cannot start with number
• Special symbols are not allowed
• Python keywords cannot be used
• Variable names are case-sensitive

Valid Examples:

• student_name
• age1
• totalMarks

Invalid Examples:

• 1name
• class
• user-name
`.trim(),
    },

    {
      heading: 'Multiple Variable Assignment',

      content: `
Python allows assigning multiple variables together.

Example:

x, y, z = 10, 20, 30
`.trim(),
    },

    {
      heading: 'Dynamic Typing in Python',

      content: `
Python is dynamically typed language.

This means variable type can change during execution.

Example:

x = 10
x = "Python"

Same variable stores different types.
`.trim(),
    },

    {
      heading: 'Advantages of Python Variables',

      content: `
• Easy to create
• No type declaration needed
• Flexible data storage
• Faster development
`.trim(),
    },

    {
      heading: 'Important Points About Variables',

      content: `
• Variables store references to objects
• Python uses dynamic typing
• Variables are case-sensitive
• Meaningful names improve readability

Common Beginner Mistakes:

• Using invalid variable names
• Confusing = with ==
• Using reserved keywords as variable names
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Python Variables Example',

      language: 'python',

      code: `name = "Viral"
age = 20

print(name)
print(age)`,

      output: `Viral
20`,
    },
  ],

  mcqs: [
    {
      question:
        'Python variables are?', 

      options: [
        'Fixed type',
        'Containers for storing data',
        'Functions',
        'Loops'
      ],

      answer: 1,

      explanation:
        'Variables are containers used to store data.',
    },

    {
      question:
        'Python follows which typing system?',

      options: [
        'Static typing',
        'Dynamic typing',
        'Manual typing',
        'No typing'
      ],

      answer: 1,

      explanation:
        'Python uses dynamic typing.',
    },

    {
      question:
        'Which variable name is valid?',

      options: [
        '1name',
        'user-name',
        'student_name',
        'class'
      ],

      answer: 2,

      explanation:
        'student_name follows valid naming rules.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What are variables in Python?',

      answer:
        'Variables are containers used to store data values in memory.',
    },

    {
      question:
        'What is dynamic typing in Python?',

      answer:
        'Dynamic typing means Python automatically determines variable type during execution.',
    },
  ],

  nextTopic: 'python-data-types',
},

{
  id: 'python-data-types',

  title: 'Python Data Types',

  slug: 'python-data-types',

  image:
    'https://images.unsplash.com/photo-1518770660439-4636190af475',

  readTime: '42 min read',

  difficulty: 'Beginner',

  description:
    'Learn Python Data Types deeply including built-in types, mutable and immutable concepts, and interview questions.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Infosys', 'Wipro'],

  sections: [
    {
      heading: 'Python Data Types',

      content: `
• Introduction to Data Types

• Numeric Types

• Sequence Types

• Set Types

• Dictionary Type

• Mutable vs Immutable

• Type Checking

• Interview Concepts
`,
    },

    {
      heading: 'What are Data Types?',

      content: `
Data types define the type of data stored in variables.

Python automatically identifies the data type.
`.trim(),
    },

    {
      heading: 'Main Data Types in Python',

      content: `
Important built-in data types:

Numeric Types:
• int
• float
• complex

Sequence Types:
• str
• list
• tuple

Set Types:
• set
• frozenset

Mapping Type:
• dict

Boolean Type:
• bool
`.trim(),
    },

    {
      heading: 'Mutable and Immutable Data Types',

      content: `
Mutable Data Types:
Values can be changed after creation.

Examples:
• list
• set
• dict

Immutable Data Types:
Values cannot be changed after creation.

Examples:
• int
• float
• str
• tuple
`.trim(),
    },

    {
      heading: 'Type Checking in Python',

      content: `
Python provides type() function.

Example:

x = 10

print(type(x))
`.trim(),
    },

    {
      heading: 'Why Data Types are Important',

      content: `
• Efficient memory usage
• Better data handling
• Reduces programming errors
• Improves readability
`.trim(),
    },

    {
      heading: 'Advantages of Python Data Types',

      content: `
• Large variety of built-in types
• Dynamic typing support
• Easy conversion between types
• Beginner friendly
`.trim(),
    },

    {
      heading: 'Important Points About Data Types',

      content: `
• Python automatically assigns type
• Mutable objects can change
• Immutable objects cannot change
• type() function checks data type

Common Beginner Mistakes:

• Confusing list and tuple
• Mixing string and integer
• Forgetting data type conversions
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Python Data Types Example',

      language: 'python',

      code: `name = "Python"
age = 25
price = 99.5

print(type(name))
print(type(age))
print(type(price))`,

      output: `<class 'str'>
<class 'int'>
<class 'float'>`,
    },
  ],

  mcqs: [
    {
      question:
        'Which data type stores decimal numbers?',

      options: [
        'int',
        'float',
        'str',
        'bool'
      ],

      answer: 1,

      explanation:
        'float stores decimal values.',
    },

    {
      question:
        'Which data type is immutable?',

      options: [
        'list',
        'dict',
        'set',
        'tuple'
      ],

      answer: 3,

      explanation:
        'tuple is immutable.',
    },

    {
      question:
        'Which function checks data type?',

      options: [
        'print()',
        'input()',
        'type()',
        'id()'
      ],

      answer: 2,

      explanation:
        'type() checks variable data type.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What are data types in Python?',

      answer:
        'Data types define the type of data stored in variables.',
    },

    {
      question:
        'What is difference between mutable and immutable data types?',

      answer:
        'Mutable objects can change after creation while immutable objects cannot.',
    },
  ],

  nextTopic: 'python-numbers',
},

{
  id: 'python-numbers',

  title: 'Python Numbers',

  slug: 'python-numbers',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '38 min read',

  difficulty: 'Beginner',

  description:
    'Learn Python Numbers deeply including int, float, complex numbers, operations, and interview concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'TCS', 'Infosys'],

  sections: [
    {
      heading: 'Python Numbers',

      content: `
• Introduction to Numbers

• Integer Numbers

• Floating Point Numbers

• Complex Numbers

• Number Operations

• Type Conversion

• Interview Concepts
`,
    },

    {
      heading: 'What are Numbers in Python?',

      content: `
Numbers are numeric data types used for mathematical operations.
`.trim(),
    },

    {
      heading: 'Types of Numbers in Python',

      content: `
Python mainly supports:

• int → Whole numbers
• float → Decimal numbers
• complex → Complex numbers
`.trim(),
    },

    {
      heading: 'Integer Numbers',

      content: `
Integers are whole numbers without decimal point.

Example:

x = 100
y = -25
`.trim(),
    },

    {
      heading: 'Floating Point Numbers',

      content: `
Float stores decimal values.

Example:

price = 99.99
pi = 3.14
`.trim(),
    },

    {
      heading: 'Complex Numbers',

      content: `
Complex numbers contain real and imaginary parts.

Example:

z = 4 + 5j
`.trim(),
    },

    {
      heading: 'Important Number Operations',

      content: `
Common operations:

• Addition (+)
• Subtraction (-)
• Multiplication (*)
• Division (/)
• Floor Division (//)
• Modulus (%)
• Exponent (**)
`.trim(),
    },

    {
      heading: 'Advantages of Python Numbers',

      content: `
• Supports multiple numeric types
• Large integer support
• Easy mathematical operations
• Useful in scientific computing
`.trim(),
    },

    {
      heading: 'Important Points About Python Numbers',

      content: `
• int stores whole numbers
• float stores decimal values
• complex uses j for imaginary part
• Python supports automatic type conversion

Common Beginner Mistakes:

• Dividing integers expecting integer result
• Confusing / and //
• Incorrect complex number syntax
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Python Numbers Example',

      language: 'python',

      code: `x = 10
y = 3

print(x + y)
print(x / y)
print(x // y)
print(x ** y)`,

      output: `13
3.3333333333333335
3
1000`,
    },
  ],

  mcqs: [
    {
      question:
        'Which data type stores decimal values?',

      options: [
        'int',
        'float',
        'complex',
        'bool'
      ],

      answer: 1,

      explanation:
        'float stores decimal values.',
    },

    {
      question:
        'Which operator performs exponent operation?',

      options: [
        '//',
        '%',
        '**',
        '&'
      ],

      answer: 2,

      explanation:
        '** performs exponent operation.',
    },

    {
      question:
        'Complex numbers use which symbol for imaginary part?',

      options: [
        'i',
        'img',
        'j',
        'z'
      ],

      answer: 2,

      explanation:
        'Python uses j for imaginary numbers.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What are number data types in Python?',

      answer:
        'Python mainly supports int, float, and complex number types.',
    },

    {
      question:
        'What is difference between / and // in Python?',

      answer:
        '/ performs normal division while // performs floor division.',
    },
  ],

  nextTopic: 'python-type-casting',
},

{
  id: 'python-type-casting',

  title: 'Python Type Casting',

  slug: 'python-type-casting',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '40 min read',

  difficulty: 'Beginner',

  description:
    'Learn Python Type Casting deeply including implicit conversion, explicit conversion, and interview concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Infosys', 'Capgemini'],

  sections: [
    {
      heading: 'Python Type Casting',

      content: `
• Introduction to Type Casting

• Implicit Type Conversion

• Explicit Type Conversion

• Numeric Conversion

• String Conversion

• Type Safety

• Interview Concepts
`,
    },

    {
      heading: 'What is Type Casting?',

      content: `
Type casting means converting one data type into another data type.
`.trim(),
    },

    {
      heading: 'Types of Type Casting',

      content: `
Python supports:

• Implicit Type Conversion
• Explicit Type Conversion
`.trim(),
    },

    {
      heading: 'Implicit Type Conversion',

      content: `
Python automatically converts smaller type into larger compatible type.

Example:

x = 10
y = 5.5

result = x + y
`.trim(),
    },

    {
      heading: 'Explicit Type Conversion',

      content: `
Programmer manually converts data type using functions.

Important conversion functions:

• int()
• float()
• str()
• bool()
`.trim(),
    },

    {
      heading: 'Common Type Conversion Examples',

      content: `
Examples:

int("10")
float(5)
str(100)
bool(1)
`.trim(),
    },

    {
      heading: 'Why Type Casting is Important',

      content: `
• Prevents type errors
• Improves compatibility
• Useful in user input handling
• Important for calculations
`.trim(),
    },

    {
      heading: 'Advantages of Type Casting',

      content: `
• Better flexibility
• Easy conversion between types
• Improves program control
• Useful for data processing
`.trim(),
    },

    {
      heading: 'Important Points About Type Casting',

      content: `
• Implicit conversion happens automatically
• Explicit conversion is manual
• Invalid conversion causes error
• User input often requires casting

Common Beginner Mistakes:

• Converting invalid strings to int
• Mixing incompatible types
• Forgetting input() returns string
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Python Type Casting Example',

      language: 'python',

      code: `num = "100"

converted_num = int(num)

print(converted_num)
print(type(converted_num))`,

      output: `100
<class 'int'>`,
    },
  ],

  mcqs: [
    {
      question:
        'Type casting means?', 

      options: [
        'Loop execution',
        'Function creation',
        'Converting one data type into another',
        'Commenting code'
      ],

      answer: 2,

      explanation:
        'Type casting converts one data type into another.',
    },

    {
      question:
        'Which function converts string into integer?',

      options: [
        'float()',
        'str()',
        'int()',
        'bool()'
      ],

      answer: 2,

      explanation:
        'int() converts string into integer.',
    },

    {
      question:
        'input() function returns which type by default?',

      options: [
        'int',
        'float',
        'bool',
        'str'
      ],

      answer: 3,

      explanation:
        'input() returns string by default.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is type casting in Python?',

      answer:
        'Type casting means converting one data type into another.',
    },

    {
      question:
        'What is difference between implicit and explicit conversion?',

      answer:
        'Implicit conversion happens automatically while explicit conversion is done manually by programmer.',
    },
  ],

  nextTopic: 'python-strings',
},
{
  id: 'python-strings',

  title: 'Python Strings',

  slug: 'python-strings',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '48 min read',

  difficulty: 'Beginner',

  description:
    'Learn Python Strings deeply including string creation, indexing, slicing, methods, immutability, formatting, and interview concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Infosys', 'TCS'],

  sections: [
    {
      heading: 'Python Strings',

      content: `
• Introduction to Strings

• Creating Strings

• String Indexing

• String Slicing

• String Methods

• String Immutability

• String Formatting

• Escape Characters

• Interview Concepts
`,
    },

    {
      heading: 'What are Strings in Python?',

      content: `
Strings are sequence of characters enclosed inside quotes.

Python allows:

• Single quotes
• Double quotes
• Triple quotes

Examples:

name = "Python"
city = 'Delhi'

message = """Welcome
to
Python"""
`.trim(),
    },

    {
      heading: 'Why Strings are Important',

      content: `
Strings are used almost everywhere in programming.

Used for:

• Storing names
• User messages
• File handling
• Web development
• Data processing
`.trim(),
    },

    {
      heading: 'String Indexing in Python',

      content: `
Each character in string has position called index.

Positive indexing starts from 0.

Example:

text = "Python"

P → 0
y → 1
t → 2
h → 3
o → 4
n → 5

Negative indexing starts from -1.

n → -1
o → -2
`.trim(),
    },

    {
      heading: 'String Slicing in Python',

      content: `
Slicing extracts part of string.

Syntax:

string[start:end]

Example:

text = "Programming"

print(text[0:6])

Output:
Progra
`.trim(),
    },

    {
      heading: 'Important String Methods',

      content: `
Common string methods:

• upper()
• lower()
• strip()
• replace()
• split()
• find()
• count()
• startswith()
• endswith()
`.trim(),
    },

    {
      heading: 'String Immutability',

      content: `
Strings are immutable in Python.

This means original string cannot be changed after creation.

Example:

name = "Python"

Changing individual character directly is not allowed.
`.trim(),
    },

    {
      heading: 'String Formatting',

      content: `
Formatting helps combine variables and text.

Example:

name = "Viral"

print(f"Welcome {name}")

f-string is modern and easy formatting method.
`.trim(),
    },

    {
      heading: 'Escape Characters in Strings',

      content: `
Important escape characters:

• \\n → New line
• \\t → Tab space
• \\" → Double quote
• \\\\ → Backslash
`.trim(),
    },

    {
      heading: 'Advantages of Python Strings',

      content: `
• Easy text handling
• Powerful built-in methods
• Supports Unicode characters
• Flexible formatting options
`.trim(),
    },

    {
      heading: 'Important Points About Strings',

      content: `
• Strings are immutable
• Strings support indexing and slicing
• Triple quotes allow multi-line strings
• Strings are sequence data types

Common Beginner Mistakes:

• Forgetting quotes
• Incorrect slicing indexes
• Trying to modify string directly
• Confusing list and string methods
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Python String Example',

      language: 'python',

      code: `text = "Python Programming"

print(text.upper())
print(text[0:6])
print(len(text))`,

      output: `PYTHON PROGRAMMING
Python
18`,
    },
  ],

  mcqs: [
    {
      question:
        'Strings in Python are?', 

      options: [
        'Mutable',
        'Immutable',
        'Numeric',
        'Operators'
      ],

      answer: 1,

      explanation:
        'Strings are immutable in Python.',
    },

    {
      question:
        'Which method converts string into uppercase?',

      options: [
        'lower()',
        'upper()',
        'replace()',
        'split()'
      ],

      answer: 1,

      explanation:
        'upper() converts string into uppercase.',
    },

    {
      question:
        'Which operator is used for slicing?',

      options: [
        '{}',
        '[]',
        '()',
        '<>'
      ],

      answer: 1,

      explanation:
        'Square brackets [] are used for slicing.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What are strings in Python?',

      answer:
        'Strings are sequence of characters enclosed inside quotes.',
    },

    {
      question:
        'Why are strings called immutable in Python?',

      answer:
        'Strings are immutable because their content cannot be changed after creation.',
    },
  ],

  nextTopic: 'python-booleans',
},

{
  id: 'python-booleans',

  title: 'Python Booleans',

  slug: 'python-booleans',

  image:
    'https://images.unsplash.com/photo-1518770660439-4636190af475',

  readTime: '40 min read',

  difficulty: 'Beginner',

  description:
    'Learn Python Booleans deeply including True and False values, logical operations, conditions, truthy and falsy values, and interview concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Infosys', 'Wipro'],

  sections: [
    {
      heading: 'Python Booleans',

      content: `
• Introduction to Booleans

• True and False

• Boolean Expressions

• Comparison Operators

• Logical Operators

• Truthy and Falsy Values

• Conditional Statements

• Interview Concepts
`,
    },

    {
      heading: 'What are Booleans in Python?',

      content: `
Booleans represent only two values:

• True
• False

Boolean values are mainly used in conditions and decision-making.
`.trim(),
    },

    {
      heading: 'Boolean Type in Python',

      content: `
Python provides bool data type.

Example:

x = True
y = False

print(type(x))
`.trim(),
    },

    {
      heading: 'Boolean Expressions',

      content: `
Boolean expressions return either True or False.

Examples:

10 > 5
20 == 10
5 != 3
`.trim(),
    },

    {
      heading: 'Comparison Operators',

      content: `
Important comparison operators:

• == → Equal to
• != → Not equal to
• > → Greater than
• < → Less than
• >= → Greater than equal to
• <= → Less than equal to
`.trim(),
    },

    {
      heading: 'Logical Operators in Python',

      content: `
Logical operators combine conditions.

Important logical operators:

• and
• or
• not

Example:

x = 10

print(x > 5 and x < 20)
`.trim(),
    },

    {
      heading: 'Truthy and Falsy Values',

      content: `
Some values automatically behave as True or False.

Falsy Values:

• False
• None
• 0
• ""
• []
• {}

Truthy Values:

Most other values are treated as True.
`.trim(),
    },

    {
      heading: 'Boolean in Conditional Statements',

      content: `
Booleans are heavily used in if conditions.

Example:

age = 18

if age >= 18:
    print("Eligible")
`.trim(),
    },

    {
      heading: 'Why Booleans are Important',

      content: `
• Used in decision-making
• Controls program flow
• Important in loops and conditions
• Useful in validations
`.trim(),
    },

    {
      heading: 'Advantages of Boolean Logic',

      content: `
• Simplifies decision-making
• Makes conditions easier
• Improves logical programming
• Important for real-world applications
`.trim(),
    },

    {
      heading: 'Important Points About Booleans',

      content: `
• Boolean has only True and False
• Comparison operators return booleans
• Logical operators combine conditions
• Empty values often behave as False

Common Beginner Mistakes:

• Using = instead of ==
• Confusing True with "True"
• Incorrect logical conditions
• Forgetting indentation in conditions
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Python Boolean Example',

      language: 'python',

      code: `age = 20

print(age >= 18)
print(age < 10)

x = True
print(type(x))`,

      output: `True
False
<class 'bool'>`,
    },
  ],

  mcqs: [
    {
      question:
        'Boolean values in Python are?', 

      options: [
        'Yes and No',
        '1 and 0',
        'True and False',
        'On and Off'
      ],

      answer: 2,

      explanation:
        'Python boolean values are True and False.',
    },

    {
      question:
        'Which operator checks equality?',

      options: [
        '=',
        '==',
        '!=',
        '>='
      ],

      answer: 1,

      explanation:
        '== checks equality.',
    },

    {
      question:
        'Which logical operator reverses boolean value?',

      options: [
        'and',
        'or',
        'not',
        'is'
      ],

      answer: 2,

      explanation:
        'not reverses boolean value.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What are booleans in Python?',

      answer:
        'Booleans are data types that represent True or False values.',
    },

    {
      question:
        'What is difference between comparison and logical operators?',

      answer:
        'Comparison operators compare values while logical operators combine multiple conditions.',
    },
  ],

  nextTopic: 'python-operators',
},
{
  id: 'python-operators',

  title: 'Python Operators',

  slug: 'python-operators',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '55 min read',

  difficulty: 'Beginner',

  description:
    'Learn Python Operators deeply including arithmetic, assignment, comparison, logical, bitwise, identity, membership operators, precedence, and interview concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Infosys', 'TCS'],

  sections: [
    {
      heading: 'Python Operators',

      content: `
• Introduction to Operators

• Arithmetic Operators

• Assignment Operators

• Comparison Operators

• Logical Operators

• Bitwise Operators

• Identity Operators

• Membership Operators

• Operator Precedence

• Interview Concepts
`,
    },

    {
      heading: 'What are Operators in Python?',

      content: `
Operators are special symbols used to perform operations on variables and values.

Python operators help perform:

• Mathematical calculations
• Comparisons
• Logical decisions
• Data checks
• Memory operations
`.trim(),
    },

    {
      heading: 'Why Operators are Important',

      content: `
Operators are one of the most important parts of programming.

They are used in:

• Conditions
• Loops
• Calculations
• Data processing
• Decision making
• Real-world applications
`.trim(),
    },

    {
      heading: 'Arithmetic Operators',

      content: `
Arithmetic operators perform mathematical operations.

Important arithmetic operators:

• +  → Addition
• -  → Subtraction
• *  → Multiplication
• /  → Division
• // → Floor Division
• %  → Modulus
• ** → Exponent

Examples:

10 + 5
20 - 4
5 * 2
10 / 2
10 % 3
2 ** 3
`.trim(),
    },

    {
      heading: 'Addition Operator (+)',

      content: `
Addition operator adds values together.

Example:

x = 10
y = 20

print(x + y)

Output:
30

+ operator can also combine strings.

Example:

print("Py" + "thon")

Output:
Python
`.trim(),
    },

    {
      heading: 'Division vs Floor Division',

      content: `
Normal Division (/):

Returns decimal result.

Example:

10 / 3

Output:
3.3333

Floor Division (//):

Returns nearest smaller integer.

Example:

10 // 3

Output:
3
`.trim(),
    },

    {
      heading: 'Assignment Operators',

      content: `
Assignment operators assign values to variables.

Important assignment operators:

• =   → Assign
• +=  → Add and assign
• -=  → Subtract and assign
• *=  → Multiply and assign
• /=  → Divide and assign
• %=  → Modulus and assign

Example:

x = 10

x += 5

print(x)

Output:
15
`.trim(),
    },

    {
      heading: 'Comparison Operators',

      content: `
Comparison operators compare values and return True or False.

Important comparison operators:

• == → Equal to
• != → Not equal to
• >  → Greater than
• <  → Less than
• >= → Greater than equal to
• <= → Less than equal to

Example:

print(10 > 5)

Output:
True
`.trim(),
    },

    {
      heading: 'Logical Operators',

      content: `
Logical operators combine conditions.

Important logical operators:

• and
• or
• not

and Operator:
Returns True if all conditions are True.

or Operator:
Returns True if at least one condition is True.

not Operator:
Reverses boolean result.
`.trim(),
    },

    {
      heading: 'Bitwise Operators',

      content: `
Bitwise operators work on binary values.

Important bitwise operators:

• &  → AND
• |  → OR
• ^  → XOR
• ~  → NOT
• << → Left Shift
• >> → Right Shift

These operators are mostly used in advanced programming and optimization.
`.trim(),
    },

    {
      heading: 'Identity Operators',

      content: `
Identity operators check whether two variables refer to same object.

Important identity operators:

• is
• is not

Example:

x = [1, 2]
y = x

print(x is y)

Output:
True
`.trim(),
    },

    {
      heading: 'Membership Operators',

      content: `
Membership operators check whether value exists inside sequence.

Important membership operators:

• in
• not in

Example:

text = "Python"

print("P" in text)

Output:
True
`.trim(),
    },

    {
      heading: 'Operator Precedence',

      content: `
Operator precedence decides which operation executes first.

Example:

result = 10 + 2 * 5

Multiplication executes first.

Output:
20

Using brackets changes priority.

Example:

result = (10 + 2) * 5

Output:
60
`.trim(),
    },

    {
      heading: 'Advantages of Python Operators',

      content: `
• Simplifies programming
• Makes calculations easier
• Helps create conditions
• Improves code readability
• Useful in every Python program
`.trim(),
    },

    {
      heading: 'Real-world Usage of Operators',

      content: `
Operators are used in:

• Login systems
• Banking applications
• Shopping websites
• Data science
• Artificial Intelligence
• Game development
`.trim(),
    },

    {
      heading: 'Important Points About Python Operators',

      content: `
• Operators perform actions on values
• Comparison operators return boolean values
• Logical operators combine conditions
• Operator precedence affects output
• Membership operators work with sequences

Common Beginner Mistakes:

• Using = instead of ==
• Confusing / and //
• Incorrect logical conditions
• Forgetting brackets in expressions
• Misunderstanding operator precedence
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Arithmetic Operators Example',

      language: 'python',

      code: `x = 10
y = 3

print(x + y)
print(x - y)
print(x * y)
print(x / y)
print(x // y)
print(x % y)
print(x ** y)`,

      output: `13
7
30
3.3333333333333335
3
1
1000`,
    },

    {
      title: 'Comparison and Logical Operators Example',

      language: 'python',

      code: `age = 20

print(age >= 18)
print(age < 30 and age > 10)
print(not(age < 18))`,

      output: `True
True
True`,
    },

    {
      title: 'Membership and Identity Operators Example',

      language: 'python',

      code: `text = "Python"

print("P" in text)

x = [1, 2]
y = x

print(x is y)`,

      output: `True
True`,
    },
  ],

  mcqs: [
    {
      question:
        'Which operator is used for exponent in Python?',

      options: [
        '^',
        '**',
        '//',
        '%%'
      ],

      answer: 1,

      explanation:
        '** operator is used for exponent.',
    },

    {
      question:
        'Which operator checks equality?',

      options: [
        '=',
        '==',
        '!=',
        '>='
      ],

      answer: 1,

      explanation:
        '== operator checks equality.',
    },

    {
      question:
        'Which operator checks membership?',

      options: [
        'in',
        'is',
        '&',
        '//'
      ],

      answer: 0,

      explanation:
        'in operator checks membership.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What are operators in Python?',

      answer:
        'Operators are special symbols used to perform operations on variables and values.',
    },

    {
      question:
        'What is difference between == and is operator?',

      answer:
        '== checks value equality while is checks object identity in memory.',
    },
  ],

  nextTopic: 'python-lists',
},

]
