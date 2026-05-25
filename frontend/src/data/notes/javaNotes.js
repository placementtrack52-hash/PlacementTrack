export const javaNotes = [
  {
    id: 'java-intro',

    title: 'Introduction to Java',

    slug: 'introduction',

    image:
      'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&h=400&fit=crop',

    readTime: '22 min',

    difficulty: 'Beginner',

    description:
      'This chapter builds a strong foundation for Java programming by explaining how Java works internally, why companies still rely on it heavily, and how JVM, JRE, and JDK interact during program execution. These concepts are asked repeatedly in placements, technical interviews, and MCQ rounds.',

    companyTags: [
      'TCS NQT',
      'Infosys InfytQ',
      'Wipro',
      'Accenture ASE',
      'Capgemini',
      'Cognizant',
    ],

    realWorldUse: [
      'Banking and financial software',
      'Enterprise backend systems',
      'Android application development',
      'Cloud-based APIs and web services',
      'Large-scale e-commerce platforms',
      'Distributed systems',
    ],

    revisionNotes: [
      'Java source code → Bytecode → JVM execution',
      'JDK = Development tools + JRE',
      'JRE = JVM + runtime libraries',
      'JVM executes bytecode',
      'Java follows WORA (Write Once Run Anywhere)',
      'Bytecode file extension is .class',
    ],

    commonMistakes: [
      'Confusing JVM and JRE',
      'Thinking Java directly creates machine code',
      'Assuming Java is fully hardware independent',
      'Forgetting that JDK already contains JRE',
      'Using “compiler executes code” in interviews',
    ],

    memoryTricks: [
      'JDK → “Developer Kit” → Used while coding',
      'JRE → “Runtime Environment” → Used while running',
      'JVM → “Virtual Machine” → Executes bytecode',
    ],

    interviewTrap: [
      'Interviewers often ask “Can JVM run C++ programs?” Answer: No, JVM only executes Java bytecode.',
      'Many students say JRE contains compiler. Compiler exists inside JDK, not JRE.',
    ],

    sections: [
      {
        heading: 'Why Java is Still Dominating Placements',

        content:
          'Java continues to dominate placement preparation because it is widely used in enterprise-level applications and backend systems. Service-based companies prefer Java because of its readability and stability, while product-based companies use it for scalable systems.\n\nJava is also one of the safest languages for beginners entering technical interviews because:\n\n• Syntax is cleaner compared to C++\n• Strong object-oriented concepts improve design understanding\n• Huge community support exists\n• DSA implementation becomes easier\n• Memory management is automatic through garbage collection\n\nMost companies expect freshers to know at least:\n\n• Core Java basics\n• OOP concepts\n• Collections Framework\n• Exception handling\n• Multithreading basics\n• JDBC and database interaction\n\nEven if a company allows multiple languages during coding rounds, Java remains one of the safest options for writing readable interview code.',
      },

      {
        heading: 'What Exactly is Java?',

        content:
          'Java is a high-level, class-based, object-oriented programming language designed for portability, security, and scalability.\n\nUnlike low-level languages that interact closely with hardware, Java focuses on writing human-readable code which later gets converted into executable instructions.\n\nThe most important idea behind Java is:\n\n“Write Once, Run Anywhere.”\n\nThis means developers can write code once and run it on multiple operating systems without rewriting the entire application.\n\nJava achieves this using bytecode and JVM.\n\nWhen a Java file is compiled:\n\n.java file → converted into → .class file (bytecode)\n\nThis bytecode is platform independent.\n\nDifferent operating systems contain different JVM implementations capable of understanding and executing the same bytecode.\n\nThis architecture made Java extremely successful in enterprise environments where applications must work reliably across different systems.',
      },

      {
        heading: 'How Java Programs Actually Run Internally',

        content:
          'Most beginners memorize JVM definitions without understanding the actual execution flow.\n\nUnderstanding the flow is extremely important for interviews.\n\nSTEP 1 → Writing Source Code\n\nDevelopers write Java code inside .java files.\n\nExample:\n\nHelloWorld.java\n\nSTEP 2 → Compilation\n\nThe javac compiler converts source code into bytecode.\n\nCommand:\n\njavac HelloWorld.java\n\nGenerated file:\n\nHelloWorld.class\n\nThis .class file contains bytecode, not machine code.\n\nSTEP 3 → Class Loading\n\nJVM loads required class files into memory using Class Loader subsystem.\n\nSTEP 4 → Bytecode Verification\n\nJVM checks whether bytecode is safe and valid.\n\nThis improves security.\n\nSTEP 5 → Execution\n\nExecution Engine converts bytecode into machine-level instructions.\n\nModern JVMs use JIT (Just-In-Time) Compiler for optimization.\n\nSTEP 6 → Memory Management\n\nJVM automatically manages memory and removes unused objects using Garbage Collection.\n\nThis entire execution process is a favorite interview topic for freshers.',
      },

      {
        heading: 'Understanding JVM in Detail',

        content:
          'JVM (Java Virtual Machine) is the runtime engine responsible for executing Java bytecode.\n\nIt acts as a bridge between Java bytecode and the operating system.\n\nMain Responsibilities of JVM:\n\n• Loads bytecode\n• Verifies bytecode security\n• Executes instructions\n• Manages memory\n• Handles garbage collection\n• Provides platform independence\n\nMajor Components of JVM:\n\n1. Class Loader\n\nLoads class files into memory.\n\n2. Method Area\n\nStores class-level metadata and static variables.\n\n3. Heap Memory\n\nStores objects and instance variables.\n\n4. Stack Memory\n\nStores method calls and local variables.\n\n5. Program Counter Register\n\nTracks currently executing instruction.\n\n6. Native Method Stack\n\nHandles native methods written in languages like C.\n\n7. Execution Engine\n\nExecutes bytecode.\n\nFreshers often forget that JVM itself is platform dependent.\n\nDifferent operating systems have different JVM implementations.\n\nThis is a very common interview trap.',
      },

      {
        heading: 'JDK vs JRE vs JVM — Complete Understanding',

        content:
          'This is one of the most repeated theory questions in placement exams.\n\nJDK (Java Development Kit)\n\nJDK is the complete package used for Java development.\n\nIt contains:\n\n• Compiler (javac)\n• Debugging tools\n• JRE\n• Development utilities\n\nWithout JDK, developers cannot compile Java programs.\n\nJRE (Java Runtime Environment)\n\nJRE provides the environment required to run Java applications.\n\nIt contains:\n\n• JVM\n• Runtime libraries\n• Supporting files\n\nJRE does NOT contain compiler.\n\nJVM (Java Virtual Machine)\n\nJVM is responsible for executing bytecode.\n\nSimple Relationship:\n\nJDK > JRE > JVM\n\nMeaning:\n\nJDK contains JRE\nJRE contains JVM',
      },

      {
        heading: 'Why Java is Called Platform Independent',

        content:
          'Java source code is not directly converted into machine code.\n\nInstead:\n\nSource Code → Bytecode → JVM Execution\n\nBytecode remains the same across operating systems.\n\nOnly JVM changes depending on the operating system.\n\nBecause every operating system contains its own JVM implementation, the same bytecode can execute on multiple systems.\n\nThis architecture provides platform independence.\n\nHowever, remember:\n\nJVM itself is platform dependent.\n\nThis distinction is frequently asked during interviews.',
      },

      {
        heading: 'Features of Java',

        content:
          '1. Object-Oriented\n\nJava follows OOP concepts like inheritance, polymorphism, encapsulation, and abstraction.\n\n2. Platform Independent\n\nJava programs run on any system having JVM.\n\n3. Secure\n\nJava avoids direct pointer manipulation and includes bytecode verification.\n\n4. Robust\n\nStrong exception handling and memory management improve reliability.\n\n5. Multithreaded\n\nJava supports concurrent execution using threads.\n\n6. Distributed\n\nJava supports network-based applications.\n\n7. High Performance\n\nModern JVM optimization and JIT compilation improve speed.\n\n8. Dynamic\n\nJava supports dynamic class loading during runtime.',
      },

      {
        heading: 'Garbage Collection in Java',

        content:
          'Java automatically removes unused objects from memory using Garbage Collection.\n\nThis reduces memory leaks and manual memory handling issues.\n\nWhen objects no longer have references pointing toward them, JVM marks them for garbage collection.\n\nAdvantages:\n\n• Reduces memory management burden\n• Improves application stability\n• Prevents many low-level memory errors\n\nImportant:\n\nSystem.gc() only requests garbage collection.\n\nIt does NOT guarantee immediate cleanup.\n\nThis is a very famous MCQ concept.',
      },
    ],

    tips: [
      'Always explain Java execution flow step-by-step in interviews.',
      'Remember that bytecode is platform independent, not JVM.',
      'Use real examples while explaining OOP or JVM.',
      'Many MCQs directly ask JDK > JRE > JVM hierarchy.',
      'Focus heavily on JVM memory areas for advanced interviews.',
    ],

    warnings: [
      'Do not say Java is purely compiled language — it is both compiled and interpreted.',
      'JRE does not contain development tools.',
      'JVM is not operating-system independent internally.',
      'Garbage collection is automatic but not fully predictable.',
    ],

    codeExamples: [
      {
        title: 'First Java Program',

        language: 'java',

        code: `public class HelloWorld {

    public static void main(String[] args) {

        System.out.println("Welcome to Java!");

    }

}`,

        output: 'Welcome to Java!',
      },

      {
        title: 'Understanding Compilation',

        language: 'java',

        code: `class Demo {

    public static void main(String[] args) {

        System.out.println("Java creates bytecode first");

    }

}`,

        output: 'Java creates bytecode first',
      },
    ],

    outputQuestions: [
      {
        question: 'Predict the output',

        code: `System.out.println(10 + 20 + "Java");`,

        answer: '30Java',

        explanation:
          'Integer addition happens first because both operands are numeric before string concatenation begins.',
      },

      {
        question: 'Predict the output',

        code: `System.out.println("Java" + 10 + 20);`,

        answer: 'Java1020',

        explanation:
          'Once Java encounters a String first, remaining values are concatenated as strings.',
      },

      {
        question: 'Predict the output',

        code: `System.out.println(10 + 20 + "Java" + 10 + 20);`,

        answer: '30Java1020',

        explanation:
          '10 + 20 becomes 30 first. After string appears, remaining values are concatenated.',
      },
    ],

    mcqs: [
      {
        question:
          'Which component converts Java source code into bytecode?',

        options: ['JVM', 'JRE', 'javac compiler', 'Class Loader'],

        answer: 2,

        explanation:
          'javac compiler converts .java source files into .class bytecode files.',
      },

      {
        question:
          'Which memory area stores objects in JVM?',

        options: ['Stack', 'Heap', 'Method Area', 'Register'],

        answer: 1,

        explanation:
          'Objects and instance variables are stored inside heap memory.',
      },

      {
        question:
          'Which statement is correct regarding JRE?',

        options: [
          'Contains compiler',
          'Contains JVM',
          'Used only for coding',
          'Executes C++ programs',
        ],

        answer: 1,

        explanation:
          'JRE contains JVM and runtime libraries required for execution.',
      },
    ],

    interviewQuestions: [
      {
        question:
          'Why is Java called both compiled and interpreted language?',

        answer:
          'Java source code is first compiled into bytecode using javac compiler. JVM then interprets or JIT-compiles that bytecode during execution.',
      },

      {
        question:
          'What is the difference between heap and stack memory?',

        answer:
          'Heap memory stores objects and instance variables, while stack memory stores method calls and local variables.',
      },

      {
        question:
          'What happens when JVM starts execution?',

        answer:
          'JVM loads classes, verifies bytecode, allocates memory areas, and begins execution through the execution engine.',
      },

      {
        question:
          'Why is Java considered secure?',

        answer:
          'Java avoids direct pointer manipulation, performs bytecode verification, and executes programs inside JVM sandbox environments.',
      },
    ],

    quickRevision: [
      'Java source file extension → .java',
      'Bytecode file extension → .class',
      'Compiler name → javac',
      'Execution command → java ClassName',
      'JDK contains JRE',
      'JRE contains JVM',
      'Heap stores objects',
      'Stack stores method calls',
    ],

    nextTopic: 'java-getting-started',
  },
  
  {
    id: 'java-getting-started',

    title: 'Getting Started with Java',

    slug: 'getting-started',

    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&h=400&fit=crop',

    readTime: '18 min',

    difficulty: 'Beginner',

    description:
      'Start your Java journey by understanding how Java programs are written, compiled, and executed. This chapter helps beginners set up the correct mindset before diving into syntax and coding concepts.',

    companyTags: [
      'TCS NQT',
      'Infosys',
      'Wipro',
      'Capgemini',
      'Accenture',
    ],

    realWorldUse: [
      'Writing backend applications',
      'Building Android apps',
      'Creating enterprise software',
      'Learning DSA for coding interviews',
    ],

    revisionNotes: [
      'Java code is stored in .java files',
      'Compiler converts source code into bytecode',
      'Bytecode runs inside JVM',
      'javac = compiler command',
      'java = execution command',
    ],

    commonMistakes: [
      'Using wrong file name compared to class name',
      'Forgetting main() method',
      'Trying to run .java file directly without compilation',
    ],

    memoryTricks: [
      'javac → creates bytecode',
      'java → runs bytecode',
      '.java → source code',
      '.class → bytecode',
    ],

    sections: [
      {
        heading: 'What Does “Getting Started” Mean in Java?',

        content:
          'Before writing advanced Java programs, students must understand the complete workflow of Java development.\n\nMost beginners directly jump into coding without understanding:\n\n• How Java code executes\n• Why compilation is required\n• What JVM actually does\n• Why class names matter\n\nThis chapter builds that foundation.\n\nOnce these basics become clear, later topics like OOP, collections, and multithreading become much easier.',
      },

      {
        heading: 'Steps to Run a Java Program',

        content:
          'Java follows a two-step execution process.\n\nSTEP 1 → Compilation\n\nThe compiler converts source code into bytecode.\n\nCommand:\n\njavac FileName.java\n\nSTEP 2 → Execution\n\nJVM executes the generated bytecode.\n\nCommand:\n\njava FileName\n\nImportant:\n\nDo not write .class or .java while running the program using java command.',
      },

      {
        heading: 'Structure of a Basic Java Program',

        content:
          'Every Java program follows a standard structure.\n\nMain components:\n\n• Class declaration\n• main() method\n• Statements inside main()\n\nThe JVM always starts execution from:\n\npublic static void main(String[] args)\n\nThis is called the entry point of a Java application.',
      },

      {
        heading: 'Why File Name and Class Name Must Match',

        content:
          'In Java, the public class name and file name must be identical.\n\nExample:\n\nIf class name is:\n\npublic class Demo\n\nThen file name must be:\n\nDemo.java\n\nOtherwise compilation error occurs.\n\nThis is one of the most common beginner mistakes.',
      },
    ],

    tips: [
      'Always save file before compilation.',
      'Class name should start with capital letter by convention.',
      'main() method syntax should be memorized completely.',
      'Practice compile + run commands multiple times.',
    ],

    warnings: [
      'Java is case-sensitive.',
      'Class name mismatch causes compilation failure.',
      'main() method signature must be exact.',
    ],

    codeExamples: [
      {
        title: 'Basic Java Program',

        language: 'java',

        code: `public class Demo {

    public static void main(String[] args) {

        System.out.println("Java Started Successfully");

    }

}`,

        output: 'Java Started Successfully',
      },
    ],

    outputQuestions: [
      {
        question: 'Predict the output',

        code: `System.out.println("Java");
System.out.println("Placement");`,

        answer: `Java
Placement`,

        explanation:
          'println() prints output and moves cursor to next line.',
      },
    ],

    mcqs: [
      {
        question:
          'Which method acts as the entry point of a Java program?',

        options: [
          'start()',
          'run()',
          'main()',
          'execute()',
        ],

        answer: 2,

        explanation:
          'Execution of Java applications begins from main() method.',
      },
    ],

    interviewQuestions: [
      {
        question:
          'Why does Java require JVM?',

        answer:
          'JVM executes bytecode and provides platform independence.',
      },
    ],

    nextTopic: 'java-syntax',
  },

  {
    id: 'java-syntax',

    title: 'Java Syntax',

    slug: 'java-syntax',

    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa90?w=1200&h=400&fit=crop',

    readTime: '20 min',

    difficulty: 'Beginner',

    description:
      'Understand Java syntax rules including class structure, semicolons, braces, identifiers, keywords, and naming conventions used in coding rounds.',

    companyTags: [
      'TCS',
      'Infosys',
      'Cognizant',
      'Wipro',
    ],

    realWorldUse: [
      'Writing clean production code',
      'Avoiding syntax errors',
      'Improving coding interview speed',
    ],

    revisionNotes: [
      'Java is case-sensitive',
      'Statements end with semicolon',
      'Code blocks use curly braces',
      'Identifiers cannot start with numbers',
    ],

    commonMistakes: [
      'Missing semicolon',
      'Using reserved keywords as variable names',
      'Incorrect uppercase/lowercase usage',
    ],

    sections: [
      {
        heading: 'What is Syntax in Java?',

        content:
          'Syntax refers to the rules that define how Java code must be written.\n\nIf syntax rules are violated, compilation errors occur.\n\nEven logically correct programs fail if syntax is incorrect.\n\nThis is why beginners must focus heavily on syntax accuracy.',
      },

      {
        heading: 'Important Syntax Rules',

        content:
          '1. Java is case-sensitive.\n\nExample:\n\nage and Age are different variables.\n\n2. Every statement usually ends with semicolon (;).\n\n3. Curly braces {} define code blocks.\n\n4. Class names should begin with uppercase letters.\n\n5. Variable names should follow camelCase naming convention.\n\n6. Java keywords cannot be used as identifiers.',
      },

      {
        heading: 'Identifiers in Java',

        content:
          'Identifiers are names given to variables, methods, classes, and objects.\n\nRules:\n\n• Cannot start with numbers\n• Cannot contain spaces\n• Cannot use Java keywords\n• Can contain _ and $\n\nValid:\n\nstudentName\n_age\nprice1\n\nInvalid:\n\n1name\nclass\nstudent name',
      },

      {
        heading: 'Keywords in Java',

        content:
          'Keywords are reserved words having predefined meaning in Java.\n\nExamples:\n\nclass\npublic\nstatic\nvoid\nint\nif\nelse\nreturn\n\nThese words cannot be used as variable names.',
      },
    ],

    tips: [
      'Practice syntax carefully in beginning.',
      'Most beginner errors are syntax-based.',
      'Use proper indentation for readability.',
    ],

    warnings: [
      'Java ignores extra spaces but not syntax errors.',
      'Keywords cannot be identifiers.',
    ],

    codeExamples: [
      {
        title: 'Understanding Java Syntax',

        language: 'java',

        code: `public class SyntaxDemo {

    public static void main(String[] args) {

        int studentAge = 20;

        System.out.println(studentAge);

    }

}`,

        output: '20',
      },
    ],

    outputQuestions: [
      {
        question: 'Find the error',

        code: `int 1age = 20;`,

        answer: 'Compilation Error',

        explanation:
          'Identifiers cannot start with numbers.',
      },
    ],

    mcqs: [
      {
        question:
          'Which symbol is generally used to terminate statements in Java?',

        options: [':', ';', '#', '@'],

        answer: 1,

        explanation:
          'Semicolon terminates most Java statements.',
      },
    ],

    interviewQuestions: [
      {
        question:
          'What are identifiers in Java?',

        answer:
          'Identifiers are user-defined names for variables, methods, classes, and objects.',
      },
    ],

    nextTopic: 'java-output',
  },

  {
    id: 'java-output',

    title: 'Java Output Statements',

    slug: 'java-output',

    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=400&fit=crop',

    readTime: '24 min',

    difficulty: 'Beginner',

    description:
      'Learn how Java displays output using print(), println(), and printf(). This chapter also covers string concatenation and output-based interview questions.',

    companyTags: [
      'Amazon',
      'TCS Digital',
      'Infosys',
      'Capgemini',
    ],

    realWorldUse: [
      'Displaying program results',
      'Debugging applications',
      'Printing logs and messages',
    ],

    revisionNotes: [
      'print() → same line',
      'println() → next line',
      'printf() → formatted output',
    ],

    commonMistakes: [
      'Confusing print and println',
      'Forgetting format specifiers in printf',
      'Incorrect string concatenation prediction',
    ],

    sections: [
      {
        heading: 'Why Output Statements Matter',

        content:
          'Output statements are used to display information on the screen.\n\nBeginners often ignore this topic, but output-based questions are extremely common in placement exams.',
      },

      {
        heading: 'print() Method',

        content:
          'print() displays output without moving cursor to next line.\n\nExample:\n\nSystem.out.print("Java");\nSystem.out.print("Code");\n\nOutput:\n\nJavaCode',
      },

      {
        heading: 'println() Method',

        content:
          'println() prints output and moves cursor to next line automatically.\n\nThis is the most commonly used output method.',
      },

      {
        heading: 'printf() Method',

        content:
          'printf() is used for formatted output.\n\nCommon format specifiers:\n\n%d → integer\n%f → decimal\n%s → string\n%c → character',
      },

      {
        heading: 'String Concatenation',

        content:
          'The + operator joins strings together.\n\nIf one operand becomes string, remaining values are treated as strings.\n\nThis creates many tricky output questions.',
      },
    ],

    tips: [
      'Practice output prediction daily.',
      'Understand left-to-right evaluation.',
      'Focus heavily on string concatenation questions.',
    ],

    warnings: [
      'Once string starts, + becomes concatenation operator.',
      'print() does not move cursor to next line.',
    ],

    codeExamples: [
      {
        title: 'print vs println',

        language: 'java',

        code: `public class OutputDemo {

    public static void main(String[] args) {

        System.out.print("Java ");

        System.out.println("Programming");

        System.out.print("Placement");

    }

}`,

        output: `Java Programming
Placement`,
      },
    ],

    outputQuestions: [
      {
        question: 'Predict the output',

        code: `System.out.println(10 + 20 + "Java");`,

        answer: '30Java',

        explanation:
          'Addition happens first before concatenation.',
      },

      {
        question: 'Predict the output',

        code: `System.out.println("Java" + 10 + 20);`,

        answer: 'Java1020',

        explanation:
          'String appears first, so remaining values concatenate.',
      },

      {
        question: 'Predict the output',

        code: `System.out.println(5 + 5 + "5" + 5 + 5);`,

        answer: '10555',

        explanation:
          '5 + 5 = 10 first, then string concatenation begins.',
      },
    ],

    mcqs: [
      {
        question:
          'Which method prints output and moves cursor to next line?',

        options: [
          'print()',
          'println()',
          'printf()',
          'display()',
        ],

        answer: 1,

        explanation:
          'println() automatically moves cursor to next line.',
      },
    ],

    interviewQuestions: [
      {
        question:
          'Difference between print() and println()?',

        answer:
          'print() keeps cursor on same line while println() moves cursor to next line after printing.',
      },
    ],

    nextTopic: 'java-comments',
  },

  {
    id: 'java-comments',

    title: 'Comments in Java',

    slug: 'java-comments',

    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=400&fit=crop',

    readTime: '12 min',

    difficulty: 'Beginner',

    description:
      'Understand single-line, multi-line, and documentation comments in Java. Learn why comments are important for readability and teamwork.',

    companyTags: [
      'Infosys',
      'TCS',
      'Accenture',
    ],

    realWorldUse: [
      'Improving code readability',
      'Writing documentation',
      'Explaining complex logic',
    ],

    revisionNotes: [
      '// → single-line comment',
      '/* */ → multi-line comment',
      '/** */ → documentation comment',
    ],

    commonMistakes: [
      'Using comments excessively',
      'Writing outdated comments',
    ],

    sections: [
      {
        heading: 'What are Comments?',

        content:
          'Comments are non-executable statements used to explain code.\n\nThey improve readability and help teams understand logic faster.',
      },

      {
        heading: 'Single-Line Comments',

        content:
          'Single-line comments start using //.\n\nEverything written after // on same line becomes comment.',
      },

      {
        heading: 'Multi-Line Comments',

        content:
          'Multi-line comments start with /* and end with */.\n\nUseful for large explanations.',
      },

      {
        heading: 'Documentation Comments',

        content:
          'Documentation comments use /** */.\n\nThese are mainly used for generating project documentation using Javadoc.',
      },
    ],

    tips: [
      'Write meaningful comments only.',
      'Use comments to explain logic, not obvious code.',
    ],

    warnings: [
      'Too many comments reduce readability.',
      'Outdated comments create confusion.',
    ],

    codeExamples: [
      {
        title: 'Comments Example',

        language: 'java',

        code: `public class CommentDemo {

    public static void main(String[] args) {

        // This prints welcome message

        System.out.println("Welcome");

        /*
           Multi-line comment
           example
        */

    }

}`,

        output: 'Welcome',
      },
    ],

    mcqs: [
      {
        question:
          'Which symbol is used for single-line comments?',

        options: ['//', '/*', '#', '<!--'],

        answer: 0,

        explanation:
          '// creates single-line comments in Java.',
      },
    ],

    interviewQuestions: [
      {
        question:
          'Why are comments important in programming?',

        answer:
          'Comments improve readability and help developers understand logic more easily.',
      },
    ],

    nextTopic: 'java-variables',
  },

  {
    id: 'java-variables',

    title: 'Variables in Java',

    slug: 'java-variables',

    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=400&fit=crop',

    readTime: '26 min',

    difficulty: 'Beginner',

    description:
      'Master Java variables, declaration rules, initialization, scope, naming conventions, and memory concepts frequently asked in interviews.',

    companyTags: [
      'Amazon',
      'Infosys',
      'TCS Digital',
      'Capgemini',
    ],

    realWorldUse: [
      'Storing user information',
      'Performing calculations',
      'Managing application state',
      'Handling data processing',
    ],

    revisionNotes: [
      'Variables store data',
      'Declaration + initialization are different',
      'Local variables must be initialized',
      'Java is strongly typed',
    ],

    commonMistakes: [
      'Using variables before initialization',
      'Incorrect variable naming',
      'Confusing declaration and assignment',
    ],

    sections: [
      {
        heading: 'What are Variables?',

        content:
          'Variables are named memory locations used to store data during program execution.\n\nEvery variable in Java must have:\n\n• Data type\n• Variable name\n• Optional initial value',
      },

      {
        heading: 'Variable Declaration',

        content:
          'Variable declaration tells Java what type of data will be stored.\n\nSyntax:\n\nDatatype variableName;',
      },

      {
        heading: 'Variable Initialization',

        content:
          'Initialization means assigning value to variable.\n\nExample:\n\nint age = 20;',
      },

      {
        heading: 'Rules for Naming Variables',

        content:
          '1. Cannot start with number\n2. Cannot contain spaces\n3. Cannot use keywords\n4. Use meaningful names\n5. Follow camelCase convention',
      },

      {
        heading: 'Types of Variables',

        content:
          '1. Local Variables\n\nDeclared inside methods.\n\n2. Instance Variables\n\nBelong to objects.\n\n3. Static Variables\n\nShared among all objects.',
      },

      {
        heading: 'Variable Scope',

        content:
          'Scope defines where variables can be accessed.\n\nLocal variables work only inside their block.\n\nVariables declared inside loops or methods cannot be accessed outside.',
      },
    ],

    tips: [
      'Use meaningful variable names.',
      'Initialize local variables before use.',
      'Practice output-based variable questions.',
    ],

    warnings: [
      'Uninitialized local variables cause errors.',
      'Variable names are case-sensitive.',
    ],

    codeExamples: [
      {
        title: 'Variable Example',

        language: 'java',

        code: `public class VariableDemo {

    public static void main(String[] args) {

        int age = 21;

        String name = "Rahul";

        System.out.println(name);

        System.out.println(age);

    }

}`,

        output: `Rahul
21`,
      },
    ],

    outputQuestions: [
      {
        question: 'Predict the output',

        code: `int a = 10;
int b = a++;
System.out.println(a);
System.out.println(b);`,

        answer: `11
10`,

        explanation:
          'Post-increment uses current value first, then increases value.',
      },

      {
        question: 'Predict the output',

        code: `int x = 5;
System.out.println(++x);`,

        answer: '6',

        explanation:
          'Pre-increment increases value before usage.',
      },
    ],

    mcqs: [
      {
        question:
          'Which variable type belongs to objects?',

        options: [
          'Local Variable',
          'Instance Variable',
          'Loop Variable',
          'Temporary Variable',
        ],

        answer: 1,

        explanation:
          'Instance variables belong to objects.',
      },
    ],

    interviewQuestions: [
      {
        question:
          'Difference between declaration and initialization?',

        answer:
          'Declaration creates variable, while initialization assigns value to it.',
      },

      {
        question:
          'What is variable scope?',

        answer:
          'Variable scope defines where a variable can be accessed in program.',
      },
    ],

    nextTopic: 'java-datatypes',
  },
 
  {
    id: 'java-datatypes',

    title: 'Java Data Types',

    slug: 'java-datatypes',

    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=400&fit=crop',

    readTime: '28 min',

    difficulty: 'Beginner',

    description:
      'Understand primitive and non-primitive data types in Java, memory usage, ranges, default values, and interview-focused concepts frequently asked in coding rounds.',

    companyTags: [
      'TCS Digital',
      'Infosys',
      'Capgemini',
      'Amazon',
      'Wipro',
    ],

    realWorldUse: [
      'Storing application data',
      'Handling user input',
      'Performing calculations',
      'Managing memory efficiently',
    ],

    revisionNotes: [
      'Java has 8 primitive data types',
      'Primitive types store actual values',
      'Non-primitive types store references',
      'double is default decimal type',
      'int is default integer type',
    ],

    commonMistakes: [
      'Using int for very large values',
      'Confusing char with String',
      'Using float without f suffix',
    ],

    memoryTricks: [
      'byte → small integer',
      'int → normal integer',
      'long → large integer',
      'double → decimal precision',
      'char → single character',
    ],

    sections: [
      {
        heading: 'What are Data Types?',

        content: `
Data types define what kind of value a variable can store.

Java is a strongly typed language.

This means every variable must have a specific data type before storing data.

Example:

int age = 20;

Here:
• int → data type
• age → variable
• 20 → value

Data types improve:
• Memory management
• Program safety
• Error detection
• Performance
`,
      },

      {
  heading: 'Types of Data Types in Java',

  content: `
  
  <div class="space-y-6">

    <p class="text-gray-700 leading-8 text-[17px]">
      Java data types are divided into two categories:
    </p>

    <div class="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-xl">
      
      <h3 class="text-xl font-semibold text-blue-700 mb-3">
        1. Primitive Data Types
      </h3>

      <p class="text-gray-700 leading-7 mb-3">
        These store actual values directly.
      </p>

      <ul class="list-disc pl-6 text-gray-800 space-y-1">
        <li><b>int</b></li>
        <li><b>double</b></li>
        <li><b>char</b></li>
        <li><b>boolean</b></li>
      </ul>

    </div>

    <div class="bg-purple-50 border-l-4 border-purple-600 p-5 rounded-xl">

      <h3 class="text-xl font-semibold text-purple-700 mb-3">
        2. Non-Primitive Data Types
      </h3>

      <p class="text-gray-700 leading-7 mb-3">
        These store references to objects.
      </p>

      <ul class="list-disc pl-6 text-gray-800 space-y-1">
        <li><b>String</b></li>
        <li><b>Arrays</b></li>
        <li><b>Classes</b></li>
        <li><b>Interfaces</b></li>
      </ul>

    </div>

  </div>

  `,
},

      {
        heading: 'Primitive Data Types',

        content: `
Java provides 8 primitive data types.

1. byte

• Size: 1 byte
• Range: -128 to 127

2. short

• Size: 2 bytes

3. int

• Size: 4 bytes
• Most commonly used integer type

4. long

• Size: 8 bytes
• Used for large numbers

5. float

• Stores decimal values
• Requires f suffix

6. double

• Better decimal precision
• Default decimal type

7. char

• Stores single character

8. boolean

• Stores true or false values
`,
      },

      {
        heading: 'Non-Primitive Data Types',

        content: `
Non-primitive data types are created by programmers or provided by Java libraries.

These types store memory addresses instead of direct values.

Examples:

• String
• Arrays
• Classes
• Objects

Important:

Non-primitive types can call methods while primitive types cannot.
`,
      },

      {
        heading: 'Default Values of Primitive Types',

        content: `
byte → 0
short → 0
int → 0
long → 0L
float → 0.0f
double → 0.0
char → '\\u0000'
boolean → false

These default values mainly apply to instance variables.
`,
      },
    ],

    tips: [
      'Use int for normal integer operations.',
      'Use double for decimal precision.',
      'Remember float requires f suffix.',
      'Practice data-type output questions.',
    ],

    warnings: [
      'char stores single character only.',
      'float without f causes compilation issues.',
      'Primitive types cannot store null.',
    ],

    codeExamples: [
      {
        title: 'Primitive Data Types Example',

        language: 'java',

        code: `public class DataTypeDemo {

    public static void main(String[] args) {

        int age = 21;

        double percentage = 92.5;

        char grade = 'A';

        boolean passed = true;

        System.out.println(age);

        System.out.println(percentage);

        System.out.println(grade);

        System.out.println(passed);

    }

}`,

        output: `21
92.5
A
true`,
      },
    ],

    outputQuestions: [
      {
        question: 'Predict the output',

        code: `char ch = 65;
System.out.println(ch);`,

        answer: 'A',

        explanation:
          'ASCII value 65 represents character A.',
      },
    ],

    mcqs: [
      {
        question:
          'Which data type is used for single character storage?',

        options: ['String', 'char', 'text', 'character'],

        answer: 1,

        explanation:
          'char stores a single Unicode character.',
      },
    ],

    interviewQuestions: [
      {
        question:
          'Difference between primitive and non-primitive data types?',

        answer:
          'Primitive types store actual values while non-primitive types store references to memory locations.',
      },
    ],

    nextTopic: 'java-type-casting',
  },

  {
    id: 'java-type-casting',

    title: 'Java Type Casting',

    slug: 'java-type-casting',

    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa90?w=1200&h=400&fit=crop',

    readTime: '24 min',

    difficulty: 'Beginner',

    description:
      'Learn widening and narrowing type casting in Java with interview-focused examples, memory conversion concepts, and output-based questions.',

    companyTags: [
      'Infosys',
      'TCS',
      'Capgemini',
      'Cognizant',
    ],

    realWorldUse: [
      'Data conversion',
      'Mathematical calculations',
      'API response handling',
      'Database value processing',
    ],

    revisionNotes: [
      'Widening → automatic conversion',
      'Narrowing → manual conversion',
      'Narrowing may lose data',
    ],

    commonMistakes: [
      'Forgetting explicit casting',
      'Assuming decimal values remain after int conversion',
    ],

    sections: [
      {
        heading: 'What is Type Casting?',

        content: `
Type casting means converting one data type into another.

Java supports two types of casting:

• Widening Casting
• Narrowing Casting
`,
      },

      {
        heading: 'Widening Casting',

        content: `
Widening converts smaller data type into larger data type automatically.

Example:

int → long
float → double

No data loss occurs.
`,
      },

      {
        heading: 'Narrowing Casting',

        content: `
Narrowing converts larger data type into smaller type manually.

Example:

double → int

Syntax:

int num = (int) 9.99;

Data loss may occur during narrowing conversion.
`,
      },
    ],

    tips: [
      'Remember narrowing needs explicit casting.',
      'Most MCQs focus on output prediction.',
    ],

    warnings: [
      'Decimal values are removed during int conversion.',
    ],

    codeExamples: [
      {
        title: 'Type Casting Example',

        language: 'java',

        code: `public class CastingDemo {

    public static void main(String[] args) {

        int a = 10;

        double b = a;

        double x = 9.99;

        int y = (int) x;

        System.out.println(b);

        System.out.println(y);

    }

}`,

        output: `10.0
9`,
      },
    ],

    outputQuestions: [
      {
        question: 'Predict the output',

        code: `int x = (int) 5.8;
System.out.println(x);`,

        answer: '5',

        explanation:
          'Decimal portion gets removed during narrowing.',
      },
    ],

    mcqs: [
      {
        question:
          'Which type casting happens automatically?',

        options: [
          'Narrowing',
          'Widening',
          'Explicit',
          'Manual',
        ],

        answer: 1,

        explanation:
          'Widening conversion occurs automatically.',
      },
    ],

    interviewQuestions: [
      {
        question:
          'What is narrowing type casting?',

        answer:
          'It converts larger data type into smaller type manually and may cause data loss.',
      },
    ],

    nextTopic: 'java-operators',
  },

  {
    id: 'java-operators',

    title: 'Java Operators',

    slug: 'java-operators',

    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=400&fit=crop',

    readTime: '35 min',

    difficulty: 'Beginner',

    description:
      'Master arithmetic, relational, logical, assignment, unary, and ternary operators with deep explanations and tricky output-based questions.',

    companyTags: [
      'Amazon',
      'TCS Digital',
      'Infosys',
      'Accenture',
    ],

    realWorldUse: [
      'Performing calculations',
      'Making decisions',
      'Creating conditions',
      'Building application logic',
    ],

    revisionNotes: [
      '+ → addition',
      '== → comparison',
      '&& → logical AND',
      '|| → logical OR',
      '++ → increment',
    ],

    commonMistakes: [
      'Confusing = and ==',
      'Misunderstanding pre/post increment',
      'Ignoring operator precedence',
    ],

    sections: [
      {
        heading: 'What are Operators?',

        content: `
Operators are symbols used to perform operations on variables and values.

Example:

int sum = 10 + 20;

Here:
+ is operator
`,
      },

      {
        heading: 'Arithmetic Operators',

        content: `
Used for mathematical operations.

Operators:
• +
• -
• *
• /
• %

Example:
10 + 5 = 15
`,
      },

      {
        heading: 'Relational Operators',

        content: `
Used for comparison.

Operators:
• ==
• !=
• >
• <
• >=
• <=

These operators return boolean values.
`,
      },

      {
        heading: 'Logical Operators',

        content: `
Used for combining conditions.

Operators:
• &&
• ||
• !

Important for interview conditions and loops.
`,
      },

      {
        heading: 'Increment and Decrement Operators',

        content: `
++ increases value by 1
-- decreases value by 1

Pre-increment:
++x

Post-increment:
x++

These are extremely important for output questions.
`,
      },

      {
        heading: 'Ternary Operator',

        content: `
Short form of if-else.

Syntax:

condition ? value1 : value2;
`,
      },
    ],

    tips: [
      'Practice increment/decrement questions daily.',
      'Focus heavily on precedence-based outputs.',
    ],

    warnings: [
      '== compares values while = assigns values.',
      'Post-increment uses value first then increments.',
    ],

    codeExamples: [
      {
        title: 'Operators Example',

        language: 'java',

        code: `public class OperatorDemo {

    public static void main(String[] args) {

        int a = 10;

        int b = 5;

        System.out.println(a + b);

        System.out.println(a > b);

        System.out.println(a == b);

    }

}`,

        output: `15
true
false`,
      },
    ],

    outputQuestions: [
      {
        question: 'Predict the output',

        code: `int x = 5;
System.out.println(x++);
System.out.println(x);`,

        answer: `5
6`,

        explanation:
          'Post-increment uses old value first.',
      },

      {
        question: 'Predict the output',

        code: `int x = 5;
System.out.println(++x);`,

        answer: '6',

        explanation:
          'Pre-increment increases value before usage.',
      },
    ],

    mcqs: [
      {
        question:
          'Which operator is used for comparison?',

        options: ['=', '==', ':=', '=>'],

        answer: 1,

        explanation:
          '== checks equality between values.',
      },
    ],

    interviewQuestions: [
      {
        question:
          'Difference between pre and post increment?',

        answer:
          'Pre-increment increases value before usage while post-increment uses old value first.',
      },
    ],

    nextTopic: 'java-strings',
  },

  {
    id: 'java-strings',

    title: 'Java Strings',

    slug: 'java-strings',

    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=400&fit=crop',

    readTime: '38 min',

    difficulty: 'Intermediate',

    description:
      'Learn String creation, immutability, methods, memory concepts, String Pool, and interview-based output questions deeply.',

    companyTags: [
      'Amazon',
      'Infosys',
      'Capgemini',
      'Accenture',
    ],

    realWorldUse: [
      'Handling user input',
      'Text processing',
      'Data formatting',
      'API response management',
    ],

    revisionNotes: [
      'Strings are immutable',
      'String Pool improves memory efficiency',
      'equals() compares content',
      '== compares references',
    ],

    commonMistakes: [
      'Using == for String comparison',
      'Thinking String changes original object',
    ],

    sections: [
      {
        heading: 'What is String in Java?',

        content: `
String is a sequence of characters.

In Java, String is a class.

Example:

String name = "Java";
`,
      },

      {
        heading: 'String Immutability',

        content: `
Strings are immutable.

This means once String object is created, its value cannot be changed.

Instead of modifying existing object, Java creates new object.
`,
      },

      {
        heading: 'String Pool',

        content: `
Java stores string literals inside special memory area called String Pool.

This improves memory optimization.
`,
      },

      {
        heading: 'Important String Methods',

        content: `
length()
toUpperCase()
toLowerCase()
charAt()
substring()
equals()
contains()
`,
      },

      {
        heading: '== vs equals()',

        content: `
== compares memory references.

equals() compares actual content.

This is one of the most repeated interview questions.
`,
      },
    ],

    tips: [
      'Always use equals() for content comparison.',
      'Practice String output questions regularly.',
    ],

    warnings: [
      'Strings cannot be modified directly.',
      '== is dangerous for String comparison.',
    ],

    codeExamples: [
      {
        title: 'String Example',

        language: 'java',

        code: `public class StringDemo {

    public static void main(String[] args) {

        String name = "Java";

        System.out.println(name.length());

        System.out.println(name.toUpperCase());

    }

}`,

        output: `4
JAVA`,
      },
    ],

    outputQuestions: [
      {
        question: 'Predict the output',

        code: `String a = "Java";
String b = "Java";

System.out.println(a == b);`,

        answer: 'true',

        explanation:
          'Both references point to same String Pool object.',
      },
    ],

    mcqs: [
      {
        question:
          'Which method compares String content?',

        options: [
          '==',
          'equals()',
          'compare()',
          'match()',
        ],

        answer: 1,

        explanation:
          'equals() compares actual content.',
      },
    ],

    interviewQuestions: [
      {
        question:
          'Why are Strings immutable in Java?',

        answer:
          'Immutability improves security, thread safety, and memory optimization through String Pool.',
      },
    ],

    nextTopic: 'java-math',
  },

  {
    id: 'java-math',

    title: 'Java Math Class',

    slug: 'java-math',

    image:
      'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200&h=400&fit=crop',

    readTime: '18 min',

    difficulty: 'Beginner',

    description:
      'Learn Java Math class methods used for calculations, rounding, powers, square roots, random numbers, and interview-based coding questions.',

    companyTags: [
      'TCS',
      'Infosys',
      'Wipro',
    ],

    realWorldUse: [
      'Scientific calculations',
      'Game development',
      'Financial software',
    ],

    revisionNotes: [
      'Math.max() → maximum value',
      'Math.min() → minimum value',
      'Math.sqrt() → square root',
      'Math.random() → random number',
    ],

    sections: [
      {
        heading: 'What is Math Class?',

        content: `
Java provides built-in Math class for mathematical operations.

No object creation required because methods are static.
`,
      },

      {
        heading: 'Important Methods',

        content: `
Math.max()
Math.min()
Math.sqrt()
Math.abs()
Math.random()
Math.pow()
Math.ceil()
Math.floor()
`,
      },
    ],

    codeExamples: [
      {
        title: 'Math Class Example',

        language: 'java',

        code: `public class MathDemo {

    public static void main(String[] args) {

        System.out.println(Math.max(10, 20));

        System.out.println(Math.sqrt(25));

    }

}`,

        output: `20
5.0`,
      },
    ],

    nextTopic: 'java-booleans',
  },

  {
    id: 'java-booleans',

    title: 'Java Booleans',

    slug: 'java-booleans',

    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=400&fit=crop',

    readTime: '16 min',

    difficulty: 'Beginner',

    description:
      'Understand boolean values, conditions, logical expressions, and decision-making concepts deeply.',

    companyTags: [
      'Infosys',
      'TCS',
      'Accenture',
    ],

    revisionNotes: [
      'Boolean stores true or false',
      'Used heavily in conditions and loops',
    ],

    sections: [
      {
        heading: 'What is Boolean?',

        content: `
Boolean is a primitive data type.

It stores only:
• true
• false

Used for decision-making.
`,
      },

      {
        heading: 'Boolean Expressions',

        content: `
Relational operators create boolean expressions.

Example:

10 > 5

Result:
true
`,
      },
    ],

    codeExamples: [
      {
        title: 'Boolean Example',

        language: 'java',

        code: `public class BooleanDemo {

    public static void main(String[] args) {

        boolean isJavaEasy = true;

        System.out.println(isJavaEasy);

        System.out.println(10 > 5);

    }

}`,

        output: `true
true`,
      },
    ],

    nextTopic: 'java-keywords',
  },

  {
    id: 'java-keywords',

    title: 'Java Keywords',

    slug: 'java-keywords',

    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa90?w=1200&h=400&fit=crop',

    readTime: '20 min',

    difficulty: 'Beginner',

    description:
      'Learn Java reserved keywords, their purpose, categories, and important interview-based keyword concepts.',

    companyTags: [
      'TCS',
      'Infosys',
      'Capgemini',
    ],

    revisionNotes: [
      'Keywords are reserved words',
      'Cannot use keywords as identifiers',
    ],

    sections: [
      {
        heading: 'What are Keywords?',

        content: `
Keywords are reserved words having predefined meaning in Java.

These words are already understood by compiler.

Examples:

class
public
static
void
int
if
else
return
`,
      },

      {
        heading: 'Important Categories of Keywords',

        content: `
Access Keywords:
• public
• private
• protected

Data Type Keywords:
• int
• double
• char

Flow Control Keywords:
• if
• else
• switch
• break
• continue
`,
      },
    ],

    codeExamples: [
      {
        title: 'Keyword Example',

        language: 'java',

        code: `public class KeywordDemo {

    public static void main(String[] args) {

        int number = 10;

        if(number > 5) {

            System.out.println("Valid");

        }

    }

}`,

        output: 'Valid',
      },
    ],

    mcqs: [
      {
        question:
          'Can Java keywords be used as variable names?',

        options: ['Yes', 'No'],

        answer: 1,

        explanation:
          'Keywords are reserved by Java language.',
      },
    ],

    interviewQuestions: [
      {
        question:
          'What are reserved keywords in Java?',

        answer:
          'Reserved keywords are predefined words having special meaning in Java syntax.',
      },
    ],

    nextTopic: 'java-if-else',
  },

];
