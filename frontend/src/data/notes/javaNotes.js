export const javaNotes = [
  {
    id: 'java-intro',
    title: 'Introduction to Java',
    slug: 'introduction',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&h=400&fit=crop',
    readTime: '8 min',
    difficulty: 'Beginner',
    description: 'Understand JVM, JDK, JRE, and how Java powers enterprise placement interviews.',
    companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture'],
    sections: [
      {
        heading: 'What is Java?',
        content:
          'Java is a high-level, object-oriented programming language designed for portability. Write once, run anywhere (WORA) is achieved through the Java Virtual Machine (JVM), which executes bytecode on any supported platform.',
      },
      {
        heading: 'JDK vs JRE vs JVM',
        content:
          'JDK (Java Development Kit) includes compiler and tools for development. JRE (Java Runtime Environment) provides libraries and JVM to run applications. JVM interprets bytecode and handles memory management via garbage collection.',
      },
    ],
    tips: ['Always mention JVM and platform independence in HR + technical rounds.'],
    warnings: ['Do not confuse JDK with JRE in written tests — definitions are often asked verbatim.'],
    codeExamples: [
      {
        title: 'Hello World',
        language: 'java',
        code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Placement Prep!");
    }
}`,
        output: 'Hello, Placement Prep!',
      },
    ],
    mcqs: [
      {
        question: 'Which component executes Java bytecode?',
        options: ['JDK', 'JRE', 'JVM', 'Compiler'],
        answer: 2,
        explanation: 'JVM loads and runs bytecode. JDK compiles source; JRE provides runtime libraries.',
      },
      {
        question: 'Java is primarily which type of language?',
        options: ['Procedural', 'Object-Oriented', 'Markup', 'Functional only'],
        answer: 1,
        explanation: 'Java is object-oriented with support for functional features since Java 8.',
      },
    ],
    interviewQuestions: [
      {
        question: 'Why is Java called platform independent?',
        answer:
          'Source compiles to bytecode (.class), and JVM on each OS executes that bytecode without recompiling for every platform.',
      },
      {
        question: 'What is the entry point of a Java application?',
        answer: 'public static void main(String[] args) inside a class.',
      },
    ],
    nextTopic: 'variables-datatypes',
  },
  {
    id: 'java-vars',
    title: 'Variables & Data Types',
    slug: 'variables-datatypes',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=400&fit=crop',
    readTime: '12 min',
    difficulty: 'Beginner',
    description: 'Master primitives, wrappers, type casting, and naming conventions for coding tests.',
    companyTags: ['Amazon', 'TCS', 'Capgemini'],
    sections: [
      {
        heading: 'Primitive Data Types',
        content:
          'Java has 8 primitives: byte, short, int, long, float, double, char, boolean. Each has a fixed size and default value (0 for numeric types, false for boolean).',
      },
      {
        heading: 'Variables & Constants',
        content:
          'Use int score = 0; for variables. Declare constants with final: final double PI = 3.14159;. Local variables must be initialized before use.',
      },
    ],
    tips: ['int is default for loops in interviews; use long for timestamps.'],
    warnings: ['Narrowing casts (double → int) lose precision — common trap in MCQs.'],
    codeExamples: [
      {
        title: 'Primitives & Casting',
        language: 'java',
        code: `public class TypesDemo {
    public static void main(String[] args) {
        int a = 10;
        double b = a; // widening — automatic
        int c = (int) 9.99; // narrowing — explicit
        System.out.println(b + " " + c);
    }
}`,
        output: '10.0 9',
      },
    ],
    mcqs: [
      {
        question: 'Size of boolean in Java specification?',
        options: ['1 bit exactly', 'Not precisely defined', '2 bytes', '4 bytes'],
        answer: 1,
        explanation: 'JVM decides boolean storage; interviewers test conceptual knowledge here.',
      },
    ],
    interviewQuestions: [
      {
        question: 'Difference between == and .equals()?',
        answer:
          '== compares references for objects (values for primitives). .equals() compares object content when overridden (e.g., String).',
      },
    ],
    nextTopic: 'control-flow',
  },
  {
    id: 'java-control',
    title: 'Control Flow',
    slug: 'control-flow',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=400&fit=crop',
    readTime: '15 min',
    difficulty: 'Intermediate',
    description: 'if-else, switch, loops, break/continue — essential for aptitude-style coding rounds.',
    companyTags: ['Infosys', 'Wipro', 'Cognizant'],
    sections: [
      {
        heading: 'Conditional Statements',
        content:
          'Use if, else if, else for branching. Switch works with byte, short, char, int, String, enum. Always include break in switch cases unless fall-through is intentional.',
      },
      {
        heading: 'Loops',
        content:
          'for is best when iteration count is known. while checks condition first; do-while runs at least once. Enhanced for-each iterates arrays and collections.',
      },
    ],
    tips: ['Prefer switch over long if-else chains for readable MCQ solutions.'],
    warnings: ['Missing break in switch causes fall-through bugs — highlight in interviews.'],
    codeExamples: [
      {
        title: 'FizzBuzz Pattern',
        language: 'java',
        code: `for (int i = 1; i <= 15; i++) {
    if (i % 15 == 0) System.out.print("FizzBuzz ");
    else if (i % 3 == 0) System.out.print("Fizz ");
    else if (i % 5 == 0) System.out.print("Buzz ");
    else System.out.print(i + " ");
}`,
        output: '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz',
      },
    ],
    mcqs: [
      {
        question: 'Which loop always runs at least once?',
        options: ['for', 'while', 'do-while', 'for-each'],
        answer: 2,
        explanation: 'do-while evaluates condition after the body.',
      },
    ],
    interviewQuestions: [
      {
        question: 'Write logic to check if a number is prime.',
        answer: 'Loop from 2 to sqrt(n); if any divisor divides n, not prime. Handle n <= 1 separately.',
      },
    ],
    nextTopic: 'oops-basics',
  },
  {
    id: 'java-oops',
    title: 'OOP Basics',
    slug: 'oops-basics',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa90?w=1200&h=400&fit=crop',
    readTime: '18 min',
    difficulty: 'Intermediate',
    description: 'Classes, objects, encapsulation, inheritance, and polymorphism for technical interviews.',
    companyTags: ['Amazon', 'Accenture', 'Deloitte'],
    sections: [
      {
        heading: 'Four Pillars of OOP',
        content:
          'Encapsulation hides data with private fields and public methods. Inheritance reuses code via extends. Polymorphism allows one interface many implementations. Abstraction hides complexity (abstract classes, interfaces).',
      },
      {
        heading: 'Constructors',
        content:
          'Constructors initialize objects. Default constructor is provided if none defined. Use super() to call parent constructor in child classes.',
      },
    ],
    tips: ['Explain real examples: ArrayList vs LinkedList for polymorphism.'],
    warnings: ['Java does not support multiple inheritance of classes — use interfaces.'],
    codeExamples: [
      {
        title: 'Inheritance Example',
        language: 'java',
        code: `class Animal {
    void speak() { System.out.println("..."); }
}
class Dog extends Animal {
    @Override
    void speak() { System.out.println("Bark"); }
}
public class OopDemo {
    public static void main(String[] args) {
        Animal a = new Dog();
        a.speak();
    }
}`,
        output: 'Bark',
      },
    ],
    mcqs: [
      {
        question: 'Which keyword prevents method overriding?',
        options: ['static', 'final', 'abstract', 'private'],
        answer: 1,
        explanation: 'final methods cannot be overridden by subclasses.',
      },
    ],
    interviewQuestions: [
      {
        question: 'Difference between abstract class and interface?',
        answer:
          'Abstract class can have state and partial implementation; single inheritance. Interface defines contracts; a class can implement multiple interfaces (Java 8+ default methods).',
      },
    ],
    nextTopic: null,
  },
]
