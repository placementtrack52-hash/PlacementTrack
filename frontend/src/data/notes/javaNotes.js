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
];
