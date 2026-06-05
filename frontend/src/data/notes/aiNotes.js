export const aiNotes = [
  {
    id: 'ai-introduction',
    title: 'Artificial Intelligence Introduction',
    slug: 'ai-introduction',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935',
    readTime: '15 min read',
    difficulty: 'Beginner',
    description: 'Learn the fundamentals of Artificial Intelligence, Machine Learning, Deep Learning, and AI domains.',
    companyTags: ['Google', 'Microsoft', 'Amazon', 'TCS', 'Infosys'],
    sections: [
      {
        heading: 'What is Artificial Intelligence?',
        content: `
Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions.
The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.
        `.trim(),
      },
      {
        heading: 'AI vs Machine Learning vs Deep Learning',
        content: `
• **Artificial Intelligence**: The broad science of mimicking human abilities.
• **Machine Learning (ML)**: A subset of AI that allows machines to learn from data without explicit programming.
• **Deep Learning (DL)**: A subset of ML that uses multi-layered artificial neural networks inspired by the human brain to learn patterns.
        `.trim(),
      }
    ],
    codeExamples: [
      {
        title: 'Simple Python Linear Regression',
        language: 'python',
        code: `from sklearn.linear_model import LinearRegression\nimport numpy as np\n\n# Toy dataset\nX = np.array([[1], [2], [3]])\ny = np.array([2, 4, 6])\n\nmodel = LinearRegression()\nmodel.fit(X, y)\nprint("Prediction for 4:", model.predict([[4]]));`,
        output: 'Prediction for 4: [8.]'
      }
    ],
    mcqs: [
      {
        question: 'Who coined the term "Artificial Intelligence"?',
        options: [
          'Alan Turing',
          'John McCarthy',
          'Marvin Minsky',
          'Herbert Simon'
        ],
        answer: 1,
        explanation: 'The term "Artificial Intelligence" was coined by John McCarthy in 1956 at the Dartmouth Conference.'
      }
    ],
    interviewQuestions: [
      {
        question: 'What is the Turing Test?',
        answer: 'The Turing Test, proposed by Alan Turing in 1950, is a test of a machine\'s ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human.'
      }
    ],
    nextTopic: ''
  }
]
