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

    ]