export const dsaNotes = [
  {
    id: 'dsa-introduction',
    title: 'Data Structures & Algorithms',
    slug: 'dsa-introduction',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
    readTime: '15 min read',
    difficulty: 'Beginner',
    description: 'Learn DSA fundamentals, time/space complexity, data structure types, and basic algorithm types.',
    companyTags: ['Google', 'Amazon', 'Microsoft', 'Adobe', 'TCS'],
    sections: [
      {
        heading: 'What is DSA?',
        content: `
• **Data Structure**: A specialized way of organizing and storing data in a computer so that it can be accessed and worked with efficiently (e.g. Arrays, Linked Lists, Trees, Graphs).
• **Algorithm**: A step-by-step procedure or set of rules to be followed in calculations or other problem-solving operations.
        `.trim(),
      },
      {
        heading: 'Time and Space Complexity',
        content: `
To compare algorithms, we use asymptotic notation:
• **Time Complexity**: The amount of time taken by an algorithm to run as a function of the length of the input.
• **Space Complexity**: The amount of memory space required by an algorithm to run as a function of the length of the input.
We express complexities using **Big O notation** (e.g., O(1), O(log n), O(n), O(n log n), O(n²)).
        `.trim(),
      }
    ],
    codeExamples: [
      {
        title: 'Binary Search Algorithm (Time: O(log n))',
        language: 'javascript',
        code: `function binarySearch(arr, target) {\n    let left = 0;\n    let right = arr.length - 1;\n    while (left <= right) {\n        let mid = Math.floor((left + right) / 2);\n        if (arr[mid] === target) return mid;\n        if (arr[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}`,
        output: 'Returns index of target if found in sorted array, else -1.'
      }
    ],
    mcqs: [
      {
        question: 'What is the time complexity of searching an element in a balanced Binary Search Tree (BST)?',
        options: [
          'O(1)',
          'O(log n)',
          'O(n)',
          'O(n log n)'
        ],
        answer: 1,
        explanation: 'A balanced BST halves the search space at each step, resulting in O(log n) time complexity.'
      }
    ],
    interviewQuestions: [
      {
        question: 'Why do we need data structures?',
        answer: 'Data structures allow us to organize data in a way that minimizes time complexity (CPU cycles) and space complexity (memory usage) during data storage, retrieval, and updates.'
      }
    ],
    nextTopic: ''
  }
]
