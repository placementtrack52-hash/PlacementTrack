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
];
