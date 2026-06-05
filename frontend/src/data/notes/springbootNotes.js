export const springbootNotes = [
  {
    id: 'springboot-introduction',
    title: 'Spring Boot Introduction',
    slug: 'springboot-introduction',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d',
    readTime: '15 min read',
    difficulty: 'Intermediate',
    description: 'Learn the basics of Spring Boot framework, microservices, auto-configuration, and starter dependencies.',
    companyTags: ['Amazon', 'Accenture', 'TCS', 'Infosys', 'Capgemini'],
    sections: [
      {
        heading: 'What is Spring Boot?',
        content: `
Spring Boot is an open-source Java-based framework used to create microservices. It is built on top of the conventional Spring Framework to make building web applications and REST APIs much faster and easier.
It provides a pre-configured, opinionated setup for Spring-based applications, eliminating boilerplate configuration code.
        `.trim(),
      },
      {
        heading: 'Key Features of Spring Boot',
        content: `
• **Auto-Configuration**: Automatically configures the Spring application based on the jar dependencies present in the classpath.
• **Standalone**: Embedded servlet container (Tomcat, Jetty, or Undertow) included directly in the build, so no need to deploy WAR files to external servers.
• **Starter Dependencies**: Simplifies maven/gradle configuration by grouping common dependencies together (e.g. \`spring-boot-starter-web\`).
        `.trim(),
      }
    ],
    codeExamples: [
      {
        title: 'Spring Boot Application Class',
        language: 'java',
        code: `import org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@SpringBootApplication\n@RestController\npublic class Application {\n    public static void main(String[] args) {\n        SpringApplication.run(Application.class, args);\n    }\n\n    @GetMapping("/")\n    public String hello() {\n        return "Hello from Spring Boot!";\n    }\n}`,
        output: 'Starts a standalone Spring application serving REST endpoints.'
      }
    ],
    mcqs: [
      {
        question: 'Which annotation is used to designate the main entry class of a Spring Boot application?',
        options: [
          '@SpringApplication',
          '@SpringBootApplication',
          '@EnableAutoConfiguration',
          '@Configuration'
        ],
        answer: 1,
        explanation: '@SpringBootApplication is a convenience annotation that adds @Configuration, @EnableAutoConfiguration, and @ComponentScan.'
      }
    ],
    interviewQuestions: [
      {
        question: 'What is auto-configuration in Spring Boot?',
        answer: 'Auto-configuration is a feature where Spring Boot automatically attempts to configure Spring beans based on the libraries added to the dependency classpath (pom.xml/build.gradle).'
      }
    ],
    nextTopic: ''
  }
]
