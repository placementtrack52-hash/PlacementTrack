export const pythonNotes = [
  {
    id: 'py-intro',
    title: 'Introduction to Python',
    slug: 'introduction',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1200&h=400&fit=crop',
    readTime: '7 min',
    difficulty: 'Beginner',
    description:
      'Learn **Python** syntax, interpreter workflow, and why this **programming language** dominates data and automation interviews.',
    companyTags: ['TCS', 'Wipro', 'IBM', 'Startups'],
    sections: [
      {
        heading: 'Why Python for Placement?',
        content:
          'Python has readable syntax, rich libraries, and fast prototyping — ideal for coding rounds, scripting, and ML screening tests.',
      },
      {
        heading: 'Running Python',
        content:
          'Use python filename.py or REPL (python). Indentation defines blocks — no braces. PEP 8 guides style: 4 spaces per indent.',
      },
    ],
    tips: ['Mention indentation rules — unique to Python vs Java/C++.'],
    warnings: ['Mixing tabs and spaces causes IndentationError.'],
    codeExamples: [
      {
        title: 'Hello World',
        language: 'python',
        code: `def main():
    print("Hello, Placement Prep!")

if __name__ == "__main__":
    main()`,
        output: 'Hello, Placement Prep!',
      },
    ],
    mcqs: [
      {
        question: 'Which symbol starts a single-line comment?',
        options: ['//', '#', '--', '/*'],
        answer: 1,
        explanation: 'Python uses # for comments.',
      },
    ],
    interviewQuestions: [
      {
        question: 'Is Python compiled or interpreted?',
        answer:
          'Python source is compiled to bytecode (.pyc) then interpreted by the Python VM — often described as interpreted for interviews.',
      },
    ],
    nextTopic: 'variables-types',
  },
  {
    id: 'py-vars',
    title: 'Variables & Types',
    slug: 'variables-types',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=400&fit=crop',
    readTime: '11 min',
    difficulty: 'Beginner',
    description: 'Dynamic typing, mutability, strings, and type conversion for written tests.',
    companyTags: ['Infosys', 'Capgemini', 'Amazon'],
    sections: [
      {
        heading: 'Dynamic Typing',
        content:
          'Variables bind to objects at runtime. x = 10 then x = "hi" is valid — type follows the object, not the variable name.',
      },
      {
        heading: 'Core Types',
        content:
          'int, float, str, bool, list, tuple, dict, set. Use type() and isinstance() to inspect types in debugging.',
      },
    ],
    tips: ['Use f-strings for clean output in coding rounds: f"Score: {score}".'],
    warnings: ['Lists are mutable; tuples are immutable — common comparison question.'],
    codeExamples: [
      {
        title: 'Type Conversion',
        language: 'python',
        code: `a = "42"
b = int(a)
c = float(b)
print(b + 8, c)`,
        output: '50 50.0',
      },
    ],
    mcqs: [
      {
        question: 'Which type is immutable?',
        options: ['list', 'dict', 'tuple', 'set'],
        answer: 2,
        explanation: 'Tuples cannot be changed after creation.',
      },
    ],
    interviewQuestions: [
      {
        question: 'Difference between list and tuple?',
        answer: 'Lists are mutable and slower for some ops; tuples are immutable and hashable if elements are hashable.',
      },
    ],
    nextTopic: 'control-flow',
  },
  {
    id: 'py-control',
    title: 'Control Flow',
    slug: 'control-flow',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&h=400&fit=crop',
    readTime: '14 min',
    difficulty: 'Intermediate',
    description: 'if-elif-else, for, while, comprehensions — core patterns for placement coding.',
    companyTags: ['TCS', 'Cognizant', 'Deloitte'],
    sections: [
      {
        heading: 'Conditionals',
        content:
          'if, elif, else with indentation. Truthy values: non-empty collections, non-zero numbers; Falsy: 0, "", [], None.',
      },
      {
        heading: 'Loops & Comprehensions',
        content:
          'for item in iterable: is idiomatic. while runs until condition false. List comprehensions: squares = [x*x for x in range(10)].',
      },
    ],
    tips: ['Use enumerate() when you need index + value in loops.'],
    warnings: ['Never modify a list while iterating over it — use copy or comprehension.'],
    codeExamples: [
      {
        title: 'List Comprehension',
        language: 'python',
        code: `evens = [n for n in range(1, 11) if n % 2 == 0]
print(evens)`,
        output: '[2, 4, 6, 8, 10]',
      },
    ],
    mcqs: [
      {
        question: 'range(3) generates?',
        options: ['1,2,3', '0,1,2', '0,1,2,3', '1,2'],
        answer: 1,
        explanation: 'range stops before end: 0 to n-1.',
      },
    ],
    interviewQuestions: [
      {
        question: 'How do you iterate a dictionary?',
        answer: 'for key, value in d.items(): or keys()/values() as needed.',
      },
    ],
    nextTopic: 'functions',
  },
  {
    id: 'py-functions',
    title: 'Functions',
    slug: 'functions',
    image: 'https://images.unsplash.com/photo-1542831371-d531d176c2c0?w=1200&h=400&fit=crop',
    readTime: '16 min',
    difficulty: 'Intermediate',
    description: 'def, return, *args, **kwargs, lambda — essential for DSA scripts in Python.',
    companyTags: ['Amazon', 'Microsoft', 'Startups'],
    sections: [
      {
        heading: 'Defining Functions',
        content:
          'def greet(name): return f"Hi {name}". Default args evaluated once — avoid mutable defaults like def f(lst=[]).',
      },
      {
        heading: '*args and **kwargs',
        content:
          '*args collects positional arguments as tuple; **kwargs collects keyword arguments as dict. Used in wrappers and decorators.',
      },
    ],
    tips: ['Use lambda for short sort keys: sorted(arr, key=lambda x: x[1]).'],
    warnings: ['Mutable default arguments cause shared state bugs.'],
    codeExamples: [
      {
        title: 'Lambda & map',
        language: 'python',
        code: `nums = [1, 2, 3, 4]
squared = list(map(lambda x: x ** 2, nums))
print(squared)`,
        output: '[1, 4, 9, 16]',
      },
    ],
    mcqs: [
      {
        question: 'What does return without a value return?',
        options: ['0', 'None', 'False', 'Error'],
        answer: 1,
        explanation: 'Bare return exits with None.',
      },
    ],
    interviewQuestions: [
      {
        question: 'Explain decorators in one line.',
        answer: 'A decorator is a function that takes a function and returns an enhanced wrapper function.',
      },
    ],
    nextTopic: null,
  },
]
