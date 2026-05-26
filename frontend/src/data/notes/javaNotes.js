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

  nextTopic: 'java-collections-framework',
},
];
