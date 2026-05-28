export const javaNotes = [
  {
    id: 'java-intro',

    title: 'Introduction to Java',

    slug: 'java-intro',

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

    slug: 'java-getting-started',

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

  heading: 'Types of Data Types in Java',

        content: `
Java data types are divided into two categories:

1. Primitive Data Types

These store actual values directly.

Examples:
• int
• double
• char
• boolean

2. Non-Primitive Data Types

These store references to objects.

Examples:
• String
• Arrays
• Classes
• Interfaces
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
{
  id: 'java-if-else',

  title: 'Java If Else Statement',

  slug: 'java-if-else',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '18 min read',

  difficulty: 'Beginner',

  description:
    'Learn Java if, else, else-if ladder, nested if statements, conditions, comparison operators, and decision-making logic in a simple placement-oriented way.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini'],

  sections: [
    {
      heading: 'Introduction to Java If Else',

      content: `
The if-else statement in Java is used to make decisions in a program.

Sometimes we want different outputs based on different conditions.

For example:

• Show "Pass" if marks are greater than 40
• Show "Adult" if age is 18 or more
• Show "Even Number" if a number is divisible by 2

In Java, decision-making statements help programs become intelligent.

Without conditions, every line would execute in the same order.

The if statement checks whether a condition is true or false.

If the condition becomes true, the block inside if executes.

If the condition becomes false, Java skips that block.
`.trim(),
    },

    {
      heading: 'Syntax of If Statement',

      content: `
The basic syntax of if statement is:

1. Write if keyword
2. Add condition inside ()
3. Write code block inside {}

General Syntax:

if(condition) {

    // code

}

Important Rules:

• Condition must return true or false
• Curly braces improve readability
• Indentation should be proper
• Boolean expressions are mostly used inside conditions
`.trim(),
    },

    {
      heading: 'Working of If Else Statement',

      content: `
Java checks the condition written inside the brackets.

If the condition is true:

• Code inside if block executes

If the condition is false:

• else block executes

Flow of execution:

1. Condition checked
2. True → if block runs
3. False → else block runs

Only one block executes at a time.
`.trim(),
    },

    {
      heading: 'Else If Ladder in Java',

      content: `
Sometimes multiple conditions are required.

In such cases, else-if ladder is used.

Example situations:

• Grade systems
• Menu systems
• Salary ranges
• Ranking logic

Structure:

if(condition1) {

}

else if(condition2) {

}

else {

}

Java checks conditions from top to bottom.

The first true condition executes.

Remaining conditions are skipped.
`.trim(),
    },

    {
      heading: 'Nested If Statement',

      content: `
A nested if means writing one if statement inside another if statement.

Used when a second condition depends on the first condition.

Example:

• First check if user is logged in
• Then check if user is admin

Important:

• Too much nesting reduces readability
• Use meaningful conditions
• Keep nesting limited when possible
`.trim(),
    },

    {
      heading: 'Comparison Operators Used in Conditions',

      content: `
Common operators used with if-else:

• ==  → equal to
• !=  → not equal to
• >   → greater than
• <   → smaller than
• >=  → greater than or equal to
• <=  → smaller than or equal to

Logical Operators:

• && → AND
• || → OR
• !  → NOT

These operators help create complex conditions.
`.trim(),
    },

    {
      heading: 'Important Points About If Else',

      content: `
• else block is optional
• Multiple else-if blocks are allowed
• Conditions always return boolean values
• Curly braces should always be used for better readability
• Avoid deeply nested conditions
• Write simple and readable conditions

Common Beginner Mistakes:

• Using = instead of ==
• Forgetting curly braces
• Writing invalid conditions
• Confusing AND and OR operators
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Simple If Statement',

      language: 'java',

      code: `public class IfExample {

    public static void main(String[] args) {

        int age = 20;

        if(age >= 18) {

            System.out.println("Eligible to vote");

        }

    }

}`,

      output: 'Eligible to vote',
    },

    {
      title: 'If Else Example',

      language: 'java',

      code: `public class IfElseExample {

    public static void main(String[] args) {

        int number = 7;

        if(number % 2 == 0) {

            System.out.println("Even Number");

        }

        else {

            System.out.println("Odd Number");

        }

    }

}`,

      output: 'Odd Number',
    },

    {
      title: 'Else If Ladder Example',

      language: 'java',

      code: `public class GradeExample {

    public static void main(String[] args) {

        int marks = 82;

        if(marks >= 90) {

            System.out.println("Grade A");

        }

        else if(marks >= 75) {

            System.out.println("Grade B");

        }

        else if(marks >= 50) {

            System.out.println("Grade C");

        }

        else {

            System.out.println("Fail");

        }

    }

}`,

      output: 'Grade B',
    },
  ],

  mcqs: [
    {
      question:
        'Which statement is used for decision making in Java?',

      options: ['loop', 'if-else', 'array', 'class'],

      answer: 1,

      explanation:
        'if-else statements are used to make decisions based on conditions.',
    },

    {
      question:
        'Which operator checks equality in Java?',

      options: ['=', '==', '!=', '&&'],

      answer: 1,

      explanation:
        '== is used to compare two values.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is the difference between if and if-else statement?',

      answer:
        'if statement executes code only when condition is true, while if-else executes one block for true and another block for false condition.',
    },

    {
      question:
        'What is an else-if ladder in Java?',

      answer:
        'Else-if ladder is used to check multiple conditions one after another.',
    },
  ],

  nextTopic: 'java-switch-statement',
},

{
  id: 'java-switch-statement',

  title: 'Java Switch Statement',

  slug: 'java-switch-statement',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '16 min read',

  difficulty: 'Beginner',

  description:
    'Learn Java switch statement, case labels, break keyword, default case, and menu-driven programming in simple language.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Cognizant', 'IBM'],

  sections: [
    {
      heading: 'Introduction to Switch Statement',

      content: `
The switch statement is used when multiple conditions depend on a single value.

Instead of writing many else-if statements, switch makes code cleaner and easier to read.

Common Use Cases:

• Calculator programs
• Menu systems
• Day and month programs
• Option selection systems

Switch improves readability when many fixed choices exist.
`.trim(),
    },

    {
      heading: 'Syntax of Switch Statement',

      content: `
General Syntax:

switch(variable) {

    case value1:
        // code
        break;

    case value2:
        // code
        break;

    default:
        // code

}

Important Components:

• switch → checks variable
• case → possible values
• break → stops execution
• default → executes when no case matches
`.trim(),
    },

    {
      heading: 'How Switch Works',

      content: `
Java compares switch variable with each case.

If a match is found:

• That case executes
• break stops further execution

If break is missing:

• Execution continues to next cases
• This is called fall-through

If no case matches:

• default block executes
`.trim(),
    },

    {
      heading: 'Break Statement Importance',

      content: `
break is very important inside switch.

Without break:

• Multiple cases may execute unintentionally

Always use break unless fall-through behavior is intentionally needed.
`.trim(),
    },

    {
      heading: 'Default Case in Java',

      content: `
The default block works like else block.

It executes when no case matches.

default is optional but recommended for safer programs.
`.trim(),
    },

    {
      heading: 'Important Rules of Switch',

      content: `
• Case values must be unique
• Duplicate cases are not allowed
• break prevents unnecessary execution
• default can appear anywhere
• switch supports int, char, String, enum

Common Mistakes:

• Forgetting break
• Duplicate case values
• Invalid data types
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Simple Switch Example',

      language: 'java',

      code: `public class SwitchExample {

    public static void main(String[] args) {

        int day = 3;

        switch(day) {

            case 1:
                System.out.println("Monday");
                break;

            case 2:
                System.out.println("Tuesday");
                break;

            case 3:
                System.out.println("Wednesday");
                break;

            default:
                System.out.println("Invalid Day");

        }

    }

}`,

      output: 'Wednesday',
    },
  ],

  mcqs: [
    {
      question:
        'Which keyword stops execution inside switch?',

      options: ['stop', 'continue', 'break', 'exit'],

      answer: 2,

      explanation:
        'break stops execution after a matching case.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'Why is break used in switch statement?',

      answer:
        'break stops further case execution after a matching case is found.',
    },
  ],

  nextTopic: 'java-for-loop',
},

{
  id: 'java-for-loop',

  title: 'Java For Loop',

  slug: 'java-for-loop',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '20 min read',

  difficulty: 'Beginner',

  description:
    'Learn Java for loop, loop execution flow, nested loops, infinite loops, and iteration concepts deeply with beginner-friendly examples.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'HCL'],

  sections: [
    {
      heading: 'Introduction to For Loop',

      content: `
Loops are used when we want to repeat code multiple times.

Instead of writing the same statement again and again, loops automate repetition.

The for loop is one of the most commonly used loops in Java.

Used In:

• Printing patterns
• Array traversal
• Number calculations
• Iterative tasks
• Competitive programming
`.trim(),
    },

    {
      heading: 'Syntax of For Loop',

      content: `
General Syntax:

for(initialization; condition; update) {

    // code

}

Three Parts:

1. Initialization
   → starting value

2. Condition
   → loop runs while condition is true

3. Update
   → increases or decreases value
`.trim(),
    },

    {
      heading: 'Execution Flow of For Loop',

      content: `
Step-by-step working:

1. Initialization executes once
2. Condition is checked
3. Loop body executes
4. Update executes
5. Condition checked again

This process repeats until condition becomes false.
`.trim(),
    },

    {
      heading: 'Nested For Loop',

      content: `
A loop inside another loop is called nested loop.

Mostly used in:

• Pattern printing
• Matrix operations
• Tables

Outer loop controls rows.

Inner loop controls columns.
`.trim(),
    },

    {
      heading: 'Infinite Loop',

      content: `
If condition never becomes false, loop runs forever.

Example:

for(;;) {

}

This is called infinite loop.

Use carefully because it may hang the program.
`.trim(),
    },

    {
      heading: 'Important Points About For Loop',

      content: `
• Initialization runs only once
• Condition controls execution
• Update changes loop variable
• Avoid infinite loops accidentally
• Keep loop conditions simple

Common Mistakes:

• Wrong condition
• Missing update
• Using semicolon after loop
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Basic For Loop',

      language: 'java',

      code: `public class ForLoopExample {

    public static void main(String[] args) {

        for(int i = 1; i <= 5; i++) {

            System.out.println(i);

        }

    }

}`,

      output: `1
2
3
4
5`,
    },

    {
      title: 'Nested For Loop Example',

      language: 'java',

      code: `public class NestedLoop {

    public static void main(String[] args) {

        for(int i = 1; i <= 3; i++) {

            for(int j = 1; j <= 2; j++) {

                System.out.println("Row: " + i + " Column: " + j);

            }

        }

    }

}`,

      output: `Row: 1 Column: 1
Row: 1 Column: 2
Row: 2 Column: 1
Row: 2 Column: 2
Row: 3 Column: 1
Row: 3 Column: 2`,
    },
  ],

  mcqs: [
    {
      question:
        'Which loop is best when number of iterations is known?',

      options: ['while', 'for', 'do-while', 'switch'],

      answer: 1,

      explanation:
        'for loop is preferred when iterations are known.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What are the three parts of for loop?',

      answer:
        'Initialization, condition, and update are the three parts of a for loop.',
    },
  ],

  nextTopic: 'java-for-each-loop',
},

{
  id: 'java-for-each-loop',

  title: 'Java For Each Loop',

  slug: 'java-for-each-loop',

  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',

  readTime: '17 min read',

  difficulty: 'Beginner',

  description:
    'Learn Java for-each loop deeply with arrays, collections, iteration, syntax, advantages, limitations, and real-world examples.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Tech Mahindra'],

  sections: [
    {
      heading: 'Introduction to For Each Loop',

      content: `
The for-each loop is a simplified version of loop used for traversing arrays and collections.

It automatically accesses elements one by one.

The programmer does not need to manage index values manually.

Main Purpose:

• Cleaner code
• Easy array traversal
• Better readability
• Fewer mistakes
`.trim(),
    },

    {
      heading: 'Syntax of For Each Loop',

      content: `
General Syntax:

for(dataType variable : array) {

    // code

}

Important Parts:

1. dataType
   → type of array elements

2. variable
   → stores current element

3. array
   → collection being traversed
`.trim(),
    },

    {
      heading: 'How For Each Loop Works',

      content: `
Java automatically picks elements one by one from array or collection.

The loop continues until all elements are processed.

No need for:

• Index variable
• Condition checking
• Manual increment
`.trim(),
    },

    {
      heading: 'Advantages of For Each Loop',

      content: `
• Cleaner syntax
• Easy to read
• Less error-prone
• Better for traversing arrays

Best suited for read-only traversal.
`.trim(),
    },

    {
      heading: 'Limitations of For Each Loop',

      content: `
• Cannot access index directly
• Cannot traverse backward easily
• Not suitable when modifying array positions

Use normal for loop when index handling is required.
`.trim(),
    },

    {
      heading: 'Important Interview Points',

      content: `
• for-each loop internally uses iteration
• Mostly used with arrays and collections
• Improves readability
• Preferred in modern Java code

Common Beginner Mistakes:

• Using wrong datatype
• Trying to access index directly
• Modifying collection incorrectly
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'For Each Loop Example',

      language: 'java',

      code: `public class ForEachExample {

    public static void main(String[] args) {

        int numbers[] = {10, 20, 30, 40};

        for(int value : numbers) {

            System.out.println(value);

        }

    }

}`,

      output: `10
20
30
40`,
    },

    {
      title: 'String Array Traversal',

      language: 'java',

      code: `public class StringLoop {

    public static void main(String[] args) {

        String names[] = {"Rahul", "Aman", "Priya"};

        for(String data : names) {

            System.out.println(data);

        }

    }

}`,

      output: `Rahul
Aman
Priya`,
    },
  ],

  mcqs: [
    {
      question:
        'For-each loop is mainly used for?', 

      options: [
        'Decision making',
        'Array traversal',
        'Class creation',
        'Inheritance'
      ],

      answer: 1,

      explanation:
        'For-each loop is mainly used to traverse arrays and collections.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is the advantage of for-each loop?',

      answer:
        'For-each loop improves readability and reduces manual index handling.',
    },
  ],

  nextTopic: 'java-while-loop',
},
{
  id: 'java-while-loop',

  title: 'Java While Loop',

  slug: 'java-while-loop',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '18 min read',

  difficulty: 'Beginner',

  description:
    'Learn Java while loop deeply with syntax, execution flow, infinite loops, nested while loops, and practical examples in beginner-friendly language.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini'],

  sections: [
    {
      heading: 'Introduction to While Loop',

      content: `
The while loop is used when a block of code needs to execute repeatedly until a condition becomes false.

Unlike the for loop, the while loop is mostly used when the number of iterations is unknown.

The loop checks the condition before executing the code block.

If the condition becomes false initially, the loop body will not execute even once.

Common Uses:

• User input programs
• Menu-driven applications
• Validation systems
• Repeating tasks until condition changes
`.trim(),
    },

    {
      heading: 'Syntax of While Loop',

      content: `
General Syntax:

while(condition) {

    // code

}

Important Components:

1. while keyword
2. Condition inside ()
3. Loop body inside {}

The loop continues while the condition remains true.
`.trim(),
    },

    {
      heading: 'Execution Flow of While Loop',

      content: `
Step-by-step execution:

1. Condition is checked
2. If true → loop body executes
3. Update statement changes value
4. Condition checked again

This process repeats until condition becomes false.

Important:

• Condition checking happens before execution
• Update statement is very important
`.trim(),
    },

    {
      heading: 'Infinite While Loop',

      content: `
If the condition never becomes false, the loop runs forever.

Example:

while(true) {

    // infinite loop

}

Infinite loops are useful in:

• Game engines
• Servers
• Continuous monitoring systems

But accidental infinite loops may freeze programs.
`.trim(),
    },

    {
      heading: 'Nested While Loop',

      content: `
A while loop inside another while loop is called nested while loop.

Mostly used in:

• Pattern printing
• Matrix operations
• Complex iterations

Outer loop controls one level.

Inner loop controls another level.
`.trim(),
    },

    {
      heading: 'Important Points About While Loop',

      content: `
• Best when iterations are unknown
• Condition is checked first
• Update statement must be handled manually
• Missing update may create infinite loops
• Proper indentation improves readability

Common Beginner Mistakes:

• Forgetting update statement
• Wrong loop condition
• Using semicolon after while
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Simple While Loop Example',

      language: 'java',

      code: `public class WhileLoopExample {

    public static void main(String[] args) {

        int i = 1;

        while(i <= 5) {

            System.out.println(i);

            i++;

        }

    }

}`,

      output: `1
2
3
4
5`,
    },

    {
      title: 'Even Numbers Using While Loop',

      language: 'java',

      code: `public class EvenNumbers {

    public static void main(String[] args) {

        int number = 2;

        while(number <= 10) {

            System.out.println(number);

            number = number + 2;

        }

    }

}`,

      output: `2
4
6
8
10`,
    },
  ],

  mcqs: [
    {
      question:
        'Which loop is preferred when number of iterations is unknown?',

      options: ['for loop', 'while loop', 'switch', 'if-else'],

      answer: 1,

      explanation:
        'while loop is mostly used when the number of iterations is unknown.',
    },

    {
      question:
        'When is the condition checked in while loop?',

      options: [
        'After execution',
        'Before execution',
        'Inside execution',
        'Never'
      ],

      answer: 1,

      explanation:
        'The condition is checked before loop body execution.',
    },

    {
      question:
        'What may happen if update statement is missing?',

      options: [
        'Compile error',
        'Infinite loop',
        'Program stops',
        'Nothing'
      ],

      answer: 1,

      explanation:
        'Without updating the loop variable, the condition may remain true forever.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is the difference between for loop and while loop?',

      answer:
        'for loop is generally used when the number of iterations is known, while while loop is used when iterations are unknown.',
    },

    {
      question:
        'What is an infinite loop in Java?',

      answer:
        'An infinite loop is a loop whose condition never becomes false, causing continuous execution.',
    },
  ],

  nextTopic: 'java-do-while-loop',
},

{
  id: 'java-do-while-loop',

  title: 'Java Do While Loop',

  slug: 'java-do-while-loop',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '17 min read',

  difficulty: 'Beginner',

  description:
    'Learn Java do-while loop deeply with syntax, execution flow, differences from while loop, and real-world examples in easy language.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Cognizant'],

  sections: [
    {
      heading: 'Introduction to Do While Loop',

      content: `
The do-while loop is similar to the while loop, but there is one major difference.

In do-while loop, the loop body executes at least one time even if the condition becomes false.

This happens because condition checking occurs after execution.

Used In:

• Menu-driven programs
• User input systems
• Programs requiring at least one execution
`.trim(),
    },

    {
      heading: 'Syntax of Do While Loop',

      content: `
General Syntax:

do {

    // code

}

while(condition);

Important Components:

1. do keyword
2. Loop body
3. while condition
4. Semicolon after while
`.trim(),
    },

    {
      heading: 'Execution Flow of Do While Loop',

      content: `
Step-by-step execution:

1. Loop body executes first
2. Condition is checked
3. If true → loop repeats
4. If false → loop stops

This guarantees minimum one execution.
`.trim(),
    },

    {
      heading: 'Difference Between While and Do While',

      content: `
While Loop:

• Condition checked first
• May execute zero times

Do While Loop:

• Executes first
• Checks condition later
• Executes at least once
`.trim(),
    },

    {
      heading: 'Important Points About Do While Loop',

      content: `
• Semicolon after while is mandatory
• Useful when one execution is necessary
• Avoid infinite conditions
• Proper update statements are required

Common Beginner Mistakes:

• Forgetting semicolon
• Missing update statement
• Wrong loop condition
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Simple Do While Example',

      language: 'java',

      code: `public class DoWhileExample {

    public static void main(String[] args) {

        int i = 1;

        do {

            System.out.println(i);

            i++;

        }

        while(i <= 5);

    }

}`,

      output: `1
2
3
4
5`,
    },

    {
      title: 'Do While Executes At Least Once',

      language: 'java',

      code: `public class MinimumExecution {

    public static void main(String[] args) {

        int number = 10;

        do {

            System.out.println("Executed");

        }

        while(number < 5);

    }

}`,

      output: 'Executed',
    },
  ],

  mcqs: [
    {
      question:
        'How many times does do-while loop execute at minimum?',

      options: ['0', '1', '2', 'Infinite'],

      answer: 1,

      explanation:
        'do-while loop always executes at least one time.',
    },

    {
      question:
        'Where is the condition checked in do-while loop?',

      options: [
        'Before execution',
        'Inside execution',
        'After execution',
        'Nowhere'
      ],

      answer: 2,

      explanation:
        'Condition checking happens after loop body execution.',
    },

    {
      question:
        'What is mandatory after while condition in do-while loop?',

      options: ['Colon', 'Semicolon', 'Bracket', 'Comma'],

      answer: 1,

      explanation:
        'A semicolon is mandatory after the while condition.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is the main difference between while and do-while loop?',

      answer:
        'while loop checks condition before execution, whereas do-while loop checks condition after execution.',
    },

    {
      question:
        'Why is do-while loop useful?',

      answer:
        'It is useful when the loop body must execute at least one time.',
    },
  ],

  nextTopic: 'java-break-statement',
},

{
  id: 'java-break-statement',

  title: 'Java Break Statement',

  slug: 'java-break-statement',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '12 min read',

  difficulty: 'Beginner',

  description:
    'Learn Java break statement deeply with loops, switch statements, execution control, and practical coding examples.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'HCL', 'Tech Mahindra'],

  sections: [
    {
      heading: 'Introduction to Break Statement',

      content: `
The break statement is used to immediately terminate a loop or switch statement.

When break executes, control moves outside the loop or switch block.

It helps stop unnecessary execution.

Used In:

• Exiting loops early
• Search operations
• Menu systems
• Switch statements
`.trim(),
    },

    {
      heading: 'Working of Break Statement',

      content: `
When Java encounters break:

1. Current loop stops immediately
2. Remaining iterations are skipped
3. Control moves outside loop

break improves efficiency when further execution is unnecessary.
`.trim(),
    },

    {
      heading: 'Break in Loops',

      content: `
break can be used inside:

• for loop
• while loop
• do-while loop

Mostly used with conditions.

Example:

• Stop loop when value found
• Exit loop after successful operation
`.trim(),
    },

    {
      heading: 'Break in Switch Statement',

      content: `
In switch statements, break prevents fall-through execution.

Without break:

• Multiple cases may execute

With break:

• Only matching case executes
`.trim(),
    },

    {
      heading: 'Important Points About Break',

      content: `
• break immediately stops execution
• Commonly used with conditions
• Improves performance
• Helps avoid unnecessary iterations

Common Mistakes:

• Forgetting break in switch
• Using break outside loops
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Break Statement Example',

      language: 'java',

      code: `public class BreakExample {

    public static void main(String[] args) {

        for(int i = 1; i <= 10; i++) {

            if(i == 5) {

                break;

            }

            System.out.println(i);

        }

    }

}`,

      output: `1
2
3
4`,
    },
  ],

  mcqs: [
    {
      question:
        'What does break statement do?',

      options: [
        'Repeats loop',
        'Stops execution',
        'Skips iteration',
        'Creates object'
      ],

      answer: 1,

      explanation:
        'break immediately terminates loop or switch execution.',
    },

    {
      question:
        'break is commonly used inside?',

      options: [
        'loops',
        'classes',
        'packages',
        'constructors'
      ],

      answer: 0,

      explanation:
        'break is mainly used inside loops and switch statements.',
    },

    {
      question:
        'Which statement prevents switch fall-through?',

      options: ['continue', 'return', 'break', 'skip'],

      answer: 2,

      explanation:
        'break prevents execution of remaining switch cases.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'Why is break used in loops?',

      answer:
        'break is used to terminate loops immediately when further execution is not required.',
    },

    {
      question:
        'Can break be used inside switch statement?',

      answer:
        'Yes, break is commonly used inside switch statements to stop fall-through execution.',
    },
  ],

  nextTopic: 'java-continue-statement',
},

{
  id: 'java-continue-statement',

  title: 'Java Continue Statement',

  slug: 'java-continue-statement',

  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',

  readTime: '13 min read',

  difficulty: 'Beginner',

  description:
    'Learn Java continue statement deeply with loops, skipping iterations, execution flow, and practical coding examples.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Capgemini'],

  sections: [
    {
      heading: 'Introduction to Continue Statement',

      content: `
The continue statement is used to skip the current iteration of a loop.

Instead of stopping the entire loop, continue moves control to the next iteration.

Used In:

• Skipping unwanted values
• Filtering data
• Conditional iteration
`.trim(),
    },

    {
      heading: 'Working of Continue Statement',

      content: `
When continue executes:

1. Current iteration stops
2. Remaining code inside loop is skipped
3. Next iteration starts immediately

continue does not terminate the loop completely.
`.trim(),
    },

    {
      heading: 'Continue in Different Loops',

      content: `
continue can be used inside:

• for loop
• while loop
• do-while loop

Mostly used with conditions.
`.trim(),
    },

    {
      heading: 'Difference Between Break and Continue',

      content: `
break:

• Stops entire loop

continue:

• Skips only current iteration

This is one of the most common interview questions.
`.trim(),
    },

    {
      heading: 'Important Points About Continue',

      content: `
• continue skips current iteration
• Loop execution continues normally
• Useful for filtering conditions
• Avoid unnecessary complexity

Common Mistakes:

• Confusing break with continue
• Wrong condition placement
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Continue Statement Example',

      language: 'java',

      code: `public class ContinueExample {

    public static void main(String[] args) {

        for(int i = 1; i <= 5; i++) {

            if(i == 3) {

                continue;

            }

            System.out.println(i);

        }

    }

}`,

      output: `1
2
4
5`,
    },
  ],

  mcqs: [
    {
      question:
        'What does continue statement do?',

      options: [
        'Stops program',
        'Skips current iteration',
        'Ends class',
        'Creates object'
      ],

      answer: 1,

      explanation:
        'continue skips the current iteration and moves to the next iteration.',
    },

    {
      question:
        'continue statement is used inside?',

      options: [
        'loops',
        'packages',
        'classes',
        'interfaces'
      ],

      answer: 0,

      explanation:
        'continue statement is mainly used inside loops.',
    },

    {
      question:
        'Which statement skips only one iteration?',

      options: ['break', 'stop', 'continue', 'return'],

      answer: 2,

      explanation:
        'continue skips only the current iteration.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is the difference between break and continue?',

      answer:
        'break terminates the entire loop, whereas continue skips only the current iteration.',
    },

    {
      question:
        'Why is continue statement used?',

      answer:
        'continue is used to skip unwanted iterations without terminating the entire loop.',
    },
  ],

  nextTopic: 'java-comments',
},

{
  id: 'java-comments',

  title: 'Java Comments',

  slug: 'java-comments',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '10 min read',

  difficulty: 'Beginner',

  description:
    'Learn Java comments deeply with single-line comments, multi-line comments, documentation comments, and coding best practices.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'IBM'],

  sections: [
    {
      heading: 'Introduction to Java Comments',

      content: `
Comments are notes written inside code for better understanding.

Comments are ignored by the Java compiler.

They help programmers:

• Explain logic
• Improve readability
• Debug code
• Maintain projects easily

Good comments make code easier to understand.
`.trim(),
    },

    {
      heading: 'Single Line Comments',

      content: `
Single-line comments start with //.

Everything written after // on the same line becomes a comment.

Used for:

• Short explanations
• Temporary notes
• Small descriptions
`.trim(),
    },

    {
      heading: 'Multi Line Comments',

      content: `
Multi-line comments start with /* and end with */.

Used when comments span multiple lines.

Mostly used for:

• Large explanations
• Documentation
• Detailed notes
`.trim(),
    },

    {
      heading: 'Documentation Comments',

      content: `
Documentation comments use /** */.

These comments are used for generating official documentation using Javadoc tool.

Mostly used in:

• Professional projects
• APIs
• Libraries
`.trim(),
    },

    {
      heading: 'Important Points About Comments',

      content: `
• Comments improve readability
• Excessive comments should be avoided
• Write meaningful comments
• Keep comments simple and clear

Common Beginner Mistakes:

• Writing unnecessary comments
• Using outdated comments
• Explaining obvious code
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Java Comments Example',

      language: 'java',

      code: `public class CommentExample {

    public static void main(String[] args) {

        // This is a single-line comment

        System.out.println("Hello Java");

        /*
           This is a
           multi-line comment
        */

    }

}`,

      output: 'Hello Java',
    },
  ],

  mcqs: [
    {
      question:
        'Which symbol is used for single-line comments in Java?',

      options: ['//', '/*', '#', '--'],

      answer: 0,

      explanation:
        '// is used for single-line comments.',
    },

    {
      question:
        'Which comments are used for documentation generation?',

      options: [
        'Single-line comments',
        'Multi-line comments',
        'Documentation comments',
        'Inline comments'
      ],

      answer: 2,

      explanation:
        'Documentation comments are used with Javadoc.',
    },

    {
      question:
        'Are comments executed by Java compiler?',

      options: ['Yes', 'No', 'Sometimes', 'Only in loops'],

      answer: 1,

      explanation:
        'Comments are ignored by the Java compiler.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'Why are comments important in Java?',

      answer:
        'Comments improve readability and help programmers understand code logic easily.',
    },

    {
      question:
        'What is the difference between single-line and multi-line comments?',

      answer:
        'Single-line comments are used for short notes, while multi-line comments are used for longer explanations.',
    },
  ],

  nextTopic: 'java-oops-concepts',
},
{
  id: 'java-oops-concepts',

  title: 'OOPs Concepts in Java',

  slug: 'java-oops-concepts',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '25 min read',

  difficulty: 'Beginner',

  description:
    'Learn Object-Oriented Programming concepts in Java deeply including encapsulation, inheritance, polymorphism, abstraction, and real-world examples.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini'],

  sections: [
    {
      heading: 'Introduction to OOPs in Java',

      content: `
OOPs stands for Object-Oriented Programming System.

Java is mainly based on OOPs concepts.

OOPs helps developers write:

• Reusable code
• Secure code
• Modular programs
• Easy-to-maintain applications

Instead of focusing only on functions, OOPs focuses on objects and real-world entities.

Real-Life Examples:

• Car
• Mobile
• Student
• Bank Account

Each object contains:

1. Properties
2. Behaviors

For example:

A car has:

• Color
• Speed
• Brand

And behaviors like:

• Start
• Stop
• Accelerate
`.trim(),
    },

    {
      heading: 'Main Pillars of OOPs',

      content: `
Java OOPs mainly contains four important concepts:

1. Encapsulation
2. Inheritance
3. Polymorphism
4. Abstraction

These four concepts form the backbone of Java programming.
`.trim(),
    },

    {
      heading: 'Encapsulation in Java',

      content: `
Encapsulation means wrapping data and methods together into a single unit.

Usually achieved using:

• Classes
• Private variables
• Getter and Setter methods

Benefits:

• Better security
• Controlled access
• Data hiding
• Improved maintainability

Example:

A bank account should not allow direct balance modification.

Instead:

• balance variable becomes private
• methods control access
`.trim(),
    },

    {
      heading: 'Inheritance in Java',

      content: `
Inheritance allows one class to acquire properties and behaviors of another class.

Main Purpose:

• Code reusability
• Reduced duplication
• Better hierarchy

Important Terms:

• Parent Class
• Child Class
• extends keyword

Example:

Animal → Parent

Dog → Child

Dog inherits properties from Animal.
`.trim(),
    },

    {
      heading: 'Polymorphism in Java',

      content: `
Polymorphism means one thing having many forms.

Types of Polymorphism:

1. Compile-time polymorphism
2. Runtime polymorphism

Examples:

• Method overloading
• Method overriding

Benefits:

• Flexibility
• Dynamic behavior
• Cleaner code
`.trim(),
    },

    {
      heading: 'Abstraction in Java',

      content: `
Abstraction means hiding internal implementation and showing only essential details.

Achieved using:

• Abstract classes
• Interfaces

Real-Life Example:

When driving a car:

• User uses steering and brakes
• Internal engine working remains hidden

Benefits:

• Reduced complexity
• Better security
• Cleaner design
`.trim(),
    },

    {
      heading: 'Advantages of OOPs',

      content: `
• Reusable code
• Better scalability
• Easier debugging
• Improved security
• Modular structure
• Real-world modeling

OOPs is heavily asked in placements and interviews.
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Simple OOPs Example',

      language: 'java',

      code: `class Student {

    String name;

    void display() {

        System.out.println("Student Name: " + name);

    }

}

public class Main {

    public static void main(String[] args) {

        Student s1 = new Student();

        s1.name = "Rahul";

        s1.display();

    }

}`,

      output: 'Student Name: Rahul',
    },
  ],

  mcqs: [
    {
      question:
        'What does OOPs stand for?',

      options: [
        'Object-Oriented Programming System',
        'Object Operation Program',
        'Only Object Program',
        'Object Output Process'
      ],

      answer: 0,

      explanation:
        'OOPs stands for Object-Oriented Programming System.',
    },

    {
      question:
        'Which concept provides data hiding?',

      options: [
        'Inheritance',
        'Polymorphism',
        'Encapsulation',
        'Looping'
      ],

      answer: 2,

      explanation:
        'Encapsulation provides data hiding using private variables.',
    },

    {
      question:
        'Which keyword is used for inheritance?',

      options: ['implement', 'extends', 'import', 'package'],

      answer: 1,

      explanation:
        'extends keyword is used for inheritance in Java.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What are the four pillars of OOPs?',

      answer:
        'The four pillars of OOPs are Encapsulation, Inheritance, Polymorphism, and Abstraction.',
    },

    {
      question:
        'Why is OOPs important in Java?',

      answer:
        'OOPs helps create reusable, secure, modular, and maintainable applications.',
    },
  ],

  nextTopic: 'java-naming-conventions',
},

{
  id: 'java-naming-conventions',

  title: 'Java Naming Conventions',

  slug: 'java-naming-conventions',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '15 min read',

  difficulty: 'Beginner',

  description:
    'Learn Java naming conventions deeply with variables, methods, classes, constants, packages, and industry-standard coding practices.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Cognizant'],

  sections: [
    {
      heading: 'Introduction to Naming Conventions',

      content: `
Naming conventions are standard rules used for naming variables, methods, classes, packages, and constants.

These rules improve:

• Readability
• Maintainability
• Professional coding style
• Team collaboration

Good naming makes code easier to understand.
`.trim(),
    },

    {
      heading: 'Class Naming Rules',

      content: `
Class names should:

• Start with uppercase letter
• Follow PascalCase

Examples:

• Student
• EmployeeData
• BankAccount

Bad Examples:

• student
• employee_data
• BANK
`.trim(),
    },

    {
      heading: 'Variable Naming Rules',

      content: `
Variable names should:

• Start with lowercase letter
• Follow camelCase

Examples:

• age
• studentName
• totalMarks

Meaningful variable names improve readability.
`.trim(),
    },

    {
      heading: 'Method Naming Rules',

      content: `
Method names should:

• Start with lowercase letter
• Follow camelCase
• Usually represent actions

Examples:

• calculateTotal()
• displayData()
• getMarks()
`.trim(),
    },

    {
      heading: 'Constant Naming Rules',

      content: `
Constants are written using uppercase letters.

Words are separated using underscore (_).

Examples:

• MAX_VALUE
• PI_VALUE
• TOTAL_MARKS
`.trim(),
    },

    {
      heading: 'Package Naming Rules',

      content: `
Package names should:

• Always be lowercase
• Avoid special characters

Examples:

• java.util
• com.student.management
`.trim(),
    },

    {
      heading: 'Important Best Practices',

      content: `
• Use meaningful names
• Avoid single-letter names
• Keep names simple
• Follow industry standards
• Maintain consistency

Proper naming conventions make code look professional.
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Naming Convention Example',

      language: 'java',

      code: `public class StudentData {

    static final int MAX_MARKS = 100;

    int studentAge = 20;

    void displayDetails() {

        System.out.println("Student Details");

    }

}`,

      output: 'Student Details',
    },
  ],

  mcqs: [
    {
      question:
        'Which naming style is used for class names?',

      options: [
        'camelCase',
        'snake_case',
        'PascalCase',
        'UPPERCASE'
      ],

      answer: 2,

      explanation:
        'Java class names usually follow PascalCase.',
    },

    {
      question:
        'How are constants generally written in Java?',

      options: [
        'camelCase',
        'lowercase',
        'UPPERCASE_WITH_UNDERSCORE',
        'PascalCase'
      ],

      answer: 2,

      explanation:
        'Constants are usually written in uppercase with underscores.',
    },

    {
      question:
        'Package names should generally be?', 

      options: [
        'Uppercase',
        'Lowercase',
        'MixedCase',
        'Numeric'
      ],

      answer: 1,

      explanation:
        'Package names are generally written in lowercase.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'Why are naming conventions important?',

      answer:
        'Naming conventions improve readability, maintainability, and professional coding standards.',
    },

    {
      question:
        'What naming style is used for methods in Java?',

      answer:
        'Methods generally follow camelCase naming style.',
    },
  ],

  nextTopic: 'java-object-and-class',
},

{
  id: 'java-object-and-class',

  title: 'Object and Class in Java',

  slug: 'java-object-and-class',

  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',

  readTime: '22 min read',

  difficulty: 'Beginner',

  description:
    'Learn classes and objects in Java deeply with real-world examples, object creation, methods, fields, and memory concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'HCL'],

  sections: [
    {
      heading: 'Introduction to Class and Object',

      content: `
Class and object are the foundation of Java OOPs programming.

Class:

• Blueprint of an object
• Defines properties and behaviors

Object:

• Real instance of a class
• Occupies memory
• Can access class members

Real-Life Example:

Class → Car Design

Object → Actual Car
`.trim(),
    },

    {
      heading: 'Understanding Class in Java',

      content: `
A class contains:

• Variables
• Methods
• Constructors
• Blocks

Syntax:

class ClassName {

}

A class itself does not consume much memory until objects are created.
`.trim(),
    },

    {
      heading: 'Understanding Object in Java',

      content: `
An object is created using new keyword.

Syntax:

ClassName objectName = new ClassName();

Object contains:

• State
• Behavior
• Identity

Multiple objects can be created from one class.
`.trim(),
    },

    {
      heading: 'Accessing Class Members',

      content: `
Objects are used to access:

• Variables
• Methods

Using dot operator:

object.variable
object.method()

Example:

student.name
student.display()
`.trim(),
    },

    {
      heading: 'Memory Allocation in Objects',

      content: `
Objects are stored in heap memory.

Reference variables store object addresses.

Example:

Student s1 = new Student();

Here:

• Student() object is in heap memory
• s1 stores reference
`.trim(),
    },

    {
      heading: 'Important Points About Objects and Classes',

      content: `
• Class is blueprint
• Object is real entity
• Multiple objects can use same class
• Objects access class members
• Classes improve modularity

Common Beginner Mistakes:

• Forgetting new keyword
• Confusing class and object
• Incorrect object syntax
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Class and Object Example',

      language: 'java',

      code: `class Student {

    String name;

    void display() {

        System.out.println("Student Name: " + name);

    }

}

public class Main {

    public static void main(String[] args) {

        Student s1 = new Student();

        s1.name = "Aman";

        s1.display();

    }

}`,

      output: 'Student Name: Aman',
    },
  ],

  mcqs: [
    {
      question:
        'What is a class in Java?',

      options: [
        'Real object',
        'Blueprint',
        'Method',
        'Package'
      ],

      answer: 1,

      explanation:
        'A class acts as a blueprint for objects.',
    },

    {
      question:
        'Which keyword is used to create objects?',

      options: ['create', 'new', 'class', 'object'],

      answer: 1,

      explanation:
        'new keyword is used to create objects.',
    },

    {
      question:
        'Objects are stored in which memory?',

      options: [
        'Stack memory',
        'Cache memory',
        'Heap memory',
        'ROM'
      ],

      answer: 2,

      explanation:
        'Objects are stored inside heap memory.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is the difference between class and object?',

      answer:
        'A class is a blueprint, whereas an object is the real instance created from that class.',
    },

    {
      question:
        'Why are objects important in Java?',

      answer:
        'Objects help access variables and methods defined inside classes and enable real-world modeling.',
    },
  ],

  nextTopic: 'java-constructors',
},

{
  id: 'java-constructors',

  title: 'Constructors in Java',

  slug: 'java-constructors',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '24 min read',

  difficulty: 'Beginner',

  description:
    'Learn constructors in Java deeply with default constructor, parameterized constructor, constructor overloading, and real-world examples.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'IBM'],

  sections: [
    {
      heading: 'Introduction to Constructors',

      content: `
A constructor is a special method used to initialize objects.

It executes automatically when an object is created.

Main Purpose:

• Initialize object data
• Set default values
• Simplify object creation

Constructors improve code readability and object setup.
`.trim(),
    },

    {
      heading: 'Rules of Constructor',

      content: `
Important Rules:

• Constructor name must match class name
• Constructors do not have return type
• Executes automatically during object creation
• Can accept parameters

Example:

Student() {

}
`.trim(),
    },

    {
      heading: 'Default Constructor',

      content: `
A constructor without parameters is called default constructor.

Used for:

• Assigning default values
• Basic object initialization

If no constructor is written, Java provides a default constructor automatically.
`.trim(),
    },

    {
      heading: 'Parameterized Constructor',

      content: `
A constructor with parameters is called parameterized constructor.

Used when object values should be initialized during creation.

Benefits:

• Flexible initialization
• Cleaner code
• Better control
`.trim(),
    },

    {
      heading: 'Constructor Overloading',

      content: `
Multiple constructors with different parameter lists are called constructor overloading.

Benefits:

• Multiple ways to create objects
• Improved flexibility
• Better readability
`.trim(),
    },

    {
      heading: 'Difference Between Constructor and Method',

      content: `
Constructor:

• Initializes objects
• No return type
• Executes automatically

Method:

• Performs operations
• Has return type
• Called manually
`.trim(),
    },

    {
      heading: 'Important Points About Constructors',

      content: `
• Constructors are special methods
• Used during object creation
• Can be overloaded
• Improves object initialization

Common Beginner Mistakes:

• Adding return type
• Wrong constructor name
• Confusing constructors with methods
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Default Constructor Example',

      language: 'java',

      code: `class Student {

    Student() {

        System.out.println("Constructor Called");

    }

}

public class Main {

    public static void main(String[] args) {

        Student s1 = new Student();

    }

}`,

      output: 'Constructor Called',
    },

    {
      title: 'Parameterized Constructor Example',

      language: 'java',

      code: `class Student {

    String name;

    Student(String studentName) {

        name = studentName;

    }

    void display() {

        System.out.println(name);

    }

}

public class Main {

    public static void main(String[] args) {

        Student s1 = new Student("Rahul");

        s1.display();

    }

}`,

      output: 'Rahul',
    },
  ],

  mcqs: [
    {
      question:
        'What is the main purpose of constructor?',

      options: [
        'Loop execution',
        'Object initialization',
        'Inheritance',
        'Package creation'
      ],

      answer: 1,

      explanation:
        'Constructors are mainly used for object initialization.',
    },

    {
      question:
        'Can constructors have parameters?',

      options: ['Yes', 'No', 'Only static', 'Only private'],

      answer: 0,

      explanation:
        'Constructors can accept parameters.',
    },

    {
      question:
        'Do constructors have return type?',

      options: ['Yes', 'No', 'Sometimes', 'Only int'],

      answer: 1,

      explanation:
        'Constructors do not have any return type.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is constructor overloading?',

      answer:
        'Constructor overloading means creating multiple constructors with different parameter lists.',
    },

    {
      question:
        'What is the difference between constructor and method?',

      answer:
        'Constructors initialize objects and execute automatically, whereas methods perform operations and are called manually.',
    },
  ],

  nextTopic: 'java-this-keyword',
},
{
  id: 'java-this-keyword',

  title: 'Java This Keyword',

  slug: 'java-this-keyword',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '18 min read',

  difficulty: 'Beginner',

  description:
    'Learn Java this keyword deeply with constructors, methods, current object reference, constructor chaining, and real-world examples.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'IBM'],

  sections: [
    {
      heading: 'Introduction to This Keyword',

      content: `
The this keyword in Java refers to the current object of the class.

Whenever an object calls a method or constructor, this points to that particular object.

Main Uses of this keyword:

• Refer current object variables
• Call current class methods
• Invoke constructors
• Pass current object as argument

this improves code readability and removes confusion between variables.
`.trim(),
    },

    {
      heading: 'Using This for Instance Variables',

      content: `
Sometimes local variables and instance variables have the same name.

In such cases, this keyword helps distinguish them.

Example:

this.name = name;

Here:

• this.name → instance variable
• name → local variable
`.trim(),
    },

    {
      heading: 'Calling Methods Using This',

      content: `
The this keyword can call current class methods.

Example:

this.display();

Although Java calls methods automatically internally, using this improves understanding.
`.trim(),
    },

    {
      heading: 'Constructor Chaining Using This',

      content: `
One constructor can call another constructor using this().

This process is called constructor chaining.

Benefits:

• Reduces duplicate code
• Improves readability
• Centralizes initialization
`.trim(),
    },

    {
      heading: 'Important Points About This Keyword',

      content: `
• this refers to current object
• Cannot be used inside static methods directly
• Used mostly with constructors and instance variables
• Improves code clarity

Common Beginner Mistakes:

• Confusing local and instance variables
• Using this incorrectly in static context
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'This Keyword Example',

      language: 'java',

      code: `class Student {

    String name;

    Student(String name) {

        this.name = name;

    }

    void display() {

        System.out.println(name);

    }

}

public class Main {

    public static void main(String[] args) {

        Student s1 = new Student("Rahul");

        s1.display();

    }

}`,

      output: 'Rahul',
    },
  ],

  mcqs: [
    {
      question:
        'What does this keyword refer to?',

      options: [
        'Parent class',
        'Current object',
        'Package',
        'Static block'
      ],

      answer: 1,

      explanation:
        'this keyword refers to the current object.',
    },

    {
      question:
        'Which statement is used for constructor chaining?',

      options: ['super()', 'this()', 'main()', 'new()'],

      answer: 1,

      explanation:
        'this() is used for constructor chaining.',
    },

    {
      question:
        'Can this keyword access instance variables?',

      options: ['Yes', 'No', 'Only static', 'Only private'],

      answer: 0,

      explanation:
        'this keyword is commonly used to access instance variables.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'Why is this keyword used in Java?',

      answer:
        'this keyword is used to refer to the current object and remove confusion between instance and local variables.',
    },

    {
      question:
        'What is constructor chaining?',

      answer:
        'Constructor chaining means calling one constructor from another constructor using this().',
    },
  ],

  nextTopic: 'java-static-keyword',
},

{
  id: 'java-static-keyword',

  title: 'Static Keyword in Java',

  slug: 'java-static-keyword',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '22 min read',

  difficulty: 'Beginner',

  description:
    'Learn Java static keyword deeply with static variables, static methods, memory allocation, static blocks, and practical examples.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Cognizant'],

  sections: [
    {
      heading: 'Introduction to Static Keyword',

      content: `
The static keyword belongs to the class instead of objects.

Static members are shared among all objects of the class.

Main Uses:

• Memory optimization
• Shared data
• Utility methods
• Common configurations
`.trim(),
    },

    {
      heading: 'Static Variables',

      content: `
Static variables are shared by all objects.

Only one copy exists in memory.

Example:

• College name
• Company name
• Common settings

Benefits:

• Saves memory
• Shared access
`.trim(),
    },

    {
      heading: 'Static Methods',

      content: `
Static methods belong to the class.

They can be called without creating objects.

Syntax:

ClassName.methodName();

Static methods can directly access:

• Static variables
• Static methods

They cannot directly access instance variables.
`.trim(),
    },

    {
      heading: 'Static Block',

      content: `
Static blocks execute only once when the class loads into memory.

Used for:

• Initialization
• Configuration setup
• Loading resources
`.trim(),
    },

    {
      heading: 'Important Points About Static Keyword',

      content: `
• Static belongs to class
• Memory efficient
• Shared among objects
• Static methods cannot use this keyword directly
• Main method is static

Common Beginner Mistakes:

• Accessing instance variables directly in static methods
• Confusing static and non-static members
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Static Variable Example',

      language: 'java',

      code: `class Student {

    static String college = "ABC College";

    String name;

    Student(String name) {

        this.name = name;

    }

    void display() {

        System.out.println(name + " " + college);

    }

}

public class Main {

    public static void main(String[] args) {

        Student s1 = new Student("Rahul");

        Student s2 = new Student("Aman");

        s1.display();

        s2.display();

    }

}`,

      output: `Rahul ABC College
Aman ABC College`,
    },
  ],

  mcqs: [
    {
      question:
        'Static members belong to?', 

      options: [
        'Objects',
        'Methods',
        'Class',
        'Constructor'
      ],

      answer: 2,

      explanation:
        'Static members belong to the class.',
    },

    {
      question:
        'Can static methods be called without objects?',

      options: ['Yes', 'No', 'Sometimes', 'Only constructors'],

      answer: 0,

      explanation:
        'Static methods can be called using class name.',
    },

    {
      question:
        'How many copies of static variable exist?',

      options: ['One per object', 'One', 'Two', 'Unlimited'],

      answer: 1,

      explanation:
        'Only one copy of static variable exists.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'Why are static variables memory efficient?',

      answer:
        'Only one shared copy of static variable exists for all objects.',
    },

    {
      question:
        'Why is main method static in Java?',

      answer:
        'main method is static so JVM can call it without creating objects.',
    },
  ],

  nextTopic: 'java-methods',
},

{
  id: 'java-methods',

  title: 'Methods in Java',

  slug: 'java-methods',

  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',

  readTime: '24 min read',

  difficulty: 'Beginner',

  description:
    'Learn Java methods deeply including method declaration, return types, reusable functions, syntax, and practical examples.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Accenture'],

  sections: [
    {
      heading: 'Introduction to Methods',

      content: `
Methods are blocks of code used to perform specific tasks.

Methods improve:

• Reusability
• Readability
• Modularity
• Code organization

Instead of writing the same logic repeatedly, methods allow reuse.
`.trim(),
    },

    {
      heading: 'Syntax of Method',

      content: `
General Syntax:

returnType methodName() {

    // code

}

Main Components:

1. Access modifier
2. Return type
3. Method name
4. Parameters
5. Method body
`.trim(),
    },

    {
      heading: 'Return Type in Methods',

      content: `
The return type defines what value the method returns.

Examples:

• int
• double
• String
• void

void means method returns nothing.
`.trim(),
    },

    {
      heading: 'Advantages of Methods',

      content: `
• Reduces duplicate code
• Easier debugging
• Better readability
• Simplifies maintenance
• Modular programming
`.trim(),
    },

    {
      heading: 'Important Points About Methods',

      content: `
• Method names usually follow camelCase
• Methods can return values
• Methods may or may not accept parameters
• Proper naming improves readability

Common Beginner Mistakes:

• Missing return statement
• Wrong return type
• Incorrect method calls
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Simple Method Example',

      language: 'java',

      code: `public class Main {

    static void greet() {

        System.out.println("Welcome to Java");

    }

    public static void main(String[] args) {

        greet();

    }

}`,

      output: 'Welcome to Java',
    },
  ],

  mcqs: [
    {
      question:
        'Why are methods used in Java?',

      options: [
        'For loops',
        'Code reusability',
        'Creating packages',
        'Comments'
      ],

      answer: 1,

      explanation:
        'Methods improve code reusability and modularity.',
    },

    {
      question:
        'Which return type means no value returned?',

      options: ['null', 'void', 'empty', 'static'],

      answer: 1,

      explanation:
        'void means method returns nothing.',
    },

    {
      question:
        'Method names usually follow?', 

      options: [
        'PascalCase',
        'camelCase',
        'UPPERCASE',
        'snake_case'
      ],

      answer: 1,

      explanation:
        'Java methods generally follow camelCase naming style.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What are methods in Java?',

      answer:
        'Methods are reusable blocks of code that perform specific tasks.',
    },

    {
      question:
        'What is the purpose of return type?',

      answer:
        'Return type specifies the type of value returned by the method.',
    },
  ],

  nextTopic: 'java-method-calling',
},

{
  id: 'java-method-calling',

  title: 'How to Call a Method in Java',

  slug: 'java-method-calling',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '17 min read',

  difficulty: 'Beginner',

  description:
    'Learn how to call methods in Java deeply including static methods, instance methods, object method calls, and execution flow.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'HCL', 'Tech Mahindra'],

  sections: [
    {
      heading: 'Introduction to Method Calling',

      content: `
Method calling means executing a method whenever required.

A method only executes when it is called.

Java supports:

• Static method calling
• Instance method calling
`.trim(),
    },

    {
      heading: 'Calling Static Methods',

      content: `
Static methods belong to the class.

They can be called:

• Directly inside same class
• Using class name

Example:

ClassName.methodName();
`.trim(),
    },

    {
      heading: 'Calling Instance Methods',

      content: `
Instance methods belong to objects.

To call instance methods:

1. Create object
2. Use dot operator

Example:

object.methodName();
`.trim(),
    },

    {
      heading: 'Execution Flow of Method Calling',

      content: `
1. Method call happens
2. Control moves to method
3. Method executes
4. Control returns back

This process is called method invocation.
`.trim(),
    },

    {
      heading: 'Important Points About Method Calling',

      content: `
• Static methods do not need objects
• Instance methods require objects
• Method names should match correctly
• Arguments must match parameter types

Common Beginner Mistakes:

• Calling instance methods without object
• Wrong method names
• Missing arguments
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Method Calling Example',

      language: 'java',

      code: `public class Main {

    void display() {

        System.out.println("Method Called");

    }

    public static void main(String[] args) {

        Main obj = new Main();

        obj.display();

    }

}`,

      output: 'Method Called',
    },
  ],

  mcqs: [
    {
      question:
        'What is required to call instance methods?',

      options: [
        'Package',
        'Object',
        'Loop',
        'Comment'
      ],

      answer: 1,

      explanation:
        'Objects are required to call instance methods.',
    },

    {
      question:
        'Static methods belong to?', 

      options: [
        'Objects',
        'Class',
        'Constructor',
        'Loop'
      ],

      answer: 1,

      explanation:
        'Static methods belong to the class.',
    },

    {
      question:
        'Which operator is used for method access?',

      options: ['#', '.', ':', '@'],

      answer: 1,

      explanation:
        'Dot operator is used to access methods.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is method invocation in Java?',

      answer:
        'Method invocation means calling and executing a method.',
    },

    {
      question:
        'What is the difference between static and instance method calling?',

      answer:
        'Static methods are called using class name, while instance methods require objects.',
    },
  ],

  nextTopic: 'java-method-challenges',
},

{
  id: 'java-method-challenges',

  title: 'Java Method Challenges',

  slug: 'java-method-challenges',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '20 min read',

  difficulty: 'Beginner',

  description:
    'Practice Java methods using beginner-friendly coding challenges focused on logic building, parameters, return values, and reusable programming.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Cognizant'],

  sections: [
    {
      heading: 'Why Method Challenges Are Important',

      content: `
Method challenges improve programming logic and problem-solving skills.

These exercises help students understand:

• Reusability
• Parameters
• Return values
• Logic creation

Method practice is very important for placements and coding rounds.
`.trim(),
    },

    {
      heading: 'Popular Beginner Method Challenges',

      content: `
Common beginner challenges:

1. Sum of two numbers
2. Find maximum number
3. Check even or odd
4. Reverse a number
5. Find factorial

These problems strengthen method concepts deeply.
`.trim(),
    },

    {
      heading: 'How to Solve Method Problems',

      content: `
Step-by-step approach:

1. Understand problem
2. Decide input parameters
3. Decide return type
4. Write method logic
5. Call method properly
6. Verify output
`.trim(),
    },

    {
      heading: 'Important Tips for Method Challenges',

      content: `
• Use meaningful method names
• Keep methods small
• Reuse methods when possible
• Practice dry runs
• Focus on logic building

Regular practice improves coding confidence.
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Maximum Number Method Challenge',

      language: 'java',

      code: `public class Main {

    static int maximum(int a, int b) {

        if(a > b) {

            return a;

        }

        else {

            return b;

        }

    }

    public static void main(String[] args) {

        int result = maximum(10, 20);

        System.out.println(result);

    }

}`,

      output: '20',
    },
  ],

  mcqs: [
    {
      question:
        'Why are method challenges important?',

      options: [
        'For comments',
        'For logic building',
        'For packages',
        'For imports'
      ],

      answer: 1,

      explanation:
        'Method challenges improve logic-building and problem-solving skills.',
    },

    {
      question:
        'What should be decided before writing a method?',

      options: [
        'Wallpaper',
        'Input and return type',
        'Color',
        'Browser'
      ],

      answer: 1,

      explanation:
        'Input parameters and return type should be decided first.',
    },

    {
      question:
        'Good methods should generally be?', 

      options: [
        'Very large',
        'Complex',
        'Small and reusable',
        'Unused'
      ],

      answer: 2,

      explanation:
        'Small and reusable methods improve maintainability.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'How do method challenges improve programming?',

      answer:
        'They improve problem-solving, logic building, and reusable coding skills.',
    },

    {
      question:
        'Why should methods remain small?',

      answer:
        'Small methods improve readability, debugging, and maintainability.',
    },
  ],

  nextTopic: 'java-method-parameters',
},

{
  id: 'java-method-parameters',

  title: 'Java Method Parameters',

  slug: 'java-method-parameters',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '18 min read',

  difficulty: 'Beginner',

  description:
    'Learn Java method parameters deeply including arguments, parameter passing, multiple parameters, and practical coding examples.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Accenture'],

  sections: [
    {
      heading: 'Introduction to Method Parameters',

      content: `
Parameters are variables passed into methods.

They allow methods to work with different data values.

Benefits:

• Flexibility
• Reusability
• Dynamic input handling
`.trim(),
    },

    {
      heading: 'Parameters vs Arguments',

      content: `
Parameters:

• Variables inside method definition

Arguments:

• Actual values passed during method call

Example:

add(int a, int b)

Here:

• a and b are parameters
`.trim(),
    },

    {
      heading: 'Multiple Parameters',

      content: `
Methods can accept multiple parameters.

Example:

• int
• double
• String

Parameters are separated using commas.
`.trim(),
    },

    {
      heading: 'Important Rules of Parameters',

      content: `
• Data types must match
• Order matters
• Number of arguments should match parameters
• Parameters improve method flexibility

Common Beginner Mistakes:

• Wrong argument order
• Missing arguments
• Incorrect data types
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Method Parameter Example',

      language: 'java',

      code: `public class Main {

    static int add(int a, int b) {

        return a + b;

    }

    public static void main(String[] args) {

        int result = add(10, 20);

        System.out.println(result);

    }

}`,

      output: '30',
    },
  ],

  mcqs: [
    {
      question:
        'What are parameters?',

      options: [
        'Loops',
        'Variables passed into methods',
        'Packages',
        'Classes'
      ],

      answer: 1,

      explanation:
        'Parameters are variables used inside method definition.',
    },

    {
      question:
        'What are arguments?',

      options: [
        'Actual values passed',
        'Loops',
        'Packages',
        'Objects'
      ],

      answer: 0,

      explanation:
        'Arguments are actual values passed during method calling.',
    },

    {
      question:
        'Can methods accept multiple parameters?',

      options: ['Yes', 'No', 'Only static', 'Only constructors'],

      answer: 0,

      explanation:
        'Methods can accept multiple parameters.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is the difference between parameters and arguments?',

      answer:
        'Parameters are variables in method definition, while arguments are actual values passed during method call.',
    },

    {
      question:
        'Why are parameters useful?',

      answer:
        'Parameters make methods flexible and reusable for different inputs.',
    },
  ],

  nextTopic: 'java-method-overloading',
},

{
  id: 'java-method-overloading',

  title: 'Method Overloading in Java',

  slug: 'java-method-overloading',

  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',

  readTime: '22 min read',

  difficulty: 'Beginner',

  description:
    'Learn Java method overloading deeply with compile-time polymorphism, multiple methods, parameter differences, and practical examples.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'HCL'],

  sections: [
    {
      heading: 'Introduction to Method Overloading',

      content: `
Method overloading means creating multiple methods with the same name but different parameters.

It is an example of compile-time polymorphism.

Benefits:

• Better readability
• Improved flexibility
• Cleaner method naming
`.trim(),
    },

    {
      heading: 'Rules of Method Overloading',

      content: `
Methods can be overloaded by changing:

1. Number of parameters
2. Data type of parameters
3. Order of parameters

Changing only return type is not enough.
`.trim(),
    },

    {
      heading: 'Why Method Overloading is Useful',

      content: `
Method overloading allows the same operation to work with different inputs.

Example:

• add(int, int)
• add(double, double)

This improves developer convenience.
`.trim(),
    },

    {
      heading: 'Compile-Time Polymorphism',

      content: `
Method overloading is resolved during compilation.

Java decides which method to call based on arguments.

Therefore, it is called compile-time polymorphism.
`.trim(),
    },

    {
      heading: 'Important Points About Method Overloading',

      content: `
• Same method name allowed
• Parameters must differ
• Return type alone cannot overload methods
• Improves readability

Common Beginner Mistakes:

• Changing only return type
• Same parameter list
• Incorrect argument types
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Method Overloading Example',

      language: 'java',

      code: `public class Main {

    static int add(int a, int b) {

        return a + b;

    }

    static double add(double a, double b) {

        return a + b;

    }

    public static void main(String[] args) {

        System.out.println(add(10, 20));

        System.out.println(add(5.5, 4.5));

    }

}`,

      output: `30
10.0`,
    },
  ],

  mcqs: [
    {
      question:
        'What is method overloading?',

      options: [
        'Using multiple classes',
        'Multiple methods with same name',
        'Inheritance',
        'Package creation'
      ],

      answer: 1,

      explanation:
        'Method overloading means multiple methods having same name with different parameters.',
    },

    {
      question:
        'Method overloading is example of?', 

      options: [
        'Runtime polymorphism',
        'Compile-time polymorphism',
        'Inheritance',
        'Abstraction'
      ],

      answer: 1,

      explanation:
        'Method overloading is compile-time polymorphism.',
    },

    {
      question:
        'Can methods be overloaded by changing only return type?',

      options: ['Yes', 'No', 'Sometimes', 'Only static methods'],

      answer: 1,

      explanation:
        'Changing only return type cannot overload methods.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What are the ways to overload methods?',

      answer:
        'Methods can be overloaded by changing parameter count, data type, or parameter order.',
    },

    {
      question:
        'Why is method overloading important?',

      answer:
        'Method overloading improves flexibility, readability, and compile-time polymorphism.',
    },
  ],

  nextTopic: 'java-recursion',
},
{
  id: 'java-recursion',

  title: 'Recursion in Java',

  slug: 'java-recursion',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '24 min read',

  difficulty: 'Intermediate',

  description:
    'Learn recursion in Java deeply with recursive functions, base conditions, stack memory, recursive flow, and practical examples.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini'],

  sections: [
    {
      heading: 'Introduction to Recursion',

      content: `
Recursion is a programming technique where a method calls itself repeatedly.

A recursive method solves a problem by breaking it into smaller subproblems.

Recursion is widely used in:

• Tree traversal
• Backtracking
• Dynamic programming
• Mathematical calculations
• Divide and conquer algorithms

A recursive solution contains:

1. Base condition
2. Recursive call

Without a base condition, recursion may continue forever.
`.trim(),
    },

    {
      heading: 'How Recursion Works',

      content: `
When a recursive method calls itself:

• New method call gets added to stack memory
• Each call waits for the next call to finish
• After reaching base condition, calls return one by one

This process is called recursive stack unwinding.
`.trim(),
    },

    {
      heading: 'Base Condition in Recursion',

      content: `
The base condition stops recursion.

Without base condition:

• Infinite recursion occurs
• StackOverflowError may happen

Example:

if(n == 0) {

    return;

}

Base condition is one of the most important parts of recursion.
`.trim(),
    },

    {
      heading: 'Advantages of Recursion',

      content: `
• Cleaner code
• Elegant problem solving
• Useful for complex structures
• Simplifies divide-and-conquer problems

Recursion often makes code shorter and easier to understand.
`.trim(),
    },

    {
      heading: 'Disadvantages of Recursion',

      content: `
• More memory usage
• Stack overflow risk
• Slower than loops sometimes

Improper recursion may reduce performance.
`.trim(),
    },

    {
      heading: 'Important Points About Recursion',

      content: `
• Every recursive method needs base condition
• Recursive calls use stack memory
• Recursion can replace loops in some problems
• Deep recursion may cause StackOverflowError

Common Beginner Mistakes:

• Missing base condition
• Wrong recursive logic
• Infinite recursion
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Factorial Using Recursion',

      language: 'java',

      code: `public class Main {

    static int factorial(int n) {

        if(n == 1) {

            return 1;

        }

        return n * factorial(n - 1);

    }

    public static void main(String[] args) {

        System.out.println(factorial(5));

    }

}`,

      output: '120',
    },

    {
      title: 'Print Numbers Using Recursion',

      language: 'java',

      code: `public class Main {

    static void printNumbers(int n) {

        if(n == 0) {

            return;

        }

        printNumbers(n - 1);

        System.out.println(n);

    }

    public static void main(String[] args) {

        printNumbers(5);

    }

}`,

      output: `1
2
3
4
5`,
    },
  ],

  mcqs: [
    {
      question:
        'What is recursion in Java?',

      options: [
        'Loop execution',
        'Method calling itself',
        'Class creation',
        'Package import'
      ],

      answer: 1,

      explanation:
        'Recursion means a method calling itself repeatedly.',
    },

    {
      question:
        'Which condition stops recursion?',

      options: [
        'Loop condition',
        'Base condition',
        'Switch condition',
        'Static condition'
      ],

      answer: 1,

      explanation:
        'Base condition stops recursive execution.',
    },

    {
      question:
        'What error may occur in infinite recursion?',

      options: [
        'NullPointerException',
        'StackOverflowError',
        'ArithmeticException',
        'IOException'
      ],

      answer: 1,

      explanation:
        'Infinite recursion may cause StackOverflowError.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'Why is base condition important in recursion?',

      answer:
        'Base condition stops recursive calls and prevents infinite recursion.',
    },

    {
      question:
        'What are the disadvantages of recursion?',

      answer:
        'Recursion may consume more memory and can cause stack overflow if not handled properly.',
    },
  ],

  nextTopic: 'java-call-by-value-reference',
},

{
  id: 'java-call-by-value-reference',

  title: 'Call by Value and Call by Reference in Java',

  slug: 'java-call-by-value-reference',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '22 min read',

  difficulty: 'Intermediate',

  description:
    'Learn call by value and call by reference concepts in Java deeply with memory behavior, parameter passing, and important interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Cognizant'],

  sections: [
    {
      heading: 'Introduction to Parameter Passing',

      content: `
Parameter passing means sending data to methods.

Java uses parameter passing during method calls.

Two common concepts are:

1. Call by Value
2. Call by Reference

These concepts are frequently asked in interviews.
`.trim(),
    },

    {
      heading: 'Call by Value in Java',

      content: `
In call by value:

• Copy of variable value is passed
• Original variable remains unchanged

Java uses call by value for primitive data types.

Example primitive types:

• int
• double
• char
• boolean

Changes inside method do not affect original variables.
`.trim(),
    },

    {
      heading: 'Call by Reference Concept',

      content: `
In call by reference:

• Reference address is passed
• Original object data may change

Java does not support pure call by reference like C++.

However, object references behave similarly.

Object modifications inside methods may affect original objects.
`.trim(),
    },

    {
      heading: 'Primitive vs Object Behavior',

      content: `
Primitive Variables:

• Copy of value passed

Objects:

• Reference copy passed
• Object data can change

This creates confusion for many beginners.
`.trim(),
    },

    {
      heading: 'Important Interview Concept',

      content: `
Java is officially called:

• Pass by value language

Even for objects:

• Copy of reference is passed

Original reference variable itself does not change.
`.trim(),
    },

    {
      heading: 'Important Points About Parameter Passing',

      content: `
• Java uses pass by value
• Primitive variables remain unchanged
• Object data may change through references
• Reference variables themselves are copied

Common Beginner Mistakes:

• Thinking Java supports pure call by reference
• Confusing object modification with reference modification
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Call by Value Example',

      language: 'java',

      code: `public class Main {

    static void changeValue(int number) {

        number = 100;

    }

    public static void main(String[] args) {

        int value = 10;

        changeValue(value);

        System.out.println(value);

    }

}`,

      output: '10',
    },

    {
      title: 'Object Reference Example',

      language: 'java',

      code: `class Student {

    int marks = 50;

}

public class Main {

    static void updateMarks(Student s) {

        s.marks = 90;

    }

    public static void main(String[] args) {

        Student s1 = new Student();

        updateMarks(s1);

        System.out.println(s1.marks);

    }

}`,

      output: '90',
    },
  ],

  mcqs: [
    {
      question:
        'Java officially supports?', 

      options: [
        'Call by reference',
        'Pass by value',
        'Pointer passing',
        'Memory sharing'
      ],

      answer: 1,

      explanation:
        'Java officially supports pass by value.',
    },

    {
      question:
        'Primitive variables are passed as?', 

      options: [
        'Reference',
        'Address',
        'Copy of value',
        'Object'
      ],

      answer: 2,

      explanation:
        'Primitive variables are passed as copies of values.',
    },

    {
      question:
        'Can object data change inside methods?',

      options: ['Yes', 'No', 'Only static', 'Only arrays'],

      answer: 0,

      explanation:
        'Object data can change through copied references.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'Is Java pass by value or pass by reference?',

      answer:
        'Java is pass by value because copies of variables or references are passed.',
    },

    {
      question:
        'Why do object values change inside methods in Java?',

      answer:
        'Because copies of object references point to the same object in memory.',
    },
  ],

  nextTopic: 'java-inheritance',
},

{
  id: 'java-inheritance',

  title: 'Inheritance in Java',

  slug: 'java-inheritance',

  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',

  readTime: '26 min read',

  difficulty: 'Intermediate',

  description:
    'Learn inheritance in Java deeply with parent-child relationships, types of inheritance, method overriding, and real-world examples.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini'],

  sections: [
    {
      heading: 'Introduction to Inheritance',

      content: `
Inheritance is one of the most important OOPs concepts in Java.

Inheritance allows one class to acquire properties and behaviors of another class.

Main Purpose:

• Code reusability
• Reduced duplication
• Better hierarchy

Inheritance creates parent-child relationships between classes.
`.trim(),
    },

    {
      heading: 'Parent and Child Class',

      content: `
Parent Class:

• Also called superclass
• Provides properties and methods

Child Class:

• Also called subclass
• Inherits parent members

Keyword Used:

extends
`.trim(),
    },

    {
      heading: 'Syntax of Inheritance',

      content: `
General Syntax:

class Parent {

}

class Child extends Parent {

}

Child class automatically gets accessible parent members.
`.trim(),
    },

    {
      heading: 'Types of Inheritance',

      content: `
Java supports:

1. Single inheritance
2. Multilevel inheritance
3. Hierarchical inheritance

Java does not support multiple inheritance using classes directly because of ambiguity problems.
`.trim(),
    },

    {
      heading: 'Advantages of Inheritance',

      content: `
• Code reusability
• Better maintainability
• Cleaner hierarchy
• Reduced duplication
• Supports polymorphism
`.trim(),
    },

    {
      heading: 'Important Points About Inheritance',

      content: `
• extends keyword is used
• Private members are not directly inherited
• Constructors are not inherited
• Child class can override methods

Common Beginner Mistakes:

• Confusing inheritance with object creation
• Trying to access private members directly
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Simple Inheritance Example',

      language: 'java',

      code: `class Animal {

    void sound() {

        System.out.println("Animal makes sound");

    }

}

class Dog extends Animal {

    void bark() {

        System.out.println("Dog barks");

    }

}

public class Main {

    public static void main(String[] args) {

        Dog d = new Dog();

        d.sound();

        d.bark();

    }

}`,

      output: `Animal makes sound
Dog barks`,
    },
  ],

  mcqs: [
    {
      question:
        'Which keyword is used for inheritance?',

      options: ['inherit', 'extends', 'implements', 'super'],

      answer: 1,

      explanation:
        'extends keyword is used for inheritance.',
    },

    {
      question:
        'Inheritance mainly provides?', 

      options: [
        'Looping',
        'Code reusability',
        'Commenting',
        'Compilation'
      ],

      answer: 1,

      explanation:
        'Inheritance mainly provides code reusability.',
    },

    {
      question:
        'Which class inherits properties?',

      options: [
        'Parent class',
        'Child class',
        'Main class',
        'Static class'
      ],

      answer: 1,

      explanation:
        'Child class inherits properties from parent class.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'Why is inheritance important in Java?',

      answer:
        'Inheritance improves code reusability, hierarchy, and maintainability.',
    },

    {
      question:
        'Why does Java not support multiple inheritance using classes?',

      answer:
        'Java avoids multiple inheritance using classes to prevent ambiguity problems.',
    },
  ],

  nextTopic: 'java-aggregation',
},

{
  id: 'java-aggregation',

  title: 'Aggregation in Java',

  slug: 'java-aggregation',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '18 min read',

  difficulty: 'Intermediate',

  description:
    'Learn aggregation in Java deeply with HAS-A relationships, object references, real-world examples, and OOPs design concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'HCL'],

  sections: [
    {
      heading: 'Introduction to Aggregation',

      content: `
Aggregation is a special relationship between classes in Java.

It represents HAS-A relationship.

Example:

• Department HAS-A Teacher
• Car HAS-A Engine
• Student HAS-A Address

Aggregation improves code reusability and object organization.
`.trim(),
    },

    {
      heading: 'HAS-A Relationship',

      content: `
Aggregation works using object references.

One class contains reference of another class.

Example:

class Student {

    Address address;

}

Here:

• Student HAS-A Address
`.trim(),
    },

    {
      heading: 'Real-Life Understanding of Aggregation',

      content: `
Aggregation represents loosely connected objects.

Example:

A university has teachers.

Even if university object is removed:

• Teacher objects may still exist

This is different from composition where object dependency is stronger.
`.trim(),
    },

    {
      heading: 'Advantages of Aggregation',

      content: `
• Better code reuse
• Improved modularity
• Cleaner design
• Real-world modeling
• Easier maintenance
`.trim(),
    },

    {
      heading: 'Aggregation vs Inheritance',

      content: `
Inheritance:

• IS-A relationship

Aggregation:

• HAS-A relationship

Examples:

Dog IS-A Animal → Inheritance

Car HAS-A Engine → Aggregation
`.trim(),
    },

    {
      heading: 'Important Points About Aggregation',

      content: `
• Uses object references
• Represents HAS-A relationship
• Improves modular design
• Important in real-world projects

Common Beginner Mistakes:

• Confusing aggregation with inheritance
• Using unnecessary inheritance instead of aggregation
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Aggregation Example',

      language: 'java',

      code: `class Address {

    String city;

    Address(String city) {

        this.city = city;

    }

}

class Student {

    String name;

    Address address;

    Student(String name, Address address) {

        this.name = name;

        this.address = address;

    }

    void display() {

        System.out.println(name + " " + address.city);

    }

}

public class Main {

    public static void main(String[] args) {

        Address a1 = new Address("Delhi");

        Student s1 = new Student("Rahul", a1);

        s1.display();

    }

}`,

      output: 'Rahul Delhi',
    },
  ],

  mcqs: [
    {
      question:
        'Aggregation represents which relationship?',

      options: [
        'IS-A',
        'HAS-A',
        'PART-OF',
        'USES-A'
      ],

      answer: 1,

      explanation:
        'Aggregation represents HAS-A relationship.',
    },

    {
      question:
        'Aggregation mainly uses?', 

      options: [
        'Loops',
        'Object references',
        'Switch statements',
        'Packages'
      ],

      answer: 1,

      explanation:
        'Aggregation mainly works using object references.',
    },

    {
      question:
        'Which is an example of aggregation?',

      options: [
        'Dog IS-A Animal',
        'Car HAS-A Engine',
        'Loop HAS-A Condition',
        'Class HAS-A Method'
      ],

      answer: 1,

      explanation:
        'Car HAS-A Engine is an aggregation example.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is aggregation in Java?',

      answer:
        'Aggregation is a HAS-A relationship where one class contains reference of another class.',
    },

    {
      question:
        'What is the difference between inheritance and aggregation?',

      answer:
        'Inheritance represents IS-A relationship, whereas aggregation represents HAS-A relationship.',
    },
  ],

  nextTopic: 'java-method-overriding',
},
{
  id: 'java-method-overriding',

  title: 'Method Overriding in Java',

  slug: 'java-method-overriding',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '24 min read',

  difficulty: 'Intermediate',

  description:
    'Learn method overriding in Java deeply with runtime polymorphism, inheritance, overriding rules, dynamic binding, and real-world examples.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'IBM'],

  sections: [
    {
      heading: 'Method Overriding in Java',

      content: `
• Introduction to Method Overriding

• Rules of Method Overriding

• Runtime Polymorphism

• Dynamic Method Dispatch

• Advantages of Overriding
`,
    },

    {
      heading: 'Introduction to Method Overriding',

      content: `
Method overriding happens when child class provides its own implementation of parent class method.

Method overriding requires inheritance.

It is one of the most important concepts of runtime polymorphism.

Main Purpose:

• Change parent behavior
• Achieve runtime polymorphism
• Provide specific implementation
`.trim(),
    },

    {
      heading: 'Rules of Method Overriding',

      content: `
Important Rules:

• Method name must be same
• Parameters must be same
• Inheritance is required
• Return type should be same or covariant

Method overriding mainly works with parent-child relationships.
`.trim(),
    },

    {
      heading: 'Runtime Polymorphism',

      content: `
Method overriding supports runtime polymorphism.

During runtime:

• JVM decides which method to call
• Decision depends on object type

This process is called dynamic method dispatch.
`.trim(),
    },

    {
      heading: 'Advantages of Method Overriding',

      content: `
• Runtime flexibility
• Better extensibility
• Supports dynamic behavior
• Cleaner object-oriented design

Method overriding is heavily used in frameworks and real-world applications.
`.trim(),
    },

    {
      heading: 'Important Points About Method Overriding',

      content: `
• Overriding requires inheritance
• @Override annotation improves readability
• Static methods cannot be overridden normally
• Private methods cannot be overridden

Common Beginner Mistakes:

• Different parameters
• Missing inheritance
• Confusing overriding with overloading
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Method Overriding Example',

      language: 'java',

      code: `class Animal {

    void sound() {

        System.out.println("Animal makes sound");

    }

}

class Dog extends Animal {

    @Override
    void sound() {

        System.out.println("Dog barks");

    }

}

public class Main {

    public static void main(String[] args) {

        Animal a = new Dog();

        a.sound();

    }

}`,

      output: 'Dog barks',
    },
  ],

  mcqs: [
    {
      question:
        'Method overriding requires?', 

      options: [
        'Loop',
        'Inheritance',
        'Package',
        'Constructor'
      ],

      answer: 1,

      explanation:
        'Method overriding requires inheritance.',
    },

    {
      question:
        'Method overriding is example of?', 

      options: [
        'Compile-time polymorphism',
        'Runtime polymorphism',
        'Abstraction',
        'Encapsulation'
      ],

      answer: 1,

      explanation:
        'Method overriding supports runtime polymorphism.',
    },

    {
      question:
        'Which annotation is commonly used in overriding?',

      options: [
        '@Test',
        '@Static',
        '@Override',
        '@Main'
      ],

      answer: 2,

      explanation:
        '@Override annotation is commonly used in overriding.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is method overriding in Java?',

      answer:
        'Method overriding means redefining parent class method inside child class using same method signature.',
    },

    {
      question:
        'Why is method overriding important?',

      answer:
        'Method overriding enables runtime polymorphism and dynamic method behavior.',
    },
  ],

  nextTopic: 'java-method-overloading',
},

{
  id: 'java-method-overloading',

  title: 'Method Overloading in Java',

  slug: 'java-method-overloading',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '22 min read',

  difficulty: 'Intermediate',

  description:
    'Learn method overloading in Java deeply with compile-time polymorphism, parameter differences, rules, and practical examples.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Cognizant'],

  sections: [
    {
      heading: 'Method Overloading in Java',

      content: `
• Introduction to Method Overloading

• Rules of Method Overloading

• Compile-Time Polymorphism

• Parameter Variations

• Advantages of Overloading
`,
    },

    {
      heading: 'Introduction to Method Overloading',

      content: `
Method overloading means creating multiple methods with same name but different parameters.

It improves code readability and flexibility.

Method overloading is example of compile-time polymorphism.
`.trim(),
    },

    {
      heading: 'Rules of Method Overloading',

      content: `
Methods can be overloaded by changing:

1. Number of parameters
2. Data type of parameters
3. Order of parameters

Changing only return type is not enough.
`.trim(),
    },

    {
      heading: 'Compile-Time Polymorphism',

      content: `
Java decides overloaded methods during compilation.

Therefore:

• Faster execution
• Better readability
• Cleaner method naming

This is called compile-time polymorphism.
`.trim(),
    },

    {
      heading: 'Advantages of Method Overloading',

      content: `
• Improved readability
• Reusable method names
• Flexible input handling
• Cleaner code structure

Method overloading is widely used in Java libraries.
`.trim(),
    },

    {
      heading: 'Important Points About Method Overloading',

      content: `
• Same method name allowed
• Parameters must differ
• Return type alone cannot overload methods
• Overloading does not require inheritance

Common Beginner Mistakes:

• Same parameter list
• Changing only return type
• Wrong argument types
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Method Overloading Example',

      language: 'java',

      code: `class Calculator {

    void add(int a, int b) {

        System.out.println(a + b);

    }

    void add(int a, int b, int c) {

        System.out.println(a + b + c);

    }

}

public class Main {

    public static void main(String[] args) {

        Calculator c = new Calculator();

        c.add(10, 20);

        c.add(10, 20, 30);

    }

}`,

      output: `30
60`,
    },
  ],

  mcqs: [
    {
      question:
        'Method overloading is example of?', 

      options: [
        'Runtime polymorphism',
        'Compile-time polymorphism',
        'Inheritance',
        'Abstraction'
      ],

      answer: 1,

      explanation:
        'Method overloading is compile-time polymorphism.',
    },

    {
      question:
        'Can methods overload using only return type?',

      options: ['Yes', 'No', 'Sometimes', 'Only static methods'],

      answer: 1,

      explanation:
        'Changing only return type cannot overload methods.',
    },

    {
      question:
        'Which thing must change for overloading?',

      options: [
        'Class name',
        'Method body only',
        'Parameters',
        'Package'
      ],

      answer: 2,

      explanation:
        'Parameters must differ for overloading.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is method overloading?',

      answer:
        'Method overloading means multiple methods having same name with different parameters.',
    },

    {
      question:
        'Why is method overloading useful?',

      answer:
        'Method overloading improves readability and flexible method usage.',
    },
  ],

  nextTopic: 'java-super-keyword',
},

{
  id: 'java-super-keyword',

  title: 'Java super Keyword',

  slug: 'java-super-keyword',

  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',

  readTime: '18 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java super keyword deeply with parent class access, constructor calling, methods, variables, and inheritance concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'HCL'],

  sections: [
    {
      heading: 'Java super Keyword',

      content: `
• Access Parent Variables

• Access Parent Methods

• Call Parent Constructor

• Inheritance Usage

• Runtime Behavior
`,
    },

    {
      heading: 'Introduction to super Keyword',

      content: `
The super keyword refers to immediate parent class object.

It is mainly used in inheritance.

super helps child class access parent class members easily.
`.trim(),
    },

    {
      heading: 'Using super for Variables',

      content: `
super can access parent class variables.

Useful when parent and child variables have same name.

Example:

super.name;
`.trim(),
    },

    {
      heading: 'Using super for Methods',

      content: `
super can call parent class methods.

Example:

super.display();

This helps child class reuse parent behavior.
`.trim(),
    },

    {
      heading: 'Using super for Constructors',

      content: `
super() calls parent class constructor.

Important Rules:

• Must be first statement in constructor
• Executes parent constructor first

Constructor chaining improves initialization flow.
`.trim(),
    },

    {
      heading: 'Important Points About super Keyword',

      content: `
• Used only with inheritance
• Refers to immediate parent class
• Helps access hidden parent members
• Constructor calls use super()

Common Beginner Mistakes:

• Using super without inheritance
• Calling super() incorrectly
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'super Keyword Example',

      language: 'java',

      code: `class Parent {

    Parent() {

        System.out.println("Parent Constructor");

    }

}

class Child extends Parent {

    Child() {

        super();

        System.out.println("Child Constructor");

    }

}

public class Main {

    public static void main(String[] args) {

        Child c = new Child();

    }

}`,

      output: `Parent Constructor
Child Constructor`,
    },
  ],

  mcqs: [
    {
      question:
        'super keyword refers to?', 

      options: [
        'Current object',
        'Parent class object',
        'Package',
        'Constructor'
      ],

      answer: 1,

      explanation:
        'super keyword refers to immediate parent class object.',
    },

    {
      question:
        'Which statement calls parent constructor?',

      options: ['this()', 'main()', 'super()', 'new()'],

      answer: 2,

      explanation:
        'super() calls parent constructor.',
    },

    {
      question:
        'super keyword mainly works with?', 

      options: [
        'Loops',
        'Inheritance',
        'Packages',
        'Comments'
      ],

      answer: 1,

      explanation:
        'super keyword mainly works with inheritance.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'Why is super keyword used in Java?',

      answer:
        'super keyword is used to access parent class variables, methods, and constructors.',
    },

    {
      question:
        'Why should super() be first statement in constructor?',

      answer:
        'Because parent constructor must execute before child constructor initialization.',
    },
  ],

  nextTopic: 'java-instance-initializer-block',
},

{
  id: 'java-instance-initializer-block',

  title: 'Java Instance Initializer Block',

  slug: 'java-instance-initializer-block',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '16 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java instance initializer block deeply with execution flow, constructors, initialization order, and practical examples.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'],

  sections: [
    {
      heading: 'Java Instance Initializer Block',

      content: `
• Introduction to Initializer Block

• Execution Flow

• Constructor Relationship

• Object Initialization

• Advantages of Initializer Blocks
`,
    },

    {
      heading: 'Introduction to Instance Initializer Block',

      content: `
Instance initializer block is a block of code that executes whenever object is created.

It executes before constructor.

Syntax:

{

    // initializer block

}
`.trim(),
    },

    {
      heading: 'Execution Flow of Initializer Block',

      content: `
Execution Order:

1. Object creation
2. Initializer block execution
3. Constructor execution

Initializer blocks run every time object gets created.
`.trim(),
    },

    {
      heading: 'Advantages of Initializer Block',

      content: `
• Common initialization logic
• Reduced duplicate constructor code
• Cleaner constructors
• Better organization

Useful when multiple constructors share common code.
`.trim(),
    },

    {
      heading: 'Initializer Block vs Constructor',

      content: `
Initializer Block:

• Executes before constructor
• Common for all constructors

Constructor:

• Initializes object specifically
• Can accept parameters
`.trim(),
    },

    {
      heading: 'Important Points About Initializer Block',

      content: `
• Executes before constructor
• Runs on every object creation
• Multiple initializer blocks allowed
• Useful for shared initialization

Common Beginner Mistakes:

• Confusing static block and initializer block
• Expecting initializer block to execute once
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Instance Initializer Block Example',

      language: 'java',

      code: `class Demo {

    {

        System.out.println("Initializer Block Executed");

    }

    Demo() {

        System.out.println("Constructor Executed");

    }

}

public class Main {

    public static void main(String[] args) {

        Demo d = new Demo();

    }

}`,

      output: `Initializer Block Executed
Constructor Executed`,
    },
  ],

  mcqs: [
    {
      question:
        'When does initializer block execute?',

      options: [
        'Before object creation',
        'After constructor',
        'Before constructor',
        'Only once'
      ],

      answer: 2,

      explanation:
        'Initializer block executes before constructor.',
    },

    {
      question:
        'Initializer block runs?', 

      options: [
        'Only once',
        'Every object creation',
        'Only static objects',
        'Only arrays'
      ],

      answer: 1,

      explanation:
        'Initializer block runs during every object creation.',
    },

    {
      question:
        'Which executes first?',

      options: [
        'Constructor',
        'Initializer block',
        'main method',
        'Loop'
      ],

      answer: 1,

      explanation:
        'Initializer block executes before constructor.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is instance initializer block in Java?',

      answer:
        'It is a block of code that executes before constructor during object creation.',
    },

    {
      question:
        'Why are initializer blocks useful?',

      answer:
        'Initializer blocks help reduce duplicate initialization code across constructors.',
    },
  ],

  nextTopic: 'java-final-keyword',
},
{
  id: 'java-final-keyword',

  title: 'Java final Keyword',

  slug: 'java-final-keyword',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '20 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java final keyword deeply with final variables, final methods, final classes, restrictions, and real-world examples.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Accenture'],

  sections: [
    {
      heading: 'Java final Keyword',

      content: `
• final Variable

• final Method

• final Class

• Restrictions in Java

• Real-World Usage

• Important Interview Concepts
`,
    },

    {
      heading: 'Introduction to final Keyword',

      content: `
The final keyword is used to restrict modifications in Java.

final can be applied on:

1. Variables
2. Methods
3. Classes

The main purpose of final keyword is security and fixed behavior.
`.trim(),
    },

    {
      heading: 'final Variable',

      content: `
A final variable value cannot be changed once initialized.

Example:

final int MAX = 100;

Benefits:

• Constant values
• Safer code
• Prevent accidental modification
`.trim(),
    },

    {
      heading: 'final Method',

      content: `
A final method cannot be overridden by child classes.

Used when parent behavior should remain fixed.

Benefits:

• Better security
• Prevents unwanted overriding
`.trim(),
    },

    {
      heading: 'final Class',

      content: `
A final class cannot be inherited.

Example:

final class Demo {

}

Popular Example:

String class is final in Java.
`.trim(),
    },

    {
      heading: 'Important Points About final Keyword',

      content: `
• final variable becomes constant
• final method prevents overriding
• final class prevents inheritance
• Constructors cannot be final

Common Beginner Mistakes:

• Trying to modify final variables
• Trying to inherit final class
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'final Variable Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        final int NUMBER = 100;

        System.out.println(NUMBER);

    }

}`,

      output: '100',
    },

    {
      title: 'final Class Example',

      language: 'java',

      code: `final class Demo {

    void display() {

        System.out.println("Final Class");

    }

}

public class Main {

    public static void main(String[] args) {

        Demo d = new Demo();

        d.display();

    }

}`,

      output: 'Final Class',
    },
  ],

  mcqs: [
    {
      question:
        'What does final keyword mainly do?',

      options: [
        'Creates loops',
        'Restricts modification',
        'Imports packages',
        'Creates objects'
      ],

      answer: 1,

      explanation:
        'final keyword restricts modification and inheritance.',
    },

    {
      question:
        'Can final methods be overridden?',

      options: ['Yes', 'No', 'Sometimes', 'Only static methods'],

      answer: 1,

      explanation:
        'final methods cannot be overridden.',
    },

    {
      question:
        'Which class in Java is final?',

      options: ['Math', 'Scanner', 'String', 'System'],

      answer: 2,

      explanation:
        'String class is final in Java.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'Why is final keyword important in Java?',

      answer:
        'final keyword provides security, fixed behavior, and prevents modification or inheritance.',
    },

    {
      question:
        'Can constructors be final?',

      answer:
        'No, constructors cannot be final because constructors are not inherited.',
    },
  ],

  nextTopic: 'java-polymorphism-concepts',
},

{
  id: 'java-polymorphism-concepts',

  title: 'Polymorphism in Java',

  slug: 'java-polymorphism-concepts',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '28 min read',

  difficulty: 'Intermediate',

  description:
    'Learn polymorphism in Java deeply including compile-time polymorphism, runtime polymorphism, dynamic behavior, and real-world examples.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Cognizant'],

  sections: [
    {
      heading: 'Polymorphism in Java',

      content: `
• Introduction to Polymorphism

• Compile-Time Polymorphism

• Runtime Polymorphism

• Dynamic Method Dispatch

• Real-Life Examples

• Advantages of Polymorphism

• Covariant Return Type

• Upcasting in Java
`,
    },

    {
      heading: 'Introduction to Polymorphism',

      content: `
Polymorphism means one thing having many forms.

In Java, the same method may behave differently in different situations.

Polymorphism improves:

• Flexibility
• Reusability
• Dynamic programming
`.trim(),
    },

    {
      heading: 'Compile-Time Polymorphism',

      content: `
Compile-time polymorphism is achieved using method overloading.

Method calls are resolved during compilation.

Benefits:

• Faster execution
• Better readability
`.trim(),
    },

    {
      heading: 'Runtime Polymorphism',

      content: `
Runtime polymorphism is achieved using method overriding.

JVM decides method execution during runtime.

This creates dynamic behavior in applications.
`.trim(),
    },

    {
      heading: 'Dynamic Method Dispatch',

      content: `
Dynamic method dispatch means method call decision happens during runtime.

Parent reference can hold child object.

Example:

Animal a = new Dog();

a.sound();
`.trim(),
    },

    {
      heading: 'Advantages of Polymorphism',

      content: `
• Flexible programming
• Dynamic behavior
• Better extensibility
• Improved maintainability
• Cleaner object-oriented design
`.trim(),
    },

    {
      heading: 'Covariant Return Type',

      content: `
Java allows child class return type while overriding methods.

This feature is called covariant return type.

It improves flexibility in inheritance.
`.trim(),
    },

    {
      heading: 'Upcasting in Java',

      content: `
Upcasting means storing child object inside parent reference.

Example:

Parent p = new Child();

Upcasting is heavily used in runtime polymorphism.
`.trim(),
    },

    {
      heading: 'Important Points About Polymorphism',

      content: `
• Overloading → compile-time polymorphism
• Overriding → runtime polymorphism
• Upcasting supports runtime behavior
• JVM decides overridden methods during execution

Common Beginner Mistakes:

• Confusing overloading and overriding
• Forgetting inheritance in runtime polymorphism
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Runtime Polymorphism Example',

      language: 'java',

      code: `class Animal {

    void sound() {

        System.out.println("Animal Sound");

    }

}

class Dog extends Animal {

    @Override
    void sound() {

        System.out.println("Dog Barking");

    }

}

public class Main {

    public static void main(String[] args) {

        Animal a = new Dog();

        a.sound();

    }

}`,

      output: 'Dog Barking',
    },
  ],

  mcqs: [
    {
      question:
        'Polymorphism means?', 

      options: [
        'One form only',
        'One thing having many forms',
        'Only inheritance',
        'Only loops'
      ],

      answer: 1,

      explanation:
        'Polymorphism means one thing having many forms.',
    },

    {
      question:
        'Which polymorphism uses method overriding?',

      options: [
        'Compile-time',
        'Runtime',
        'Static',
        'Constructor'
      ],

      answer: 1,

      explanation:
        'Runtime polymorphism uses method overriding.',
    },

    {
      question:
        'What is upcasting?',

      options: [
        'Parent stored in child',
        'Child stored in parent reference',
        'Loop conversion',
        'Static loading'
      ],

      answer: 1,

      explanation:
        'Upcasting means child object stored in parent reference.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What are the types of polymorphism in Java?',

      answer:
        'Java mainly supports compile-time polymorphism and runtime polymorphism.',
    },

    {
      question:
        'Why is polymorphism important?',

      answer:
        'Polymorphism improves flexibility, maintainability, and dynamic behavior in Java applications.',
    },
  ],

  nextTopic: 'java-static-dynamic-binding',
},

{
  id: 'java-static-dynamic-binding',

  title: 'Static and Dynamic Binding in Java',

  slug: 'java-static-dynamic-binding',

  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',

  readTime: '22 min read',

  difficulty: 'Intermediate',

  description:
    'Learn static and dynamic binding in Java deeply with method resolution, runtime behavior, compile-time execution, and practical examples.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'HCL'],

  sections: [
    {
      heading: 'Static and Dynamic Binding in Java',

      content: `
• Introduction to Binding

• Static Binding

• Dynamic Binding

• Compile-Time Resolution

• Runtime Resolution

• Real-World Examples

• Method Dispatch

• JVM Method Decision
`,
    },

    {
      heading: 'Introduction to Binding',

      content: `
Binding means connecting method calls with method definitions.

Java mainly supports:

1. Static Binding
2. Dynamic Binding

Binding helps JVM decide which method should execute.
`.trim(),
    },

    {
      heading: 'Static Binding',

      content: `
Static binding happens during compilation.

Methods resolved using static binding:

• final methods
• private methods
• static methods

Benefits:

• Faster execution
• Better performance
`.trim(),
    },

    {
      heading: 'Dynamic Binding',

      content: `
Dynamic binding happens during runtime.

Mainly used in:

• Method overriding
• Runtime polymorphism

JVM decides method execution dynamically.
`.trim(),
    },

    {
      heading: 'Difference Between Static and Dynamic Binding',

      content: `
Static Binding:

• Happens during compilation
• Faster
• Fixed method calls

Dynamic Binding:

• Happens during runtime
• Flexible behavior
• Dynamic method calls
`.trim(),
    },

    {
      heading: 'Important Points About Binding',

      content: `
• Overloading mainly uses static binding
• Overriding mainly uses dynamic binding
• JVM resolves overridden methods during runtime
• Dynamic binding supports flexibility

Common Beginner Mistakes:

• Confusing static and dynamic resolution
• Mixing overloading with overriding
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Dynamic Binding Example',

      language: 'java',

      code: `class Parent {

    void show() {

        System.out.println("Parent Method");

    }

}

class Child extends Parent {

    @Override
    void show() {

        System.out.println("Child Method");

    }

}

public class Main {

    public static void main(String[] args) {

        Parent p = new Child();

        p.show();

    }

}`,

      output: 'Child Method',
    },
  ],

  mcqs: [
    {
      question:
        'Dynamic binding happens during?', 

      options: [
        'Compilation',
        'Runtime',
        'Loop execution',
        'Importing'
      ],

      answer: 1,

      explanation:
        'Dynamic binding happens during runtime.',
    },

    {
      question:
        'Which methods mainly use static binding?',

      options: [
        'Overridden methods',
        'Static methods',
        'Abstract methods',
        'Child methods'
      ],

      answer: 1,

      explanation:
        'Static methods mainly use static binding.',
    },

    {
      question:
        'Method overriding mainly uses?', 

      options: [
        'Static binding',
        'Dynamic binding',
        'Constructor binding',
        'Package binding'
      ],

      answer: 1,

      explanation:
        'Method overriding mainly uses dynamic binding.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is binding in Java?',

      answer:
        'Binding means connecting method calls with actual method definitions.',
    },

    {
      question:
        'Why is dynamic binding important?',

      answer:
        'Dynamic binding enables runtime polymorphism and flexible method behavior.',
    },
  ],

  nextTopic: 'java-instanceof-operator',
},

{
  id: 'java-instanceof-operator',

  title: 'Java instanceof Operator',

  slug: 'java-instanceof-operator',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '18 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java instanceof operator deeply with object checking, inheritance verification, runtime type checking, and practical examples.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'],

  sections: [
    {
      heading: 'Java instanceof Operator',

      content: `
• Introduction to instanceof

• Runtime Type Checking

• Inheritance Verification

• Object Validation

• Boolean Result

• Real-World Usage
`,
    },

    {
      heading: 'Introduction to instanceof Operator',

      content: `
The instanceof operator checks whether an object belongs to a specific class or not.

It returns:

• true
• false

instanceof is heavily used in inheritance and polymorphism.
`.trim(),
    },

    {
      heading: 'Runtime Type Checking',

      content: `
instanceof performs runtime checking.

Example:

obj instanceof ClassName

If object belongs to class:

• true returned

Otherwise:

• false returned
`.trim(),
    },

    {
      heading: 'Using instanceof with Inheritance',

      content: `
instanceof works with parent-child relationships.

Example:

Animal a = new Dog();

a instanceof Dog

Result:

true
`.trim(),
    },

    {
      heading: 'Advantages of instanceof Operator',

      content: `
• Safe type checking
• Prevents invalid casting
• Helps runtime verification
• Useful in polymorphism
`.trim(),
    },

    {
      heading: 'Important Points About instanceof',

      content: `
• Returns boolean value
• Works during runtime
• Useful with inheritance
• Helps avoid ClassCastException

Common Beginner Mistakes:

• Using instanceof with unrelated classes
• Confusing object type and reference type
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'instanceof Operator Example',

      language: 'java',

      code: `class Animal {

}

class Dog extends Animal {

}

public class Main {

    public static void main(String[] args) {

        Animal a = new Dog();

        System.out.println(a instanceof Dog);

    }

}`,

      output: 'true',
    },
  ],

  mcqs: [
    {
      question:
        'What does instanceof operator return?',

      options: [
        'String',
        'Integer',
        'Boolean',
        'Object'
      ],

      answer: 2,

      explanation:
        'instanceof operator returns boolean value.',
    },

    {
      question:
        'instanceof mainly works during?', 

      options: [
        'Compilation',
        'Runtime',
        'Import',
        'Loop execution'
      ],

      answer: 1,

      explanation:
        'instanceof performs runtime checking.',
    },

    {
      question:
        'Why is instanceof useful?',

      options: [
        'For looping',
        'Safe type checking',
        'For imports',
        'For comments'
      ],

      answer: 1,

      explanation:
        'instanceof helps safe runtime type checking.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is instanceof operator in Java?',

      answer:
        'instanceof operator checks whether an object belongs to a specific class or interface.',
    },

    {
      question:
        'Why is instanceof important?',

      answer:
        'instanceof helps safe runtime checking and prevents invalid type casting.',
    },
  ],

  nextTopic: 'java-abstract-class',
},
{
  id: 'java-abstract-class',

  title: 'Abstract Class in Java',

  slug: 'java-abstract-class',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '26 min read',

  difficulty: 'Intermediate',

  description:
    'Learn abstract class in Java deeply with abstraction concepts, abstract methods, inheritance, real-world usage, and practical examples.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Accenture'],

  sections: [
    {
      heading: 'Abstract Class in Java',

      content: `
• Introduction to Abstract Class

• Abstract Methods

• Concrete Methods

• Achieving Abstraction

• Real-World Examples

• Constructor in Abstract Class

• Rules of Abstract Class

• Advantages of Abstract Classes
`,
    },

    {
      heading: 'Introduction to Abstract Class',

      content: `
An abstract class is a class that cannot be instantiated directly.

It is declared using abstract keyword.

Abstract classes are mainly used to achieve abstraction in Java.

Syntax:

abstract class ClassName {

}
`.trim(),
    },

    {
      heading: 'Abstract Methods',

      content: `
An abstract method does not contain method body.

Child classes must provide implementation.

Syntax:

abstract void display();

Important:

• Abstract methods must be inside abstract class.
`.trim(),
    },

    {
      heading: 'Concrete Methods in Abstract Class',

      content: `
Abstract classes can also contain normal methods.

These methods already have implementation.

This helps:

• Code reuse
• Common functionality
• Better design
`.trim(),
    },

    {
      heading: 'Constructor in Abstract Class',

      content: `
Abstract classes can have constructors.

Constructors execute during child object creation.

Purpose:

• Initialize common data
• Shared setup logic
`.trim(),
    },

    {
      heading: 'Advantages of Abstract Class',

      content: `
• Partial abstraction
• Better code reuse
• Common parent structure
• Improved maintainability
• Cleaner object-oriented design
`.trim(),
    },

    {
      heading: 'Rules of Abstract Class',

      content: `
• Abstract class cannot create objects
• Abstract methods must be overridden
• Abstract class may contain constructors
• Abstract class may contain static methods

Common Beginner Mistakes:

• Trying to create object of abstract class
• Forgetting method overriding
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Abstract Class Example',

      language: 'java',

      code: `abstract class Animal {

    abstract void sound();

    void sleep() {

        System.out.println("Animal Sleeping");

    }

}

class Dog extends Animal {

    @Override
    void sound() {

        System.out.println("Dog Barking");

    }

}

public class Main {

    public static void main(String[] args) {

        Dog d = new Dog();

        d.sound();

        d.sleep();

    }

}`,

      output: `Dog Barking
Animal Sleeping`,
    },
  ],

  mcqs: [
    {
      question:
        'Can abstract class create objects?',

      options: ['Yes', 'No', 'Sometimes', 'Only static objects'],

      answer: 1,

      explanation:
        'Abstract classes cannot create objects directly.',
    },

    {
      question:
        'Which keyword is used for abstract class?',

      options: ['class', 'static', 'abstract', 'extends'],

      answer: 2,

      explanation:
        'abstract keyword creates abstract class.',
    },

    {
      question:
        'Can abstract class contain normal methods?',

      options: ['Yes', 'No', 'Only private methods', 'Only static methods'],

      answer: 0,

      explanation:
        'Abstract classes can contain normal methods.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is abstract class in Java?',

      answer:
        'Abstract class is a special class that cannot be instantiated and is mainly used for abstraction.',
    },

    {
      question:
        'Why are abstract classes useful?',

      answer:
        'Abstract classes provide common structure, partial abstraction, and reusable functionality.',
    },
  ],

  nextTopic: 'java-interface',
},

{
  id: 'java-interface',

  title: 'Interface in Java',

  slug: 'java-interface',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '28 min read',

  difficulty: 'Intermediate',

  description:
    'Learn interface in Java deeply with abstraction, multiple inheritance, implementation rules, default methods, and practical examples.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Cognizant'],

  sections: [
    {
      heading: 'Interface in Java',

      content: `
• Introduction to Interface

• Achieving Full Abstraction

• Multiple Inheritance

• Interface Methods

• Default Methods

• Static Methods in Interface

• Marker Interfaces

• Functional Interfaces
`,
    },

    {
      heading: 'Introduction to Interface',

      content: `
An interface is a blueprint of a class.

It is used to achieve full abstraction in Java.

Interfaces contain abstract methods by default.

Keyword Used:

interface
`.trim(),
    },

    {
      heading: 'Implementing Interface',

      content: `
Classes use implements keyword to inherit interface methods.

Example:

class Demo implements Test {

}

Child class must provide implementation of interface methods.
`.trim(),
    },

    {
      heading: 'Multiple Inheritance Using Interface',

      content: `
Java does not support multiple inheritance using classes.

But Java supports multiple inheritance using interfaces.

One class can implement multiple interfaces.
`.trim(),
    },

    {
      heading: 'Default Methods in Interface',

      content: `
Java allows default methods inside interfaces.

Purpose:

• Backward compatibility
• Method implementation inside interface

Syntax:

default void show() {

}
`.trim(),
    },

    {
      heading: 'Functional Interface',

      content: `
Functional interface contains only one abstract method.

Used heavily in:

• Lambda expressions
• Stream API

Example:

Runnable interface
`.trim(),
    },

    {
      heading: 'Marker Interface',

      content: `
Marker interface contains no methods.

Purpose:

• Provide special information to JVM

Examples:

• Serializable
• Cloneable
`.trim(),
    },

    {
      heading: 'Important Points About Interface',

      content: `
• Interfaces support abstraction
• Multiple inheritance possible
• Variables are public static final by default
• Methods are public abstract by default

Common Beginner Mistakes:

• Forgetting method implementation
• Confusing extends and implements
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Interface Example',

      language: 'java',

      code: `interface Animal {

    void sound();

}

class Dog implements Animal {

    @Override
    public void sound() {

        System.out.println("Dog Barking");

    }

}

public class Main {

    public static void main(String[] args) {

        Dog d = new Dog();

        d.sound();

    }

}`,

      output: 'Dog Barking',
    },

    {
      title: 'Multiple Interface Example',

      language: 'java',

      code: `interface A {

    void show();

}

interface B {

    void display();

}

class Demo implements A, B {

    public void show() {

        System.out.println("Show Method");

    }

    public void display() {

        System.out.println("Display Method");

    }

}

public class Main {

    public static void main(String[] args) {

        Demo d = new Demo();

        d.show();

        d.display();

    }

}`,

      output: `Show Method
Display Method`,
    },
  ],

  mcqs: [
    {
      question:
        'Which keyword is used for interface?',

      options: ['class', 'abstract', 'interface', 'extends'],

      answer: 2,

      explanation:
        'interface keyword creates interface.',
    },

    {
      question:
        'Which keyword is used to inherit interface?',

      options: ['extends', 'implements', 'super', 'this'],

      answer: 1,

      explanation:
        'implements keyword is used for interfaces.',
    },

    {
      question:
        'Can Java support multiple inheritance using interfaces?',

      options: ['Yes', 'No', 'Only abstract classes', 'Only constructors'],

      answer: 0,

      explanation:
        'Java supports multiple inheritance using interfaces.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is interface in Java?',

      answer:
        'Interface is a blueprint of class used for abstraction and multiple inheritance.',
    },

    {
      question:
        'Why are interfaces important in Java?',

      answer:
        'Interfaces improve abstraction, flexibility, loose coupling, and support multiple inheritance.',
    },
  ],

  nextTopic: 'java-abstraction-topics',
},

{
  id: 'java-abstraction-topics',

  title: 'Important Topics of Java Abstraction',

  slug: 'java-abstraction-topics',

  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',

  readTime: '24 min read',

  difficulty: 'Intermediate',

  description:
    'Learn important Java abstraction topics deeply including abstraction concepts, loose coupling, data hiding, and abstraction best practices.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'HCL'],

  sections: [
    {
      heading: 'Important Topics of Java Abstraction',

      content: `
• What is Abstraction

• Data Hiding

• Partial Abstraction

• Full Abstraction

• Loose Coupling

• Abstraction vs Encapsulation

• Real-Life Examples

• Advantages of Abstraction
`,
    },

    {
      heading: 'What is Abstraction',

      content: `
Abstraction means hiding implementation details and showing only essential features.

Main Goal:

• Reduce complexity
• Improve security
• Focus on important behavior

Example:

Driving a car without knowing engine internals.
`.trim(),
    },

    {
      heading: 'Partial and Full Abstraction',

      content: `
Partial Abstraction:

• Achieved using abstract class

Full Abstraction:

• Achieved using interface

This improves flexibility and modularity.
`.trim(),
    },

    {
      heading: 'Loose Coupling',

      content: `
Loose coupling means reducing dependency between classes.

Benefits:

• Easier maintenance
• Better scalability
• Flexible applications

Interfaces heavily support loose coupling.
`.trim(),
    },

    {
      heading: 'Abstraction vs Encapsulation',

      content: `
Abstraction:

• Hides implementation details

Encapsulation:

• Hides data using access modifiers

Both improve security and maintainability.
`.trim(),
    },

    {
      heading: 'Advantages of Abstraction',

      content: `
• Better security
• Reduced complexity
• Cleaner code
• Easier maintenance
• Improved flexibility
`.trim(),
    },

    {
      heading: 'Important Points About Abstraction',

      content: `
• Abstract classes provide partial abstraction
• Interfaces provide full abstraction
• Abstraction improves modular design
• Real-world systems heavily use abstraction

Common Beginner Mistakes:

• Confusing abstraction and encapsulation
• Using abstraction unnecessarily
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Abstraction Example',

      language: 'java',

      code: `abstract class Shape {

    abstract void draw();

}

class Circle extends Shape {

    @Override
    void draw() {

        System.out.println("Drawing Circle");

    }

}

public class Main {

    public static void main(String[] args) {

        Shape s = new Circle();

        s.draw();

    }

}`,

      output: 'Drawing Circle',
    },
  ],

  mcqs: [
    {
      question:
        'What is abstraction mainly used for?',

      options: [
        'Looping',
        'Hiding implementation details',
        'Creating arrays',
        'Importing packages'
      ],

      answer: 1,

      explanation:
        'Abstraction hides implementation details.',
    },

    {
      question:
        'Which provides full abstraction?',

      options: [
        'Constructor',
        'Interface',
        'Loop',
        'Array'
      ],

      answer: 1,

      explanation:
        'Interfaces provide full abstraction.',
    },

    {
      question:
        'Loose coupling improves?', 

      options: [
        'Complexity',
        'Maintainability',
        'Compilation errors',
        'Memory usage'
      ],

      answer: 1,

      explanation:
        'Loose coupling improves maintainability and flexibility.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is abstraction in Java?',

      answer:
        'Abstraction hides implementation details and exposes only essential features.',
    },

    {
      question:
        'What is difference between abstraction and encapsulation?',

      answer:
        'Abstraction hides implementation details while encapsulation hides data using access modifiers.',
    },
  ],

  nextTopic: 'java-package',
},
{
  id: 'java-package',

  title: 'Package in Java',

  slug: 'java-package',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '22 min read',

  difficulty: 'Beginner',

  description:
    'Learn Java packages deeply with package creation, importing, built-in packages, user-defined packages, and package advantages.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Accenture'],

  sections: [
    {
      heading: 'Package in Java',

      content: `
• Introduction to Package

• Built-in Packages

• User-Defined Packages

• Import Keyword

• Package Naming Rules

• Advantages of Packages

• Static Import

• Package Compilation
`,
    },

    {
      heading: 'Introduction to Package',

      content: `
A package in Java is used to group related classes, interfaces, and sub-packages together.

Packages help organize Java programs properly.

Main Purposes:

• Avoid naming conflicts
• Better code management
• Improved security
`.trim(),
    },

    {
      heading: 'Built-in Packages',

      content: `
Java provides many predefined packages.

Examples:

• java.lang
• java.util
• java.io
• java.sql

These packages contain useful predefined classes.
`.trim(),
    },

    {
      heading: 'User-Defined Packages',

      content: `
Programmers can also create custom packages.

Syntax:

package mypackage;

Package statement should be first line of Java file.
`.trim(),
    },

    {
      heading: 'Import Keyword',

      content: `
import keyword allows access to package classes.

Example:

import java.util.Scanner;

Benefits:

• Easy class usage
• Cleaner code
• Better readability
`.trim(),
    },

    {
      heading: 'Static Import',

      content: `
Static import allows direct access to static members.

Example:

import static java.lang.Math.*;

This avoids writing class name repeatedly.
`.trim(),
    },

    {
      heading: 'Advantages of Packages',

      content: `
• Better organization
• Naming conflict prevention
• Improved maintainability
• Better security
• Easier project management
`.trim(),
    },

    {
      heading: 'Important Points About Packages',

      content: `
• Package statement comes first
• import keyword accesses package classes
• Java uses folder structure for packages
• Packages improve modularity

Common Beginner Mistakes:

• Wrong package declaration
• Incorrect folder structure
• Forgetting import statements
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Package Example',

      language: 'java',

      code: `package mypackage;

public class Demo {

    public void show() {

        System.out.println("Custom Package");

    }

}`,

      output: 'Custom Package',
    },

    {
      title: 'Import Package Example',

      language: 'java',

      code: `import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Scanner Imported");

    }

}`,

      output: 'Scanner Imported',
    },
  ],

  mcqs: [
    {
      question:
        'Why are packages used in Java?',

      options: [
        'For loops',
        'To organize classes',
        'To create arrays',
        'To stop compilation'
      ],

      answer: 1,

      explanation:
        'Packages help organize related classes and interfaces.',
    },

    {
      question:
        'Which keyword imports package classes?',

      options: ['package', 'class', 'import', 'extends'],

      answer: 2,

      explanation:
        'import keyword accesses package classes.',
    },

    {
      question:
        'Which package is automatically imported in Java?',

      options: [
        'java.util',
        'java.sql',
        'java.lang',
        'java.io'
      ],

      answer: 2,

      explanation:
        'java.lang package is automatically imported.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is package in Java?',

      answer:
        'A package is a collection of related classes and interfaces used for better organization.',
    },

    {
      question:
        'Why are packages important in Java?',

      answer:
        'Packages improve organization, security, modularity, and prevent naming conflicts.',
    },
  ],

  nextTopic: 'java-access-modifiers',
},

{
  id: 'java-access-modifiers',

  title: 'Access Modifiers in Java',

  slug: 'java-access-modifiers',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '24 min read',

  difficulty: 'Intermediate',

  description:
    'Learn access modifiers in Java deeply with public, private, protected, default access, visibility control, and security concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Cognizant'],

  sections: [
    {
      heading: 'Access Modifiers in Java',

      content: `
• Introduction to Access Modifiers

• public Modifier

• private Modifier

• protected Modifier

• Default Access Modifier

• Visibility Rules

• Access Control

• Security Benefits
`,
    },

    {
      heading: 'Introduction to Access Modifiers',

      content: `
Access modifiers control visibility and accessibility of classes, variables, methods, and constructors.

Java provides four access modifiers:

1. public
2. private
3. protected
4. default
`.trim(),
    },

    {
      heading: 'public Access Modifier',

      content: `
public members are accessible from anywhere.

Features:

• Accessible inside class
• Accessible outside package
• No restriction

Mostly used for public APIs.
`.trim(),
    },

    {
      heading: 'private Access Modifier',

      content: `
private members are accessible only inside same class.

Benefits:

• Better security
• Data hiding
• Encapsulation support

Most secure access modifier.
`.trim(),
    },

    {
      heading: 'protected Access Modifier',

      content: `
protected members are accessible:

• Inside package
• Outside package through inheritance

Used heavily in inheritance.
`.trim(),
    },

    {
      heading: 'Default Access Modifier',

      content: `
If no modifier is specified, default access is used.

Default members are accessible only inside same package.
`.trim(),
    },

    {
      heading: 'Advantages of Access Modifiers',

      content: `
• Better security
• Controlled access
• Improved encapsulation
• Safer object-oriented design
`.trim(),
    },

    {
      heading: 'Important Points About Access Modifiers',

      content: `
• private is most restrictive
• public is least restrictive
• protected supports inheritance
• default works inside same package

Common Beginner Mistakes:

• Using private incorrectly
• Confusing protected and default
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'private Access Modifier Example',

      language: 'java',

      code: `class Student {

    private int marks = 90;

    void display() {

        System.out.println(marks);

    }

}

public class Main {

    public static void main(String[] args) {

        Student s = new Student();

        s.display();

    }

}`,

      output: '90',
    },
  ],

  mcqs: [
    {
      question:
        'Which access modifier is most secure?',

      options: ['public', 'protected', 'default', 'private'],

      answer: 3,

      explanation:
        'private is the most restrictive access modifier.',
    },

    {
      question:
        'Which modifier allows access everywhere?',

      options: ['private', 'public', 'default', 'protected'],

      answer: 1,

      explanation:
        'public members are accessible everywhere.',
    },

    {
      question:
        'protected modifier mainly supports?', 

      options: [
        'Loops',
        'Inheritance',
        'Arrays',
        'Packages only'
      ],

      answer: 1,

      explanation:
        'protected is heavily used in inheritance.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What are access modifiers in Java?',

      answer:
        'Access modifiers control accessibility and visibility of class members.',
    },

    {
      question:
        'Why are access modifiers important?',

      answer:
        'Access modifiers improve security, encapsulation, and controlled access.',
    },
  ],

  nextTopic: 'java-encapsulation',
},

{
  id: 'java-encapsulation',

  title: 'Encapsulation in Java',

  slug: 'java-encapsulation',

  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',

  readTime: '26 min read',

  difficulty: 'Intermediate',

  description:
    'Learn encapsulation in Java deeply with data hiding, getters and setters, security, and object-oriented programming concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'HCL'],

  sections: [
    {
      heading: 'Encapsulation in Java',

      content: `
• Introduction to Encapsulation

• Data Hiding

• Getter and Setter Methods

• Security Benefits

• Real-World Examples

• Immutable Classes

• Bean Class in Java

• Advantages of Encapsulation
`,
    },

    {
      heading: 'Introduction to Encapsulation',

      content: `
Encapsulation means binding data and methods together into a single unit.

It is one of the core OOPs concepts.

Encapsulation mainly focuses on:

• Data protection
• Controlled access
• Better security
`.trim(),
    },

    {
      heading: 'Data Hiding in Java',

      content: `
Encapsulation hides sensitive data using private variables.

Direct access to variables is restricted.

This improves:

• Security
• Data integrity
• Controlled modifications
`.trim(),
    },

    {
      heading: 'Getter and Setter Methods',

      content: `
Getter methods read data.

Setter methods modify data.

Example:

getName()

setName()

These methods provide controlled access to private variables.
`.trim(),
    },

    {
      heading: 'Immutable Classes',

      content: `
Immutable objects cannot change after creation.

Benefits:

• Better security
• Thread safety
• Safer programming

String class is immutable in Java.
`.trim(),
    },

    {
      heading: 'Bean Class in Java',

      content: `
Java Bean class follows encapsulation principles.

Rules:

• Private variables
• Public getter/setter methods
• Public default constructor

Beans are widely used in frameworks.
`.trim(),
    },

    {
      heading: 'Advantages of Encapsulation',

      content: `
• Better security
• Controlled access
• Improved maintainability
• Flexible code modification
• Cleaner object-oriented design
`.trim(),
    },

    {
      heading: 'Important Points About Encapsulation',

      content: `
• Uses private variables
• Access provided through methods
• Supports data hiding
• Improves modularity

Common Beginner Mistakes:

• Public variables everywhere
• Missing getter/setter methods
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Encapsulation Example',

      language: 'java',

      code: `class Student {

    private int marks;

    public void setMarks(int marks) {

        this.marks = marks;

    }

    public int getMarks() {

        return marks;

    }

}

public class Main {

    public static void main(String[] args) {

        Student s = new Student();

        s.setMarks(95);

        System.out.println(s.getMarks());

    }

}`,

      output: '95',
    },
  ],

  mcqs: [
    {
      question:
        'What does encapsulation mainly provide?',

      options: [
        'Loop execution',
        'Data hiding',
        'Array sorting',
        'Package importing'
      ],

      answer: 1,

      explanation:
        'Encapsulation mainly provides data hiding.',
    },

    {
      question:
        'Which methods are used in encapsulation?',

      options: [
        'main methods',
        'Loop methods',
        'Getter and Setter methods',
        'Static blocks'
      ],

      answer: 2,

      explanation:
        'Getter and setter methods provide controlled access.',
    },

    {
      question:
        'Which keyword is mostly used in encapsulation?',

      options: ['public', 'private', 'extends', 'super'],

      answer: 1,

      explanation:
        'private keyword helps data hiding in encapsulation.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is encapsulation in Java?',

      answer:
        'Encapsulation is the process of binding data and methods together while hiding internal data.',
    },

    {
      question:
        'Why is encapsulation important?',

      answer:
        'Encapsulation improves security, controlled access, and maintainability.',
    },
  ],

  nextTopic: 'java-wrapper-class',
},

{
  id: 'java-wrapper-class',

  title: 'Wrapper Class in Java',

  slug: 'java-wrapper-class',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '22 min read',

  difficulty: 'Intermediate',

  description:
    'Learn wrapper classes in Java deeply with autoboxing, unboxing, primitive conversion, utility methods, and important interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'],

  sections: [
    {
      heading: 'Wrapper Class in Java',

      content: `
• Introduction to Wrapper Classes

• Primitive to Object Conversion

• Autoboxing

• Unboxing

• Utility Methods

• Immutable Nature

• Primitive Parsing

• Collection Framework Usage
`,
    },

    {
      heading: 'Introduction to Wrapper Classes',

      content: `
Wrapper classes convert primitive data types into objects.

Every primitive type has corresponding wrapper class.

Examples:

• int → Integer
• char → Character
• double → Double
`.trim(),
    },

    {
      heading: 'Autoboxing in Java',

      content: `
Autoboxing automatically converts primitive values into objects.

Example:

Integer num = 10;

Java automatically performs conversion.
`.trim(),
    },

    {
      heading: 'Unboxing in Java',

      content: `
Unboxing converts wrapper objects back into primitive values.

Example:

Integer num = 50;

int value = num;
`.trim(),
    },

    {
      heading: 'Why Wrapper Classes are Important',

      content: `
Wrapper classes are required because:

• Collections store objects only
• Utility methods become available
• Easier data conversion

Heavily used in modern Java development.
`.trim(),
    },

    {
      heading: 'Immutable Nature of Wrapper Classes',

      content: `
Wrapper objects are immutable.

Once created:

• Values cannot change

This improves safety and consistency.
`.trim(),
    },

    {
      heading: 'Important Points About Wrapper Classes',

      content: `
• Wrapper classes convert primitives into objects
• Autoboxing is automatic conversion
• Unboxing converts objects into primitives
• Collections heavily use wrapper classes

Common Beginner Mistakes:

• Confusing primitive and wrapper types
• Forgetting null handling in wrappers
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Autoboxing and Unboxing Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        Integer number = 100;

        int value = number;

        System.out.println(value);

    }

}`,

      output: '100',
    },
  ],

  mcqs: [
    {
      question:
        'Which wrapper class belongs to int?',

      options: ['Double', 'Character', 'Integer', 'Float'],

      answer: 2,

      explanation:
        'Integer is wrapper class of int.',
    },

    {
      question:
        'What is autoboxing?',

      options: [
        'Object to primitive conversion',
        'Automatic primitive to object conversion',
        'Loop conversion',
        'Package loading'
      ],

      answer: 1,

      explanation:
        'Autoboxing converts primitives into objects automatically.',
    },

    {
      question:
        'Wrapper classes are?', 

      options: [
        'Mutable',
        'Immutable',
        'Abstract',
        'Static'
      ],

      answer: 1,

      explanation:
        'Wrapper classes are immutable.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'Why are wrapper classes important in Java?',

      answer:
        'Wrapper classes allow primitives to work as objects and support collections and utility methods.',
    },

    {
      question:
        'What is difference between autoboxing and unboxing?',

      answer:
        'Autoboxing converts primitive to object while unboxing converts object to primitive.',
    },
  ],

  nextTopic: 'java-array',
},
{
  id: 'java-array',

  title: 'Java Array',

  slug: 'java-array',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '30 min read',

  difficulty: 'Beginner',

  description:
    'Learn Java arrays deeply including array declaration, initialization, traversal, memory representation, and important interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Accenture'],

  sections: [
    {
      heading: 'Java Array',

      content: `
• Introduction to Arrays

• Array Declaration

• Array Initialization

• Traversing Arrays

• Array Memory Representation

• Advantages of Arrays

• Limitations of Arrays

• Anonymous Arrays

• Command Line Arguments

• Copying Arrays
`,
    },

    {
      heading: 'Introduction to Arrays',

      content: `
An array is a collection of similar data types stored in contiguous memory locations.

Arrays help store multiple values using single variable name.

Example:

• Multiple student marks
• Product prices
• Employee salaries
`.trim(),
    },

    {
      heading: 'Array Declaration',

      content: `
Syntax:

datatype[] arrayName;

Example:

int[] numbers;

Arrays must specify data type.
`.trim(),
    },

    {
      heading: 'Array Initialization',

      content: `
Arrays can be initialized during declaration.

Example:

int[] numbers = {10, 20, 30};

Java automatically assigns indexes starting from 0.
`.trim(),
    },

    {
      heading: 'Traversing Arrays',

      content: `
Array traversal means accessing elements one by one.

Commonly used loops:

• for loop
• for-each loop
• while loop

Traversal helps process all array elements.
`.trim(),
    },

    {
      heading: 'Anonymous Arrays',

      content: `
Anonymous arrays are arrays without reference variables.

Example:

new int[]{1, 2, 3};

Mostly used during method calls.
`.trim(),
    },

    {
      heading: 'Command Line Arguments',

      content: `
Java command line arguments internally work as String arrays.

Syntax:

String[] args

Arguments are passed during program execution.
`.trim(),
    },

    {
      heading: 'Advantages and Limitations of Arrays',

      content: `
Advantages:

• Fast access
• Easy traversal
• Organized storage

Limitations:

• Fixed size
• Same data type only
• Memory wastage possible
`.trim(),
    },

    {
      heading: 'Important Points About Arrays',

      content: `
• Array index starts from 0
• Arrays store same data type
• Arrays have fixed size
• length property gives array size

Common Beginner Mistakes:

• Accessing invalid index
• Forgetting array initialization
• Confusing length and length()
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Java Array Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40};

        for(int i = 0; i < numbers.length; i++) {

            System.out.println(numbers[i]);

        }

    }

}`,

      output: `10
20
30
40`,
    },
  ],

  mcqs: [
    {
      question:
        'What does an array store?',

      options: [
        'Different data types only',
        'Similar data types',
        'Methods only',
        'Packages only'
      ],

      answer: 1,

      explanation:
        'Arrays store similar data types together.',
    },

    {
      question:
        'Array index starts from?', 

      options: ['0', '1', '-1', '10'],

      answer: 0,

      explanation:
        'Java array indexing starts from 0.',
    },

    {
      question:
        'Which property gives array size?',

      options: ['size()', 'length()', 'length', 'count'],

      answer: 2,

      explanation:
        'length property gives array size.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is array in Java?',

      answer:
        'Array is a collection of similar data types stored using single variable name.',
    },

    {
      question:
        'What are advantages of arrays?',

      answer:
        'Arrays provide fast access, easy traversal, and organized storage.',
    },
  ],

  nextTopic: 'java-jagged-array',
},

{
  id: 'java-jagged-array',

  title: 'Java Jagged Array',

  slug: 'java-jagged-array',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '22 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java jagged arrays deeply with irregular rows, dynamic row sizes, memory behavior, and practical examples.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Cognizant'],

  sections: [
    {
      heading: 'Java Jagged Array',

      content: `
• Introduction to Jagged Arrays

• Irregular Row Sizes

• Dynamic Row Allocation

• Memory Representation

• Advantages of Jagged Arrays

• Real-World Examples

• Traversing Jagged Arrays

• Important Rules
`,
    },

    {
      heading: 'Introduction to Jagged Arrays',

      content: `
A jagged array is an array of arrays where each row may contain different number of columns.

Unlike normal 2D arrays:

• Rows can have different sizes

Jagged arrays improve memory flexibility.
`.trim(),
    },

    {
      heading: 'Dynamic Row Allocation',

      content: `
Each row in jagged array is created separately.

Example:

arr[0] = new int[2];

arr[1] = new int[5];

This allows variable row sizes.
`.trim(),
    },

    {
      heading: 'Advantages of Jagged Arrays',

      content: `
• Better memory optimization
• Flexible row sizes
• Useful for irregular data

Common Uses:

• Matrix-like structures
• Student subject data
• Game boards
`.trim(),
    },

    {
      heading: 'Traversing Jagged Arrays',

      content: `
Nested loops are commonly used.

Each row length may differ.

Therefore:

• Row-wise traversal required
`.trim(),
    },

    {
      heading: 'Important Points About Jagged Arrays',

      content: `
• Jagged arrays are arrays of arrays
• Each row may contain different size
• Rows are created separately
• Improves flexibility

Common Beginner Mistakes:

• Assuming equal row sizes
• Invalid index access
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Jagged Array Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        int[][] arr = new int[3][];

        arr[0] = new int[]{1, 2};

        arr[1] = new int[]{3, 4, 5};

        arr[2] = new int[]{6};

        for(int i = 0; i < arr.length; i++) {

            for(int j = 0; j < arr[i].length; j++) {

                System.out.print(arr[i][j] + " ");

            }

            System.out.println();

        }

    }

}`,

      output: `1 2
3 4 5
6`,
    },
  ],

  mcqs: [
    {
      question:
        'What is jagged array?',

      options: [
        'Fixed row array',
        'Array with same columns',
        'Array with different row sizes',
        'Single dimensional array'
      ],

      answer: 2,

      explanation:
        'Jagged arrays contain rows with different sizes.',
    },

    {
      question:
        'Jagged array is also called?', 

      options: [
        'Uniform array',
        'Array of arrays',
        'Static array',
        'Loop array'
      ],

      answer: 1,

      explanation:
        'Jagged array is also called array of arrays.',
    },

    {
      question:
        'Jagged arrays mainly improve?', 

      options: [
        'Compilation',
        'Memory flexibility',
        'Loop execution',
        'Packages'
      ],

      answer: 1,

      explanation:
        'Jagged arrays improve memory flexibility.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is jagged array in Java?',

      answer:
        'Jagged array is an array of arrays where each row can have different size.',
    },

    {
      question:
        'Why are jagged arrays useful?',

      answer:
        'Jagged arrays provide flexible memory allocation and support irregular data storage.',
    },
  ],

  nextTopic: 'java-array-programs',
},

{
  id: 'java-array-programs',

  title: 'Java Array Programs',

  slug: 'java-array-programs',

  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',

  readTime: '34 min read',

  difficulty: 'Intermediate',

  description:
    'Learn important Java array programs deeply including searching, sorting, reversing, maximum element, and interview-based array logic.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'HCL'],

  sections: [
    {
      heading: 'Java Array Programs',

      content: `
• Find Maximum Element

• Find Minimum Element

• Reverse Array

• Array Sum Program

• Average Calculation

• Linear Search

• Binary Search

• Sorting Arrays

• Duplicate Elements

• Frequency Counting
`,
    },

    {
      heading: 'Maximum and Minimum Element Programs',

      content: `
These programs find largest and smallest values inside arrays.

Main Logic:

• Compare elements one by one
• Update max/min values

Frequently asked in interviews.
`.trim(),
    },

    {
      heading: 'Reverse Array Program',

      content: `
Reverse array means printing elements in opposite order.

Approaches:

• Using loops
• Using swapping
• Using extra array
`.trim(),
    },

    {
      heading: 'Searching in Arrays',

      content: `
Searching means finding required element.

Types:

1. Linear Search
2. Binary Search

Binary search requires sorted array.
`.trim(),
    },

    {
      heading: 'Sorting Arrays',

      content: `
Sorting arranges elements in order.

Types:

• Ascending order
• Descending order

Popular sorting techniques:

• Bubble sort
• Selection sort
• Insertion sort
`.trim(),
    },

    {
      heading: 'Duplicate and Frequency Programs',

      content: `
These programs help:

• Detect duplicate elements
• Count frequency of values

Very common in coding rounds.
`.trim(),
    },

    {
      heading: 'Important Points About Array Programs',

      content: `
• Loop logic is very important
• Sorting improves searching performance
• Binary search requires sorted arrays
• Arrays are heavily asked in interviews

Common Beginner Mistakes:

• Wrong loop boundaries
• Invalid swapping logic
• Forgetting sorted condition
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Maximum Element Program',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        int[] arr = {10, 50, 20, 90, 30};

        int max = arr[0];

        for(int i = 1; i < arr.length; i++) {

            if(arr[i] > max) {

                max = arr[i];

            }

        }

        System.out.println(max);

    }

}`,

      output: '90',
    },

    {
      title: 'Reverse Array Program',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        int[] arr = {1, 2, 3, 4, 5};

        for(int i = arr.length - 1; i >= 0; i--) {

            System.out.print(arr[i] + " ");

        }

    }

}`,

      output: '5 4 3 2 1',
    },
  ],

  mcqs: [
    {
      question:
        'Which search requires sorted array?',

      options: [
        'Linear search',
        'Binary search',
        'Frequency search',
        'Duplicate search'
      ],

      answer: 1,

      explanation:
        'Binary search requires sorted arrays.',
    },

    {
      question:
        'Which loop is heavily used in arrays?',

      options: ['if', 'switch', 'for loop', 'break'],

      answer: 2,

      explanation:
        'for loop is commonly used for array traversal.',
    },

    {
      question:
        'Sorting mainly arranges elements in?', 

      options: [
        'Random order',
        'Specific order',
        'Memory order',
        'Package order'
      ],

      answer: 1,

      explanation:
        'Sorting arranges elements in specific order.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'Why are array programs important in interviews?',

      answer:
        'Array programs test logical thinking, looping concepts, searching, and sorting skills.',
    },

    {
      question:
        'What is difference between linear and binary search?',

      answer:
        'Linear search checks elements one by one while binary search works faster on sorted arrays.',
    },
  ],

  nextTopic: 'java-array-methods',
},

{
  id: 'java-array-methods',

  title: 'Java Array Methods',

  slug: 'java-array-methods',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '24 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java array methods deeply including Arrays class methods, sorting, searching, copying, filling, and utility operations.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'],

  sections: [
    {
      heading: 'Java Array Methods',

      content: `
• Arrays.sort()

• Arrays.binarySearch()

• Arrays.copyOf()

• Arrays.equals()

• Arrays.fill()

• Arrays.toString()

• Arrays.deepToString()

• Utility Operations
`,
    },

    {
      heading: 'Arrays.sort() Method',

      content: `
Arrays.sort() arranges array elements in ascending order.

Example:

Arrays.sort(arr);

Benefits:

• Faster sorting
• Built-in optimization
• Cleaner code
`.trim(),
    },

    {
      heading: 'Arrays.binarySearch() Method',

      content: `
binarySearch() searches element inside sorted array.

Example:

Arrays.binarySearch(arr, 20);

Returns:

• Index if found
• Negative value if not found
`.trim(),
    },

    {
      heading: 'Arrays.copyOf() Method',

      content: `
copyOf() creates copy of array.

Example:

Arrays.copyOf(arr, arr.length);

Useful for cloning arrays safely.
`.trim(),
    },

    {
      heading: 'Arrays.equals() Method',

      content: `
equals() compares arrays.

Returns:

• true
• false

Checks array contents properly.
`.trim(),
    },

    {
      heading: 'Arrays.fill() Method',

      content: `
fill() inserts same value into all positions.

Example:

Arrays.fill(arr, 5);

Useful for initialization.
`.trim(),
    },

    {
      heading: 'Arrays.toString() Method',

      content: `
toString() converts array into readable string format.

Example:

Arrays.toString(arr);

Useful for printing arrays quickly.
`.trim(),
    },

    {
      heading: 'Important Points About Array Methods',

      content: `
• Arrays class belongs to java.util package
• Utility methods reduce coding effort
• binarySearch requires sorted array
• Arrays methods improve readability

Common Beginner Mistakes:

• Forgetting import java.util.Arrays
• Using binarySearch on unsorted arrays
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Arrays.sort() Example',

      language: 'java',

      code: `import java.util.Arrays;

public class Main {

    public static void main(String[] args) {

        int[] arr = {40, 10, 30, 20};

        Arrays.sort(arr);

        System.out.println(Arrays.toString(arr));

    }

}`,

      output: '[10, 20, 30, 40]',
    },

    {
      title: 'Arrays.fill() Example',

      language: 'java',

      code: `import java.util.Arrays;

public class Main {

    public static void main(String[] args) {

        int[] arr = new int[5];

        Arrays.fill(arr, 7);

        System.out.println(Arrays.toString(arr));

    }

}`,

      output: '[7, 7, 7, 7, 7]',
    },
  ],

  mcqs: [
    {
      question:
        'Which class contains utility array methods?',

      options: ['Math', 'Scanner', 'Arrays', 'String'],

      answer: 2,

      explanation:
        'Arrays class contains utility array methods.',
    },

    {
      question:
        'Which method sorts arrays?',

      options: [
        'Arrays.fill()',
        'Arrays.sort()',
        'Arrays.copyOf()',
        'Arrays.equals()'
      ],

      answer: 1,

      explanation:
        'Arrays.sort() sorts arrays.',
    },

    {
      question:
        'binarySearch() requires?', 

      options: [
        'Random array',
        'Sorted array',
        'Jagged array',
        'Null array'
      ],

      answer: 1,

      explanation:
        'binarySearch() requires sorted arrays.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'Why are Arrays utility methods useful?',

      answer:
        'Arrays methods reduce coding effort and provide optimized array operations.',
    },

    {
      question:
        'Why should binarySearch use sorted arrays?',

      answer:
        'Binary search works by dividing sorted data repeatedly for faster searching.',
    },
  ],

  nextTopic: 'java-multidimensional-array',
},

{
  id: 'java-multidimensional-array',

  title: 'Multidimensional Array in Java',

  slug: 'java-multidimensional-array',

  image:
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd',

  readTime: '26 min read',

  difficulty: 'Intermediate',

  description:
    'Learn multidimensional arrays in Java deeply including 2D arrays, matrix operations, memory structure, and nested traversal.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'IBM'],

  sections: [
    {
      heading: 'Multidimensional Array in Java',

      content: `
• Introduction to 2D Arrays

• Matrix Representation

• Nested Loops

• Memory Structure

• Matrix Addition

• Matrix Multiplication

• Transpose Matrix

• Real-World Usage
`,
    },

    {
      heading: 'Introduction to Multidimensional Arrays',

      content: `
Multidimensional arrays store data in rows and columns.

Most common type:

• 2D array

Example:

int[][] matrix;
`.trim(),
    },

    {
      heading: 'Matrix Representation',

      content: `
2D arrays are commonly used for matrices.

Examples:

• Marks table
• Chess board
• Game grids
• Image processing
`.trim(),
    },

    {
      heading: 'Nested Loops in 2D Arrays',

      content: `
Nested loops are used to traverse multidimensional arrays.

Outer loop:

• Controls rows

Inner loop:

• Controls columns
`.trim(),
    },

    {
      heading: 'Matrix Operations',

      content: `
Common matrix operations:

• Addition
• Multiplication
• Transpose
• Diagonal sum

Frequently asked in interviews.
`.trim(),
    },

    {
      heading: 'Important Points About Multidimensional Arrays',

      content: `
• 2D arrays use rows and columns
• Nested loops are important
• Matrix problems improve logic building
• Widely used in DSA problems

Common Beginner Mistakes:

• Wrong nested loop boundaries
• Row-column confusion
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: '2D Array Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        int[][] arr = {

            {1, 2},

            {3, 4}

        };

        for(int i = 0; i < arr.length; i++) {

            for(int j = 0; j < arr[i].length; j++) {

                System.out.print(arr[i][j] + " ");

            }

            System.out.println();

        }

    }

}`,

      output: `1 2
3 4`,
    },
  ],

  mcqs: [
    {
      question:
        'Which loops are commonly used in 2D arrays?',

      options: [
        'Single loops',
        'Nested loops',
        'Switch loops',
        'Infinite loops'
      ],

      answer: 1,

      explanation:
        'Nested loops are used for multidimensional arrays.',
    },

    {
      question:
        '2D arrays mainly store?', 

      options: [
        'Rows and columns',
        'Single values',
        'Packages',
        'Comments'
      ],

      answer: 0,

      explanation:
        '2D arrays store data in rows and columns.',
    },

    {
      question:
        'Which operation is common in matrices?',

      options: [
        'Package import',
        'Matrix multiplication',
        'Class extension',
        'Constructor chaining'
      ],

      answer: 1,

      explanation:
        'Matrix multiplication is common in multidimensional arrays.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is multidimensional array in Java?',

      answer:
        'Multidimensional array stores data in multiple dimensions like rows and columns.',
    },

    {
      question:
        'Why are nested loops important in 2D arrays?',

      answer:
        'Nested loops help traverse rows and columns properly in multidimensional arrays.',
    },
  ],

  nextTopic: 'java-string',
},
{
  id: 'java-string',

  title: 'Java String',

  slug: 'java-string',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '32 min read',

  difficulty: 'Beginner',

  description:
    'Learn Java String deeply including string creation, memory concepts, string pool, methods, and important interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Accenture'],

  sections: [
    {
      heading: 'Java String',

      content: `
• Introduction to String

• Creating Strings

• String Pool

• Heap Memory

• String Methods

• Mutable vs Immutable

• Memory Optimization

• Real-World Usage

• Important Interview Concepts
`,
    },

    {
      heading: 'Introduction to String',

      content: `
String in Java is a sequence of characters.

Strings are widely used for:

• Names
• Messages
• User input
• Data processing

String is a predefined class in Java.
`.trim(),
    },

    {
      heading: 'Creating Strings',

      content: `
Strings can be created in two ways.

1. Using String Literal

String name = "Java";

2. Using new Keyword

String name = new String("Java");
`.trim(),
    },

    {
      heading: 'String Pool in Java',

      content: `
Java stores string literals inside String Constant Pool.

Purpose:

• Memory optimization
• Reusability
• Better performance

Same string values share same memory location.
`.trim(),
    },

    {
      heading: 'Heap Memory and Strings',

      content: `
Strings created using new keyword are stored inside heap memory.

Example:

new String("Hello");

Every object gets separate memory allocation.
`.trim(),
    },

    {
      heading: 'Important String Methods',

      content: `
Popular String methods:

• length()
• charAt()
• toUpperCase()
• toLowerCase()
• trim()
• equals()

These methods simplify string handling.
`.trim(),
    },

    {
      heading: 'Advantages of Strings',

      content: `
• Easy text handling
• Secure storage
• Immutable behavior
• Rich built-in methods
• Widely used in applications
`.trim(),
    },

    {
      heading: 'Important Points About Strings',

      content: `
• String is a class in Java
• Strings are immutable
• String literals use String Pool
• String methods improve productivity

Common Beginner Mistakes:

• Using == instead of equals()
• Confusing heap and pool memory
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Java String Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        String name = "Java";

        System.out.println(name);

        System.out.println(name.length());

    }

}`,

      output: `Java
4`,
    },
  ],

  mcqs: [
    {
      question:
        'String in Java is?', 

      options: [
        'Primitive type',
        'Class',
        'Loop',
        'Package'
      ],

      answer: 1,

      explanation:
        'String is a predefined class in Java.',
    },

    {
      question:
        'Where are string literals stored?',

      options: [
        'Stack',
        'Heap only',
        'String Pool',
        'CPU'
      ],

      answer: 2,

      explanation:
        'String literals are stored in String Pool.',
    },

    {
      question:
        'Which method gives string length?',

      options: [
        'size()',
        'count()',
        'length()',
        'charAt()'
      ],

      answer: 2,

      explanation:
        'length() returns string length.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is String in Java?',

      answer:
        'String is a predefined class used to store sequence of characters.',
    },

    {
      question:
        'Why is String heavily used in Java?',

      answer:
        'Strings are heavily used for text processing, user input, security, and data handling.',
    },
  ],

  nextTopic: 'java-string-immutable',
},

{
  id: 'java-string-immutable',

  title: 'Why String is Immutable in Java?',

  slug: 'java-string-immutable',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '26 min read',

  difficulty: 'Intermediate',

  description:
    'Learn why String is immutable in Java deeply with security benefits, memory optimization, thread safety, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Cognizant'],

  sections: [
    {
      heading: 'Why String is Immutable in Java?',

      content: `
• Introduction to Immutability

• Security Benefits

• String Pool Optimization

• Thread Safety

• HashCode Caching

• Performance Benefits

• Real-World Importance

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to String Immutability',

      content: `
Immutable means object value cannot change after creation.

In Java:

• String objects are immutable

Example:

String name = "Java";

After creation, value cannot be modified.
`.trim(),
    },

    {
      heading: 'Security Benefits',

      content: `
Strings are heavily used in:

• Database URLs
• Network connections
• File paths
• Usernames and passwords

Immutability prevents accidental modification.
`.trim(),
    },

    {
      heading: 'String Pool Optimization',

      content: `
Immutability allows safe sharing inside String Pool.

Example:

String a = "Java";

String b = "Java";

Both references point to same object.
`.trim(),
    },

    {
      heading: 'Thread Safety',

      content: `
Immutable objects are naturally thread-safe.

Multiple threads can access same string without synchronization.

Benefits:

• Safer multithreading
• Better performance
`.trim(),
    },

    {
      heading: 'HashCode Caching',

      content: `
String hashCode is cached because string values never change.

This improves performance in:

• HashMap
• HashSet
• Collections
`.trim(),
    },

    {
      heading: 'Advantages of Immutable Strings',

      content: `
• Better security
• Memory optimization
• Thread safety
• Improved performance
• Reliable behavior
`.trim(),
    },

    {
      heading: 'Important Points About String Immutability',

      content: `
• String values cannot change
• Modification creates new object
• String Pool depends on immutability
• Immutable objects improve safety

Common Beginner Mistakes:

• Assuming string value changes directly
• Confusing mutable and immutable objects
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Immutable String Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        String str = "Java";

        str.concat(" Programming");

        System.out.println(str);

    }

}`,

      output: 'Java',
    },
  ],

  mcqs: [
    {
      question:
        'What does immutable mean?',

      options: [
        'Value can change',
        'Value cannot change',
        'Loop execution',
        'Memory deletion'
      ],

      answer: 1,

      explanation:
        'Immutable objects cannot change after creation.',
    },

    {
      question:
        'Why does String Pool work efficiently?',

      options: [
        'Because strings are mutable',
        'Because strings are immutable',
        'Because of loops',
        'Because of arrays'
      ],

      answer: 1,

      explanation:
        'Immutability allows safe memory sharing.',
    },

    {
      question:
        'Immutable objects are naturally?', 

      options: [
        'Unsafe',
        'Thread-safe',
        'Static only',
        'Private only'
      ],

      answer: 1,

      explanation:
        'Immutable objects are naturally thread-safe.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'Why is String immutable in Java?',

      answer:
        'String is immutable for security, thread safety, memory optimization, and performance benefits.',
    },

    {
      question:
        'How does immutability improve String Pool performance?',

      answer:
        'Immutability allows multiple references to safely share same string object.',
    },
  ],

  nextTopic: 'java-string-comparison',
},

{
  id: 'java-string-comparison',

  title: 'String Comparison in Java',

  slug: 'java-string-comparison',

  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',

  readTime: '24 min read',

  difficulty: 'Intermediate',

  description:
    'Learn string comparison in Java deeply using equals(), == operator, compareTo(), equalsIgnoreCase(), and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'HCL'],

  sections: [
    {
      heading: 'String Comparison in Java',

      content: `
• == Operator

• equals() Method

• equalsIgnoreCase()

• compareTo() Method

• Lexicographical Comparison

• Case Sensitivity

• Memory Comparison

• Interview Concepts
`,
    },

    {
      heading: 'Using == Operator',

      content: `
== compares memory references.

It checks whether both references point to same object.

Example:

str1 == str2

Not recommended for content comparison.
`.trim(),
    },

    {
      heading: 'Using equals() Method',

      content: `
equals() compares actual string contents.

Example:

str1.equals(str2)

Most commonly used string comparison method.
`.trim(),
    },

    {
      heading: 'Using equalsIgnoreCase()',

      content: `
equalsIgnoreCase() ignores uppercase and lowercase differences.

Example:

"JAVA".equalsIgnoreCase("java")

Returns:

true
`.trim(),
    },

    {
      heading: 'Using compareTo() Method',

      content: `
compareTo() performs lexicographical comparison.

Returns:

• 0 → equal
• Positive → greater
• Negative → smaller
`.trim(),
    },

    {
      heading: 'Important Points About String Comparison',

      content: `
• == compares references
• equals() compares values
• compareTo() compares lexicographically
• equalsIgnoreCase() ignores case

Common Beginner Mistakes:

• Using == for content comparison
• Ignoring case sensitivity
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'equals() vs == Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        String a = "Java";

        String b = new String("Java");

        System.out.println(a == b);

        System.out.println(a.equals(b));

    }

}`,

      output: `false
true`,
    },
  ],

  mcqs: [
    {
      question:
        'Which method compares string contents?',

      options: [
        '==',
        'equals()',
        'compare',
        'charAt()'
      ],

      answer: 1,

      explanation:
        'equals() compares actual string contents.',
    },

    {
      question:
        '== operator compares?', 

      options: [
        'Values',
        'Memory references',
        'Characters',
        'Indexes'
      ],

      answer: 1,

      explanation:
        '== checks object references.',
    },

    {
      question:
        'Which method ignores uppercase/lowercase differences?',

      options: [
        'equals()',
        'compareTo()',
        'equalsIgnoreCase()',
        'trim()'
      ],

      answer: 2,

      explanation:
        'equalsIgnoreCase() ignores case differences.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is difference between == and equals() in Java?',

      answer:
        '== compares references while equals() compares actual string values.',
    },

    {
      question:
        'Why is equals() preferred for string comparison?',

      answer:
        'equals() compares actual string content instead of memory addresses.',
    },
  ],

  nextTopic: 'java-string-concatenation',
},

{
  id: 'java-string-concatenation',

  title: 'String Concatenation in Java',

  slug: 'java-string-concatenation',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '22 min read',

  difficulty: 'Beginner',

  description:
    'Learn string concatenation in Java deeply using + operator, concat() method, StringBuilder, and performance concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'],

  sections: [
    {
      heading: 'String Concatenation in Java',

      content: `
• + Operator

• concat() Method

• StringBuilder

• StringBuffer

• Performance Concepts

• Automatic Type Conversion

• Real-World Usage

• Interview Concepts
`,
    },

    {
      heading: 'Using + Operator',

      content: `
+ operator joins multiple strings together.

Example:

"Java" + " Programming"

Output:

Java Programming
`.trim(),
    },

    {
      heading: 'Using concat() Method',

      content: `
concat() method joins strings.

Example:

str1.concat(str2)

Returns new string object.
`.trim(),
    },

    {
      heading: 'Using StringBuilder',

      content: `
StringBuilder provides faster string modification.

Benefits:

• Better performance
• Mutable behavior
• Faster concatenation

Mostly used in loops.
`.trim(),
    },

    {
      heading: 'Using StringBuffer',

      content: `
StringBuffer is similar to StringBuilder.

Difference:

• StringBuffer is thread-safe
• Slightly slower

Useful in multithreading.
`.trim(),
    },

    {
      heading: 'Performance Concepts',

      content: `
Repeated string concatenation creates multiple objects.

This increases memory usage.

StringBuilder improves performance significantly.
`.trim(),
    },

    {
      heading: 'Important Points About String Concatenation',

      content: `
• + operator is simplest method
• concat() returns new object
• StringBuilder is faster
• StringBuffer is thread-safe

Common Beginner Mistakes:

• Heavy use of + inside loops
• Forgetting immutability
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'String Concatenation Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        String first = "Java";

        String second = " Programming";

        System.out.println(first + second);

    }

}`,

      output: 'Java Programming',
    },

    {
      title: 'StringBuilder Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        StringBuilder sb = new StringBuilder("Java");

        sb.append(" Programming");

        System.out.println(sb);

    }

}`,

      output: 'Java Programming',
    },
  ],

  mcqs: [
    {
      question:
        'Which operator joins strings?',

      options: ['-', '*', '+', '/'],

      answer: 2,

      explanation:
        '+ operator concatenates strings.',
    },

    {
      question:
        'Which class provides faster string modification?',

      options: [
        'Scanner',
        'StringBuilder',
        'Math',
        'Character'
      ],

      answer: 1,

      explanation:
        'StringBuilder provides faster string modification.',
    },

    {
      question:
        'Which class is thread-safe?',

      options: [
        'StringBuilder',
        'StringBuffer',
        'StringPool',
        'Scanner'
      ],

      answer: 1,

      explanation:
        'StringBuffer is thread-safe.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'Why is StringBuilder faster than String?',

      answer:
        'StringBuilder is mutable and avoids creating multiple new objects.',
    },

    {
      question:
        'What is difference between StringBuilder and StringBuffer?',

      answer:
        'StringBuilder is faster while StringBuffer is thread-safe.',
    },
  ],

  nextTopic: 'java-substring',
},

{
  id: 'java-substring',

  title: 'Substring in Java',

  slug: 'java-substring',

  image:
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd',

  readTime: '20 min read',

  difficulty: 'Beginner',

  description:
    'Learn substring in Java deeply including substring methods, indexing, extraction logic, and important interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'IBM'],

  sections: [
    {
      heading: 'Substring in Java',

      content: `
• Introduction to substring()

• substring(beginIndex)

• substring(beginIndex, endIndex)

• Indexing Concepts

• String Extraction

• Common Errors

• Real-World Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to substring() Method',

      content: `
substring() extracts part of string.

Java provides two versions:

1. substring(beginIndex)

2. substring(beginIndex, endIndex)
`.trim(),
    },

    {
      heading: 'substring(beginIndex)',

      content: `
Starts extraction from specified index till end.

Example:

String str = "Programming";

str.substring(3)

Output:

gramming
`.trim(),
    },

    {
      heading: 'substring(beginIndex, endIndex)',

      content: `
Starts from beginIndex and stops before endIndex.

Example:

str.substring(0, 4)

Output:

Prog
`.trim(),
    },

    {
      heading: 'Important Indexing Concepts',

      content: `
• Index starts from 0
• End index is excluded
• Invalid indexes cause exceptions

Careful indexing is very important.
`.trim(),
    },

    {
      heading: 'Real-World Usage of substring()',

      content: `
substring() is heavily used in:

• Data extraction
• Validation
• Parsing
• Pattern matching

Very common in real applications.
`.trim(),
    },

    {
      heading: 'Important Points About substring()',

      content: `
• substring extracts partial string
• Index starts from 0
• End index excluded
• Invalid index causes exception

Common Beginner Mistakes:

• Wrong indexing
• Confusing inclusive and exclusive indexes
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'substring() Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        String text = "Programming";

        System.out.println(text.substring(3));

        System.out.println(text.substring(0, 4));

    }

}`,

      output: `gramming
Prog`,
    },
  ],

  mcqs: [
    {
      question:
        'Which method extracts part of string?',

      options: [
        'charAt()',
        'substring()',
        'trim()',
        'length()'
      ],

      answer: 1,

      explanation:
        'substring() extracts part of string.',
    },

    {
      question:
        'String indexing starts from?', 

      options: ['0', '1', '-1', '10'],

      answer: 0,

      explanation:
        'String indexing starts from 0.',
    },

    {
      question:
        'In substring(begin, end), end index is?', 

      options: [
        'Included',
        'Excluded',
        'Random',
        'Negative'
      ],

      answer: 1,

      explanation:
        'End index is excluded in substring().',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is substring() method in Java?',

      answer:
        'substring() extracts a portion of string using indexes.',
    },

    {
      question:
        'Why is careful indexing important in substring()?',

      answer:
        'Wrong indexes can produce incorrect output or exceptions.',
    },
  ],

  nextTopic: 'java-string-methods',
},
{
  id: 'java-string-methods',

  title: 'Methods of String Class',

  slug: 'java-string-methods',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '34 min read',

  difficulty: 'Intermediate',

  description:
    'Learn important methods of String class in Java deeply including searching, comparison, trimming, replacing, splitting, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Accenture'],

  sections: [
    {
      heading: 'Methods of String Class',

      content: `
• length()

• charAt()

• equals()

• equalsIgnoreCase()

• compareTo()

• substring()

• trim()

• replace()

• split()

• contains()

• startsWith()

• endsWith()

• toUpperCase()

• toLowerCase()
`,
    },

    {
      heading: 'length() Method',

      content: `
length() returns total number of characters in string.

Example:

String name = "Java";

name.length()

Output:

4
`.trim(),
    },

    {
      heading: 'charAt() Method',

      content: `
charAt() returns character at specific index.

Example:

name.charAt(1)

Output:

a

Index starts from 0.
`.trim(),
    },

    {
      heading: 'equals() and equalsIgnoreCase()',

      content: `
equals() compares exact string values.

equalsIgnoreCase() ignores uppercase and lowercase differences.

Very important for validations.
`.trim(),
    },

    {
      heading: 'substring() Method',

      content: `
substring() extracts part of string.

Example:

text.substring(0, 4)

Output:

Java
`.trim(),
    },

    {
      heading: 'trim() Method',

      content: `
trim() removes extra spaces from beginning and ending.

Useful for:

• User input validation
• Data cleaning
`.trim(),
    },

    {
      heading: 'replace() and split() Methods',

      content: `
replace() changes characters or words.

split() divides string into parts.

Commonly used in:

• Data processing
• Parsing
• Validation
`.trim(),
    },

    {
      heading: 'Important Points About String Methods',

      content: `
• String methods return new objects
• Strings are immutable
• Indexing starts from 0
• String methods simplify text handling

Common Beginner Mistakes:

• Invalid indexes
• Using == instead of equals()
• Forgetting immutability
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'String Methods Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        String text = " Java Programming ";

        System.out.println(text.length());

        System.out.println(text.trim());

        System.out.println(text.toUpperCase());

    }

}`,

      output: `18
Java Programming
 JAVA PROGRAMMING `,
    },
  ],

  mcqs: [
    {
      question:
        'Which method gives total characters in string?',

      options: [
        'size()',
        'length()',
        'count()',
        'charAt()'
      ],

      answer: 1,

      explanation:
        'length() returns total number of characters.',
    },

    {
      question:
        'Which method removes extra spaces?',

      options: [
        'split()',
        'replace()',
        'trim()',
        'substring()'
      ],

      answer: 2,

      explanation:
        'trim() removes leading and trailing spaces.',
    },

    {
      question:
        'Which method converts string into uppercase?',

      options: [
        'toUpperCase()',
        'toLowerCase()',
        'compareTo()',
        'replace()'
      ],

      answer: 0,

      explanation:
        'toUpperCase() converts string into uppercase.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'Why are String methods important in Java?',

      answer:
        'String methods simplify text processing, validation, searching, and formatting.',
    },

    {
      question:
        'Why do String methods return new objects?',

      answer:
        'Strings are immutable, so modifications create new objects instead of changing existing ones.',
    },
  ],

  nextTopic: 'java-stringbuffer',
},

{
  id: 'java-stringbuffer',

  title: 'StringBuffer in Java',

  slug: 'java-stringbuffer',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '26 min read',

  difficulty: 'Intermediate',

  description:
    'Learn StringBuffer in Java deeply including mutable strings, append, insert, reverse, capacity handling, and thread safety.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Cognizant'],

  sections: [
    {
      heading: 'StringBuffer in Java',

      content: `
• Introduction to StringBuffer

• Mutable Strings

• append() Method

• insert() Method

• delete() Method

• reverse() Method

• Capacity Concept

• Thread Safety

• Performance Benefits
`,
    },

    {
      heading: 'Introduction to StringBuffer',

      content: `
StringBuffer is a mutable class used to modify strings efficiently.

Unlike String:

• Objects can be changed directly

Useful for repeated modifications.
`.trim(),
    },

    {
      heading: 'Mutable Nature of StringBuffer',

      content: `
Mutable means values can change without creating new object.

Benefits:

• Faster modifications
• Better memory usage
• Improved performance
`.trim(),
    },

    {
      heading: 'append() Method',

      content: `
append() adds new text at end.

Example:

sb.append("Java");

Very common in loops and dynamic text creation.
`.trim(),
    },

    {
      heading: 'insert() and delete() Methods',

      content: `
insert() adds text at specific position.

delete() removes characters.

Useful for dynamic string editing.
`.trim(),
    },

    {
      heading: 'reverse() Method',

      content: `
reverse() reverses characters inside StringBuffer.

Example:

"Java"

becomes:

"avaJ"
`.trim(),
    },

    {
      heading: 'Thread Safety in StringBuffer',

      content: `
StringBuffer methods are synchronized.

Benefits:

• Thread-safe
• Safe in multithreading

Disadvantage:

• Slightly slower than StringBuilder
`.trim(),
    },

    {
      heading: 'Important Points About StringBuffer',

      content: `
• StringBuffer is mutable
• Supports direct modification
• Thread-safe class
• Faster than String for modifications

Common Beginner Mistakes:

• Confusing StringBuffer with String
• Using String for heavy modifications
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'StringBuffer Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        StringBuffer sb = new StringBuffer("Java");

        sb.append(" Programming");

        sb.reverse();

        System.out.println(sb);

    }

}`,

      output: 'gnimmargorP avaJ',
    },
  ],

  mcqs: [
    {
      question:
        'StringBuffer is?', 

      options: [
        'Immutable',
        'Mutable',
        'Abstract',
        'Static'
      ],

      answer: 1,

      explanation:
        'StringBuffer is mutable.',
    },

    {
      question:
        'Which method adds text at end?',

      options: [
        'delete()',
        'append()',
        'reverse()',
        'trim()'
      ],

      answer: 1,

      explanation:
        'append() adds text at end.',
    },

    {
      question:
        'StringBuffer is thread-safe because methods are?', 

      options: [
        'Private',
        'Final',
        'Synchronized',
        'Abstract'
      ],

      answer: 2,

      explanation:
        'StringBuffer methods are synchronized.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'Why is StringBuffer faster than String?',

      answer:
        'StringBuffer is mutable and avoids creating multiple new objects.',
    },

    {
      question:
        'Why is StringBuffer thread-safe?',

      answer:
        'Its methods are synchronized, making it safe for multithreading.',
    },
  ],

  nextTopic: 'java-stringbuilder',
},

{
  id: 'java-stringbuilder',

  title: 'StringBuilder in Java',

  slug: 'java-stringbuilder',

  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',

  readTime: '24 min read',

  difficulty: 'Intermediate',

  description:
    'Learn StringBuilder in Java deeply including mutable strings, performance optimization, append operations, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'HCL'],

  sections: [
    {
      heading: 'StringBuilder in Java',

      content: `
• Introduction to StringBuilder

• Mutable Strings

• append() Method

• insert() Method

• delete() Method

• reverse() Method

• Capacity Handling

• Performance Benefits

• Difference from StringBuffer
`,
    },

    {
      heading: 'Introduction to StringBuilder',

      content: `
StringBuilder is mutable class used for efficient string modifications.

It is similar to StringBuffer but faster.

Main Difference:

• Not thread-safe
`.trim(),
    },

    {
      heading: 'Mutable Behavior',

      content: `
StringBuilder modifies same object directly.

Benefits:

• Faster execution
• Better memory efficiency
• Suitable for loops
`.trim(),
    },

    {
      heading: 'append() and insert() Methods',

      content: `
append() adds text at end.

insert() adds text at specified index.

Useful for dynamic text generation.
`.trim(),
    },

    {
      heading: 'delete() and reverse() Methods',

      content: `
delete() removes characters.

reverse() reverses string contents.

Commonly used in interview problems.
`.trim(),
    },

    {
      heading: 'Performance Benefits',

      content: `
StringBuilder performs faster than String and StringBuffer in single-threaded programs.

Best for:

• Large text creation
• Loops
• Frequent modifications
`.trim(),
    },

    {
      heading: 'Important Points About StringBuilder',

      content: `
• StringBuilder is mutable
• Faster than StringBuffer
• Not thread-safe
• Suitable for single-threaded applications

Common Beginner Mistakes:

• Using String repeatedly inside loops
• Confusing StringBuilder with StringBuffer
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'StringBuilder Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        StringBuilder sb = new StringBuilder("Java");

        sb.append(" Developer");

        sb.insert(5, "Full Stack ");

        System.out.println(sb);

    }

}`,

      output: 'Java Full Stack Developer',
    },
  ],

  mcqs: [
    {
      question:
        'StringBuilder is?', 

      options: [
        'Immutable',
        'Mutable',
        'Interface',
        'Package'
      ],

      answer: 1,

      explanation:
        'StringBuilder is mutable.',
    },

    {
      question:
        'Which class is faster in single-threaded programs?',

      options: [
        'String',
        'StringBuffer',
        'StringBuilder',
        'Scanner'
      ],

      answer: 2,

      explanation:
        'StringBuilder is faster because it is not synchronized.',
    },

    {
      question:
        'StringBuilder is not?', 

      options: [
        'Mutable',
        'Fast',
        'Thread-safe',
        'Efficient'
      ],

      answer: 2,

      explanation:
        'StringBuilder is not thread-safe.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'Why is StringBuilder faster than StringBuffer?',

      answer:
        'StringBuilder is not synchronized, so it performs faster.',
    },

    {
      question:
        'When should StringBuilder be preferred?',

      answer:
        'StringBuilder should be preferred for heavy string modifications in single-threaded applications.',
    },
  ],

  nextTopic: 'java-string-vs-stringbuffer',
},

{
  id: 'java-string-vs-stringbuffer',

  title: 'String vs StringBuffer in Java',

  slug: 'java-string-vs-stringbuffer',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '22 min read',

  difficulty: 'Intermediate',

  description:
    'Learn difference between String and StringBuffer in Java deeply including mutability, performance, memory usage, and thread safety.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'],

  sections: [
    {
      heading: 'String vs StringBuffer in Java',

      content: `
• Immutable vs Mutable

• Memory Usage

• Performance Difference

• Thread Safety

• Modification Handling

• Real-World Usage

• Interview Comparisons

• Best Use Cases
`,
    },

    {
      heading: 'Mutability Difference',

      content: `
String is immutable.

StringBuffer is mutable.

Meaning:

• String cannot change after creation
• StringBuffer can change directly
`.trim(),
    },

    {
      heading: 'Performance Difference',

      content: `
String creates new object after every modification.

StringBuffer modifies same object.

Result:

• StringBuffer performs faster during repeated modifications
`.trim(),
    },

    {
      heading: 'Memory Usage',

      content: `
String may create multiple unnecessary objects.

StringBuffer reduces object creation.

Benefits:

• Better memory efficiency
• Improved performance
`.trim(),
    },

    {
      heading: 'Thread Safety',

      content: `
StringBuffer is thread-safe because methods are synchronized.

String is naturally safe because it is immutable.
`.trim(),
    },

    {
      heading: 'When to Use String',

      content: `
Use String when:

• Data rarely changes
• Simple text storage needed
• Security important
`.trim(),
    },

    {
      heading: 'When to Use StringBuffer',

      content: `
Use StringBuffer when:

• Frequent modifications occur
• Multithreading involved
• Dynamic text generation needed
`.trim(),
    },

    {
      heading: 'Important Points About String vs StringBuffer',

      content: `
• String is immutable
• StringBuffer is mutable
• StringBuffer is faster for modifications
• StringBuffer supports synchronization

Common Beginner Mistakes:

• Using String in heavy modification loops
• Ignoring performance differences
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'String vs StringBuffer Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        String str = "Java";

        str.concat(" Programming");

        System.out.println(str);

        StringBuffer sb = new StringBuffer("Java");

        sb.append(" Programming");

        System.out.println(sb);

    }

}`,

      output: `Java
Java Programming`,
    },
  ],

  mcqs: [
    {
      question:
        'Which class is immutable?',

      options: [
        'StringBuffer',
        'StringBuilder',
        'String',
        'Scanner'
      ],

      answer: 2,

      explanation:
        'String is immutable.',
    },

    {
      question:
        'Which class is mutable?',

      options: [
        'String',
        'StringBuffer',
        'Character',
        'Math'
      ],

      answer: 1,

      explanation:
        'StringBuffer is mutable.',
    },

    {
      question:
        'Which class is better for repeated modifications?',

      options: [
        'String',
        'StringBuffer',
        'char',
        'float'
      ],

      answer: 1,

      explanation:
        'StringBuffer performs better for repeated modifications.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is main difference between String and StringBuffer?',

      answer:
        'String is immutable while StringBuffer is mutable.',
    },

    {
      question:
        'Why is StringBuffer preferred for repeated modifications?',

      answer:
        'StringBuffer modifies same object directly, improving performance and memory usage.',
    },
  ],

  nextTopic: 'java-stringbuffer-vs-stringbuilder',
},
{
  id: 'java-stringbuffer-vs-stringbuilder',

  title: 'StringBuffer vs StringBuilder in Java',

  slug: 'java-stringbuffer-vs-stringbuilder',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '24 min read',

  difficulty: 'Intermediate',

  description:
    'Learn difference between StringBuffer and StringBuilder in Java deeply including performance, thread safety, synchronization, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Accenture'],

  sections: [
    {
      heading: 'StringBuffer vs StringBuilder in Java',

      content: `
• Introduction to StringBuffer

• Introduction to StringBuilder

• Thread Safety

• Synchronization

• Performance Difference

• Mutable Nature

• Memory Efficiency

• Best Use Cases

• Interview Comparison
`,
    },

    {
      heading: 'Introduction to StringBuffer',

      content: `
StringBuffer is mutable class used for modifying strings efficiently.

Features:

• Mutable
• Thread-safe
• Synchronized methods

Mostly used in multithreaded environments.
`.trim(),
    },

    {
      heading: 'Introduction to StringBuilder',

      content: `
StringBuilder is also mutable class for string modification.

Features:

• Mutable
• Faster execution
• Non-synchronized methods

Mostly used in single-threaded applications.
`.trim(),
    },

    {
      heading: 'Thread Safety Difference',

      content: `
StringBuffer is thread-safe.

Reason:

• Methods are synchronized

StringBuilder is not thread-safe because methods are not synchronized.
`.trim(),
    },

    {
      heading: 'Performance Difference',

      content: `
StringBuilder performs faster than StringBuffer.

Reason:

• No synchronization overhead

Best for:

• Loops
• Heavy string modifications
• Large text generation
`.trim(),
    },

    {
      heading: 'Mutable Nature',

      content: `
Both StringBuffer and StringBuilder are mutable.

Benefits:

• Same object gets modified
• Less memory wastage
• Better performance
`.trim(),
    },

    {
      heading: 'When to Use StringBuffer',

      content: `
Use StringBuffer when:

• Multithreading exists
• Thread safety required
• Shared resources involved
`.trim(),
    },

    {
      heading: 'When to Use StringBuilder',

      content: `
Use StringBuilder when:

• Single-threaded application
• Maximum performance required
• Frequent modifications happen
`.trim(),
    },

    {
      heading: 'Important Points About StringBuffer vs StringBuilder',

      content: `
• Both are mutable classes
• StringBuffer is synchronized
• StringBuilder is faster
• StringBuilder is not thread-safe

Common Beginner Mistakes:

• Using String for heavy modifications
• Ignoring thread safety requirements
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'StringBuffer Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        StringBuffer sb = new StringBuffer("Java");

        sb.append(" Programming");

        System.out.println(sb);

    }

}`,

      output: 'Java Programming',
    },

    {
      title: 'StringBuilder Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        StringBuilder sb = new StringBuilder("Java");

        sb.append(" Developer");

        System.out.println(sb);

    }

}`,

      output: 'Java Developer',
    },
  ],

  mcqs: [
    {
      question:
        'Which class is thread-safe?',

      options: [
        'StringBuilder',
        'StringBuffer',
        'String',
        'Scanner'
      ],

      answer: 1,

      explanation:
        'StringBuffer is thread-safe because methods are synchronized.',
    },

    {
      question:
        'Which class performs faster?',

      options: [
        'StringBuffer',
        'StringBuilder',
        'String',
        'Character'
      ],

      answer: 1,

      explanation:
        'StringBuilder performs faster because it is not synchronized.',
    },

    {
      question:
        'Both StringBuffer and StringBuilder are?', 

      options: [
        'Immutable',
        'Mutable',
        'Abstract',
        'Static'
      ],

      answer: 1,

      explanation:
        'Both classes are mutable.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is difference between StringBuffer and StringBuilder?',

      answer:
        'StringBuffer is thread-safe and synchronized while StringBuilder is faster and non-synchronized.',
    },

    {
      question:
        'When should StringBuilder be preferred over StringBuffer?',

      answer:
        'StringBuilder should be preferred in single-threaded applications for better performance.',
    },
  ],

  nextTopic: 'java-immutable-class',
},

{
  id: 'java-immutable-class',

  title: 'How to Create Immutable Class in Java?',

  slug: 'java-immutable-class',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '28 min read',

  difficulty: 'Advanced',

  description:
    'Learn how to create immutable class in Java deeply including final class, private variables, constructors, defensive copying, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Cognizant'],

  sections: [
    {
      heading: 'How to Create Immutable Class in Java?',

      content: `
• Introduction to Immutable Class

• Making Class final

• Private Data Members

• No Setter Methods

• Constructor Initialization

• Returning Copies

• Defensive Copying

• Advantages of Immutable Classes

• Real-World Examples
`,
    },

    {
      heading: 'Introduction to Immutable Class',

      content: `
Immutable class means object state cannot change after object creation.

Once created:

• Data remains fixed

Example:

• String class
• Wrapper classes
`.trim(),
    },

    {
      heading: 'Making Class final',

      content: `
Class should be declared final.

Reason:

• Prevents inheritance
• Stops method overriding
• Protects object behavior

Syntax:

final class Student
`.trim(),
    },

    {
      heading: 'Private Data Members',

      content: `
All variables should be private.

Benefits:

• Direct access blocked
• Better encapsulation
• Improved security
`.trim(),
    },

    {
      heading: 'No Setter Methods',

      content: `
Immutable classes should not provide setter methods.

Reason:

• Prevents value modification
• Keeps object constant
`.trim(),
    },

    {
      heading: 'Constructor Initialization',

      content: `
Values are initialized using constructor only.

After object creation:

• Data cannot change
`.trim(),
    },

    {
      heading: 'Defensive Copying',

      content: `
For mutable objects:

• Return copies instead of original references

Benefits:

• Prevents external modification
• Improves safety
`.trim(),
    },

    {
      heading: 'Advantages of Immutable Classes',

      content: `
• Thread-safe
• Better security
• Easy caching
• Reliable behavior
• Safe object sharing
`.trim(),
    },

    {
      heading: 'Important Points About Immutable Classes',

      content: `
• Class should be final
• Variables should be private
• No setter methods allowed
• Constructor initializes data

Common Beginner Mistakes:

• Providing setter methods
• Returning original mutable references
• Forgetting final keyword
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Immutable Class Example',

      language: 'java',

      code: `final class Student {

    private final int id;

    private final String name;

    public Student(int id, String name) {

        this.id = id;

        this.name = name;

    }

    public int getId() {

        return id;

    }

    public String getName() {

        return name;

    }

}

public class Main {

    public static void main(String[] args) {

        Student s = new Student(101, "Rahul");

        System.out.println(s.getId());

        System.out.println(s.getName());

    }

}`,

      output: `101
Rahul`,
    },
  ],

  mcqs: [
    {
      question:
        'Why should immutable class be final?',

      options: [
        'For loops',
        'To prevent inheritance',
        'To create arrays',
        'To stop constructors'
      ],

      answer: 1,

      explanation:
        'final prevents inheritance and protects immutability.',
    },

    {
      question:
        'Immutable classes should provide?', 

      options: [
        'Setter methods',
        'Public variables',
        'No setter methods',
        'Static loops'
      ],

      answer: 2,

      explanation:
        'Setter methods would allow modification.',
    },

    {
      question:
        'Which class is common immutable class in Java?',

      options: [
        'Scanner',
        'String',
        'Math',
        'Thread'
      ],

      answer: 1,

      explanation:
        'String is immutable class in Java.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'How can we create immutable class in Java?',

      answer:
        'Make class final, variables private and final, initialize using constructor, and avoid setter methods.',
    },

    {
      question:
        'Why are immutable classes important?',

      answer:
        'Immutable classes improve thread safety, security, reliability, and safe object sharing.',
    },
  ],

  nextTopic: 'java-tostring-method',
},
{
  id: 'java-tostring-method',

  title: 'Java toString Method',

  slug: 'java-tostring-method',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '22 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java toString() method deeply including object representation, overriding, default implementation, and important interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Accenture'],

  sections: [
    {
      heading: 'Java toString Method',

      content: `
• Introduction to toString()

• Default toString() Method

• Overriding toString()

• Object Representation

• Readable Output

• Real-World Usage

• Interview Concepts

• Best Practices
`,
    },

    {
      heading: 'Introduction to toString() Method',

      content: `
toString() method converts object into readable string representation.

It belongs to Object class.

Used for:

• Printing objects
• Debugging
• Logging
`.trim(),
    },

    {
      heading: 'Default toString() Method',

      content: `
By default:

toString() returns:

ClassName@HashCode

Example:

Student@15db9742

This output is not user-friendly.
`.trim(),
    },

    {
      heading: 'Overriding toString() Method',

      content: `
Programmers override toString() for meaningful output.

Benefits:

• Better readability
• Easy debugging
• Professional output
`.trim(),
    },

    {
      heading: 'Real-World Usage of toString()',

      content: `
toString() is heavily used in:

• Logging systems
• Debugging tools
• Object printing
• Frameworks

Frequently asked in interviews.
`.trim(),
    },

    {
      heading: 'Advantages of Overriding toString()',

      content: `
• Cleaner object output
• Easier debugging
• Better maintainability
• Improved readability
`.trim(),
    },

    {
      heading: 'Important Points About toString()',

      content: `
• toString() belongs to Object class
• Default output is unreadable
• Overriding improves readability
• Automatically called during printing

Common Beginner Mistakes:

• Forgetting @Override annotation
• Printing objects without overriding toString()
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'toString() Method Example',

      language: 'java',

      code: `class Student {

    int id;

    String name;

    Student(int id, String name) {

        this.id = id;

        this.name = name;

    }

    @Override
    public String toString() {

        return id + " " + name;

    }

}

public class Main {

    public static void main(String[] args) {

        Student s = new Student(101, "Rahul");

        System.out.println(s);

    }

}`,

      output: '101 Rahul',
    },
  ],

  mcqs: [
    {
      question:
        'toString() method belongs to which class?',

      options: [
        'String',
        'Scanner',
        'Object',
        'Math'
      ],

      answer: 2,

      explanation:
        'toString() method belongs to Object class.',
    },

    {
      question:
        'Default toString() output contains?', 

      options: [
        'Only object data',
        'Class name and hashcode',
        'Loop values',
        'Package name only'
      ],

      answer: 1,

      explanation:
        'Default output contains class name and hashcode.',
    },

    {
      question:
        'Why do programmers override toString()?',

      options: [
        'For loops',
        'For readable output',
        'For arrays',
        'For packages'
      ],

      answer: 1,

      explanation:
        'Overriding provides meaningful readable output.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'Why is toString() method important in Java?',

      answer:
        'toString() provides readable object representation useful for debugging and logging.',
    },

    {
      question:
        'What happens if toString() is not overridden?',

      answer:
        'Java prints default output containing class name and hashcode.',
    },
  ],

  nextTopic: 'java-stringtokenizer',
},

{
  id: 'java-stringtokenizer',

  title: 'StringTokenizer Class in Java',

  slug: 'java-stringtokenizer',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '24 min read',

  difficulty: 'Intermediate',

  description:
    'Learn StringTokenizer class in Java deeply including token generation, delimiters, parsing logic, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Cognizant'],

  sections: [
    {
      heading: 'StringTokenizer Class in Java',

      content: `
• Introduction to StringTokenizer

• Token Concept

• Delimiters

• hasMoreTokens()

• nextToken()

• Counting Tokens

• Parsing Strings

• Real-World Usage
`,
    },

    {
      heading: 'Introduction to StringTokenizer',

      content: `
StringTokenizer breaks string into smaller parts called tokens.

Mostly used for:

• Parsing text
• Reading words
• Data extraction
`.trim(),
    },

    {
      heading: 'Token Concept',

      content: `
A token is a separated part of string.

Example:

"Java Python C++"

Tokens:

• Java
• Python
• C++
`.trim(),
    },

    {
      heading: 'Delimiters in StringTokenizer',

      content: `
Delimiter separates tokens.

Default delimiter:

• Space

Custom delimiters can also be used.

Example:

"," or "-"
`.trim(),
    },

    {
      heading: 'hasMoreTokens() Method',

      content: `
hasMoreTokens() checks whether more tokens exist.

Returns:

• true
• false

Useful inside loops.
`.trim(),
    },

    {
      heading: 'nextToken() Method',

      content: `
nextToken() returns next available token.

Very important method in StringTokenizer.
`.trim(),
    },

    {
      heading: 'Advantages of StringTokenizer',

      content: `
• Easy parsing
• Faster token extraction
• Simple syntax
• Useful for input processing
`.trim(),
    },

    {
      heading: 'Important Points About StringTokenizer',

      content: `
• StringTokenizer belongs to java.util package
• Tokens are separated using delimiters
• hasMoreTokens() checks remaining tokens
• nextToken() fetches next token

Common Beginner Mistakes:

• Forgetting delimiter behavior
• Calling nextToken() without checking availability
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'StringTokenizer Example',

      language: 'java',

      code: `import java.util.StringTokenizer;

public class Main {

    public static void main(String[] args) {

        StringTokenizer st =
            new StringTokenizer("Java Python C++");

        while(st.hasMoreTokens()) {

            System.out.println(st.nextToken());

        }

    }

}`,

      output: `Java
Python
C++`,
    },
  ],

  mcqs: [
    {
      question:
        'StringTokenizer is used for?', 

      options: [
        'Array sorting',
        'Breaking strings into tokens',
        'Package importing',
        'Loop execution'
      ],

      answer: 1,

      explanation:
        'StringTokenizer splits strings into tokens.',
    },

    {
      question:
        'Which method checks remaining tokens?',

      options: [
        'nextToken()',
        'hasMoreTokens()',
        'trim()',
        'split()'
      ],

      answer: 1,

      explanation:
        'hasMoreTokens() checks token availability.',
    },

    {
      question:
        'Default delimiter in StringTokenizer is?', 

      options: [
        'Comma',
        'Space',
        'Colon',
        'Semicolon'
      ],

      answer: 1,

      explanation:
        'Default delimiter is space.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is StringTokenizer in Java?',

      answer:
        'StringTokenizer breaks strings into smaller tokens using delimiters.',
    },

    {
      question:
        'Why is hasMoreTokens() important?',

      answer:
        'It prevents errors by checking token availability before fetching next token.',
    },
  ],

  nextTopic: 'java-stringjoiner',
},

{
  id: 'java-stringjoiner',

  title: 'StringJoiner in Java',

  slug: 'java-stringjoiner',

  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',

  readTime: '20 min read',

  difficulty: 'Intermediate',

  description:
    'Learn StringJoiner in Java deeply including delimiters, prefix, suffix, joining strings, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'HCL'],

  sections: [
    {
      heading: 'StringJoiner in Java',

      content: `
• Introduction to StringJoiner

• Delimiter Usage

• Prefix and Suffix

• add() Method

• merge() Method

• String Joining

• Performance Benefits

• Real-World Usage
`,
    },

    {
      heading: 'Introduction to StringJoiner',

      content: `
StringJoiner joins multiple strings together using delimiters.

Introduced in:

• Java 8

Useful for formatted output generation.
`.trim(),
    },

    {
      heading: 'Delimiter Usage',

      content: `
Delimiter separates joined strings.

Examples:

• Comma
• Hyphen
• Space

Output becomes more readable.
`.trim(),
    },

    {
      heading: 'Prefix and Suffix',

      content: `
StringJoiner supports custom prefix and suffix.

Example:

[Java, Python, C++]

Here:

• [ is prefix
• ] is suffix
`.trim(),
    },

    {
      heading: 'add() Method',

      content: `
add() inserts new element into StringJoiner.

Example:

sj.add("Java");
`.trim(),
    },

    {
      heading: 'merge() Method',

      content: `
merge() combines two StringJoiner objects together.

Useful for dynamic string creation.
`.trim(),
    },

    {
      heading: 'Advantages of StringJoiner',

      content: `
• Cleaner string joining
• Better formatting
• Less manual concatenation
• Improved readability
`.trim(),
    },

    {
      heading: 'Important Points About StringJoiner',

      content: `
• Introduced in Java 8
• Supports delimiters
• Supports prefix and suffix
• Useful for formatted output

Common Beginner Mistakes:

• Forgetting delimiters
• Confusing StringJoiner with StringBuilder
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'StringJoiner Example',

      language: 'java',

      code: `import java.util.StringJoiner;

public class Main {

    public static void main(String[] args) {

        StringJoiner sj =
            new StringJoiner(", ", "[", "]");

        sj.add("Java");

        sj.add("Python");

        sj.add("C++");

        System.out.println(sj);

    }

}`,

      output: '[Java, Python, C++]',
    },
  ],

  mcqs: [
    {
      question:
        'StringJoiner was introduced in?', 

      options: [
        'Java 5',
        'Java 6',
        'Java 8',
        'Java 11'
      ],

      answer: 2,

      explanation:
        'StringJoiner was introduced in Java 8.',
    },

    {
      question:
        'Which method adds elements in StringJoiner?',

      options: [
        'append()',
        'insert()',
        'add()',
        'merge()'
      ],

      answer: 2,

      explanation:
        'add() inserts new elements.',
    },

    {
      question:
        'StringJoiner mainly helps in?', 

      options: [
        'Array sorting',
        'Formatted string joining',
        'Inheritance',
        'Package creation'
      ],

      answer: 1,

      explanation:
        'StringJoiner helps in formatted string joining.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is StringJoiner in Java?',

      answer:
        'StringJoiner joins multiple strings using delimiters, prefixes, and suffixes.',
    },

    {
      question:
        'Why is StringJoiner useful?',

      answer:
        'It simplifies formatted string joining and improves readability.',
    },
  ],

  nextTopic: 'java-string-format',
},

{
  id: 'java-string-format',

  title: 'String format() Method in Java',

  slug: 'java-string-format',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '22 min read',

  difficulty: 'Intermediate',

  description:
    'Learn String format() method in Java deeply including placeholders, formatted output, formatting specifiers, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'],

  sections: [
    {
      heading: 'String format() Method in Java',

      content: `
• Introduction to format()

• Placeholders

• Formatting Specifiers

• Number Formatting

• String Formatting

• Floating Point Formatting

• Real-World Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to format() Method',

      content: `
format() creates formatted strings using placeholders.

Useful for:

• Reports
• Tables
• Professional output
• Dynamic messages
`.trim(),
    },

    {
      heading: 'Placeholders in format()',

      content: `
Common placeholders:

• %s → String
• %d → Integer
• %f → Floating point

These placeholders are replaced by actual values.
`.trim(),
    },

    {
      heading: 'Number Formatting',

      content: `
format() supports number formatting.

Example:

%.2f

Limits decimal places to 2 digits.
`.trim(),
    },

    {
      heading: 'String Formatting',

      content: `
Strings can be aligned and formatted properly.

Useful for:

• Reports
• Console output
• Structured data
`.trim(),
    },

    {
      heading: 'Advantages of format()',

      content: `
• Cleaner output
• Professional formatting
• Easy dynamic messages
• Better readability
`.trim(),
    },

    {
      heading: 'Important Points About format()',

      content: `
• format() uses placeholders
• %s represents strings
• %d represents integers
• %f represents floating numbers

Common Beginner Mistakes:

• Wrong placeholders
• Mismatched data types
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'format() Method Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        String name = "Rahul";

        int marks = 95;

        String result =
            String.format(
                "Student: %s Marks: %d",
                name,
                marks
            );

        System.out.println(result);

    }

}`,

      output: 'Student: Rahul Marks: 95',
    },
  ],

  mcqs: [
    {
      question:
        'Which placeholder represents String?',

      options: ['%d', '%f', '%s', '%c'],

      answer: 2,

      explanation:
        '%s represents String values.',
    },

    {
      question:
        'Which placeholder represents integer?',

      options: ['%d', '%s', '%f', '%n'],

      answer: 0,

      explanation:
        '%d represents integer values.',
    },

    {
      question:
        'format() method mainly helps in?', 

      options: [
        'Loop creation',
        'Formatted output',
        'Inheritance',
        'Array sorting'
      ],

      answer: 1,

      explanation:
        'format() creates professional formatted output.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is String format() method in Java?',

      answer:
        'format() creates formatted strings using placeholders and values.',
    },

    {
      question:
        'Why is format() useful in Java?',

      answer:
        'It improves readability and generates professional structured output.',
    },
  ],

  nextTopic: 'java-regex',
},

{
  id: 'java-regex',

  title: 'Regular Expressions in Java',

  slug: 'java-regex',

  image:
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd',

  readTime: '30 min read',

  difficulty: 'Advanced',

  description:
    'Learn Regular Expressions in Java deeply including pattern matching, validation, regex symbols, matcher class, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'IBM'],

  sections: [
    {
      heading: 'Regular Expressions in Java',

      content: `
• Introduction to Regex

• Pattern Class

• Matcher Class

• Regex Symbols

• Validation Patterns

• Email Validation

• Mobile Number Validation

• Real-World Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Regex',

      content: `
Regular Expressions are patterns used for matching text.

Regex helps in:

• Validation
• Searching
• Parsing
• Data filtering
`.trim(),
    },

    {
      heading: 'Pattern and Matcher Classes',

      content: `
Java regex mainly uses:

• Pattern class
• Matcher class

Pattern defines regex rules.

Matcher checks matches.
`.trim(),
    },

    {
      heading: 'Important Regex Symbols',

      content: `
Common symbols:

• . → Any character
• * → Multiple occurrences
• + → One or more occurrences
• \\d → Digit
• \\s → Space
`.trim(),
    },

    {
      heading: 'Validation Using Regex',

      content: `
Regex is heavily used for validation.

Examples:

• Email validation
• Password validation
• Mobile number validation
`.trim(),
    },

    {
      heading: 'Advantages of Regex',

      content: `
• Powerful text matching
• Faster validation
• Flexible searching
• Cleaner code
`.trim(),
    },

    {
      heading: 'Important Points About Regex',

      content: `
• Regex uses special symbols
• Pattern class stores regex
• Matcher checks matching
• Regex simplifies validation

Common Beginner Mistakes:

• Wrong escape characters
• Invalid regex patterns
• Confusing regex symbols
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Regex Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        String email = "test@gmail.com";

        boolean result =
            email.matches(
                "[a-zA-Z0-9._]+@[a-z]+\\\\.[a-z]+"
            );

        System.out.println(result);

    }

}`,

      output: 'true',
    },
  ],

  mcqs: [
    {
      question:
        'Regex is mainly used for?', 

      options: [
        'Loop execution',
        'Text pattern matching',
        'Array sorting',
        'Inheritance'
      ],

      answer: 1,

      explanation:
        'Regex is used for pattern matching.',
    },

    {
      question:
        'Which class stores regex pattern?',

      options: [
        'Scanner',
        'Pattern',
        'String',
        'Math'
      ],

      answer: 1,

      explanation:
        'Pattern class stores regex patterns.',
    },

    {
      question:
        'Which symbol represents digit in regex?',

      options: ['\\d', '\\s', '+', '*'],

      answer: 0,

      explanation:
        '\\d represents digit.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What are Regular Expressions in Java?',

      answer:
        'Regular Expressions are patterns used for searching, matching, and validating text.',
    },

    {
      question:
        'Why is regex important in Java?',

      answer:
        'Regex simplifies validation, searching, filtering, and text processing.',
    },
  ],

  nextTopic: 'java-exceptions',
},
{
  id: 'java-exceptions',

  title: 'Java Exceptions',

  slug: 'java-exceptions',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '34 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java Exceptions deeply including exception handling, types of exceptions, runtime errors, checked exceptions, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Accenture'],

  sections: [
    {
      heading: 'Java Exceptions',

      content: `
• Introduction to Exceptions

• Exception Handling

• Types of Exceptions

• Checked Exceptions

• Unchecked Exceptions

• Runtime Errors

• Exception Hierarchy

• Advantages of Exception Handling

• Real-World Usage
`,
    },

    {
      heading: 'Introduction to Exceptions',

      content: `
An exception is an unwanted event that interrupts normal program execution.

Exceptions usually occur because of:

• Invalid input
• Wrong logic
• File issues
• Arithmetic problems
`.trim(),
    },

    {
      heading: 'Why Exception Handling is Important',

      content: `
Without exception handling:

• Program may terminate suddenly

With exception handling:

• Program becomes stable
• Errors can be controlled
• Better user experience
`.trim(),
    },

    {
      heading: 'Types of Exceptions',

      content: `
Main types of exceptions:

1. Checked Exceptions

2. Unchecked Exceptions

Checked exceptions are checked during compile time.

Unchecked exceptions occur during runtime.
`.trim(),
    },

    {
      heading: 'Checked Exceptions',

      content: `
Checked exceptions are verified by compiler.

Examples:

• IOException
• SQLException
• FileNotFoundException

Programmer must handle them.
`.trim(),
    },

    {
      heading: 'Unchecked Exceptions',

      content: `
Unchecked exceptions occur during runtime.

Examples:

• ArithmeticException
• NullPointerException
• ArrayIndexOutOfBoundsException

Mostly caused by programming mistakes.
`.trim(),
    },

    {
      heading: 'Advantages of Exception Handling',

      content: `
• Prevents sudden termination
• Improves reliability
• Makes debugging easier
• Separates error handling code
• Improves maintainability
`.trim(),
    },

    {
      heading: 'Important Points About Exceptions',

      content: `
• Exceptions interrupt program flow
• Checked exceptions are compile-time checked
• Unchecked exceptions occur at runtime
• Exception handling improves program stability

Common Beginner Mistakes:

• Ignoring exceptions
• Using generic catch blocks everywhere
• Not understanding exception hierarchy
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Basic Exception Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        int a = 10;

        int b = 0;

        System.out.println(a / b);

    }

}`,

      output: 'ArithmeticException occurs',
    },
  ],

  mcqs: [
    {
      question:
        'What is an exception in Java?',

      options: [
        'Loop',
        'Class',
        'Unwanted event',
        'Variable'
      ],

      answer: 2,

      explanation:
        'Exception is an unwanted event interrupting program execution.',
    },

    {
      question:
        'Which exception occurs when dividing by zero?',

      options: [
        'IOException',
        'ArithmeticException',
        'NullPointerException',
        'SQLException'
      ],

      answer: 1,

      explanation:
        'Division by zero causes ArithmeticException.',
    },

    {
      question:
        'Checked exceptions are checked during?', 

      options: [
        'Runtime',
        'Compile time',
        'Execution only',
        'Object creation'
      ],

      answer: 1,

      explanation:
        'Checked exceptions are checked during compilation.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is exception handling in Java?',

      answer:
        'Exception handling is mechanism used to handle runtime errors and maintain normal program flow.',
    },

    {
      question:
        'What is difference between checked and unchecked exceptions?',

      answer:
        'Checked exceptions are checked during compile time while unchecked exceptions occur during runtime.',
    },
  ],

  nextTopic: 'java-try-catch',
},

{
  id: 'java-try-catch',

  title: 'Java Try-catch Block',

  slug: 'java-try-catch',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '26 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java try-catch block deeply including syntax, error handling, flow control, runtime exception handling, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Cognizant'],

  sections: [
    {
      heading: 'Java Try-catch Block',

      content: `
• Introduction to try-catch

• try Block

• catch Block

• Exception Handling Flow

• Runtime Error Handling

• Multiple Statements

• Advantages of try-catch

• Real-World Usage
`,
    },

    {
      heading: 'Introduction to try-catch',

      content: `
try-catch block handles exceptions safely.

Purpose:

• Prevent program crash
• Handle runtime errors gracefully
`.trim(),
    },

    {
      heading: 'try Block',

      content: `
Code that may generate exception is written inside try block.

Example:

try {

    risky code

}
`.trim(),
    },

    {
      heading: 'catch Block',

      content: `
catch block handles exception generated inside try block.

Example:

catch(Exception e) {

    handling code

}
`.trim(),
    },

    {
      heading: 'Program Flow in try-catch',

      content: `
If exception occurs:

• Remaining try block stops
• Control moves to catch block

If no exception occurs:

• catch block is skipped
`.trim(),
    },

    {
      heading: 'Advantages of try-catch',

      content: `
• Prevents abnormal termination
• Improves reliability
• Better debugging
• Cleaner error handling
`.trim(),
    },

    {
      heading: 'Important Points About try-catch',

      content: `
• try block contains risky code
• catch block handles exception
• Exception object provides details
• Program continues safely

Common Beginner Mistakes:

• Writing risky code outside try block
• Using empty catch blocks
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'try-catch Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        try {

            int result = 10 / 0;

            System.out.println(result);

        }

        catch(ArithmeticException e) {

            System.out.println("Cannot divide by zero");

        }

    }

}`,

      output: 'Cannot divide by zero',
    },
  ],

  mcqs: [
    {
      question:
        'Which block contains risky code?',

      options: [
        'catch',
        'finally',
        'try',
        'throw'
      ],

      answer: 2,

      explanation:
        'try block contains risky code.',
    },

    {
      question:
        'Which block handles exception?',

      options: [
        'try',
        'main',
        'class',
        'catch'
      ],

      answer: 3,

      explanation:
        'catch block handles exception.',
    },

    {
      question:
        'What happens after exception occurs inside try block?',

      options: [
        'Program stops immediately',
        'Control moves to catch block',
        'Loop starts',
        'Class reloads'
      ],

      answer: 1,

      explanation:
        'Control transfers to catch block.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'Why is try-catch important in Java?',

      answer:
        'try-catch prevents abnormal termination and handles runtime errors safely.',
    },

    {
      question:
        'What happens if exception is not handled?',

      answer:
        'Program may terminate abnormally and remaining code may not execute.',
    },
  ],

  nextTopic: 'java-multiple-catch',
},

{
  id: 'java-multiple-catch',

  title: 'Java Multiple Catch Block',

  slug: 'java-multiple-catch',

  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',

  readTime: '24 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java Multiple Catch Block deeply including handling different exceptions, execution flow, exception hierarchy, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'HCL'],

  sections: [
    {
      heading: 'Java Multiple Catch Block',

      content: `
• Introduction to Multiple Catch

• Handling Different Exceptions

• Execution Flow

• Exception Hierarchy

• Catch Block Ordering

• Runtime Handling

• Advantages

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Multiple Catch',

      content: `
Java allows multiple catch blocks after single try block.

Purpose:

• Handle different exceptions separately
• Provide specific error messages
`.trim(),
    },

    {
      heading: 'Handling Different Exceptions',

      content: `
Different exceptions can occur in same program.

Examples:

• ArithmeticException
• ArrayIndexOutOfBoundsException
• NullPointerException

Multiple catch blocks handle them individually.
`.trim(),
    },

    {
      heading: 'Execution Flow',

      content: `
Only one matching catch block executes.

After matching catch block:

• Remaining catch blocks are skipped
`.trim(),
    },

    {
      heading: 'Catch Block Ordering',

      content: `
Specific exceptions should come before generic exceptions.

Correct Order:

1. Child exception
2. Parent exception

Wrong ordering causes compile-time error.
`.trim(),
    },

    {
      heading: 'Advantages of Multiple Catch',

      content: `
• Better debugging
• Specific handling
• Cleaner code
• Better readability
`.trim(),
    },

    {
      heading: 'Important Points About Multiple Catch',

      content: `
• One try block can have many catch blocks
• Only one catch executes
• Ordering is important
• Specific exceptions should come first

Common Beginner Mistakes:

• Wrong catch ordering
• Using generic Exception everywhere
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Multiple Catch Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        try {

            int arr[] = {1, 2, 3};

            System.out.println(arr[5]);

        }

        catch(ArrayIndexOutOfBoundsException e) {

            System.out.println("Invalid array index");

        }

        catch(Exception e) {

            System.out.println("General exception");

        }

    }

}`,

      output: 'Invalid array index',
    },
  ],

  mcqs: [
    {
      question:
        'Can one try block have multiple catch blocks?',

      options: [
        'Yes',
        'No',
        'Only in loops',
        'Only in arrays'
      ],

      answer: 0,

      explanation:
        'Java supports multiple catch blocks.',
    },

    {
      question:
        'How many catch blocks execute at a time?',

      options: [
        'All',
        'Two',
        'One',
        'None'
      ],

      answer: 2,

      explanation:
        'Only one matching catch block executes.',
    },

    {
      question:
        'Which catch block should come first?',

      options: [
        'Generic exception',
        'Specific exception',
        'finally',
        'main'
      ],

      answer: 1,

      explanation:
        'Specific exceptions should come first.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'Why are multiple catch blocks useful?',

      answer:
        'They handle different exceptions separately and improve debugging.',
    },

    {
      question:
        'Why should specific exceptions come before generic exceptions?',

      answer:
        'Because parent exception would otherwise handle child exceptions first and cause compile-time errors.',
    },
  ],

  nextTopic: 'java-nested-try',
},

{
  id: 'java-nested-try',

  title: 'Java Nested try',

  slug: 'java-nested-try',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '22 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java Nested try deeply including nested exception handling, execution flow, inner try blocks, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'],

  sections: [
    {
      heading: 'Java Nested try',

      content: `
• Introduction to Nested try

• Inner try Block

• Outer try Block

• Exception Flow

• Multiple Levels

• Real-World Usage

• Advantages

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Nested try',

      content: `
Nested try means:

• A try block inside another try block

Used for handling exceptions separately at different levels.
`.trim(),
    },

    {
      heading: 'Inner try Block',

      content: `
Inner try handles specific risky operations.

If inner catch handles exception:

• Outer try continues execution
`.trim(),
    },

    {
      heading: 'Outer try Block',

      content: `
Outer try block handles exceptions not managed by inner try block.

Provides additional safety layer.
`.trim(),
    },

    {
      heading: 'Exception Flow in Nested try',

      content: `
Flow:

1. Inner try executes
2. Matching inner catch executes
3. If not handled, outer catch executes

Exception propagates outward.
`.trim(),
    },

    {
      heading: 'Advantages of Nested try',

      content: `
• Better control
• Separate handling
• Improved readability
• Layered protection
`.trim(),
    },

    {
      heading: 'Important Points About Nested try',

      content: `
• try block can exist inside another try block
• Exceptions move outward if not handled
• Inner try handles local exceptions
• Outer try provides backup handling

Common Beginner Mistakes:

• Confusing control flow
• Overusing nested try blocks
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Nested try Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        try {

            try {

                int result = 10 / 0;

            }

            catch(ArithmeticException e) {

                System.out.println("Inner catch block");

            }

        }

        catch(Exception e) {

            System.out.println("Outer catch block");

        }

    }

}`,

      output: 'Inner catch block',
    },
  ],

  mcqs: [
    {
      question:
        'What is nested try?',

      options: [
        'Loop inside loop',
        'try inside another try',
        'Class inside class',
        'Method inside method'
      ],

      answer: 1,

      explanation:
        'Nested try means try block inside another try block.',
    },

    {
      question:
        'If inner catch handles exception then?', 

      options: [
        'Program crashes',
        'Outer catch always runs',
        'Execution continues normally',
        'Compiler stops'
      ],

      answer: 2,

      explanation:
        'Handled exceptions allow normal execution.',
    },

    {
      question:
        'Unhandled exceptions move to?', 

      options: [
        'Loop',
        'Array',
        'Outer catch block',
        'Package'
      ],

      answer: 2,

      explanation:
        'Unhandled exceptions propagate outward.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'Why is nested try used in Java?',

      answer:
        'Nested try provides separate exception handling at multiple levels.',
    },

    {
      question:
        'What happens if inner try does not handle exception?',

      answer:
        'Exception propagates to outer catch block.',
    },
  ],

  nextTopic: 'java-finally-block',
},

{
  id: 'java-finally-block',

  title: 'Java Finally Block',

  slug: 'java-finally-block',

  image:
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd',

  readTime: '24 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java Finally Block deeply including cleanup code, execution flow, resource management, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'IBM'],

  sections: [
    {
      heading: 'Java Finally Block',

      content: `
• Introduction to finally Block

• Cleanup Code

• Execution Flow

• Resource Management

• File Closing

• Database Connection Closing

• Advantages

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to finally Block',

      content: `
finally block always executes whether exception occurs or not.

Used for:

• Cleanup tasks
• Resource release
• Closing connections
`.trim(),
    },

    {
      heading: 'Purpose of finally Block',

      content: `
finally ensures important code executes in all situations.

Examples:

• Closing files
• Closing database connections
• Releasing memory
`.trim(),
    },

    {
      heading: 'Execution Flow',

      content: `
Flow:

1. try block executes
2. catch block executes if exception occurs
3. finally block always executes
`.trim(),
    },

    {
      heading: 'Resource Management',

      content: `
finally block helps prevent resource leaks.

Very important for:

• File handling
• Networking
• Database operations
`.trim(),
    },

    {
      heading: 'Advantages of finally Block',

      content: `
• Ensures cleanup
• Improves reliability
• Prevents resource leaks
• Maintains program stability
`.trim(),
    },

    {
      heading: 'Important Points About finally Block',

      content: `
• finally executes almost always
• Used for cleanup operations
• Works with try-catch
• Improves resource management

Common Beginner Mistakes:

• Writing important cleanup outside finally
• Confusing finally with final keyword
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'finally Block Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        try {

            int result = 10 / 0;

        }

        catch(ArithmeticException e) {

            System.out.println("Exception handled");

        }

        finally {

            System.out.println("Finally block executed");

        }

    }

}`,

      output: `Exception handled
Finally block executed`,
    },
  ],

  mcqs: [
    {
      question:
        'finally block mainly used for?', 

      options: [
        'Loops',
        'Cleanup tasks',
        'Inheritance',
        'Arrays'
      ],

      answer: 1,

      explanation:
        'finally block performs cleanup tasks.',
    },

    {
      question:
        'Does finally block always execute?',

      options: [
        'Yes',
        'No',
        'Only without exception',
        'Only inside loops'
      ],

      answer: 0,

      explanation:
        'finally block executes in almost all cases.',
    },

    {
      question:
        'Which task is commonly performed in finally block?',

      options: [
        'Array sorting',
        'Object creation',
        'Closing resources',
        'Loop execution'
      ],

      answer: 2,

      explanation:
        'finally block commonly closes resources.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'Why is finally block important in Java?',

      answer:
        'finally ensures cleanup code executes and prevents resource leaks.',
    },

    {
      question:
        'Can finally block execute without catch block?',

      answer:
        'Yes, finally can work directly with try block without catch.',
    },
  ],

  nextTopic: 'java-throw-keyword',
},
{
  id: 'java-throw-keyword',

  title: 'Java Throw Keyword',

  slug: 'java-throw-keyword',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '24 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java throw keyword deeply including manual exception creation, custom error handling, exception objects, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Accenture'],

  sections: [
    {
      heading: 'Java Throw Keyword',

      content: `
• Introduction to throw

• Manual Exception Creation

• Exception Objects

• Runtime Exception Throwing

• Validation Handling

• Custom Error Messages

• Real-World Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to throw Keyword',

      content: `
throw keyword is used to manually generate an exception.

Purpose:

• Create exceptions intentionally
• Handle invalid conditions
• Improve validation
`.trim(),
    },

    {
      heading: 'Syntax of throw',

      content: `
Syntax:

throw new ExceptionType("Message");

Example:

throw new ArithmeticException("Invalid division");
`.trim(),
    },

    {
      heading: 'How throw Works',

      content: `
When throw executes:

• Exception object is created
• Normal flow stops
• Control moves to matching catch block
`.trim(),
    },

    {
      heading: 'Using throw for Validation',

      content: `
throw is commonly used for validation.

Examples:

• Age validation
• Password validation
• Input checking
• Business rules
`.trim(),
    },

    {
      heading: 'Advantages of throw',

      content: `
• Better control over errors
• Custom error handling
• Improved validation
• Cleaner business logic
`.trim(),
    },

    {
      heading: 'Important Points About throw',

      content: `
• throw manually generates exception
• Only one exception object is thrown at a time
• Control moves to catch block
• Useful for validations

Common Beginner Mistakes:

• Forgetting exception object
• Using throw without handling exception
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'throw Keyword Example',

      language: 'java',

      code: `public class Main {

    public static void validateAge(int age) {

        if(age < 18) {

            throw new ArithmeticException(
                "Not eligible to vote"
            );

        }

        else {

            System.out.println("Eligible to vote");

        }

    }

    public static void main(String[] args) {

        validateAge(15);

    }

}`,

      output: 'ArithmeticException: Not eligible to vote',
    },
  ],

  mcqs: [
    {
      question:
        'Which keyword manually generates exception?',

      options: [
        'throws',
        'catch',
        'throw',
        'final'
      ],

      answer: 2,

      explanation:
        'throw keyword manually creates exceptions.',
    },

    {
      question:
        'throw keyword requires?', 

      options: [
        'Loop',
        'Exception object',
        'Array',
        'Package'
      ],

      answer: 1,

      explanation:
        'throw requires exception object.',
    },

    {
      question:
        'What happens after throw executes?',

      options: [
        'Loop starts',
        'Program ignores exception',
        'Control moves to catch block',
        'Compiler stops'
      ],

      answer: 2,

      explanation:
        'Execution transfers to matching catch block.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'Why is throw keyword used in Java?',

      answer:
        'throw keyword is used to manually generate exceptions for validation and custom error handling.',
    },

    {
      question:
        'Can throw create custom exceptions?',

      answer:
        'Yes, throw can generate both predefined and custom exceptions.',
    },
  ],

  nextTopic: 'java-exception-propagation',
},

{
  id: 'java-exception-propagation',

  title: 'Java Exception Propagation',

  slug: 'java-exception-propagation',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '26 min read',

  difficulty: 'Advanced',

  description:
    'Learn Java Exception Propagation deeply including method call stack, runtime propagation, handling flow, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Cognizant'],

  sections: [
    {
      heading: 'Java Exception Propagation',

      content: `
• Introduction to Exception Propagation

• Method Call Stack

• Propagation Flow

• Runtime Exceptions

• Handling Mechanism

• Propagation Rules

• Real-World Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Exception Propagation',

      content: `
Exception propagation means:

• Exception moves from one method to another

If method cannot handle exception:

• It passes exception upward
`.trim(),
    },

    {
      heading: 'Method Call Stack',

      content: `
Java follows method call stack during propagation.

Example:

method1() → method2() → method3()

If method3 generates exception:

• Exception moves upward step-by-step
`.trim(),
    },

    {
      heading: 'Propagation Flow',

      content: `
Flow:

1. Exception occurs
2. Current method checks handling
3. If not handled, propagates upward
4. Matching catch block handles exception
`.trim(),
    },

    {
      heading: 'Runtime Exception Propagation',

      content: `
Unchecked exceptions propagate automatically.

Examples:

• ArithmeticException
• NullPointerException
• ArrayIndexOutOfBoundsException
`.trim(),
    },

    {
      heading: 'Advantages of Exception Propagation',

      content: `
• Centralized exception handling
• Cleaner code
• Better maintainability
• Flexible error management
`.trim(),
    },

    {
      heading: 'Important Points About Exception Propagation',

      content: `
• Exceptions move upward in call stack
• Runtime exceptions propagate automatically
• Matching catch block handles exception
• Unhandled exceptions terminate program

Common Beginner Mistakes:

• Ignoring propagation flow
• Confusing propagation with inheritance
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Exception Propagation Example',

      language: 'java',

      code: `public class Main {

    static void method3() {

        int result = 10 / 0;

    }

    static void method2() {

        method3();

    }

    static void method1() {

        try {

            method2();

        }

        catch(ArithmeticException e) {

            System.out.println("Exception handled");

        }

    }

    public static void main(String[] args) {

        method1();

    }

}`,

      output: 'Exception handled',
    },
  ],

  mcqs: [
    {
      question:
        'What is exception propagation?',

      options: [
        'Loop execution',
        'Exception moving between methods',
        'Class creation',
        'Array sorting'
      ],

      answer: 1,

      explanation:
        'Exception propagation means exception moving upward through methods.',
    },

    {
      question:
        'Exceptions propagate through?', 

      options: [
        'Package hierarchy',
        'Loop structure',
        'Method call stack',
        'Arrays'
      ],

      answer: 2,

      explanation:
        'Exceptions propagate through method call stack.',
    },

    {
      question:
        'Which exceptions propagate automatically?',

      options: [
        'Checked exceptions',
        'Unchecked exceptions',
        'Compiler errors',
        'Syntax errors'
      ],

      answer: 1,

      explanation:
        'Unchecked exceptions propagate automatically.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is exception propagation in Java?',

      answer:
        'Exception propagation is process where exception moves from one method to another until handled.',
    },

    {
      question:
        'Why is exception propagation useful?',

      answer:
        'It supports centralized exception handling and cleaner program structure.',
    },
  ],

  nextTopic: 'java-throws-keyword',
},

{
  id: 'java-throws-keyword',

  title: 'Java Throws Keyword',

  slug: 'java-throws-keyword',

  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',

  readTime: '24 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java throws keyword deeply including checked exceptions, declaration handling, propagation support, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'HCL'],

  sections: [
    {
      heading: 'Java Throws Keyword',

      content: `
• Introduction to throws

• Exception Declaration

• Checked Exceptions

• Propagation Support

• Method Signatures

• Multiple Exceptions

• Real-World Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to throws Keyword',

      content: `
throws keyword declares exceptions in method signature.

Purpose:

• Inform caller about possible exceptions
• Allow propagation
`.trim(),
    },

    {
      heading: 'Syntax of throws',

      content: `
Syntax:

returnType methodName() throws ExceptionType

Example:

void readFile() throws IOException
`.trim(),
    },

    {
      heading: 'Using throws with Checked Exceptions',

      content: `
throws is mainly used with checked exceptions.

Examples:

• IOException
• SQLException
• ClassNotFoundException
`.trim(),
    },

    {
      heading: 'Multiple Exceptions with throws',

      content: `
Java allows multiple exceptions.

Example:

throws IOException, SQLException

Useful for complex methods.
`.trim(),
    },

    {
      heading: 'Advantages of throws',

      content: `
• Cleaner method handling
• Supports propagation
• Better exception awareness
• Improves maintainability
`.trim(),
    },

    {
      heading: 'Important Points About throws',

      content: `
• throws declares exceptions
• Used in method signature
• Mainly used with checked exceptions
• Supports propagation

Common Beginner Mistakes:

• Confusing throw and throws
• Using throws without understanding propagation
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'throws Keyword Example',

      language: 'java',

      code: `import java.io.IOException;

public class Main {

    static void checkFile()
        throws IOException {

        throw new IOException(
            "File not found"
        );

    }

    public static void main(String[] args) {

        try {

            checkFile();

        }

        catch(IOException e) {

            System.out.println(e);

        }

    }

}`,

      output: 'java.io.IOException: File not found',
    },
  ],

  mcqs: [
    {
      question:
        'Which keyword declares exceptions in method signature?',

      options: [
        'throw',
        'throws',
        'catch',
        'final'
      ],

      answer: 1,

      explanation:
        'throws keyword declares exceptions.',
    },

    {
      question:
        'throws keyword is mainly used with?', 

      options: [
        'Loops',
        'Checked exceptions',
        'Arrays',
        'Packages'
      ],

      answer: 1,

      explanation:
        'throws mainly works with checked exceptions.',
    },

    {
      question:
        'Where is throws keyword written?',

      options: [
        'Inside loop',
        'Inside class',
        'Method signature',
        'Array block'
      ],

      answer: 2,

      explanation:
        'throws is written in method declaration.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'Why is throws keyword used in Java?',

      answer:
        'throws keyword declares exceptions and allows exception propagation.',
    },

    {
      question:
        'Can multiple exceptions be declared using throws?',

      answer:
        'Yes, Java allows multiple exceptions in throws declaration.',
    },
  ],

  nextTopic: 'java-throw-vs-throws',
},

{
  id: 'java-throw-vs-throws',

  title: 'Java Throw vs Throws',

  slug: 'java-throw-vs-throws',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '22 min read',

  difficulty: 'Intermediate',

  description:
    'Learn difference between throw and throws in Java deeply including syntax, usage, propagation, exception handling, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'],

  sections: [
    {
      heading: 'Java Throw vs Throws',

      content: `
• Introduction to throw

• Introduction to throws

• Syntax Difference

• Usage Difference

• Exception Handling Flow

• Propagation Support

• Real-World Comparison

• Interview Concepts
`,
    },

    {
      heading: 'throw Keyword',

      content: `
throw keyword manually creates exception.

Purpose:

• Generate exception object
• Trigger custom errors

Example:

throw new ArithmeticException();
`.trim(),
    },

    {
      heading: 'throws Keyword',

      content: `
throws keyword declares exception in method signature.

Purpose:

• Inform caller about exceptions
• Allow propagation

Example:

void test() throws IOException
`.trim(),
    },

    {
      heading: 'Main Difference Between throw and throws',

      content: `
throw:

• Used inside method
• Creates exception object
• Throws single exception

throws:

• Used in method signature
• Declares exceptions
• Can declare multiple exceptions
`.trim(),
    },

    {
      heading: 'Real-World Usage',

      content: `
throw is used for:

• Validation
• Business rules
• Manual error generation

throws is used for:

• Propagation
• Checked exception declaration
`.trim(),
    },

    {
      heading: 'Advantages of Understanding throw vs throws',

      content: `
• Better exception handling
• Cleaner code
• Easier debugging
• Improved program reliability
`.trim(),
    },

    {
      heading: 'Important Points About throw vs throws',

      content: `
• throw creates exception
• throws declares exception
• throw uses exception object
• throws supports propagation

Common Beginner Mistakes:

• Confusing spellings
• Using throw in method declaration
• Using throws inside method body
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'throw vs throws Example',

      language: 'java',

      code: `import java.io.IOException;

public class Main {

    static void check()
        throws IOException {

        throw new IOException(
            "Custom Exception"
        );

    }

    public static void main(String[] args) {

        try {

            check();

        }

        catch(IOException e) {

            System.out.println(e);

        }

    }

}`,

      output: 'java.io.IOException: Custom Exception',
    },
  ],

  mcqs: [
    {
      question:
        'Which keyword manually creates exception?',

      options: [
        'throws',
        'throw',
        'catch',
        'final'
      ],

      answer: 1,

      explanation:
        'throw manually generates exception.',
    },

    {
      question:
        'Which keyword declares exceptions in method signature?',

      options: [
        'throw',
        'throws',
        'try',
        'switch'
      ],

      answer: 1,

      explanation:
        'throws declares exceptions.',
    },

    {
      question:
        'Which keyword can declare multiple exceptions?',

      options: [
        'throw',
        'throws',
        'catch',
        'break'
      ],

      answer: 1,

      explanation:
        'throws can declare multiple exceptions.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is difference between throw and throws in Java?',

      answer:
        'throw manually creates exception while throws declares exceptions in method signature.',
    },

    {
      question:
        'Why are both throw and throws important?',

      answer:
        'throw helps create exceptions while throws supports propagation and checked exception handling.',
    },
  ],

  nextTopic: 'java-final-vs-finally-vs-finalize',
},
{
  id: 'java-final-vs-finally-vs-finalize',

  title: 'Final vs Finally vs Finalize in Java',

  slug: 'java-final-vs-finally-vs-finalize',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '30 min read',

  difficulty: 'Intermediate',

  description:
    'Learn difference between final, finally, and finalize in Java deeply including memory management, exception handling, inheritance control, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Accenture'],

  sections: [
    {
      heading: 'Final vs Finally vs Finalize in Java',

      content: `
• Introduction to final

• Introduction to finally

• Introduction to finalize()

• Main Differences

• Memory Management

• Exception Handling Usage

• Garbage Collection

• Real-World Usage

• Interview Concepts
`,
    },

    {
      heading: 'final Keyword',

      content: `
final keyword is used to restrict modification.

Uses of final:

• Final variable
• Final method
• Final class

Examples:

• Constant values
• Prevent method overriding
• Prevent inheritance
`.trim(),
    },

    {
      heading: 'finally Block',

      content: `
finally block is used in exception handling.

Purpose:

• Cleanup operations
• Closing resources
• Database cleanup

finally executes almost always.
`.trim(),
    },

    {
      heading: 'finalize() Method',

      content: `
finalize() method is called before garbage collection destroys object.

Purpose:

• Cleanup tasks before object removal

Belongs to Object class.
`.trim(),
    },

    {
      heading: 'Main Difference Between final, finally, and finalize',

      content: `
final:

• Keyword
• Restricts modification

finally:

• Block
• Used in exception handling

finalize():

• Method
• Used before garbage collection
`.trim(),
    },

    {
      heading: 'Real-World Usage',

      content: `
final is used for:

• Constants
• Security
• Immutable behavior

finally is used for:

• File closing
• Database cleanup

finalize() was used for:

• Memory cleanup
`.trim(),
    },

    {
      heading: 'Important Points About final, finally, and finalize',

      content: `
• final is keyword
• finally is exception block
• finalize() is method
• All three are completely different concepts

Common Beginner Mistakes:

• Confusing final with finally
• Thinking finalize() handles exceptions
• Misunderstanding garbage collection
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'final vs finally Example',

      language: 'java',

      code: `final class Demo {

    final int value = 100;

}

public class Main {

    public static void main(String[] args) {

        try {

            System.out.println("Try block");

        }

        finally {

            System.out.println("Finally block");

        }

    }

}`,

      output: `Try block
Finally block`,
    },
  ],

  mcqs: [
    {
      question:
        'Which is used for cleanup operations in exception handling?',

      options: [
        'final',
        'finally',
        'finalize()',
        'throw'
      ],

      answer: 1,

      explanation:
        'finally block handles cleanup operations.',
    },

    {
      question:
        'Which belongs to Object class?',

      options: [
        'final',
        'finally',
        'finalize()',
        'catch'
      ],

      answer: 2,

      explanation:
        'finalize() method belongs to Object class.',
    },

    {
      question:
        'Which keyword prevents inheritance?',

      options: [
        'final',
        'finally',
        'finalize()',
        'throws'
      ],

      answer: 0,

      explanation:
        'final keyword prevents inheritance.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is difference between final, finally, and finalize?',

      answer:
        'final restricts modification, finally handles cleanup in exception handling, and finalize() executes before garbage collection.',
    },

    {
      question:
        'Why is finally block important?',

      answer:
        'finally ensures cleanup code executes even when exception occurs.',
    },
  ],

  nextTopic: 'java-method-overriding-exception-handling',
},

{
  id: 'java-method-overriding-exception-handling',

  title: 'Exception Handling with Method Overriding',

  slug: 'java-method-overriding-exception-handling',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '28 min read',

  difficulty: 'Advanced',

  description:
    'Learn Exception Handling with Method Overriding deeply including checked exceptions, overriding rules, runtime exceptions, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Cognizant'],

  sections: [
    {
      heading: 'Exception Handling with Method Overriding',

      content: `
• Introduction to Overriding Rules

• Checked Exception Rules

• Unchecked Exception Rules

• Parent and Child Methods

• Compile-Time Restrictions

• Runtime Exceptions

• Real-World Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Exception Rules in Overriding',

      content: `
Java applies special rules when exceptions are used in method overriding.

Goal:

• Maintain polymorphism safely
• Avoid unexpected exceptions
`.trim(),
    },

    {
      heading: 'Checked Exception Rules',

      content: `
Child overriding method:

• Cannot throw broader checked exception
• Can throw same exception
• Can throw child exception

Important rule in interviews.
`.trim(),
    },

    {
      heading: 'Unchecked Exception Rules',

      content: `
Unchecked exceptions have fewer restrictions.

Child method can:

• Throw runtime exceptions freely
`.trim(),
    },

    {
      heading: 'Why Restrictions Exist',

      content: `
Restrictions improve reliability.

Benefits:

• Safer polymorphism
• Predictable behavior
• Better exception handling
`.trim(),
    },

    {
      heading: 'Advantages of Understanding Overriding Rules',

      content: `
• Prevents compile-time errors
• Improves code safety
• Better inheritance design
• Important for interviews
`.trim(),
    },

    {
      heading: 'Important Points About Exception Handling with Overriding',

      content: `
• Checked exceptions follow strict rules
• Runtime exceptions are flexible
• Child method cannot broaden checked exception
• Polymorphism safety is maintained

Common Beginner Mistakes:

• Throwing broader checked exceptions
• Confusing checked and unchecked exceptions
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Method Overriding Exception Example',

      language: 'java',

      code: `import java.io.IOException;

class Parent {

    void display() throws IOException {

        System.out.println("Parent method");

    }

}

class Child extends Parent {

    @Override
    void display() throws IOException {

        System.out.println("Child method");

    }

}

public class Main {

    public static void main(String[] args)
        throws IOException {

        Child c = new Child();

        c.display();

    }

}`,

      output: 'Child method',
    },
  ],

  mcqs: [
    {
      question:
        'Can child method throw broader checked exception?',

      options: [
        'Yes',
        'No',
        'Only in loops',
        'Only in arrays'
      ],

      answer: 1,

      explanation:
        'Child method cannot throw broader checked exception.',
    },

    {
      question:
        'Which exceptions have fewer restrictions in overriding?',

      options: [
        'Checked exceptions',
        'Unchecked exceptions',
        'Compile-time errors',
        'Syntax errors'
      ],

      answer: 1,

      explanation:
        'Unchecked exceptions are more flexible.',
    },

    {
      question:
        'Why are exception rules important in overriding?',

      options: [
        'For loops',
        'For polymorphism safety',
        'For arrays',
        'For packages'
      ],

      answer: 1,

      explanation:
        'Rules maintain safe polymorphism.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What are exception handling rules in method overriding?',

      answer:
        'Child method cannot throw broader checked exception but can throw same or child exception.',
    },

    {
      question:
        'Why are checked exceptions restricted in overriding?',

      answer:
        'Restrictions ensure safe polymorphism and predictable exception handling.',
    },
  ],

  nextTopic: 'java-custom-exception',
},

{
  id: 'java-custom-exception',

  title: 'Custom Exception in Java',

  slug: 'java-custom-exception',

  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',

  readTime: '26 min read',

  difficulty: 'Advanced',

  description:
    'Learn Custom Exception in Java deeply including user-defined exceptions, validation logic, constructors, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'HCL'],

  sections: [
    {
      heading: 'Custom Exception in Java',

      content: `
• Introduction to Custom Exceptions

• User-Defined Exceptions

• Extending Exception Class

• Validation Logic

• Constructor Usage

• Business Rule Handling

• Real-World Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Custom Exceptions',

      content: `
Custom exceptions are user-defined exceptions.

Purpose:

• Handle application-specific problems
• Create meaningful error messages
`.trim(),
    },

    {
      heading: 'Creating Custom Exception',

      content: `
Custom exception class usually extends:

• Exception
or
• RuntimeException

Example:

class InvalidAgeException extends Exception
`.trim(),
    },

    {
      heading: 'Why Custom Exceptions are Important',

      content: `
Benefits:

• Better readability
• Better debugging
• Domain-specific handling
• Cleaner business logic
`.trim(),
    },

    {
      heading: 'Using Constructors in Custom Exceptions',

      content: `
Constructors pass custom messages.

Example:

super("Invalid age");
`.trim(),
    },

    {
      heading: 'Real-World Usage',

      content: `
Custom exceptions are used in:

• Banking systems
• Authentication systems
• Payment systems
• Validation systems
`.trim(),
    },

    {
      heading: 'Important Points About Custom Exceptions',

      content: `
• User creates custom exception classes
• Extends Exception or RuntimeException
• Improves readability
• Helpful in business applications

Common Beginner Mistakes:

• Not extending Exception class
• Using generic exception instead of custom exception
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Custom Exception Example',

      language: 'java',

      code: `class InvalidAgeException
    extends Exception {

    InvalidAgeException(String message) {

        super(message);

    }

}

public class Main {

    static void checkAge(int age)
        throws InvalidAgeException {

        if(age < 18) {

            throw new InvalidAgeException(
                "Age is too small"
            );

        }

        else {

            System.out.println("Valid age");

        }

    }

    public static void main(String[] args) {

        try {

            checkAge(15);

        }

        catch(InvalidAgeException e) {

            System.out.println(e.getMessage());

        }

    }

}`,

      output: 'Age is too small',
    },
  ],

  mcqs: [
    {
      question:
        'Custom exceptions are also called?', 

      options: [
        'Compiler exceptions',
        'User-defined exceptions',
        'Package exceptions',
        'Loop exceptions'
      ],

      answer: 1,

      explanation:
        'Custom exceptions are user-defined exceptions.',
    },

    {
      question:
        'Which class is commonly extended for checked custom exceptions?',

      options: [
        'Object',
        'Scanner',
        'Exception',
        'Math'
      ],

      answer: 2,

      explanation:
        'Checked custom exceptions extend Exception class.',
    },

    {
      question:
        'Why are custom exceptions useful?',

      options: [
        'For loops',
        'For business-specific handling',
        'For arrays',
        'For inheritance only'
      ],

      answer: 1,

      explanation:
        'Custom exceptions improve business logic handling.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is custom exception in Java?',

      answer:
        'Custom exception is user-defined exception created for application-specific error handling.',
    },

    {
      question:
        'Why should developers use custom exceptions?',

      answer:
        'Custom exceptions improve readability, debugging, and domain-specific error handling.',
    },
  ],

  nextTopic: 'java-try-with-resources',
},

{
  id: 'java-try-with-resources',

  title: 'Try-with-Resources in Java',

  slug: 'java-try-with-resources',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '24 min read',

  difficulty: 'Advanced',

  description:
    'Learn Try-with-Resources in Java deeply including automatic resource management, AutoCloseable, file handling, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'],

  sections: [
    {
      heading: 'Try-with-Resources in Java',

      content: `
• Introduction to Try-with-Resources

• Automatic Resource Management

• AutoCloseable Interface

• File Handling

• Database Connections

• Resource Cleanup

• Advantages

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Try-with-Resources',

      content: `
Try-with-resources automatically closes resources.

Introduced in:

• Java 7

Reduces manual cleanup code.
`.trim(),
    },

    {
      heading: 'Automatic Resource Management',

      content: `
Resources declared inside try block are automatically closed.

Examples:

• Files
• Streams
• Database connections
`.trim(),
    },

    {
      heading: 'AutoCloseable Interface',

      content: `
Resources must implement:

• AutoCloseable interface

Java automatically calls close() method.
`.trim(),
    },

    {
      heading: 'Advantages of Try-with-Resources',

      content: `
• Cleaner code
• Automatic cleanup
• Prevents resource leaks
• Better reliability
`.trim(),
    },

    {
      heading: 'Real-World Usage',

      content: `
Used heavily in:

• File handling
• JDBC
• Networking
• Stream processing
`.trim(),
    },

    {
      heading: 'Important Points About Try-with-Resources',

      content: `
• Introduced in Java 7
• Automatically closes resources
• Works with AutoCloseable
• Reduces finally block usage

Common Beginner Mistakes:

• Forgetting AutoCloseable requirement
• Using resources outside try block
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Try-with-Resources Example',

      language: 'java',

      code: `import java.io.BufferedReader;
import java.io.FileReader;

public class Main {

    public static void main(String[] args) {

        try(
            BufferedReader br =
                new BufferedReader(
                    new FileReader("test.txt")
                )
        ) {

            System.out.println(
                br.readLine()
            );

        }

        catch(Exception e) {

            System.out.println(e);

        }

    }

}`,

      output: 'First line from file',
    },
  ],

  mcqs: [
    {
      question:
        'Try-with-resources was introduced in?', 

      options: [
        'Java 5',
        'Java 6',
        'Java 7',
        'Java 8'
      ],

      answer: 2,

      explanation:
        'Try-with-resources was introduced in Java 7.',
    },

    {
      question:
        'Which interface enables automatic resource closing?',

      options: [
        'Runnable',
        'Serializable',
        'AutoCloseable',
        'Cloneable'
      ],

      answer: 2,

      explanation:
        'AutoCloseable supports automatic resource cleanup.',
    },

    {
      question:
        'Main advantage of try-with-resources?', 

      options: [
        'Loop execution',
        'Automatic resource cleanup',
        'Array sorting',
        'Inheritance'
      ],

      answer: 1,

      explanation:
        'It automatically closes resources.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is try-with-resources in Java?',

      answer:
        'Try-with-resources automatically closes resources and prevents resource leaks.',
    },

    {
      question:
        'Why is try-with-resources preferred over finally block?',

      answer:
        'It reduces boilerplate code and ensures automatic resource cleanup.',
    },
  ],

  nextTopic: 'java-inner-class',
},
{
  id: 'java-inner-class',

  title: 'Java Inner Class',

  slug: 'java-inner-class',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '26 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java Inner Class deeply including nested classes, object creation, access to outer members, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Accenture'],

  sections: [
    {
      heading: 'Java Inner Class',

      content: `
• Introduction to Inner Class

• Types of Inner Classes

• Accessing Outer Class Members

• Object Creation

• Nested Class Concept

• Advantages of Inner Classes

• Real-World Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Inner Class',

      content: `
A class declared inside another class is called inner class.

Also known as:

• Nested class

Inner classes help organize related code together.
`.trim(),
    },

    {
      heading: 'Types of Inner Classes',

      content: `
Main types of inner classes:

• Member Inner class
• Anonymous Inner class
• Local Inner class
• Static Nested class
`.trim(),
    },

    {
      heading: 'Accessing Outer Class Members',

      content: `
Inner class can directly access outer class members.

Including:

• Private variables
• Methods
• Constructors
`.trim(),
    },

    {
      heading: 'Why Inner Classes are Useful',

      content: `
Benefits:

• Better encapsulation
• Cleaner code organization
• Logical grouping
• Improved readability
`.trim(),
    },

    {
      heading: 'Real-World Usage of Inner Classes',

      content: `
Inner classes are heavily used in:

• GUI programming
• Event handling
• Callbacks
• Framework development
`.trim(),
    },

    {
      heading: 'Important Points About Inner Classes',

      content: `
• Inner class exists inside outer class
• Inner class can access private members
• Helps logical grouping
• Improves maintainability

Common Beginner Mistakes:

• Incorrect object creation syntax
• Confusing inner and nested classes
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Inner Class Example',

      language: 'java',

      code: `class Outer {

    int number = 100;

    class Inner {

        void display() {

            System.out.println(
                "Number: " + number
            );

        }

    }

}

public class Main {

    public static void main(String[] args) {

        Outer obj = new Outer();

        Outer.Inner in = obj.new Inner();

        in.display();

    }

}`,

      output: 'Number: 100',
    },
  ],

  mcqs: [
    {
      question:
        'What is inner class in Java?',

      options: [
        'Class inside method',
        'Class inside another class',
        'Method inside class',
        'Loop inside class'
      ],

      answer: 1,

      explanation:
        'Inner class is class declared inside another class.',
    },

    {
      question:
        'Inner class can access outer class private members?',

      options: [
        'Yes',
        'No',
        'Only static members',
        'Only constructors'
      ],

      answer: 0,

      explanation:
        'Inner class can access private members of outer class.',
    },

    {
      question:
        'Inner classes improve?', 

      options: [
        'Loop execution',
        'Code organization',
        'Array sorting',
        'Compilation speed'
      ],

      answer: 1,

      explanation:
        'Inner classes improve logical code organization.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is inner class in Java?',

      answer:
        'Inner class is class declared inside another class used for better encapsulation and logical grouping.',
    },

    {
      question:
        'Why are inner classes useful?',

      answer:
        'Inner classes improve readability, encapsulation, and organization of related code.',
    },
  ],

  nextTopic: 'java-member-inner-class',
},

{
  id: 'java-member-inner-class',

  title: 'Member Inner class in Java',

  slug: 'java-member-inner-class',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '24 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Member Inner class in Java deeply including syntax, object creation, outer class access, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Cognizant'],

  sections: [
    {
      heading: 'Member Inner class in Java',

      content: `
• Introduction to Member Inner class

• Syntax

• Accessing Outer Members

• Object Creation

• Benefits

• Real-World Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Member Inner class',

      content: `
Member Inner class is non-static class declared directly inside outer class.

It behaves like:

• Member of outer class
`.trim(),
    },

    {
      heading: 'Accessing Outer Class Members',

      content: `
Member inner class can directly access:

• Private variables
• Methods
• Constructors

Without object reference.
`.trim(),
    },

    {
      heading: 'Object Creation',

      content: `
To create member inner class object:

1. Create outer class object
2. Create inner class object

Syntax:

Outer.Inner obj = outer.new Inner();
`.trim(),
    },

    {
      heading: 'Advantages of Member Inner class',

      content: `
• Better encapsulation
• Cleaner code structure
• Logical grouping
• Improved readability
`.trim(),
    },

    {
      heading: 'Real-World Usage',

      content: `
Used in:

• GUI applications
• Event handling
• Frameworks
• Helper classes
`.trim(),
    },

    {
      heading: 'Important Points About Member Inner class',

      content: `
• Member inner class is non-static
• Requires outer object
• Can access private members
• Acts like regular member

Common Beginner Mistakes:

• Forgetting outer object creation
• Wrong syntax for inner object
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Member Inner class Example',

      language: 'java',

      code: `class College {

    private String name = "ABC College";

    class Student {

        void show() {

            System.out.println(name);

        }

    }

}

public class Main {

    public static void main(String[] args) {

        College c = new College();

        College.Student s =
            c.new Student();

        s.show();

    }

}`,

      output: 'ABC College',
    },
  ],

  mcqs: [
    {
      question:
        'Member inner class is?', 

      options: [
        'Static class',
        'Non-static class',
        'Abstract class',
        'Final class'
      ],

      answer: 1,

      explanation:
        'Member inner class is non-static.',
    },

    {
      question:
        'What is required to create member inner class object?',

      options: [
        'Loop',
        'Array',
        'Outer class object',
        'Package'
      ],

      answer: 2,

      explanation:
        'Outer class object is required.',
    },

    {
      question:
        'Member inner class can access private members?',

      options: [
        'No',
        'Only methods',
        'Yes',
        'Only variables'
      ],

      answer: 2,

      explanation:
        'Member inner class can access private members.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is member inner class in Java?',

      answer:
        'Member inner class is non-static class declared inside outer class.',
    },

    {
      question:
        'Why does member inner class require outer object?',

      answer:
        'Because it is non-static and linked with outer class instance.',
    },
  ],

  nextTopic: 'java-anonymous-inner-class',
},

{
  id: 'java-anonymous-inner-class',

  title: 'Anonymous Inner class in Java',

  slug: 'java-anonymous-inner-class',

  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',

  readTime: '28 min read',

  difficulty: 'Advanced',

  description:
    'Learn Anonymous Inner class in Java deeply including syntax, object creation, event handling, interfaces, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'HCL'],

  sections: [
    {
      heading: 'Anonymous Inner class in Java',

      content: `
• Introduction to Anonymous Inner class

• Syntax

• One-Time Object Usage

• Interface Implementation

• Event Handling

• Advantages

• Real-World Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Anonymous Inner class',

      content: `
Anonymous inner class is inner class without name.

Used when:

• Class is required only once
• Temporary implementation is needed
`.trim(),
    },

    {
      heading: 'Features of Anonymous Inner class',

      content: `
Features:

• No class name
• One-time use
• Shorter syntax
• Quick implementation
`.trim(),
    },

    {
      heading: 'Anonymous Class with Interface',

      content: `
Anonymous inner class commonly implements interfaces.

Useful for:

• Event handling
• Callback methods
• GUI programming
`.trim(),
    },

    {
      heading: 'Advantages of Anonymous Inner class',

      content: `
• Reduces extra class creation
• Cleaner code
• Faster implementation
• Useful for small tasks
`.trim(),
    },

    {
      heading: 'Real-World Usage',

      content: `
Used heavily in:

• Swing event handling
• Android listeners
• Thread creation
• Framework callbacks
`.trim(),
    },

    {
      heading: 'Important Points About Anonymous Inner class',

      content: `
• Anonymous class has no name
• Used for one-time implementation
• Frequently used with interfaces
• Improves compactness

Common Beginner Mistakes:

• Overusing anonymous classes
• Writing large logic inside anonymous class
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Anonymous Inner class Example',

      language: 'java',

      code: `abstract class Animal {

    abstract void sound();

}

public class Main {

    public static void main(String[] args) {

        Animal a = new Animal() {

            void sound() {

                System.out.println("Dog barks");

            }

        };

        a.sound();

    }

}`,

      output: 'Dog barks',
    },
  ],

  mcqs: [
    {
      question:
        'Anonymous inner class has?', 

      options: [
        'Package',
        'No name',
        'Multiple names',
        'No methods'
      ],

      answer: 1,

      explanation:
        'Anonymous inner class has no name.',
    },

    {
      question:
        'Anonymous inner class is mostly used for?', 

      options: [
        'One-time implementation',
        'Database storage',
        'Array sorting',
        'Package creation'
      ],

      answer: 0,

      explanation:
        'Anonymous classes are used for one-time implementation.',
    },

    {
      question:
        'Anonymous inner class commonly works with?', 

      options: [
        'Interfaces',
        'Arrays',
        'Loops',
        'Packages'
      ],

      answer: 0,

      explanation:
        'Anonymous inner classes are commonly used with interfaces.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is anonymous inner class in Java?',

      answer:
        'Anonymous inner class is unnamed inner class used for one-time implementation.',
    },

    {
      question:
        'Why are anonymous inner classes useful?',

      answer:
        'They reduce extra class creation and simplify temporary implementations.',
    },
  ],

  nextTopic: 'java-local-inner-class',
},
{
  id: 'java-local-inner-class',

  title: 'Local Inner class in Java',

  slug: 'java-local-inner-class',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '24 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Local Inner class in Java deeply including local scope, method access, variable rules, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Accenture'],

  sections: [
    {
      heading: 'Local Inner class in Java',

      content: `
• Introduction to Local Inner class

• Method Scope

• Accessing Local Variables

• Rules of Local Inner class

• Advantages

• Real-World Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Local Inner class',

      content: `
A class declared inside a method is called local inner class.

It exists only inside that method.
`.trim(),
    },

    {
      heading: 'Scope of Local Inner class',

      content: `
Local inner class can be accessed only:

• Inside the method where it is declared

Outside access is not allowed.
`.trim(),
    },

    {
      heading: 'Accessing Local Variables',

      content: `
Local inner class can access:

• Final local variables
• Effectively final variables

Very important interview concept.
`.trim(),
    },

    {
      heading: 'Advantages of Local Inner class',

      content: `
• Better encapsulation
• Restricts unnecessary access
• Cleaner method-specific logic
• Improves readability
`.trim(),
    },

    {
      heading: 'Real-World Usage',

      content: `
Used in:

• Temporary helper logic
• Event handling
• Callback implementations
• Internal processing
`.trim(),
    },

    {
      heading: 'Important Points About Local Inner class',

      content: `
• Declared inside method
• Accessible only within method
• Can access effectively final variables
• Useful for method-specific operations

Common Beginner Mistakes:

• Trying to access local inner class outside method
• Modifying captured local variables
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Local Inner class Example',

      language: 'java',

      code: `class Outer {

    void display() {

        int number = 50;

        class Inner {

            void show() {

                System.out.println(number);

            }

        }

        Inner i = new Inner();

        i.show();

    }

}

public class Main {

    public static void main(String[] args) {

        Outer o = new Outer();

        o.display();

    }

}`,

      output: '50',
    },
  ],

  mcqs: [
    {
      question:
        'Where is local inner class declared?',

      options: [
        'Inside package',
        'Inside method',
        'Inside interface',
        'Inside loop only'
      ],

      answer: 1,

      explanation:
        'Local inner class is declared inside method.',
    },

    {
      question:
        'Can local inner class access local variables?',

      options: [
        'No',
        'Only static variables',
        'Yes, effectively final variables',
        'Only arrays'
      ],

      answer: 2,

      explanation:
        'It can access effectively final variables.',
    },

    {
      question:
        'Scope of local inner class is?', 

      options: [
        'Entire package',
        'Entire project',
        'Specific method',
        'Entire JVM'
      ],

      answer: 2,

      explanation:
        'Local inner class exists only inside specific method.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is local inner class in Java?',

      answer:
        'Local inner class is class declared inside a method and accessible only within that method.',
    },

    {
      question:
        'Why are effectively final variables important in local inner classes?',

      answer:
        'Because local inner classes can only access local variables that are final or effectively final.',
    },
  ],

  nextTopic: 'java-static-nested-class',
},

{
  id: 'java-static-nested-class',

  title: 'Static Nested class in Java',

  slug: 'java-static-nested-class',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '26 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Static Nested class in Java deeply including static behavior, object creation, memory usage, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Cognizant'],

  sections: [
    {
      heading: 'Static Nested class in Java',

      content: `
• Introduction to Static Nested class

• Static Behavior

• Object Creation

• Access Rules

• Memory Benefits

• Advantages

• Real-World Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Static Nested class',

      content: `
A static class declared inside another class is called static nested class.

Unlike member inner class:

• It does not depend on outer object
`.trim(),
    },

    {
      heading: 'Object Creation',

      content: `
Static nested class object can be created directly.

Syntax:

Outer.Inner obj = new Outer.Inner();

No outer object required.
`.trim(),
    },

    {
      heading: 'Access Rules',

      content: `
Static nested class can access:

• Static members of outer class directly

For non-static members:

• Outer object is required
`.trim(),
    },

    {
      heading: 'Advantages of Static Nested class',

      content: `
• Better memory efficiency
• Cleaner grouping
• No dependency on outer object
• Improved performance
`.trim(),
    },

    {
      heading: 'Real-World Usage',

      content: `
Used in:

• Builder pattern
• Helper classes
• Utility classes
• Collections framework
`.trim(),
    },

    {
      heading: 'Important Points About Static Nested class',

      content: `
• Static nested class behaves like static member
• Does not require outer object
• Can directly access static members
• More memory efficient

Common Beginner Mistakes:

• Confusing with member inner class
• Trying to access non-static members directly
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Static Nested class Example',

      language: 'java',

      code: `class Outer {

    static int number = 100;

    static class Inner {

        void display() {

            System.out.println(number);

        }

    }

}

public class Main {

    public static void main(String[] args) {

        Outer.Inner obj =
            new Outer.Inner();

        obj.display();

    }

}`,

      output: '100',
    },
  ],

  mcqs: [
    {
      question:
        'Static nested class requires outer object?',

      options: [
        'Yes',
        'No',
        'Only in arrays',
        'Only in loops'
      ],

      answer: 1,

      explanation:
        'Static nested class does not require outer object.',
    },

    {
      question:
        'Static nested class can directly access?', 

      options: [
        'Non-static members only',
        'Static members',
        'Constructors only',
        'Arrays only'
      ],

      answer: 1,

      explanation:
        'It can directly access static members.',
    },

    {
      question:
        'Static nested class behaves like?', 

      options: [
        'Loop',
        'Method',
        'Static member',
        'Array'
      ],

      answer: 2,

      explanation:
        'Static nested class behaves like static member.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is static nested class in Java?',

      answer:
        'Static nested class is static class declared inside another class.',
    },

    {
      question:
        'Why is static nested class memory efficient?',

      answer:
        'Because it does not depend on outer class object creation.',
    },
  ],

  nextTopic: 'java-nested-interface',
},

{
  id: 'java-nested-interface',

  title: 'Nested Interface in Java',

  slug: 'java-nested-interface',

  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',

  readTime: '22 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Nested Interface in Java deeply including interface grouping, implementation, access rules, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'HCL'],

  sections: [
    {
      heading: 'Nested Interface in Java',

      content: `
• Introduction to Nested Interface

• Interface Inside Class

• Interface Inside Interface

• Access Rules

• Implementation

• Advantages

• Real-World Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Nested Interface',

      content: `
An interface declared inside another interface or class is called nested interface.

Used for:

• Better grouping
• Logical organization
`.trim(),
    },

    {
      heading: 'Types of Nested Interfaces',

      content: `
Nested interfaces can exist:

• Inside class
• Inside another interface
`.trim(),
    },

    {
      heading: 'Access Rules',

      content: `
Nested interfaces are:

• Public
• Static by default inside interfaces

Implementation depends on access modifiers.
`.trim(),
    },

    {
      heading: 'Advantages of Nested Interface',

      content: `
• Better code organization
• Logical grouping
• Improved readability
• Cleaner architecture
`.trim(),
    },

    {
      heading: 'Real-World Usage',

      content: `
Used in:

• Framework APIs
• Event handling systems
• Callback systems
• Library design
`.trim(),
    },

    {
      heading: 'Important Points About Nested Interface',

      content: `
• Interface can exist inside class or interface
• Helps logical grouping
• Nested interfaces improve structure
• Common in framework development

Common Beginner Mistakes:

• Confusing nested interface with inner class
• Ignoring access modifiers
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Nested Interface Example',

      language: 'java',

      code: `interface Outer {

    interface Inner {

        void show();

    }

}

class Demo implements Outer.Inner {

    public void show() {

        System.out.println(
            "Nested Interface"
        );

    }

}

public class Main {

    public static void main(String[] args) {

        Demo d = new Demo();

        d.show();

    }

}`,

      output: 'Nested Interface',
    },
  ],

  mcqs: [
    {
      question:
        'Nested interface is interface declared?', 

      options: [
        'Outside package',
        'Inside another class or interface',
        'Inside loop',
        'Inside array'
      ],

      answer: 1,

      explanation:
        'Nested interface exists inside another class or interface.',
    },

    {
      question:
        'Nested interfaces improve?', 

      options: [
        'Compilation speed',
        'Code organization',
        'Loop execution',
        'Garbage collection'
      ],

      answer: 1,

      explanation:
        'Nested interfaces improve organization.',
    },

    {
      question:
        'Nested interfaces are commonly used in?', 

      options: [
        'Games only',
        'Framework APIs',
        'Arrays only',
        'Loops only'
      ],

      answer: 1,

      explanation:
        'Nested interfaces are common in frameworks.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is nested interface in Java?',

      answer:
        'Nested interface is interface declared inside another class or interface.',
    },

    {
      question:
        'Why are nested interfaces useful?',

      answer:
        'Nested interfaces improve logical grouping and cleaner architecture.',
    },
  ],

  nextTopic: 'java-lambda-expression',
},

{
  id: 'java-inner-class-vs-static-nested-class',

  title: 'Inner Class vs Static Nested class in Java',

  slug: 'java-inner-class-vs-static-nested-class',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '25 min read',

  difficulty: 'Advanced',

  description:
    'Learn difference between Inner Class and Static Nested class in Java deeply including memory usage, object dependency, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'],

  sections: [
    {
      heading: 'Inner Class vs Static Nested class in Java',

      content: `
• Introduction

• Dependency on Outer Object

• Memory Usage

• Access Rules

• Object Creation

• Real-World Comparison

• Advantages

• Interview Concepts
`,
    },

    {
      heading: 'Inner Class',

      content: `
Inner class is non-static.

Features:

• Requires outer object
• Can access all members directly
• Linked with outer instance
`.trim(),
    },

    {
      heading: 'Static Nested class',

      content: `
Static nested class behaves like static member.

Features:

• No outer object required
• Directly accesses static members
• More memory efficient
`.trim(),
    },

    {
      heading: 'Main Differences',

      content: `
Inner class:

• Non-static
• Requires outer object

Static nested class:

• Static
• Independent from outer object
`.trim(),
    },

    {
      heading: 'Advantages of Understanding the Difference',

      content: `
• Better design decisions
• Improved performance
• Cleaner architecture
• Important for interviews
`.trim(),
    },

    {
      heading: 'Real-World Usage',

      content: `
Inner class used for:

• Tight coupling

Static nested class used for:

• Utility/helper classes
`.trim(),
    },

    {
      heading: 'Important Points About Inner vs Static Nested class',

      content: `
• Inner class depends on outer object
• Static nested class is independent
• Static nested class is memory efficient
• Both improve organization

Common Beginner Mistakes:

• Confusing creation syntax
• Incorrect member access
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Inner vs Static Nested class Example',

      language: 'java',

      code: `class Outer {

    class Inner {

        void show() {

            System.out.println(
                "Inner Class"
            );

        }

    }

    static class Nested {

        void display() {

            System.out.println(
                "Static Nested Class"
            );

        }

    }

}

public class Main {

    public static void main(String[] args) {

        Outer obj = new Outer();

        Outer.Inner i =
            obj.new Inner();

        i.show();

        Outer.Nested n =
            new Outer.Nested();

        n.display();

    }

}`,

      output: `Inner Class
Static Nested Class`,
    },
  ],

  mcqs: [
    {
      question:
        'Which class requires outer object?',

      options: [
        'Static nested class',
        'Inner class',
        'Interface',
        'Abstract class'
      ],

      answer: 1,

      explanation:
        'Inner class requires outer object.',
    },

    {
      question:
        'Which is more memory efficient?',

      options: [
        'Inner class',
        'Static nested class',
        'Anonymous class',
        'Interface'
      ],

      answer: 1,

      explanation:
        'Static nested class is more memory efficient.',
    },

    {
      question:
        'Static nested class directly accesses?', 

      options: [
        'Non-static members',
        'Static members',
        'Constructors only',
        'Arrays only'
      ],

      answer: 1,

      explanation:
        'It directly accesses static members.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is difference between inner class and static nested class?',

      answer:
        'Inner class depends on outer object while static nested class works independently.',
    },

    {
      question:
        'Why is static nested class preferred in some cases?',

      answer:
        'Because it is more memory efficient and independent from outer object.',
    },
  ],

  nextTopic: 'java-multithreading',
},
{
  id: 'java-multithreading',

  title: 'Multithreading in Java',

  slug: 'java-multithreading',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '36 min read',

  difficulty: 'Advanced',

  description:
    'Learn Multithreading in Java deeply including concurrent execution, threads, multitasking, performance improvement, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Accenture'],

  sections: [
    {
      heading: 'Multithreading in Java',

      content: `
• Introduction to Multithreading

• What is Thread

• Process vs Thread

• Advantages of Multithreading

• Concurrent Execution

• Real-World Usage

• Performance Improvement

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Multithreading',

      content: `
Multithreading allows Java to execute multiple tasks simultaneously.

Each task runs inside separate thread.

It improves:

• Performance
• CPU utilization
• Responsiveness
`.trim(),
    },

    {
      heading: 'What is Thread',

      content: `
A thread is lightweight sub-process.

Thread represents:

• Independent execution path

Multiple threads can run inside single program.
`.trim(),
    },

    {
      heading: 'Process vs Thread',

      content: `
Process:

• Independent program
• Heavyweight

Thread:

• Part of process
• Lightweight
• Shares memory with other threads
`.trim(),
    },

    {
      heading: 'Advantages of Multithreading',

      content: `
• Faster execution
• Better responsiveness
• Better CPU usage
• Parallel task execution
• Improved user experience
`.trim(),
    },

    {
      heading: 'Real-World Usage',

      content: `
Multithreading is used in:

• Games
• Web servers
• Banking systems
• Video streaming
• Chat applications
`.trim(),
    },

    {
      heading: 'Important Points About Multithreading',

      content: `
• Multiple threads run simultaneously
• Threads share process memory
• Improves performance
• Java provides built-in thread support

Common Beginner Mistakes:

• Confusing process and thread
• Ignoring thread synchronization
• Creating unnecessary threads
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Basic Multithreading Example',

      language: 'java',

      code: `class MyThread extends Thread {

    public void run() {

        System.out.println(
            "Thread is running"
        );

    }

}

public class Main {

    public static void main(String[] args) {

        MyThread t1 = new MyThread();

        t1.start();

    }

}`,

      output: 'Thread is running',
    },
  ],

  mcqs: [
    {
      question:
        'What is thread in Java?',

      options: [
        'Database',
        'Lightweight subprocess',
        'Compiler',
        'Package'
      ],

      answer: 1,

      explanation:
        'Thread is lightweight subprocess.',
    },

    {
      question:
        'Multithreading improves?', 

      options: [
        'Performance',
        'Syntax errors',
        'Compilation time only',
        'Variable names'
      ],

      answer: 0,

      explanation:
        'Multithreading improves performance.',
    },

    {
      question:
        'Threads inside same process share?', 

      options: [
        'Separate JVM',
        'Separate CPU',
        'Memory',
        'Different compiler'
      ],

      answer: 2,

      explanation:
        'Threads share process memory.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is multithreading in Java?',

      answer:
        'Multithreading is process of executing multiple threads simultaneously within a program.',
    },

    {
      question:
        'Why is multithreading important?',

      answer:
        'Multithreading improves performance, responsiveness, and efficient CPU utilization.',
    },
  ],

  nextTopic: 'java-thread-life-cycle',
},

{
  id: 'java-thread-life-cycle',

  title: 'Life Cycle of a Thread in Java',

  slug: 'java-thread-life-cycle',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '30 min read',

  difficulty: 'Advanced',

  description:
    'Learn Life Cycle of a Thread in Java deeply including thread states, transitions, execution flow, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Cognizant'],

  sections: [
    {
      heading: 'Life Cycle of a Thread in Java',

      content: `
• Introduction to Thread Life Cycle

• New State

• Runnable State

• Running State

• Blocked State

• Waiting State

• Terminated State

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Thread Life Cycle',

      content: `
A thread passes through multiple states during execution.

Java thread lifecycle defines:

• How thread behaves
• State transitions
• Execution flow
`.trim(),
    },

    {
      heading: 'New State',

      content: `
Thread object is created but thread is not started yet.

Example:

Thread t = new Thread();

Thread exists in memory only.
`.trim(),
    },

    {
      heading: 'Runnable State',

      content: `
After start() method call:

• Thread enters runnable state

Thread waits for CPU scheduling.
`.trim(),
    },

    {
      heading: 'Running State',

      content: `
Scheduler selects thread for execution.

Now thread:

• Executes run() method
`.trim(),
    },

    {
      heading: 'Blocked and Waiting State',

      content: `
Thread enters blocked/waiting state because of:

• sleep()
• wait()
• I/O operations
• Synchronization locks
`.trim(),
    },

    {
      heading: 'Terminated State',

      content: `
Thread enters terminated state after:

• run() method completes

Thread cannot restart again.
`.trim(),
    },

    {
      heading: 'Important Points About Thread Life Cycle',

      content: `
• Thread moves through multiple states
• start() moves thread to runnable state
• Scheduler controls execution
• Terminated thread cannot restart

Common Beginner Mistakes:

• Calling start() twice
• Confusing runnable and running state
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Thread Life Cycle Example',

      language: 'java',

      code: `class MyThread extends Thread {

    public void run() {

        System.out.println(
            "Running State"
        );

    }

}

public class Main {

    public static void main(String[] args) {

        MyThread t = new MyThread();

        System.out.println(t.getState());

        t.start();

    }

}`,

      output: `NEW
Running State`,
    },
  ],

  mcqs: [
    {
      question:
        'Which state occurs after thread object creation?',

      options: [
        'Running',
        'Blocked',
        'New',
        'Dead'
      ],

      answer: 2,

      explanation:
        'New state occurs after object creation.',
    },

    {
      question:
        'Which method moves thread to runnable state?',

      options: [
        'run()',
        'sleep()',
        'start()',
        'wait()'
      ],

      answer: 2,

      explanation:
        'start() moves thread to runnable state.',
    },

    {
      question:
        'Can terminated thread restart?',

      options: [
        'Yes',
        'No',
        'Only once',
        'Only using run()'
      ],

      answer: 1,

      explanation:
        'Terminated thread cannot restart.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What are main states in Java thread lifecycle?',

      answer:
        'Main states are New, Runnable, Running, Waiting/Blocked, and Terminated.',
    },

    {
      question:
        'Why is thread lifecycle important?',

      answer:
        'It helps developers understand thread execution and synchronization behavior.',
    },
  ],

  nextTopic: 'java-create-thread',
},

{
  id: 'java-create-thread',

  title: 'How to Create Thread in Java',

  slug: 'java-create-thread',

  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',

  readTime: '32 min read',

  difficulty: 'Intermediate',

  description:
    'Learn how to create Thread in Java deeply including Thread class, Runnable interface, start method, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'HCL'],

  sections: [
    {
      heading: 'How to Create Thread in Java',

      content: `
• Introduction to Thread Creation

• Using Thread Class

• Using Runnable Interface

• start() Method

• run() Method

• Advantages

• Real-World Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Thread Creation',

      content: `
Java provides multiple ways to create threads.

Most common approaches:

• Extending Thread class
• Implementing Runnable interface
`.trim(),
    },

    {
      heading: 'Creating Thread Using Thread Class',

      content: `
Steps:

1. Extend Thread class
2. Override run() method
3. Call start()

Simple but supports only single inheritance.
`.trim(),
    },

    {
      heading: 'Creating Thread Using Runnable Interface',

      content: `
Steps:

1. Implement Runnable interface
2. Override run()
3. Pass object to Thread class
4. Call start()

Preferred approach in real projects.
`.trim(),
    },

    {
      heading: 'Difference Between start() and run()',

      content: `
start():

• Creates new thread

run():

• Executes like normal method if called directly
`.trim(),
    },

    {
      heading: 'Advantages of Runnable Interface',

      content: `
• Better flexibility
• Supports multiple inheritance
• Cleaner architecture
• Preferred in enterprise applications
`.trim(),
    },

    {
      heading: 'Important Points About Thread Creation',

      content: `
• Thread class and Runnable are common approaches
• start() creates separate thread
• run() contains execution logic
• Runnable is preferred approach

Common Beginner Mistakes:

• Calling run() directly
• Forgetting start()
• Confusing Runnable and Thread class
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Thread Creation Using Runnable',

      language: 'java',

      code: `class MyThread implements Runnable {

    public void run() {

        System.out.println(
            "Thread using Runnable"
        );

    }

}

public class Main {

    public static void main(String[] args) {

        MyThread obj = new MyThread();

        Thread t = new Thread(obj);

        t.start();

    }

}`,

      output: 'Thread using Runnable',
    },
  ],

  mcqs: [
    {
      question:
        'Which interface is commonly used for thread creation?',

      options: [
        'Serializable',
        'Runnable',
        'Cloneable',
        'Comparable'
      ],

      answer: 1,

      explanation:
        'Runnable interface is commonly used.',
    },

    {
      question:
        'Which method starts new thread?',

      options: [
        'run()',
        'main()',
        'start()',
        'sleep()'
      ],

      answer: 2,

      explanation:
        'start() creates new thread.',
    },

    {
      question:
        'Which approach is preferred in real projects?',

      options: [
        'Runnable interface',
        'Thread class only',
        'Arrays',
        'Packages'
      ],

      answer: 0,

      explanation:
        'Runnable interface is preferred.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What are different ways to create thread in Java?',

      answer:
        'Threads can be created by extending Thread class or implementing Runnable interface.',
    },

    {
      question:
        'Why is Runnable preferred over Thread class?',

      answer:
        'Runnable supports better flexibility and multiple inheritance.',
    },
  ],

  nextTopic: 'java-thread-scheduler',
},

{
  id: 'java-thread-scheduler',

  title: 'Thread Scheduler in Java',

  slug: 'java-thread-scheduler',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '24 min read',

  difficulty: 'Advanced',

  description:
    'Learn Thread Scheduler in Java deeply including CPU scheduling, priorities, execution control, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'],

  sections: [
    {
      heading: 'Thread Scheduler in Java',

      content: `
• Introduction to Thread Scheduler

• CPU Scheduling

• Thread Priorities

• Scheduling Algorithms

• Time Slicing

• Context Switching

• Real-World Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Thread Scheduler',

      content: `
Thread scheduler decides:

• Which thread executes
• When thread executes
• How long thread executes
`.trim(),
    },

    {
      heading: 'CPU Scheduling',

      content: `
Multiple threads compete for CPU time.

Scheduler manages:

• Fair execution
• Performance
• Resource sharing
`.trim(),
    },

    {
      heading: 'Thread Priorities',

      content: `
Java provides thread priorities from:

1 to 10

Higher priority thread gets better scheduling chance.
`.trim(),
    },

    {
      heading: 'Time Slicing',

      content: `
Scheduler provides small CPU time slices to threads.

Benefits:

• Better responsiveness
• Parallel execution feeling
`.trim(),
    },

    {
      heading: 'Context Switching',

      content: `
CPU switches between threads rapidly.

This process is called:

• Context switching
`.trim(),
    },

    {
      heading: 'Important Points About Thread Scheduler',

      content: `
• Scheduler controls thread execution
• Thread priorities influence scheduling
• Scheduling behavior depends on JVM and OS
• Exact execution order is unpredictable

Common Beginner Mistakes:

• Assuming thread execution order
• Overusing priorities
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Thread Priority Example',

      language: 'java',

      code: `class MyThread extends Thread {

    public void run() {

        System.out.println(
            Thread.currentThread().getName()
        );

    }

}

public class Main {

    public static void main(String[] args) {

        MyThread t1 = new MyThread();

        MyThread t2 = new MyThread();

        t1.setPriority(8);

        t2.setPriority(3);

        t1.start();

        t2.start();

    }

}`,

      output: `Thread-0
Thread-1`,
    },
  ],

  mcqs: [
    {
      question:
        'Who controls thread execution in Java?',

      options: [
        'Compiler',
        'Thread Scheduler',
        'Array',
        'Package'
      ],

      answer: 1,

      explanation:
        'Thread scheduler controls execution.',
    },

    {
      question:
        'Thread priorities range from?', 

      options: [
        '1 to 5',
        '1 to 10',
        '0 to 100',
        '5 to 15'
      ],

      answer: 1,

      explanation:
        'Java thread priorities range from 1 to 10.',
    },

    {
      question:
        'Fast switching between threads is called?', 

      options: [
        'Compilation',
        'Context switching',
        'Garbage collection',
        'Synchronization'
      ],

      answer: 1,

      explanation:
        'Fast thread switching is context switching.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is thread scheduler in Java?',

      answer:
        'Thread scheduler controls CPU allocation and thread execution order.',
    },

    {
      question:
        'Why is thread execution order unpredictable?',

      answer:
        'Because scheduling depends on JVM implementation and operating system behavior.',
    },
  ],

  nextTopic: 'java-thread-sleep',
},

{
  id: 'java-thread-sleep',

  title: 'Sleeping a Thread in Java',

  slug: 'java-thread-sleep',

  image:
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd',

  readTime: '22 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Sleeping a Thread in Java deeply including sleep() method, delays, InterruptedException, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'IBM'],

  sections: [
    {
      heading: 'Sleeping a Thread in Java',

      content: `
• Introduction to sleep()

• Thread Delay

• InterruptedException

• Thread Pausing

• Timing Control

• Real-World Usage

• Advantages

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to sleep() Method',

      content: `
sleep() method pauses thread execution temporarily.

Thread remains inactive for specific time.
`.trim(),
    },

    {
      heading: 'Syntax of sleep()',

      content: `
Syntax:

Thread.sleep(milliseconds);

Example:

Thread.sleep(2000);

Pauses thread for 2 seconds.
`.trim(),
    },

    {
      heading: 'InterruptedException',

      content: `
sleep() may throw:

• InterruptedException

Therefore:

• Exception handling is required
`.trim(),
    },

    {
      heading: 'Why sleep() is Useful',

      content: `
Uses of sleep():

• Delays
• Animation timing
• Retry mechanisms
• Thread coordination
`.trim(),
    },

    {
      heading: 'Advantages of sleep()',

      content: `
• Controls execution timing
• Reduces CPU usage
• Helps synchronization
• Improves scheduling
`.trim(),
    },

    {
      heading: 'Important Points About sleep()',

      content: `
• sleep() pauses current thread
• Time is measured in milliseconds
• InterruptedException must be handled
• Thread does not lose locks automatically

Common Beginner Mistakes:

• Forgetting exception handling
• Assuming sleep() stops all threads
• Confusing sleep() with wait()
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'sleep() Method Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args)
        throws InterruptedException {

        for(int i = 1; i <= 3; i++) {

            System.out.println(i);

            Thread.sleep(1000);

        }

    }

}`,

      output: `1
2
3`,
    },
  ],

  mcqs: [
    {
      question:
        'Which method pauses thread temporarily?',

      options: [
        'wait()',
        'sleep()',
        'run()',
        'start()'
      ],

      answer: 1,

      explanation:
        'sleep() pauses thread execution.',
    },

    {
      question:
        'sleep() time is measured in?', 

      options: [
        'Minutes',
        'Hours',
        'Milliseconds',
        'Nanoseconds only'
      ],

      answer: 2,

      explanation:
        'sleep() uses milliseconds.',
    },

    {
      question:
        'sleep() may throw?', 

      options: [
        'ArithmeticException',
        'InterruptedException',
        'NullPointerException',
        'SQLException'
      ],

      answer: 1,

      explanation:
        'sleep() may throw InterruptedException.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is sleep() method in Java?',

      answer:
        'sleep() temporarily pauses current thread execution for specific time.',
    },

    {
      question:
        'Why is InterruptedException required with sleep()?',

      answer:
        'Because sleeping thread can be interrupted during paused state.',
    },
  ],

  nextTopic: 'java-thread-naming',
},
{
  id: 'java-thread-naming',

  title: 'Naming a Thread in Java',

  slug: 'java-thread-naming',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '22 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Naming a Thread in Java deeply including setName(), getName(), debugging benefits, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Accenture'],

  sections: [
    {
      heading: 'Naming a Thread in Java',

      content: `
• Introduction to Thread Naming

• Default Thread Names

• setName() Method

• getName() Method

• Debugging Benefits

• Real-World Usage

• Advantages

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Thread Naming',

      content: `
Every thread in Java has a name.

Thread names help:

• Identify threads
• Debug multithreaded programs
• Track execution
`.trim(),
    },

    {
      heading: 'Default Thread Names',

      content: `
Java automatically provides default names.

Examples:

• Thread-0
• Thread-1
• Thread-2
`.trim(),
    },

    {
      heading: 'setName() Method',

      content: `
setName() changes thread name.

Syntax:

thread.setName("WorkerThread");
`.trim(),
    },

    {
      heading: 'getName() Method',

      content: `
getName() returns thread name.

Useful for:

• Logging
• Debugging
• Monitoring
`.trim(),
    },

    {
      heading: 'Advantages of Naming Threads',

      content: `
• Better debugging
• Easy monitoring
• Improved readability
• Easier maintenance
`.trim(),
    },

    {
      heading: 'Important Points About Thread Naming',

      content: `
• Every thread has unique name
• Names help debugging
• setName() changes thread name
• getName() retrieves thread name

Common Beginner Mistakes:

• Ignoring meaningful thread names
• Confusing thread names with priorities
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Thread Naming Example',

      language: 'java',

      code: `class MyThread extends Thread {

    public void run() {

        System.out.println(
            Thread.currentThread().getName()
        );

    }

}

public class Main {

    public static void main(String[] args) {

        MyThread t1 = new MyThread();

        t1.setName("DownloadThread");

        t1.start();

    }

}`,

      output: 'DownloadThread',
    },
  ],

  mcqs: [
    {
      question:
        'Which method changes thread name?',

      options: [
        'getName()',
        'sleep()',
        'setName()',
        'run()'
      ],

      answer: 2,

      explanation:
        'setName() changes thread name.',
    },

    {
      question:
        'Default thread names are like?', 

      options: [
        'Worker',
        'Thread-0',
        'JavaThread',
        'MainLoop'
      ],

      answer: 1,

      explanation:
        'Java default names are Thread-0, Thread-1 etc.',
    },

    {
      question:
        'Thread names are mainly useful for?', 

      options: [
        'Compilation',
        'Debugging',
        'Garbage collection',
        'Inheritance'
      ],

      answer: 1,

      explanation:
        'Thread names help debugging.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'Why are thread names important in Java?',

      answer:
        'Thread names help debugging, monitoring, and tracking multithreaded execution.',
    },

    {
      question:
        'What is difference between setName() and getName()?',

      answer:
        'setName() changes thread name while getName() returns current thread name.',
    },
  ],

  nextTopic: 'java-thread-priority',
},

{
  id: 'java-thread-priority',

  title: 'Thread Priority in Java',

  slug: 'java-thread-priority',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '24 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Thread Priority in Java deeply including setPriority(), scheduler behavior, priority constants, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Cognizant'],

  sections: [
    {
      heading: 'Thread Priority in Java',

      content: `
• Introduction to Thread Priority

• Priority Range

• setPriority() Method

• getPriority() Method

• Scheduler Behavior

• Priority Constants

• Real-World Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Thread Priority',

      content: `
Thread priority tells scheduler:

• Which thread should get better CPU preference

Higher priority increases execution chance.
`.trim(),
    },

    {
      heading: 'Priority Range',

      content: `
Java thread priority range:

1 to 10

Important constants:

• MIN_PRIORITY = 1
• NORM_PRIORITY = 5
• MAX_PRIORITY = 10
`.trim(),
    },

    {
      heading: 'setPriority() Method',

      content: `
Used to assign thread priority.

Syntax:

thread.setPriority(8);
`.trim(),
    },

    {
      heading: 'getPriority() Method',

      content: `
Returns current thread priority.

Useful for:

• Monitoring
• Debugging
• Scheduling analysis
`.trim(),
    },

    {
      heading: 'Advantages of Thread Priority',

      content: `
• Better task management
• CPU optimization
• Important task preference
• Improved responsiveness
`.trim(),
    },

    {
      heading: 'Important Points About Thread Priority',

      content: `
• Priority range is 1 to 10
• Higher priority gets better scheduling chance
• Exact execution still depends on JVM and OS
• Priority does not guarantee execution order

Common Beginner Mistakes:

• Assuming high priority always runs first
• Using extreme priorities everywhere
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Thread Priority Example',

      language: 'java',

      code: `class MyThread extends Thread {

    public void run() {

        System.out.println(
            getName() + " : " +
            getPriority()
        );

    }

}

public class Main {

    public static void main(String[] args) {

        MyThread t1 = new MyThread();

        MyThread t2 = new MyThread();

        t1.setName("High");

        t2.setName("Low");

        t1.setPriority(8);

        t2.setPriority(3);

        t1.start();

        t2.start();

    }

}`,

      output: `High : 8
Low : 3`,
    },
  ],

  mcqs: [
    {
      question:
        'Maximum thread priority in Java is?', 

      options: [
        '5',
        '8',
        '10',
        '100'
      ],

      answer: 2,

      explanation:
        'Maximum priority is 10.',
    },

    {
      question:
        'Default normal priority value is?', 

      options: [
        '1',
        '3',
        '5',
        '10'
      ],

      answer: 2,

      explanation:
        'NORM_PRIORITY is 5.',
    },

    {
      question:
        'Which method sets thread priority?',

      options: [
        'getPriority()',
        'setPriority()',
        'setName()',
        'run()'
      ],

      answer: 1,

      explanation:
        'setPriority() assigns priority.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is thread priority in Java?',

      answer:
        'Thread priority indicates importance of thread for CPU scheduling.',
    },

    {
      question:
        'Does high priority guarantee execution first?',

      answer:
        'No, execution order depends on JVM and operating system scheduler.',
    },
  ],

  nextTopic: 'java-daemon-thread',
},

{
  id: 'java-daemon-thread',

  title: 'Daemon Thread in Java',

  slug: 'java-daemon-thread',

  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',

  readTime: '26 min read',

  difficulty: 'Advanced',

  description:
    'Learn Daemon Thread in Java deeply including background threads, JVM behavior, garbage collection support, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'HCL'],

  sections: [
    {
      heading: 'Daemon Thread in Java',

      content: `
• Introduction to Daemon Thread

• Background Processing

• JVM Behavior

• User Thread vs Daemon Thread

• setDaemon() Method

• Real-World Usage

• Advantages

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Daemon Thread',

      content: `
Daemon thread runs in background.

Purpose:

• Support user threads
• Perform background tasks
`.trim(),
    },

    {
      heading: 'Examples of Daemon Threads',

      content: `
Examples:

• Garbage collector
• Auto-save services
• Monitoring systems
• Background cleanup
`.trim(),
    },

    {
      heading: 'User Thread vs Daemon Thread',

      content: `
User Thread:

• Important application work

Daemon Thread:

• Background support work

JVM exits when all user threads finish.
`.trim(),
    },

    {
      heading: 'setDaemon() Method',

      content: `
Used to mark thread as daemon.

Syntax:

thread.setDaemon(true);

Must be called before start().
`.trim(),
    },

    {
      heading: 'Advantages of Daemon Threads',

      content: `
• Automatic background processing
• Better resource management
• Improves automation
• Supports system services
`.trim(),
    },

    {
      heading: 'Important Points About Daemon Threads',

      content: `
• Daemon threads run in background
• JVM stops daemon threads automatically
• Used for supporting tasks
• Must call setDaemon() before start()

Common Beginner Mistakes:

• Calling setDaemon() after start()
• Using daemon threads for critical tasks
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Daemon Thread Example',

      language: 'java',

      code: `class MyThread extends Thread {

    public void run() {

        if(Thread.currentThread().isDaemon()) {

            System.out.println(
                "Daemon Thread"
            );

        }

        else {

            System.out.println(
                "User Thread"
            );

        }

    }

}

public class Main {

    public static void main(String[] args) {

        MyThread t1 = new MyThread();

        t1.setDaemon(true);

        t1.start();

    }

}`,

      output: 'Daemon Thread',
    },
  ],

  mcqs: [
    {
      question:
        'Daemon thread mainly performs?', 

      options: [
        'Database storage',
        'Background tasks',
        'Compilation',
        'Inheritance'
      ],

      answer: 1,

      explanation:
        'Daemon threads perform background tasks.',
    },

    {
      question:
        'Which method marks thread as daemon?',

      options: [
        'setDaemon()',
        'sleep()',
        'join()',
        'wait()'
      ],

      answer: 0,

      explanation:
        'setDaemon() creates daemon thread.',
    },

    {
      question:
        'When does JVM stop daemon threads?',

      options: [
        'After compilation',
        'When all user threads finish',
        'After array creation',
        'Never'
      ],

      answer: 1,

      explanation:
        'JVM stops daemon threads when user threads end.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is daemon thread in Java?',

      answer:
        'Daemon thread is background thread that supports user threads and system services.',
    },

    {
      question:
        'Why are daemon threads useful?',

      answer:
        'Daemon threads automate background processing like garbage collection and monitoring.',
    },
  ],

  nextTopic: 'java-thread-pool',
},

{
  id: 'java-thread-pool',

  title: 'Thread Pool in Java',

  slug: 'java-thread-pool',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '32 min read',

  difficulty: 'Advanced',

  description:
    'Learn Thread Pool in Java deeply including Executor framework, reusable threads, performance optimization, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'],

  sections: [
    {
      heading: 'Thread Pool in Java',

      content: `
• Introduction to Thread Pool

• Executor Framework

• Reusable Threads

• Performance Optimization

• Fixed Thread Pool

• Cached Thread Pool

• Real-World Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Thread Pool',

      content: `
Thread pool is collection of reusable threads.

Instead of creating new thread every time:

• Existing threads are reused
`.trim(),
    },

    {
      heading: 'Why Thread Pool is Important',

      content: `
Benefits:

• Faster execution
• Better performance
• Reduced memory overhead
• Better resource management
`.trim(),
    },

    {
      heading: 'Executor Framework',

      content: `
Java provides Executor framework for managing thread pools.

Common methods:

• newFixedThreadPool()
• newCachedThreadPool()
`.trim(),
    },

    {
      heading: 'Types of Thread Pools',

      content: `
Important thread pools:

• Fixed Thread Pool
• Cached Thread Pool
• Scheduled Thread Pool
• Single Thread Executor
`.trim(),
    },

    {
      heading: 'Real-World Usage',

      content: `
Thread pools are used in:

• Web servers
• Banking systems
• APIs
• Enterprise applications
`.trim(),
    },

    {
      heading: 'Important Points About Thread Pool',

      content: `
• Thread pools reuse threads
• Improves performance
• Managed using Executor framework
• Reduces thread creation overhead

Common Beginner Mistakes:

• Creating too many threads
• Forgetting shutdown()
• Wrong pool size selection
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Thread Pool Example',

      language: 'java',

      code: `import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

class Task implements Runnable {

    public void run() {

        System.out.println(
            Thread.currentThread().getName()
        );

    }

}

public class Main {

    public static void main(String[] args) {

        ExecutorService service =
            Executors.newFixedThreadPool(2);

        service.execute(new Task());

        service.execute(new Task());

        service.shutdown();

    }

}`,

      output: `pool-1-thread-1
pool-1-thread-2`,
    },
  ],

  mcqs: [
    {
      question:
        'Thread pool mainly improves?', 

      options: [
        'Syntax',
        'Performance',
        'Variable names',
        'Inheritance'
      ],

      answer: 1,

      explanation:
        'Thread pool improves performance.',
    },

    {
      question:
        'Which framework manages thread pools?',

      options: [
        'Collection Framework',
        'Executor Framework',
        'Servlet API',
        'JDBC'
      ],

      answer: 1,

      explanation:
        'Executor framework manages thread pools.',
    },

    {
      question:
        'Thread pools reduce?', 

      options: [
        'Array size',
        'Thread creation overhead',
        'Compiler errors',
        'Inheritance'
      ],

      answer: 1,

      explanation:
        'Thread pools reduce thread creation overhead.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is thread pool in Java?',

      answer:
        'Thread pool is collection of reusable threads managed for efficient task execution.',
    },

    {
      question:
        'Why are thread pools preferred in enterprise applications?',

      answer:
        'Because they improve performance and reduce thread creation overhead.',
    },
  ],

  nextTopic: 'java-thread-group',
},

{
  id: 'java-thread-group',

  title: 'ThreadGroup in Java',

  slug: 'java-thread-group',

  image:
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd',

  readTime: '24 min read',

  difficulty: 'Advanced',

  description:
    'Learn ThreadGroup in Java deeply including grouping threads, management operations, hierarchy, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'IBM'],

  sections: [
    {
      heading: 'ThreadGroup in Java',

      content: `
• Introduction to ThreadGroup

• Grouping Threads

• Thread Management

• ThreadGroup Hierarchy

• Useful Methods

• Real-World Usage

• Advantages

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to ThreadGroup',

      content: `
ThreadGroup is used to manage multiple threads together.

Purpose:

• Organize threads
• Perform group operations
`.trim(),
    },

    {
      heading: 'Why ThreadGroup is Useful',

      content: `
Benefits:

• Easier thread management
• Group monitoring
• Better organization
• Common operations on threads
`.trim(),
    },

    {
      heading: 'ThreadGroup Hierarchy',

      content: `
Thread groups can contain:

• Threads
• Other thread groups

Creates hierarchical structure.
`.trim(),
    },

    {
      heading: 'Useful Methods of ThreadGroup',

      content: `
Important methods:

• activeCount()
• list()
• stop()
• interrupt()
`.trim(),
    },

    {
      heading: 'Real-World Usage',

      content: `
Used in:

• Large multithreaded applications
• Server management
• Monitoring systems
• Task organization
`.trim(),
    },

    {
      heading: 'Important Points About ThreadGroup',

      content: `
• ThreadGroup manages multiple threads
• Supports hierarchy
• Simplifies thread operations
• Modern applications often prefer Executor framework

Common Beginner Mistakes:

• Overusing deprecated methods
• Confusing ThreadGroup with thread pool
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'ThreadGroup Example',

      language: 'java',

      code: `class MyThread extends Thread {

    MyThread(ThreadGroup tg, String name) {

        super(tg, name);

    }

    public void run() {

        System.out.println(
            getName()
        );

    }

}

public class Main {

    public static void main(String[] args) {

        ThreadGroup tg =
            new ThreadGroup("Workers");

        MyThread t1 =
            new MyThread(tg, "Thread-1");

        MyThread t2 =
            new MyThread(tg, "Thread-2");

        t1.start();

        t2.start();

    }

}`,

      output: `Thread-1
Thread-2`,
    },
  ],

  mcqs: [
    {
      question:
        'ThreadGroup is used for?', 

      options: [
        'Database storage',
        'Managing multiple threads',
        'Compilation',
        'Inheritance'
      ],

      answer: 1,

      explanation:
        'ThreadGroup manages multiple threads together.',
    },

    {
      question:
        'ThreadGroup can contain?', 

      options: [
        'Only arrays',
        'Only methods',
        'Threads and thread groups',
        'Only packages'
      ],

      answer: 2,

      explanation:
        'ThreadGroup can contain threads and subgroups.',
    },

    {
      question:
        'Modern applications commonly prefer?', 

      options: [
        'ThreadGroup only',
        'Executor framework',
        'Applet',
        'AWT only'
      ],

      answer: 1,

      explanation:
        'Executor framework is preferred today.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is ThreadGroup in Java?',

      answer:
        'ThreadGroup is class used to manage and organize multiple threads together.',
    },

    {
      question:
        'Why is Executor framework preferred over ThreadGroup?',

      answer:
        'Executor framework provides better thread management and scalability.',
    },
  ],

  nextTopic: 'java-shutdown-hook-thread',
},
{
  id: 'java-shutdown-hook-thread',

  title: 'ShutdownHook Thread in Java',

  slug: 'java-shutdown-hook-thread',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '24 min read',

  difficulty: 'Advanced',

  description:
    'Learn ShutdownHook Thread in Java deeply including JVM shutdown process, cleanup operations, resource management, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Accenture'],

  sections: [
    {
      heading: 'ShutdownHook Thread in Java',

      content: `
• Introduction to ShutdownHook

• JVM Shutdown Process

• Cleanup Operations

• Runtime Class

• addShutdownHook() Method

• Real-World Usage

• Advantages

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to ShutdownHook',

      content: `
ShutdownHook is special thread executed before JVM shutdown.

Used for:

• Cleanup tasks
• Saving data
• Closing resources
`.trim(),
    },

    {
      heading: 'Why ShutdownHook is Important',

      content: `
Applications may need:

• File closing
• Database disconnection
• Cache saving
• Log storage

ShutdownHook handles these tasks safely.
`.trim(),
    },

    {
      heading: 'addShutdownHook() Method',

      content: `
Java Runtime class provides:

addShutdownHook()

Used to register shutdown thread.
`.trim(),
    },

    {
      heading: 'Advantages of ShutdownHook',

      content: `
• Safe application termination
• Proper resource cleanup
• Prevents data loss
• Better system stability
`.trim(),
    },

    {
      heading: 'Real-World Usage',

      content: `
Used in:

• Banking systems
• Web servers
• Logging systems
• Database applications
`.trim(),
    },

    {
      heading: 'Important Points About ShutdownHook',

      content: `
• Runs before JVM shutdown
• Used for cleanup operations
• Managed using Runtime class
• Useful for resource handling

Common Beginner Mistakes:

• Performing heavy operations inside hook
• Assuming hook always executes during force shutdown
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'ShutdownHook Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        Runtime.getRuntime().addShutdownHook(

            new Thread() {

                public void run() {

                    System.out.println(
                        "Shutdown Hook Executed"
                    );

                }

            }

        );

        System.out.println(
            "Application Running"
        );

    }

}`,

      output: `Application Running
Shutdown Hook Executed`,
    },
  ],

  mcqs: [
    {
      question:
        'ShutdownHook executes before?', 

      options: [
        'Compilation',
        'JVM shutdown',
        'Loop execution',
        'Garbage collection'
      ],

      answer: 1,

      explanation:
        'ShutdownHook runs before JVM shutdown.',
    },

    {
      question:
        'Which class manages ShutdownHook?',

      options: [
        'String',
        'Runtime',
        'Scanner',
        'Object'
      ],

      answer: 1,

      explanation:
        'Runtime class manages ShutdownHook.',
    },

    {
      question:
        'ShutdownHook is mainly used for?', 

      options: [
        'Arrays',
        'Cleanup tasks',
        'Inheritance',
        'Compilation'
      ],

      answer: 1,

      explanation:
        'ShutdownHook performs cleanup operations.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is ShutdownHook thread in Java?',

      answer:
        'ShutdownHook is special thread executed before JVM shutdown for cleanup tasks.',
    },

    {
      question:
        'Why are ShutdownHooks important?',

      answer:
        'They help safely close resources and prevent data loss during application termination.',
    },
  ],

  nextTopic: 'java-multitasking-in-multithreading',
},

{
  id: 'java-multitasking-in-multithreading',

  title: 'Multitasking in Multithreading',

  slug: 'java-multitasking-in-multithreading',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '28 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Multitasking in Multithreading deeply including concurrent execution, process multitasking, thread multitasking, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Cognizant'],

  sections: [
    {
      heading: 'Multitasking in Multithreading',

      content: `
• Introduction to Multitasking

• Process-Based Multitasking

• Thread-Based Multitasking

• Concurrent Execution

• Performance Benefits

• Real-World Usage

• Advantages

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Multitasking',

      content: `
Multitasking means performing multiple tasks simultaneously.

Java supports multitasking using:

• Processes
• Threads
`.trim(),
    },

    {
      heading: 'Process-Based Multitasking',

      content: `
Different processes run independently.

Examples:

• Browser
• Music player
• IDE

Each process has separate memory.
`.trim(),
    },

    {
      heading: 'Thread-Based Multitasking',

      content: `
Multiple threads run inside same process.

Advantages:

• Faster communication
• Better performance
• Shared memory
`.trim(),
    },

    {
      heading: 'Advantages of Multitasking',

      content: `
• Better CPU usage
• Faster execution
• Improved responsiveness
• Parallel operations
`.trim(),
    },

    {
      heading: 'Real-World Usage',

      content: `
Used in:

• Gaming
• Web applications
• Streaming apps
• Banking systems
`.trim(),
    },

    {
      heading: 'Important Points About Multitasking',

      content: `
• Multitasking improves efficiency
• Threads are lightweight
• Processes are heavyweight
• Java strongly supports thread multitasking

Common Beginner Mistakes:

• Confusing process and thread
• Creating too many threads
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Multitasking Example',

      language: 'java',

      code: `class Task1 extends Thread {

    public void run() {

        System.out.println(
            "Task 1 Running"
        );

    }

}

class Task2 extends Thread {

    public void run() {

        System.out.println(
            "Task 2 Running"
        );

    }

}

public class Main {

    public static void main(String[] args) {

        Task1 t1 = new Task1();

        Task2 t2 = new Task2();

        t1.start();

        t2.start();

    }

}`,

      output: `Task 1 Running
Task 2 Running`,
    },
  ],

  mcqs: [
    {
      question:
        'Multitasking means?', 

      options: [
        'Single task execution',
        'Multiple tasks simultaneously',
        'Compilation',
        'Inheritance'
      ],

      answer: 1,

      explanation:
        'Multitasking performs multiple tasks simultaneously.',
    },

    {
      question:
        'Threads are?', 

      options: [
        'Heavyweight',
        'Lightweight',
        'Database objects',
        'Packages'
      ],

      answer: 1,

      explanation:
        'Threads are lightweight subprocesses.',
    },

    {
      question:
        'Thread-based multitasking shares?', 

      options: [
        'Separate JVM',
        'Separate memory',
        'Shared memory',
        'Separate CPU'
      ],

      answer: 2,

      explanation:
        'Threads share memory inside process.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is multitasking in Java?',

      answer:
        'Multitasking is ability to perform multiple tasks simultaneously using processes or threads.',
    },

    {
      question:
        'Why is thread-based multitasking faster?',

      answer:
        'Because threads share memory and communication becomes faster.',
    },
  ],

  nextTopic: 'java-garbage-collection',
},

{
  id: 'java-garbage-collection',

  title: 'Garbage Collection in Java',

  slug: 'java-garbage-collection',

  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',

  readTime: '34 min read',

  difficulty: 'Advanced',

  description:
    'Learn Garbage Collection in Java deeply including memory cleanup, JVM memory management, gc(), and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'HCL'],

  sections: [
    {
      heading: 'Garbage Collection in Java',

      content: `
• Introduction to Garbage Collection

• Memory Management

• Unused Objects

• gc() Method

• finalize() Method

• JVM Behavior

• Advantages

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Garbage Collection',

      content: `
Garbage Collection automatically removes unused objects from memory.

Purpose:

• Free memory
• Prevent memory leaks
`.trim(),
    },

    {
      heading: 'How Garbage Collector Works',

      content: `
Garbage collector identifies:

• Unreferenced objects

These objects are removed automatically.
`.trim(),
    },

    {
      heading: 'gc() Method',

      content: `
System.gc() requests JVM to perform garbage collection.

Important:

• JVM may ignore request
`.trim(),
    },

    {
      heading: 'finalize() Method',

      content: `
finalize() executes before object destruction.

Used for:

• Cleanup operations

Modern Java discourages finalize() usage.
`.trim(),
    },

    {
      heading: 'Advantages of Garbage Collection',

      content: `
• Automatic memory management
• Reduces memory leaks
• Simplifies programming
• Improves application stability
`.trim(),
    },

    {
      heading: 'Important Points About Garbage Collection',

      content: `
• JVM manages memory automatically
• Unused objects are removed
• System.gc() is only request
• finalize() is deprecated in modern Java

Common Beginner Mistakes:

• Assuming gc() always runs immediately
• Relying heavily on finalize()
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Garbage Collection Example',

      language: 'java',

      code: `public class Main {

    public void finalize() {

        System.out.println(
            "Object destroyed"
        );

    }

    public static void main(String[] args) {

        Main obj = new Main();

        obj = null;

        System.gc();

    }

}`,

      output: 'Object destroyed',
    },
  ],

  mcqs: [
    {
      question:
        'Garbage Collection removes?', 

      options: [
        'Methods',
        'Unused objects',
        'Packages',
        'Arrays'
      ],

      answer: 1,

      explanation:
        'Garbage collector removes unused objects.',
    },

    {
      question:
        'Which method requests garbage collection?',

      options: [
        'sleep()',
        'gc()',
        'join()',
        'wait()'
      ],

      answer: 1,

      explanation:
        'gc() requests garbage collection.',
    },

    {
      question:
        'Who manages memory in Java?',

      options: [
        'Programmer',
        'JVM',
        'Compiler',
        'Package manager'
      ],

      answer: 1,

      explanation:
        'JVM manages memory automatically.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Garbage Collection in Java?',

      answer:
        'Garbage Collection automatically removes unused objects from memory.',
    },

    {
      question:
        'Why is Garbage Collection useful?',

      answer:
        'It automates memory management and reduces memory leaks.',
    },
  ],

  nextTopic: 'java-runtime-class',
},

{
  id: 'java-runtime-class',

  title: 'Java Runtime class',

  slug: 'java-runtime-class',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '26 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java Runtime class deeply including JVM interaction, memory information, process execution, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'],

  sections: [
    {
      heading: 'Java Runtime class',

      content: `
• Introduction to Runtime class

• Singleton Nature

• Memory Management

• Executing Processes

• Shutdown Hooks

• Useful Methods

• Real-World Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Runtime class',

      content: `
Runtime class provides interaction with JVM runtime environment.

Used for:

• Memory information
• Process execution
• Shutdown management
`.trim(),
    },

    {
      heading: 'Singleton Nature',

      content: `
Runtime class cannot create direct object.

Access using:

Runtime.getRuntime();
`.trim(),
    },

    {
      heading: 'Useful Methods of Runtime class',

      content: `
Important methods:

• freeMemory()
• totalMemory()
• gc()
• exec()
• addShutdownHook()
`.trim(),
    },

    {
      heading: 'Process Execution',

      content: `
Runtime class can execute external programs using:

exec()
`.trim(),
    },

    {
      heading: 'Advantages of Runtime class',

      content: `
• JVM interaction
• Memory monitoring
• Process management
• System-level operations
`.trim(),
    },

    {
      heading: 'Important Points About Runtime class',

      content: `
• Runtime class interacts with JVM
• Uses singleton design
• Provides memory information
• Supports external process execution

Common Beginner Mistakes:

• Trying to instantiate Runtime directly
• Misusing exec() method
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Runtime class Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        Runtime r = Runtime.getRuntime();

        System.out.println(
            "Available Memory: " +
            r.freeMemory()
        );

    }

}`,

      output: 'Available Memory: 12345678',
    },
  ],

  mcqs: [
    {
      question:
        'Runtime class interacts with?', 

      options: [
        'Database',
        'JVM',
        'Compiler',
        'Package'
      ],

      answer: 1,

      explanation:
        'Runtime class interacts with JVM.',
    },

    {
      question:
        'Which method returns Runtime object?',

      options: [
        'new Runtime()',
        'getRuntime()',
        'createRuntime()',
        'startRuntime()'
      ],

      answer: 1,

      explanation:
        'getRuntime() returns Runtime object.',
    },

    {
      question:
        'Which method executes external process?',

      options: [
        'gc()',
        'exec()',
        'wait()',
        'join()'
      ],

      answer: 1,

      explanation:
        'exec() executes external programs.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Runtime class in Java?',

      answer:
        'Runtime class provides interaction with JVM runtime environment.',
    },

    {
      question:
        'Why is Runtime class important?',

      answer:
        'It helps manage memory, execute processes, and interact with JVM.',
    },
  ],

  nextTopic: 'java-thread-synchronization',
},

{
  id: 'java-thread-synchronization',

  title: 'Thread Synchronization in Java',

  slug: 'java-thread-synchronization',

  image:
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd',

  readTime: '38 min read',

  difficulty: 'Advanced',

  description:
    'Learn Thread Synchronization in Java deeply including synchronized methods, race conditions, thread safety, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Capgemini'],

  sections: [
    {
      heading: 'Thread Synchronization in Java',

      content: `
• Introduction to Synchronization

• Race Condition

• Thread Safety

• synchronized Keyword

• Synchronized Methods

• Synchronized Blocks

• Real-World Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Synchronization',

      content: `
Synchronization controls access of multiple threads to shared resources.

Purpose:

• Prevent data inconsistency
• Ensure thread safety
`.trim(),
    },

    {
      heading: 'Race Condition',

      content: `
Race condition occurs when:

• Multiple threads modify shared data simultaneously

Results become unpredictable.
`.trim(),
    },

    {
      heading: 'synchronized Keyword',

      content: `
synchronized keyword allows only one thread at a time.

Used with:

• Methods
• Blocks
`.trim(),
    },

    {
      heading: 'Synchronized Method',

      content: `
Entire method becomes synchronized.

Only one thread executes method at a time.
`.trim(),
    },

    {
      heading: 'Advantages of Synchronization',

      content: `
• Thread safety
• Prevents race condition
• Data consistency
• Better reliability
`.trim(),
    },

    {
      heading: 'Important Points About Synchronization',

      content: `
• Synchronization prevents simultaneous access
• synchronized keyword provides locking
• Improves thread safety
• Excess synchronization may reduce performance

Common Beginner Mistakes:

• Synchronizing unnecessary code
• Ignoring race conditions
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Synchronization Example',

      language: 'java',

      code: `class Table {

    synchronized void printTable(int n) {

        for(int i = 1; i <= 5; i++) {

            System.out.println(n * i);

        }

    }

}

class MyThread1 extends Thread {

    Table t;

    MyThread1(Table t) {

        this.t = t;

    }

    public void run() {

        t.printTable(5);

    }

}

public class Main {

    public static void main(String[] args) {

        Table obj = new Table();

        MyThread1 t1 = new MyThread1(obj);

        t1.start();

    }

}`,

      output: `5
10
15
20
25`,
    },
  ],

  mcqs: [
    {
      question:
        'Synchronization mainly provides?', 

      options: [
        'Compilation',
        'Thread safety',
        'Inheritance',
        'Polymorphism'
      ],

      answer: 1,

      explanation:
        'Synchronization ensures thread safety.',
    },

    {
      question:
        'Race condition occurs when?', 

      options: [
        'Single thread executes',
        'Multiple threads access shared data simultaneously',
        'Compiler runs',
        'Arrays are created'
      ],

      answer: 1,

      explanation:
        'Race condition occurs during simultaneous shared access.',
    },

    {
      question:
        'Which keyword is used for synchronization?',

      options: [
        'final',
        'static',
        'synchronized',
        'volatile'
      ],

      answer: 2,

      explanation:
        'synchronized keyword provides locking.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is synchronization in Java?',

      answer:
        'Synchronization controls thread access to shared resources for thread safety.',
    },

    {
      question:
        'Why is synchronization important in multithreading?',

      answer:
        'It prevents race conditions and maintains data consistency.',
    },
  ],

  nextTopic: 'java-interthread-communication',
},

{
  id: 'java-interthread-communication',

  title: 'Inter Thread Communication in Java',

  slug: 'java-interthread-communication',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '36 min read',

  difficulty: 'Advanced',

  description:
    'Learn Inter Thread Communication in Java deeply including wait(), notify(), notifyAll(), coordination between threads, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'],

  sections: [
    {
      heading: 'Inter Thread Communication in Java',

      content: `
• Introduction to Inter Thread Communication

• wait() Method

• notify() Method

• notifyAll() Method

• Thread Coordination

• Producer Consumer Problem

• Real-World Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Inter Thread Communication',

      content: `
Inter thread communication allows threads to coordinate with each other.

Used for:

• Efficient resource sharing
• Proper execution order
`.trim(),
    },

    {
      heading: 'wait() Method',

      content: `
wait() pauses current thread until another thread notifies it.
`.trim(),
    },

    {
      heading: 'notify() Method',

      content: `
notify() wakes one waiting thread.
`.trim(),
    },

    {
      heading: 'notifyAll() Method',

      content: `
notifyAll() wakes all waiting threads.
`.trim(),
    },

    {
      heading: 'Advantages of Inter Thread Communication',

      content: `
• Better coordination
• Efficient execution
• Reduces busy waiting
• Improves synchronization
`.trim(),
    },

    {
      heading: 'Important Points About Inter Thread Communication',

      content: `
• wait(), notify(), notifyAll() belong to Object class
• Used inside synchronized blocks
• Helps thread coordination
• Common in producer-consumer problems

Common Beginner Mistakes:

• Calling wait() outside synchronized block
• Forgetting notify()
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'wait() and notify() Example',

      language: 'java',

      code: `class Test {

    synchronized void display() {

        try {

            wait();

        }

        catch(Exception e) {

        }

        System.out.println(
            "Thread Resumed"
        );

    }

}

public class Main {

    public static void main(String[] args) {

        Test obj = new Test();

        new Thread() {

            public void run() {

                obj.display();

            }

        }.start();

    }

}`,

      output: 'Thread Resumed',
    },
  ],

  mcqs: [
    {
      question:
        'Which method pauses current thread?', 

      options: [
        'notify()',
        'wait()',
        'join()',
        'run()'
      ],

      answer: 1,

      explanation:
        'wait() pauses current thread.',
    },

    {
      question:
        'notifyAll() wakes?', 

      options: [
        'One thread',
        'All waiting threads',
        'Main thread only',
        'Scheduler'
      ],

      answer: 1,

      explanation:
        'notifyAll() wakes all waiting threads.',
    },

    {
      question:
        'wait() method belongs to?', 

      options: [
        'Thread class',
        'Runtime class',
        'Object class',
        'String class'
      ],

      answer: 2,

      explanation:
        'wait() belongs to Object class.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is inter thread communication in Java?',

      answer:
        'It is mechanism that allows threads to coordinate execution using wait(), notify(), and notifyAll().',
    },

    {
      question:
        'Why is wait() used with synchronization?',

      answer:
        'Because thread communication requires monitor locking for safe coordination.',
    },
  ],

  nextTopic: 'java-synchronization',
},
{
  id: 'java-synchronization',

  title: 'Synchronization in Java',

  slug: 'java-synchronization',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '34 min read',

  difficulty: 'Advanced',

  description:
    'Learn Synchronization in Java deeply including thread safety, race condition, synchronized methods, locking, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Capgemini'],

  sections: [
    {
      heading: 'Synchronization in Java',

      content: `
• Introduction to Synchronization

• Race Condition

• Thread Safety

• synchronized Keyword

• Object Locking

• Shared Resources

• Real-World Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Synchronization',

      content: `
Synchronization is process of controlling access of multiple threads to shared resources.

Purpose:

• Prevent data inconsistency
• Maintain thread safety
`.trim(),
    },

    {
      heading: 'Why Synchronization is Needed',

      content: `
When multiple threads access same data simultaneously:

• Incorrect results may occur
• Data inconsistency may happen

Synchronization prevents these problems.
`.trim(),
    },

    {
      heading: 'Race Condition',

      content: `
Race condition happens when:

• Multiple threads modify shared data at same time

Output becomes unpredictable.
`.trim(),
    },

    {
      heading: 'synchronized Keyword',

      content: `
Java provides synchronized keyword for synchronization.

Only one thread can execute synchronized code at a time.
`.trim(),
    },

    {
      heading: 'Advantages of Synchronization',

      content: `
• Thread safety
• Data consistency
• Prevents race condition
• Reliable multithreading
`.trim(),
    },

    {
      heading: 'Important Points About Synchronization',

      content: `
• Synchronization controls shared resources
• synchronized keyword provides locking
• Only one thread executes synchronized code
• Excess synchronization can reduce performance

Common Beginner Mistakes:

• Synchronizing unnecessary code
• Ignoring race conditions
• Forgetting shared resource protection
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Synchronization Example',

      language: 'java',

      code: `class Counter {

    int count = 0;

    synchronized void increment() {

        count++;

    }

}

public class Main {

    public static void main(String[] args) {

        Counter c = new Counter();

        c.increment();

        System.out.println(c.count);

    }

}`,

      output: '1',
    },
  ],

  mcqs: [
    {
      question:
        'Synchronization mainly provides?', 

      options: [
        'Compilation',
        'Thread safety',
        'Inheritance',
        'Garbage collection'
      ],

      answer: 1,

      explanation:
        'Synchronization provides thread safety.',
    },

    {
      question:
        'Which keyword is used for synchronization?',

      options: [
        'final',
        'static',
        'synchronized',
        'volatile'
      ],

      answer: 2,

      explanation:
        'synchronized keyword is used for synchronization.',
    },

    {
      question:
        'Race condition occurs due to?', 

      options: [
        'Single thread',
        'Multiple threads accessing shared data',
        'Compilation',
        'Arrays'
      ],

      answer: 1,

      explanation:
        'Race condition occurs because of multiple threads accessing shared resources.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is synchronization in Java?',

      answer:
        'Synchronization is process of controlling thread access to shared resources for maintaining data consistency.',
    },

    {
      question:
        'Why is synchronization important in multithreading?',

      answer:
        'Synchronization prevents race conditions and ensures thread safety.',
    },
  ],

  nextTopic: 'java-synchronized-block',
},

{
  id: 'java-synchronized-block',

  title: 'Java Synchronized Block',

  slug: 'java-synchronized-block',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '28 min read',

  difficulty: 'Advanced',

  description:
    'Learn Java Synchronized Block deeply including block-level locking, performance optimization, object locking, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'],

  sections: [
    {
      heading: 'Java Synchronized Block',

      content: `
• Introduction to Synchronized Block

• Block-Level Synchronization

• Object Locking

• Performance Benefits

• Critical Section

• Real-World Usage

• Advantages

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Synchronized Block',

      content: `
Synchronized block synchronizes only specific portion of code.

Benefits:

• Better performance
• Smaller locking area
`.trim(),
    },

    {
      heading: 'Syntax of Synchronized Block',

      content: `
Syntax:

synchronized(object) {

    // critical section

}
`.trim(),
    },

    {
      heading: 'Critical Section',

      content: `
Critical section is code accessing shared resources.

Only one thread executes critical section at a time.
`.trim(),
    },

    {
      heading: 'Why Synchronized Block is Better',

      content: `
Compared to synchronized method:

• Smaller locked area
• Better efficiency
• Improved performance
`.trim(),
    },

    {
      heading: 'Advantages of Synchronized Block',

      content: `
• Better control
• Improved performance
• Thread safety
• Reduced waiting time
`.trim(),
    },

    {
      heading: 'Important Points About Synchronized Block',

      content: `
• Synchronizes specific code section
• Uses object lock
• Improves efficiency compared to full method synchronization
• Useful for large methods

Common Beginner Mistakes:

• Synchronizing wrong object
• Locking unnecessary code
• Forgetting shared resource access
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Synchronized Block Example',

      language: 'java',

      code: `class Table {

    void printTable(int n) {

        synchronized(this) {

            for(int i = 1; i <= 5; i++) {

                System.out.println(n * i);

            }

        }

    }

}

public class Main {

    public static void main(String[] args) {

        Table t = new Table();

        t.printTable(5);

    }

}`,

      output: `5
10
15
20
25`,
    },
  ],

  mcqs: [
    {
      question:
        'Synchronized block locks?', 

      options: [
        'Entire JVM',
        'Specific code section',
        'Compiler',
        'Package'
      ],

      answer: 1,

      explanation:
        'Synchronized block locks specific code section.',
    },

    {
      question:
        'Which keyword is used in synchronized block?',

      options: [
        'volatile',
        'final',
        'synchronized',
        'native'
      ],

      answer: 2,

      explanation:
        'synchronized keyword is used.',
    },

    {
      question:
        'Synchronized block improves?', 

      options: [
        'Syntax',
        'Performance',
        'Inheritance',
        'Compilation'
      ],

      answer: 1,

      explanation:
        'Synchronized block improves performance.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is synchronized block in Java?',

      answer:
        'Synchronized block synchronizes only specific section of code for thread safety.',
    },

    {
      question:
        'Why is synchronized block preferred over synchronized method sometimes?',

      answer:
        'Because it locks smaller code section and improves performance.',
    },
  ],

  nextTopic: 'java-static-synchronization',
},

{
  id: 'java-static-synchronization',

  title: 'Java Static Synchronization',

  slug: 'java-static-synchronization',

  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',

  readTime: '30 min read',

  difficulty: 'Advanced',

  description:
    'Learn Java Static Synchronization deeply including class-level locking, static synchronized methods, shared class resources, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'HCL'],

  sections: [
    {
      heading: 'Java Static Synchronization',

      content: `
• Introduction to Static Synchronization

• Class-Level Locking

• static synchronized Method

• Shared Class Resources

• Thread Safety

• Real-World Usage

• Advantages

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Static Synchronization',

      content: `
Static synchronization locks class instead of object.

Used for:

• Static data protection
• Shared class resources
`.trim(),
    },

    {
      heading: 'static synchronized Method',

      content: `
Syntax:

static synchronized void methodName() {

}
`.trim(),
    },

    {
      heading: 'Class-Level Locking',

      content: `
Normal synchronization:

• Locks object

Static synchronization:

• Locks class object
`.trim(),
    },

    {
      heading: 'Why Static Synchronization is Important',

      content: `
Useful when:

• Static variables are shared
• Multiple objects access same class data
`.trim(),
    },

    {
      heading: 'Advantages of Static Synchronization',

      content: `
• Protects static resources
• Provides class-level thread safety
• Prevents concurrent modification
• Better data consistency
`.trim(),
    },

    {
      heading: 'Important Points About Static Synchronization',

      content: `
• Locks class object
• Used with static methods
• Protects shared static data
• Works across all objects

Common Beginner Mistakes:

• Confusing object lock and class lock
• Using normal synchronization for static resources
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Static Synchronization Example',

      language: 'java',

      code: `class Table {

    static synchronized void printTable(int n) {

        for(int i = 1; i <= 5; i++) {

            System.out.println(n * i);

        }

    }

}

public class Main {

    public static void main(String[] args) {

        Table.printTable(5);

    }

}`,

      output: `5
10
15
20
25`,
    },
  ],

  mcqs: [
    {
      question:
        'Static synchronization locks?', 

      options: [
        'Object',
        'Method only',
        'Class object',
        'Array'
      ],

      answer: 2,

      explanation:
        'Static synchronization locks class object.',
    },

    {
      question:
        'Static synchronization is used for?', 

      options: [
        'Local variables',
        'Static resources',
        'Arrays only',
        'Compilation'
      ],

      answer: 1,

      explanation:
        'Static synchronization protects static resources.',
    },

    {
      question:
        'Which keyword combination is used?',

      options: [
        'static volatile',
        'static synchronized',
        'final static',
        'native static'
      ],

      answer: 1,

      explanation:
        'static synchronized is used.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is static synchronization in Java?',

      answer:
        'Static synchronization locks class object for protecting shared static resources.',
    },

    {
      question:
        'What is difference between normal and static synchronization?',

      answer:
        'Normal synchronization locks object while static synchronization locks class.',
    },
  ],

  nextTopic: 'java-deadlock',
},

{
  id: 'java-deadlock',

  title: 'Deadlock in Java',

  slug: 'java-deadlock',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '36 min read',

  difficulty: 'Advanced',

  description:
    'Learn Deadlock in Java deeply including resource locking, circular dependency, prevention techniques, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Cognizant'],

  sections: [
    {
      heading: 'Deadlock in Java',

      content: `
• Introduction to Deadlock

• Resource Locking

• Circular Dependency

• Deadlock Situation

• Causes of Deadlock

• Prevention Techniques

• Real-World Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Deadlock',

      content: `
Deadlock occurs when:

• Two or more threads wait forever for each other’s resources

Program execution stops permanently.
`.trim(),
    },

    {
      heading: 'How Deadlock Happens',

      content: `
Example:

• Thread 1 holds Lock A and waits for Lock B
• Thread 2 holds Lock B and waits for Lock A

Both threads become blocked forever.
`.trim(),
    },

    {
      heading: 'Causes of Deadlock',

      content: `
Common causes:

• Nested locks
• Circular waiting
• Improper synchronization
• Resource dependency
`.trim(),
    },

    {
      heading: 'Deadlock Prevention Techniques',

      content: `
Ways to prevent deadlock:

• Avoid nested locking
• Maintain lock order
• Use timeout mechanisms
• Minimize shared resources
`.trim(),
    },

    {
      heading: 'Real-World Impact of Deadlock',

      content: `
Deadlocks can cause:

• Application freeze
• Performance issues
• System crash
• Resource wastage
`.trim(),
    },

    {
      heading: 'Important Points About Deadlock',

      content: `
• Deadlock blocks threads permanently
• Happens because of circular resource waiting
• Proper lock management prevents deadlocks
• Common in multithreaded systems

Common Beginner Mistakes:

• Acquiring locks in random order
• Excessive nested synchronization
• Ignoring resource dependency
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Deadlock Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        final String resource1 = "Java";

        final String resource2 = "Thread";

        Thread t1 = new Thread() {

            public void run() {

                synchronized(resource1) {

                    synchronized(resource2) {

                        System.out.println(
                            "Thread 1"
                        );

                    }

                }

            }

        };

        Thread t2 = new Thread() {

            public void run() {

                synchronized(resource2) {

                    synchronized(resource1) {

                        System.out.println(
                            "Thread 2"
                        );

                    }

                }

            }

        };

        t1.start();

        t2.start();

    }

}`,

      output: `Program may enter deadlock state`,
    },
  ],

  mcqs: [
    {
      question:
        'Deadlock occurs because of?', 

      options: [
        'Single thread',
        'Circular waiting',
        'Compilation',
        'Inheritance'
      ],

      answer: 1,

      explanation:
        'Deadlock mainly occurs because of circular waiting.',
    },

    {
      question:
        'Deadlock mainly affects?', 

      options: [
        'Thread execution',
        'Variable names',
        'Arrays',
        'Compiler'
      ],

      answer: 0,

      explanation:
        'Deadlock blocks thread execution.',
    },

    {
      question:
        'Which is prevention technique for deadlock?',

      options: [
        'Random locking',
        'Avoid nested locks',
        'Using arrays',
        'Using packages'
      ],

      answer: 1,

      explanation:
        'Avoiding nested locks helps prevent deadlock.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is deadlock in Java?',

      answer:
        'Deadlock is situation where threads wait indefinitely for each other’s locked resources.',
    },

    {
      question:
        'How can deadlock be prevented?',

      answer:
        'Deadlock can be prevented using proper lock ordering and minimizing nested synchronization.',
    },
  ],

  nextTopic: 'java-interthread-communication',
},
{
  id: 'java-interthread-communication',

  title: 'Inter-thread Communication in Java',

  slug: 'java-interthread-communication',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '36 min read',

  difficulty: 'Advanced',

  description:
    'Learn Inter-thread Communication in Java deeply including wait(), notify(), notifyAll(), thread coordination, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Accenture'],

  sections: [
    {
      heading: 'Inter-thread Communication in Java',

      content: `
• Introduction to Inter-thread Communication

• wait() Method

• notify() Method

• notifyAll() Method

• Thread Coordination

• Producer Consumer Problem

• Real-World Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Inter-thread Communication',

      content: `
Inter-thread communication allows threads to communicate with each other.

Purpose:

• Efficient coordination
• Controlled execution
• Shared resource management
`.trim(),
    },

    {
      heading: 'wait() Method',

      content: `
wait() pauses current thread until another thread notifies it.

Thread releases monitor lock while waiting.
`.trim(),
    },

    {
      heading: 'notify() Method',

      content: `
notify() wakes one waiting thread.

Used for controlled thread execution.
`.trim(),
    },

    {
      heading: 'notifyAll() Method',

      content: `
notifyAll() wakes all waiting threads.

Useful when multiple threads are waiting.
`.trim(),
    },

    {
      heading: 'Advantages of Inter-thread Communication',

      content: `
• Better synchronization
• Efficient resource usage
• Reduces CPU wastage
• Improves thread coordination
`.trim(),
    },

    {
      heading: 'Important Points About Inter-thread Communication',

      content: `
• wait(), notify(), notifyAll() belong to Object class
• Must be used inside synchronized block
• Helps coordination between threads
• Commonly used in producer-consumer problems

Common Beginner Mistakes:

• Calling wait() outside synchronized block
• Forgetting notify()
• Using busy waiting instead of communication
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'wait() and notify() Example',

      language: 'java',

      code: `class Test {

    synchronized void display() {

        try {

            wait();

        }

        catch(Exception e) {

        }

        System.out.println(
            "Thread Resumed"
        );

    }

}

public class Main {

    public static void main(String[] args) {

        Test obj = new Test();

        new Thread() {

            public void run() {

                obj.display();

            }

        }.start();

    }

}`,

      output: 'Thread Resumed',
    },
  ],

  mcqs: [
    {
      question:
        'Which method pauses current thread?',

      options: [
        'notify()',
        'wait()',
        'join()',
        'sleep()'
      ],

      answer: 1,

      explanation:
        'wait() pauses current thread.',
    },

    {
      question:
        'notifyAll() wakes?', 

      options: [
        'One thread',
        'All waiting threads',
        'Main thread',
        'Daemon thread'
      ],

      answer: 1,

      explanation:
        'notifyAll() wakes all waiting threads.',
    },

    {
      question:
        'wait() belongs to?', 

      options: [
        'Thread class',
        'Object class',
        'Runtime class',
        'String class'
      ],

      answer: 1,

      explanation:
        'wait() belongs to Object class.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is inter-thread communication in Java?',

      answer:
        'Inter-thread communication allows threads to coordinate execution using wait(), notify(), and notifyAll() methods.',
    },

    {
      question:
        'Why is wait() used inside synchronized block?',

      answer:
        'Because thread communication requires monitor locking for safe execution.',
    },
  ],

  nextTopic: 'java-interrupting-thread',
},

{
  id: 'java-interrupting-thread',

  title: 'Interrupting a Thread in Java',

  slug: 'java-interrupting-thread',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '28 min read',

  difficulty: 'Advanced',

  description:
    'Learn Interrupting a Thread in Java deeply including interrupt(), interruption handling, interrupted status, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Cognizant'],

  sections: [
    {
      heading: 'Interrupting a Thread in Java',

      content: `
• Introduction to Thread Interruption

• interrupt() Method

• InterruptedException

• interrupted() Method

• isInterrupted() Method

• Real-World Usage

• Advantages

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Thread Interruption',

      content: `
Thread interruption is mechanism used to stop or signal thread.

Used for:

• Graceful stopping
• Task cancellation
• Controlled execution
`.trim(),
    },

    {
      heading: 'interrupt() Method',

      content: `
interrupt() sends interruption signal to thread.

Syntax:

thread.interrupt();
`.trim(),
    },

    {
      heading: 'InterruptedException',

      content: `
Sleeping or waiting thread may throw:

• InterruptedException

Exception handling becomes necessary.
`.trim(),
    },

    {
      heading: 'interrupted() and isInterrupted()',

      content: `
interrupted():

• Static method
• Clears interrupted status

isInterrupted():

• Checks interruption status
`.trim(),
    },

    {
      heading: 'Advantages of Thread Interruption',

      content: `
• Controlled thread stopping
• Better task management
• Prevents force termination
• Improves application stability
`.trim(),
    },

    {
      heading: 'Important Points About Thread Interruption',

      content: `
• interrupt() sends interruption request
• InterruptedException occurs during waiting/sleeping
• isInterrupted() checks status
• Helps graceful thread termination

Common Beginner Mistakes:

• Ignoring InterruptedException
• Assuming interrupt() kills thread immediately
• Misunderstanding interruption status
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Thread Interruption Example',

      language: 'java',

      code: `class MyThread extends Thread {

    public void run() {

        try {

            Thread.sleep(2000);

            System.out.println(
                "Thread Running"
            );

        }

        catch(InterruptedException e) {

            System.out.println(
                "Thread Interrupted"
            );

        }

    }

}

public class Main {

    public static void main(String[] args) {

        MyThread t = new MyThread();

        t.start();

        t.interrupt();

    }

}`,

      output: 'Thread Interrupted',
    },
  ],

  mcqs: [
    {
      question:
        'Which method interrupts thread?',

      options: [
        'wait()',
        'interrupt()',
        'notify()',
        'join()'
      ],

      answer: 1,

      explanation:
        'interrupt() sends interruption signal.',
    },

    {
      question:
        'InterruptedException occurs during?', 

      options: [
        'Compilation',
        'sleep() or wait()',
        'Inheritance',
        'Array creation'
      ],

      answer: 1,

      explanation:
        'InterruptedException occurs during sleep() or wait().',
    },

    {
      question:
        'Which method checks interrupted status?',

      options: [
        'isInterrupted()',
        'run()',
        'yield()',
        'start()'
      ],

      answer: 0,

      explanation:
        'isInterrupted() checks interruption status.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is thread interruption in Java?',

      answer:
        'Thread interruption is mechanism used to signal thread for stopping or controlled execution.',
    },

    {
      question:
        'Does interrupt() immediately stop thread?',

      answer:
        'No, interrupt() only sends interruption request to thread.',
    },
  ],

  nextTopic: 'java-reentrant-monitor',
},

{
  id: 'java-reentrant-monitor',

  title: 'Reentrant Monitor in Java',

  slug: 'java-reentrant-monitor',

  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',

  readTime: '30 min read',

  difficulty: 'Advanced',

  description:
    'Learn Reentrant Monitor in Java deeply including reentrant locking, synchronized behavior, monitor ownership, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'HCL'],

  sections: [
    {
      heading: 'Reentrant Monitor in Java',

      content: `
• Introduction to Reentrant Monitor

• Reentrant Locking

• Monitor Ownership

• synchronized Behavior

• Nested Synchronization

• Real-World Usage

• Advantages

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Reentrant Monitor',

      content: `
Java synchronization uses reentrant monitors.

Meaning:

• Same thread can acquire same lock multiple times safely.
`.trim(),
    },

    {
      heading: 'How Reentrant Monitor Works',

      content: `
If thread already owns lock:

• It can enter synchronized method/block again

No deadlock occurs for same thread.
`.trim(),
    },

    {
      heading: 'Why Reentrant Monitor is Important',

      content: `
Without reentrant behavior:

• Nested synchronized calls may fail
• Thread execution becomes difficult
`.trim(),
    },

    {
      heading: 'Nested Synchronization',

      content: `
A synchronized method can call another synchronized method of same object safely.

Because:

• Same thread already owns monitor lock
`.trim(),
    },

    {
      heading: 'Advantages of Reentrant Monitor',

      content: `
• Prevents self-deadlock
• Supports nested synchronization
• Simplifies thread-safe design
• Improves code reliability
`.trim(),
    },

    {
      heading: 'Important Points About Reentrant Monitor',

      content: `
• Java monitors are reentrant by default
• Same thread can acquire same lock repeatedly
• Used internally by synchronized keyword
• Supports nested synchronized execution

Common Beginner Mistakes:

• Confusing reentrant monitor with recursive methods
• Assuming multiple threads can enter same synchronized block
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Reentrant Monitor Example',

      language: 'java',

      code: `class Test {

    synchronized void display() {

        System.out.println(
            "Display Method"
        );

        show();

    }

    synchronized void show() {

        System.out.println(
            "Show Method"
        );

    }

}

public class Main {

    public static void main(String[] args) {

        Test obj = new Test();

        obj.display();

    }

}`,

      output: `Display Method
Show Method`,
    },
  ],

  mcqs: [
    {
      question:
        'Reentrant monitor allows?', 

      options: [
        'Multiple JVMs',
        'Same thread acquiring same lock multiple times',
        'Compilation',
        'Array creation'
      ],

      answer: 1,

      explanation:
        'Reentrant monitor allows same thread to acquire same lock repeatedly.',
    },

    {
      question:
        'Java synchronization is?', 

      options: [
        'Non-reentrant',
        'Reentrant',
        'Static only',
        'Abstract'
      ],

      answer: 1,

      explanation:
        'Java synchronization is reentrant.',
    },

    {
      question:
        'Reentrant monitor helps prevent?', 

      options: [
        'Inheritance',
        'Self-deadlock',
        'Compilation',
        'Polymorphism'
      ],

      answer: 1,

      explanation:
        'Reentrant monitor prevents self-deadlock.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is reentrant monitor in Java?',

      answer:
        'Reentrant monitor allows same thread to acquire same monitor lock multiple times safely.',
    },

    {
      question:
        'Why is reentrant synchronization useful?',

      answer:
        'It supports nested synchronized calls and prevents self-deadlock.',
    },
  ],

  nextTopic: 'java-thread-join',
},

{
  id: 'java-thread-join',

  title: 'join() Method in Java',

  slug: 'java-thread-join',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '26 min read',

  difficulty: 'Intermediate',

  description:
    'Learn join() Method in Java deeply including thread waiting, execution order, synchronization between threads, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'],

  sections: [
    {
      heading: 'join() Method in Java',

      content: `
• Introduction to join()

• Thread Waiting

• Execution Order

• Synchronization Between Threads

• Real-World Usage

• Advantages

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to join() Method',

      content: `
join() method allows one thread to wait for another thread to complete.

Useful for:

• Sequential execution
• Task dependency
`.trim(),
    },

    {
      heading: 'How join() Works',

      content: `
When join() is called:

• Current thread pauses
• Waits until target thread finishes
`.trim(),
    },

    {
      heading: 'Why join() is Important',

      content: `
join() helps:

• Control execution order
• Avoid incomplete execution
• Synchronize dependent tasks
`.trim(),
    },

    {
      heading: 'Advantages of join()',

      content: `
• Better execution control
• Thread coordination
• Improved synchronization
• Predictable output
`.trim(),
    },

    {
      heading: 'Real-World Usage',

      content: `
Used in:

• Parallel task execution
• Data processing
• Report generation
• Server applications
`.trim(),
    },

    {
      heading: 'Important Points About join()',

      content: `
• join() waits for thread completion
• Helps sequential execution
• Improves coordination
• Common in dependent tasks

Common Beginner Mistakes:

• Forgetting InterruptedException handling
• Assuming join() stops thread
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'join() Method Example',

      language: 'java',

      code: `class MyThread extends Thread {

    public void run() {

        System.out.println(
            "Thread Finished"
        );

    }

}

public class Main {

    public static void main(String[] args)
        throws Exception {

        MyThread t1 = new MyThread();

        t1.start();

        t1.join();

        System.out.println(
            "Main Thread"
        );

    }

}`,

      output: `Thread Finished
Main Thread`,
    },
  ],

  mcqs: [
    {
      question:
        'join() method is used for?', 

      options: [
        'Compilation',
        'Waiting for thread completion',
        'Inheritance',
        'Garbage collection'
      ],

      answer: 1,

      explanation:
        'join() waits for thread completion.',
    },

    {
      question:
        'join() helps control?', 

      options: [
        'Variable names',
        'Execution order',
        'Packages',
        'Arrays'
      ],

      answer: 1,

      explanation:
        'join() controls execution order.',
    },

    {
      question:
        'join() may throw?', 

      options: [
        'ArithmeticException',
        'InterruptedException',
        'NullPointerException',
        'IOException'
      ],

      answer: 1,

      explanation:
        'join() may throw InterruptedException.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is join() method in Java?',

      answer:
        'join() allows one thread to wait until another thread finishes execution.',
    },

    {
      question:
        'Why is join() important in multithreading?',

      answer:
        'It helps synchronize dependent tasks and maintain execution order.',
    },
  ],

  nextTopic: 'java-thread-yield',
},

{
  id: 'java-thread-yield',

  title: 'yield() Method in Java',

  slug: 'java-thread-yield',

  image:
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd',

  readTime: '22 min read',

  difficulty: 'Intermediate',

  description:
    'Learn yield() Method in Java deeply including CPU scheduling, thread pausing, scheduler behavior, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Capgemini'],

  sections: [
    {
      heading: 'yield() Method in Java',

      content: `
• Introduction to yield()

• CPU Scheduling

• Thread Pausing

• Scheduler Behavior

• Thread Cooperation

• Real-World Usage

• Advantages

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to yield() Method',

      content: `
yield() temporarily pauses current thread.

Purpose:

• Give chance to other threads
`.trim(),
    },

    {
      heading: 'How yield() Works',

      content: `
Current thread moves from:

• Running state
to
• Runnable state

Scheduler may choose another thread.
`.trim(),
    },

    {
      heading: 'Why yield() is Useful',

      content: `
yield() helps:

• Cooperative multitasking
• Better CPU sharing
• Improved responsiveness
`.trim(),
    },

    {
      heading: 'Advantages of yield()',

      content: `
• Better thread cooperation
• Fair CPU usage
• Improved responsiveness
• Helps scheduler optimization
`.trim(),
    },

    {
      heading: 'Important Points About yield()',

      content: `
• yield() is static method
• Scheduler may ignore yield()
• Does not guarantee pause
• Improves cooperative execution

Common Beginner Mistakes:

• Assuming yield() always pauses thread
• Confusing yield() with sleep()
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'yield() Method Example',

      language: 'java',

      code: `class MyThread extends Thread {

    public void run() {

        for(int i = 1; i <= 3; i++) {

            System.out.println(i);

            Thread.yield();

        }

    }

}

public class Main {

    public static void main(String[] args) {

        MyThread t = new MyThread();

        t.start();

    }

}`,

      output: `1
2
3`,
    },
  ],

  mcqs: [
    {
      question:
        'yield() method mainly gives chance to?', 

      options: [
        'Compiler',
        'Other threads',
        'Arrays',
        'Packages'
      ],

      answer: 1,

      explanation:
        'yield() gives chance to other threads.',
    },

    {
      question:
        'yield() moves thread to?', 

      options: [
        'Dead state',
        'Runnable state',
        'Blocked state',
        'New state'
      ],

      answer: 1,

      explanation:
        'yield() moves thread to runnable state.',
    },

    {
      question:
        'yield() belongs to?', 

      options: [
        'Object class',
        'Runtime class',
        'Thread class',
        'Scanner class'
      ],

      answer: 2,

      explanation:
        'yield() belongs to Thread class.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is yield() method in Java?',

      answer:
        'yield() temporarily pauses current thread and gives CPU chance to other threads.',
    },

    {
      question:
        'Does yield() guarantee thread pause?',

      answer:
        'No, scheduler may ignore yield() request.',
    },
  ],

  nextTopic: 'java-input-output',
},
{
  id: 'java-input-output',

  title: 'Java Input/Output (I/O) Streams',

  slug: 'java-input-output',

  image:
    'https://images.unsplash.com/photo-1518770660439-4636190af475',

  readTime: '40 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java Input/Output deeply including streams, file handling, byte streams, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'HCL'],

  sections: [
    {
      heading: 'Java Input/Output (I/O)',

      content: `
• Introduction to I/O

• Streams in Java

• Byte Streams

• File Handling

• InputStream and OutputStream

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to Java I/O',

      content: `
Java I/O is used to perform input and output operations.

Examples:

• Reading data from keyboard
• Writing data to file
• File processing
`.trim(),
    },

    {
      heading: 'Streams in Java',

      content: `
Stream is a sequence of data flow.

Types:

• Byte Stream (binary data)
• Character Stream (text data)
`.trim(),
    },

    {
      heading: 'Byte Streams',

      content: `
Byte streams handle binary data like images, videos, files.

Main classes:

• InputStream
• OutputStream
`.trim(),
    },

    {
      heading: 'Why Java I/O is Important',

      content: `
• File handling
• Data storage
• Network communication
• System integration
`.trim(),
    },

    {
      heading: 'Important Points',

      content: `
• Java uses streams for I/O
• Data flows in sequence
• Streams can be input or output
• Always close streams after use

Common Mistakes:

• Not closing streams
• Using wrong stream type
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Simple File Write Example',

      language: 'java',

      code: `import java.io.FileOutputStream;

public class Main {

    public static void main(String[] args) throws Exception {

        FileOutputStream fos =
            new FileOutputStream("file.txt");

        fos.write("Hello Java".getBytes());

        fos.close();

    }

}`,

      output: 'File created with content',
    },
  ],

  mcqs: [
    {
      question: 'Java I/O is used for?',

      options: [
        'Compilation',
        'Input and Output operations',
        'Inheritance',
        'Polymorphism'
      ],

      answer: 1,

      explanation: 'Java I/O handles input and output operations.',
    },

    {
      question: 'Stream in Java is?',

      options: [
        'Data sequence',
        'Class loader',
        'Loop structure',
        'Package'
      ],

      answer: 0,

      explanation: 'Stream is a sequence of data flow.',
    },

    {
      question: 'Byte streams handle?',

      options: [
        'Only text',
        'Binary data',
        'Only numbers',
        'Only files'
      ],

      answer: 1,

      explanation: 'Byte streams handle binary data like images and files.',
    },
  ],

  interviewQuestions: [
    {
      question: 'What is Java I/O?',

      answer:
        'Java I/O is used to perform input and output operations like reading and writing data using streams.',
    },

    {
      question: 'What is a stream in Java?',

      answer:
        'A stream is a sequence of data used for input and output operations.',
    },
  ],

  nextTopic: 'java-fileoutputstream',
},

{
  id: 'java-fileoutputstream',

  title: 'Java FileOutputStream',

  slug: 'java-fileoutputstream',

  image:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',

  readTime: '28 min read',

  difficulty: 'Intermediate',

  description:
    'Learn FileOutputStream in Java deeply including writing data to files, byte streams, and file handling concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini'],

  sections: [
    {
      heading: 'Java FileOutputStream',

      content: `
• Introduction to FileOutputStream

• Writing Data to File

• Byte Stream Concept

• File Handling

• append mode

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is FileOutputStream?',

      content: `
FileOutputStream is used to write raw bytes to a file.

Used for:

• Writing text
• Writing binary data
`.trim(),
    },

    {
      heading: 'How FileOutputStream Works',

      content: `
Data is converted into bytes and written to file.

Flow:

Program → bytes → file
`.trim(),
    },

    {
      heading: 'Why FileOutputStream is Used',

      content: `
• File writing
• Data storage
• Image/audio writing
`.trim(),
    },

    {
      heading: 'Important Points',

      content: `
• Writes byte by byte
• Overwrites file by default
• Must close stream after use

Common Mistakes:

• Forgetting close()
• Writing without conversion
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'FileOutputStream Example',

      language: 'java',

      code: `import java.io.FileOutputStream;

public class Main {

    public static void main(String[] args) throws Exception {

        FileOutputStream fos =
            new FileOutputStream("test.txt");

        String data = "Hello FileOutputStream";

        fos.write(data.getBytes());

        fos.close();

    }

}`,

      output: 'Data written to file',
    },
  ],

  mcqs: [
    {
      question: 'FileOutputStream is used for?',

      options: [
        'Reading file',
        'Writing file',
        'Deleting file',
        'Compiling code'
      ],

      answer: 1,

      explanation: 'FileOutputStream is used to write data to file.',
    },

    {
      question: 'FileOutputStream writes data in?',

      options: [
        'Characters',
        'Bytes',
        'Objects',
        'Methods'
      ],

      answer: 1,

      explanation: 'It writes data in byte format.',
    },

    {
      question: 'Default behavior of FileOutputStream is?',

      options: [
        'Append data',
        'Overwrite file',
        'Delete file',
        'Compile file'
      ],

      answer: 1,

      explanation: 'It overwrites file by default.',
    },
  ],

  interviewQuestions: [
    {
      question: 'What is FileOutputStream?',

      answer:
        'FileOutputStream is used to write byte data into a file in Java.',
    },

    {
      question: 'Why do we use getBytes() method?',

      answer:
        'Because FileOutputStream writes data in byte format.',
    },
  ],

  nextTopic: 'java-fileinputstream',
},

{
  id: 'java-fileinputstream',

  title: 'Java FileInputStream',

  slug: 'java-fileinputstream',

  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',

  readTime: '28 min read',

  difficulty: 'Intermediate',

  description:
    'Learn FileInputStream in Java deeply including reading files, byte streams, and file processing.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'HCL'],

  sections: [
    {
      heading: 'Java FileInputStream',

      content: `
• Introduction to FileInputStream

• Reading File Data

• Byte Stream Processing

• File Handling

• read() Method

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is FileInputStream?',

      content: `
FileInputStream is used to read data from a file in byte form.

Used for:

• Reading files
• Processing binary data
`.trim(),
    },

    {
      heading: 'How FileInputStream Works',

      content: `
File data is read byte by byte.

Flow:

File → bytes → program
`.trim(),
    },

    {
      heading: 'read() Method',

      content: `
read() reads one byte at a time.

Returns:

• ASCII value
• -1 when end of file
`.trim(),
    },

    {
      heading: 'Important Points',

      content: `
• Reads byte by byte
• Used for binary files
• Must close stream

Common Mistakes:

• Not checking -1 condition
• Not closing stream
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'FileInputStream Example',

      language: 'java',

      code: `import java.io.FileInputStream;

public class Main {

    public static void main(String[] args) throws Exception {

        FileInputStream fis =
            new FileInputStream("test.txt");

        int i;

        while((i = fis.read()) != -1) {

            System.out.print((char)i);

        }

        fis.close();

    }

}`,

      output: 'File content displayed',
    },
  ],

  mcqs: [
    {
      question: 'FileInputStream is used for?',

      options: [
        'Writing file',
        'Reading file',
        'Deleting file',
        'Compiling code'
      ],

      answer: 1,

      explanation: 'FileInputStream reads data from file.',
    },

    {
      question: 'read() method returns?',

      options: [
        'String',
        'Object',
        'Byte value',
        'Boolean'
      ],

      answer: 2,

      explanation: 'read() returns byte/ASCII value.',
    },

    {
      question: 'End of file is represented by?',

      options: [
        '0',
        '1',
        '-1',
        'null'
      ],

      answer: 2,

      explanation: '-1 indicates end of file.',
    },
  ],

  interviewQuestions: [
    {
      question: 'What is FileInputStream?',

      answer:
        'FileInputStream is used to read byte data from a file in Java.',
    },

    {
      question: 'Why is -1 important in FileInputStream?',

      answer:
        'It indicates end of file while reading data.',
    },
  ],

  nextTopic: 'java-bufferedoutputstream',
},

{
  id: 'java-bufferedoutputstream',

  title: 'Java BufferedOutputStream',

  slug: 'java-bufferedoutputstream',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '30 min read',

  difficulty: 'Intermediate',

  description:
    'Learn BufferedOutputStream in Java deeply including buffering, performance improvement, and file writing optimization.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'],

  sections: [
    {
      heading: 'Java BufferedOutputStream',

      content: `
• Introduction to BufferedOutputStream

• Buffer Concept

• Performance Improvement

• File Writing Optimization

• flush() Method

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is BufferedOutputStream?',

      content: `
BufferedOutputStream is used to improve performance of file writing.

It stores data in buffer before writing to file.
`.trim(),
    },

    {
      heading: 'Why Buffering is Important',

      content: `
Without buffering:

• Each byte is written individually (slow)

With buffering:

• Data is written in chunks (fast)
`.trim(),
    },

    {
      heading: 'flush() Method',

      content: `
flush() forces buffered data to be written to file immediately.
`.trim(),
    },

    {
      heading: 'Advantages',

      content: `
• Faster file writing
• Reduces I/O operations
• Improves performance
`.trim(),
    },

    {
      heading: 'Important Points',

      content: `
• Works with FileOutputStream
• Uses internal buffer
• Must call flush/close

Common Mistakes:

• Not flushing data
• Forgetting to close stream
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'BufferedOutputStream Example',

      language: 'java',

      code: `import java.io.*;

public class Main {

    public static void main(String[] args) throws Exception {

        FileOutputStream fos =
            new FileOutputStream("file.txt");

        BufferedOutputStream bos =
            new BufferedOutputStream(fos);

        String data = "Buffered Output Stream Example";

        bos.write(data.getBytes());

        bos.flush();

        bos.close();

    }

}`,

      output: 'Data written using buffer',
    },
  ],

  mcqs: [
    {
      question: 'BufferedOutputStream improves?',

      options: [
        'Compilation',
        'Performance',
        'Inheritance',
        'Polymorphism'
      ],

      answer: 1,

      explanation: 'It improves file writing performance.',
    },

    {
      question: 'flush() is used to?',

      options: [
        'Delete data',
        'Clear buffer',
        'Write buffered data',
        'Compile code'
      ],

      answer: 2,

      explanation: 'flush() writes buffered data to file.',
    },

    {
      question: 'BufferedOutputStream reduces?',

      options: [
        'Memory',
        'CPU',
        'I/O operations',
        'Classes'
      ],

      answer: 2,

      explanation: 'It reduces number of I/O operations.',
    },
  ],

  interviewQuestions: [
    {
      question: 'What is BufferedOutputStream?',

      answer:
        'BufferedOutputStream is used to improve efficiency of writing data to files by using buffer memory.',
    },

    {
      question: 'Why is buffering used in Java I/O?',

      answer:
        'It reduces number of I/O operations and improves performance.',
    },
  ],

  nextTopic: 'java-bufferedinputstream',
},

{
  id: 'java-bufferedinputstream',

  title: 'Java BufferedInputStream',

  slug: 'java-bufferedinputstream',

  image:
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd',

  readTime: '30 min read',

  difficulty: 'Intermediate',

  description:
    'Learn BufferedInputStream in Java deeply including buffered reading, performance improvement, and file reading optimization.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Capgemini'],

  sections: [
    {
      heading: 'Java BufferedInputStream',

      content: `
• Introduction to BufferedInputStream

• Buffer Concept

• Performance Improvement

• File Reading Optimization

• read() Method

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is BufferedInputStream?',

      content: `
BufferedInputStream is used to improve performance of file reading.

It reads data in chunks instead of byte-by-byte.
`.trim(),
    },

    {
      heading: 'Why Buffering is Important',

      content: `
Without buffering:

• Slow reading (byte by byte)

With buffering:

• Faster reading using memory buffer
`.trim(),
    },

    {
      heading: 'read() Method',

      content: `
Reads data from buffer first, then file.

Returns:

• byte value
• -1 at end of file
`.trim(),
    },

    {
      heading: 'Advantages',

      content: `
• Faster file reading
• Reduced I/O operations
• Better performance
`.trim(),
    },

    {
      heading: 'Important Points',

      content: `
• Works with FileInputStream
• Uses internal buffer
• Must close stream

Common Mistakes:

• Not closing stream
• Ignoring buffer usage
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'BufferedInputStream Example',

      language: 'java',

      code: `import java.io.*;

public class Main {

    public static void main(String[] args) throws Exception {

        FileInputStream fis =
            new FileInputStream("file.txt");

        BufferedInputStream bis =
            new BufferedInputStream(fis);

        int i;

        while((i = bis.read()) != -1) {

            System.out.print((char)i);

        }

        bis.close();

    }

}`,

      output: 'File content displayed faster',
    },
  ],

  mcqs: [
    {
      question: 'BufferedInputStream improves?',

      options: [
        'Compilation',
        'Reading performance',
        'Inheritance',
        'Polymorphism'
      ],

      answer: 1,

      explanation: 'It improves file reading performance.',
    },

    {
      question: 'BufferedInputStream reads data in?',

      options: [
        'Characters only',
        'Chunks',
        'Methods',
        'Objects'
      ],

      answer: 1,

      explanation: 'It reads data in chunks using buffer.',
    },

    {
      question: 'BufferedInputStream is used with?',

      options: [
        'Scanner',
        'FileInputStream',
        'PrintStream',
        'ObjectInputStream'
      ],

      answer: 1,

      explanation: 'It is used with FileInputStream.',
    },
  ],

  interviewQuestions: [
    {
      question: 'What is BufferedInputStream?',

      answer:
        'BufferedInputStream is used to improve efficiency of reading data from files using buffering.',
    },

    {
      question: 'Why is buffering important in Java I/O?',

      answer:
        'It reduces I/O operations and improves performance.',
    },
  ],

  nextTopic: 'java-file-handling',
},
{
  id: 'java-file-handling',

  title: 'File Handling in Java',

  slug: 'java-file-handling',

  image:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',

  readTime: '42 min read',

  difficulty: 'Intermediate',

  description:
    'Learn File Handling in Java deeply including file creation, reading, writing, deletion, and important interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Capgemini'],

  sections: [
    {
      heading: 'File Handling in Java',

      content: `
• Introduction to File Handling

• File Operations

• File Creation

• File Reading

• File Writing

• File Deletion

• File Class

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to File Handling',

      content: `
File handling allows Java programs to:

• Store data permanently
• Read saved data
• Modify files
• Delete files

Java provides powerful file handling classes in java.io package.
`.trim(),
    },

    {
      heading: 'Common File Operations',

      content: `
Important file operations:

1. Create file
2. Read file
3. Write file
4. Delete file
5. Rename file
`.trim(),
    },

    {
      heading: 'Why File Handling is Important',

      content: `
File handling is used in:

• Banking systems
• Student management systems
• Data storage
• Logging systems
• Configuration files
`.trim(),
    },

    {
      heading: 'Advantages of File Handling',

      content: `
• Permanent data storage
• Easy data management
• Fast data retrieval
• Better application control
`.trim(),
    },

    {
      heading: 'Important Points About File Handling',

      content: `
• Java uses java.io package
• Files can store large data
• Always close file resources
• Handle exceptions properly

Common Beginner Mistakes:

• Forgetting close()
• Using wrong file path
• Ignoring exceptions
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Simple File Handling Example',

      language: 'java',

      code: `import java.io.File;
import java.io.FileWriter;

public class Main {

    public static void main(String[] args)
        throws Exception {

        File file = new File("data.txt");

        file.createNewFile();

        FileWriter writer =
            new FileWriter(file);

        writer.write("Java File Handling");

        writer.close();

        System.out.println(
            "File Created Successfully"
        );

    }

}`,

      output: 'File Created Successfully',
    },
  ],

  mcqs: [
    {
      question:
        'Which package is mainly used for file handling?',

      options: [
        'java.util',
        'java.io',
        'java.lang',
        'java.sql'
      ],

      answer: 1,

      explanation:
        'java.io package is mainly used for file handling.',
    },

    {
      question:
        'File handling is used for?', 

      options: [
        'Temporary storage',
        'Permanent data storage',
        'Compilation',
        'Inheritance'
      ],

      answer: 1,

      explanation:
        'File handling stores data permanently.',
    },

    {
      question:
        'Which operation is part of file handling?',

      options: [
        'Reading file',
        'Inheritance',
        'Polymorphism',
        'Compilation'
      ],

      answer: 0,

      explanation:
        'Reading files is important file handling operation.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is file handling in Java?',

      answer:
        'File handling is process of creating, reading, writing, and deleting files using Java programs.',
    },

    {
      question:
        'Why is file handling important?',

      answer:
        'It allows permanent data storage and efficient data management.',
    },
  ],

  nextTopic: 'java-file-class',
},

{
  id: 'java-file-class',

  title: 'Java File class',

  slug: 'java-file-class',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '32 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java File class deeply including file creation, path handling, directory management, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'],

  sections: [
    {
      heading: 'Java File class',

      content: `
• Introduction to File class

• Creating File Objects

• File Path Handling

• File Information Methods

• Directory Handling

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is File class?',

      content: `
File class represents file and directory pathnames.

Used for:

• File creation
• File information
• Directory operations
`.trim(),
    },

    {
      heading: 'Creating File Object',

      content: `
Syntax:

File file = new File("data.txt");

File object represents file path.
`.trim(),
    },

    {
      heading: 'Useful Methods of File class',

      content: `
Important methods:

• createNewFile()
• exists()
• delete()
• getName()
• length()
• mkdir()
`.trim(),
    },

    {
      heading: 'Why File class is Important',

      content: `
File class helps:

• Manage files
• Access file details
• Work with directories
`.trim(),
    },

    {
      heading: 'Important Points About File class',

      content: `
• File class belongs to java.io package
• Represents files and directories
• Does not read/write data directly
• Used with streams for data operations

Common Beginner Mistakes:

• Confusing file object with actual file content
• Forgetting exception handling
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'File class Example',

      language: 'java',

      code: `import java.io.File;

public class Main {

    public static void main(String[] args)
        throws Exception {

        File file = new File("sample.txt");

        if(file.createNewFile()) {

            System.out.println(
                "File Created"
            );

        }

        else {

            System.out.println(
                "File Already Exists"
            );

        }

    }

}`,

      output: 'File Created',
    },
  ],

  mcqs: [
    {
      question:
        'File class belongs to which package?',

      options: [
        'java.lang',
        'java.io',
        'java.util',
        'java.sql'
      ],

      answer: 1,

      explanation:
        'File class belongs to java.io package.',
    },

    {
      question:
        'File class represents?', 

      options: [
        'Only data',
        'File and directory pathnames',
        'Compiler',
        'Thread'
      ],

      answer: 1,

      explanation:
        'File class represents files and directories.',
    },

    {
      question:
        'Which method creates new file?',

      options: [
        'newFile()',
        'createNewFile()',
        'makeFile()',
        'buildFile()'
      ],

      answer: 1,

      explanation:
        'createNewFile() creates file.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is File class in Java?',

      answer:
        'File class represents file and directory pathnames and provides methods for file operations.',
    },

    {
      question:
        'Does File class read/write file data directly?',

      answer:
        'No, File class only manages file information and paths.',
    },
  ],

  nextTopic: 'java-create-file',
},

{
  id: 'java-create-file',

  title: 'How to Create a File in Java',

  slug: 'java-create-file',

  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',

  readTime: '26 min read',

  difficulty: 'Beginner',

  description:
    'Learn how to create files in Java deeply including createNewFile(), file paths, exception handling, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'HCL'],

  sections: [
    {
      heading: 'How to Create a File in Java',

      content: `
• Introduction to File Creation

• createNewFile() Method

• File Paths

• Exception Handling

• File Existence Checking

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to File Creation',

      content: `
Java provides File class for creating files.

Main method used:

• createNewFile()
`.trim(),
    },

    {
      heading: 'createNewFile() Method',

      content: `
createNewFile():

• Creates new empty file
• Returns true if file created
• Returns false if file already exists
`.trim(),
    },

    {
      heading: 'Why File Creation is Important',

      content: `
Used in:

• Report generation
• Data storage
• Log files
• Configuration systems
`.trim(),
    },

    {
      heading: 'Exception Handling',

      content: `
File creation may throw exceptions.

Common exception:

• IOException
`.trim(),
    },

    {
      heading: 'Important Points About File Creation',

      content: `
• File class is required
• File path must be valid
• IOException should be handled
• File may already exist

Common Beginner Mistakes:

• Wrong file path
• Ignoring exceptions
• Forgetting import statement
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Create File Example',

      language: 'java',

      code: `import java.io.File;

public class Main {

    public static void main(String[] args)
        throws Exception {

        File file = new File("newfile.txt");

        if(file.createNewFile()) {

            System.out.println(
                "File Created Successfully"
            );

        }

        else {

            System.out.println(
                "File Already Exists"
            );

        }

    }

}`,

      output: 'File Created Successfully',
    },
  ],

  mcqs: [
    {
      question:
        'Which method creates new file?',

      options: [
        'makeFile()',
        'buildFile()',
        'createNewFile()',
        'generateFile()'
      ],

      answer: 2,

      explanation:
        'createNewFile() creates new file.',
    },

    {
      question:
        'createNewFile() returns false when?', 

      options: [
        'Compilation fails',
        'File already exists',
        'Thread stops',
        'Array created'
      ],

      answer: 1,

      explanation:
        'It returns false if file already exists.',
    },

    {
      question:
        'Which exception may occur during file creation?',

      options: [
        'ArithmeticException',
        'IOException',
        'NullPointerException',
        'ClassCastException'
      ],

      answer: 1,

      explanation:
        'IOException may occur during file operations.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'How do you create a file in Java?',

      answer:
        'File can be created using File class and createNewFile() method.',
    },

    {
      question:
        'What does createNewFile() return?',

      answer:
        'It returns true if file is newly created and false if file already exists.',
    },
  ],

  nextTopic: 'java-read-file',
},

{
  id: 'java-read-file',

  title: 'How to Read File in Java',

  slug: 'java-read-file',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '32 min read',

  difficulty: 'Intermediate',

  description:
    'Learn how to read files in Java deeply including Scanner class, FileReader, buffering, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini'],

  sections: [
    {
      heading: 'How to Read File in Java',

      content: `
• Introduction to File Reading

• Scanner Class

• FileReader

• Buffered Reading

• Reading Line by Line

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to File Reading',

      content: `
Java provides multiple ways to read files.

Common classes:

• Scanner
• FileReader
• BufferedReader
`.trim(),
    },

    {
      heading: 'Using Scanner Class',

      content: `
Scanner reads file data easily.

Useful for:

• Reading text
• Reading line by line
`.trim(),
    },

    {
      heading: 'Why Buffered Reading is Important',

      content: `
Buffered reading improves:

• Reading speed
• Performance
• Efficiency
`.trim(),
    },

    {
      heading: 'Real-world Usage',

      content: `
Used in:

• Log processing
• Data analysis
• Student records
• Configuration reading
`.trim(),
    },

    {
      heading: 'Important Points About File Reading',

      content: `
• File path must exist
• Close readers after use
• Handle exceptions properly
• Buffered reading is faster

Common Beginner Mistakes:

• Forgetting close()
• Wrong file path
• Ignoring exceptions
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Read File Example',

      language: 'java',

      code: `import java.io.File;
import java.util.Scanner;

public class Main {

    public static void main(String[] args)
        throws Exception {

        File file = new File("data.txt");

        Scanner sc = new Scanner(file);

        while(sc.hasNextLine()) {

            System.out.println(
                sc.nextLine()
            );

        }

        sc.close();

    }

}`,

      output: 'File content displayed',
    },
  ],

  mcqs: [
    {
      question:
        'Which class is commonly used to read files?',

      options: [
        'Thread',
        'Scanner',
        'Runtime',
        'Object'
      ],

      answer: 1,

      explanation:
        'Scanner is commonly used for file reading.',
    },

    {
      question:
        'Buffered reading improves?', 

      options: [
        'Compilation',
        'Performance',
        'Inheritance',
        'Polymorphism'
      ],

      answer: 1,

      explanation:
        'Buffered reading improves performance.',
    },

    {
      question:
        'Which method checks next line availability?',

      options: [
        'next()',
        'hasNextLine()',
        'lineAvailable()',
        'checkLine()'
      ],

      answer: 1,

      explanation:
        'hasNextLine() checks line availability.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'How can files be read in Java?',

      answer:
        'Files can be read using Scanner, FileReader, or BufferedReader classes.',
    },

    {
      question:
        'Why is BufferedReader faster?',

      answer:
        'Because it reads data using buffer memory instead of character-by-character reading.',
    },
  ],

  nextTopic: 'java-delete-file',
},

{
  id: 'java-delete-file',

  title: 'How to Delete a File in Java',

  slug: 'java-delete-file',

  image:
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd',

  readTime: '24 min read',

  difficulty: 'Beginner',

  description:
    'Learn how to delete files in Java deeply including delete() method, file checking, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Cognizant'],

  sections: [
    {
      heading: 'How to Delete a File in Java',

      content: `
• Introduction to File Deletion

• delete() Method

• File Existence Checking

• Safe File Removal

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to File Deletion',

      content: `
Java File class provides delete() method to remove files.
`.trim(),
    },

    {
      heading: 'delete() Method',

      content: `
delete():

• Deletes file permanently
• Returns true if deletion successful
• Returns false if deletion fails
`.trim(),
    },

    {
      heading: 'Why File Deletion is Important',

      content: `
Used for:

• Removing temporary files
• Cleaning logs
• Storage management
`.trim(),
    },

    {
      heading: 'Safe File Deletion',

      content: `
Always check:

• File existence
• File permissions
• Important data backup
`.trim(),
    },

    {
      heading: 'Important Points About File Deletion',

      content: `
• delete() removes file permanently
• Deleted file cannot be recovered easily
• Always check existence before deletion

Common Beginner Mistakes:

• Deleting wrong file
• Not checking delete() result
• Ignoring permissions
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Delete File Example',

      language: 'java',

      code: `import java.io.File;

public class Main {

    public static void main(String[] args) {

        File file = new File("data.txt");

        if(file.delete()) {

            System.out.println(
                "File Deleted Successfully"
            );

        }

        else {

            System.out.println(
                "Unable to Delete File"
            );

        }

    }

}`,

      output: 'File Deleted Successfully',
    },
  ],

  mcqs: [
    {
      question:
        'Which method deletes file?',

      options: [
        'remove()',
        'erase()',
        'delete()',
        'clear()'
      ],

      answer: 2,

      explanation:
        'delete() method removes file.',
    },

    {
      question:
        'delete() returns true when?', 

      options: [
        'Compilation succeeds',
        'File deleted successfully',
        'Array created',
        'File opened'
      ],

      answer: 1,

      explanation:
        'delete() returns true if deletion successful.',
    },

    {
      question:
        'File deletion is?', 

      options: [
        'Temporary',
        'Permanent',
        'Virtual',
        'Automatic'
      ],

      answer: 1,

      explanation:
        'File deletion is permanent.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'How can file be deleted in Java?',

      answer:
        'File can be deleted using delete() method of File class.',
    },

    {
      question:
        'Why should delete() return value be checked?',

      answer:
        'Because deletion may fail due to permissions or missing file.',
    },
  ],

  nextTopic: 'java-filepermission-class',
},
{
  id: 'java-filepermission-class',

  title: 'Java FilePermission class',

  slug: 'java-filepermission-class',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '28 min read',

  difficulty: 'Advanced',

  description:
    'Learn Java FilePermission class deeply including file access permissions, security management, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Accenture'],

  sections: [
    {
      heading: 'Java FilePermission class',

      content: `
• Introduction to FilePermission

• File Access Security

• Read Permission

• Write Permission

• Execute Permission

• Security Management

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is FilePermission class?',

      content: `
FilePermission class is used to control access permissions for files and directories.

It belongs to:

• java.io package
`.trim(),
    },

    {
      heading: 'Why FilePermission is Important',

      content: `
FilePermission helps:

• Secure file access
• Restrict unauthorized operations
• Protect sensitive files
`.trim(),
    },

    {
      heading: 'Types of Permissions',

      content: `
Common permissions:

• read
• write
• execute
• delete
`.trim(),
    },

    {
      heading: 'Real-world Usage',

      content: `
Used in:

• Enterprise applications
• Secure systems
• Banking software
• File protection systems
`.trim(),
    },

    {
      heading: 'Important Points About FilePermission',

      content: `
• Used for security management
• Controls file operations
• Supports multiple permissions
• Improves application security

Common Beginner Mistakes:

• Using invalid permission names
• Forgetting security concepts
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'FilePermission Example',

      language: 'java',

      code: `import java.io.FilePermission;

public class Main {

    public static void main(String[] args) {

        FilePermission fp =
            new FilePermission(
                "data.txt",
                "read"
            );

        System.out.println(
            fp.getActions()
        );

    }

}`,

      output: 'read',
    },
  ],

  mcqs: [
    {
      question:
        'FilePermission class is used for?',

      options: [
        'Thread creation',
        'File security',
        'Compilation',
        'Inheritance'
      ],

      answer: 1,

      explanation:
        'FilePermission controls file security permissions.',
    },

    {
      question:
        'Which permission allows file reading?',

      options: [
        'execute',
        'write',
        'read',
        'delete'
      ],

      answer: 2,

      explanation:
        'read permission allows file reading.',
    },

    {
      question:
        'FilePermission belongs to?', 

      options: [
        'java.util',
        'java.lang',
        'java.io',
        'java.sql'
      ],

      answer: 2,

      explanation:
        'FilePermission belongs to java.io package.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is FilePermission class in Java?',

      answer:
        'FilePermission class is used to control access permissions for files and directories.',
    },

    {
      question:
        'Why is FilePermission important?',

      answer:
        'It improves application security by controlling file access operations.',
    },
  ],

  nextTopic: 'java-filedescriptor-class',
},

{
  id: 'java-filedescriptor-class',

  title: 'Java FileDescriptor class',

  slug: 'java-filedescriptor-class',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '30 min read',

  difficulty: 'Advanced',

  description:
    'Learn Java FileDescriptor class deeply including low-level file handling, stream management, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Cognizant'],

  sections: [
    {
      heading: 'Java FileDescriptor class',

      content: `
• Introduction to FileDescriptor

• Low-level File Access

• Stream Connection

• Standard Input and Output

• File Descriptor Management

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is FileDescriptor class?',

      content: `
FileDescriptor class represents connection to file, socket, or input/output resource.

It is low-level system object.
`.trim(),
    },

    {
      heading: 'Why FileDescriptor is Important',

      content: `
FileDescriptor helps:

• Access underlying file resource
• Manage stream connections
• Handle low-level I/O
`.trim(),
    },

    {
      heading: 'Standard Descriptors',

      content: `
Java provides standard descriptors:

• FileDescriptor.in
• FileDescriptor.out
• FileDescriptor.err
`.trim(),
    },

    {
      heading: 'Advantages of FileDescriptor',

      content: `
• Low-level control
• Better resource management
• Stream connectivity
`.trim(),
    },

    {
      heading: 'Important Points About FileDescriptor',

      content: `
• Represents system-level resource
• Used with streams
• Supports low-level operations
• Part of java.io package

Common Beginner Mistakes:

• Confusing descriptor with file object
• Ignoring resource handling
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'FileDescriptor Example',

      language: 'java',

      code: `import java.io.*;

public class Main {

    public static void main(String[] args)
        throws Exception {

        FileOutputStream fos =
            new FileOutputStream("data.txt");

        FileDescriptor fd =
            fos.getFD();

        System.out.println(
            fd.valid()
        );

        fos.close();

    }

}`,

      output: 'true',
    },
  ],

  mcqs: [
    {
      question:
        'FileDescriptor represents?', 

      options: [
        'Loop',
        'Low-level file resource',
        'Package',
        'Array'
      ],

      answer: 1,

      explanation:
        'FileDescriptor represents low-level resource.',
    },

    {
      question:
        'Which method checks descriptor validity?',

      options: [
        'exists()',
        'valid()',
        'check()',
        'verify()'
      ],

      answer: 1,

      explanation:
        'valid() checks descriptor validity.',
    },

    {
      question:
        'FileDescriptor belongs to?', 

      options: [
        'java.io',
        'java.sql',
        'java.util',
        'java.lang'
      ],

      answer: 0,

      explanation:
        'FileDescriptor belongs to java.io package.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is FileDescriptor class in Java?',

      answer:
        'FileDescriptor represents low-level connection to file or I/O resource.',
    },

    {
      question:
        'Why is FileDescriptor useful?',

      answer:
        'It provides low-level access and management of file resources.',
    },
  ],

  nextTopic: 'java-randomaccessfile',
},

{
  id: 'java-randomaccessfile',

  title: 'Java RandomAccessFile',

  slug: 'java-randomaccessfile',

  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',

  readTime: '36 min read',

  difficulty: 'Advanced',

  description:
    'Learn Java RandomAccessFile deeply including random file access, seek() method, file pointer handling, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'HCL'],

  sections: [
    {
      heading: 'Java RandomAccessFile',

      content: `
• Introduction to RandomAccessFile

• Random File Access

• seek() Method

• File Pointer

• Reading and Writing

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is RandomAccessFile?',

      content: `
RandomAccessFile allows reading and writing at any position in file.

Unlike streams:

• Data can be accessed randomly
`.trim(),
    },

    {
      heading: 'Why RandomAccessFile is Important',

      content: `
Used for:

• Database systems
• File editing
• Large file processing
• Record management
`.trim(),
    },

    {
      heading: 'seek() Method',

      content: `
seek() moves file pointer to specific position.

Syntax:

raf.seek(position);
`.trim(),
    },

    {
      heading: 'File Pointer Concept',

      content: `
File pointer indicates current file position.

Operations happen from pointer location.
`.trim(),
    },

    {
      heading: 'Important Points About RandomAccessFile',

      content: `
• Supports read and write
• Allows direct file access
• Uses file pointer
• Faster for large files

Common Beginner Mistakes:

• Wrong seek positions
• Forgetting close()
• Confusing with sequential streams
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'RandomAccessFile Example',

      language: 'java',

      code: `import java.io.RandomAccessFile;

public class Main {

    public static void main(String[] args)
        throws Exception {

        RandomAccessFile raf =
            new RandomAccessFile(
                "data.txt",
                "rw"
            );

        raf.writeUTF("Java");

        raf.seek(0);

        System.out.println(
            raf.readUTF()
        );

        raf.close();

    }

}`,

      output: 'Java',
    },
  ],

  mcqs: [
    {
      question:
        'RandomAccessFile allows?', 

      options: [
        'Only sequential access',
        'Random file access',
        'Only compilation',
        'Only inheritance'
      ],

      answer: 1,

      explanation:
        'RandomAccessFile supports random file access.',
    },

    {
      question:
        'Which method changes file pointer position?',

      options: [
        'move()',
        'seek()',
        'shift()',
        'locate()'
      ],

      answer: 1,

      explanation:
        'seek() changes file pointer position.',
    },

    {
      question:
        'RandomAccessFile supports?', 

      options: [
        'Only reading',
        'Only writing',
        'Both reading and writing',
        'Only deletion'
      ],

      answer: 2,

      explanation:
        'RandomAccessFile supports both reading and writing.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is RandomAccessFile in Java?',

      answer:
        'RandomAccessFile allows reading and writing data at any position inside file.',
    },

    {
      question:
        'What is purpose of seek() method?',

      answer:
        'seek() moves file pointer to specific location inside file.',
    },
  ],

  nextTopic: 'java-create-zip-file',
},

{
  id: 'java-create-zip-file',

  title: 'How to Create a Zip File in Java',

  slug: 'java-create-zip-file',

  image:
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd',

  readTime: '34 min read',

  difficulty: 'Advanced',

  description:
    'Learn how to create ZIP files in Java deeply including ZipOutputStream, compression concepts, and interview questions.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'IBM'],

  sections: [
    {
      heading: 'How to Create a Zip File in Java',

      content: `
• Introduction to ZIP Files

• ZipOutputStream

• Compression Concept

• Adding Files to ZIP

• File Archiving

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'Introduction to ZIP Files',

      content: `
ZIP file compresses one or more files into single archive.

Benefits:

• Reduced file size
• Easy file sharing
`.trim(),
    },

    {
      heading: 'ZipOutputStream',

      content: `
ZipOutputStream is used to create ZIP files in Java.

It belongs to:

• java.util.zip package
`.trim(),
    },

    {
      heading: 'Why ZIP Files are Important',

      content: `
Used for:

• File backup
• Data transfer
• Software distribution
• Storage optimization
`.trim(),
    },

    {
      heading: 'Compression Concept',

      content: `
Compression reduces storage size by encoding data efficiently.
`.trim(),
    },

    {
      heading: 'Important Points About ZIP Files',

      content: `
• ZIP combines multiple files
• Compression saves storage
• ZipOutputStream creates ZIP archives
• Useful for file transfer

Common Beginner Mistakes:

• Forgetting closeEntry()
• Ignoring stream closing
• Wrong file paths
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Create ZIP File Example',

      language: 'java',

      code: `import java.io.*;
import java.util.zip.*;

public class Main {

    public static void main(String[] args)
        throws Exception {

        FileOutputStream fos =
            new FileOutputStream("data.zip");

        ZipOutputStream zos =
            new ZipOutputStream(fos);

        ZipEntry entry =
            new ZipEntry("text.txt");

        zos.putNextEntry(entry);

        byte[] data =
            "Hello Java ZIP".getBytes();

        zos.write(data, 0, data.length);

        zos.closeEntry();

        zos.close();

        System.out.println(
            "ZIP File Created"
        );

    }

}`,

      output: 'ZIP File Created',
    },
  ],

  mcqs: [
    {
      question:
        'Which class creates ZIP files?',

      options: [
        'FileWriter',
        'ZipOutputStream',
        'Scanner',
        'BufferedReader'
      ],

      answer: 1,

      explanation:
        'ZipOutputStream creates ZIP files.',
    },

    {
      question:
        'ZIP files are used for?', 

      options: [
        'Compilation',
        'Compression',
        'Inheritance',
        'Threading'
      ],

      answer: 1,

      explanation:
        'ZIP files are mainly used for compression.',
    },

    {
      question:
        'ZipOutputStream belongs to?', 

      options: [
        'java.io',
        'java.sql',
        'java.util.zip',
        'java.net'
      ],

      answer: 2,

      explanation:
        'ZipOutputStream belongs to java.util.zip package.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'How do you create ZIP file in Java?',

      answer:
        'ZIP files can be created using ZipOutputStream class from java.util.zip package.',
    },

    {
      question:
        'Why are ZIP files useful?',

      answer:
        'ZIP files reduce storage size and simplify file sharing.',
    },
  ],

  nextTopic: 'java-serialization',
},

{
  id: 'java-serialization',

  title: 'Serialization in Java',

  slug: 'java-serialization',

  image:
    'https://images.unsplash.com/photo-1518770660439-4636190af475',

  readTime: '38 min read',

  difficulty: 'Advanced',

  description:
    'Learn Serialization in Java deeply including object conversion, Serializable interface, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Oracle'],

  sections: [
    {
      heading: 'Serialization in Java',

      content: `
• Introduction to Serialization

• Serializable Interface

• Object Streams

• Object Persistence

• Deserialization

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Serialization?',

      content: `
Serialization converts object into byte stream.

Purpose:

• Save object state
• Transfer objects over network
`.trim(),
    },

    {
      heading: 'Serializable Interface',

      content: `
Serializable is marker interface.

Used to allow object serialization.
`.trim(),
    },

    {
      heading: 'Deserialization',

      content: `
Deserialization converts byte stream back into object.
`.trim(),
    },

    {
      heading: 'Why Serialization is Important',

      content: `
Used in:

• Networking
• File storage
• Distributed systems
• Session management
`.trim(),
    },

    {
      heading: 'Important Points About Serialization',

      content: `
• ObjectOutputStream used for serialization
• ObjectInputStream used for deserialization
• Serializable interface required
• Improves object persistence

Common Beginner Mistakes:

• Forgetting Serializable interface
• Serializing non-serializable objects
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Serialization Example',

      language: 'java',

      code: `import java.io.*;

class Student implements Serializable {

    int id = 101;

    String name = "Rahul";

}

public class Main {

    public static void main(String[] args)
        throws Exception {

        Student s = new Student();

        FileOutputStream fos =
            new FileOutputStream("student.txt");

        ObjectOutputStream out =
            new ObjectOutputStream(fos);

        out.writeObject(s);

        out.close();

        System.out.println(
            "Object Serialized"
        );

    }

}`,

      output: 'Object Serialized',
    },
  ],

  mcqs: [
    {
      question:
        'Serialization converts object into?', 

      options: [
        'Loop',
        'Byte stream',
        'Array',
        'Method'
      ],

      answer: 1,

      explanation:
        'Serialization converts object into byte stream.',
    },

    {
      question:
        'Which interface is required for serialization?',

      options: [
        'Runnable',
        'Cloneable',
        'Serializable',
        'Readable'
      ],

      answer: 2,

      explanation:
        'Serializable interface is required.',
    },

    {
      question:
        'Which stream writes objects?',

      options: [
        'FileInputStream',
        'ObjectOutputStream',
        'Scanner',
        'BufferedReader'
      ],

      answer: 1,

      explanation:
        'ObjectOutputStream writes objects.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is serialization in Java?',

      answer:
        'Serialization converts object into byte stream for storage or transmission.',
    },

    {
      question:
        'Why is Serializable interface important?',

      answer:
        'It allows Java objects to participate in serialization process.',
    },
  ],

  nextTopic: 'java-serialization',
},
{
  id: 'java-serialization',

  title: 'Java Serialization',

  slug: 'java-serialization',

  image:
    'https://images.unsplash.com/photo-1518770660439-4636190af475',

  readTime: '40 min read',

  difficulty: 'Advanced',

  description:
    'Learn Java Serialization deeply including object conversion, Serializable interface, object streams, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Oracle'],

  sections: [
    {
      heading: 'Java Serialization',

      content: `
• Introduction to Serialization

• Serializable Interface

• ObjectOutputStream

• Object Persistence

• Saving Object State

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Serialization?',

      content: `
Serialization is process of converting object into byte stream.

Purpose:

• Store object permanently
• Send object over network
`.trim(),
    },

    {
      heading: 'Serializable Interface',

      content: `
Serializable is marker interface.

It informs JVM that object can be serialized.
`.trim(),
    },

    {
      heading: 'ObjectOutputStream',

      content: `
ObjectOutputStream is used to write objects into stream.
`.trim(),
    },

    {
      heading: 'Why Serialization is Important',

      content: `
Used in:

• Networking
• Distributed systems
• Session management
• File storage
`.trim(),
    },

    {
      heading: 'Important Points About Serialization',

      content: `
• Serializable interface is required
• ObjectOutputStream writes objects
• Converts object into byte stream
• Helps object persistence

Common Beginner Mistakes:

• Forgetting Serializable interface
• Serializing unsupported objects
• Ignoring serialVersionUID
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Serialization Example',

      language: 'java',

      code: `import java.io.*;

class Student implements Serializable {

    int id = 101;

    String name = "Rahul";

}

public class Main {

    public static void main(String[] args)
        throws Exception {

        Student s = new Student();

        FileOutputStream fos =
            new FileOutputStream("student.txt");

        ObjectOutputStream out =
            new ObjectOutputStream(fos);

        out.writeObject(s);

        out.close();

        System.out.println(
            "Object Serialized"
        );

    }

}`,

      output: 'Object Serialized',
    },
  ],

  mcqs: [
    {
      question:
        'Serialization converts object into?', 

      options: [
        'Loop',
        'Byte stream',
        'Array',
        'Method'
      ],

      answer: 1,

      explanation:
        'Serialization converts object into byte stream.',
    },

    {
      question:
        'Which interface is required for serialization?',

      options: [
        'Runnable',
        'Serializable',
        'Cloneable',
        'Readable'
      ],

      answer: 1,

      explanation:
        'Serializable interface is required.',
    },

    {
      question:
        'Which stream writes objects?',

      options: [
        'Scanner',
        'ObjectOutputStream',
        'BufferedReader',
        'FileReader'
      ],

      answer: 1,

      explanation:
        'ObjectOutputStream writes objects.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is serialization in Java?',

      answer:
        'Serialization is process of converting object into byte stream for storage or transmission.',
    },

    {
      question:
        'Why is Serializable interface important?',

      answer:
        'It allows object to participate in serialization process.',
    },
  ],

  nextTopic: 'java-deserialization',
},

{
  id: 'java-deserialization',

  title: 'Java Deserialization',

  slug: 'java-deserialization',

  image:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',

  readTime: '34 min read',

  difficulty: 'Advanced',

  description:
    'Learn Java Deserialization deeply including object reconstruction, ObjectInputStream, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini'],

  sections: [
    {
      heading: 'Java Deserialization',

      content: `
• Introduction to Deserialization

• ObjectInputStream

• Rebuilding Objects

• Reading Serialized Data

• Object Restoration

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Deserialization?',

      content: `
Deserialization converts byte stream back into object.

Purpose:

• Restore saved object
• Read transmitted objects
`.trim(),
    },

    {
      heading: 'ObjectInputStream',

      content: `
ObjectInputStream is used to read serialized objects.
`.trim(),
    },

    {
      heading: 'Why Deserialization is Important',

      content: `
Used in:

• Session recovery
• Network communication
• File-based object storage
`.trim(),
    },

    {
      heading: 'Advantages of Deserialization',

      content: `
• Restores object state
• Saves development time
• Supports distributed systems
`.trim(),
    },

    {
      heading: 'Important Points About Deserialization',

      content: `
• ObjectInputStream reads objects
• Serialized class must exist
• Class structure should match
• Supports object recovery

Common Beginner Mistakes:

• Modifying serialized class structure
• Missing Serializable interface
• Wrong type casting
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Deserialization Example',

      language: 'java',

      code: `import java.io.*;

class Student implements Serializable {

    int id;

    String name;

}

public class Main {

    public static void main(String[] args)
        throws Exception {

        FileInputStream fis =
            new FileInputStream("student.txt");

        ObjectInputStream in =
            new ObjectInputStream(fis);

        Student s =
            (Student)in.readObject();

        System.out.println(
            s.id + " " + s.name
        );

        in.close();

    }

}`,

      output: '101 Rahul',
    },
  ],

  mcqs: [
    {
      question:
        'Deserialization converts?', 

      options: [
        'Object to byte stream',
        'Byte stream to object',
        'Array to method',
        'Loop to object'
      ],

      answer: 1,

      explanation:
        'Deserialization converts byte stream back into object.',
    },

    {
      question:
        'Which stream reads serialized object?',

      options: [
        'Scanner',
        'ObjectInputStream',
        'BufferedWriter',
        'PrintWriter'
      ],

      answer: 1,

      explanation:
        'ObjectInputStream reads serialized object.',
    },

    {
      question:
        'Deserialization is mainly used for?', 

      options: [
        'Object recovery',
        'Compilation',
        'Inheritance',
        'Method overloading'
      ],

      answer: 0,

      explanation:
        'Deserialization restores saved objects.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is deserialization in Java?',

      answer:
        'Deserialization converts byte stream back into original object.',
    },

    {
      question:
        'Why is ObjectInputStream used?',

      answer:
        'It reads serialized objects from stream.',
    },
  ],

  nextTopic: 'java-transient-keyword',
},

{
  id: 'java-transient-keyword',

  title: 'Java transient keyword',

  slug: 'java-transient-keyword',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '26 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java transient keyword deeply including serialization control, security concepts, and interview questions.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'HCL'],

  sections: [
    {
      heading: 'Java transient keyword',

      content: `
• Introduction to transient keyword

• Serialization Control

• Ignoring Variables

• Security Usage

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is transient keyword?',

      content: `
transient keyword prevents variable from being serialized.

Transient variables are skipped during serialization.
`.trim(),
    },

    {
      heading: 'Why transient is Important',

      content: `
Used for:

• Security
• Avoid unnecessary storage
• Protect sensitive data
`.trim(),
    },

    {
      heading: 'Common Usage',

      content: `
Used for variables like:

• Passwords
• OTP values
• Temporary data
`.trim(),
    },

    {
      heading: 'Advantages of transient keyword',

      content: `
• Improves security
• Reduces serialization size
• Prevents sensitive data storage
`.trim(),
    },

    {
      heading: 'Important Points About transient keyword',

      content: `
• transient variables are not serialized
• Works only with serialization
• Helps secure sensitive data
• Default values appear after deserialization

Common Beginner Mistakes:

• Expecting transient value after deserialization
• Using transient unnecessarily
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'transient Keyword Example',

      language: 'java',

      code: `import java.io.*;

class Student implements Serializable {

    int id = 101;

    transient String password = "admin";

}

public class Main {

    public static void main(String[] args) {

        Student s = new Student();

        System.out.println(
            s.password
        );

    }

}`,

      output: 'admin',
    },
  ],

  mcqs: [
    {
      question:
        'transient keyword is used for?', 

      options: [
        'Looping',
        'Preventing serialization',
        'Inheritance',
        'Threading'
      ],

      answer: 1,

      explanation:
        'transient prevents variable serialization.',
    },

    {
      question:
        'Transient variables are?', 

      options: [
        'Serialized',
        'Skipped during serialization',
        'Compiled separately',
        'Immutable'
      ],

      answer: 1,

      explanation:
        'Transient variables are skipped during serialization.',
    },

    {
      question:
        'transient keyword improves?', 

      options: [
        'Security',
        'Compilation speed',
        'Inheritance',
        'Polymorphism'
      ],

      answer: 0,

      explanation:
        'transient keyword helps secure sensitive data.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is transient keyword in Java?',

      answer:
        'transient keyword prevents variable from being serialized.',
    },

    {
      question:
        'Why is transient keyword useful?',

      answer:
        'It protects sensitive or temporary data during serialization.',
    },
  ],

  nextTopic: 'java-serialversionuid',
},

{
  id: 'java-serialversionuid',

  title: 'serialVersionUID in Java',

  slug: 'java-serialversionuid',

  image:
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd',

  readTime: '30 min read',

  difficulty: 'Advanced',

  description:
    'Learn serialVersionUID in Java deeply including serialization compatibility, version control, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'IBM'],

  sections: [
    {
      heading: 'serialVersionUID in Java',

      content: `
• Introduction to serialVersionUID

• Serialization Compatibility

• Version Control

• JVM Validation

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is serialVersionUID?',

      content: `
serialVersionUID is unique identifier for serialized class.

Used during:

• Serialization
• Deserialization
`.trim(),
    },

    {
      heading: 'Why serialVersionUID is Important',

      content: `
It helps JVM verify:

• Class compatibility
• Version consistency
`.trim(),
    },

    {
      heading: 'How JVM Uses serialVersionUID',

      content: `
During deserialization:

• JVM compares serialVersionUID values
• Mismatch causes InvalidClassException
`.trim(),
    },

    {
      heading: 'Advantages of serialVersionUID',

      content: `
• Prevents compatibility issues
• Controls class versions
• Improves serialization reliability
`.trim(),
    },

    {
      heading: 'Important Points About serialVersionUID',

      content: `
• Must be static final long
• Used with Serializable classes
• Helps version management
• Prevents InvalidClassException

Common Beginner Mistakes:

• Ignoring serialVersionUID
• Changing class structure frequently
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'serialVersionUID Example',

      language: 'java',

      code: `import java.io.Serializable;

class Student implements Serializable {

    private static final long
        serialVersionUID = 1L;

    int id = 101;

}`,

      output: 'Class created successfully',
    },
  ],

  mcqs: [
    {
      question:
        'serialVersionUID is used for?', 

      options: [
        'Compilation',
        'Serialization compatibility',
        'Threading',
        'Inheritance'
      ],

      answer: 1,

      explanation:
        'serialVersionUID controls serialization compatibility.',
    },

    {
      question:
        'serialVersionUID type is?', 

      options: [
        'int',
        'double',
        'long',
        'String'
      ],

      answer: 2,

      explanation:
        'serialVersionUID is long type.',
    },

    {
      question:
        'Mismatch of serialVersionUID causes?', 

      options: [
        'IOException',
        'InvalidClassException',
        'ArithmeticException',
        'NullPointerException'
      ],

      answer: 1,

      explanation:
        'Mismatch causes InvalidClassException.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is serialVersionUID in Java?',

      answer:
        'serialVersionUID is unique version identifier used during serialization and deserialization.',
    },

    {
      question:
        'Why is serialVersionUID important?',

      answer:
        'It ensures compatibility between serialized object and class definition.',
    },
  ],

  nextTopic: 'java-externalization',
},

{
  id: 'java-externalization',

  title: 'Externalization in Java',

  slug: 'java-externalization',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '34 min read',

  difficulty: 'Advanced',

  description:
    'Learn Externalization in Java deeply including Externalizable interface, custom serialization, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'Accenture'],

  sections: [
    {
      heading: 'Externalization in Java',

      content: `
• Introduction to Externalization

• Externalizable Interface

• Custom Serialization

• writeExternal()

• readExternal()

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Externalization?',

      content: `
Externalization allows developer to control serialization process manually.
`.trim(),
    },

    {
      heading: 'Externalizable Interface',

      content: `
Externalizable interface provides:

• writeExternal()
• readExternal()
`.trim(),
    },

    {
      heading: 'Why Externalization is Important',

      content: `
Used for:

• Better performance
• Custom object storage
• Selective serialization
`.trim(),
    },

    {
      heading: 'Advantages of Externalization',

      content: `
• Full serialization control
• Better optimization
• Reduced storage size
`.trim(),
    },

    {
      heading: 'Important Points About Externalization',

      content: `
• Developer controls serialization manually
• Uses Externalizable interface
• Faster than default serialization
• Improves customization

Common Beginner Mistakes:

• Forgetting no-arg constructor
• Improper read/write order
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Externalization Example',

      language: 'java',

      code: `import java.io.*;

class Student implements Externalizable {

    int id;

    String name;

    public Student() {

    }

    public void writeExternal(
        ObjectOutput out)
        throws IOException {

        out.writeInt(id);

        out.writeObject(name);

    }

    public void readExternal(
        ObjectInput in)
        throws IOException,
        ClassNotFoundException {

        id = in.readInt();

        name = (String)in.readObject();

    }

}

public class Main {

    public static void main(String[] args) {

        System.out.println(
            "Externalization Example"
        );

    }

}`,

      output: 'Externalization Example',
    },
  ],

  mcqs: [
    {
      question:
        'Externalization uses which interface?',

      options: [
        'Serializable',
        'Runnable',
        'Externalizable',
        'Readable'
      ],

      answer: 2,

      explanation:
        'Externalization uses Externalizable interface.',
    },

    {
      question:
        'Which method writes custom data?',

      options: [
        'writeExternal()',
        'saveObject()',
        'serialize()',
        'store()'
      ],

      answer: 0,

      explanation:
        'writeExternal() writes custom serialized data.',
    },

    {
      question:
        'Externalization provides?', 

      options: [
        'Compilation',
        'Custom serialization control',
        'Inheritance',
        'Garbage collection'
      ],

      answer: 1,

      explanation:
        'Externalization provides manual serialization control.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is externalization in Java?',

      answer:
        'Externalization allows developer to control serialization manually using Externalizable interface.',
    },

    {
      question:
        'Why is externalization faster?',

      answer:
        'Because developer serializes only required data manually.',
    },
  ],

  nextTopic: 'java-collections',
},
{
  id: 'java-collections',

  title: 'Collections in Java',

  slug: 'java-collections',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '46 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Collections in Java deeply including framework architecture, interfaces, classes, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Oracle'],

  sections: [
    {
      heading: 'Collections in Java',

      content: `
• Introduction to Collections

• Collection Framework

• List Interface

• Set Interface

• Queue Interface

• Advantages of Collections

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What are Collections in Java?',

      content: `
Collections framework provides ready-made classes and interfaces for storing and managing data.

Collections help developers:

• Store dynamic data
• Perform fast operations
• Manage large data easily
`.trim(),
    },

    {
      heading: 'Why Collections are Important',

      content: `
Collections are used in:

• Banking systems
• E-commerce applications
• Social media platforms
• Student management systems
`.trim(),
    },

    {
      heading: 'Main Interfaces of Collection Framework',

      content: `
Important interfaces:

• List
• Set
• Queue
• Map
`.trim(),
    },

    {
      heading: 'Advantages of Collections',

      content: `
• Dynamic size
• Reusable classes
• Faster searching and sorting
• Better memory management
`.trim(),
    },

    {
      heading: 'Important Points About Collections',

      content: `
• Collection framework belongs to java.util package
• Supports dynamic data storage
• Provides multiple data structures
• Improves code reusability

Common Beginner Mistakes:

• Confusing Collection and Collections
• Using wrong collection type
• Ignoring generics
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Collections Example',

      language: 'java',

      code: `import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        ArrayList<String> list =
            new ArrayList<>();

        list.add("Java");

        list.add("Python");

        System.out.println(list);

    }

}`,

      output: '[Java, Python]',
    },
  ],

  mcqs: [
    {
      question:
        'Collections framework belongs to which package?',

      options: [
        'java.io',
        'java.lang',
        'java.util',
        'java.sql'
      ],

      answer: 2,

      explanation:
        'Collections framework belongs to java.util package.',
    },

    {
      question:
        'Which interface stores duplicate elements?',

      options: [
        'Set',
        'List',
        'Map',
        'Queue'
      ],

      answer: 1,

      explanation:
        'List allows duplicate elements.',
    },

    {
      question:
        'Collections are mainly used for?', 

      options: [
        'Compilation',
        'Dynamic data storage',
        'Inheritance',
        'Networking'
      ],

      answer: 1,

      explanation:
        'Collections are used for dynamic data storage.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Collection Framework in Java?',

      answer:
        'Collection Framework is set of classes and interfaces used to store and manage dynamic data.',
    },

    {
      question:
        'Why are collections important in Java?',

      answer:
        'Collections provide efficient data storage, searching, sorting, and dynamic memory handling.',
    },
  ],

  nextTopic: 'java-arraylist',
},

{
  id: 'java-arraylist',

  title: 'Java ArrayList',

  slug: 'java-arraylist',

  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',

  readTime: '42 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java ArrayList deeply including dynamic arrays, methods, resizing, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Cognizant'],

  sections: [
    {
      heading: 'Java ArrayList',

      content: `
• Introduction to ArrayList

• Dynamic Array Concept

• Adding Elements

• Removing Elements

• ArrayList Methods

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is ArrayList?',

      content: `
ArrayList is resizable array implementation of List interface.

Features:

• Dynamic size
• Ordered collection
• Allows duplicates
`.trim(),
    },

    {
      heading: 'Why ArrayList is Important',

      content: `
Used for:

• Dynamic data storage
• Fast searching
• Easy data management
`.trim(),
    },

    {
      heading: 'Common Methods of ArrayList',

      content: `
Important methods:

• add()
• remove()
• get()
• set()
• size()
`.trim(),
    },

    {
      heading: 'Advantages of ArrayList',

      content: `
• Dynamic resizing
• Fast random access
• Easy to use
`.trim(),
    },

    {
      heading: 'Important Points About ArrayList',

      content: `
• Implements List interface
• Maintains insertion order
• Allows duplicate elements
• Slower insertion in middle

Common Beginner Mistakes:

• Using primitive data types directly
• Forgetting generics
• Confusing size() with length
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'ArrayList Example',

      language: 'java',

      code: `import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        ArrayList<String> list =
            new ArrayList<>();

        list.add("Apple");

        list.add("Banana");

        list.add("Apple");

        System.out.println(list);

    }

}`,

      output: '[Apple, Banana, Apple]',
    },
  ],

  mcqs: [
    {
      question:
        'ArrayList implements which interface?',

      options: [
        'Set',
        'Map',
        'List',
        'Queue'
      ],

      answer: 2,

      explanation:
        'ArrayList implements List interface.',
    },

    {
      question:
        'ArrayList allows?', 

      options: [
        'Only unique values',
        'Duplicate elements',
        'Only integers',
        'No ordering'
      ],

      answer: 1,

      explanation:
        'ArrayList allows duplicate elements.',
    },

    {
      question:
        'Which method adds element in ArrayList?',

      options: [
        'insert()',
        'put()',
        'add()',
        'push()'
      ],

      answer: 2,

      explanation:
        'add() method inserts element.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is ArrayList in Java?',

      answer:
        'ArrayList is dynamic array implementation of List interface.',
    },

    {
      question:
        'Why is ArrayList popular?',

      answer:
        'Because it provides dynamic resizing and fast random access.',
    },
  ],

  nextTopic: 'java-linkedlist',
},

{
  id: 'java-linkedlist',

  title: 'Java LinkedList',

  slug: 'java-linkedlist',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '40 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java LinkedList deeply including node structure, insertion, deletion, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'IBM'],

  sections: [
    {
      heading: 'Java LinkedList',

      content: `
• Introduction to LinkedList

• Node Structure

• Dynamic Memory Allocation

• Insertion and Deletion

• LinkedList Methods

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is LinkedList?',

      content: `
LinkedList is doubly linked list implementation of List interface.

Features:

• Dynamic memory allocation
• Fast insertion and deletion
• Ordered collection
`.trim(),
    },

    {
      heading: 'Why LinkedList is Important',

      content: `
Used for:

• Frequent insertions
• Frequent deletions
• Queue implementation
`.trim(),
    },

    {
      heading: 'Advantages of LinkedList',

      content: `
• Fast insertion
• Fast deletion
• Dynamic memory usage
`.trim(),
    },

    {
      heading: 'Common Methods of LinkedList',

      content: `
Important methods:

• add()
• remove()
• addFirst()
• addLast()
• get()
`.trim(),
    },

    {
      heading: 'Important Points About LinkedList',

      content: `
• Implements List interface
• Maintains insertion order
• Allows duplicates
• Slower random access than ArrayList

Common Beginner Mistakes:

• Using LinkedList for frequent searching
• Confusing nodes with arrays
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'LinkedList Example',

      language: 'java',

      code: `import java.util.LinkedList;

public class Main {

    public static void main(String[] args) {

        LinkedList<String> list =
            new LinkedList<>();

        list.add("Java");

        list.add("Python");

        System.out.println(list);

    }

}`,

      output: '[Java, Python]',
    },
  ],

  mcqs: [
    {
      question:
        'LinkedList implements which interface?',

      options: [
        'List',
        'Map',
        'Set',
        'Thread'
      ],

      answer: 0,

      explanation:
        'LinkedList implements List interface.',
    },

    {
      question:
        'LinkedList is based on?', 

      options: [
        'Array',
        'Tree',
        'Node structure',
        'Compiler'
      ],

      answer: 2,

      explanation:
        'LinkedList uses node structure.',
    },

    {
      question:
        'LinkedList is better for?', 

      options: [
        'Fast random access',
        'Frequent insertion and deletion',
        'Compilation',
        'Static storage'
      ],

      answer: 1,

      explanation:
        'LinkedList is better for insertion and deletion.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is LinkedList in Java?',

      answer:
        'LinkedList is doubly linked list implementation of List interface.',
    },

    {
      question:
        'Why is LinkedList useful?',

      answer:
        'It provides faster insertion and deletion compared to arrays.',
    },
  ],

  nextTopic: 'arraylist-vs-linkedlist',
},

{
  id: 'arraylist-vs-linkedlist',

  title: 'ArrayList vs LinkedList',

  slug: 'arraylist-vs-linkedlist',

  image:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',

  readTime: '30 min read',

  difficulty: 'Intermediate',

  description:
    'Learn difference between ArrayList and LinkedList deeply including performance, memory, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Accenture'],

  sections: [
    {
      heading: 'ArrayList vs LinkedList',

      content: `
• Internal Structure

• Memory Usage

• Performance

• Insertion Speed

• Deletion Speed

• Random Access

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'Main Difference',

      content: `
ArrayList uses dynamic array.

LinkedList uses node-based linked structure.
`.trim(),
    },

    {
      heading: 'Performance Comparison',

      content: `
ArrayList:

• Faster random access
• Slower insertion in middle

LinkedList:

• Faster insertion and deletion
• Slower searching
`.trim(),
    },

    {
      heading: 'Memory Comparison',

      content: `
LinkedList uses more memory because nodes store references.
`.trim(),
    },

    {
      heading: 'When to Use Which?',

      content: `
Use ArrayList when:

• Searching is frequent

Use LinkedList when:

• Insertions/deletions are frequent
`.trim(),
    },

    {
      heading: 'Important Points About ArrayList vs LinkedList',

      content: `
• ArrayList is array-based
• LinkedList is node-based
• ArrayList is memory efficient
• LinkedList supports fast insertion

Common Beginner Mistakes:

• Using LinkedList for random access
• Ignoring performance requirements
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'ArrayList vs LinkedList Example',

      language: 'java',

      code: `import java.util.*;

public class Main {

    public static void main(String[] args) {

        ArrayList<Integer> arr =
            new ArrayList<>();

        LinkedList<Integer> list =
            new LinkedList<>();

        arr.add(10);

        list.add(20);

        System.out.println(arr);

        System.out.println(list);

    }

}`,

      output: '[10]\n[20]',
    },
  ],

  mcqs: [
    {
      question:
        'Which collection provides faster random access?',

      options: [
        'LinkedList',
        'ArrayList',
        'TreeSet',
        'HashSet'
      ],

      answer: 1,

      explanation:
        'ArrayList provides faster random access.',
    },

    {
      question:
        'LinkedList is better for?', 

      options: [
        'Random access',
        'Frequent insertion',
        'Compilation',
        'Static arrays'
      ],

      answer: 1,

      explanation:
        'LinkedList is better for insertion/deletion.',
    },

    {
      question:
        'Which uses more memory?',

      options: [
        'ArrayList',
        'LinkedList',
        'Both equal',
        'None'
      ],

      answer: 1,

      explanation:
        'LinkedList uses more memory because of node references.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is difference between ArrayList and LinkedList?',

      answer:
        'ArrayList uses dynamic array while LinkedList uses node-based linked structure.',
    },

    {
      question:
        'When should LinkedList be preferred?',

      answer:
        'LinkedList should be preferred when insertion and deletion operations are frequent.',
    },
  ],

  nextTopic: 'java-list-interface',
},

{
  id: 'java-list-interface',

  title: 'Java List Interface',

  slug: 'java-list-interface',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '28 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java List Interface deeply including ordered collections, duplicates, methods, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'Capgemini'],

  sections: [
    {
      heading: 'Java List Interface',

      content: `
• Introduction to List Interface

• Ordered Collection

• Duplicate Elements

• List Methods

• Implementing Classes

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is List Interface?',

      content: `
List interface stores ordered collection of elements.

Features:

• Maintains insertion order
• Allows duplicates
`.trim(),
    },

    {
      heading: 'Implementing Classes',

      content: `
Popular classes:

• ArrayList
• LinkedList
• Vector
`.trim(),
    },

    {
      heading: 'Important Methods of List',

      content: `
Common methods:

• add()
• remove()
• get()
• set()
`.trim(),
    },

    {
      heading: 'Why List Interface is Important',

      content: `
Used for:

• Ordered data storage
• Dynamic collections
• Duplicate element storage
`.trim(),
    },

    {
      heading: 'Important Points About List Interface',

      content: `
• List is interface
• Supports indexing
• Allows duplicate values
• Maintains order

Common Beginner Mistakes:

• Confusing List with Set
• Forgetting generic types
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'List Interface Example',

      language: 'java',

      code: `import java.util.*;

public class Main {

    public static void main(String[] args) {

        List<String> list =
            new ArrayList<>();

        list.add("Java");

        list.add("Java");

        System.out.println(list);

    }

}`,

      output: '[Java, Java]',
    },
  ],

  mcqs: [
    {
      question:
        'List interface allows?', 

      options: [
        'Only unique values',
        'Duplicate elements',
        'No order',
        'Static data'
      ],

      answer: 1,

      explanation:
        'List allows duplicate elements.',
    },

    {
      question:
        'Which is implementing class of List?',

      options: [
        'HashSet',
        'TreeSet',
        'ArrayList',
        'HashMap'
      ],

      answer: 2,

      explanation:
        'ArrayList implements List interface.',
    },

    {
      question:
        'List maintains?', 

      options: [
        'Random order',
        'Insertion order',
        'Sorted order only',
        'No order'
      ],

      answer: 1,

      explanation:
        'List maintains insertion order.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is List interface in Java?',

      answer:
        'List interface stores ordered collection and allows duplicate elements.',
    },

    {
      question:
        'Why is List interface useful?',

      answer:
        'It provides flexible ordered data storage with indexing support.',
    },
  ],

  nextTopic: 'java-linkedhashset',
},

{
  id: 'java-linkedhashset',

  title: 'Java LinkedHashSet',

  slug: 'java-linkedhashset',

  image:
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd',

  readTime: '32 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java LinkedHashSet deeply including insertion order, uniqueness, hashing, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'HCL'],

  sections: [
    {
      heading: 'Java LinkedHashSet',

      content: `
• Introduction to LinkedHashSet

• Unique Elements

• Insertion Order

• Hash Table Concept

• Linked Structure

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is LinkedHashSet?',

      content: `
LinkedHashSet stores unique elements while maintaining insertion order.
`.trim(),
    },

    {
      heading: 'Why LinkedHashSet is Important',

      content: `
Used for:

• Duplicate removal
• Ordered unique storage
• Fast searching
`.trim(),
    },

    {
      heading: 'Features of LinkedHashSet',

      content: `
• No duplicate values
• Maintains insertion order
• Faster operations
`.trim(),
    },

    {
      heading: 'Advantages of LinkedHashSet',

      content: `
• Predictable iteration order
• Fast performance
• Unique element storage
`.trim(),
    },

    {
      heading: 'Important Points About LinkedHashSet',

      content: `
• Implements Set interface
• Does not allow duplicates
• Maintains insertion order
• Uses hashing internally

Common Beginner Mistakes:

• Expecting duplicate storage
• Confusing with HashSet
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'LinkedHashSet Example',

      language: 'java',

      code: `import java.util.LinkedHashSet;

public class Main {

    public static void main(String[] args) {

        LinkedHashSet<String> set =
            new LinkedHashSet<>();

        set.add("Java");

        set.add("Python");

        set.add("Java");

        System.out.println(set);

    }

}`,

      output: '[Java, Python]',
    },
  ],

  mcqs: [
    {
      question:
        'LinkedHashSet allows?', 

      options: [
        'Duplicate values',
        'Only integers',
        'Unique values only',
        'No insertion order'
      ],

      answer: 2,

      explanation:
        'LinkedHashSet stores unique elements only.',
    },

    {
      question:
        'LinkedHashSet maintains?', 

      options: [
        'Random order',
        'Sorted order',
        'Insertion order',
        'Descending order'
      ],

      answer: 2,

      explanation:
        'LinkedHashSet maintains insertion order.',
    },

    {
      question:
        'LinkedHashSet implements?', 

      options: [
        'Map',
        'Queue',
        'Set',
        'Thread'
      ],

      answer: 2,

      explanation:
        'LinkedHashSet implements Set interface.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is LinkedHashSet in Java?',

      answer:
        'LinkedHashSet stores unique elements while maintaining insertion order.',
    },

    {
      question:
        'Why is LinkedHashSet useful?',

      answer:
        'It combines hashing performance with predictable iteration order.',
    },
  ],

  nextTopic: 'java-treeset',
},

{
  id: 'java-treeset',

  title: 'Java TreeSet',

  slug: 'java-treeset',

  image:
    'https://images.unsplash.com/photo-1518770660439-4636190af475',

  readTime: '36 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java TreeSet deeply including sorting, red-black tree, uniqueness, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'IBM'],

  sections: [
    {
      heading: 'Java TreeSet',

      content: `
• Introduction to TreeSet

• Sorted Data Storage

• Red-Black Tree

• Unique Elements

• Natural Ordering

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is TreeSet?',

      content: `
TreeSet stores unique elements in sorted order.

It uses:

• Red-Black Tree internally
`.trim(),
    },

    {
      heading: 'Why TreeSet is Important',

      content: `
Used for:

• Sorted data storage
• Fast searching
• Unique sorted collections
`.trim(),
    },

    {
      heading: 'Features of TreeSet',

      content: `
• Sorted elements
• No duplicates
• Ascending order by default
`.trim(),
    },

    {
      heading: 'Advantages of TreeSet',

      content: `
• Automatic sorting
• Fast searching
• Unique element storage
`.trim(),
    },

    {
      heading: 'Important Points About TreeSet',

      content: `
• Implements Set interface
• Stores sorted unique elements
• Does not allow duplicates
• Uses Red-Black Tree internally

Common Beginner Mistakes:

• Expecting insertion order
• Adding incompatible data types
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'TreeSet Example',

      language: 'java',

      code: `import java.util.TreeSet;

public class Main {

    public static void main(String[] args) {

        TreeSet<Integer> set =
            new TreeSet<>();

        set.add(50);

        set.add(10);

        set.add(30);

        System.out.println(set);

    }

}`,

      output: '[10, 30, 50]',
    },
  ],

  mcqs: [
    {
      question:
        'TreeSet stores elements in?', 

      options: [
        'Random order',
        'Sorted order',
        'Insertion order',
        'Reverse insertion order'
      ],

      answer: 1,

      explanation:
        'TreeSet stores elements in sorted order.',
    },

    {
      question:
        'TreeSet allows?', 

      options: [
        'Duplicate elements',
        'Only strings',
        'Unique elements only',
        'No sorting'
      ],

      answer: 2,

      explanation:
        'TreeSet stores unique elements only.',
    },

    {
      question:
        'TreeSet internally uses?', 

      options: [
        'Array',
        'Hash Table',
        'Red-Black Tree',
        'Linked List'
      ],

      answer: 2,

      explanation:
        'TreeSet internally uses Red-Black Tree.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is TreeSet in Java?',

      answer:
        'TreeSet stores unique elements in sorted order using Red-Black Tree.',
    },

    {
      question:
        'Why is TreeSet useful?',

      answer:
        'It automatically sorts elements while maintaining uniqueness.',
    },
  ],

  nextTopic: 'java-queue-priorityqueue',
},
{
  id: 'java-queue-priorityqueue',

  title: 'Queue & PriorityQueue in Java',

  slug: 'java-queue-priorityqueue',

  image:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',

  readTime: '42 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Queue and PriorityQueue in Java deeply including FIFO concept, priority-based ordering, methods, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Oracle'],

  sections: [
    {
      heading: 'Queue & PriorityQueue in Java',

      content: `
• Introduction to Queue

• FIFO Principle

• Queue Methods

• PriorityQueue

• Priority-based Ordering

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Queue in Java?',

      content: `
Queue is data structure that follows FIFO rule.

FIFO means:

• First In First Out

Element inserted first is removed first.
`.trim(),
    },

    {
      heading: 'What is PriorityQueue?',

      content: `
PriorityQueue stores elements according to priority.

Smallest element gets highest priority by default.
`.trim(),
    },

    {
      heading: 'Important Queue Methods',

      content: `
Common methods:

• add()
• offer()
• remove()
• poll()
• peek()
`.trim(),
    },

    {
      heading: 'Why Queue is Important',

      content: `
Used in:

• Task scheduling
• Printer queue
• CPU scheduling
• Messaging systems
`.trim(),
    },

    {
      heading: 'Important Points About Queue & PriorityQueue',

      content: `
• Queue follows FIFO order
• PriorityQueue sorts by priority
• Null values are not allowed in PriorityQueue
• PriorityQueue uses heap internally

Common Beginner Mistakes:

• Confusing Queue with Stack
• Expecting insertion order in PriorityQueue
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'PriorityQueue Example',

      language: 'java',

      code: `import java.util.PriorityQueue;

public class Main {

    public static void main(String[] args) {

        PriorityQueue<Integer> pq =
            new PriorityQueue<>();

        pq.add(50);

        pq.add(10);

        pq.add(30);

        System.out.println(
            pq.poll()
        );

    }

}`,

      output: '10',
    },
  ],

  mcqs: [
    {
      question:
        'Queue follows which principle?',

      options: [
        'LIFO',
        'FIFO',
        'Random',
        'Binary'
      ],

      answer: 1,

      explanation:
        'Queue follows FIFO principle.',
    },

    {
      question:
        'PriorityQueue removes?', 

      options: [
        'Last inserted element',
        'Random element',
        'Highest priority element',
        'Middle element'
      ],

      answer: 2,

      explanation:
        'PriorityQueue removes highest priority element first.',
    },

    {
      question:
        'PriorityQueue internally uses?', 

      options: [
        'Array',
        'Heap',
        'Stack',
        'Tree'
      ],

      answer: 1,

      explanation:
        'PriorityQueue uses heap internally.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Queue in Java?',

      answer:
        'Queue is data structure that follows FIFO order for storing and removing elements.',
    },

    {
      question:
        'What is PriorityQueue in Java?',

      answer:
        'PriorityQueue stores elements according to priority instead of insertion order.',
    },
  ],

  nextTopic: 'java-deque-arraydeque',
},

{
  id: 'java-deque-arraydeque',

  title: 'Deque & ArrayDeque in Java',

  slug: 'java-deque-arraydeque',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '38 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Deque and ArrayDeque in Java deeply including double-ended operations, methods, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini'],

  sections: [
    {
      heading: 'Deque & ArrayDeque in Java',

      content: `
• Introduction to Deque

• Double-ended Queue

• ArrayDeque

• Insertion Operations

• Deletion Operations

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Deque?',

      content: `
Deque means Double Ended Queue.

Elements can be inserted and removed from both ends.
`.trim(),
    },

    {
      heading: 'What is ArrayDeque?',

      content: `
ArrayDeque is resizable array implementation of Deque interface.
`.trim(),
    },

    {
      heading: 'Important Methods of Deque',

      content: `
Common methods:

• addFirst()
• addLast()
• removeFirst()
• removeLast()
• peekFirst()
`.trim(),
    },

    {
      heading: 'Why Deque is Important',

      content: `
Used in:

• Browser history
• Undo operations
• Sliding window algorithms
• Scheduling systems
`.trim(),
    },

    {
      heading: 'Important Points About Deque & ArrayDeque',

      content: `
• Deque supports operations at both ends
• ArrayDeque is faster than Stack
• Null elements are not allowed
• ArrayDeque uses dynamic array

Common Beginner Mistakes:

• Confusing Queue and Deque
• Adding null elements
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'ArrayDeque Example',

      language: 'java',

      code: `import java.util.ArrayDeque;

public class Main {

    public static void main(String[] args) {

        ArrayDeque<String> deque =
            new ArrayDeque<>();

        deque.addFirst("Java");

        deque.addLast("Python");

        System.out.println(deque);

    }

}`,

      output: '[Java, Python]',
    },
  ],

  mcqs: [
    {
      question:
        'Deque stands for?', 

      options: [
        'Double Ended Queue',
        'Dynamic Queue',
        'Direct Queue',
        'Dual Query'
      ],

      answer: 0,

      explanation:
        'Deque means Double Ended Queue.',
    },

    {
      question:
        'ArrayDeque allows insertion from?', 

      options: [
        'Front only',
        'Rear only',
        'Both ends',
        'Middle only'
      ],

      answer: 2,

      explanation:
        'Deque supports operations from both ends.',
    },

    {
      question:
        'Which method inserts element at front?',

      options: [
        'addMiddle()',
        'addFront()',
        'addFirst()',
        'insert()'
      ],

      answer: 2,

      explanation:
        'addFirst() inserts element at front.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Deque in Java?',

      answer:
        'Deque is double ended queue where insertion and deletion happen at both ends.',
    },

    {
      question:
        'Why is ArrayDeque preferred over Stack?',

      answer:
        'ArrayDeque provides better performance and modern implementation.',
    },
  ],

  nextTopic: 'java-map-interface',
},

{
  id: 'java-map-interface',

  title: 'Java Map Interface',

  slug: 'java-map-interface',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '36 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java Map Interface deeply including key-value pairs, methods, implementations, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Oracle'],

  sections: [
    {
      heading: 'Java Map Interface',

      content: `
• Introduction to Map

• Key-Value Pairs

• Map Methods

• HashMap

• LinkedHashMap

• TreeMap

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Map Interface?',

      content: `
Map stores data in key-value pair format.

Each key maps to one value.
`.trim(),
    },

    {
      heading: 'Important Features of Map',

      content: `
• Unique keys
• Duplicate values allowed
• Fast searching using keys
`.trim(),
    },

    {
      heading: 'Common Methods of Map',

      content: `
Important methods:

• put()
• get()
• remove()
• containsKey()
• keySet()
`.trim(),
    },

    {
      heading: 'Why Map is Important',

      content: `
Used in:

• Database caching
• Student records
• Login systems
• Configuration storage
`.trim(),
    },

    {
      heading: 'Important Points About Map Interface',

      content: `
• Map is not part of Collection interface
• Stores key-value pairs
• Keys must be unique
• Multiple implementations available

Common Beginner Mistakes:

• Confusing keys and values
• Expecting duplicate keys
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Map Interface Example',

      language: 'java',

      code: `import java.util.HashMap;
import java.util.Map;

public class Main {

    public static void main(String[] args) {

        Map<Integer, String> map =
            new HashMap<>();

        map.put(1, "Java");

        map.put(2, "Python");

        System.out.println(map);

    }

}`,

      output: '{1=Java, 2=Python}',
    },
  ],

  mcqs: [
    {
      question:
        'Map stores data in?', 

      options: [
        'Array format',
        'Key-value pair',
        'Node format',
        'Binary format'
      ],

      answer: 1,

      explanation:
        'Map stores data as key-value pairs.',
    },

    {
      question:
        'Map allows duplicate?', 

      options: [
        'Keys',
        'Values only',
        'Neither',
        'Both'
      ],

      answer: 1,

      explanation:
        'Map allows duplicate values but not duplicate keys.',
    },

    {
      question:
        'Which method inserts data in Map?',

      options: [
        'add()',
        'insert()',
        'put()',
        'push()'
      ],

      answer: 2,

      explanation:
        'put() inserts key-value pair in Map.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Map interface in Java?',

      answer:
        'Map interface stores data in key-value pair format with unique keys.',
    },

    {
      question:
        'Why are Maps important in Java?',

      answer:
        'Maps provide fast searching and efficient data mapping using keys.',
    },
  ],

  nextTopic: 'java-hashmap',
},

{
  id: 'java-hashmap',

  title: 'Java HashMap',

  slug: 'java-hashmap',

  image:
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd',

  readTime: '44 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java HashMap deeply including hashing, buckets, methods, performance, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'IBM'],

  sections: [
    {
      heading: 'Java HashMap',

      content: `
• Introduction to HashMap

• Hashing Concept

• Buckets

• Key-Value Storage

• HashMap Methods

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is HashMap?',

      content: `
HashMap stores key-value pairs using hashing technique.

Features:

• Fast searching
• Unique keys
• Null key allowed
`.trim(),
    },

    {
      heading: 'Why HashMap is Important',

      content: `
Used in:

• Caching systems
• Database indexing
• User management
• Fast data retrieval
`.trim(),
    },

    {
      heading: 'Common Methods of HashMap',

      content: `
Important methods:

• put()
• get()
• remove()
• containsKey()
• replace()
`.trim(),
    },

    {
      heading: 'Advantages of HashMap',

      content: `
• Fast operations
• Efficient searching
• Flexible storage
`.trim(),
    },

    {
      heading: 'Important Points About HashMap',

      content: `
• HashMap uses hashing internally
• Allows one null key
• Does not maintain insertion order
• Keys must be unique

Common Beginner Mistakes:

• Expecting sorted order
• Using mutable keys
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'HashMap Example',

      language: 'java',

      code: `import java.util.HashMap;

public class Main {

    public static void main(String[] args) {

        HashMap<Integer, String> map =
            new HashMap<>();

        map.put(101, "Rahul");

        map.put(102, "Amit");

        System.out.println(
            map.get(101)
        );

    }

}`,

      output: 'Rahul',
    },
  ],

  mcqs: [
    {
      question:
        'HashMap stores?', 

      options: [
        'Only values',
        'Key-value pairs',
        'Only keys',
        'Arrays'
      ],

      answer: 1,

      explanation:
        'HashMap stores key-value pairs.',
    },

    {
      question:
        'HashMap maintains?', 

      options: [
        'Insertion order',
        'Sorted order',
        'No guaranteed order',
        'Reverse order'
      ],

      answer: 2,

      explanation:
        'HashMap does not maintain order.',
    },

    {
      question:
        'HashMap internally uses?', 

      options: [
        'Heap',
        'Hashing',
        'Queue',
        'Compiler'
      ],

      answer: 1,

      explanation:
        'HashMap uses hashing internally.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is HashMap in Java?',

      answer:
        'HashMap stores key-value pairs using hashing technique for fast retrieval.',
    },

    {
      question:
        'Why is HashMap fast?',

      answer:
        'Because it uses hashing mechanism for efficient searching and insertion.',
    },
  ],

  nextTopic: 'working-of-hashmap',
},

{
  id: 'working-of-hashmap',

  title: 'Working of HashMap',

  slug: 'working-of-hashmap',

  image:
    'https://images.unsplash.com/photo-1518770660439-4636190af475',

  readTime: '40 min read',

  difficulty: 'Advanced',

  description:
    'Learn Working of HashMap deeply including hashing process, buckets, collisions, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'Accenture'],

  sections: [
    {
      heading: 'Working of HashMap',

      content: `
• Hashing Mechanism

• Buckets

• HashCode

• Collision Handling

• Internal Structure

• Rehashing

• Interview Concepts
`,
    },

    {
      heading: 'How HashMap Works?',

      content: `
HashMap works using hashing.

Process:

1. Key generates hashCode()
2. Hash determines bucket index
3. Value stored in bucket
`.trim(),
    },

    {
      heading: 'What are Buckets?',

      content: `
Buckets are internal storage locations inside HashMap.
`.trim(),
    },

    {
      heading: 'Collision in HashMap',

      content: `
Collision happens when multiple keys map to same bucket.
`.trim(),
    },

    {
      heading: 'How Collision is Handled',

      content: `
Java handles collisions using:

• Linked List
• Balanced Tree (Java 8+)
`.trim(),
    },

    {
      heading: 'Important Points About Working of HashMap',

      content: `
• hashCode() decides bucket
• equals() checks key equality
• Collisions reduce performance
• Rehashing improves efficiency

Common Beginner Mistakes:

• Ignoring equals() and hashCode()
• Using mutable keys
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'HashMap Working Example',

      language: 'java',

      code: `import java.util.HashMap;

public class Main {

    public static void main(String[] args) {

        HashMap<Integer, String> map =
            new HashMap<>();

        map.put(1, "Java");

        map.put(2, "Python");

        System.out.println(
            map.containsKey(1)
        );

    }

}`,

      output: 'true',
    },
  ],

  mcqs: [
    {
      question:
        'HashMap uses which method for bucket calculation?',

      options: [
        'compareTo()',
        'hashCode()',
        'clone()',
        'wait()'
      ],

      answer: 1,

      explanation:
        'hashCode() is used for bucket calculation.',
    },

    {
      question:
        'Collision occurs when?', 

      options: [
        'Key deleted',
        'Two keys map to same bucket',
        'Map is empty',
        'Value is null'
      ],

      answer: 1,

      explanation:
        'Collision happens when keys map to same bucket.',
    },

    {
      question:
        'Java 8 handles collisions using?', 

      options: [
        'Only arrays',
        'Only stack',
        'Linked list and balanced tree',
        'Compiler'
      ],

      answer: 2,

      explanation:
        'Java 8 uses linked list and balanced tree.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'How does HashMap work internally?',

      answer:
        'HashMap uses hashCode() to calculate bucket location and stores data using hashing.',
    },

    {
      question:
        'What is collision in HashMap?',

      answer:
        'Collision occurs when multiple keys map to same bucket location.',
    },
  ],

  nextTopic: 'java-linkedhashmap',
},

{
  id: 'java-linkedhashmap',

  title: 'Java LinkedHashMap',

  slug: 'java-linkedhashmap',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '34 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java LinkedHashMap deeply including insertion order, hashing, linked structure, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Capgemini'],

  sections: [
    {
      heading: 'Java LinkedHashMap',

      content: `
• Introduction to LinkedHashMap

• Insertion Order

• Hashing Mechanism

• Doubly Linked List

• Key-Value Storage

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is LinkedHashMap?',

      content: `
LinkedHashMap stores key-value pairs while maintaining insertion order.
`.trim(),
    },

    {
      heading: 'Why LinkedHashMap is Important',

      content: `
Used for:

• Ordered map storage
• Cache implementation
• Predictable iteration
`.trim(),
    },

    {
      heading: 'Features of LinkedHashMap',

      content: `
• Maintains insertion order
• Uses hashing internally
• Allows one null key
`.trim(),
    },

    {
      heading: 'Advantages of LinkedHashMap',

      content: `
• Predictable iteration order
• Fast searching
• Better than HashMap for ordered data
`.trim(),
    },

    {
      heading: 'Important Points About LinkedHashMap',

      content: `
• Extends HashMap
• Maintains insertion order
• Uses doubly linked list internally
• Allows null key and values

Common Beginner Mistakes:

• Confusing LinkedHashMap with TreeMap
• Expecting sorted order
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'LinkedHashMap Example',

      language: 'java',

      code: `import java.util.LinkedHashMap;

public class Main {

    public static void main(String[] args) {

        LinkedHashMap<Integer, String> map =
            new LinkedHashMap<>();

        map.put(1, "Java");

        map.put(2, "Python");

        System.out.println(map);

    }

}`,

      output: '{1=Java, 2=Python}',
    },
  ],

  mcqs: [
    {
      question:
        'LinkedHashMap maintains?', 

      options: [
        'Sorted order',
        'Random order',
        'Insertion order',
        'Reverse order'
      ],

      answer: 2,

      explanation:
        'LinkedHashMap maintains insertion order.',
    },

    {
      question:
        'LinkedHashMap internally uses?', 

      options: [
        'Heap',
        'Doubly linked list',
        'Compiler',
        'Stack'
      ],

      answer: 1,

      explanation:
        'LinkedHashMap uses doubly linked list internally.',
    },

    {
      question:
        'LinkedHashMap extends?', 

      options: [
        'TreeMap',
        'HashSet',
        'HashMap',
        'Queue'
      ],

      answer: 2,

      explanation:
        'LinkedHashMap extends HashMap.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is LinkedHashMap in Java?',

      answer:
        'LinkedHashMap stores key-value pairs while maintaining insertion order.',
    },

    {
      question:
        'Why use LinkedHashMap instead of HashMap?',

      answer:
        'LinkedHashMap maintains predictable insertion order while HashMap does not.',
    },
  ],

  nextTopic: 'java-treemap',
},
{
  id: 'java-treemap',

  title: 'Java TreeMap',

  slug: 'java-treemap',

  image:
    'https://images.unsplash.com/photo-1518770660439-4636190af475',

  readTime: '38 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java TreeMap deeply including sorted key-value storage, red-black tree, methods, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'IBM'],

  sections: [
    {
      heading: 'Java TreeMap',

      content: `
• Introduction to TreeMap

• Sorted Key-Value Storage

• Red-Black Tree

• Natural Ordering

• TreeMap Methods

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is TreeMap?',

      content: `
TreeMap stores key-value pairs in sorted order.

It sorts keys automatically using natural ordering.
`.trim(),
    },

    {
      heading: 'Why TreeMap is Important',

      content: `
Used for:

• Sorted data storage
• Ranking systems
• Leaderboards
• Fast searching
`.trim(),
    },

    {
      heading: 'Features of TreeMap',

      content: `
• Sorted keys
• No duplicate keys
• Uses Red-Black Tree
`.trim(),
    },

    {
      heading: 'Advantages of TreeMap',

      content: `
• Automatic sorting
• Efficient searching
• Predictable ordering
`.trim(),
    },

    {
      heading: 'Important Points About TreeMap',

      content: `
• TreeMap implements NavigableMap
• Keys remain sorted
• Null keys are not allowed
• Uses Red-Black Tree internally

Common Beginner Mistakes:

• Expecting insertion order
• Using incompatible key types
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'TreeMap Example',

      language: 'java',

      code: `import java.util.TreeMap;

public class Main {

    public static void main(String[] args) {

        TreeMap<Integer, String> map =
            new TreeMap<>();

        map.put(3, "Java");

        map.put(1, "Python");

        map.put(2, "C++");

        System.out.println(map);

    }

}`,

      output: '{1=Python, 2=C++, 3=Java}',
    },
  ],

  mcqs: [
    {
      question:
        'TreeMap stores keys in?', 

      options: [
        'Random order',
        'Insertion order',
        'Sorted order',
        'Reverse insertion order'
      ],

      answer: 2,

      explanation:
        'TreeMap stores keys in sorted order.',
    },

    {
      question:
        'TreeMap internally uses?', 

      options: [
        'Heap',
        'Hashing',
        'Red-Black Tree',
        'Stack'
      ],

      answer: 2,

      explanation:
        'TreeMap uses Red-Black Tree internally.',
    },

    {
      question:
        'TreeMap allows?', 

      options: [
        'Duplicate keys',
        'Null keys',
        'Sorted keys',
        'No values'
      ],

      answer: 2,

      explanation:
        'TreeMap maintains sorted keys.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is TreeMap in Java?',

      answer:
        'TreeMap stores key-value pairs in sorted order using Red-Black Tree.',
    },

    {
      question:
        'Why is TreeMap useful?',

      answer:
        'TreeMap automatically sorts keys and provides efficient searching.',
    },
  ],

  nextTopic: 'java-hashtable',
},

{
  id: 'java-hashtable',

  title: 'Java Hashtable',

  slug: 'java-hashtable',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '34 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java Hashtable deeply including synchronization, key-value storage, methods, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'HCL'],

  sections: [
    {
      heading: 'Java Hashtable',

      content: `
• Introduction to Hashtable

• Key-Value Storage

• Synchronization

• Hashtable Methods

• Thread Safety

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Hashtable?',

      content: `
Hashtable stores key-value pairs using hashing technique.

It is synchronized and thread-safe.
`.trim(),
    },

    {
      heading: 'Why Hashtable is Important',

      content: `
Used for:

• Thread-safe storage
• Multi-threaded applications
• Shared resources
`.trim(),
    },

    {
      heading: 'Features of Hashtable',

      content: `
• Synchronized
• No null keys
• No null values
• Uses hashing
`.trim(),
    },

    {
      heading: 'Advantages of Hashtable',

      content: `
• Thread safety
• Fast searching
• Reliable data access
`.trim(),
    },

    {
      heading: 'Important Points About Hashtable',

      content: `
• Hashtable is synchronized
• Null keys are not allowed
• Null values are not allowed
• Slower than HashMap

Common Beginner Mistakes:

• Confusing Hashtable with HashMap
• Adding null keys
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Hashtable Example',

      language: 'java',

      code: `import java.util.Hashtable;

public class Main {

    public static void main(String[] args) {

        Hashtable<Integer, String> table =
            new Hashtable<>();

        table.put(1, "Java");

        table.put(2, "Python");

        System.out.println(table);

    }

}`,

      output: '{2=Python, 1=Java}',
    },
  ],

  mcqs: [
    {
      question:
        'Hashtable is?', 

      options: [
        'Unsynchronized',
        'Synchronized',
        'Static',
        'Immutable'
      ],

      answer: 1,

      explanation:
        'Hashtable is synchronized.',
    },

    {
      question:
        'Hashtable allows?', 

      options: [
        'Null keys',
        'Null values',
        'Neither null keys nor null values',
        'Duplicate keys'
      ],

      answer: 2,

      explanation:
        'Hashtable does not allow null keys and values.',
    },

    {
      question:
        'Hashtable uses?', 

      options: [
        'Linked list',
        'Tree',
        'Hashing',
        'Compiler'
      ],

      answer: 2,

      explanation:
        'Hashtable uses hashing internally.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Hashtable in Java?',

      answer:
        'Hashtable is synchronized key-value collection using hashing technique.',
    },

    {
      question:
        'Why is Hashtable thread-safe?',

      answer:
        'Because its methods are synchronized internally.',
    },
  ],

  nextTopic: 'hashmap-vs-hashtable',
},

{
  id: 'hashmap-vs-hashtable',

  title: 'HashMap vs Hashtable',

  slug: 'hashmap-vs-hashtable',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '32 min read',

  difficulty: 'Intermediate',

  description:
    'Learn difference between HashMap and Hashtable deeply including synchronization, performance, null handling, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'Accenture'],

  sections: [
    {
      heading: 'HashMap vs Hashtable',

      content: `
• Synchronization

• Thread Safety

• Null Handling

• Performance

• Internal Working

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'Main Difference',

      content: `
HashMap is non-synchronized.

Hashtable is synchronized and thread-safe.
`.trim(),
    },

    {
      heading: 'Null Handling Difference',

      content: `
HashMap:

• Allows one null key
• Allows multiple null values

Hashtable:

• Does not allow null keys
• Does not allow null values
`.trim(),
    },

    {
      heading: 'Performance Difference',

      content: `
HashMap is faster because it is non-synchronized.

Hashtable is slower because of synchronization.
`.trim(),
    },

    {
      heading: 'When to Use Which?',

      content: `
Use HashMap:

• Single-threaded applications

Use Hashtable:

• Multi-threaded environments
`.trim(),
    },

    {
      heading: 'Important Points About HashMap vs Hashtable',

      content: `
• HashMap is modern collection class
• Hashtable is legacy class
• Hashtable provides thread safety
• HashMap gives better performance

Common Beginner Mistakes:

• Using Hashtable unnecessarily
• Forgetting null restrictions
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'HashMap vs Hashtable Example',

      language: 'java',

      code: `import java.util.*;

public class Main {

    public static void main(String[] args) {

        HashMap<Integer, String> map =
            new HashMap<>();

        Hashtable<Integer, String> table =
            new Hashtable<>();

        map.put(1, "Java");

        table.put(2, "Python");

        System.out.println(map);

        System.out.println(table);

    }

}`,

      output: '{1=Java}\n{2=Python}',
    },
  ],

  mcqs: [
    {
      question:
        'Which collection is synchronized?',

      options: [
        'HashMap',
        'Hashtable',
        'TreeMap',
        'LinkedHashMap'
      ],

      answer: 1,

      explanation:
        'Hashtable is synchronized.',
    },

    {
      question:
        'Which allows null key?',

      options: [
        'Hashtable',
        'TreeMap',
        'HashMap',
        'EnumMap'
      ],

      answer: 2,

      explanation:
        'HashMap allows one null key.',
    },

    {
      question:
        'Which is faster?', 

      options: [
        'Hashtable',
        'HashMap',
        'Both same',
        'TreeMap'
      ],

      answer: 1,

      explanation:
        'HashMap is faster because it is non-synchronized.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is difference between HashMap and Hashtable?',

      answer:
        'HashMap is non-synchronized while Hashtable is synchronized and thread-safe.',
    },

    {
      question:
        'Why is HashMap faster than Hashtable?',

      answer:
        'Because HashMap does not use synchronization overhead.',
    },
  ],

  nextTopic: 'java-enumset',
},

{
  id: 'java-enumset',

  title: 'Java EnumSet',

  slug: 'java-enumset',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '28 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java EnumSet deeply including enum collections, performance, methods, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Capgemini'],

  sections: [
    {
      heading: 'Java EnumSet',

      content: `
• Introduction to EnumSet

• Enum Collections

• High Performance

• EnumSet Methods

• Internal Working

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is EnumSet?',

      content: `
EnumSet is specialized Set implementation for enum values only.
`.trim(),
    },

    {
      heading: 'Why EnumSet is Important',

      content: `
Used for:

• Storing enum constants
• Fast enum operations
• Memory-efficient collections
`.trim(),
    },

    {
      heading: 'Features of EnumSet',

      content: `
• High performance
• Type safety
• Stores only enum values
`.trim(),
    },

    {
      heading: 'Advantages of EnumSet',

      content: `
• Faster than HashSet
• Compact memory usage
• Easy enum handling
`.trim(),
    },

    {
      heading: 'Important Points About EnumSet',

      content: `
• Works only with enums
• Does not allow null values
• Internally uses bit vector
• Extremely fast collection

Common Beginner Mistakes:

• Using non-enum values
• Confusing EnumSet with HashSet
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'EnumSet Example',

      language: 'java',

      code: `import java.util.EnumSet;

enum Day {

    MONDAY,
    TUESDAY,
    WEDNESDAY

}

public class Main {

    public static void main(String[] args) {

        EnumSet<Day> set =
            EnumSet.of(
                Day.MONDAY,
                Day.WEDNESDAY
            );

        System.out.println(set);

    }

}`,

      output: '[MONDAY, WEDNESDAY]',
    },
  ],

  mcqs: [
    {
      question:
        'EnumSet stores?', 

      options: [
        'Strings',
        'Objects',
        'Enum values only',
        'Numbers only'
      ],

      answer: 2,

      explanation:
        'EnumSet stores enum values only.',
    },

    {
      question:
        'EnumSet is faster than?', 

      options: [
        'HashSet',
        'TreeMap',
        'Queue',
        'Stack'
      ],

      answer: 0,

      explanation:
        'EnumSet is faster than HashSet for enum values.',
    },

    {
      question:
        'EnumSet internally uses?', 

      options: [
        'Tree',
        'Bit vector',
        'Stack',
        'Queue'
      ],

      answer: 1,

      explanation:
        'EnumSet internally uses bit vector.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is EnumSet in Java?',

      answer:
        'EnumSet is specialized Set implementation designed for enum values.',
    },

    {
      question:
        'Why is EnumSet very fast?',

      answer:
        'Because it internally uses compact bit vector representation.',
    },
  ],

  nextTopic: 'java-enummap',
},

{
  id: 'java-enummap',

  title: 'Java EnumMap',

  slug: 'java-enummap',

  image:
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd',

  readTime: '30 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java EnumMap deeply including enum-based key storage, performance, methods, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'IBM'],

  sections: [
    {
      heading: 'Java EnumMap',

      content: `
• Introduction to EnumMap

• Enum-based Keys

• High Performance

• Key-Value Storage

• EnumMap Methods

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is EnumMap?',

      content: `
EnumMap is specialized Map implementation where keys are enum constants.
`.trim(),
    },

    {
      heading: 'Why EnumMap is Important',

      content: `
Used for:

• Enum-based mappings
• Fast key lookup
• Memory-efficient storage
`.trim(),
    },

    {
      heading: 'Features of EnumMap',

      content: `
• Stores enum keys
• Faster than HashMap
• Maintains enum order
`.trim(),
    },

    {
      heading: 'Advantages of EnumMap',

      content: `
• High performance
• Compact memory usage
• Type-safe keys
`.trim(),
    },

    {
      heading: 'Important Points About EnumMap',

      content: `
• Keys must be enum constants
• Faster than HashMap
• Maintains natural enum order
• Null keys are not allowed

Common Beginner Mistakes:

• Using non-enum keys
• Expecting random ordering
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'EnumMap Example',

      language: 'java',

      code: `import java.util.EnumMap;

enum Day {

    MONDAY,
    TUESDAY,
    WEDNESDAY

}

public class Main {

    public static void main(String[] args) {

        EnumMap<Day, String> map =
            new EnumMap<>(Day.class);

        map.put(Day.MONDAY, "Java");

        map.put(Day.TUESDAY, "Python");

        System.out.println(map);

    }

}`,

      output: '{MONDAY=Java, TUESDAY=Python}',
    },
  ],

  mcqs: [
    {
      question:
        'EnumMap uses which type of keys?',

      options: [
        'String',
        'Integer',
        'Enum constants',
        'Objects'
      ],

      answer: 2,

      explanation:
        'EnumMap uses enum constants as keys.',
    },

    {
      question:
        'EnumMap is faster than?', 

      options: [
        'HashMap',
        'ArrayList',
        'Queue',
        'Stack'
      ],

      answer: 0,

      explanation:
        'EnumMap is faster than HashMap for enum keys.',
    },

    {
      question:
        'EnumMap maintains?', 

      options: [
        'Random order',
        'Insertion order',
        'Natural enum order',
        'Reverse order'
      ],

      answer: 2,

      explanation:
        'EnumMap maintains natural enum order.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is EnumMap in Java?',

      answer:
        'EnumMap is specialized Map implementation using enum constants as keys.',
    },

    {
      question:
        'Why is EnumMap preferred for enum keys?',

      answer:
        'EnumMap provides better performance and memory efficiency for enum-based mappings.',
    },
  ],

  nextTopic: 'java-collections-class',
},
{
  id: 'java-collections-class',

  title: 'Java Collections class',

  slug: 'java-collections-class',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '36 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java Collections class deeply including utility methods, sorting, searching, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Oracle'],

  sections: [
    {
      heading: 'Java Collections class',

      content: `
• Introduction to Collections class

• Utility Methods

• Sorting Collections

• Searching Elements

• Reversing Data

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Collections class?',

      content: `
Collections class is utility class available in java.util package.

It provides static methods for collection operations.
`.trim(),
    },

    {
      heading: 'Important Methods of Collections class',

      content: `
Common methods:

• sort()
• reverse()
• shuffle()
• max()
• min()
• binarySearch()
`.trim(),
    },

    {
      heading: 'Why Collections class is Important',

      content: `
Used for:

• Sorting data
• Searching elements
• Reversing collections
• Data manipulation
`.trim(),
    },

    {
      heading: 'Advantages of Collections class',

      content: `
• Ready-made utility methods
• Reduces coding effort
• Faster collection operations
`.trim(),
    },

    {
      heading: 'Important Points About Collections class',

      content: `
• Collections class contains static methods
• Belongs to java.util package
• Works with List and other collections
• Simplifies collection handling

Common Beginner Mistakes:

• Confusing Collection and Collections
• Forgetting import statement
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Collections class Example',

      language: 'java',

      code: `import java.util.*;

public class Main {

    public static void main(String[] args) {

        ArrayList<Integer> list =
            new ArrayList<>();

        list.add(30);

        list.add(10);

        list.add(20);

        Collections.sort(list);

        System.out.println(list);

    }

}`,

      output: '[10, 20, 30]',
    },
  ],

  mcqs: [
    {
      question:
        'Collections class belongs to which package?',

      options: [
        'java.io',
        'java.sql',
        'java.util',
        'java.net'
      ],

      answer: 2,

      explanation:
        'Collections class belongs to java.util package.',
    },

    {
      question:
        'Which method is used for sorting?',

      options: [
        'arrange()',
        'sort()',
        'order()',
        'set()'
      ],

      answer: 1,

      explanation:
        'sort() method sorts collection elements.',
    },

    {
      question:
        'Collections class contains?', 

      options: [
        'Constructors only',
        'Static utility methods',
        'Threads',
        'Interfaces'
      ],

      answer: 1,

      explanation:
        'Collections class provides static utility methods.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Collections class in Java?',

      answer:
        'Collections class is utility class that provides static methods for collection operations.',
    },

    {
      question:
        'Why is Collections class useful?',

      answer:
        'It simplifies sorting, searching, and manipulation of collection data.',
    },
  ],

  nextTopic: 'sorting-collections-java',
},

{
  id: 'sorting-collections-java',

  title: 'Sorting Collections in Java',

  slug: 'sorting-collections-java',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '34 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Sorting Collections in Java deeply including ascending order, descending order, custom sorting, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Accenture'],

  sections: [
    {
      heading: 'Sorting Collections in Java',

      content: `
• Introduction to Sorting

• Ascending Order

• Descending Order

• Collections.sort()

• Custom Sorting

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Sorting in Java?',

      content: `
Sorting means arranging data in particular order.

Types:

• Ascending order
• Descending order
`.trim(),
    },

    {
      heading: 'How Collections.sort() Works',

      content: `
Collections.sort() sorts List elements in ascending order by default.
`.trim(),
    },

    {
      heading: 'Descending Order Sorting',

      content: `
Collections.reverseOrder() is used for descending sorting.
`.trim(),
    },

    {
      heading: 'Why Sorting is Important',

      content: `
Used in:

• Student ranking
• Product listing
• Search optimization
• Report generation
`.trim(),
    },

    {
      heading: 'Important Points About Sorting Collections',

      content: `
• Collections.sort() sorts ascending by default
• reverseOrder() sorts descending
• Comparable or Comparator can customize sorting
• Sorting improves searching efficiency

Common Beginner Mistakes:

• Forgetting Comparable implementation
• Mixing incompatible data types
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Sorting Collections Example',

      language: 'java',

      code: `import java.util.*;

public class Main {

    public static void main(String[] args) {

        ArrayList<Integer> list =
            new ArrayList<>();

        list.add(40);

        list.add(10);

        list.add(30);

        Collections.sort(list);

        System.out.println(list);

    }

}`,

      output: '[10, 30, 40]',
    },
  ],

  mcqs: [
    {
      question:
        'Which method sorts collections?',

      options: [
        'arrange()',
        'order()',
        'sort()',
        'shuffle()'
      ],

      answer: 2,

      explanation:
        'sort() method is used for sorting.',
    },

    {
      question:
        'Default sorting order is?', 

      options: [
        'Descending',
        'Random',
        'Ascending',
        'Reverse'
      ],

      answer: 2,

      explanation:
        'Collections.sort() sorts in ascending order by default.',
    },

    {
      question:
        'Which method helps descending sorting?',

      options: [
        'reverseOrder()',
        'descending()',
        'backward()',
        'rotate()'
      ],

      answer: 0,

      explanation:
        'reverseOrder() provides descending sorting.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'How do you sort collections in Java?',

      answer:
        'Collections.sort() method is used to sort collections in ascending order.',
    },

    {
      question:
        'How do you perform descending sorting?',

      answer:
        'Collections.reverseOrder() is used for descending sorting.',
    },
  ],

  nextTopic: 'comparable-interface-java',
},

{
  id: 'comparable-interface-java',

  title: 'Comparable interface in Java',

  slug: 'comparable-interface-java',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '38 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Comparable interface in Java deeply including natural sorting, compareTo method, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Oracle'],

  sections: [
    {
      heading: 'Comparable interface in Java',

      content: `
• Introduction to Comparable

• Natural Ordering

• compareTo() Method

• Object Sorting

• Sorting Rules

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Comparable Interface?',

      content: `
Comparable interface is used for natural sorting of objects.
`.trim(),
    },

    {
      heading: 'compareTo() Method',

      content: `
compareTo() compares current object with another object.
`.trim(),
    },

    {
      heading: 'Return Values of compareTo()',

      content: `
• Negative value → smaller
• Zero → equal
• Positive value → greater
`.trim(),
    },

    {
      heading: 'Why Comparable is Important',

      content: `
Used for:

• Student sorting
• Employee ranking
• Product ordering
`.trim(),
    },

    {
      heading: 'Important Points About Comparable',

      content: `
• Comparable belongs to java.lang package
• compareTo() method is mandatory
• Supports natural sorting
• Only one sorting logic possible

Common Beginner Mistakes:

• Incorrect compareTo() logic
• Returning random values
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Comparable Example',

      language: 'java',

      code: `import java.util.*;

class Student
    implements Comparable<Student> {

    int id;

    Student(int id) {

        this.id = id;

    }

    public int compareTo(Student s) {

        return this.id - s.id;

    }

}

public class Main {

    public static void main(String[] args) {

        ArrayList<Student> list =
            new ArrayList<>();

        list.add(new Student(3));

        list.add(new Student(1));

        Collections.sort(list);

        for(Student s : list) {

            System.out.println(s.id);

        }

    }

}`,

      output: '1\n3',
    },
  ],

  mcqs: [
    {
      question:
        'Comparable interface provides?', 

      options: [
        'Threading',
        'Natural sorting',
        'Networking',
        'Compilation'
      ],

      answer: 1,

      explanation:
        'Comparable provides natural sorting.',
    },

    {
      question:
        'Which method is required in Comparable?',

      options: [
        'compare()',
        'compareTo()',
        'sort()',
        'equals()'
      ],

      answer: 1,

      explanation:
        'compareTo() method is mandatory.',
    },

    {
      question:
        'Comparable supports how many sorting logics?',

      options: [
        'One',
        'Two',
        'Unlimited',
        'None'
      ],

      answer: 0,

      explanation:
        'Comparable supports one sorting logic.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Comparable interface in Java?',

      answer:
        'Comparable interface is used for natural sorting using compareTo() method.',
    },

    {
      question:
        'Why is compareTo() important?',

      answer:
        'compareTo() defines object comparison logic for sorting.',
    },
  ],

  nextTopic: 'comparator-interface-java',
},

{
  id: 'comparator-interface-java',

  title: 'Comparator interface in Java',

  slug: 'comparator-interface-java',

  image:
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd',

  readTime: '40 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Comparator interface in Java deeply including custom sorting, compare method, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'IBM'],

  sections: [
    {
      heading: 'Comparator interface in Java',

      content: `
• Introduction to Comparator

• Custom Sorting

• compare() Method

• Multiple Sorting Logic

• Object Comparison

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Comparator Interface?',

      content: `
Comparator interface is used for custom sorting of objects.
`.trim(),
    },

    {
      heading: 'compare() Method',

      content: `
compare() method compares two objects.
`.trim(),
    },

    {
      heading: 'Why Comparator is Important',

      content: `
Used for:

• Multiple sorting logics
• Custom ordering
• Advanced sorting
`.trim(),
    },

    {
      heading: 'Advantages of Comparator',

      content: `
• Multiple sorting possible
• External sorting logic
• Flexible comparison
`.trim(),
    },

    {
      heading: 'Important Points About Comparator',

      content: `
• Comparator belongs to java.util package
• compare() method is required
• Supports multiple sorting logic
• Sorting logic remains separate from class

Common Beginner Mistakes:

• Returning incorrect compare values
• Confusing compare() with compareTo()
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Comparator Example',

      language: 'java',

      code: `import java.util.*;

class Student {

    int id;

    Student(int id) {

        this.id = id;

    }

}

class SortById
    implements Comparator<Student> {

    public int compare(
        Student a,
        Student b) {

        return a.id - b.id;

    }

}

public class Main {

    public static void main(String[] args) {

        ArrayList<Student> list =
            new ArrayList<>();

        list.add(new Student(5));

        list.add(new Student(1));

        Collections.sort(
            list,
            new SortById()
        );

        for(Student s : list) {

            System.out.println(s.id);

        }

    }

}`,

      output: '1\n5',
    },
  ],

  mcqs: [
    {
      question:
        'Comparator interface belongs to?', 

      options: [
        'java.lang',
        'java.io',
        'java.util',
        'java.net'
      ],

      answer: 2,

      explanation:
        'Comparator belongs to java.util package.',
    },

    {
      question:
        'Comparator uses which method?',

      options: [
        'compareTo()',
        'compare()',
        'sort()',
        'equals()'
      ],

      answer: 1,

      explanation:
        'Comparator uses compare() method.',
    },

    {
      question:
        'Comparator supports?', 

      options: [
        'Only one sorting',
        'Multiple sorting logic',
        'No sorting',
        'Compilation'
      ],

      answer: 1,

      explanation:
        'Comparator supports multiple sorting logic.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Comparator interface in Java?',

      answer:
        'Comparator interface provides custom sorting logic using compare() method.',
    },

    {
      question:
        'Why is Comparator preferred sometimes?',

      answer:
        'Comparator supports multiple custom sorting logics externally.',
    },
  ],

  nextTopic: 'comparable-vs-comparator',
},

{
  id: 'comparable-vs-comparator',

  title: 'Comparable vs Comparator',

  slug: 'comparable-vs-comparator',

  image:
    'https://images.unsplash.com/photo-1518770660439-4636190af475',

  readTime: '32 min read',

  difficulty: 'Intermediate',

  description:
    'Learn difference between Comparable and Comparator deeply including sorting logic, methods, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Accenture'],

  sections: [
    {
      heading: 'Comparable vs Comparator',

      content: `
• Natural Sorting

• Custom Sorting

• compareTo() vs compare()

• Package Difference

• Multiple Sorting Logic

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'Main Difference',

      content: `
Comparable provides natural sorting.

Comparator provides custom sorting.
`.trim(),
    },

    {
      heading: 'Method Difference',

      content: `
Comparable:

• compareTo()

Comparator:

• compare()
`.trim(),
    },

    {
      heading: 'Package Difference',

      content: `
Comparable:

• java.lang package

Comparator:

• java.util package
`.trim(),
    },

    {
      heading: 'Sorting Logic Difference',

      content: `
Comparable:

• One sorting logic

Comparator:

• Multiple sorting logics
`.trim(),
    },

    {
      heading: 'Important Points About Comparable vs Comparator',

      content: `
• Comparable modifies original class
• Comparator keeps sorting logic separate
• Comparator is more flexible
• Comparable supports default sorting

Common Beginner Mistakes:

• Confusing compare() and compareTo()
• Using wrong interface for multiple sorting
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Comparable vs Comparator Example',

      language: 'java',

      code: `System.out.println(
    "Comparable uses compareTo()"
);

System.out.println(
    "Comparator uses compare()"
);`,

      output:
        'Comparable uses compareTo()\nComparator uses compare()',
    },
  ],

  mcqs: [
    {
      question:
        'Comparable uses which method?',

      options: [
        'compare()',
        'compareTo()',
        'sort()',
        'equals()'
      ],

      answer: 1,

      explanation:
        'Comparable uses compareTo() method.',
    },

    {
      question:
        'Comparator belongs to which package?',

      options: [
        'java.io',
        'java.lang',
        'java.net',
        'java.util'
      ],

      answer: 3,

      explanation:
        'Comparator belongs to java.util package.',
    },

    {
      question:
        'Which supports multiple sorting logic?',

      options: [
        'Comparable',
        'Comparator',
        'Both same',
        'Neither'
      ],

      answer: 1,

      explanation:
        'Comparator supports multiple sorting logic.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is difference between Comparable and Comparator?',

      answer:
        'Comparable provides natural sorting while Comparator provides custom sorting.',
    },

    {
      question:
        'When should Comparator be preferred?',

      answer:
        'Comparator should be preferred when multiple sorting logics are required.',
    },
  ],

  nextTopic: 'properties-class-java',
},

{
  id: 'properties-class-java',

  title: 'Properties class in Java',

  slug: 'properties-class-java',

  image:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',

  readTime: '30 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Properties class in Java deeply including configuration handling, key-value storage, file loading, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'Capgemini'],

  sections: [
    {
      heading: 'Properties class in Java',

      content: `
• Introduction to Properties class

• Key-Value Storage

• Configuration Files

• Reading Properties

• Writing Properties

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Properties class?',

      content: `
Properties class stores data in key-value pair format.

Mostly used for configuration settings.
`.trim(),
    },

    {
      heading: 'Why Properties class is Important',

      content: `
Used for:

• Database configuration
• Application settings
• Environment variables
• Server configuration
`.trim(),
    },

    {
      heading: 'Important Methods of Properties class',

      content: `
Common methods:

• setProperty()
• getProperty()
• load()
• store()
`.trim(),
    },

    {
      heading: 'Advantages of Properties class',

      content: `
• Easy configuration handling
• Simple key-value storage
• External configuration support
`.trim(),
    },

    {
      heading: 'Important Points About Properties class',

      content: `
• Properties class extends Hashtable
• Stores String key-value pairs
• Mostly used with .properties files
• Useful for configuration management

Common Beginner Mistakes:

• Forgetting file loading
• Using non-string keys
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Properties class Example',

      language: 'java',

      code: `import java.util.Properties;

public class Main {

    public static void main(String[] args) {

        Properties p =
            new Properties();

        p.setProperty(
            "username",
            "admin"
        );

        System.out.println(
            p.getProperty("username")
        );

    }

}`,

      output: 'admin',
    },
  ],

  mcqs: [
    {
      question:
        'Properties class stores?', 

      options: [
        'Arrays',
        'Objects',
        'Key-value pairs',
        'Threads'
      ],

      answer: 2,

      explanation:
        'Properties class stores key-value pairs.',
    },

    {
      question:
        'Properties class mainly used for?', 

      options: [
        'Gaming',
        'Configuration settings',
        'Graphics',
        'Networking'
      ],

      answer: 1,

      explanation:
        'Properties class is mainly used for configuration settings.',
    },

    {
      question:
        'Which method reads property value?',

      options: [
        'setProperty()',
        'load()',
        'store()',
        'getProperty()'
      ],

      answer: 3,

      explanation:
        'getProperty() reads property value.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Properties class in Java?',

      answer:
        'Properties class stores configuration data in key-value pair format.',
    },

    {
      question:
        'Why are .properties files important?',

      answer:
        'They help store external application configurations separately from code.',
    },
  ],

  nextTopic: 'java-vector',
},
{
  id: 'java-vector',

  title: 'Java Vector',

  slug: 'java-vector',

  image:
    'https://images.unsplash.com/photo-1518770660439-4636190af475',

  readTime: '34 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java Vector deeply including dynamic arrays, synchronization, methods, capacity handling, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Oracle'],

  sections: [
    {
      heading: 'Java Vector',

      content: `
• Introduction to Vector

• Dynamic Array

• Synchronization

• Capacity Handling

• Vector Methods

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Vector in Java?',

      content: `
Vector is dynamic array class in Java.

It automatically increases its size when elements are added.
`.trim(),
    },

    {
      heading: 'Features of Vector',

      content: `
• Dynamic resizing
• Synchronized
• Thread-safe
• Maintains insertion order
`.trim(),
    },

    {
      heading: 'Important Methods of Vector',

      content: `
Common methods:

• add()
• remove()
• get()
• size()
• capacity()
`.trim(),
    },

    {
      heading: 'Why Vector is Important',

      content: `
Used for:

• Dynamic storage
• Thread-safe collections
• Legacy applications
`.trim(),
    },

    {
      heading: 'Important Points About Vector',

      content: `
• Vector is synchronized
• Slower than ArrayList
• Maintains insertion order
• Capacity increases automatically

Common Beginner Mistakes:

• Confusing Vector with ArrayList
• Ignoring synchronization overhead
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Vector Example',

      language: 'java',

      code: `import java.util.Vector;

public class Main {

    public static void main(String[] args) {

        Vector<String> vector =
            new Vector<>();

        vector.add("Java");

        vector.add("Python");

        System.out.println(vector);

    }

}`,

      output: '[Java, Python]',
    },
  ],

  mcqs: [
    {
      question:
        'Vector is?', 

      options: [
        'Static array',
        'Dynamic array',
        'Tree',
        'Queue'
      ],

      answer: 1,

      explanation:
        'Vector is dynamic array implementation.',
    },

    {
      question:
        'Vector is?', 

      options: [
        'Non-synchronized',
        'Synchronized',
        'Immutable',
        'Final'
      ],

      answer: 1,

      explanation:
        'Vector is synchronized and thread-safe.',
    },

    {
      question:
        'Vector maintains?', 

      options: [
        'Sorted order',
        'Random order',
        'Insertion order',
        'Reverse order'
      ],

      answer: 2,

      explanation:
        'Vector maintains insertion order.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Vector in Java?',

      answer:
        'Vector is synchronized dynamic array implementation in Java.',
    },

    {
      question:
        'Why is Vector slower than ArrayList?',

      answer:
        'Because Vector uses synchronization which adds extra overhead.',
    },
  ],

  nextTopic: 'java-stack',
},

{
  id: 'java-stack',

  title: 'Java Stack',

  slug: 'java-stack',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '32 min read',

  difficulty: 'Beginner',

  description:
    'Learn Java Stack deeply including LIFO principle, stack methods, applications, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'IBM'],

  sections: [
    {
      heading: 'Java Stack',

      content: `
• Introduction to Stack

• LIFO Principle

• Stack Methods

• Push & Pop Operations

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Stack in Java?',

      content: `
Stack is linear data structure that follows LIFO principle.

LIFO means:

• Last In First Out
`.trim(),
    },

    {
      heading: 'Important Stack Methods',

      content: `
Common methods:

• push()
• pop()
• peek()
• empty()
• search()
`.trim(),
    },

    {
      heading: 'Why Stack is Important',

      content: `
Used in:

• Undo operations
• Browser history
• Expression evaluation
• Function calls
`.trim(),
    },

    {
      heading: 'Advantages of Stack',

      content: `
• Simple data handling
• Fast insertion and deletion
• Useful for recursion
`.trim(),
    },

    {
      heading: 'Important Points About Stack',

      content: `
• Stack follows LIFO principle
• push() adds element
• pop() removes top element
• peek() reads top element

Common Beginner Mistakes:

• Confusing FIFO and LIFO
• Popping empty stack
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Stack Example',

      language: 'java',

      code: `import java.util.Stack;

public class Main {

    public static void main(String[] args) {

        Stack<Integer> stack =
            new Stack<>();

        stack.push(10);

        stack.push(20);

        System.out.println(
            stack.pop()
        );

    }

}`,

      output: '20',
    },
  ],

  mcqs: [
    {
      question:
        'Stack follows which principle?',

      options: [
        'FIFO',
        'LIFO',
        'Random',
        'Binary'
      ],

      answer: 1,

      explanation:
        'Stack follows LIFO principle.',
    },

    {
      question:
        'Which method removes top element?',

      options: [
        'peek()',
        'push()',
        'pop()',
        'insert()'
      ],

      answer: 2,

      explanation:
        'pop() removes top element.',
    },

    {
      question:
        'Which method reads top element?',

      options: [
        'peek()',
        'remove()',
        'search()',
        'clear()'
      ],

      answer: 0,

      explanation:
        'peek() returns top element.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Stack in Java?',

      answer:
        'Stack is linear data structure following LIFO principle.',
    },

    {
      question:
        'Where is Stack used in real world?',

      answer:
        'Stack is used in undo operations, recursion, and browser history.',
    },
  ],

  nextTopic: 'java-collection-interface',
},

{
  id: 'java-collection-interface',

  title: 'Java Collection Interface',

  slug: 'java-collection-interface',

  image:
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd',

  readTime: '36 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java Collection Interface deeply including hierarchy, methods, implementations, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'Accenture'],

  sections: [
    {
      heading: 'Java Collection Interface',

      content: `
• Introduction to Collection Interface

• Collection Hierarchy

• Common Methods

• List, Set, Queue

• Framework Structure

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Collection Interface?',

      content: `
Collection interface is root interface of Java Collection Framework.
`.trim(),
    },

    {
      heading: 'Main Child Interfaces',

      content: `
Important child interfaces:

• List
• Set
• Queue
`.trim(),
    },

    {
      heading: 'Common Methods of Collection Interface',

      content: `
Important methods:

• add()
• remove()
• size()
• clear()
• contains()
`.trim(),
    },

    {
      heading: 'Why Collection Interface is Important',

      content: `
Used for:

• Dynamic data storage
• Data management
• Framework standardization
`.trim(),
    },

    {
      heading: 'Important Points About Collection Interface',

      content: `
• Collection is root interface
• Provides common collection methods
• Part of java.util package
• Implemented by many classes

Common Beginner Mistakes:

• Confusing Collection and Collections
• Forgetting hierarchy structure
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Collection Interface Example',

      language: 'java',

      code: `import java.util.*;

public class Main {

    public static void main(String[] args) {

        Collection<String> data =
            new ArrayList<>();

        data.add("Java");

        data.add("Python");

        System.out.println(data);

    }

}`,

      output: '[Java, Python]',
    },
  ],

  mcqs: [
    {
      question:
        'Collection interface belongs to?', 

      options: [
        'java.io',
        'java.net',
        'java.util',
        'java.sql'
      ],

      answer: 2,

      explanation:
        'Collection interface belongs to java.util package.',
    },

    {
      question:
        'Which is child interface of Collection?',

      options: [
        'Thread',
        'List',
        'File',
        'Math'
      ],

      answer: 1,

      explanation:
        'List is child interface of Collection.',
    },

    {
      question:
        'Collection interface provides?', 

      options: [
        'Database methods',
        'Graphics methods',
        'Common collection operations',
        'Networking operations'
      ],

      answer: 2,

      explanation:
        'Collection interface provides common collection operations.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Collection interface in Java?',

      answer:
        'Collection interface is root interface of Java Collection Framework.',
    },

    {
      question:
        'Why is Collection interface important?',

      answer:
        'It provides standard methods for handling collections.',
    },
  ],

  nextTopic: 'java-iterator-interface',
},

{
  id: 'java-iterator-interface',

  title: 'Java Iterator Interface',

  slug: 'java-iterator-interface',

  image:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',

  readTime: '34 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java Iterator Interface deeply including traversal, methods, iteration process, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'HCL'],

  sections: [
    {
      heading: 'Java Iterator Interface',

      content: `
• Introduction to Iterator

• Collection Traversal

• Iterator Methods

• Sequential Access

• Element Removal

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Iterator Interface?',

      content: `
Iterator interface is used to traverse collection elements one by one.
`.trim(),
    },

    {
      heading: 'Important Iterator Methods',

      content: `
Common methods:

• hasNext()
• next()
• remove()
`.trim(),
    },

    {
      heading: 'How Iterator Works',

      content: `
1. Check using hasNext()
2. Access using next()
3. Repeat until collection ends
`.trim(),
    },

    {
      heading: 'Why Iterator is Important',

      content: `
Used for:

• Collection traversal
• Safe element removal
• Dynamic iteration
`.trim(),
    },

    {
      heading: 'Important Points About Iterator',

      content: `
• Iterator works forward only
• Supports safe removal
• Used with collections
• Part of java.util package

Common Beginner Mistakes:

• Calling next() without hasNext()
• Modifying collection directly during iteration
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Iterator Example',

      language: 'java',

      code: `import java.util.*;

public class Main {

    public static void main(String[] args) {

        ArrayList<String> list =
            new ArrayList<>();

        list.add("Java");

        list.add("Python");

        Iterator<String> itr =
            list.iterator();

        while(itr.hasNext()) {

            System.out.println(
                itr.next()
            );

        }

    }

}`,

      output: 'Java\nPython',
    },
  ],

  mcqs: [
    {
      question:
        'Iterator is used for?', 

      options: [
        'Compilation',
        'Networking',
        'Collection traversal',
        'Database connection'
      ],

      answer: 2,

      explanation:
        'Iterator is used for collection traversal.',
    },

    {
      question:
        'Which method checks next element?',

      options: [
        'next()',
        'remove()',
        'hasNext()',
        'peek()'
      ],

      answer: 2,

      explanation:
        'hasNext() checks next element availability.',
    },

    {
      question:
        'Iterator moves in?', 

      options: [
        'Backward only',
        'Both directions',
        'Forward direction',
        'Random direction'
      ],

      answer: 2,

      explanation:
        'Iterator moves only in forward direction.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Iterator interface in Java?',

      answer:
        'Iterator interface is used to traverse collection elements sequentially.',
    },

    {
      question:
        'Why is Iterator preferred over loops sometimes?',

      answer:
        'Iterator provides safe traversal and removal during iteration.',
    },
  ],

  nextTopic: 'java-deque-interface',
},

{
  id: 'java-deque-interface',

  title: 'Java Deque Interface',

  slug: 'java-deque-interface',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '35 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java Deque Interface deeply including double-ended operations, methods, implementations, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'Capgemini'],

  sections: [
    {
      heading: 'Java Deque Interface',

      content: `
• Introduction to Deque Interface

• Double-ended Queue

• Insertion Operations

• Removal Operations

• Deque Methods

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Deque Interface?',

      content: `
Deque stands for Double Ended Queue.

It allows insertion and deletion from both ends.
`.trim(),
    },

    {
      heading: 'Important Methods of Deque',

      content: `
Common methods:

• addFirst()
• addLast()
• removeFirst()
• removeLast()
• peekFirst()
`.trim(),
    },

    {
      heading: 'Why Deque Interface is Important',

      content: `
Used for:

• Browser history
• Undo operations
• Scheduling systems
• Sliding window algorithms
`.trim(),
    },

    {
      heading: 'Advantages of Deque',

      content: `
• Faster insertion
• Flexible operations
• Works as queue and stack
`.trim(),
    },

    {
      heading: 'Important Points About Deque Interface',

      content: `
• Supports operations at both ends
• Can work as Stack and Queue
• Implemented by ArrayDeque
• Null elements usually not allowed

Common Beginner Mistakes:

• Confusing Queue and Deque
• Using wrong insertion methods
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Deque Interface Example',

      language: 'java',

      code: `import java.util.*;

public class Main {

    public static void main(String[] args) {

        Deque<String> deque =
            new ArrayDeque<>();

        deque.addFirst("Java");

        deque.addLast("Python");

        System.out.println(deque);

    }

}`,

      output: '[Java, Python]',
    },
  ],

  mcqs: [
    {
      question:
        'Deque stands for?', 

      options: [
        'Double Ended Queue',
        'Dynamic Queue',
        'Direct Queue',
        'Dual Entry Queue'
      ],

      answer: 0,

      explanation:
        'Deque means Double Ended Queue.',
    },

    {
      question:
        'Deque allows insertion from?', 

      options: [
        'Front only',
        'Rear only',
        'Both ends',
        'Middle only'
      ],

      answer: 2,

      explanation:
        'Deque supports insertion from both ends.',
    },

    {
      question:
        'Which class commonly implements Deque?',

      options: [
        'HashMap',
        'ArrayDeque',
        'TreeMap',
        'Vector'
      ],

      answer: 1,

      explanation:
        'ArrayDeque commonly implements Deque.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Deque interface in Java?',

      answer:
        'Deque interface supports insertion and deletion from both ends.',
    },

    {
      question:
        'Why is Deque flexible?',

      answer:
        'Because it can work as both Queue and Stack.',
    },
  ],

  nextTopic: 'java-listiterator-interface',
},

{
  id: 'java-listiterator-interface',

  title: 'Java ListIterator Interface',

  slug: 'java-listiterator-interface',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '33 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java ListIterator Interface deeply including bidirectional traversal, methods, modifications, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Accenture'],

  sections: [
    {
      heading: 'Java ListIterator Interface',

      content: `
• Introduction to ListIterator

• Bidirectional Traversal

• Forward Iteration

• Backward Iteration

• Modification Operations

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is ListIterator?',

      content: `
ListIterator is advanced iterator that supports forward and backward traversal.
`.trim(),
    },

    {
      heading: 'Important Methods of ListIterator',

      content: `
Common methods:

• hasNext()
• next()
• hasPrevious()
• previous()
• add()
• set()
`.trim(),
    },

    {
      heading: 'Why ListIterator is Important',

      content: `
Used for:

• Bidirectional traversal
• Dynamic modifications
• Advanced collection handling
`.trim(),
    },

    {
      heading: 'Advantages of ListIterator',

      content: `
• Forward and backward traversal
• Supports updates
• More powerful than Iterator
`.trim(),
    },

    {
      heading: 'Important Points About ListIterator',

      content: `
• Works mainly with List collections
• Supports bidirectional movement
• Can modify elements during traversal
• More flexible than Iterator

Common Beginner Mistakes:

• Confusing Iterator and ListIterator
• Using previous() without checking
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'ListIterator Example',

      language: 'java',

      code: `import java.util.*;

public class Main {

    public static void main(String[] args) {

        ArrayList<String> list =
            new ArrayList<>();

        list.add("Java");

        list.add("Python");

        ListIterator<String> itr =
            list.listIterator();

        while(itr.hasNext()) {

            System.out.println(
                itr.next()
            );

        }

    }

}`,

      output: 'Java\nPython',
    },
  ],

  mcqs: [
    {
      question:
        'ListIterator supports?', 

      options: [
        'Forward only',
        'Backward only',
        'Both forward and backward traversal',
        'Random traversal'
      ],

      answer: 2,

      explanation:
        'ListIterator supports both directions.',
    },

    {
      question:
        'Which method moves backward?',

      options: [
        'next()',
        'previous()',
        'peek()',
        'back()'
      ],

      answer: 1,

      explanation:
        'previous() moves backward.',
    },

    {
      question:
        'ListIterator is more powerful than?', 

      options: [
        'Thread',
        'Queue',
        'Iterator',
        'Map'
      ],

      answer: 2,

      explanation:
        'ListIterator is more powerful than Iterator.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is ListIterator in Java?',

      answer:
        'ListIterator is advanced iterator supporting bidirectional traversal.',
    },

    {
      question:
        'How is ListIterator different from Iterator?',

      answer:
        'ListIterator supports backward traversal and modifications while Iterator does not.',
    },
  ],

  nextTopic: 'java-wrapper-class',
},
{
  id: 'java-wrapper-class',

  title: 'Java Wrapper Classes',

  slug: 'java-wrapper-class',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '35 min read',

  difficulty: 'Beginner',

  description:
    'Learn Java Wrapper Classes deeply including primitive conversion, object handling, methods, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'IBM'],

  sections: [
    {
      heading: 'Java Wrapper Classes',

      content: `
• Introduction to Wrapper Classes

• Primitive to Object Conversion

• Wrapper Class Types

• Boxing and Unboxing

• Wrapper Methods

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What are Wrapper Classes?',

      content: `
Wrapper classes convert primitive data types into objects.

Example:

• int → Integer
• char → Character
• double → Double
`.trim(),
    },

    {
      heading: 'Why Wrapper Classes are Important',

      content: `
Used for:

• Collection Framework
• Object conversion
• Utility methods
• Data manipulation
`.trim(),
    },

    {
      heading: 'Types of Wrapper Classes',

      content: `
Important wrapper classes:

• Integer
• Double
• Float
• Character
• Boolean
`.trim(),
    },

    {
      heading: 'Advantages of Wrapper Classes',

      content: `
• Converts primitive into object
• Supports utility methods
• Needed in collections
`.trim(),
    },

    {
      heading: 'Important Points About Wrapper Classes',

      content: `
• Wrapper classes belong to java.lang package
• Immutable in nature
• Used heavily in Collection Framework
• Supports parsing methods

Common Beginner Mistakes:

• Confusing primitive and object types
• Forgetting wrapper method usage
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Wrapper Class Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        int number = 10;

        Integer obj = Integer.valueOf(number);

        System.out.println(obj);

    }

}`,

      output: '10',
    },
  ],

  mcqs: [
    {
      question:
        'Which wrapper class is used for int?',

      options: [
        'Float',
        'Integer',
        'Character',
        'Boolean'
      ],

      answer: 1,

      explanation:
        'Integer is wrapper class for int.',
    },

    {
      question:
        'Wrapper classes belong to which package?',

      options: [
        'java.io',
        'java.lang',
        'java.net',
        'java.sql'
      ],

      answer: 1,

      explanation:
        'Wrapper classes belong to java.lang package.',
    },

    {
      question:
        'Wrapper classes convert primitive into?', 

      options: [
        'Method',
        'Package',
        'Object',
        'Thread'
      ],

      answer: 2,

      explanation:
        'Wrapper classes convert primitive data into objects.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What are wrapper classes in Java?',

      answer:
        'Wrapper classes convert primitive data types into objects.',
    },

    {
      question:
        'Why are wrapper classes important?',

      answer:
        'Wrapper classes are required in collections and provide utility methods.',
    },
  ],

  nextTopic: 'autoboxing-unboxing-java',
},

{
  id: 'autoboxing-unboxing-java',

  title: 'Autoboxing and Unboxing in Java',

  slug: 'autoboxing-unboxing-java',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '32 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Autoboxing and Unboxing in Java deeply including automatic conversion, wrapper objects, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Accenture'],

  sections: [
    {
      heading: 'Autoboxing and Unboxing in Java',

      content: `
• Introduction to Autoboxing

• Introduction to Unboxing

• Automatic Conversion

• Wrapper Object Conversion

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Autoboxing?',

      content: `
Autoboxing means automatic conversion of primitive data type into wrapper object.
`.trim(),
    },

    {
      heading: 'What is Unboxing?',

      content: `
Unboxing means automatic conversion of wrapper object into primitive data type.
`.trim(),
    },

    {
      heading: 'Why Autoboxing is Important',

      content: `
Used for:

• Collection Framework
• Automatic conversion
• Cleaner code
`.trim(),
    },

    {
      heading: 'Advantages of Autoboxing and Unboxing',

      content: `
• Reduces manual conversion
• Cleaner syntax
• Improves readability
`.trim(),
    },

    {
      heading: 'Important Points About Autoboxing and Unboxing',

      content: `
• Introduced in Java 5
• Automatic conversion process
• Works with wrapper classes
• Commonly used in collections

Common Beginner Mistakes:

• Confusing autoboxing with type casting
• Ignoring null values during unboxing
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Autoboxing Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        int number = 100;

        Integer obj = number;

        int value = obj;

        System.out.println(value);

    }

}`,

      output: '100',
    },
  ],

  mcqs: [
    {
      question:
        'Autoboxing converts?', 

      options: [
        'Object to primitive',
        'Primitive to object',
        'Class to method',
        'Method to object'
      ],

      answer: 1,

      explanation:
        'Autoboxing converts primitive into object.',
    },

    {
      question:
        'Unboxing converts?', 

      options: [
        'Primitive to object',
        'Method to package',
        'Object to primitive',
        'Thread to class'
      ],

      answer: 2,

      explanation:
        'Unboxing converts object into primitive.',
    },

    {
      question:
        'Autoboxing introduced in?', 

      options: [
        'Java 1',
        'Java 3',
        'Java 5',
        'Java 8'
      ],

      answer: 2,

      explanation:
        'Autoboxing was introduced in Java 5.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is autoboxing in Java?',

      answer:
        'Autoboxing is automatic conversion of primitive data into wrapper object.',
    },

    {
      question:
        'What is unboxing in Java?',

      answer:
        'Unboxing is automatic conversion of wrapper object into primitive type.',
    },
  ],

  nextTopic: 'java-generics',
},

{
  id: 'java-generics',

  title: 'Java Generics',

  slug: 'java-generics',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '42 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java Generics deeply including type safety, generic classes, methods, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'Capgemini'],

  sections: [
    {
      heading: 'Java Generics',

      content: `
• Introduction to Generics

• Type Safety

• Generic Classes

• Generic Methods

• Reusable Code

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What are Generics?',

      content: `
Generics allow classes and methods to work with different data types safely.
`.trim(),
    },

    {
      heading: 'Why Generics are Important',

      content: `
Used for:

• Type safety
• Reusable code
• Reducing type casting
`.trim(),
    },

    {
      heading: 'Advantages of Generics',

      content: `
• Compile-time checking
• Cleaner code
• Better reusability
`.trim(),
    },

    {
      heading: 'Generic Syntax',

      content: `
Generic types are written using angle brackets.

Example:

• <T>
• <Integer>
• <String>
`.trim(),
    },

    {
      heading: 'Important Points About Generics',

      content: `
• Improves type safety
• Reduces runtime errors
• Used heavily in collections
• Supports reusable programming

Common Beginner Mistakes:

• Using raw types
• Confusing generics with inheritance
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Generics Example',

      language: 'java',

      code: `class Box<T> {

    T value;

    void set(T value) {

        this.value = value;

    }

    T get() {

        return value;

    }

}

public class Main {

    public static void main(String[] args) {

        Box<String> box =
            new Box<>();

        box.set("Java");

        System.out.println(box.get());

    }

}`,

      output: 'Java',
    },
  ],

  mcqs: [
    {
      question:
        'Generics improve?', 

      options: [
        'Gaming',
        'Type safety',
        'Graphics',
        'Networking'
      ],

      answer: 1,

      explanation:
        'Generics improve type safety.',
    },

    {
      question:
        'Generics reduce?', 

      options: [
        'Compilation',
        'Type casting',
        'Methods',
        'Packages'
      ],

      answer: 1,

      explanation:
        'Generics reduce explicit type casting.',
    },

    {
      question:
        'Generic symbols are written inside?', 

      options: [
        'Curly braces',
        'Round brackets',
        'Angle brackets',
        'Square brackets'
      ],

      answer: 2,

      explanation:
        'Generics use angle brackets.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What are Generics in Java?',

      answer:
        'Generics provide type-safe and reusable programming support.',
    },

    {
      question:
        'Why are Generics useful?',

      answer:
        'Generics reduce runtime errors and improve code safety.',
    },
  ],

  nextTopic: 'wildcard-generics-java',
},

{
  id: 'wildcard-generics-java',

  title: 'Wildcard in Generics',

  slug: 'wildcard-generics-java',

  image:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',

  readTime: '36 min read',

  difficulty: 'Advanced',

  description:
    'Learn Wildcard in Generics deeply including ?, upper bound, lower bound, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Oracle'],

  sections: [
    {
      heading: 'Wildcard in Generics',

      content: `
• Introduction to Wildcards

• ? Symbol

• Upper Bounded Wildcard

• Lower Bounded Wildcard

• Flexible Generic Programming

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Wildcard in Generics?',

      content: `
Wildcard represents unknown type in generics.

It is represented using ? symbol.
`.trim(),
    },

    {
      heading: 'Types of Wildcards',

      content: `
Important wildcard types:

• <?>
• <? extends ClassName>
• <? super ClassName>
`.trim(),
    },

    {
      heading: 'Why Wildcards are Important',

      content: `
Used for:

• Flexible programming
• Generic compatibility
• Reusable methods
`.trim(),
    },

    {
      heading: 'Advantages of Wildcards',

      content: `
• Better flexibility
• Generic compatibility
• Cleaner generic methods
`.trim(),
    },

    {
      heading: 'Important Points About Wildcards',

      content: `
• ? means unknown type
• extends provides upper bound
• super provides lower bound
• Used heavily in collections

Common Beginner Mistakes:

• Confusing extends and super
• Using wildcards unnecessarily
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Wildcard Example',

      language: 'java',

      code: `import java.util.*;

public class Main {

    static void print(
        List<?> list
    ) {

        System.out.println(list);

    }

    public static void main(String[] args) {

        List<String> names =
            Arrays.asList(
                "Java",
                "Python"
            );

        print(names);

    }

}`,

      output: '[Java, Python]',
    },
  ],

  mcqs: [
    {
      question:
        'Wildcard symbol is?', 

      options: [
        '#',
        '*',
        '?',
        '&'
      ],

      answer: 2,

      explanation:
        'Wildcard is represented using ? symbol.',
    },

    {
      question:
        'Which keyword provides upper bound?',

      options: [
        'super',
        'extends',
        'implements',
        'final'
      ],

      answer: 1,

      explanation:
        'extends provides upper bounded wildcard.',
    },

    {
      question:
        'Wildcards improve?', 

      options: [
        'Graphics',
        'Networking',
        'Generic flexibility',
        'Compilation'
      ],

      answer: 2,

      explanation:
        'Wildcards improve generic flexibility.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is wildcard in Java Generics?',

      answer:
        'Wildcard represents unknown type using ? symbol.',
    },

    {
      question:
        'What is difference between extends and super wildcard?',

      answer:
        'extends provides upper bound while super provides lower bound.',
    },
  ],

  nextTopic: 'java-annotations',
},

{
  id: 'java-annotations',

  title: 'Java Annotations',

  slug: 'java-annotations',

  image:
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd',

  readTime: '38 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java Annotations deeply including metadata, built-in annotations, custom annotations, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'IBM'],

  sections: [
    {
      heading: 'Java Annotations',

      content: `
• Introduction to Annotations

• Metadata in Java

• Built-in Annotations

• Custom Annotations

• Annotation Usage

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What are Annotations?',

      content: `
Annotations provide metadata information to compiler and JVM.
`.trim(),
    },

    {
      heading: 'Common Built-in Annotations',

      content: `
Important annotations:

• @Override
• @Deprecated
• @SuppressWarnings
`.trim(),
    },

    {
      heading: 'Why Annotations are Important',

      content: `
Used for:

• Compiler instructions
• Framework development
• Metadata handling
`.trim(),
    },

    {
      heading: 'Advantages of Annotations',

      content: `
• Cleaner configuration
• Better readability
• Compiler checking
`.trim(),
    },

    {
      heading: 'Important Points About Annotations',

      content: `
• Annotations start with @ symbol
• Provide metadata information
• Widely used in frameworks
• Improve code readability

Common Beginner Mistakes:

• Confusing annotations with comments
• Incorrect annotation placement
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Annotation Example',

      language: 'java',

      code: `class Parent {

    void show() {

        System.out.println("Parent");

    }

}

class Child extends Parent {

    @Override
    void show() {

        System.out.println("Child");

    }

}

public class Main {

    public static void main(String[] args) {

        Child c = new Child();

        c.show();

    }

}`,

      output: 'Child',
    },
  ],

  mcqs: [
    {
      question:
        'Annotations start with?', 

      options: [
        '#',
        '@',
        '&',
        '*'
      ],

      answer: 1,

      explanation:
        'Annotations start with @ symbol.',
    },

    {
      question:
        'Which annotation checks overriding?',

      options: [
        '@Override',
        '@Final',
        '@Test',
        '@Class'
      ],

      answer: 0,

      explanation:
        '@Override checks method overriding.',
    },

    {
      question:
        'Annotations provide?', 

      options: [
        'Graphics',
        'Metadata',
        'Networking',
        'Threading'
      ],

      answer: 1,

      explanation:
        'Annotations provide metadata information.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What are annotations in Java?',

      answer:
        'Annotations provide metadata information to compiler and JVM.',
    },

    {
      question:
        'Why are annotations important?',

      answer:
        'Annotations improve readability and provide compiler instructions.',
    },
  ],

  nextTopic: 'java-reflection-api',
},
{
  id: 'java-reflection-api',

  title: 'Java Reflection API',

  slug: 'java-reflection-api',

  image:
    'https://images.unsplash.com/photo-1518770660439-4636190af475',

  readTime: '42 min read',

  difficulty: 'Advanced',

  description:
    'Learn Java Reflection API deeply including runtime class inspection, methods, fields, constructors, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'IBM'],

  sections: [
    {
      heading: 'Java Reflection API',

      content: `
• Introduction to Reflection API

• Runtime Class Information

• Accessing Methods

• Accessing Fields

• Constructor Handling

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Reflection API?',

      content: `
Reflection API allows Java programs to inspect and manipulate classes at runtime.
`.trim(),
    },

    {
      heading: 'Why Reflection API is Important',

      content: `
Used for:

• Framework development
• Dynamic object creation
• Runtime inspection
• Testing tools
`.trim(),
    },

    {
      heading: 'Important Reflection Classes',

      content: `
Common classes:

• Class
• Method
• Field
• Constructor
`.trim(),
    },

    {
      heading: 'Advantages of Reflection API',

      content: `
• Runtime flexibility
• Dynamic programming
• Framework support
`.trim(),
    },

    {
      heading: 'Important Points About Reflection API',

      content: `
• Reflection works at runtime
• Can access private members
• Used heavily in frameworks
• Slower than normal method calls

Common Beginner Mistakes:

• Overusing reflection unnecessarily
• Ignoring performance impact
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Reflection API Example',

      language: 'java',

      code: `class Student {

    int id;

}

public class Main {

    public static void main(String[] args)
        throws Exception {

        Class c = Student.class;

        System.out.println(
            c.getName()
        );

    }

}`,

      output: 'Student',
    },
  ],

  mcqs: [
    {
      question:
        'Reflection API works at?', 

      options: [
        'Compile time',
        'Runtime',
        'Installation time',
        'Server time'
      ],

      answer: 1,

      explanation:
        'Reflection API works at runtime.',
    },

    {
      question:
        'Which class provides runtime information?',

      options: [
        'Math',
        'Class',
        'Thread',
        'System'
      ],

      answer: 1,

      explanation:
        'Class class provides runtime information.',
    },

    {
      question:
        'Reflection is mostly used in?', 

      options: [
        'Games',
        'Frameworks',
        'Graphics',
        'Networking'
      ],

      answer: 1,

      explanation:
        'Reflection is widely used in frameworks.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Reflection API in Java?',

      answer:
        'Reflection API allows runtime inspection and manipulation of classes.',
    },

    {
      question:
        'Why is Reflection API important?',

      answer:
        'It provides runtime flexibility and is heavily used in frameworks.',
    },
  ],

  nextTopic: 'java-date-time-api',
},

{
  id: 'java-date-time-api',

  title: 'Java Date and Time API',

  slug: 'java-date-time-api',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '38 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java Date and Time API deeply including LocalDate, LocalTime, formatting, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Accenture'],

  sections: [
    {
      heading: 'Java Date and Time API',

      content: `
• Introduction to Date and Time API

• LocalDate

• LocalTime

• LocalDateTime

• Date Formatting

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Date and Time API?',

      content: `
Java Date and Time API provides modern classes for handling dates and time.
`.trim(),
    },

    {
      heading: 'Important Classes',

      content: `
Common classes:

• LocalDate
• LocalTime
• LocalDateTime
• DateTimeFormatter
`.trim(),
    },

    {
      heading: 'Why Date and Time API is Important',

      content: `
Used for:

• Time management
• Scheduling systems
• Logging systems
• Banking applications
`.trim(),
    },

    {
      heading: 'Advantages of Date and Time API',

      content: `
• Modern API design
• Immutable classes
• Better formatting support
`.trim(),
    },

    {
      heading: 'Important Points About Date and Time API',

      content: `
• Introduced in Java 8
• Immutable classes
• Thread-safe design
• Replaces old Date class limitations

Common Beginner Mistakes:

• Mixing old and new date APIs
• Using wrong formatting patterns
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Date and Time API Example',

      language: 'java',

      code: `import java.time.LocalDate;

public class Main {

    public static void main(String[] args) {

        LocalDate date =
            LocalDate.now();

        System.out.println(date);

    }

}`,

      output: 'Current system date',
    },
  ],

  mcqs: [
    {
      question:
        'Date and Time API introduced in?', 

      options: [
        'Java 5',
        'Java 6',
        'Java 8',
        'Java 11'
      ],

      answer: 2,

      explanation:
        'Date and Time API was introduced in Java 8.',
    },

    {
      question:
        'Which class stores only date?',

      options: [
        'LocalDate',
        'LocalTime',
        'Thread',
        'Math'
      ],

      answer: 0,

      explanation:
        'LocalDate stores only date.',
    },

    {
      question:
        'DateTimeFormatter is used for?', 

      options: [
        'Networking',
        'Formatting',
        'Compilation',
        'Sorting'
      ],

      answer: 1,

      explanation:
        'DateTimeFormatter formats date and time.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Java Date and Time API?',

      answer:
        'It is modern API for handling date and time operations.',
    },

    {
      question:
        'Why is LocalDate important?',

      answer:
        'LocalDate handles date without time and improves clarity.',
    },
  ],

  nextTopic: 'java-regex',
},

{
  id: 'java-regex',

  title: 'Java Regex',

  slug: 'java-regex',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '40 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java Regex deeply including pattern matching, validation, special symbols, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'Capgemini'],

  sections: [
    {
      heading: 'Java Regex',

      content: `
• Introduction to Regex

• Pattern Matching

• Special Symbols

• Validation

• Regex Methods

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Regex?',

      content: `
Regex stands for Regular Expression.

It is used for pattern matching and validation.
`.trim(),
    },

    {
      heading: 'Why Regex is Important',

      content: `
Used for:

• Email validation
• Password validation
• Search operations
• Text processing
`.trim(),
    },

    {
      heading: 'Important Regex Symbols',

      content: `
Common symbols:

• . → any character
• * → zero or more
• + → one or more
• \\d → digit
`.trim(),
    },

    {
      heading: 'Advantages of Regex',

      content: `
• Powerful validation
• Fast text matching
• Flexible searching
`.trim(),
    },

    {
      heading: 'Important Points About Regex',

      content: `
• Regex works with patterns
• Java provides Pattern and Matcher classes
• Useful for validations
• Widely used in forms

Common Beginner Mistakes:

• Incorrect escaping
• Writing complex patterns unnecessarily
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Regex Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        String text = "Java123";

        boolean result =
            text.matches("[A-Za-z0-9]+");

        System.out.println(result);

    }

}`,

      output: 'true',
    },
  ],

  mcqs: [
    {
      question:
        'Regex stands for?', 

      options: [
        'Regular Expression',
        'Random Expression',
        'Range Expression',
        'Runtime Expression'
      ],

      answer: 0,

      explanation:
        'Regex means Regular Expression.',
    },

    {
      question:
        'Regex is mainly used for?', 

      options: [
        'Networking',
        'Validation',
        'Threading',
        'Graphics'
      ],

      answer: 1,

      explanation:
        'Regex is commonly used for validation.',
    },

    {
      question:
        'Which symbol represents digit?',

      options: [
        '\\d',
        '*',
        '+',
        '?'
      ],

      answer: 0,

      explanation:
        '\\d represents digit.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Regex in Java?',

      answer:
        'Regex is pattern matching technique using regular expressions.',
    },

    {
      question:
        'Why is Regex important?',

      answer:
        'Regex helps validate and process text efficiently.',
    },
  ],

  nextTopic: 'java-scanner-class',
},

{
  id: 'java-scanner-class',

  title: 'Java Scanner class',

  slug: 'java-scanner-class',

  image:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',

  readTime: '34 min read',

  difficulty: 'Beginner',

  description:
    'Learn Java Scanner class deeply including user input, methods, input handling, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'HCL'],

  sections: [
    {
      heading: 'Java Scanner class',

      content: `
• Introduction to Scanner class

• User Input Handling

• Scanner Methods

• Numeric Input

• String Input

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Scanner class?',

      content: `
Scanner class is used to take input from user in Java.
`.trim(),
    },

    {
      heading: 'Important Scanner Methods',

      content: `
Common methods:

• nextInt()
• nextDouble()
• next()
• nextLine()
`.trim(),
    },

    {
      heading: 'Why Scanner class is Important',

      content: `
Used for:

• User interaction
• Input handling
• Console applications
`.trim(),
    },

    {
      heading: 'Advantages of Scanner class',

      content: `
• Easy input handling
• Supports multiple data types
• Beginner friendly
`.trim(),
    },

    {
      heading: 'Important Points About Scanner class',

      content: `
• Scanner belongs to java.util package
• Reads user input
• Supports multiple methods
• Widely used in beginner programs

Common Beginner Mistakes:

• Forgetting import statement
• Mixing nextLine() and nextInt()
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Scanner class Example',

      language: 'java',

      code: `import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner sc =
            new Scanner(System.in);

        int number = sc.nextInt();

        System.out.println(number);

    }

}`,

      output: 'Input: 10\nOutput: 10',
    },
  ],

  mcqs: [
    {
      question:
        'Scanner class belongs to?', 

      options: [
        'java.lang',
        'java.util',
        'java.io',
        'java.net'
      ],

      answer: 1,

      explanation:
        'Scanner class belongs to java.util package.',
    },

    {
      question:
        'Which method reads integer input?',

      options: [
        'next()',
        'nextLine()',
        'nextInt()',
        'nextChar()'
      ],

      answer: 2,

      explanation:
        'nextInt() reads integer input.',
    },

    {
      question:
        'Scanner class is mainly used for?', 

      options: [
        'Graphics',
        'Networking',
        'User input',
        'Threading'
      ],

      answer: 2,

      explanation:
        'Scanner class is used for user input.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Scanner class in Java?',

      answer:
        'Scanner class is used to read user input from console.',
    },

    {
      question:
        'Why is Scanner class beginner friendly?',

      answer:
        'Scanner provides simple methods for taking different types of input.',
    },
  ],

  nextTopic: 'java-console-class',
},

{
  id: 'java-console-class',

  title: 'Java Console class',

  slug: 'java-console-class',

  image:
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd',

  readTime: '30 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java Console class deeply including secure input handling, password reading, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'Accenture'],

  sections: [
    {
      heading: 'Java Console class',

      content: `
• Introduction to Console class

• Console Input

• Password Handling

• Secure Input

• Console Methods

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Console class?',

      content: `
Console class provides methods to read input securely from console.
`.trim(),
    },

    {
      heading: 'Important Console Methods',

      content: `
Common methods:

• readLine()
• readPassword()
• flush()
`.trim(),
    },

    {
      heading: 'Why Console class is Important',

      content: `
Used for:

• Secure password input
• Console applications
• Authentication systems
`.trim(),
    },

    {
      heading: 'Advantages of Console class',

      content: `
• Secure password handling
• Cleaner console interaction
• Easy input reading
`.trim(),
    },

    {
      heading: 'Important Points About Console class',

      content: `
• Console belongs to java.io package
• readPassword() hides password input
• Mainly used in terminal applications
• Returns null in some IDEs

Common Beginner Mistakes:

• Running Console programs inside unsupported IDE
• Forgetting null checks
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Console class Example',

      language: 'java',

      code: `import java.io.Console;

public class Main {

    public static void main(String[] args) {

        Console c = System.console();

        if(c != null) {

            String name =
                c.readLine("Enter name: ");

            System.out.println(name);

        }

    }

}`,

      output: 'Enter name: Java',
    },
  ],

  mcqs: [
    {
      question:
        'Console class belongs to?', 

      options: [
        'java.util',
        'java.net',
        'java.io',
        'java.sql'
      ],

      answer: 2,

      explanation:
        'Console class belongs to java.io package.',
    },

    {
      question:
        'Which method hides password input?',

      options: [
        'readLine()',
        'readPassword()',
        'nextInt()',
        'flush()'
      ],

      answer: 1,

      explanation:
        'readPassword() hides password characters.',
    },

    {
      question:
        'Console class is useful for?', 

      options: [
        'Graphics',
        'Networking',
        'Secure input',
        'Sorting'
      ],

      answer: 2,

      explanation:
        'Console class is useful for secure input.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Console class in Java?',

      answer:
        'Console class provides secure console input methods.',
    },

    {
      question:
        'Why is readPassword() important?',

      answer:
        'It hides password characters for security.',
    },
  ],

  nextTopic: 'java-command-line-arguments',
},
{
  id: 'java-command-line-arguments',

  title: 'Java Command Line Arguments',

  slug: 'java-command-line-arguments',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '33 min read',

  difficulty: 'Beginner',

  description:
    'Learn Java Command Line Arguments deeply including argument passing, runtime input, array handling, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Oracle'],

  sections: [
    {
      heading: 'Java Command Line Arguments',

      content: `
• Introduction to Command Line Arguments

• Runtime Input

• String Array Arguments

• Accessing Arguments

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What are Command Line Arguments?',

      content: `
Command line arguments are values passed to program during execution.
`.trim(),
    },

    {
      heading: 'How Command Line Arguments Work',

      content: `
Arguments are stored inside String[] args parameter.
`.trim(),
    },

    {
      heading: 'Why Command Line Arguments are Important',

      content: `
Used for:

• Runtime configuration
• User input
• Automation scripts
• Server applications
`.trim(),
    },

    {
      heading: 'Advantages of Command Line Arguments',

      content: `
• Dynamic input
• Flexible execution
• Useful in automation
`.trim(),
    },

    {
      heading: 'Important Points About Command Line Arguments',

      content: `
• Arguments are stored as String values
• Accessed using array indexing
• Passed during execution
• Main method receives arguments

Common Beginner Mistakes:

• Forgetting array indexing
• Assuming arguments are integers automatically
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Command Line Argument Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        System.out.println(args[0]);

    }

}`,

      output: 'Input: Java\nOutput: Java',
    },
  ],

  mcqs: [
    {
      question:
        'Command line arguments are passed during?', 

      options: [
        'Compilation',
        'Execution',
        'Installation',
        'Editing'
      ],

      answer: 1,

      explanation:
        'Arguments are passed during execution.',
    },

    {
      question:
        'Arguments are stored in?', 

      options: [
        'int[]',
        'char[]',
        'String[]',
        'double[]'
      ],

      answer: 2,

      explanation:
        'Arguments are stored inside String array.',
    },

    {
      question:
        'Which parameter stores command line arguments?',

      options: [
        'args',
        'number',
        'data',
        'value'
      ],

      answer: 0,

      explanation:
        'args parameter stores command line arguments.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What are command line arguments in Java?',

      answer:
        'Command line arguments are values passed during program execution.',
    },

    {
      question:
        'Why are command line arguments useful?',

      answer:
        'They provide dynamic runtime input without modifying code.',
    },
  ],

  nextTopic: 'java-varargs',
},

{
  id: 'java-varargs',

  title: 'Java Varargs',

  slug: 'java-varargs',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '31 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java Varargs deeply including variable arguments, syntax, flexibility, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Accenture'],

  sections: [
    {
      heading: 'Java Varargs',

      content: `
• Introduction to Varargs

• Variable Arguments

• Varargs Syntax

• Flexible Methods

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Varargs?',

      content: `
Varargs allows method to accept variable number of arguments.
`.trim(),
    },

    {
      heading: 'Varargs Syntax',

      content: `
Varargs uses three dots (...).

Example:

• int... numbers
`.trim(),
    },

    {
      heading: 'Why Varargs are Important',

      content: `
Used for:

• Flexible method calls
• Cleaner code
• Utility methods
`.trim(),
    },

    {
      heading: 'Advantages of Varargs',

      content: `
• Accepts multiple values
• Reduces method overloading
• Improves readability
`.trim(),
    },

    {
      heading: 'Important Points About Varargs',

      content: `
• Varargs introduced in Java 5
• Internally treated as array
• Only one varargs parameter allowed
• Varargs parameter must be last

Common Beginner Mistakes:

• Placing varargs before normal parameters
• Using multiple varargs in one method
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Varargs Example',

      language: 'java',

      code: `public class Main {

    static void display(
        int... numbers
    ) {

        for(int n : numbers) {

            System.out.println(n);

        }

    }

    public static void main(String[] args) {

        display(10, 20, 30);

    }

}`,

      output: '10\n20\n30',
    },
  ],

  mcqs: [
    {
      question:
        'Varargs uses which symbol?',

      options: [
        '***',
        '...',
        '///',
        '###'
      ],

      answer: 1,

      explanation:
        'Varargs uses three dots (...).',
    },

    {
      question:
        'Varargs introduced in?', 

      options: [
        'Java 1',
        'Java 3',
        'Java 5',
        'Java 8'
      ],

      answer: 2,

      explanation:
        'Varargs introduced in Java 5.',
    },

    {
      question:
        'Varargs are internally treated as?', 

      options: [
        'Thread',
        'Class',
        'Array',
        'Method'
      ],

      answer: 2,

      explanation:
        'Varargs are internally treated as arrays.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Varargs in Java?',

      answer:
        'Varargs allows methods to accept variable number of arguments.',
    },

    {
      question:
        'Why are Varargs useful?',

      answer:
        'Varargs reduce unnecessary method overloading.',
    },
  ],

  nextTopic: 'java-memory-management',
},

{
  id: 'java-memory-management',

  title: 'Java Memory Management',

  slug: 'java-memory-management',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '45 min read',

  difficulty: 'Advanced',

  description:
    'Learn Java Memory Management deeply including heap memory, stack memory, garbage collection, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'IBM'],

  sections: [
    {
      heading: 'Java Memory Management',

      content: `
• Introduction to Memory Management

• Heap Memory

• Stack Memory

• Method Area

• Garbage Collection

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Memory Management?',

      content: `
Memory management controls allocation and release of memory in Java.
`.trim(),
    },

    {
      heading: 'Types of Memory Areas',

      content: `
Important memory areas:

• Heap Memory
• Stack Memory
• Method Area
`.trim(),
    },

    {
      heading: 'Why Memory Management is Important',

      content: `
Used for:

• Efficient memory usage
• Better performance
• Avoiding memory leaks
`.trim(),
    },

    {
      heading: 'Advantages of Java Memory Management',

      content: `
• Automatic memory handling
• Garbage collection support
• Reduced manual errors
`.trim(),
    },

    {
      heading: 'Important Points About Memory Management',

      content: `
• Objects are stored in heap memory
• Local variables are stored in stack memory
• JVM manages memory automatically
• Garbage Collector removes unused objects

Common Beginner Mistakes:

• Confusing heap and stack memory
• Assuming Java has no memory issues
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Memory Management Example',

      language: 'java',

      code: `public class Main {

    int value = 10;

    public static void main(String[] args) {

        Main obj =
            new Main();

        System.out.println(
            obj.value
        );

    }

}`,

      output: '10',
    },
  ],

  mcqs: [
    {
      question:
        'Objects are stored in?', 

      options: [
        'Stack',
        'Heap',
        'CPU',
        'Register'
      ],

      answer: 1,

      explanation:
        'Objects are stored in heap memory.',
    },

    {
      question:
        'Local variables are stored in?', 

      options: [
        'Heap',
        'Stack',
        'Cache',
        'Method area'
      ],

      answer: 1,

      explanation:
        'Local variables are stored in stack memory.',
    },

    {
      question:
        'Which component removes unused objects?',

      options: [
        'Compiler',
        'Thread',
        'Garbage Collector',
        'Scanner'
      ],

      answer: 2,

      explanation:
        'Garbage Collector removes unused objects.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Java Memory Management?',

      answer:
        'Java Memory Management handles memory allocation and deallocation automatically.',
    },

    {
      question:
        'What is difference between heap and stack memory?',

      answer:
        'Heap stores objects while stack stores local variables and method calls.',
    },
  ],

  nextTopic: 'jvm-architecture-java',
},

{
  id: 'jvm-architecture-java',

  title: 'JVM Architecture',

  slug: 'jvm-architecture-java',

  image:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',

  readTime: '48 min read',

  difficulty: 'Advanced',

  description:
    'Learn JVM Architecture deeply including class loader, memory areas, execution engine, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Oracle'],

  sections: [
    {
      heading: 'JVM Architecture',

      content: `
• Introduction to JVM

• Class Loader

• JVM Memory Areas

• Execution Engine

• Garbage Collector

• Runtime Environment

• Interview Concepts
`,
    },

    {
      heading: 'What is JVM?',

      content: `
JVM stands for Java Virtual Machine.

It executes Java bytecode.
`.trim(),
    },

    {
      heading: 'Main Components of JVM',

      content: `
Important JVM components:

• Class Loader
• Method Area
• Heap Area
• Stack Area
• Execution Engine
`.trim(),
    },

    {
      heading: 'Why JVM is Important',

      content: `
Used for:

• Platform independence
• Bytecode execution
• Memory management
`.trim(),
    },

    {
      heading: 'Advantages of JVM',

      content: `
• Platform independent execution
• Automatic memory management
• Security features
`.trim(),
    },

    {
      heading: 'Important Points About JVM Architecture',

      content: `
• JVM executes bytecode
• Class Loader loads class files
• Execution Engine executes instructions
• Garbage Collector handles unused memory

Common Beginner Mistakes:

• Confusing JVM and JDK
• Assuming JVM compiles Java code
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'JVM Architecture Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        System.out.println(
            "JVM executes bytecode"
        );

    }

}`,

      output: 'JVM executes bytecode',
    },
  ],

  mcqs: [
    {
      question:
        'JVM stands for?', 

      options: [
        'Java Variable Machine',
        'Java Virtual Machine',
        'Java Visual Machine',
        'Java Verified Machine'
      ],

      answer: 1,

      explanation:
        'JVM means Java Virtual Machine.',
    },

    {
      question:
        'JVM executes?', 

      options: [
        'Source code',
        'HTML',
        'Bytecode',
        'CSS'
      ],

      answer: 2,

      explanation:
        'JVM executes bytecode.',
    },

    {
      question:
        'Which component loads class files?',

      options: [
        'Scanner',
        'Compiler',
        'Class Loader',
        'Thread'
      ],

      answer: 2,

      explanation:
        'Class Loader loads class files.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is JVM in Java?',

      answer:
        'JVM is virtual machine that executes Java bytecode.',
    },

    {
      question:
        'Why is JVM important?',

      answer:
        'JVM provides platform independence and automatic memory management.',
    },
  ],

  nextTopic: 'jdk-vs-jre-vs-jvm',
},

{
  id: 'jdk-vs-jre-vs-jvm',

  title: 'JDK vs JRE vs JVM',

  slug: 'jdk-vs-jre-vs-jvm',

  image:
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd',

  readTime: '36 min read',

  difficulty: 'Beginner',

  description:
    'Learn difference between JDK, JRE, and JVM deeply including architecture, usage, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Accenture'],

  sections: [
    {
      heading: 'JDK vs JRE vs JVM',

      content: `
• Introduction to JDK

• Introduction to JRE

• Introduction to JVM

• Architecture Difference

• Usage Difference

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is JDK?',

      content: `
JDK stands for Java Development Kit.

It provides tools required for Java development.
`.trim(),
    },

    {
      heading: 'What is JRE?',

      content: `
JRE stands for Java Runtime Environment.

It provides environment to run Java programs.
`.trim(),
    },

    {
      heading: 'What is JVM?',

      content: `
JVM stands for Java Virtual Machine.

It executes Java bytecode.
`.trim(),
    },

    {
      heading: 'Difference Between JDK, JRE, and JVM',

      content: `
JDK:

• Development tools
• Compiler included

JRE:

• Runtime environment
• JVM included

JVM:

• Executes bytecode
`.trim(),
    },

    {
      heading: 'Important Points About JDK vs JRE vs JVM',

      content: `
• JDK contains JRE
• JRE contains JVM
• JVM provides platform independence
• JDK used for development

Common Beginner Mistakes:

• Confusing JRE with JVM
• Thinking JDK is only compiler
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'JDK JRE JVM Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        System.out.println(
            "Java runs using JVM"
        );

    }

}`,

      output: 'Java runs using JVM',
    },
  ],

  mcqs: [
    {
      question:
        'Which component executes bytecode?',

      options: [
        'JDK',
        'JRE',
        'JVM',
        'Compiler'
      ],

      answer: 2,

      explanation:
        'JVM executes bytecode.',
    },

    {
      question:
        'Which component contains development tools?',

      options: [
        'JDK',
        'JVM',
        'JRE',
        'Thread'
      ],

      answer: 0,

      explanation:
        'JDK contains development tools.',
    },

    {
      question:
        'JRE mainly provides?', 

      options: [
        'Compiler',
        'Database',
        'Runtime environment',
        'Networking'
      ],

      answer: 2,

      explanation:
        'JRE provides runtime environment.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is difference between JDK, JRE, and JVM?',

      answer:
        'JDK is development kit, JRE is runtime environment, and JVM executes bytecode.',
    },

    {
      question:
        'Why is JVM platform independent?',

      answer:
        'Because JVM allows bytecode execution on different operating systems.',
    },
  ],

  nextTopic: 'java-garbage-collector-types',
},
{
  id: 'java-garbage-collector-types',

  title: 'Java Garbage Collector Types',

  slug: 'java-garbage-collector-types',

  image:
    'https://images.unsplash.com/photo-1518770660439-4636190af475',

  readTime: '40 min read',

  difficulty: 'Advanced',

  description:
    'Learn Java Garbage Collector Types deeply including Serial GC, Parallel GC, G1 GC, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'IBM'],

  sections: [
    {
      heading: 'Java Garbage Collector Types',

      content: `
• Introduction to Garbage Collection

• Serial Garbage Collector

• Parallel Garbage Collector

• G1 Garbage Collector

• Memory Cleanup

• Performance Optimization

• Interview Concepts
`,
    },

    {
      heading: 'What is Garbage Collector?',

      content: `
Garbage Collector automatically removes unused objects from memory.
`.trim(),
    },

    {
      heading: 'Types of Garbage Collectors',

      content: `
Important garbage collectors:

• Serial GC
• Parallel GC
• G1 GC
• ZGC
`.trim(),
    },

    {
      heading: 'Why Garbage Collection is Important',

      content: `
Used for:

• Automatic memory cleanup
• Better memory management
• Reducing memory leaks
`.trim(),
    },

    {
      heading: 'Advantages of Garbage Collection',

      content: `
• Automatic memory management
• Reduces manual errors
• Improves application stability
`.trim(),
    },

    {
      heading: 'Important Points About Garbage Collectors',

      content: `
• JVM manages garbage collection
• Unused objects are removed automatically
• Different collectors optimize performance
• System.gc() requests garbage collection

Common Beginner Mistakes:

• Assuming garbage collection happens instantly
• Calling System.gc() unnecessarily
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Garbage Collection Example',

      language: 'java',

      code: `public class Main {

    public static void main(String[] args) {

        Main obj =
            new Main();

        obj = null;

        System.gc();

        System.out.println(
            "Garbage Collection Requested"
        );

    }

}`,

      output: 'Garbage Collection Requested',
    },
  ],

  mcqs: [
    {
      question:
        'Garbage Collector removes?', 

      options: [
        'Methods',
        'Unused objects',
        'Threads',
        'Packages'
      ],

      answer: 1,

      explanation:
        'Garbage Collector removes unused objects.',
    },

    {
      question:
        'Which method requests garbage collection?',

      options: [
        'Math.gc()',
        'Thread.gc()',
        'System.gc()',
        'Scanner.gc()'
      ],

      answer: 2,

      explanation:
        'System.gc() requests garbage collection.',
    },

    {
      question:
        'Garbage Collection improves?', 

      options: [
        'Graphics',
        'Memory management',
        'Networking',
        'Compilation'
      ],

      answer: 1,

      explanation:
        'Garbage Collection improves memory management.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Garbage Collection in Java?',

      answer:
        'Garbage Collection automatically removes unused objects from memory.',
    },

    {
      question:
        'Why are different GC types important?',

      answer:
        'Different GC types optimize performance for different applications.',
    },
  ],

  nextTopic: 'java-immutable-objects',
},

{
  id: 'java-immutable-objects',

  title: 'Java Immutable Objects',

  slug: 'java-immutable-objects',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '34 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java Immutable Objects deeply including immutability rules, benefits, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Oracle'],

  sections: [
    {
      heading: 'Java Immutable Objects',

      content: `
• Introduction to Immutable Objects

• Rules of Immutability

• Immutable Class Design

• Real-world Usage

• Security Benefits

• Interview Concepts
`,
    },

    {
      heading: 'What are Immutable Objects?',

      content: `
Immutable objects cannot be modified after creation.
`.trim(),
    },

    {
      heading: 'Rules to Make Immutable Class',

      content: `
Important rules:

• Declare class final
• Make fields private
• Do not provide setter methods
`.trim(),
    },

    {
      heading: 'Why Immutable Objects are Important',

      content: `
Used for:

• Security
• Thread safety
• Stable object design
`.trim(),
    },

    {
      heading: 'Advantages of Immutable Objects',

      content: `
• Thread-safe
• Secure design
• Easy to maintain
`.trim(),
    },

    {
      heading: 'Important Points About Immutable Objects',

      content: `
• String class is immutable
• Immutable objects cannot change state
• Common in multithreading
• Improves reliability

Common Beginner Mistakes:

• Providing setter methods accidentally
• Forgetting deep copy for mutable fields
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Immutable Object Example',

      language: 'java',

      code: `final class Student {

    private final int id;

    Student(int id) {

        this.id = id;

    }

    public int getId() {

        return id;

    }

}

public class Main {

    public static void main(String[] args) {

        Student s =
            new Student(101);

        System.out.println(
            s.getId()
        );

    }

}`,

      output: '101',
    },
  ],

  mcqs: [
    {
      question:
        'Immutable object can be?', 

      options: [
        'Modified',
        'Deleted',
        'Changed',
        'Not modified'
      ],

      answer: 3,

      explanation:
        'Immutable objects cannot be modified.',
    },

    {
      question:
        'Which class is immutable in Java?',

      options: [
        'Scanner',
        'Thread',
        'String',
        'Math'
      ],

      answer: 2,

      explanation:
        'String is immutable in Java.',
    },

    {
      question:
        'Immutable objects improve?', 

      options: [
        'Networking',
        'Security',
        'Graphics',
        'Compilation'
      ],

      answer: 1,

      explanation:
        'Immutable objects improve security and thread safety.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What are immutable objects in Java?',

      answer:
        'Immutable objects cannot be modified after creation.',
    },

    {
      question:
        'Why are immutable objects important?',

      answer:
        'They improve thread safety, security, and reliability.',
    },
  ],

  nextTopic: 'java-cloneable-interface',
},

{
  id: 'java-cloneable-interface',

  title: 'Java Cloneable Interface',

  slug: 'java-cloneable-interface',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '37 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java Cloneable Interface deeply including object cloning, clone() method, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Oracle'],

  sections: [
    {
      heading: 'Java Cloneable Interface',

      content: `
• Introduction to Cloneable Interface

• Object Cloning

• clone() Method

• Shallow Copy

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Cloneable Interface?',

      content: `
Cloneable interface allows object cloning in Java.
`.trim(),
    },

    {
      heading: 'Why Cloneable Interface is Important',

      content: `
Used for:

• Object duplication
• Performance optimization
• Backup objects
`.trim(),
    },

    {
      heading: 'How Cloning Works',

      content: `
Important steps:

1. Implement Cloneable interface
2. Override clone() method
3. Use object cloning
`.trim(),
    },

    {
      heading: 'Advantages of Cloning',

      content: `
• Faster object copying
• Useful in large applications
• Reduces manual copying
`.trim(),
    },

    {
      heading: 'Important Points About Cloneable Interface',

      content: `
• Cloneable is marker interface
• clone() method belongs to Object class
• Supports shallow copying by default
• Deep copy requires custom logic

Common Beginner Mistakes:

• Forgetting Cloneable implementation
• Confusing shallow and deep copy
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Cloneable Interface Example',

      language: 'java',

      code: `class Student
    implements Cloneable {

    int id = 101;

    public Object clone()
        throws CloneNotSupportedException {

        return super.clone();

    }

}

public class Main {

    public static void main(String[] args)
        throws Exception {

        Student s1 =
            new Student();

        Student s2 =
            (Student)s1.clone();

        System.out.println(s2.id);

    }

}`,

      output: '101',
    },
  ],

  mcqs: [
    {
      question:
        'Cloneable is which type of interface?',

      options: [
        'Functional',
        'Marker',
        'Nested',
        'Abstract'
      ],

      answer: 1,

      explanation:
        'Cloneable is marker interface.',
    },

    {
      question:
        'Which method performs cloning?',

      options: [
        'copy()',
        'duplicate()',
        'clone()',
        'create()'
      ],

      answer: 2,

      explanation:
        'clone() method performs cloning.',
    },

    {
      question:
        'clone() method belongs to?', 

      options: [
        'Math class',
        'Thread class',
        'Object class',
        'Scanner class'
      ],

      answer: 2,

      explanation:
        'clone() belongs to Object class.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Cloneable interface in Java?',

      answer:
        'Cloneable interface allows object cloning in Java.',
    },

    {
      question:
        'What is difference between shallow copy and deep copy?',

      answer:
        'Shallow copy copies references while deep copy creates independent copies.',
    },
  ],

  nextTopic: 'object-cloning-java',
},

{
  id: 'object-cloning-java',

  title: 'Object Cloning in Java',

  slug: 'object-cloning-java',

  image:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',

  readTime: '39 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Object Cloning in Java deeply including shallow copy, deep copy, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'Accenture'],

  sections: [
    {
      heading: 'Object Cloning in Java',

      content: `
• Introduction to Object Cloning

• clone() Method

• Shallow Copy

• Deep Copy

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Object Cloning?',

      content: `
Object cloning creates duplicate copy of existing object.
`.trim(),
    },

    {
      heading: 'Types of Cloning',

      content: `
Important cloning types:

• Shallow Copy
• Deep Copy
`.trim(),
    },

    {
      heading: 'Why Object Cloning is Important',

      content: `
Used for:

• Object duplication
• Backup creation
• Faster copying
`.trim(),
    },

    {
      heading: 'Advantages of Object Cloning',

      content: `
• Improves performance
• Reduces manual copying
• Useful in complex systems
`.trim(),
    },

    {
      heading: 'Important Points About Object Cloning',

      content: `
• clone() creates object copy
• Shallow copy shares references
• Deep copy creates independent objects
• Cloneable interface required

Common Beginner Mistakes:

• Forgetting Cloneable interface
• Confusing shallow and deep copy
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Object Cloning Example',

      language: 'java',

      code: `class Employee
    implements Cloneable {

    int id = 500;

    public Object clone()
        throws CloneNotSupportedException {

        return super.clone();

    }

}

public class Main {

    public static void main(String[] args)
        throws Exception {

        Employee e1 =
            new Employee();

        Employee e2 =
            (Employee)e1.clone();

        System.out.println(e2.id);

    }

}`,

      output: '500',
    },
  ],

  mcqs: [
    {
      question:
        'Object cloning creates?', 

      options: [
        'Method',
        'Duplicate object',
        'Package',
        'Thread'
      ],

      answer: 1,

      explanation:
        'Object cloning creates duplicate object.',
    },

    {
      question:
        'Deep copy creates?', 

      options: [
        'Shared references',
        'Independent objects',
        'Methods',
        'Threads'
      ],

      answer: 1,

      explanation:
        'Deep copy creates independent objects.',
    },

    {
      question:
        'Shallow copy shares?', 

      options: [
        'Methods',
        'Variables',
        'References',
        'Packages'
      ],

      answer: 2,

      explanation:
        'Shallow copy shares references.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is object cloning in Java?',

      answer:
        'Object cloning creates duplicate copy of existing object.',
    },

    {
      question:
        'Why is deep copy safer than shallow copy?',

      answer:
        'Deep copy creates fully independent objects.',
    },
  ],

  nextTopic: 'shallow-copy-vs-deep-copy',
},

{
  id: 'shallow-copy-vs-deep-copy',

  title: 'Shallow Copy vs Deep Copy',

  slug: 'shallow-copy-vs-deep-copy',

  image:
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd',

  readTime: '35 min read',

  difficulty: 'Advanced',

  description:
    'Learn difference between Shallow Copy and Deep Copy deeply including references, cloning behavior, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Capgemini'],

  sections: [
    {
      heading: 'Shallow Copy vs Deep Copy',

      content: `
• Introduction to Shallow Copy

• Introduction to Deep Copy

• Reference Sharing

• Independent Objects

• Cloning Behavior

• Interview Concepts
`,
    },

    {
      heading: 'What is Shallow Copy?',

      content: `
Shallow copy copies object references instead of creating new referenced objects.
`.trim(),
    },

    {
      heading: 'What is Deep Copy?',

      content: `
Deep copy creates completely independent copy including referenced objects.
`.trim(),
    },

    {
      heading: 'Why Deep Copy is Important',

      content: `
Used for:

• Independent object modification
• Better safety
• Avoiding shared data problems
`.trim(),
    },

    {
      heading: 'Difference Between Shallow and Deep Copy',

      content: `
Shallow Copy:

• Shares references
• Faster
• Less memory usage

Deep Copy:

• Independent objects
• Safer
• More memory usage
`.trim(),
    },

    {
      heading: 'Important Points About Shallow and Deep Copy',

      content: `
• Shallow copy shares internal references
• Deep copy creates independent data
• Deep copy is safer in multithreading
• Cloneable supports shallow copy by default

Common Beginner Mistakes:

• Assuming clone() creates deep copy
• Ignoring reference sharing issues
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Shallow Copy Example',

      language: 'java',

      code: `class Address {

    String city = "Delhi";

}

class Student {

    Address address =
        new Address();

}

public class Main {

    public static void main(String[] args) {

        Student s1 =
            new Student();

        Student s2 = s1;

        System.out.println(
            s2.address.city
        );

    }

}`,

      output: 'Delhi',
    },
  ],

  mcqs: [
    {
      question:
        'Shallow copy shares?', 

      options: [
        'Methods',
        'References',
        'Threads',
        'Packages'
      ],

      answer: 1,

      explanation:
        'Shallow copy shares references.',
    },

    {
      question:
        'Deep copy creates?', 

      options: [
        'Shared objects',
        'Independent objects',
        'Packages',
        'Methods'
      ],

      answer: 1,

      explanation:
        'Deep copy creates independent objects.',
    },

    {
      question:
        'Which copy is safer?',

      options: [
        'Shallow copy',
        'Deep copy',
        'Both same',
        'None'
      ],

      answer: 1,

      explanation:
        'Deep copy is safer because objects are independent.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is difference between shallow copy and deep copy?',

      answer:
        'Shallow copy shares references while deep copy creates independent copies.',
    },

    {
      question:
        'Why is deep copy important?',

      answer:
        'Deep copy prevents shared reference issues and improves safety.',
    },
  ],

  nextTopic: 'java-lambda-expressions',
},
{
  id: 'java-lambda-expressions',

  title: 'Java Lambda Expressions',

  slug: 'java-lambda-expressions',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '44 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java Lambda Expressions deeply including functional programming, syntax, advantages, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'IBM'],

  sections: [
    {
      heading: 'Java Lambda Expressions',

      content: `
• Introduction to Lambda Expressions

• Functional Programming

• Lambda Syntax

• Simplified Code

• Functional Interfaces

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What are Lambda Expressions?',

      content: `
Lambda Expressions provide shorter way to write anonymous functions in Java.
`.trim(),
    },

    {
      heading: 'Lambda Expression Syntax',

      content: `
Basic syntax:

(parameters) -> expression
`.trim(),
    },

    {
      heading: 'Why Lambda Expressions are Important',

      content: `
Used for:

• Cleaner code
• Functional programming
• Collection operations
• Stream API
`.trim(),
    },

    {
      heading: 'Advantages of Lambda Expressions',

      content: `
• Reduces boilerplate code
• Improves readability
• Supports functional programming
`.trim(),
    },

    {
      heading: 'Important Points About Lambda Expressions',

      content: `
• Introduced in Java 8
• Works with functional interfaces
• Removes unnecessary anonymous classes
• Widely used with Stream API

Common Beginner Mistakes:

• Using lambda without functional interface
• Confusing lambda with normal methods
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Lambda Expression Example',

      language: 'java',

      code: `interface Message {

    void show();

}

public class Main {

    public static void main(String[] args) {

        Message msg =
            () -> System.out.println(
                "Lambda Expression"
            );

        msg.show();

    }

}`,

      output: 'Lambda Expression',
    },
  ],

  mcqs: [
    {
      question:
        'Lambda Expressions introduced in?', 

      options: [
        'Java 5',
        'Java 6',
        'Java 8',
        'Java 11'
      ],

      answer: 2,

      explanation:
        'Lambda Expressions were introduced in Java 8.',
    },

    {
      question:
        'Lambda Expressions mainly support?', 

      options: [
        'Graphics',
        'Networking',
        'Functional programming',
        'Database'
      ],

      answer: 2,

      explanation:
        'Lambda Expressions support functional programming.',
    },

    {
      question:
        'Which symbol is used in lambda expressions?',

      options: [
        '=>',
        '->',
        '==',
        '&&'
      ],

      answer: 1,

      explanation:
        'Lambda expressions use -> symbol.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What are Lambda Expressions in Java?',

      answer:
        'Lambda Expressions provide shorter syntax for anonymous functions.',
    },

    {
      question:
        'Why are Lambda Expressions important?',

      answer:
        'They reduce boilerplate code and support functional programming.',
    },
  ],

  nextTopic: 'functional-interface-java',
},

{
  id: 'functional-interface-java',

  title: 'Functional Interface in Java',

  slug: 'functional-interface-java',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '36 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Functional Interface in Java deeply including single abstract method, lambda support, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Oracle'],

  sections: [
    {
      heading: 'Functional Interface in Java',

      content: `
• Introduction to Functional Interface

• Single Abstract Method

• Lambda Support

• @FunctionalInterface Annotation

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Functional Interface?',

      content: `
Functional Interface contains only one abstract method.
`.trim(),
    },

    {
      heading: 'Examples of Functional Interfaces',

      content: `
Important examples:

• Runnable
• Callable
• Comparator
`.trim(),
    },

    {
      heading: 'Why Functional Interfaces are Important',

      content: `
Used for:

• Lambda expressions
• Functional programming
• Cleaner code
`.trim(),
    },

    {
      heading: 'Advantages of Functional Interfaces',

      content: `
• Supports lambda expressions
• Reduces code complexity
• Improves readability
`.trim(),
    },

    {
      heading: 'Important Points About Functional Interfaces',

      content: `
• Contains one abstract method
• Can have multiple default methods
• Supports lambda expressions
• @FunctionalInterface is optional

Common Beginner Mistakes:

• Adding multiple abstract methods
• Confusing normal interface with functional interface
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Functional Interface Example',

      language: 'java',

      code: `@FunctionalInterface

interface Square {

    int calculate(int x);

}

public class Main {

    public static void main(String[] args) {

        Square s =
            (x) -> x * x;

        System.out.println(
            s.calculate(5)
        );

    }

}`,

      output: '25',
    },
  ],

  mcqs: [
    {
      question:
        'Functional Interface contains how many abstract methods?',

      options: [
        'Zero',
        'One',
        'Two',
        'Unlimited'
      ],

      answer: 1,

      explanation:
        'Functional Interface contains one abstract method.',
    },

    {
      question:
        'Which annotation is used for functional interface?',

      options: [
        '@Override',
        '@FunctionalInterface',
        '@Deprecated',
        '@Inherited'
      ],

      answer: 1,

      explanation:
        '@FunctionalInterface annotation is used.',
    },

    {
      question:
        'Functional Interfaces are mainly used with?', 

      options: [
        'Threads',
        'Packages',
        'Lambda Expressions',
        'Applets'
      ],

      answer: 2,

      explanation:
        'Functional Interfaces are used with Lambda Expressions.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Functional Interface in Java?',

      answer:
        'Functional Interface contains exactly one abstract method.',
    },

    {
      question:
        'Why are Functional Interfaces important?',

      answer:
        'They support lambda expressions and functional programming.',
    },
  ],

  nextTopic: 'predicate-interface-java',
},

{
  id: 'predicate-interface-java',

  title: 'Predicate Interface in Java',

  slug: 'predicate-interface-java',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '35 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Predicate Interface in Java deeply including boolean testing, lambda usage, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Oracle'],

  sections: [
    {
      heading: 'Predicate Interface in Java',

      content: `
• Introduction to Predicate Interface

• Boolean Testing

• Lambda Expressions

• test() Method

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Predicate Interface?',

      content: `
Predicate Interface performs boolean condition testing.
`.trim(),
    },

    {
      heading: 'Important Predicate Method',

      content: `
Main method:

• test()
`.trim(),
    },

    {
      heading: 'Why Predicate Interface is Important',

      content: `
Used for:

• Filtering data
• Conditional checks
• Stream API operations
`.trim(),
    },

    {
      heading: 'Advantages of Predicate Interface',

      content: `
• Cleaner condition handling
• Reusable logic
• Better readability
`.trim(),
    },

    {
      heading: 'Important Points About Predicate Interface',

      content: `
• Belongs to java.util.function package
• Returns boolean value
• Commonly used in Stream API
• Supports lambda expressions

Common Beginner Mistakes:

• Forgetting boolean return
• Confusing Predicate with Function interface
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Predicate Interface Example',

      language: 'java',

      code: `import java.util.function.Predicate;

public class Main {

    public static void main(String[] args) {

        Predicate<Integer> p =
            n -> n > 10;

        System.out.println(
            p.test(15)
        );

    }

}`,

      output: 'true',
    },
  ],

  mcqs: [
    {
      question:
        'Predicate Interface returns?', 

      options: [
        'String',
        'Integer',
        'Boolean',
        'Double'
      ],

      answer: 2,

      explanation:
        'Predicate returns boolean value.',
    },

    {
      question:
        'Which method is used in Predicate?',

      options: [
        'run()',
        'test()',
        'show()',
        'execute()'
      ],

      answer: 1,

      explanation:
        'Predicate uses test() method.',
    },

    {
      question:
        'Predicate belongs to which package?',

      options: [
        'java.io',
        'java.lang',
        'java.util.function',
        'java.sql'
      ],

      answer: 2,

      explanation:
        'Predicate belongs to java.util.function package.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Predicate Interface in Java?',

      answer:
        'Predicate Interface performs boolean condition testing.',
    },

    {
      question:
        'Why is Predicate useful in Stream API?',

      answer:
        'Predicate helps filter data using conditions.',
    },
  ],

  nextTopic: 'consumer-interface-java',
},

{
  id: 'consumer-interface-java',

  title: 'Consumer Interface in Java',

  slug: 'consumer-interface-java',

  image:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',

  readTime: '34 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Consumer Interface in Java deeply including data consumption, accept() method, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'Accenture'],

  sections: [
    {
      heading: 'Consumer Interface in Java',

      content: `
• Introduction to Consumer Interface

• Data Consumption

• accept() Method

• Lambda Expressions

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Consumer Interface?',

      content: `
Consumer Interface accepts input and performs operation without returning value.
`.trim(),
    },

    {
      heading: 'Important Consumer Method',

      content: `
Main method:

• accept()
`.trim(),
    },

    {
      heading: 'Why Consumer Interface is Important',

      content: `
Used for:

• Data processing
• Printing operations
• Stream API actions
`.trim(),
    },

    {
      heading: 'Advantages of Consumer Interface',

      content: `
• Cleaner processing logic
• Supports lambda expressions
• Better readability
`.trim(),
    },

    {
      heading: 'Important Points About Consumer Interface',

      content: `
• Belongs to java.util.function package
• Does not return value
• Commonly used with forEach()
• Supports lambda expressions

Common Beginner Mistakes:

• Expecting return value
• Confusing Consumer with Predicate
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Consumer Interface Example',

      language: 'java',

      code: `import java.util.function.Consumer;

public class Main {

    public static void main(String[] args) {

        Consumer<String> c =
            name -> System.out.println(name);

        c.accept("Java");

    }

}`,

      output: 'Java',
    },
  ],

  mcqs: [
    {
      question:
        'Consumer Interface returns?', 

      options: [
        'Boolean',
        'Integer',
        'Value',
        'Nothing'
      ],

      answer: 3,

      explanation:
        'Consumer does not return any value.',
    },

    {
      question:
        'Which method is used in Consumer?',

      options: [
        'accept()',
        'test()',
        'show()',
        'run()'
      ],

      answer: 0,

      explanation:
        'Consumer uses accept() method.',
    },

    {
      question:
        'Consumer belongs to which package?',

      options: [
        'java.io',
        'java.net',
        'java.util.function',
        'java.sql'
      ],

      answer: 2,

      explanation:
        'Consumer belongs to java.util.function package.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Consumer Interface in Java?',

      answer:
        'Consumer Interface accepts input and performs operation without returning value.',
    },

    {
      question:
        'Why is Consumer Interface useful?',

      answer:
        'It simplifies processing operations using lambda expressions.',
    },
  ],

  nextTopic: 'supplier-interface-java',
},

{
  id: 'supplier-interface-java',

  title: 'Supplier Interface in Java',

  slug: 'supplier-interface-java',

  image:
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd',

  readTime: '33 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Supplier Interface in Java deeply including value generation, get() method, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Capgemini'],

  sections: [
    {
      heading: 'Supplier Interface in Java',

      content: `
• Introduction to Supplier Interface

• Value Generation

• get() Method

• Lambda Expressions

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What is Supplier Interface?',

      content: `
Supplier Interface supplies data without taking input.
`.trim(),
    },

    {
      heading: 'Important Supplier Method',

      content: `
Main method:

• get()
`.trim(),
    },

    {
      heading: 'Why Supplier Interface is Important',

      content: `
Used for:

• Object creation
• Lazy loading
• Data generation
`.trim(),
    },

    {
      heading: 'Advantages of Supplier Interface',

      content: `
• Cleaner object generation
• Supports lazy evaluation
• Better readability
`.trim(),
    },

    {
      heading: 'Important Points About Supplier Interface',

      content: `
• Belongs to java.util.function package
• Takes no input
• Returns generated value
• Common in Stream API

Common Beginner Mistakes:

• Passing unnecessary parameters
• Confusing Supplier with Consumer
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Supplier Interface Example',

      language: 'java',

      code: `import java.util.function.Supplier;

public class Main {

    public static void main(String[] args) {

        Supplier<String> s =
            () -> "Java";

        System.out.println(
            s.get()
        );

    }

}`,

      output: 'Java',
    },
  ],

  mcqs: [
    {
      question:
        'Supplier Interface takes?', 

      options: [
        'One input',
        'Two inputs',
        'No input',
        'Array input'
      ],

      answer: 2,

      explanation:
        'Supplier does not take input.',
    },

    {
      question:
        'Which method is used in Supplier?',

      options: [
        'test()',
        'accept()',
        'get()',
        'run()'
      ],

      answer: 2,

      explanation:
        'Supplier uses get() method.',
    },

    {
      question:
        'Supplier Interface belongs to?', 

      options: [
        'java.io',
        'java.util.function',
        'java.sql',
        'java.net'
      ],

      answer: 1,

      explanation:
        'Supplier belongs to java.util.function package.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Supplier Interface in Java?',

      answer:
        'Supplier Interface generates and returns data without taking input.',
    },

    {
      question:
        'Why is Supplier Interface useful?',

      answer:
        'It simplifies object creation and lazy data generation.',
    },
  ],

  nextTopic: 'function-interface-java',
},
{
  id: 'function-interface-java',

  title: 'Function Interface in Java',

  slug: 'function-interface-java',

  image:
    'https://images.unsplash.com/photo-1518770660439-4636190af475',

  readTime: '37 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Function Interface in Java deeply including apply() method, data transformation, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'IBM'],

  sections: [
    {
      heading: 'Function Interface in Java',

      content: `
• Introduction to Function Interface

• Data Transformation

• apply() Method

• Lambda Expressions

• Functional Programming

• Interview Concepts
`,
    },

    {
      heading: 'What is Function Interface?',

      content: `
Function Interface accepts input and returns processed output.
`.trim(),
    },

    {
      heading: 'Important Function Method',

      content: `
Main method:

• apply()
`.trim(),
    },

    {
      heading: 'Why Function Interface is Important',

      content: `
Used for:

• Data transformation
• Stream API operations
• Functional programming
`.trim(),
    },

    {
      heading: 'Advantages of Function Interface',

      content: `
• Cleaner logic
• Reusable transformations
• Better readability
`.trim(),
    },

    {
      heading: 'Important Points About Function Interface',

      content: `
• Belongs to java.util.function package
• Takes input and returns output
• Commonly used with Stream API
• Supports lambda expressions

Common Beginner Mistakes:

• Forgetting return value
• Confusing Function with Predicate
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Function Interface Example',

      language: 'java',

      code: `import java.util.function.Function;

public class Main {

    public static void main(String[] args) {

        Function<Integer, Integer> f =
            n -> n * n;

        System.out.println(
            f.apply(5)
        );

    }

}`,

      output: '25',
    },
  ],

  mcqs: [
    {
      question:
        'Function Interface returns?', 

      options: [
        'Nothing',
        'Processed output',
        'Boolean only',
        'Thread'
      ],

      answer: 1,

      explanation:
        'Function Interface returns processed output.',
    },

    {
      question:
        'Which method is used in Function Interface?',

      options: [
        'accept()',
        'test()',
        'apply()',
        'run()'
      ],

      answer: 2,

      explanation:
        'Function Interface uses apply() method.',
    },

    {
      question:
        'Function Interface belongs to which package?',

      options: [
        'java.io',
        'java.net',
        'java.sql',
        'java.util.function'
      ],

      answer: 3,

      explanation:
        'Function Interface belongs to java.util.function package.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Function Interface in Java?',

      answer:
        'Function Interface accepts input and returns processed output.',
    },

    {
      question:
        'Why is Function Interface important?',

      answer:
        'It simplifies data transformation and functional programming.',
    },
  ],

  nextTopic: 'java-stream-api',
},

{
  id: 'java-stream-api',

  title: 'Java Stream API',

  slug: 'java-stream-api',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '52 min read',

  difficulty: 'Advanced',

  description:
    'Learn Java Stream API deeply including filtering, mapping, reduction, pipelines, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Oracle'],

  sections: [
    {
      heading: 'Java Stream API',

      content: `
• Introduction to Stream API

• Stream Pipeline

• filter() Method

• map() Method

• reduce() Method

• collect() Method

• Functional Programming

• Interview Concepts
`,
    },

    {
      heading: 'What is Stream API?',

      content: `
Stream API processes collections using functional programming style.
`.trim(),
    },

    {
      heading: 'Common Stream Operations',

      content: `
Important operations:

• filter()
• map()
• sorted()
• reduce()
• collect()
`.trim(),
    },

    {
      heading: 'Why Stream API is Important',

      content: `
Used for:

• Cleaner collection processing
• Faster development
• Functional programming
• Parallel processing
`.trim(),
    },

    {
      heading: 'Advantages of Stream API',

      content: `
• Reduces boilerplate code
• Improves readability
• Supports parallel execution
`.trim(),
    },

    {
      heading: 'Important Points About Stream API',

      content: `
• Introduced in Java 8
• Does not modify original collection
• Supports lazy processing
• Uses functional interfaces

Common Beginner Mistakes:

• Reusing consumed streams
• Confusing map() and filter()
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Stream API Example',

      language: 'java',

      code: `import java.util.*;

public class Main {

    public static void main(String[] args) {

        List<Integer> numbers =
            Arrays.asList(
                10, 15, 20, 25
            );

        numbers.stream()
            .filter(n -> n > 15)
            .forEach(System.out::println);

    }

}`,

      output: '20\n25',
    },
  ],

  mcqs: [
    {
      question:
        'Stream API introduced in?', 

      options: [
        'Java 5',
        'Java 6',
        'Java 8',
        'Java 11'
      ],

      answer: 2,

      explanation:
        'Stream API introduced in Java 8.',
    },

    {
      question:
        'Which method filters data?',

      options: [
        'map()',
        'reduce()',
        'filter()',
        'sort()'
      ],

      answer: 2,

      explanation:
        'filter() method filters data.',
    },

    {
      question:
        'Stream API mainly supports?', 

      options: [
        'Networking',
        'Graphics',
        'Functional programming',
        'Applets'
      ],

      answer: 2,

      explanation:
        'Stream API supports functional programming.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Stream API in Java?',

      answer:
        'Stream API processes collections using functional programming style.',
    },

    {
      question:
        'Why is Stream API important?',

      answer:
        'It simplifies collection processing and improves readability.',
    },
  ],

  nextTopic: 'stream-filter-method-java',
},

{
  id: 'stream-filter-method-java',

  title: 'Stream filter() Method in Java',

  slug: 'stream-filter-method-java',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '34 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Stream filter() Method in Java deeply including conditional filtering, lambda usage, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Oracle'],

  sections: [
    {
      heading: 'Stream filter() Method in Java',

      content: `
• Introduction to filter() Method

• Conditional Filtering

• Predicate Usage

• Lambda Expressions

• Stream Processing

• Interview Concepts
`,
    },

    {
      heading: 'What is filter() Method?',

      content: `
filter() method selects elements based on condition.
`.trim(),
    },

    {
      heading: 'Why filter() Method is Important',

      content: `
Used for:

• Data filtering
• Conditional processing
• Stream pipelines
`.trim(),
    },

    {
      heading: 'Advantages of filter() Method',

      content: `
• Cleaner filtering logic
• Improves readability
• Reduces loops
`.trim(),
    },

    {
      heading: 'How filter() Works',

      content: `
1. Stream receives collection
2. Predicate condition applied
3. Matching elements returned
`.trim(),
    },

    {
      heading: 'Important Points About filter() Method',

      content: `
• Uses Predicate interface
• Returns filtered stream
• Original collection unchanged
• Commonly used with forEach()

Common Beginner Mistakes:

• Forgetting terminal operation
• Using invalid predicate conditions
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'filter() Method Example',

      language: 'java',

      code: `import java.util.*;

public class Main {

    public static void main(String[] args) {

        List<Integer> list =
            Arrays.asList(
                5, 10, 15, 20
            );

        list.stream()
            .filter(n -> n >= 10)
            .forEach(System.out::println);

    }

}`,

      output: '10\n15\n20',
    },
  ],

  mcqs: [
    {
      question:
        'filter() method uses which interface?',

      options: [
        'Consumer',
        'Supplier',
        'Predicate',
        'Runnable'
      ],

      answer: 2,

      explanation:
        'filter() uses Predicate interface.',
    },

    {
      question:
        'filter() method returns?', 

      options: [
        'Filtered stream',
        'Integer',
        'Boolean',
        'Thread'
      ],

      answer: 0,

      explanation:
        'filter() returns filtered stream.',
    },

    {
      question:
        'filter() mainly performs?', 

      options: [
        'Sorting',
        'Filtering',
        'Compilation',
        'Networking'
      ],

      answer: 1,

      explanation:
        'filter() performs filtering.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is filter() method in Stream API?',

      answer:
        'filter() selects elements based on condition.',
    },

    {
      question:
        'Why is filter() method useful?',

      answer:
        'It simplifies conditional filtering in collections.',
    },
  ],

  nextTopic: 'stream-map-method-java',
},

{
  id: 'stream-map-method-java',

  title: 'Stream map() Method in Java',

  slug: 'stream-map-method-java',

  image:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',

  readTime: '36 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Stream map() Method in Java deeply including transformation logic, lambda usage, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'Accenture'],

  sections: [
    {
      heading: 'Stream map() Method in Java',

      content: `
• Introduction to map() Method

• Data Transformation

• Lambda Expressions

• Functional Programming

• Stream Processing

• Interview Concepts
`,
    },

    {
      heading: 'What is map() Method?',

      content: `
map() method transforms stream elements into new form.
`.trim(),
    },

    {
      heading: 'Why map() Method is Important',

      content: `
Used for:

• Data transformation
• Collection processing
• Functional programming
`.trim(),
    },

    {
      heading: 'Advantages of map() Method',

      content: `
• Cleaner transformation logic
• Improves readability
• Reduces loops
`.trim(),
    },

    {
      heading: 'How map() Works',

      content: `
1. Stream receives collection
2. Transformation applied
3. New stream returned
`.trim(),
    },

    {
      heading: 'Important Points About map() Method',

      content: `
• Uses Function interface
• Returns transformed stream
• Original collection unchanged
• Commonly used with collect()

Common Beginner Mistakes:

• Confusing map() with filter()
• Forgetting terminal operations
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'map() Method Example',

      language: 'java',

      code: `import java.util.*;

public class Main {

    public static void main(String[] args) {

        List<Integer> list =
            Arrays.asList(
                1, 2, 3, 4
            );

        list.stream()
            .map(n -> n * n)
            .forEach(System.out::println);

    }

}`,

      output: '1\n4\n9\n16',
    },
  ],

  mcqs: [
    {
      question:
        'map() method uses which interface?',

      options: [
        'Predicate',
        'Function',
        'Runnable',
        'Callable'
      ],

      answer: 1,

      explanation:
        'map() uses Function interface.',
    },

    {
      question:
        'map() method mainly performs?', 

      options: [
        'Filtering',
        'Sorting',
        'Transformation',
        'Compilation'
      ],

      answer: 2,

      explanation:
        'map() performs transformation.',
    },

    {
      question:
        'map() method returns?', 

      options: [
        'Boolean',
        'Thread',
        'Transformed stream',
        'Package'
      ],

      answer: 2,

      explanation:
        'map() returns transformed stream.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is map() method in Stream API?',

      answer:
        'map() transforms stream elements into new form.',
    },

    {
      question:
        'Why is map() method important?',

      answer:
        'It simplifies data transformation in collections.',
    },
  ],

  nextTopic: 'stream-reduce-method-java',
},

{
  id: 'stream-reduce-method-java',

  title: 'Stream reduce() Method in Java',

  slug: 'stream-reduce-method-java',

  image:
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd',

  readTime: '38 min read',

  difficulty: 'Advanced',

  description:
    'Learn Stream reduce() Method in Java deeply including reduction operations, aggregation logic, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Capgemini'],

  sections: [
    {
      heading: 'Stream reduce() Method in Java',

      content: `
• Introduction to reduce() Method

• Aggregation Operations

• Reduction Logic

• Functional Programming

• Stream Processing

• Interview Concepts
`,
    },

    {
      heading: 'What is reduce() Method?',

      content: `
reduce() method combines stream elements into single result.
`.trim(),
    },

    {
      heading: 'Why reduce() Method is Important',

      content: `
Used for:

• Sum calculation
• Product calculation
• Aggregation operations
`.trim(),
    },

    {
      heading: 'Advantages of reduce() Method',

      content: `
• Cleaner aggregation logic
• Improves readability
• Reduces manual loops
`.trim(),
    },

    {
      heading: 'How reduce() Works',

      content: `
1. Stream elements processed
2. Reduction logic applied
3. Single result returned
`.trim(),
    },

    {
      heading: 'Important Points About reduce() Method',

      content: `
• Commonly used for aggregation
• Uses BinaryOperator logic
• Returns single result
• Useful in Stream API pipelines

Common Beginner Mistakes:

• Using incorrect reduction logic
• Forgetting identity value
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'reduce() Method Example',

      language: 'java',

      code: `import java.util.*;

public class Main {

    public static void main(String[] args) {

        List<Integer> list =
            Arrays.asList(
                10, 20, 30
            );

        int result =
            list.stream()
                .reduce(
                    0,
                    (a, b) -> a + b
                );

        System.out.println(result);

    }

}`,

      output: '60',
    },
  ],

  mcqs: [
    {
      question:
        'reduce() method mainly performs?', 

      options: [
        'Filtering',
        'Aggregation',
        'Sorting',
        'Networking'
      ],

      answer: 1,

      explanation:
        'reduce() performs aggregation operations.',
    },

    {
      question:
        'reduce() method returns?', 

      options: [
        'Single result',
        'Array',
        'Thread',
        'Package'
      ],

      answer: 0,

      explanation:
        'reduce() returns single result.',
    },

    {
      question:
        'reduce() is commonly used for?', 

      options: [
        'Graphics',
        'Compilation',
        'Sum calculation',
        'Applets'
      ],

      answer: 2,

      explanation:
        'reduce() commonly calculates sums and aggregations.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is reduce() method in Stream API?',

      answer:
        'reduce() combines stream elements into single result.',
    },

    {
      question:
        'Why is reduce() method useful?',

      answer:
        'It simplifies aggregation operations like sum and product calculation.',
    },
  ],

  nextTopic: 'stream-collect-method-java',
},
{
  id: 'stream-collect-method-java',

  title: 'Stream collect() Method in Java',

  slug: 'stream-collect-method-java',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '39 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Stream collect() Method in Java deeply including collectors, list conversion, grouping, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'IBM'],

  sections: [
    {
      heading: 'Stream collect() Method in Java',

      content: `
• Introduction to collect() Method

• Collectors Utility

• List Conversion

• Set Conversion

• Grouping Data

• Stream Processing

• Interview Concepts
`,
    },

    {
      heading: 'What is collect() Method?',

      content: `
collect() method converts stream data into collection or final result.
`.trim(),
    },

    {
      heading: 'Why collect() Method is Important',

      content: `
Used for:

• Converting streams to List
• Converting streams to Set
• Grouping data
• Final stream processing
`.trim(),
    },

    {
      heading: 'Advantages of collect() Method',

      content: `
• Simplifies collection creation
• Cleaner stream handling
• Supports grouping operations
`.trim(),
    },

    {
      heading: 'Common Collectors',

      content: `
Important collectors:

• Collectors.toList()
• Collectors.toSet()
• Collectors.groupingBy()
`.trim(),
    },

    {
      heading: 'Important Points About collect() Method',

      content: `
• Terminal operation in Stream API
• Uses Collectors utility class
• Commonly used after map() and filter()
• Converts streams into collections

Common Beginner Mistakes:

• Forgetting import for Collectors
• Confusing reduce() with collect()
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'collect() Method Example',

      language: 'java',

      code: `import java.util.*;
import java.util.stream.*;

public class Main {

    public static void main(String[] args) {

        List<Integer> list =
            Arrays.asList(
                1, 2, 3, 4
            );

        List<Integer> result =
            list.stream()
                .map(n -> n * 2)
                .collect(Collectors.toList());

        System.out.println(result);

    }

}`,

      output: '[2, 4, 6, 8]',
    },
  ],

  mcqs: [
    {
      question:
        'collect() method mainly converts stream into?', 

      options: [
        'Thread',
        'Collection',
        'Package',
        'Compiler'
      ],

      answer: 1,

      explanation:
        'collect() converts stream into collection.',
    },

    {
      question:
        'Which utility class is used with collect()?',

      options: [
        'Math',
        'Thread',
        'Collectors',
        'Scanner'
      ],

      answer: 2,

      explanation:
        'collect() uses Collectors utility class.',
    },

    {
      question:
        'collect() is which type of operation?',

      options: [
        'Intermediate',
        'Terminal',
        'Constructor',
        'Static'
      ],

      answer: 1,

      explanation:
        'collect() is terminal operation.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is collect() method in Stream API?',

      answer:
        'collect() converts stream data into collection or final result.',
    },

    {
      question:
        'Why is collect() method important?',

      answer:
        'It helps store processed stream data into collections.',
    },
  ],

  nextTopic: 'java-optional-class',
},

{
  id: 'java-optional-class',

  title: 'Java Optional Class',

  slug: 'java-optional-class',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '41 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java Optional Class deeply including null safety, optional handling, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Oracle'],

  sections: [
    {
      heading: 'Java Optional Class',

      content: `
• Introduction to Optional Class

• Null Safety

• Optional Methods

• Avoiding NullPointerException

• Functional Programming

• Interview Concepts
`,
    },

    {
      heading: 'What is Optional Class?',

      content: `
Optional class is container object used to avoid null values.
`.trim(),
    },

    {
      heading: 'Important Optional Methods',

      content: `
Important methods:

• of()
• ofNullable()
• isPresent()
• get()
• orElse()
`.trim(),
    },

    {
      heading: 'Why Optional Class is Important',

      content: `
Used for:

• Null safety
• Cleaner code
• Preventing NullPointerException
`.trim(),
    },

    {
      heading: 'Advantages of Optional Class',

      content: `
• Safer null handling
• Better readability
• Reduces runtime errors
`.trim(),
    },

    {
      heading: 'Important Points About Optional Class',

      content: `
• Introduced in Java 8
• Helps avoid null checks
• Commonly used with Stream API
• Improves code safety

Common Beginner Mistakes:

• Calling get() without checking value
• Using Optional everywhere unnecessarily
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Optional Class Example',

      language: 'java',

      code: `import java.util.Optional;

public class Main {

    public static void main(String[] args) {

        Optional<String> name =
            Optional.of("Java");

        System.out.println(
            name.get()
        );

    }

}`,

      output: 'Java',
    },
  ],

  mcqs: [
    {
      question:
        'Optional class introduced in?', 

      options: [
        'Java 5',
        'Java 6',
        'Java 8',
        'Java 11'
      ],

      answer: 2,

      explanation:
        'Optional class introduced in Java 8.',
    },

    {
      question:
        'Optional class mainly prevents?', 

      options: [
        'Compile Error',
        'Network Error',
        'NullPointerException',
        'Syntax Error'
      ],

      answer: 2,

      explanation:
        'Optional class helps avoid NullPointerException.',
    },

    {
      question:
        'Which method checks value presence?',

      options: [
        'run()',
        'accept()',
        'isPresent()',
        'show()'
      ],

      answer: 2,

      explanation:
        'isPresent() checks value presence.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Optional class in Java?',

      answer:
        'Optional class is container object used to safely handle null values.',
    },

    {
      question:
        'Why is Optional class important?',

      answer:
        'It reduces NullPointerException and improves code readability.',
    },
  ],

  nextTopic: 'java-method-reference',
},

{
  id: 'java-method-reference',

  title: 'Java Method Reference',

  slug: 'java-method-reference',

  image:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',

  readTime: '36 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Java Method Reference deeply including syntax, constructor references, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Oracle'],

  sections: [
    {
      heading: 'Java Method Reference',

      content: `
• Introduction to Method Reference

• Simplified Lambda Expressions

• Static Method Reference

• Instance Method Reference

• Constructor Reference

• Interview Concepts
`,
    },

    {
      heading: 'What is Method Reference?',

      content: `
Method Reference provides shorthand syntax for calling methods using :: operator.
`.trim(),
    },

    {
      heading: 'Types of Method References',

      content: `
Important types:

• Static Method Reference
• Instance Method Reference
• Constructor Reference
`.trim(),
    },

    {
      heading: 'Why Method Reference is Important',

      content: `
Used for:

• Cleaner code
• Shorter lambda expressions
• Better readability
`.trim(),
    },

    {
      heading: 'Advantages of Method Reference',

      content: `
• Reduces code length
• Improves readability
• Simplifies lambda expressions
`.trim(),
    },

    {
      heading: 'Important Points About Method Reference',

      content: `
• Uses :: operator
• Introduced in Java 8
• Works with functional interfaces
• Alternative to lambda expressions

Common Beginner Mistakes:

• Using invalid method signatures
• Confusing lambda with method reference
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Method Reference Example',

      language: 'java',

      code: `import java.util.*;

public class Main {

    public static void main(String[] args) {

        List<String> names =
            Arrays.asList(
                "Java",
                "Python"
            );

        names.forEach(
            System.out::println
        );

    }

}`,

      output: 'Java\nPython',
    },
  ],

  mcqs: [
    {
      question:
        'Method Reference uses which operator?',

      options: [
        '->',
        '::',
        '==',
        '&&'
      ],

      answer: 1,

      explanation:
        'Method Reference uses :: operator.',
    },

    {
      question:
        'Method Reference introduced in?', 

      options: [
        'Java 5',
        'Java 6',
        'Java 8',
        'Java 11'
      ],

      answer: 2,

      explanation:
        'Method Reference introduced in Java 8.',
    },

    {
      question:
        'Method Reference mainly simplifies?', 

      options: [
        'Database',
        'Threads',
        'Lambda Expressions',
        'Packages'
      ],

      answer: 2,

      explanation:
        'Method Reference simplifies lambda expressions.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is Method Reference in Java?',

      answer:
        'Method Reference provides shorthand syntax for method calls using :: operator.',
    },

    {
      question:
        'Why is Method Reference useful?',

      answer:
        'It simplifies lambda expressions and improves readability.',
    },
  ],

  nextTopic: 'default-methods-interface-java',
},

{
  id: 'default-methods-interface-java',

  title: 'Default Methods in Interface',

  slug: 'default-methods-interface-java',

  image:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',

  readTime: '35 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Default Methods in Interface deeply including implementation, backward compatibility, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'Oracle', 'Accenture'],

  sections: [
    {
      heading: 'Default Methods in Interface',

      content: `
• Introduction to Default Methods

• Interface Implementation

• Backward Compatibility

• Java 8 Features

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What are Default Methods?',

      content: `
Default methods allow interfaces to contain method implementation.
`.trim(),
    },

    {
      heading: 'Why Default Methods are Important',

      content: `
Used for:

• Backward compatibility
• Adding new features
• Interface enhancement
`.trim(),
    },

    {
      heading: 'Advantages of Default Methods',

      content: `
• Supports method implementation in interface
• Improves backward compatibility
• Reduces breaking changes
`.trim(),
    },

    {
      heading: 'Default Method Syntax',

      content: `
default void show() {

}
`.trim(),
    },

    {
      heading: 'Important Points About Default Methods',

      content: `
• Introduced in Java 8
• Uses default keyword
• Can contain implementation
• Helps extend interfaces safely

Common Beginner Mistakes:

• Forgetting default keyword
• Confusing default methods with abstract methods
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Default Method Example',

      language: 'java',

      code: `interface Demo {

    default void show() {

        System.out.println(
            "Default Method"
        );

    }

}

public class Main
    implements Demo {

    public static void main(String[] args) {

        Main obj =
            new Main();

        obj.show();

    }

}`,

      output: 'Default Method',
    },
  ],

  mcqs: [
    {
      question:
        'Default methods introduced in?', 

      options: [
        'Java 5',
        'Java 6',
        'Java 8',
        'Java 11'
      ],

      answer: 2,

      explanation:
        'Default methods introduced in Java 8.',
    },

    {
      question:
        'Which keyword is used for default methods?',

      options: [
        'final',
        'default',
        'static',
        'private'
      ],

      answer: 1,

      explanation:
        'default keyword is used.',
    },

    {
      question:
        'Default methods mainly improve?', 

      options: [
        'Networking',
        'Backward compatibility',
        'Graphics',
        'Database'
      ],

      answer: 1,

      explanation:
        'Default methods improve backward compatibility.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What are default methods in Java?',

      answer:
        'Default methods allow interfaces to contain method implementation.',
    },

    {
      question:
        'Why are default methods important?',

      answer:
        'They help maintain backward compatibility while extending interfaces.',
    },
  ],

  nextTopic: 'static-methods-interface-java',
},

{
  id: 'static-methods-interface-java',

  title: 'Static Methods in Interface',

  slug: 'static-methods-interface-java',

  image:
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd',

  readTime: '34 min read',

  difficulty: 'Intermediate',

  description:
    'Learn Static Methods in Interface deeply including syntax, interface utilities, and interview concepts.',

  companyTags: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Capgemini'],

  sections: [
    {
      heading: 'Static Methods in Interface',

      content: `
• Introduction to Static Methods

• Interface Utility Methods

• Java 8 Features

• Method Access

• Real-world Usage

• Interview Concepts
`,
    },

    {
      heading: 'What are Static Methods in Interface?',

      content: `
Interfaces can contain static methods with implementation.
`.trim(),
    },

    {
      heading: 'Why Static Methods are Important',

      content: `
Used for:

• Utility methods
• Shared interface logic
• Cleaner code organization
`.trim(),
    },

    {
      heading: 'Advantages of Static Methods in Interface',

      content: `
• Utility logic inside interface
• Better organization
• Easy method access
`.trim(),
    },

    {
      heading: 'How Static Methods Work',

      content: `
• Accessed using interface name
• Not inherited by implementing class
• Contains implementation
`.trim(),
    },

    {
      heading: 'Important Points About Static Methods in Interface',

      content: `
• Introduced in Java 8
• Uses static keyword
• Accessed using interface name
• Cannot be overridden

Common Beginner Mistakes:

• Calling static methods using object
• Confusing default and static methods
`.trim(),
    },
  ],

  codeExamples: [
    {
      title: 'Static Method Interface Example',

      language: 'java',

      code: `interface Demo {

    static void show() {

        System.out.println(
            "Static Method"
        );

    }

}

public class Main {

    public static void main(String[] args) {

        Demo.show();

    }

}`,

      output: 'Static Method',
    },
  ],

  mcqs: [
    {
      question:
        'Static methods in interface introduced in?', 

      options: [
        'Java 5',
        'Java 6',
        'Java 8',
        'Java 11'
      ],

      answer: 2,

      explanation:
        'Static methods in interface introduced in Java 8.',
    },

    {
      question:
        'Static methods are accessed using?', 

      options: [
        'Object',
        'Class variable',
        'Interface name',
        'Constructor'
      ],

      answer: 2,

      explanation:
        'Static methods are accessed using interface name.',
    },

    {
      question:
        'Can static interface methods be overridden?',

      options: [
        'Yes',
        'No',
        'Sometimes',
        'Only in abstract class'
      ],

      answer: 1,

      explanation:
        'Static interface methods cannot be overridden.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What are static methods in interface?',

      answer:
        'Interfaces can contain static methods with implementation.',
    },

    {
      question:
        'Why are static methods useful in interfaces?',

      answer:
        'They help create utility methods inside interfaces.',
    },
  ],

  nextTopic: 'java-foreach-method',
},
];
