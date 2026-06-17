export const htmlNotes = [
  {
  id: 'html-introduction',

  title: 'HTML Introduction',

  slug: 'html-introduction',

  image:
    'https://images.unsplash.com/photo-1621839673705-6617adf9e890',

  readTime: '30 min read',

  difficulty: 'Beginner',

  description:
    'Learn HTML Introduction deeply including what HTML is, features, history, advantages, uses, and interview concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Infosys', 'TCS'],

  sections: [
    {
      heading: 'HTML Introduction',

      content: `
• What is HTML?

• History of HTML

• Features of HTML

• Why Learn HTML?

• Applications of HTML

• Advantages of HTML

• Interview Concepts
`,
    },

    {
      heading: 'What is HTML?',

      content: `
HTML stands for HyperText Markup Language.

It is the standard markup language used to create web pages and structure content on the internet.

HTML tells the browser how content such as text, images, videos, tables, and links should appear on a webpage.

HTML is not a programming language because it does not contain logic like loops or conditions. Instead, it is a markup language used to organize and display content.
`,
    },

    {
      heading: 'History of HTML',

      content: `
HTML was created by Tim Berners-Lee in 1991.

The first version of HTML contained only a few basic tags.

Over time, HTML evolved and introduced new features for multimedia, forms, and semantic elements.

HTML5 is the latest major version and is widely used for modern web development.
`,
    },

    {
      heading: 'Features of HTML',

      content: `
Important features of HTML:

• Easy to learn and use

• Platform independent

• Supported by all browsers

• Allows linking between pages

• Supports multimedia elements

• Works with CSS and JavaScript

• Creates structured web content
`,
    },

    {
      heading: 'Why Learn HTML?',

      content: `
HTML is the foundation of web development.

Before learning CSS, JavaScript, React, Angular, or any frontend technology, understanding HTML is essential.

HTML helps developers:

• Build websites

• Create web applications

• Design page structures

• Develop responsive interfaces

• Improve SEO
`,
    },

    {
      heading: 'Applications of HTML',

      content: `
HTML is used in:

• Website development

• Landing pages

• Blogs

• E-commerce websites

• Web applications

• Online forms

• Educational portals

• Portfolio websites
`,
    },

    {
      heading: 'Advantages of HTML',

      content: `
• Free and open standard

• Beginner friendly

• Supported by every browser

• Easy integration with CSS and JavaScript

• Fast webpage development

• Large community support
`,
    },

    {
      heading: 'Important Points About HTML',

      content: `
• HTML stands for HyperText Markup Language

• HTML structures webpage content

• HTML uses tags and elements

• HTML works together with CSS and JavaScript

• HTML is interpreted by browsers

Common Beginner Mistakes:

• Forgetting closing tags

• Incorrect nesting of tags

• Writing tags with spelling mistakes

• Confusing HTML with programming languages
`,
    },
  ],

  codeExamples: [
    {
      title: 'First HTML Program',

      language: 'html',

      code: `<!DOCTYPE html>
<html>
<head>
    <title>My First Web Page</title>
</head>
<body>

    <h1>Welcome to HTML</h1>

    <p>This is my first HTML page.</p>

</body>
</html>`,

      output:
        'Displays a heading and paragraph inside a web browser.',
    },
  ],

  mcqs: [
    {
      question:
        'What does HTML stand for?',

      options: [
        'HyperText Markup Language',
        'Hyper Transfer Markup Language',
        'HighText Markup Language',
        'HyperText Machine Language'
      ],

      answer: 0,

      explanation:
        'HTML stands for HyperText Markup Language.',
    },

    {
      question:
        'Who created HTML?',

      options: [
        'James Gosling',
        'Dennis Ritchie',
        'Tim Berners-Lee',
        'Bjarne Stroustrup'
      ],

      answer: 2,

      explanation:
        'Tim Berners-Lee created HTML in 1991.',
    },

    {
      question:
        'HTML is which type of language?',

      options: [
        'Programming Language',
        'Markup Language',
        'Database Language',
        'Operating System'
      ],

      answer: 1,

      explanation:
        'HTML is a markup language used to structure content.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is HTML?',

      answer:
        'HTML is a markup language used to create and structure webpages on the internet.',
    },

    {
      question:
        'Why is HTML important in web development?',

      answer:
        'HTML provides the structure of webpages and acts as the foundation for CSS and JavaScript.',
    },
  ],

  nextTopic: 'html-editors',
},

{
  id: 'html-editors',

  title: 'HTML Editors',

  slug: 'html-editors',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '25 min read',

  difficulty: 'Beginner',

  description:
    'Learn HTML Editors deeply including text editors, IDEs, browser execution, and interview concepts.',

  companyTags: ['Google', 'Microsoft', 'Amazon', 'Infosys', 'TCS'],

  sections: [
    {
      heading: 'HTML Editors',

      content: `
• What is an HTML Editor?

• Types of HTML Editors

• Popular HTML Editors

• Creating First HTML File

• Running HTML Files

• Interview Concepts
`,
    },

    {
      heading: 'What is an HTML Editor?',

      content: `
An HTML editor is software used to write, edit, and manage HTML code.

Developers use editors to create webpages efficiently and organize project files.
`,
    },

    {
      heading: 'Types of HTML Editors',

      content: `
HTML editors are mainly divided into:

• Text Editors

• Code Editors

• Integrated Development Environments (IDEs)
`,
    },

    {
      heading: 'Popular HTML Editors',

      content: `
Common HTML editors include:

• Visual Studio Code

• Sublime Text

• Notepad++

• Brackets

• WebStorm

• Vim
`,
    },

    {
      heading: 'How to Create First HTML File',

      content: `
1. Open an editor

2. Write HTML code

3. Save file with .html extension

4. Open file in browser

Example:

index.html
`,
    },

    {
      heading: 'Why VS Code is Popular',

      content: `
VS Code is popular because:

• Free to use

• Fast performance

• Extensions support

• Auto-completion

• Built-in terminal

• Git integration
`,
    },

    {
      heading: 'Important Points About HTML Editors',

      content: `
• HTML files use .html extension

• Editors help write code efficiently

• Browsers execute HTML files

• VS Code is one of the most used editors

Common Beginner Mistakes:

• Saving file as .txt

• Forgetting .html extension

• Opening source code instead of browser view
`,
    },
  ],

  codeExamples: [
    {
      title: 'HTML File Example',

      language: 'html',

      code: `index.html`,

      output:
        'HTML files should be saved with .html extension.',
    },
  ],

  mcqs: [
    {
      question:
        'Which extension is used for HTML files?',

      options: [
        '.java',
        '.py',
        '.html',
        '.css'
      ],

      answer: 2,

      explanation:
        '.html is the standard extension for HTML files.',
    },

    {
      question:
        'Which editor is widely used for HTML development?',

      options: [
        'MS Paint',
        'VS Code',
        'Calculator',
        'Photoshop'
      ],

      answer: 1,

      explanation:
        'VS Code is one of the most popular code editors.',
    },

    {
      question:
        'HTML code runs inside?',

      options: [
        'Database',
        'Compiler',
        'Browser',
        'Operating System'
      ],

      answer: 2,

      explanation:
        'Browsers interpret and display HTML pages.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is an HTML editor?',

      answer:
        'An HTML editor is software used to create and modify HTML files.',
    },

    {
      question:
        'Why is VS Code commonly used for HTML?',

      answer:
        'VS Code provides extensions, auto-completion, debugging tools, and a user-friendly interface.',
    },
  ],

  nextTopic: 'html-structure',
},
{
  id: 'html-structure',

  title: 'HTML Structure',

  slug: 'html-structure',

  image:
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085',

  readTime: '35 min read',

  difficulty: 'Beginner',

  description:
    'Learn HTML document structure deeply including DOCTYPE, html, head, body, title tags, browser rendering, and interview concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Infosys', 'Wipro'],

  sections: [
    {
      heading: 'HTML Structure',

      content: `
• What is HTML Structure?

• Basic HTML Document

• DOCTYPE Declaration

• HTML Element

• Head Element

• Title Element

• Body Element

• Browser Rendering

• Interview Concepts
`,
    },

    {
      heading: 'What is HTML Structure?',

      content: `
Every HTML page follows a predefined structure.

This structure helps browsers understand and display webpage content correctly.

A proper HTML structure improves:

• Readability

• Maintainability

• SEO

• Browser Compatibility

Without proper structure, browsers may not render webpages correctly.
`,
    },

    {
      heading: 'Basic HTML Document Structure',

      content: `
A standard HTML document contains:

1. DOCTYPE Declaration

2. html Element

3. head Element

4. body Element

These components form the foundation of every webpage.
`,
    },

    {
      heading: 'DOCTYPE Declaration',

      content: `
DOCTYPE tells the browser which version of HTML is being used.

HTML5 uses:

<!DOCTYPE html>

Benefits:

• Enables standards mode

• Prevents rendering issues

• Improves browser compatibility

DOCTYPE should always be the first line of an HTML document.
`,
    },

    {
      heading: 'HTML Element',

      content: `
The html tag is the root element of an HTML page.

Everything visible and invisible on a webpage exists inside this tag.

Example:

<html>
    ...
</html>

It acts as the parent container for all webpage content.
`,
    },

    {
      heading: 'Head Element',

      content: `
The head section contains information about the webpage.

Content inside head is generally not displayed directly on the webpage.

Common items inside head:

• title

• meta tags

• CSS files

• JavaScript files

• favicon

The head section provides information to browsers and search engines.
`,
    },

    {
      heading: 'Title Element',

      content: `
The title tag specifies the title of a webpage.

Example:

<title>My Website</title>

The title appears:

• Browser tab

• Search engine results

• Bookmarks

A meaningful title improves SEO and user experience.
`,
    },

    {
      heading: 'Body Element',

      content: `
The body tag contains all visible webpage content.

Examples:

• Headings

• Paragraphs

• Images

• Videos

• Tables

• Forms

Everything users see on a webpage is usually placed inside the body tag.
`,
    },

    {
      heading: 'How Browser Reads HTML Structure',

      content: `
When a browser opens an HTML file:

1. Reads DOCTYPE

2. Parses html element

3. Processes head section

4. Loads resources

5. Renders body content

This process converts HTML code into a visible webpage.
`,
    },

    {
      heading: 'Advantages of Proper HTML Structure',

      content: `
• Better code organization

• Easier maintenance

• Improved SEO

• Better browser support

• Faster development

• Professional coding standards
`,
    },

    {
      heading: 'Important Points About HTML Structure',

      content: `
• Every webpage should start with DOCTYPE

• html is the root element

• head contains metadata

• body contains visible content

• Proper structure improves readability

Common Beginner Mistakes:

• Forgetting DOCTYPE

• Placing content outside body

• Missing closing tags

• Writing title outside head
`,
    },
  ],

  codeExamples: [
    {
      title: 'Basic HTML Structure Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<head>
    <title>My First Page</title>
</head>

<body>

    <h1>Welcome to HTML</h1>

    <p>This is a simple webpage.</p>

</body>

</html>`,

      output:
        'Displays a webpage containing a heading and paragraph.',
    },
  ],

  mcqs: [
    {
      question:
        'Which declaration should appear first in an HTML document?',

      options: [
        '<head>',
        '<body>',
        '<!DOCTYPE html>',
        '<title>'
      ],

      answer: 2,

      explanation:
        'DOCTYPE declaration should be the first line in an HTML document.',
    },

    {
      question:
        'Which tag contains visible webpage content?',

      options: [
        '<head>',
        '<title>',
        '<meta>',
        '<body>'
      ],

      answer: 3,

      explanation:
        'Visible webpage content is placed inside the body tag.',
    },

    {
      question:
        'Which tag is the root element of HTML?',

      options: [
        '<html>',
        '<body>',
        '<head>',
        '<title>'
      ],

      answer: 0,

      explanation:
        'The html tag is the root element of every HTML page.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is the purpose of DOCTYPE in HTML?',

      answer:
        'DOCTYPE tells the browser which HTML standard to follow and enables proper rendering of webpages.',
    },

    {
      question:
        'What is the difference between head and body tags?',

      answer:
        'The head tag contains metadata and resource links, while the body tag contains visible webpage content.',
    },
  ],

  nextTopic: 'html-elements',
},

{
  id: 'html-elements',

  title: 'HTML Elements',

  slug: 'html-elements',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '40 min read',

  difficulty: 'Beginner',

  description:
    'Learn HTML Elements deeply including tags, opening and closing elements, nested elements, empty elements, and interview concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'TCS', 'Infosys'],

  sections: [
    {
      heading: 'HTML Elements',

      content: `
• What are HTML Elements?

• Structure of an Element

• Opening and Closing Tags

• Nested Elements

• Empty Elements

• Block Elements

• Inline Elements

• Interview Concepts
`,
    },

    {
      heading: 'What are HTML Elements?',

      content: `
HTML elements are the building blocks of webpages.

Everything displayed on a webpage is created using HTML elements.

Examples:

• Headings

• Paragraphs

• Images

• Links

• Tables

• Forms

Each element tells the browser how content should be displayed.
`,
    },

    {
      heading: 'Structure of an HTML Element',

      content: `
Most HTML elements contain:

1. Opening Tag

2. Content

3. Closing Tag

Example:

<p>Hello World</p>

Opening Tag:
<p>

Content:
Hello World

Closing Tag:
</p>
`,
    },

    {
      heading: 'Opening and Closing Tags',

      content: `
Opening tags start an element.

Closing tags end an element.

Example:

<h1>HTML Tutorial</h1>

Opening:
<h1>

Closing:
</h1>

Most HTML elements require both opening and closing tags.
`,
    },

    {
      heading: 'Nested Elements',

      content: `
HTML elements can contain other elements.

This is called nesting.

Example:

<div>

    <p>Welcome to HTML</p>

</div>

Here:

• div is parent element

• p is child element

Proper nesting is important for valid HTML.
`,
    },

    {
      heading: 'Empty Elements',

      content: `
Some HTML elements do not contain content.

These are called empty elements.

Examples:

• br

• hr

• img

• input

Empty elements usually do not require closing tags.
`,
    },

    {
      heading: 'Block-Level Elements',

      content: `
Block elements start on a new line and occupy full width.

Examples:

• h1

• p

• div

• section

• article

Block elements are commonly used for page layout and structure.
`,
    },

    {
      heading: 'Inline Elements',

      content: `
Inline elements do not start on a new line.

They only take the space required by content.

Examples:

• span

• a

• strong

• em

Inline elements are used within text content.
`,
    },

    {
      heading: 'Why HTML Elements are Important',

      content: `
HTML elements help:

• Structure webpages

• Organize content

• Improve readability

• Support SEO

• Build responsive websites
`,
    },

    {
      heading: 'Important Points About HTML Elements',

      content: `
• Elements are the building blocks of HTML

• Most elements have opening and closing tags

• Elements can be nested

• Some elements are empty

• Proper nesting improves code quality

Common Beginner Mistakes:

• Missing closing tags

• Incorrect nesting

• Using wrong element types

• Forgetting element hierarchy
`,
    },
  ],

  codeExamples: [
    {
      title: 'HTML Elements Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<head>
    <title>Elements Example</title>
</head>

<body>

    <h1>HTML Elements</h1>

    <p>This is a paragraph element.</p>

    <br>

    <hr>

</body>

</html>`,

      output:
        'Displays a heading, paragraph, line break, and horizontal line.',
    },
  ],

  mcqs: [
    {
      question:
        'What are HTML elements?',

      options: [
        'Programming functions',
        'Database records',
        'Building blocks of webpages',
        'CSS properties'
      ],

      answer: 2,

      explanation:
        'HTML elements are the building blocks used to create webpages.',
    },

    {
      question:
        'Which of the following is an empty element?',

      options: [
        '<p>',
        '<h1>',
        '<br>',
        '<div>'
      ],

      answer: 2,

      explanation:
        'br is an empty HTML element.',
    },

    {
      question:
        'Which element is generally block-level?',

      options: [
        '<span>',
        '<a>',
        '<strong>',
        '<div>'
      ],

      answer: 3,

      explanation:
        'div is a block-level HTML element.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is an HTML element?',

      answer:
        'An HTML element is a complete unit consisting of tags and content that defines webpage structure and behavior.',
    },

    {
      question:
        'What is the difference between block and inline elements?',

      answer:
        'Block elements start on a new line and occupy full width, while inline elements occupy only the required content space.',
    },
  ],

  nextTopic: 'html-attributes',
},
{
  id: 'html-attributes',

  title: 'HTML Attributes',

  slug: 'html-attributes',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '40 min read',

  difficulty: 'Beginner',

  description:
    'Learn HTML Attributes deeply including syntax, commonly used attributes, global attributes, boolean attributes, and interview concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Infosys', 'Wipro'],

  sections: [
    {
      heading: 'HTML Attributes',

      content: `
• What are HTML Attributes?

• Syntax of Attributes

• Common HTML Attributes

• Global Attributes

• Boolean Attributes

• Importance of Attributes

• Interview Concepts
`,
    },

    {
      heading: 'What are HTML Attributes?',

      content: `
HTML attributes provide additional information about HTML elements.

Attributes help customize the behavior, appearance, and functionality of elements.

They are always written inside the opening tag.

Example:

<a href="https://example.com">Visit Website</a>

Here, href is an attribute.
`,
    },

    {
      heading: 'Syntax of HTML Attributes',

      content: `
An attribute consists of:

1. Attribute Name

2. Attribute Value

Syntax:

<tag attribute="value">

Example:

<img src="image.jpg">

Attribute Name:
src

Attribute Value:
image.jpg
`,
    },

    {
      heading: 'Rules for Using Attributes',

      content: `
Important rules:

• Attributes are written inside opening tags

• Attribute values are usually enclosed in quotes

• One element can have multiple attributes

• Attribute names are not case-sensitive in HTML

Following proper syntax improves readability and compatibility.
`,
    },

    {
      heading: 'Common HTML Attributes',

      content: `
Frequently used attributes:

• href

• src

• alt

• title

• width

• height

• style

• id

• class

• target

These attributes are widely used in almost every webpage.
`,
    },

    {
      heading: 'The href Attribute',

      content: `
The href attribute specifies the destination URL of a link.

Example:

<a href="https://google.com">
Google
</a>

Without href, a hyperlink cannot navigate to another page.
`,
    },

    {
      heading: 'The src Attribute',

      content: `
The src attribute specifies the source of an image, audio, video, or other external resource.

Example:

<img src="logo.png">

The browser loads the file specified in src.
`,
    },

    {
      heading: 'The alt Attribute',

      content: `
The alt attribute provides alternative text for images.

Example:

<img src="car.jpg" alt="Red Sports Car">

Benefits:

• Improves accessibility

• Helps SEO

• Displays text when image fails to load
`,
    },

    {
      heading: 'The title Attribute',

      content: `
The title attribute provides extra information about an element.

Example:

<p title="HTML Tutorial">
Move mouse here
</p>

Browsers usually display the title as a tooltip.
`,
    },

    {
      heading: 'Width and Height Attributes',

      content: `
These attributes specify element dimensions.

Example:

<img src="image.jpg"
     width="300"
     height="200">

They help control image size on webpages.
`,
    },

    {
      heading: 'Global Attributes',

      content: `
Global attributes can be used on almost every HTML element.

Common global attributes:

• id

• class

• style

• title

• hidden

• tabindex

These attributes are very important in modern web development.
`,
    },

    {
      heading: 'The id Attribute',

      content: `
The id attribute uniquely identifies an element.

Example:

<p id="intro">
Welcome
</p>

Rules:

• Must be unique within a webpage

• Often used by CSS and JavaScript
`,
    },

    {
      heading: 'The class Attribute',

      content: `
The class attribute groups multiple elements together.

Example:

<p class="text">
Paragraph One
</p>

<p class="text">
Paragraph Two
</p>

Multiple elements can share the same class.
`,
    },

    {
      heading: 'Boolean Attributes',

      content: `
Boolean attributes do not require a value.

Their presence means true.

Examples:

• disabled

• checked

• readonly

• required

Example:

<input type="text" required>

The required attribute forces users to enter data before submission.
`,
    },

    {
      heading: 'Why HTML Attributes are Important',

      content: `
Attributes make HTML elements more powerful.

They help:

• Create links

• Display images

• Apply styling

• Add accessibility

• Improve user experience

• Connect HTML with CSS and JavaScript
`,
    },

    {
      heading: 'Important Points About HTML Attributes',

      content: `
• Attributes provide additional information

• They are written inside opening tags

• Multiple attributes can be used together

• id should be unique

• class can be shared

• Boolean attributes do not require values

Common Beginner Mistakes:

• Forgetting quotation marks

• Using duplicate IDs

• Misspelling attribute names

• Placing attributes outside tags
`,
    },
  ],

  codeExamples: [
    {
      title: 'HTML Attributes Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<head>
    <title>Attributes Example</title>
</head>

<body>

    <a href="https://google.com">
        Visit Google
    </a>

    <br><br>

    <img
        src="logo.png"
        alt="Website Logo"
        width="200"
        height="100"
    >

</body>

</html>`,

      output:
        'Displays a hyperlink and an image using attributes.',
    },
  ],

  mcqs: [
    {
      question:
        'What is the purpose of HTML attributes?',

      options: [
        'Store database records',
        'Provide additional information about elements',
        'Create operating systems',
        'Compile programs'
      ],

      answer: 1,

      explanation:
        'Attributes provide extra information and functionality to HTML elements.',
    },

    {
      question:
        'Which attribute specifies the destination of a hyperlink?',

      options: [
        'src',
        'alt',
        'href',
        'class'
      ],

      answer: 2,

      explanation:
        'href defines the URL of a hyperlink.',
    },

    {
      question:
        'Which attribute should be unique on a webpage?',

      options: [
        'class',
        'style',
        'title',
        'id'
      ],

      answer: 3,

      explanation:
        'Each id value should be unique within a webpage.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What are HTML attributes?',

      answer:
        'HTML attributes provide additional information and functionality to HTML elements through name-value pairs inside opening tags.',
    },

    {
      question:
        'What is the difference between id and class attributes?',

      answer:
        'The id attribute uniquely identifies a single element, while the class attribute can be shared by multiple elements.',
    },
  ],

  nextTopic: 'html-headings',
},

{
  id: 'html-headings',

  title: 'HTML Headings',

  slug: 'html-headings',

  image:
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085',

  readTime: '30 min read',

  difficulty: 'Beginner',

  description:
    'Learn HTML Headings deeply including heading levels, importance, SEO benefits, accessibility, and interview concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'TCS', 'Infosys'],

  sections: [
    {
      heading: 'HTML Headings',

      content: `
• What are HTML Headings?

• Heading Levels

• Importance of Headings

• SEO Benefits

• Accessibility

• Best Practices

• Interview Concepts
`,
    },

    {
      heading: 'What are HTML Headings?',

      content: `
HTML headings are used to define titles and subtitles on a webpage.

Headings help organize content into logical sections.

They improve:

• Readability

• User experience

• Accessibility

• Search engine optimization
`,
    },

    {
      heading: 'Heading Tags in HTML',

      content: `
HTML provides six heading tags:

• h1

• h2

• h3

• h4

• h5

• h6

h1 is the largest and most important heading.

h6 is the smallest heading.
`,
    },

    {
      heading: 'Example of Heading Hierarchy',

      content: `
A webpage should follow a logical hierarchy.

Example:

h1 → Main Page Title

h2 → Main Section

h3 → Subsection

h4 → Topic Inside Subsection

This structure makes content easier to understand.
`,
    },

    {
      heading: 'Importance of h1 Tag',

      content: `
The h1 tag represents the main topic of the webpage.

Usually:

• One h1 per page

• Describes the page content

• Important for SEO

Search engines often use h1 to understand webpage topics.
`,
    },

    {
      heading: 'SEO Benefits of Headings',

      content: `
Headings help search engines understand content structure.

Benefits:

• Better ranking opportunities

• Improved content organization

• Easier indexing

• Better user engagement

Using proper heading hierarchy improves SEO performance.
`,
    },

    {
      heading: 'Accessibility and Headings',

      content: `
Screen readers use headings to navigate webpages.

Well-structured headings help:

• Visually impaired users

• Faster navigation

• Better accessibility compliance

Heading hierarchy should never be skipped randomly.
`,
    },

    {
      heading: 'Best Practices for Headings',

      content: `
Recommended practices:

• Use one h1 tag

• Follow logical hierarchy

• Keep headings meaningful

• Avoid using headings only for styling

• Make headings descriptive
`,
    },

    {
      heading: 'Important Points About HTML Headings',

      content: `
• HTML provides six heading levels

• h1 is most important

• Headings improve SEO

• Headings improve accessibility

• Proper hierarchy is important

Common Beginner Mistakes:

• Using multiple h1 tags unnecessarily

• Skipping heading levels

• Using headings only for larger text

• Poor heading descriptions
`,
    },
  ],

  codeExamples: [
    {
      title: 'HTML Headings Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

    <h1>HTML Tutorial</h1>

    <h2>Introduction</h2>

    <h3>What is HTML?</h3>

    <h4>Features</h4>

    <h5>Examples</h5>

    <h6>Summary</h6>

</body>

</html>`,

      output:
        'Displays six heading levels from h1 to h6.',
    },
  ],

  mcqs: [
    {
      question:
        'Which heading tag is the most important?',

      options: [
        'h6',
        'h5',
        'h2',
        'h1'
      ],

      answer: 3,

      explanation:
        'h1 is the highest and most important heading level.',
    },

    {
      question:
        'How many heading levels does HTML provide?',

      options: [
        '4',
        '5',
        '6',
        '7'
      ],

      answer: 2,

      explanation:
        'HTML provides h1 through h6.',
    },

    {
      question:
        'Why are headings important for SEO?',

      options: [
        'They change browser color',
        'They help search engines understand content',
        'They increase internet speed',
        'They create databases'
      ],

      answer: 1,

      explanation:
        'Headings help search engines understand page structure and content.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is the purpose of HTML headings?',

      answer:
        'HTML headings organize content into sections and improve readability, SEO, and accessibility.',
    },

    {
      question:
        'Why should heading hierarchy be maintained properly?',

      answer:
        'Proper hierarchy helps users, search engines, and screen readers understand webpage structure efficiently.',
    },
  ],

  nextTopic: 'html-paragraphs',
},
{
  id: 'html-paragraphs',

  title: 'HTML Paragraphs',

  slug: 'html-paragraphs',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '35 min read',

  difficulty: 'Beginner',

  description:
    'Learn HTML Paragraphs deeply including paragraph tags, line breaks, horizontal rules, whitespace handling, and interview concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Infosys', 'TCS'],

  sections: [
    {
      heading: 'HTML Paragraphs',

      content: `
• What are HTML Paragraphs?

• Paragraph Tag

• HTML Whitespace

• Line Breaks

• Horizontal Rules

• Preformatted Text

• Best Practices

• Interview Concepts
`,
    },

    {
      heading: 'What are HTML Paragraphs?',

      content: `
Paragraphs are used to display blocks of text on a webpage.

In HTML, paragraphs help organize content into readable sections.

Without paragraphs, large amounts of text become difficult to read and understand.

HTML provides the p tag to create paragraphs.
`,
    },

    {
      heading: 'Paragraph Tag in HTML',

      content: `
The p tag is used to define a paragraph.

Syntax:

<p>Your text here</p>

Browsers automatically add space before and after paragraphs.

Example:

<p>Welcome to HTML.</p>

<p>This is another paragraph.</p>

Both paragraphs appear separately with spacing between them.
`,
    },

    {
      heading: 'How Browsers Display Paragraphs',

      content: `
Browsers automatically:

• Start paragraphs on a new line

• Add spacing around paragraphs

• Ignore unnecessary spaces

This behavior makes webpage content cleaner and more readable.
`,
    },

    {
      heading: 'HTML Ignores Extra Spaces',

      content: `
HTML removes extra spaces and line breaks automatically.

Example:

<p>
Hello

World
</p>

Output:

Hello World

Even if multiple spaces exist in code, browsers usually display only one space.
`,
    },

    {
      heading: 'Line Breaks Using br Tag',

      content: `
The br tag inserts a line break without creating a new paragraph.

Example:

<p>
HTML<br>
CSS<br>
JavaScript
</p>

Output:

HTML
CSS
JavaScript

The br tag is an empty element and does not require a closing tag.
`,
    },

    {
      heading: 'Horizontal Rule Using hr Tag',

      content: `
The hr tag creates a horizontal line across the page.

Example:

<hr>

Uses:

• Separate sections

• Divide content

• Improve visual structure

The hr tag is also an empty element.
`,
    },

    {
      heading: 'Preformatted Text Using pre Tag',

      content: `
The pre tag preserves spaces and line breaks exactly as written.

Example:

<pre>
HTML
    CSS
        JavaScript
</pre>

Browsers display the content exactly as it appears in the source code.

This is useful for code snippets and formatted text.
`,
    },

    {
      heading: 'Difference Between p and br',

      content: `
Paragraph Tag (p):

• Creates a complete paragraph

• Adds spacing automatically

• Starts on a new line

Line Break Tag (br):

• Creates a simple line break

• No extra spacing

• Used inside content

Choose p for paragraphs and br for line breaks.
`,
    },

    {
      heading: 'Best Practices for Paragraphs',

      content: `
Recommended practices:

• Use p tags for normal text content

• Avoid excessive br tags

• Keep paragraphs concise

• Organize long content into multiple paragraphs

• Use hr only when necessary
`,
    },

    {
      heading: 'Advantages of HTML Paragraphs',

      content: `
• Improves readability

• Organizes content

• Enhances user experience

• Makes webpages professional

• Easier content management
`,
    },

    {
      heading: 'Important Points About HTML Paragraphs',

      content: `
• Paragraphs use the p tag

• Browsers add automatic spacing

• HTML ignores extra spaces

• br creates line breaks

• hr creates horizontal lines

• pre preserves formatting

Common Beginner Mistakes:

• Using multiple br tags instead of paragraphs

• Forgetting closing p tags

• Expecting HTML to preserve extra spaces

• Misusing pre tag for normal text
`,
    },
  ],

  codeExamples: [
    {
      title: 'HTML Paragraph Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

    <p>Welcome to HTML.</p>

    <p>This is another paragraph.</p>

    <hr>

    <p>
        HTML<br>
        CSS<br>
        JavaScript
    </p>

</body>

</html>`,

      output:
        'Displays paragraphs, a horizontal line, and text with line breaks.',
    },
  ],

  mcqs: [
    {
      question:
        'Which tag is used to create paragraphs in HTML?',

      options: [
        '<para>',
        '<text>',
        '<p>',
        '<paragraph>'
      ],

      answer: 2,

      explanation:
        'The p tag is used to create paragraphs.',
    },

    {
      question:
        'Which tag inserts a line break?',

      options: [
        '<hr>',
        '<br>',
        '<lb>',
        '<break>'
      ],

      answer: 1,

      explanation:
        'The br tag inserts a line break.',
    },

    {
      question:
        'Which tag preserves spaces and formatting?',

      options: [
        '<p>',
        '<hr>',
        '<pre>',
        '<span>'
      ],

      answer: 2,

      explanation:
        'The pre tag preserves formatting exactly as written.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is the purpose of the p tag in HTML?',

      answer:
        'The p tag is used to define and display paragraphs on a webpage.',
    },

    {
      question:
        'What is the difference between br and p tags?',

      answer:
        'The p tag creates a complete paragraph with spacing, while the br tag only inserts a line break within content.',
    },
  ],

  nextTopic: 'html-formatting',
},

{
  id: 'html-formatting',

  title: 'HTML Formatting',

  slug: 'html-formatting',

  image:
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085',

  readTime: '45 min read',

  difficulty: 'Beginner',

  description:
    'Learn HTML Formatting deeply including bold, italic, emphasized text, highlighted text, deleted text, inserted text, and interview concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Infosys', 'Wipro'],

  sections: [
    {
      heading: 'HTML Formatting',

      content: `
• What is HTML Formatting?

• Bold Text

• Important Text

• Italic Text

• Emphasized Text

• Marked Text

• Small Text

• Deleted Text

• Inserted Text

• Subscript and Superscript

• Interview Concepts
`,
    },

    {
      heading: 'What is HTML Formatting?',

      content: `
HTML formatting tags are used to give special meaning and appearance to text.

Formatting helps make content:

• More readable

• More attractive

• Easier to understand

• Better organized

Formatting tags are widely used in blogs, articles, tutorials, and websites.
`,
    },

    {
      heading: 'Bold Text Using b Tag',

      content: `
The b tag displays text in bold.

Example:

<b>Welcome to HTML</b>

Output:

Welcome to HTML

The b tag changes appearance but does not add special importance.
`,
    },

    {
      heading: 'Important Text Using strong Tag',

      content: `
The strong tag indicates important text.

Example:

<strong>Important Notice</strong>

Benefits:

• Appears bold

• Provides semantic meaning

• Better for accessibility

• Better for SEO

strong is preferred over b when content is important.
`,
    },

    {
      heading: 'Italic Text Using i Tag',

      content: `
The i tag displays text in italic style.

Example:

<i>HTML Tutorial</i>

It is commonly used for:

• Terms

• Foreign words

• Technical names
`,
    },

    {
      heading: 'Emphasized Text Using em Tag',

      content: `
The em tag emphasizes text.

Example:

<em>Please read carefully</em>

Benefits:

• Appears italic

• Adds semantic meaning

• Helpful for screen readers

em is usually preferred over i when emphasis is intended.
`,
    },

    {
      heading: 'Highlighted Text Using mark Tag',

      content: `
The mark tag highlights text.

Example:

<mark>Important Topic</mark>

Common uses:

• Search results

• Key points

• Important information
`,
    },

    {
      heading: 'Small Text Using small Tag',

      content: `
The small tag displays smaller text.

Example:

<small>Terms and Conditions Apply</small>

Often used for:

• Copyright notices

• Legal information

• Footnotes
`,
    },

    {
      heading: 'Deleted Text Using del Tag',

      content: `
The del tag represents deleted content.

Example:

<del>₹999</del>

Browsers usually display a line through the text.
`,
    },

    {
      heading: 'Inserted Text Using ins Tag',

      content: `
The ins tag represents inserted content.

Example:

<ins>New Price ₹799</ins>

Browsers often underline inserted text.
`,
    },

    {
      heading: 'Subscript Text Using sub Tag',

      content: `
The sub tag displays text below the normal line.

Example:

H<sub>2</sub>O

Output:

H₂O

Used in:

• Chemical formulas

• Mathematical expressions
`,
    },

    {
      heading: 'Superscript Text Using sup Tag',

      content: `
The sup tag displays text above the normal line.

Example:

x<sup>2</sup>

Output:

x²

Used in:

• Mathematics

• Scientific notation

• References
`,
    },

    {
      heading: 'Advantages of HTML Formatting',

      content: `
• Improves readability

• Highlights important content

• Enhances accessibility

• Improves content structure

• Makes webpages professional
`,
    },

    {
      heading: 'Important Points About HTML Formatting',

      content: `
• strong is preferred for important text

• em is preferred for emphasized text

• mark highlights content

• del represents removed text

• ins represents inserted text

• sub and sup are used for formulas

Common Beginner Mistakes:

• Using b instead of strong everywhere

• Using i instead of em for emphasis

• Overusing formatting tags

• Using formatting only for styling purposes
`,
    },
  ],

  codeExamples: [
    {
      title: 'HTML Formatting Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

    <b>Bold Text</b>
    <br>

    <strong>Important Text</strong>
    <br>

    <i>Italic Text</i>
    <br>

    <em>Emphasized Text</em>
    <br>

    <mark>Highlighted Text</mark>
    <br>

    H<sub>2</sub>O
    <br>

    x<sup>2</sup>

</body>

</html>`,

      output:
        'Displays formatted text using various HTML formatting tags.',
    },
  ],

  mcqs: [
    {
      question:
        'Which tag is used for important text?',

      options: [
        '<b>',
        '<strong>',
        '<i>',
        '<small>'
      ],

      answer: 1,

      explanation:
        'The strong tag indicates important content.',
    },

    {
      question:
        'Which tag highlights text?',

      options: [
        '<mark>',
        '<em>',
        '<ins>',
        '<sub>'
      ],

      answer: 0,

      explanation:
        'The mark tag highlights text.',
    },

    {
      question:
        'Which tag is used to display x²?',

      options: [
        '<sub>',
        '<mark>',
        '<sup>',
        '<small>'
      ],

      answer: 2,

      explanation:
        'The sup tag creates superscript text.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is the difference between b and strong tags?',

      answer:
        'The b tag only makes text bold, while the strong tag adds semantic importance and usually appears bold.',
    },

    {
      question:
        'What is the difference between i and em tags?',

      answer:
        'The i tag provides italic styling, while the em tag adds emphasis and semantic meaning to text.',
    },
  ],

  nextTopic: 'html-quotations',
},
{
  id: 'html-quotations',

  title: 'HTML Quotations',

  slug: 'html-quotations',

  image:
    'https://images.unsplash.com/photo-1455390582262-044cdead277a',

  readTime: '35 min read',

  difficulty: 'Beginner',

  description:
    'Learn HTML Quotations deeply including blockquote, q, abbr, address, cite, bdo tags, and interview concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Infosys', 'TCS'],

  sections: [
    {
      heading: 'HTML Quotations',

      content: `
• What are HTML Quotations?

• blockquote Tag

• q Tag

• abbr Tag

• address Tag

• cite Tag

• bdo Tag

• Importance of Quotation Tags

• Interview Concepts
`,
    },

    {
      heading: 'What are HTML Quotations?',

      content: `
HTML provides special tags for quotations, references, abbreviations, and contact information.

Quotation tags help browsers and search engines understand the meaning of content.

These tags improve:

• Readability

• Accessibility

• Semantic Structure

• SEO
`,
    },

    {
      heading: 'blockquote Tag',

      content: `
The blockquote tag is used for long quotations taken from another source.

Example:

<blockquote>
Learning never stops.
</blockquote>

The browser usually displays blockquote content with indentation.

It is mainly used for:

• Articles

• Research Content

• Testimonials

• References
`,
    },

    {
      heading: 'q Tag',

      content: `
The q tag is used for short quotations.

Example:

<p>
He said
<q>Practice makes perfect.</q>
</p>

Browsers automatically add quotation marks around the text.

Use q for short inline quotations.
`,
    },

    {
      heading: 'abbr Tag',

      content: `
The abbr tag defines an abbreviation or acronym.

Example:

<abbr title="HyperText Markup Language">
HTML
</abbr>

When users move the mouse over the abbreviation, the full meaning can be displayed.

Benefits:

• Better accessibility

• Improved understanding

• Professional documentation
`,
    },

    {
      heading: 'address Tag',

      content: `
The address tag is used to display contact information.

Example:

<address>
John Doe<br>
Delhi, India<br>
john@example.com
</address>

Common uses:

• Author Information

• Company Contact Details

• Website Contact Sections
`,
    },

    {
      heading: 'cite Tag',

      content: `
The cite tag is used to reference the title of a creative work.

Example:

<cite>Harry Potter</cite>

Common uses:

• Books

• Movies

• Research Papers

• Articles

Browsers usually display cited text in italic style.
`,
    },

    {
      heading: 'bdo Tag',

      content: `
The bdo tag stands for Bi-Directional Override.

It changes the text direction.

Example:

<bdo dir="rtl">
HTML
</bdo>

Output:

LMTH

This tag is useful when working with languages that use different writing directions.
`,
    },

    {
      heading: 'Why HTML Quotation Tags are Important',

      content: `
Quotation tags provide semantic meaning to content.

Benefits:

• Better webpage structure

• Improved SEO

• Enhanced accessibility

• Professional content formatting

• Better browser understanding
`,
    },

    {
      heading: 'Real-world Uses of HTML Quotations',

      content: `
HTML quotation tags are commonly used in:

• Blogs

• Documentation

• Educational Websites

• Research Portals

• News Websites

• Business Websites
`,
    },

    {
      heading: 'Important Points About HTML Quotations',

      content: `
• blockquote is used for long quotations

• q is used for short quotations

• abbr defines abbreviations

• address stores contact information

• cite references creative works

• bdo changes text direction

Common Beginner Mistakes:

• Using blockquote for short quotes

• Forgetting title attribute in abbr

• Using cite for author names instead of work titles

• Incorrect bdo direction values
`,
    },
  ],

  codeExamples: [
    {
      title: 'HTML Quotations Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

    <blockquote>
        Learning never stops.
    </blockquote>

    <p>
        He said
        <q>Practice daily.</q>
    </p>

    <abbr title="HyperText Markup Language">
        HTML
    </abbr>

    <br><br>

    <cite>Clean Code</cite>

</body>

</html>`,

      output:
        'Displays quotation tags, abbreviation, and citation examples.',
    },
  ],

  mcqs: [
    {
      question:
        'Which tag is used for long quotations?',

      options: [
        '<q>',
        '<blockquote>',
        '<cite>',
        '<abbr>'
      ],

      answer: 1,

      explanation:
        'blockquote is used for long quotations.',
    },

    {
      question:
        'Which tag defines an abbreviation?',

      options: [
        '<address>',
        '<cite>',
        '<abbr>',
        '<q>'
      ],

      answer: 2,

      explanation:
        'abbr defines abbreviations and acronyms.',
    },

    {
      question:
        'Which tag is used for short inline quotations?',

      options: [
        '<blockquote>',
        '<q>',
        '<cite>',
        '<bdo>'
      ],

      answer: 1,

      explanation:
        'The q tag is used for short inline quotations.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is the difference between blockquote and q tags?',

      answer:
        'blockquote is used for long quotations displayed as separate blocks, while q is used for short inline quotations.',
    },

    {
      question:
        'What is the purpose of the abbr tag?',

      answer:
        'The abbr tag defines abbreviations and acronyms while providing their full meaning through the title attribute.',
    },
  ],

  nextTopic: 'html-comments',
},

{
  id: 'html-comments',

  title: 'HTML Comments',

  slug: 'html-comments',

  image:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

  readTime: '25 min read',

  difficulty: 'Beginner',

  description:
    'Learn HTML Comments deeply including syntax, uses, advantages, debugging techniques, and interview concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Infosys', 'Wipro'],

  sections: [
    {
      heading: 'HTML Comments',

      content: `
• What are HTML Comments?

• Syntax of Comments

• Why Use Comments?

• Single-Line Comments

• Multi-Line Comments

• Debugging with Comments

• Best Practices

• Interview Concepts
`,
    },

    {
      heading: 'What are HTML Comments?',

      content: `
HTML comments are notes added inside HTML code.

Comments are ignored by browsers and are not displayed on the webpage.

They are used to explain code and improve readability.

Comments make projects easier to understand and maintain.
`,
    },

    {
      heading: 'Syntax of HTML Comments',

      content: `
HTML comments start with:

<!--

and end with:

-->

Example:

<!-- This is a comment -->

Anything written inside comment tags is ignored by the browser.
`,
    },

    {
      heading: 'Why Use HTML Comments?',

      content: `
Comments help developers:

• Explain code

• Organize projects

• Improve readability

• Debug webpages

• Collaborate with teams

They are especially useful in large projects.
`,
    },

    {
      heading: 'Single-Line Comments',

      content: `
A single-line comment contains a short note.

Example:

<!-- Main Navigation -->

This is commonly used to identify sections of a webpage.
`,
    },

    {
      heading: 'Multi-Line Comments',

      content: `
Comments can span multiple lines.

Example:

<!--
Header Section
Contains Logo
Contains Navigation
-->

This improves project organization.
`,
    },

    {
      heading: 'Using Comments for Debugging',

      content: `
Developers often comment out code temporarily.

Example:

<!--
<p>This paragraph is hidden.</p>
-->

This helps test webpages without permanently removing code.
`,
    },

    {
      heading: 'Best Practices for HTML Comments',

      content: `
Recommended practices:

• Write meaningful comments

• Keep comments concise

• Use comments to separate sections

• Remove unnecessary comments

• Avoid commenting obvious code
`,
    },

    {
      heading: 'Advantages of HTML Comments',

      content: `
• Better readability

• Easier maintenance

• Team collaboration

• Faster debugging

• Improved code organization
`,
    },

    {
      heading: 'Important Points About HTML Comments',

      content: `
• Comments are ignored by browsers

• Comments are not displayed on webpages

• Useful for documentation

• Helpful during debugging

• Improve code readability

Common Beginner Mistakes:

• Forgetting closing comment symbols

• Writing sensitive information inside comments

• Overusing comments

• Nesting comments incorrectly
`,
    },
  ],

  codeExamples: [
    {
      title: 'HTML Comments Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

    <!-- Main Heading -->

    <h1>HTML Tutorial</h1>

    <!--
    This section contains
    introductory content
    -->

    <p>Welcome to HTML.</p>

</body>

</html>`,

      output:
        'Displays heading and paragraph while comments remain hidden.',
    },
  ],

  mcqs: [
    {
      question:
        'Which syntax is used for HTML comments?',

      options: [
        '// Comment',
        '/* Comment */',
        '<!-- Comment -->',
        '# Comment'
      ],

      answer: 2,

      explanation:
        'HTML comments use <!-- Comment --> syntax.',
    },

    {
      question:
        'Are HTML comments displayed in browsers?',

      options: [
        'Yes',
        'No',
        'Sometimes',
        'Only in Chrome'
      ],

      answer: 1,

      explanation:
        'Browsers ignore comments and do not display them.',
    },

    {
      question:
        'Why are comments useful?',

      options: [
        'To increase internet speed',
        'To store database records',
        'To explain and organize code',
        'To compile HTML'
      ],

      answer: 2,

      explanation:
        'Comments improve readability and maintainability of code.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What are HTML comments?',

      answer:
        'HTML comments are notes written inside code that are ignored by browsers and used for documentation and readability.',
    },

    {
      question:
        'Why should sensitive information not be stored in HTML comments?',

      answer:
        'Because comments can still be viewed in the page source code even though they are not displayed on the webpage.',
    },
  ],

  nextTopic: 'html-colors',
},
{
  id: 'html-colors',

  title: 'HTML Colors',

  slug: 'html-colors',

  image:
    'https://images.unsplash.com/photo-1557683316-973673baf926',

  readTime: '40 min read',

  difficulty: 'Beginner',

  description:
    'Learn HTML Colors deeply including color names, RGB, HEX, HSL, background colors, text colors, and interview concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Infosys', 'TCS'],

  sections: [
    {
      heading: 'HTML Colors',

      content: `
• What are HTML Colors?

• Why Colors are Important

• Color Names

• HEX Colors

• RGB Colors

• RGBA Colors

• HSL Colors

• Background Colors

• Text Colors

• Border Colors

• Interview Concepts
`,
    },

    {
      heading: 'What are HTML Colors?',

      content: `
HTML colors are used to change the appearance of webpage elements.

Colors improve:

• User Experience

• Design Quality

• Readability

• Visual Appeal

• Branding

HTML itself does not create colors. Colors are usually applied using CSS, but understanding color formats is essential for web development.
`,
    },

    {
      heading: 'Why Colors are Important in Web Development?',

      content: `
Colors help users understand content quickly.

Benefits:

• Highlight important information

• Improve user engagement

• Build brand identity

• Increase readability

• Create professional designs

Good color selection can significantly improve website usability.
`,
    },

    {
      heading: 'Using Color Names',

      content: `
HTML supports predefined color names.

Examples:

• Red

• Blue

• Green

• Yellow

• Black

• White

• Orange

Example:

<h1 style="color:red;">
Welcome
</h1>

This is the easiest way to apply colors.
`,
    },

    {
      heading: 'HEX Color Values',

      content: `
HEX stands for Hexadecimal.

Format:

#RRGGBB

Examples:

#FF0000 → Red

#00FF00 → Green

#0000FF → Blue

#FFFFFF → White

#000000 → Black

HEX colors are widely used in professional web development.
`,
    },

    {
      heading: 'Understanding RGB Colors',

      content: `
RGB stands for:

• Red

• Green

• Blue

Format:

rgb(red, green, blue)

Example:

rgb(255, 0, 0)

Output:

Red Color

Each value ranges from 0 to 255.
`,
    },

    {
      heading: 'RGBA Colors',

      content: `
RGBA extends RGB by adding transparency.

Format:

rgba(red, green, blue, alpha)

Example:

rgba(255, 0, 0, 0.5)

Alpha values:

0 = Fully Transparent

1 = Fully Visible

RGBA is useful for overlays and modern UI design.
`,
    },

    {
      heading: 'HSL Colors',

      content: `
HSL stands for:

• Hue

• Saturation

• Lightness

Format:

hsl(hue, saturation%, lightness%)

Example:

hsl(0, 100%, 50%)

Output:

Red Color

HSL makes color adjustments easier than RGB.
`,
    },

    {
      heading: 'Background Colors',

      content: `
Background colors are used behind content.

Example:

<body style="background-color:lightblue;">

Uses:

• Section Design

• Cards

• Headers

• Layout Styling

Background colors improve webpage aesthetics.
`,
    },

    {
      heading: 'Text Colors',

      content: `
Text colors control the appearance of written content.

Example:

<p style="color:blue;">
Hello HTML
</p>

Choosing proper text colors improves readability.
`,
    },

    {
      heading: 'Border Colors',

      content: `
Border colors customize element borders.

Example:

<p style="border:2px solid red;">
HTML Tutorial
</p>

Uses:

• Buttons

• Cards

• Forms

• Containers
`,
    },

    {
      heading: 'Choosing Good Color Combinations',

      content: `
Best practices:

• Maintain sufficient contrast

• Avoid overly bright combinations

• Keep design consistent

• Use limited color palettes

• Focus on accessibility

Good color combinations improve user experience.
`,
    },

    {
      heading: 'Real-world Uses of HTML Colors',

      content: `
Colors are used in:

• E-commerce Websites

• Dashboards

• Portfolios

• Blogs

• Mobile Web Apps

• Educational Platforms

• Business Websites
`,
    },

    {
      heading: 'Important Points About HTML Colors',

      content: `
• Colors improve website appearance

• HEX colors are widely used

• RGB uses Red, Green, Blue values

• RGBA supports transparency

• HSL simplifies color adjustments

• Proper contrast improves accessibility

Common Beginner Mistakes:

• Using too many colors

• Poor text-background contrast

• Ignoring accessibility

• Inconsistent color themes
`,
    },
  ],

  codeExamples: [
    {
      title: 'HTML Colors Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body style="background-color:lightyellow;">

    <h1 style="color:red;">
        HTML Colors
    </h1>

    <p style="color:blue;">
        Welcome to HTML Color Tutorial
    </p>

    <p style="border:2px solid green;">
        Border Example
    </p>

</body>

</html>`,

      output:
        'Displays colored text, background color, and border color.',
    },
  ],

  mcqs: [
    {
      question:
        'What does RGB stand for?',

      options: [
        'Red Green Blue',
        'Random Green Blue',
        'Red Gray Black',
        'Red Gold Brown'
      ],

      answer: 0,

      explanation:
        'RGB stands for Red, Green, and Blue.',
    },

    {
      question:
        'Which color format supports transparency?',

      options: [
        'HEX',
        'RGB',
        'RGBA',
        'HSL'
      ],

      answer: 2,

      explanation:
        'RGBA includes an alpha value for transparency.',
    },

    {
      question:
        'What is the HEX code for white?',

      options: [
        '#000000',
        '#FFFFFF',
        '#FF0000',
        '#00FF00'
      ],

      answer: 1,

      explanation:
        '#FFFFFF represents white color.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What are the different ways to specify colors in HTML?',

      answer:
        'Colors can be specified using color names, HEX values, RGB, RGBA, and HSL formats.',
    },

    {
      question:
        'What is the difference between RGB and RGBA?',

      answer:
        'RGB defines colors using red, green, and blue values, while RGBA adds an alpha channel for transparency.',
    },
  ],

  nextTopic: 'html-css-introduction',
},

{
  id: 'html-css-introduction',

  title: 'HTML CSS Introduction',

  slug: 'html-css-introduction',

  image:
    'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2',

  readTime: '45 min read',

  difficulty: 'Beginner',

  description:
    'Learn HTML CSS Introduction deeply including what CSS is, why CSS is needed, types of CSS, advantages, and interview concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Infosys', 'Wipro'],

  sections: [
    {
      heading: 'HTML CSS Introduction',

      content: `
• What is CSS?

• Why CSS is Needed

• HTML vs CSS

• Types of CSS

• Inline CSS

• Internal CSS

• External CSS

• Advantages of CSS

• Interview Concepts
`,
    },

    {
      heading: 'What is CSS?',

      content: `
CSS stands for Cascading Style Sheets.

CSS is used to style and design HTML webpages.

HTML creates the structure of a webpage, while CSS controls its appearance.

Examples of styling:

• Colors

• Fonts

• Layouts

• Animations

• Spacing

• Responsive Design
`,
    },

    {
      heading: 'Why CSS is Needed?',

      content: `
Without CSS, webpages would look plain and unattractive.

CSS helps:

• Improve appearance

• Create modern designs

• Enhance user experience

• Build responsive websites

• Maintain consistency

CSS transforms simple HTML pages into professional websites.
`,
    },

    {
      heading: 'HTML vs CSS',

      content: `
HTML:

• Creates webpage structure

• Defines content

• Uses tags

CSS:

• Styles webpage content

• Controls appearance

• Uses selectors and properties

HTML and CSS work together to build modern websites.
`,
    },

    {
      heading: 'Types of CSS',

      content: `
There are three main ways to apply CSS:

1. Inline CSS

2. Internal CSS

3. External CSS

Each method has different use cases.
`,
    },

    {
      heading: 'Inline CSS',

      content: `
Inline CSS is written directly inside an HTML element.

Example:

<h1 style="color:red;">
Hello
</h1>

Advantages:

• Quick styling

Disadvantages:

• Hard to maintain

• Not suitable for large projects
`,
    },

    {
      heading: 'Internal CSS',

      content: `
Internal CSS is written inside the style tag.

Example:

<style>
h1 {
    color: blue;
}
</style>

Advantages:

• Better organization

• Useful for single-page projects
`,
    },

    {
      heading: 'External CSS',

      content: `
External CSS is stored in a separate file.

Example:

style.css

Linked using:

<link rel="stylesheet" href="style.css">

Advantages:

• Reusable

• Easy maintenance

• Professional approach

External CSS is the most commonly used method.
`,
    },

    {
      heading: 'Advantages of CSS',

      content: `
• Better design

• Faster development

• Reusable styles

• Responsive layouts

• Cleaner code

• Easier maintenance
`,
    },

    {
      heading: 'Real-world Uses of CSS',

      content: `
CSS is used in:

• Business Websites

• Portfolios

• E-commerce Stores

• Dashboards

• Blogs

• Social Media Platforms

• Educational Websites
`,
    },

    {
      heading: 'Important Points About CSS',

      content: `
• CSS styles HTML elements

• CSS improves user experience

• External CSS is most commonly used

• CSS supports responsive design

• CSS reduces code duplication

Common Beginner Mistakes:

• Overusing inline CSS

• Mixing HTML and CSS excessively

• Forgetting to link external CSS files

• Writing duplicate styles
`,
    },
  ],

  codeExamples: [
    {
      title: 'Inline CSS Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

    <h1 style="color:red;">
        Welcome to CSS
    </h1>

</body>

</html>`,

      output:
        'Displays a red colored heading.',
    },

    {
      title: 'Internal CSS Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<head>

<style>

h1 {
    color: blue;
}

</style>

</head>

<body>

    <h1>HTML and CSS</h1>

</body>

</html>`,

      output:
        'Displays a blue colored heading.',
    },
  ],

  mcqs: [
    {
      question:
        'What does CSS stand for?',

      options: [
        'Computer Style Sheets',
        'Cascading Style Sheets',
        'Creative Style Sheets',
        'Color Style System'
      ],

      answer: 1,

      explanation:
        'CSS stands for Cascading Style Sheets.',
    },

    {
      question:
        'Which CSS type is most suitable for large projects?',

      options: [
        'Inline CSS',
        'Internal CSS',
        'External CSS',
        'Embedded CSS'
      ],

      answer: 2,

      explanation:
        'External CSS provides better organization and reusability.',
    },

    {
      question:
        'What is the primary purpose of CSS?',

      options: [
        'Store Data',
        'Style Webpages',
        'Create Databases',
        'Compile HTML'
      ],

      answer: 1,

      explanation:
        'CSS is used to style and design webpages.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is CSS and why is it used?',

      answer:
        'CSS is a stylesheet language used to control the appearance, layout, and design of HTML webpages.',
    },

    {
      question:
        'What are the three types of CSS?',

      answer:
        'The three types of CSS are Inline CSS, Internal CSS, and External CSS.',
    },
  ],

  nextTopic: 'html-links',
},
{
  id: 'html-links',

  title: 'HTML Links',

  slug: 'html-links',

  image:
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa',

  readTime: '60 min read',

  difficulty: 'Beginner',

  description:
    'Learn HTML Links deeply including hyperlinks, absolute URLs, relative URLs, target attribute, bookmarks, email links, image links, and interview concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Infosys', 'TCS'],

  sections: [
    {
      heading: 'HTML Links',

      content: `
• What are HTML Links?

• Why Links are Important

• Anchor Tag

• Absolute URLs

• Relative URLs

• Target Attribute

• Email Links

• Telephone Links

• Image Links

• Bookmark Links

• Link States

• Best Practices

• Interview Concepts
`,
    },

    {
      heading: 'What are HTML Links?',

      content: `
HTML links are used to connect one webpage to another webpage, document, file, section, or external resource.

Links are one of the most important features of the World Wide Web because they allow users to navigate between different pages.

Without hyperlinks, websites would behave like isolated documents instead of interconnected web pages.

HTML uses the anchor tag (a) to create hyperlinks.
`,
    },

    {
      heading: 'Why are Links Important?',

      content: `
Links are the foundation of web navigation.

Benefits of links:

• Connect webpages together

• Improve website navigation

• Help users access information quickly

• Improve SEO

• Allow downloading files

• Enable communication through email links

• Connect internal and external resources

Almost every website depends heavily on hyperlinks.
`,
    },

    {
      heading: 'Anchor Tag in HTML',

      content: `
The anchor tag is used to create hyperlinks.

Syntax:

<a href="URL">Link Text</a>

Example:

<a href="https://www.google.com">
Google
</a>

Here:

• a = Anchor Tag

• href = Destination Address

• Google = Clickable Text

When users click the link, the browser navigates to the specified destination.
`,
    },

    {
      heading: 'The href Attribute',

      content: `
The href attribute stands for Hypertext Reference.

It specifies where the link should go.

Example:

<a href="about.html">
About Us
</a>

Without href, a hyperlink cannot navigate anywhere.

The href attribute is one of the most important attributes in HTML.
`,
    },

    {
      heading: 'Absolute URLs',

      content: `
Absolute URLs contain the complete web address.

Example:

https://www.google.com

https://www.youtube.com

Example:

<a href="https://www.google.com">
Visit Google
</a>

Use absolute URLs when linking to external websites.

Advantages:

• Direct access

• Works from any location

• Suitable for external resources
`,
    },

    {
      heading: 'Relative URLs',

      content: `
Relative URLs point to files inside the same website.

Example:

<a href="about.html">
About Page
</a>

Folder Example:

<a href="pages/contact.html">
Contact Page
</a>

Advantages:

• Shorter URLs

• Easier maintenance

• Better for internal navigation

Most website navigation menus use relative URLs.
`,
    },

    {
      heading: 'Target Attribute',

      content: `
The target attribute controls where the linked document opens.

Common values:

• _self

• _blank

• _parent

• _top

Example:

<a href="https://www.google.com"
   target="_blank">
Google
</a>

The link opens in a new browser tab.
`,
    },

    {
      heading: 'Understanding Target Values',

      content: `
_target="_self"

• Default behavior

• Opens in same tab

_target="_blank"

• Opens in new tab

_target="_parent"

• Opens in parent frame

_target="_top"

• Opens in full window

Most external links use _blank.
`,
    },

    {
      heading: 'Email Links',

      content: `
HTML can open the user's email application.

Syntax:

<a href="mailto:example@gmail.com">
Send Email
</a>

Example:

<a href="mailto:support@company.com">
Contact Support
</a>

When clicked, the default email application opens automatically.
`,
    },

    {
      heading: 'Telephone Links',

      content: `
HTML can create clickable phone numbers.

Syntax:

<a href="tel:+919876543210">
Call Now
</a>

This is especially useful on mobile devices.

Users can directly call the specified number.
`,
    },

    {
      heading: 'Image as a Link',

      content: `
Images can also be used as hyperlinks.

Example:

<a href="https://www.google.com">

    <img src="logo.png"
         alt="Google">

</a>

When users click the image, the browser navigates to the destination URL.
`,
    },

    {
      heading: 'Bookmark Links',

      content: `
Bookmark links allow users to jump to a specific section of the same webpage.

Step 1:

Assign an id.

<h2 id="html">HTML Section</h2>

Step 2:

Create a link.

<a href="#html">
Go to HTML Section
</a>

Bookmarks improve navigation on long webpages.
`,
    },

    {
      heading: 'Link States in HTML',

      content: `
Links can exist in different states.

Important states:

• Unvisited Link

• Visited Link

• Hovered Link

• Active Link

CSS is commonly used to style these states.

Example:

a:hover

a:visited

a:active
`,
    },

    {
      heading: 'Opening Files Using Links',

      content: `
Links can open:

• PDF Files

• Images

• Documents

• Videos

Example:

<a href="resume.pdf">
Download Resume
</a>

The browser opens or downloads the file depending on its configuration.
`,
    },

    {
      heading: 'Download Attribute',

      content: `
The download attribute forces file download.

Example:

<a href="notes.pdf" download>
Download Notes
</a>

Benefits:

• Improves user experience

• Useful for downloadable resources

• Commonly used in educational websites
`,
    },

    {
      heading: 'SEO Benefits of Links',

      content: `
Search engines use links to discover webpages.

Benefits:

• Faster indexing

• Better website structure

• Improved navigation

• Higher crawl efficiency

Proper linking improves website visibility.
`,
    },

    {
      heading: 'Best Practices for HTML Links',

      content: `
Recommended practices:

• Use meaningful link text

• Avoid generic text like "Click Here"

• Use relative URLs for internal pages

• Use _blank for external websites

• Provide descriptive destinations

• Test all links regularly

• Use proper accessibility labels
`,
    },

    {
      heading: 'Advantages of HTML Links',

      content: `
• Easy navigation

• Better user experience

• Website connectivity

• Improved SEO

• Resource sharing

• File downloads

• Better accessibility
`,
    },

    {
      heading: 'Important Points About HTML Links',

      content: `
• Links are created using the anchor tag

• href specifies the destination

• Absolute URLs link external websites

• Relative URLs link internal pages

• target controls opening behavior

• Bookmark links navigate within pages

• Email and phone links improve communication

Common Beginner Mistakes:

• Forgetting href attribute

• Using broken URLs

• Using wrong relative paths

• Overusing target="_blank"

• Writing unclear link text
`,
    },
  ],

  codeExamples: [
    {
      title: 'Basic HTML Link Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

    <a href="https://www.google.com">
        Visit Google
    </a>

</body>

</html>`,

      output:
        'Displays a clickable hyperlink that opens Google.',
    },

    {
      title: 'Target Attribute Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

    <a href="https://www.google.com"
       target="_blank">
       Open Google
    </a>

</body>

</html>`,

      output:
        'Google opens in a new browser tab.',
    },

    {
      title: 'Bookmark Link Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

<a href="#contact">
Go to Contact Section
</a>

<h2 id="contact">
Contact Information
</h2>

<p>Email: info@example.com</p>

</body>

</html>`,

      output:
        'Clicking the link jumps directly to the Contact section.',
    },
  ],

  mcqs: [
    {
      question:
        'Which HTML tag is used to create hyperlinks?',

      options: [
        '<link>',
        '<a>',
        '<href>',
        '<url>'
      ],

      answer: 1,

      explanation:
        'The anchor (a) tag is used to create hyperlinks.',
    },

    {
      question:
        'Which attribute specifies the destination of a link?',

      options: [
        'src',
        'href',
        'target',
        'alt'
      ],

      answer: 1,

      explanation:
        'The href attribute specifies where the hyperlink should navigate.',
    },

    {
      question:
        'Which target value opens a link in a new tab?',

      options: [
        '_self',
        '_top',
        '_blank',
        '_parent'
      ],

      answer: 2,

      explanation:
        '_blank opens the linked document in a new tab or window.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is the difference between absolute and relative URLs?',

      answer:
        'Absolute URLs contain the complete web address and are used for external websites, while relative URLs specify paths within the same website.',
    },

    {
      question:
        'What is the purpose of the href attribute in HTML?',

      answer:
        'The href attribute specifies the destination URL that the browser should open when a hyperlink is clicked.',
    },
  ],

  nextTopic: 'html-images',
},
{
  id: 'html-images',

  title: 'HTML Images',

  slug: 'html-images',

  image:
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',

  readTime: '65 min read',

  difficulty: 'Beginner',

  description:
    'Learn HTML Images deeply including image insertion, image paths, alt attribute, image sizing, image maps, picture element, responsive images, lazy loading, SEO, and interview concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Infosys', 'TCS'],

  sections: [
    {
      heading: 'HTML Images',

      content: `
• What are HTML Images?

• Why Images are Important

• Image Tag

• src Attribute

• alt Attribute

• Width and Height

• Image Paths

• Absolute and Relative Paths

• Image Links

• Animated Images

• Image Maps

• Background Images

• Responsive Images

• Picture Element

• Lazy Loading

• SEO and Accessibility

• Interview Concepts
`,
    },

    {
      heading: 'What are HTML Images?',

      content: `
Images are graphical elements displayed on webpages.

They help users understand information more quickly than text alone.

Images improve:

• User Experience

• Visual Appeal

• Content Engagement

• Branding

• Communication

Modern websites rely heavily on images to create attractive and interactive user interfaces.
`,
    },

    {
      heading: 'Why Images are Important?',

      content: `
Images make webpages more attractive and informative.

Benefits:

• Improve engagement

• Increase readability

• Explain concepts visually

• Support branding

• Improve user retention

A webpage with properly optimized images often performs better than one containing only text.
`,
    },

    {
      heading: 'The Image Tag',

      content: `
HTML uses the img tag to display images.

Syntax:

<img src="image.jpg" alt="Description">

The img tag is an empty element.

It does not require a closing tag.

The browser loads and displays the image specified in the src attribute.
`,
    },

    {
      heading: 'Understanding the src Attribute',

      content: `
The src attribute specifies the image source.

Example:

<img src="car.jpg">

The browser searches for the image file and displays it on the webpage.

Without the src attribute, the browser does not know which image to display.
`,
    },

    {
      heading: 'Understanding the alt Attribute',

      content: `
The alt attribute provides alternative text for an image.

Example:

<img src="car.jpg"
     alt="Red Sports Car">

The alt text appears when:

• The image fails to load

• Screen readers access the page

• Search engines analyze content

The alt attribute is extremely important for accessibility and SEO.
`,
    },

    {
      heading: 'Why Alt Text is Important?',

      content: `
Benefits of alt text:

• Helps visually impaired users

• Improves accessibility

• Improves SEO

• Provides fallback information

• Helps search engines understand images

Every meaningful image should have descriptive alt text.
`,
    },

    {
      heading: 'Setting Width and Height',

      content: `
Width and height control image dimensions.

Example:

<img
src="nature.jpg"
width="400"
height="300">

Benefits:

• Better layout control

• Faster rendering

• Reduced layout shifting

Image dimensions should be specified whenever possible.
`,
    },

    {
      heading: 'Image Paths in HTML',

      content: `
Image paths tell the browser where images are stored.

Common path types:

• Relative Path

• Absolute Path

Choosing the correct path is important for displaying images successfully.
`,
    },

    {
      heading: 'Relative Image Paths',

      content: `
Relative paths reference files inside the project.

Example:

<img src="images/logo.png">

Folder Example:

<img src="assets/images/car.jpg">

Advantages:

• Easy maintenance

• Faster project deployment

• Recommended for websites
`,
    },

    {
      heading: 'Absolute Image Paths',

      content: `
Absolute paths contain complete URLs.

Example:

<img src="https://example.com/logo.png">

Advantages:

• Works from anywhere

• Useful for external resources

Disadvantages:

• Depends on external server availability
`,
    },

    {
      heading: 'Image as a Hyperlink',

      content: `
Images can be made clickable.

Example:

<a href="https://google.com">

<img
src="logo.png"
alt="Google Logo">

</a>

When users click the image, the browser opens the specified webpage.
`,
    },

    {
      heading: 'Animated Images',

      content: `
HTML can display GIF images.

Example:

<img src="animation.gif">

Uses:

• Loading Indicators

• Tutorials

• Demonstrations

• Marketing Content

GIF images add simple animations without JavaScript.
`,
    },

    {
      heading: 'Image Maps',

      content: `
Image maps allow different parts of an image to be clickable.

Uses:

• Navigation Menus

• Product Catalogs

• Interactive Diagrams

• Educational Content

Image maps create multiple clickable regions within a single image.
`,
    },

    {
      heading: 'Background Images',

      content: `
Images can be used as page backgrounds.

Example:

<body
style="background-image:url('bg.jpg')">

Background images improve design and branding.

CSS is usually used to manage background images effectively.
`,
    },

    {
      heading: 'Responsive Images',

      content: `
Responsive images automatically adjust to different screen sizes.

Benefits:

• Mobile Friendly

• Faster Loading

• Better User Experience

• Improved Performance

Responsive images are essential for modern websites.
`,
    },

    {
      heading: 'Picture Element',

      content: `
The picture element provides multiple image versions.

Example:

<picture>

<source media="(max-width:600px)"
srcset="mobile.jpg">

<img src="desktop.jpg"
alt="Nature">

</picture>

The browser selects the most suitable image based on screen size.
`,
    },

    {
      heading: 'Lazy Loading Images',

      content: `
Lazy loading delays image loading until needed.

Example:

<img
src="nature.jpg"
loading="lazy"
alt="Nature">

Benefits:

• Faster page loading

• Reduced bandwidth usage

• Better performance

• Improved user experience
`,
    },

    {
      heading: 'Image SEO Best Practices',

      content: `
To improve SEO:

• Use descriptive file names

• Add meaningful alt text

• Compress large images

• Use proper dimensions

• Enable lazy loading

• Use modern formats when possible

Optimized images help improve search rankings.
`,
    },

    {
      heading: 'Accessibility Best Practices',

      content: `
Accessibility recommendations:

• Always use alt text

• Avoid text embedded inside images

• Maintain sufficient contrast

• Use descriptive image labels

• Support screen readers

Accessible websites serve a wider audience.
`,
    },

    {
      heading: 'Common Image Formats',

      content: `
Popular image formats:

• JPG / JPEG

• PNG

• GIF

• SVG

• WebP

Each format has different strengths and use cases.
`,
    },

    {
      heading: 'JPG vs PNG vs SVG',

      content: `
JPG:

• Small file size

• Best for photographs

PNG:

• Supports transparency

• Better quality graphics

SVG:

• Vector format

• Infinite scalability

• Ideal for logos and icons
`,
    },

    {
      heading: 'Advantages of HTML Images',

      content: `
• Better user engagement

• Improved visual design

• Strong branding

• Better communication

• Enhanced SEO

• Increased user retention
`,
    },

    {
      heading: 'Important Points About HTML Images',

      content: `
• Images use the img tag

• src specifies image location

• alt improves accessibility

• Width and height control dimensions

• Relative paths are commonly used

• Responsive images support multiple devices

• Lazy loading improves performance

Common Beginner Mistakes:

• Missing alt attributes

• Wrong image paths

• Using oversized images

• Ignoring responsiveness

• Using poor quality images

• Not optimizing image size
`,
    },
  ],

  codeExamples: [
    {
      title: 'Basic Image Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

<img
src="nature.jpg"
alt="Beautiful Nature">

</body>

</html>`,

      output:
        'Displays the image named nature.jpg.',
    },

    {
      title: 'Image with Width and Height',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

<img
src="car.jpg"
alt="Sports Car"
width="400"
height="250">

</body>

</html>`,

      output:
        'Displays an image with custom dimensions.',
    },

    {
      title: 'Clickable Image Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

<a href="https://google.com">

<img
src="logo.png"
alt="Google Logo">

</a>

</body>

</html>`,

      output:
        'Clicking the image opens Google.',
    },
  ],

  mcqs: [
    {
      question:
        'Which HTML tag is used to display images?',

      options: [
        '<image>',
        '<img>',
        '<picture>',
        '<photo>'
      ],

      answer: 1,

      explanation:
        'The img tag is used to display images in HTML.',
    },

    {
      question:
        'Which attribute specifies image location?',

      options: [
        'href',
        'alt',
        'src',
        'target'
      ],

      answer: 2,

      explanation:
        'The src attribute specifies the image source.',
    },

    {
      question:
        'Why is the alt attribute important?',

      options: [
        'Changes image size',
        'Adds animation',
        'Provides alternative text and accessibility support',
        'Downloads image faster'
      ],

      answer: 2,

      explanation:
        'The alt attribute improves accessibility and provides fallback text.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is the purpose of the alt attribute in HTML images?',

      answer:
        'The alt attribute provides alternative text when images fail to load and helps screen readers and search engines understand image content.',
    },

    {
      question:
        'What is the difference between relative and absolute image paths?',

      answer:
        'Relative paths reference files within the project structure, while absolute paths use complete URLs pointing to external resources.',
    },
  ],

  nextTopic: 'html-favicon',
},
{
  id: 'html-favicon',

  title: 'HTML Favicon',

  slug: 'html-favicon',

  image:
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',

  readTime: '25 min read',

  difficulty: 'Beginner',

  description:
    'Learn HTML Favicons deeply including favicon creation, implementation, supported formats, browser behavior, SEO considerations, and interview concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Infosys', 'Wipro'],

  sections: [
    {
      heading: 'HTML Favicon',

      content: `
• What is a Favicon?

• Why Favicons are Important

• Adding a Favicon

• Favicon File Formats

• Browser Support

• Multiple Favicons

• Best Practices

• Common Mistakes

• Interview Concepts
`,
    },

    {
      heading: 'What is a Favicon?',

      content: `
A favicon is the small icon displayed next to a webpage title in a browser tab.

The word favicon comes from "Favorite Icon".

Favicons help users quickly identify websites among multiple open tabs.

Examples:

• Google Logo

• YouTube Logo

• Facebook Logo

• Amazon Logo

Almost every professional website uses a favicon.
`,
    },

    {
      heading: 'Why Favicons are Important?',

      content: `
Favicons improve user experience and website branding.

Benefits:

• Improves website recognition

• Makes browser tabs easier to identify

• Enhances professional appearance

• Improves bookmarking experience

• Supports brand identity

A website without a favicon often appears incomplete.
`,
    },

    {
      heading: 'How to Add a Favicon?',

      content: `
Favicons are added inside the head section of an HTML document.

Syntax:

<link
rel="icon"
type="image/x-icon"
href="favicon.ico">

The browser automatically loads and displays the favicon in the tab.
`,
    },

    {
      heading: 'Basic Favicon Example',

      content: `
Example:

<head>

<link
rel="icon"
href="favicon.png">

</head>

The favicon file should be available at the specified location.
`,
    },

    {
      heading: 'Understanding the Link Tag',

      content: `
The favicon uses the link tag.

Important attributes:

• rel

• href

• type

rel="icon"

Indicates that the linked file is a favicon.

href

Specifies the favicon file location.

type

Specifies the image format.
`,
    },

    {
      heading: 'Supported Favicon Formats',

      content: `
Common favicon formats:

• ICO

• PNG

• JPG

• GIF

• SVG

PNG is widely used because it provides good quality and transparency support.
`,
    },

    {
      heading: 'ICO Format',

      content: `
ICO is the traditional favicon format.

Example:

favicon.ico

Advantages:

• Broad browser support

• Small file size

• Multiple resolutions supported

Many websites still use ICO files.
`,
    },

    {
      heading: 'PNG Format',

      content: `
PNG is currently one of the most popular favicon formats.

Advantages:

• Better image quality

• Transparency support

• Easy creation

• Modern browser support

PNG favicons are recommended for most projects.
`,
    },

    {
      heading: 'SVG Favicons',

      content: `
SVG favicons are vector-based.

Advantages:

• Infinite scalability

• Small file size

• High quality on all devices

SVG favicons are becoming increasingly popular in modern web development.
`,
    },

    {
      heading: 'Where Favicons Appear?',

      content: `
Favicons can appear in:

• Browser tabs

• Bookmarks

• Browser history

• Mobile shortcuts

• Search results in some cases

• Progressive Web Apps

This makes them an important branding element.
`,
    },

    {
      heading: 'Using Multiple Favicons',

      content: `
Modern websites sometimes provide multiple favicon sizes.

Example:

<link
rel="icon"
sizes="32x32"
href="favicon-32.png">

<link
rel="icon"
sizes="16x16"
href="favicon-16.png">

Browsers automatically choose the most suitable version.
`,
    },

    {
      heading: 'Best Practices for Favicons',

      content: `
Recommended practices:

• Use a simple design

• Keep icons recognizable

• Use square dimensions

• Optimize file size

• Provide multiple sizes

• Maintain brand consistency

Simple favicons are easier to recognize.
`,
    },

    {
      heading: 'Common Favicon Sizes',

      content: `
Popular favicon sizes:

• 16 × 16

• 32 × 32

• 48 × 48

• 64 × 64

• 180 × 180

Different devices may require different sizes.
`,
    },

    {
      heading: 'Advantages of Favicons',

      content: `
• Professional appearance

• Better branding

• Improved user experience

• Easier navigation

• Increased website recognition

• Better bookmarking visibility
`,
    },

    {
      heading: 'Common Beginner Mistakes',

      content: `
Many beginners make these mistakes:

• Wrong file path

• Missing favicon file

• Very large image size

• Complex designs

• Forgetting browser cache refresh

Sometimes browsers cache old favicons, so changes may not appear immediately.
`,
    },

    {
      heading: 'Important Points About HTML Favicons',

      content: `
• Favicons are small website icons

• Added using the link tag

• Usually placed inside head

• PNG and ICO are common formats

• Favicons improve branding

• Multiple favicon sizes can be provided

Favicons are a small feature but greatly improve the professional look of a website.
`,
    },
  ],

  codeExamples: [
    {
      title: 'Basic Favicon Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<head>

<link
rel="icon"
href="favicon.png">

</head>

<body>

<h1>My Website</h1>

</body>

</html>`,

      output:
        'The favicon appears in the browser tab.',
    },
  ],

  mcqs: [
    {
      question:
        'What is a favicon?',

      options: [
        'A webpage layout',
        'A small website icon',
        'A CSS framework',
        'An HTML heading'
      ],

      answer: 1,

      explanation:
        'A favicon is a small icon displayed in browser tabs and bookmarks.',
    },

    {
      question:
        'Which HTML tag is used to add a favicon?',

      options: [
        '<img>',
        '<meta>',
        '<link>',
        '<icon>'
      ],

      answer: 2,

      explanation:
        'Favicons are added using the link tag inside the head section.',
    },

    {
      question:
        'Which favicon format is traditionally used?',

      options: [
        'PNG',
        'SVG',
        'ICO',
        'JPG'
      ],

      answer: 2,

      explanation:
        'ICO is the traditional favicon format.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is a favicon and why is it used?',

      answer:
        'A favicon is a small icon associated with a website that improves branding, recognition, and user experience in browser tabs and bookmarks.',
    },

    {
      question:
        'Where should a favicon be defined in HTML?',

      answer:
        'A favicon should be defined inside the head section using the link tag with rel="icon".',
    },
  ],

  nextTopic: 'html-tables',
},

{
  id: 'html-tables',

  title: 'HTML Tables',

  slug: 'html-tables',

  image:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71',

  readTime: '70 min read',

  difficulty: 'Beginner',

  description:
    'Learn HTML Tables deeply including rows, columns, table headers, colspan, rowspan, captions, table sections, accessibility, and interview concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Infosys', 'TCS'],

  sections: [
    {
      heading: 'HTML Tables',

      content: `
• What are HTML Tables?

• Why Tables are Used

• Table Structure

• table Tag

• tr Tag

• th Tag

• td Tag

• Table Borders

• Cell Padding

• Cell Spacing

• Colspan

• Rowspan

• Table Caption

• thead

• tbody

• tfoot

• Responsive Tables

• Accessibility

• Interview Concepts
`,
    },

    {
      heading: 'What are HTML Tables?',

      content: `
HTML tables are used to organize and display data in rows and columns.

Tables help present structured information clearly.

Examples:

• Student Records

• Employee Details

• Product Lists

• Sales Reports

• Timetables

Tables should be used only for tabular data and not for webpage layouts.
`,
    },

    {
      heading: 'Why Tables are Important?',

      content: `
Tables make large amounts of data easier to read and understand.

Benefits:

• Organized presentation

• Better readability

• Easy comparison

• Structured information

• Professional reporting

Tables are commonly used in dashboards, reports, and management systems.
`,
    },

    {
      heading: 'Basic Structure of a Table',

      content: `
A table consists of:

• Rows

• Columns

• Headers

• Data Cells

Main tags:

• table

• tr

• th

• td

These tags work together to create a complete table.
`,
    },

    {
      heading: 'table Tag',

      content: `
The table tag creates the table container.

Syntax:

<table>

</table>

All rows, headers, and cells must be placed inside the table tag.
`,
    },

    {
      heading: 'tr Tag (Table Row)',

      content: `
The tr tag creates a row.

Syntax:

<tr>

</tr>

Each row can contain multiple header cells or data cells.
`,
    },

    {
      heading: 'th Tag (Table Header)',

      content: `
The th tag defines a header cell.

Example:

<th>Name</th>

<th>Age</th>

Browsers usually display headers in bold and centered format.
`,
    },

    {
      heading: 'td Tag (Table Data)',

      content: `
The td tag stores actual table data.

Example:

<td>Rahul</td>

<td>21</td>

Most table content is placed inside td elements.
`,
    },

    {
      heading: 'Creating a Simple Table',

      content: `
Example structure:

<table>

<tr>
<th>Name</th>
<th>Age</th>
</tr>

<tr>
<td>Rahul</td>
<td>21</td>
</tr>

</table>

This creates a simple two-column table.
`,
    },

    {
      heading: 'Table Borders',

      content: `
Borders help separate table cells.

Example:

<table border="1">

Although modern websites use CSS for borders, understanding border attributes helps beginners understand table structure.
`,
    },

    {
      heading: 'Cell Padding',

      content: `
Cell padding creates space between content and cell borders.

Benefits:

• Better readability

• Cleaner design

• Improved appearance

CSS is commonly used to control padding.
`,
    },

    {
      heading: 'Cell Spacing',

      content: `
Cell spacing creates space between table cells.

Benefits:

• Better visual separation

• Cleaner layouts

Modern projects usually use CSS instead of HTML attributes.
`,
    },

    {
      heading: 'Colspan Attribute',

      content: `
Colspan allows a cell to span multiple columns.

Example:

<td colspan="2">
Student Information
</td>

Uses:

• Merged headers

• Section titles

• Complex tables
`,
    },

    {
      heading: 'Rowspan Attribute',

      content: `
Rowspan allows a cell to span multiple rows.

Example:

<td rowspan="2">
Admin
</td>

Uses:

• Categorized data

• Hierarchical information

• Report tables
`,
    },

    {
      heading: 'Table Caption',

      content: `
The caption tag provides a title for the table.

Example:

<caption>
Student Data
</caption>

Benefits:

• Better accessibility

• Clear table description

• Professional presentation
`,
    },

    {
      heading: 'thead Element',

      content: `
The thead element groups header content.

Example:

<thead>

<tr>
<th>Name</th>
</tr>

</thead>

Benefits:

• Better structure

• Easier styling

• Improved accessibility
`,
    },

    {
      heading: 'tbody Element',

      content: `
The tbody element groups table body data.

Example:

<tbody>

<tr>
<td>Rahul</td>
</tr>

</tbody>

It improves table organization.
`,
    },

    {
      heading: 'tfoot Element',

      content: `
The tfoot element groups footer information.

Example:

<tfoot>

<tr>
<td>Total</td>
</tr>

</tfoot>

Useful in reports and financial tables.
`,
    },

    {
      heading: 'Responsive Tables',

      content: `
Modern websites should support mobile devices.

Responsive tables:

• Adapt to smaller screens

• Improve usability

• Enhance user experience

CSS is often used to create responsive table layouts.
`,
    },

    {
      heading: 'Table Accessibility',

      content: `
Accessibility recommendations:

• Use table headers

• Add captions

• Use semantic structure

• Avoid unnecessary complexity

Accessible tables are easier for screen readers to understand.
`,
    },

    {
      heading: 'Advantages of HTML Tables',

      content: `
• Structured data display

• Easy comparison

• Better readability

• Professional reporting

• Organized information
`,
    },

    {
      heading: 'Important Points About HTML Tables',

      content: `
• table creates the table

• tr creates rows

• th creates headers

• td creates data cells

• colspan merges columns

• rowspan merges rows

• caption describes the table

Common Beginner Mistakes:

• Using tables for page layout

• Missing header cells

• Incorrect row structure

• Overcomplicated tables

• Ignoring accessibility
`,
    },
  ],

  codeExamples: [
    {
      title: 'Basic HTML Table Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

<table border="1">

<tr>
<th>Name</th>
<th>Age</th>
</tr>

<tr>
<td>Rahul</td>
<td>21</td>
</tr>

<tr>
<td>Priya</td>
<td>22</td>
</tr>

</table>

</body>

</html>`,

      output:
        'Displays a table with Name and Age columns.',
    },
  ],

  mcqs: [
    {
      question:
        'Which tag creates a table row?',

      options: [
        '<td>',
        '<tr>',
        '<th>',
        '<table>'
      ],

      answer: 1,

      explanation:
        'The tr tag creates a table row.',
    },

    {
      question:
        'Which tag creates a table header cell?',

      options: [
        '<th>',
        '<td>',
        '<tr>',
        '<thead>'
      ],

      answer: 0,

      explanation:
        'The th tag creates a header cell.',
    },

    {
      question:
        'Which attribute merges multiple columns?',

      options: [
        'rowspan',
        'merge',
        'colspan',
        'span'
      ],

      answer: 2,

      explanation:
        'The colspan attribute merges multiple columns.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is the difference between th and td tags?',

      answer:
        'The th tag defines table header cells, while the td tag defines normal data cells.',
    },

    {
      question:
        'What are colspan and rowspan in HTML tables?',

      answer:
        'Colspan allows a cell to span multiple columns, while rowspan allows a cell to span multiple rows.',
    },
  ],

  nextTopic: 'html-lists',
},
{
  id: 'html-lists',

  title: 'HTML Lists',

  slug: 'html-lists',

  image:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',

  readTime: '65 min read',

  difficulty: 'Beginner',

  description:
    'Learn HTML Lists deeply including ordered lists, unordered lists, description lists, nested lists, list styling, real-world uses, and interview concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Infosys', 'TCS'],

  sections: [
    {
      heading: 'HTML Lists',

      content: `
• What are HTML Lists?

• Why Lists are Important

• Types of Lists

• Unordered Lists

• Ordered Lists

• Description Lists

• Nested Lists

• List Styling

• Real-world Applications

• Accessibility

• Interview Concepts
`,
    },

    {
      heading: 'What are HTML Lists?',

      content: `
HTML lists are used to display related items in a structured and organized manner.

Instead of writing information in long paragraphs, lists help break content into smaller and easier-to-read sections.

Lists improve:

• Readability

• Organization

• User Experience

• Navigation

• Content Structure

Lists are commonly used on almost every website.
`,
    },

    {
      heading: 'Why Lists are Important?',

      content: `
Lists make information easier to understand.

Benefits:

• Organize related items

• Improve readability

• Simplify navigation

• Present steps clearly

• Enhance user experience

Whenever multiple related items exist, lists are often the best choice.
`,
    },

    {
      heading: 'Types of HTML Lists',

      content: `
HTML provides three main types of lists:

1. Unordered Lists

2. Ordered Lists

3. Description Lists

Each type serves a different purpose depending on the content.
`,
    },

    {
      heading: 'Unordered Lists',

      content: `
An unordered list displays items using bullets.

The order of items does not matter.

HTML uses:

• ul tag

• li tag

Example:

<ul>

<li>HTML</li>

<li>CSS</li>

<li>JavaScript</li>

</ul>

Browsers display bullet points automatically.
`,
    },

    {
      heading: 'Understanding ul Tag',

      content: `
The ul tag stands for Unordered List.

It acts as the container for all list items.

Syntax:

<ul>

<li>Item</li>

</ul>

All list items must be placed inside the ul element.
`,
    },

    {
      heading: 'Understanding li Tag',

      content: `
The li tag stands for List Item.

It defines an individual item inside a list.

Example:

<li>HTML</li>

<li>CSS</li>

<li>JavaScript</li>

The li tag can be used in both ordered and unordered lists.
`,
    },

    {
      heading: 'Ordered Lists',

      content: `
An ordered list displays items in a specific sequence.

The order is important.

HTML uses:

• ol tag

• li tag

Example:

<ol>

<li>Wake Up</li>

<li>Study HTML</li>

<li>Practice Coding</li>

</ol>

Browsers automatically generate numbering.
`,
    },

    {
      heading: 'Why Use Ordered Lists?',

      content: `
Ordered lists are useful when sequence matters.

Examples:

• Instructions

• Recipes

• Algorithms

• Tutorials

• Procedures

Whenever steps must be followed in order, use an ordered list.
`,
    },

    {
      heading: 'Ordered List Types',

      content: `
HTML supports different numbering styles.

Examples:

type="1"

1. First
2. Second

type="A"

A. First
B. Second

type="a"

a. First
b. Second

type="I"

I. First
II. Second

type="i"

i. First
ii. Second
`,
    },

    {
      heading: 'Starting Ordered Lists from a Different Number',

      content: `
The start attribute changes the starting number.

Example:

<ol start="5">

<li>HTML</li>

<li>CSS</li>

</ol>

Output:

5. HTML

6. CSS

This is useful when continuing a sequence.
`,
    },

    {
      heading: 'Description Lists',

      content: `
Description lists are used for terms and their explanations.

HTML uses:

• dl

• dt

• dd

Example:

<dl>

<dt>HTML</dt>

<dd>Markup language for webpages</dd>

</dl>

This format is useful for definitions and glossaries.
`,
    },

    {
      heading: 'Understanding dl Tag',

      content: `
The dl tag stands for Description List.

It acts as the container for terms and descriptions.

Syntax:

<dl>

</dl>

All description items are placed inside it.
`,
    },

    {
      heading: 'Understanding dt Tag',

      content: `
The dt tag stands for Description Term.

Example:

<dt>HTML</dt>

It represents the item or term being defined.
`,
    },

    {
      heading: 'Understanding dd Tag',

      content: `
The dd tag stands for Description Definition.

Example:

<dd>HyperText Markup Language</dd>

It provides the explanation of the corresponding term.
`,
    },

    {
      heading: 'Nested Lists',

      content: `
A nested list is a list placed inside another list.

Example:

Programming

├── Frontend

│   ├── HTML

│   ├── CSS

│   └── JavaScript

└── Backend

    ├── Java

    └── Python

Nested lists help represent hierarchical information.
`,
    },

    {
      heading: 'Creating Nested Lists',

      content: `
Example:

<ul>

<li>Frontend

    <ul>

        <li>HTML</li>

        <li>CSS</li>

    </ul>

</li>

</ul>

Nested lists are frequently used in menus and navigation systems.
`,
    },

    {
      heading: 'List Styling',

      content: `
Lists can be customized using CSS.

Examples:

• Circle Bullets

• Square Bullets

• Custom Icons

• Roman Numbers

• Alphabetic Numbers

CSS provides full control over list appearance.
`,
    },

    {
      heading: 'Real-world Uses of HTML Lists',

      content: `
Lists are used in:

• Navigation Menus

• Product Features

• To-Do Lists

• Documentation

• Tutorials

• Website Footers

• FAQ Sections

• Course Content

Lists are one of the most commonly used HTML elements.
`,
    },

    {
      heading: 'Accessibility Benefits',

      content: `
Lists improve accessibility because screen readers can understand structured content more effectively.

Benefits:

• Better navigation

• Improved readability

• Enhanced user experience

• Easier content understanding

Semantic HTML always improves accessibility.
`,
    },

    {
      heading: 'Advantages of HTML Lists',

      content: `
• Organized content

• Better readability

• Improved navigation

• Easy maintenance

• Better accessibility

• Professional appearance
`,
    },

    {
      heading: 'Important Points About HTML Lists',

      content: `
• ul creates unordered lists

• ol creates ordered lists

• li creates list items

• dl creates description lists

• dt defines terms

• dd defines descriptions

• Nested lists create hierarchies

Common Beginner Mistakes:

• Forgetting li tags

• Using lists only for spacing

• Incorrect nesting

• Mixing list types unnecessarily

• Poor indentation
`,
    },
  ],

  codeExamples: [
    {
      title: 'Unordered List Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

<ul>

<li>HTML</li>

<li>CSS</li>

<li>JavaScript</li>

</ul>

</body>

</html>`,

      output:
        'Displays a bulleted list containing HTML, CSS, and JavaScript.',
    },

    {
      title: 'Ordered List Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

<ol>

<li>Install VS Code</li>

<li>Learn HTML</li>

<li>Build Projects</li>

</ol>

</body>

</html>`,

      output:
        'Displays a numbered list with three steps.',
    },

    {
      title: 'Description List Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

<dl>

<dt>HTML</dt>

<dd>Structure of a webpage</dd>

<dt>CSS</dt>

<dd>Styles a webpage</dd>

</dl>

</body>

</html>`,

      output:
        'Displays terms and their descriptions.',
    },
  ],

  mcqs: [
    {
      question:
        'Which tag creates an unordered list?',

      options: [
        '<ol>',
        '<li>',
        '<ul>',
        '<dl>'
      ],

      answer: 2,

      explanation:
        'The ul tag creates an unordered list.',
    },

    {
      question:
        'Which tag defines a list item?',

      options: [
        '<dt>',
        '<dd>',
        '<li>',
        '<list>'
      ],

      answer: 2,

      explanation:
        'The li tag defines a list item.',
    },

    {
      question:
        'Which tag is used for description lists?',

      options: [
        '<ul>',
        '<ol>',
        '<table>',
        '<dl>'
      ],

      answer: 3,

      explanation:
        'The dl tag creates a description list.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is the difference between ordered and unordered lists?',

      answer:
        'Ordered lists display items in a specific sequence using numbers or letters, while unordered lists display items using bullets where order does not matter.',
    },

    {
      question:
        'What are dl, dt, and dd tags used for?',

      answer:
        'The dl tag creates a description list, dt defines a term, and dd provides the description of that term.',
    },
  ],

  nextTopic: 'html-block-inline-elements',
},
{
  id: 'html-block-inline-elements',

  title: 'HTML Block and Inline Elements',

  slug: 'html-block-inline-elements',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '65 min read',

  difficulty: 'Beginner',

  description:
    'Learn HTML Block and Inline Elements deeply including differences, examples, behavior, div, span, layout concepts, and interview questions.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Infosys', 'TCS'],

  sections: [
    {
      heading: 'HTML Block and Inline Elements',

      content: `
• What are HTML Elements?

• Block Elements

• Inline Elements

• Differences Between Block and Inline Elements

• Common Block Elements

• Common Inline Elements

• div Element

• span Element

• Real-world Usage

• Best Practices

• Interview Concepts
`,
    },

    {
      heading: 'What are HTML Elements?',

      content: `
Every webpage is built using HTML elements.

Each element has specific behavior that determines how it appears on a webpage.

Based on display behavior, HTML elements are generally classified into:

1. Block Elements

2. Inline Elements

Understanding this concept is important because it forms the foundation of webpage layouts and CSS styling.
`,
    },

    {
      heading: 'What are Block Elements?',

      content: `
Block elements always start on a new line.

They occupy the entire available width of their parent container by default.

Even if the content inside is small, the element still takes the full width.

Characteristics:

• Starts on a new line

• Takes full available width

• Creates vertical structure

• Can contain inline and block elements

Block elements are commonly used to create page layouts and sections.
`,
    },

    {
      heading: 'How Block Elements Behave?',

      content: `
Example:

<h1>HTML</h1>

<p>Paragraph One</p>

<p>Paragraph Two</p>

Each element appears on a separate line.

The browser automatically places block elements below one another.

This behavior makes content easier to organize.
`,
    },

    {
      heading: 'Common Block Elements',

      content: `
Frequently used block elements:

• <div>

• <p>

• <h1> to <h6>

• <section>

• <article>

• <header>

• <footer>

• <nav>

• <main>

• <ul>

• <ol>

• <li>

• <table>

• <form>

These elements are widely used in webpage structure.
`,
    },

    {
      heading: 'Advantages of Block Elements',

      content: `
Benefits:

• Easy content organization

• Better page structure

• Simplified layout creation

• Responsive design support

• Improved readability

Block elements form the backbone of modern web pages.
`,
    },

    {
      heading: 'What are Inline Elements?',

      content: `
Inline elements do not start on a new line.

They occupy only the space required by their content.

Multiple inline elements can appear on the same line.

Characteristics:

• Does not start on a new line

• Uses only required width

• Flows within surrounding content

• Commonly used for styling text

Inline elements are ideal for small content pieces inside paragraphs.
`,
    },

    {
      heading: 'How Inline Elements Behave?',

      content: `
Example:

<p>
HTML is a
<span>Markup Language</span>
for webpages.
</p>

The span element remains within the same line.

Inline elements flow naturally with surrounding text.
`,
    },

    {
      heading: 'Common Inline Elements',

      content: `
Frequently used inline elements:

• <span>

• <a>

• <img>

• <strong>

• <b>

• <em>

• <i>

• <mark>

• <small>

• <sub>

• <sup>

These elements are mostly used inside text content.
`,
    },

    {
      heading: 'Advantages of Inline Elements',

      content: `
Benefits:

• Perfect for text styling

• Saves space

• Easy formatting

• Better content presentation

• Flexible integration with paragraphs

Inline elements help create rich and visually appealing content.
`,
    },

    {
      heading: 'Block Elements vs Inline Elements',

      content: `
Block Elements:

• Start on new line

• Occupy full width

• Used for page structure

• Can contain many elements

Inline Elements:

• Stay on same line

• Occupy only needed width

• Used inside content

• Ideal for formatting

Understanding this difference is one of the most important HTML concepts.
`,
    },

    {
      heading: 'The div Element',

      content: `
The div element is one of the most important block elements in HTML.

Syntax:

<div>

Content

</div>

div stands for Division.

It acts as a container that groups related content together.

Uses:

• Page layouts

• Sections

• Cards

• Containers

• Dashboards

Most modern website layouts heavily use div elements.
`,
    },

    {
      heading: 'Why div is Important?',

      content: `
The div element provides structural grouping.

Benefits:

• Easier styling

• Better organization

• Responsive layouts

• Reusable components

• Cleaner code

Almost every professional website contains multiple div containers.
`,
    },

    {
      heading: 'The span Element',

      content: `
The span element is an inline container.

Syntax:

<span>

Content

</span>

Unlike div, span does not start on a new line.

It is mainly used to style small portions of text.
`,
    },

    {
      heading: 'Why span is Important?',

      content: `
The span element allows developers to target specific words or text fragments.

Example:

<p>
Learn
<span>HTML</span>
today.
</p>

Benefits:

• Text highlighting

• Custom styling

• Dynamic content updates

• Better control over text
`,
    },

    {
      heading: 'Real-world Example of div and span',

      content: `
Consider an online course website.

div:

• Course Card

• Sidebar

• Header

• Footer

span:

• Highlighted Keywords

• Prices

• Ratings

• Labels

Together they create structured and styled content.
`,
    },

    {
      heading: 'When to Use Block Elements?',

      content: `
Use block elements when:

• Creating sections

• Building layouts

• Organizing content

• Designing webpages

• Displaying large content blocks

Block elements are ideal for page structure.
`,
    },

    {
      heading: 'When to Use Inline Elements?',

      content: `
Use inline elements when:

• Formatting text

• Creating hyperlinks

• Highlighting words

• Displaying small content pieces

• Adding icons inside text

Inline elements are ideal for content enhancement.
`,
    },

    {
      heading: 'Best Practices',

      content: `
Recommended practices:

• Use div for grouping content

• Use span for text styling

• Maintain semantic structure

• Avoid unnecessary nesting

• Use meaningful HTML elements whenever possible

Good HTML structure improves maintainability.
`,
    },

    {
      heading: 'Advantages of Understanding Block and Inline Elements',

      content: `
• Better HTML knowledge

• Easier CSS learning

• Improved layouts

• Cleaner code

• Better responsiveness

• Professional web development skills
`,
    },

    {
      heading: 'Important Points About Block and Inline Elements',

      content: `
• Block elements start on a new line

• Inline elements stay on the same line

• div is a block-level container

• span is an inline container

• Block elements are used for structure

• Inline elements are used for content formatting

Common Beginner Mistakes:

• Using div everywhere

• Confusing div and span

• Ignoring semantic HTML

• Nesting elements incorrectly

• Using block elements for text formatting
`,
    },
  ],

  codeExamples: [
    {
      title: 'Block Element Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

<h1>HTML</h1>

<p>Paragraph One</p>

<p>Paragraph Two</p>

</body>

</html>`,

      output:
        'Each element appears on a separate line because they are block elements.',
    },

    {
      title: 'Inline Element Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

<p>
Learn
<span>HTML</span>
today.
</p>

</body>

</html>`,

      output:
        'The span element remains on the same line as surrounding text.',
    },

    {
      title: 'div and span Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

<div>

<h2>Web Development</h2>

<p>
Learn
<span>HTML</span>
and CSS.
</p>

</div>

</body>

</html>`,

      output:
        'The div groups content while span styles a specific text portion.',
    },
  ],

  mcqs: [
    {
      question:
        'Which element normally starts on a new line?',

      options: [
        'span',
        'a',
        'strong',
        'div'
      ],

      answer: 3,

      explanation:
        'div is a block element and starts on a new line.',
    },

    {
      question:
        'Which element is an inline container?',

      options: [
        'div',
        'section',
        'span',
        'article'
      ],

      answer: 2,

      explanation:
        'span is an inline container element.',
    },

    {
      question:
        'Which element occupies only the required width?',

      options: [
        'Block Element',
        'Inline Element',
        'Table Element',
        'Section Element'
      ],

      answer: 1,

      explanation:
        'Inline elements occupy only the space required by their content.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is the difference between block and inline elements?',

      answer:
        'Block elements start on a new line and occupy the full available width, while inline elements stay on the same line and occupy only the width required by their content.',
    },

    {
      question:
        'What is the difference between div and span?',

      answer:
        'div is a block-level container used for grouping larger sections of content, whereas span is an inline container used for styling or targeting small portions of text.',
    },
  ],

  nextTopic: 'html-div-element',
},
{
  id: 'html-div-element',

  title: 'HTML Div Element',

  slug: 'html-div-element',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '70 min read',

  difficulty: 'Beginner',

  description:
    'Learn HTML Div Element deeply including containers, layouts, nesting, page structure, cards, sections, responsive design, and interview concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Infosys', 'TCS'],

  sections: [
    {
      heading: 'HTML Div Element',

      content: `
• What is Div?

• Why Div is Important

• Div as a Container

• Div Structure

• Nesting Divs

• Div Layouts

• Div for Website Sections

• Div Cards

• Div and CSS

• Responsive Design

• Best Practices

• Interview Concepts
`,
    },

    {
      heading: 'What is the Div Element?',

      content: `
The div element is one of the most widely used HTML elements.

The word div stands for Division.

It is a block-level container used to group related HTML elements together.

Syntax:

<div>

Content

</div>

The div element itself does not provide any visual styling.

It acts as a container that helps organize webpage content.
`,
    },

    {
      heading: 'Why is Div Important?',

      content: `
Modern websites are built using multiple div containers.

Benefits:

• Organizes content

• Creates layouts

• Improves code structure

• Simplifies CSS styling

• Helps responsive design

• Supports reusable components

Almost every webpage contains several div elements.
`,
    },

    {
      heading: 'Div as a Container',

      content: `
The primary purpose of div is grouping content.

Example:

<div>

<h2>HTML Tutorial</h2>

<p>Learn HTML step by step.</p>

</div>

In this example, the heading and paragraph belong to one logical section.

The div groups them together.
`,
    },

    {
      heading: 'Understanding Block-Level Behavior',

      content: `
The div element is a block element.

Characteristics:

• Starts on a new line

• Occupies full available width

• Can contain other elements

• Creates separate sections

Because of this behavior, div is commonly used to divide webpages into meaningful parts.
`,
    },

    {
      heading: 'Creating Website Sections Using Div',

      content: `
A webpage is usually divided into sections.

Examples:

• Header

• Navigation

• Sidebar

• Main Content

• Footer

Each section can be wrapped inside its own div.

This keeps the webpage organized and easier to maintain.
`,
    },

    {
      heading: 'Header Section Example',

      content: `
A website header often contains:

• Logo

• Website Name

• Navigation Menu

These elements can be grouped inside a div container.

Benefits:

• Better organization

• Easier styling

• Improved readability
`,
    },

    {
      heading: 'Content Section Example',

      content: `
The main content area usually contains:

• Articles

• Tutorials

• Images

• Videos

• Product Information

A div container helps group related content together.
`,
    },

    {
      heading: 'Footer Section Example',

      content: `
Website footers commonly contain:

• Copyright Information

• Contact Details

• Social Media Links

• Policies

A dedicated div keeps footer content separate from the rest of the page.
`,
    },

    {
      heading: 'Nesting Div Elements',

      content: `
A div can contain another div.

This is called nesting.

Example Structure:

Parent Div

├── Child Div 1

├── Child Div 2

└── Child Div 3

Nested divs help create complex layouts and organized webpage structures.
`,
    },

    {
      heading: 'Why Nesting is Useful?',

      content: `
Benefits of nesting:

• Better hierarchy

• Cleaner layouts

• Easier styling

• Better responsiveness

• Component-based design

Most modern websites rely heavily on nested div structures.
`,
    },

    {
      heading: 'Div Layouts',

      content: `
Divs are commonly used for layouts.

Examples:

• Two-column layouts

• Three-column layouts

• Sidebar layouts

• Dashboard layouts

• Grid systems

Before semantic HTML became popular, entire websites were often built using div elements.
`,
    },

    {
      heading: 'Creating Cards Using Div',

      content: `
Cards are common UI components.

Examples:

• Product Cards

• Course Cards

• Blog Cards

• Profile Cards

A div acts as the outer container of the card.

Additional divs may hold image, title, description, and buttons.
`,
    },

    {
      heading: 'Real-world Card Structure',

      content: `
Course Card

├── Image Div

├── Title Div

├── Description Div

└── Button Div

This structure makes the design modular and reusable.
`,
    },

    {
      heading: 'Div and CSS',

      content: `
Div becomes powerful when combined with CSS.

CSS can control:

• Width

• Height

• Background Color

• Borders

• Margins

• Padding

• Flexbox

• Grid

Without CSS, div acts only as a container.
`,
    },

    {
      heading: 'Div for Responsive Design',

      content: `
Responsive websites adapt to different screen sizes.

Div elements help create:

• Mobile layouts

• Tablet layouts

• Desktop layouts

Modern responsive design heavily depends on div containers and CSS.
`,
    },

    {
      heading: 'Div with Class Attribute',

      content: `
The class attribute is commonly used with div.

Example:

<div class="card">

Content

</div>

Benefits:

• Easier styling

• Reusable designs

• Better maintainability

Classes help identify groups of similar div elements.
`,
    },

    {
      heading: 'Div with ID Attribute',

      content: `
The id attribute uniquely identifies a div.

Example:

<div id="header">

Content

</div>

Benefits:

• Unique identification

• JavaScript targeting

• Navigation links

• Special styling
`,
    },

    {
      heading: 'Common Uses of Div',

      content: `
Div is commonly used for:

• Page Layouts

• Containers

• Navigation Bars

• Hero Sections

• Product Cards

• Dashboards

• Forms

• Footers

• Sidebars

Div is one of the most versatile HTML elements.
`,
    },

    {
      heading: 'Advantages of Div Element',

      content: `
• Better organization

• Flexible layouts

• Easy styling

• Responsive design support

• Reusable structures

• Cleaner code architecture
`,
    },

    {
      heading: 'Best Practices for Using Div',

      content: `
Recommended practices:

• Use meaningful structure

• Avoid unnecessary nesting

• Use classes appropriately

• Keep code organized

• Combine with semantic HTML when possible

Good div structure improves maintainability.
`,
    },

    {
      heading: 'Common Beginner Mistakes',

      content: `
Many beginners:

• Overuse div elements

• Create deep nesting

• Ignore semantic HTML

• Use random class names

• Build messy structures

Keeping div structures clean improves code quality.
`,
    },

    {
      heading: 'Important Points About Div Element',

      content: `
• div stands for Division

• It is a block-level element

• Used to group content

• Commonly used for layouts

• Supports nesting

• Works closely with CSS

• Used in almost every website

Understanding div is essential before learning CSS layouts and responsive design.
`,
    },
  ],

  codeExamples: [
    {
      title: 'Basic Div Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

<div>

<h2>HTML Tutorial</h2>

<p>Learn HTML step by step.</p>

</div>

</body>

</html>`,

      output:
        'The heading and paragraph are grouped inside one div container.',
    },

    {
      title: 'Nested Div Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

<div>

<h2>Parent Div</h2>

<div>

<p>Child Div Content</p>

</div>

</div>

</body>

</html>`,

      output:
        'A child div is placed inside a parent div.',
    },

    {
      title: 'Card Layout Using Div',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

<div class="card">

<h2>Java Course</h2>

<p>Learn Java from beginner to advanced.</p>

<button>Enroll Now</button>

</div>

</body>

</html>`,

      output:
        'Displays a simple course card structure.',
    },
  ],

  mcqs: [
    {
      question:
        'What does div stand for?',

      options: [
        'Division',
        'Display',
        'Device',
        'Document'
      ],

      answer: 0,

      explanation:
        'div stands for Division.',
    },

    {
      question:
        'What type of element is div?',

      options: [
        'Inline Element',
        'Block Element',
        'Table Element',
        'Media Element'
      ],

      answer: 1,

      explanation:
        'The div element is a block-level element.',
    },

    {
      question:
        'What is the primary purpose of a div element?',

      options: [
        'Play Videos',
        'Create Tables',
        'Group Content',
        'Insert Images'
      ],

      answer: 2,

      explanation:
        'The main purpose of div is to group related content together.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is the purpose of the div element in HTML?',

      answer:
        'The div element is a block-level container used to group related HTML elements for layout, styling, and organization purposes.',
    },

    {
      question:
        'What is nesting in div elements?',

      answer:
        'Nesting means placing one div element inside another div element to create hierarchical and organized webpage structures.',
    },
  ],

  nextTopic: 'html-span-element',
},
{
  id: 'html-span-element',

  title: 'HTML Span Element',

  slug: 'html-span-element',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '55 min read',

  difficulty: 'Beginner',

  description:
    'Learn HTML Span Element deeply including inline containers, text styling, highlighting content, span vs div, real-world use cases, and interview concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Infosys', 'TCS'],

  sections: [
    {
      heading: 'HTML Span Element',

      content: `
• What is Span?

• Why Span is Important

• Inline Behavior

• Span as a Container

• Styling Text with Span

• Highlighting Content

• Span and CSS

• Span vs Div

• Real-world Usage

• Best Practices

• Interview Concepts
`,
    },

    {
      heading: 'What is the Span Element?',

      content: `
The span element is an inline HTML container used to group small portions of content.

Unlike div, the span element does not start on a new line.

Syntax:

<span>

Content

</span>

The span element itself has no visual appearance.

It becomes useful when combined with CSS or JavaScript.
`,
    },

    {
      heading: 'Why is Span Important?',

      content: `
The span element allows developers to target specific words, phrases, or small content sections.

Benefits:

• Text Styling

• Content Highlighting

• Dynamic Updates

• Better Control

• Easy CSS Targeting

Without span, styling individual words would be difficult.
`,
    },

    {
      heading: 'Understanding Inline Behavior',

      content: `
The span element is an inline element.

Characteristics:

• Does not start on a new line

• Occupies only required width

• Appears with surrounding text

• Ideal for text customization

Example:

<p>
Learn <span>HTML</span> today.
</p>

The word HTML remains on the same line.
`,
    },

    {
      heading: 'Span as a Container',

      content: `
Span acts as a lightweight container.

Unlike div, it is intended for small pieces of content.

Example:

<p>
Price:
<span>$99</span>
</p>

The span isolates specific content for styling or scripting purposes.
`,
    },

    {
      heading: 'Styling Text Using Span',

      content: `
One of the most common uses of span is styling text.

Example Uses:

• Change Color

• Change Font Size

• Add Background

• Highlight Keywords

• Emphasize Important Information

Span provides precise control over content presentation.
`,
    },

    {
      heading: 'Highlighting Important Content',

      content: `
Span is commonly used to highlight important words.

Examples:

• Prices

• Keywords

• Warnings

• Offers

• Product Names

Highlighting improves readability and attracts user attention.
`,
    },

    {
      heading: 'Span and CSS',

      content: `
Span becomes powerful when combined with CSS.

CSS can control:

• Color

• Font Size

• Font Weight

• Background Color

• Borders

• Text Decoration

The span element is frequently used for custom text styling.
`,
    },

    {
      heading: 'Span with Class Attribute',

      content: `
Classes are often used with span.

Example:

<span class="price">

₹999

</span>

Benefits:

• Reusable styling

• Cleaner code

• Easy maintenance

Multiple span elements can share the same class.
`,
    },

    {
      heading: 'Span with ID Attribute',

      content: `
An ID uniquely identifies a span element.

Example:

<span id="username">

Viral

</span>

Benefits:

• Unique targeting

• JavaScript access

• Special styling

• Dynamic content updates
`,
    },

    {
      heading: 'Real-world Uses of Span',

      content: `
Span is used in:

• E-commerce websites

• Dashboards

• News Portals

• Blogs

• Educational Platforms

• Social Media Applications

It is one of the most frequently used inline elements.
`,
    },

    {
      heading: 'Product Price Example',

      content: `
E-commerce websites often highlight prices using span.

Example:

Product Name

Price: ₹999

Offer: 50% OFF

Each value can be wrapped inside separate span elements for styling.
`,
    },

    {
      heading: 'Notification Example',

      content: `
Notifications often use span.

Examples:

• New Messages

• Alerts

• Updates

• Warnings

A colored span helps users quickly identify important information.
`,
    },

    {
      heading: 'Span Inside Paragraphs',

      content: `
Span is commonly placed inside paragraphs.

Example:

<p>

Learning
<span>HTML</span>
is fun.

</p>

Only the selected word can receive special styling.
`,
    },

    {
      heading: 'Span Inside Headings',

      content: `
Span can also be used inside headings.

Example:

<h1>

Learn
<span>HTML</span>

</h1>

Useful for highlighting keywords within headings.
`,
    },

    {
      heading: 'Span vs Div',

      content: `
Span:

• Inline Element

• Uses required width

• Used for text styling

• Stays on same line

Div:

• Block Element

• Uses full width

• Used for layouts

• Starts on new line

Understanding this difference is extremely important.
`,
    },

    {
      heading: 'When to Use Span?',

      content: `
Use span when:

• Styling a word

• Highlighting text

• Adding labels

• Showing prices

• Displaying badges

• Updating small content dynamically

Span is perfect for content-level customization.
`,
    },

    {
      heading: 'When Not to Use Span?',

      content: `
Avoid span when:

• Creating page layouts

• Grouping large content sections

• Building containers

• Creating structural components

For those purposes, div or semantic elements are better choices.
`,
    },

    {
      heading: 'Advantages of Span Element',

      content: `
• Lightweight container

• Easy text styling

• Flexible design

• Better content targeting

• Works well with CSS

• Supports JavaScript interactions
`,
    },

    {
      heading: 'Best Practices',

      content: `
Recommended practices:

• Use span only for small content

• Avoid excessive nesting

• Use meaningful classes

• Keep code clean

• Combine with CSS effectively

Proper usage improves readability and maintainability.
`,
    },

    {
      heading: 'Common Beginner Mistakes',

      content: `
Many beginners:

• Use span for layouts

• Confuse span with div

• Overuse inline styling

• Add unnecessary spans

• Create deeply nested structures

Keeping span usage simple leads to cleaner code.
`,
    },

    {
      heading: 'Important Points About Span Element',

      content: `
• Span is an inline element

• Does not start on a new line

• Occupies only required width

• Used for styling small content

• Works closely with CSS

• Commonly used inside text

• Frequently paired with classes

Span is one of the most important inline elements in HTML.
`,
    },
  ],

  codeExamples: [
    {
      title: 'Basic Span Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

<p>

Learn <span>HTML</span> today.

</p>

</body>

</html>`,

      output:
        'The word HTML is wrapped inside a span element.',
    },

    {
      title: 'Span with Class Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

<p>

Price:
<span class="price">
₹999
</span>

</p>

</body>

</html>`,

      output:
        'The price value can be styled separately using CSS.',
    },

    {
      title: 'Span Inside Heading',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

<h1>

Learn
<span>HTML</span>

Today

</h1>

</body>

</html>`,

      output:
        'The HTML word can be highlighted differently from the rest of the heading.',
    },
  ],

  mcqs: [
    {
      question:
        'What type of element is span?',

      options: [
        'Block Element',
        'Table Element',
        'Inline Element',
        'Media Element'
      ],

      answer: 2,

      explanation:
        'Span is an inline element.',
    },

    {
      question:
        'Which element is commonly used for styling individual words?',

      options: [
        'div',
        'table',
        'section',
        'span'
      ],

      answer: 3,

      explanation:
        'Span is designed for styling small pieces of content.',
    },

    {
      question:
        'Which element occupies only the required width?',

      options: [
        'div',
        'header',
        'section',
        'span'
      ],

      answer: 3,

      explanation:
        'Span occupies only the width required by its content.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is the purpose of the span element in HTML?',

      answer:
        'The span element is an inline container used to group and style small portions of text or content without affecting the page layout.',
    },

    {
      question:
        'What is the difference between span and div?',

      answer:
        'Span is an inline element used for styling small content sections, while div is a block-level element used for grouping larger content and creating layouts.',
    },
  ],

  nextTopic: 'html-class-attribute',
},
{
  id: 'html-class-attribute',

  title: 'HTML Class Attribute',

  slug: 'html-class-attribute',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '65 min read',

  difficulty: 'Beginner',

  description:
    'Learn HTML Class Attribute deeply including class usage, CSS styling, JavaScript access, multiple classes, best practices, and interview concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Infosys', 'TCS'],

  sections: [
    {
      heading: 'HTML Class Attribute',

      content: `
• What is Class Attribute?

• Why Classes are Important

• Syntax of Class

• Using Class with CSS

• Multiple Elements with Same Class

• Multiple Classes

• Class Naming Rules

• Class and JavaScript

• Real-world Applications

• Best Practices

• Interview Concepts
`,
    },

    {
      heading: 'What is the Class Attribute?',

      content: `
The class attribute is used to assign a name to one or more HTML elements.

It helps developers group similar elements together.

Syntax:

class="classname"

Example:

<p class="note">

Welcome to HTML.

</p>

The class name can later be used by CSS and JavaScript.
`,
    },

    {
      heading: 'Why is the Class Attribute Important?',

      content: `
Classes make web development easier and more organized.

Benefits:

• Reusable styling

• Better code management

• Easier maintenance

• JavaScript targeting

• Cleaner design structure

Classes are heavily used in modern websites and frameworks.
`,
    },

    {
      heading: 'Basic Syntax of Class',

      content: `
Example:

<h1 class="title">

Learn HTML

</h1>

Here:

• class = Attribute

• title = Class Name

The class name identifies the element for styling and scripting purposes.
`,
    },

    {
      heading: 'Using Class with CSS',

      content: `
One of the most common uses of classes is CSS styling.

Example:

.title {

font-size: 30px;

}

Any element having class="title" will receive the specified styling.

This makes design reusable and consistent.
`,
    },

    {
      heading: 'Applying Same Class to Multiple Elements',

      content: `
A single class can be used by many elements.

Example:

<h1 class="heading">

Heading One

</h1>

<h2 class="heading">

Heading Two

</h2>

<p class="heading">

Paragraph

</p>

All these elements share the same styling.
`,
    },

    {
      heading: 'Advantages of Reusing Classes',

      content: `
Benefits:

• Less CSS code

• Consistent design

• Easier updates

• Better scalability

• Faster development

This is one of the main reasons classes are widely used.
`,
    },

    {
      heading: 'Using Multiple Classes',

      content: `
An element can have more than one class.

Example:

<p class="title highlight">

Learn HTML

</p>

The element receives styling from both classes.

This approach promotes reusable and modular designs.
`,
    },

    {
      heading: 'Why Multiple Classes are Useful?',

      content: `
Benefits:

• Reusable components

• Flexible design

• Better organization

• Reduced duplication

• Easier maintenance

Modern websites often combine multiple classes on a single element.
`,
    },

    {
      heading: 'Class Naming Rules',

      content: `
Good class names should be:

• Meaningful

• Readable

• Easy to understand

Examples:

header

navbar

card

product

footer

Avoid unclear names like:

x1

abc

test123

Meaningful names improve maintainability.
`,
    },

    {
      heading: 'Class Naming Best Practices',

      content: `
Recommended naming style:

• card

• product-card

• user-profile

• main-header

• navigation-menu

Use descriptive names that explain the purpose of the element.
`,
    },

    {
      heading: 'Class and JavaScript',

      content: `
JavaScript can access elements using class names.

Example Uses:

• Change content

• Add animations

• Show notifications

• Handle user interactions

• Create dynamic interfaces

Classes often act as selectors in JavaScript.
`,
    },

    {
      heading: 'Class Selectors in CSS',

      content: `
CSS uses a dot (.) before a class name.

Example:

.title {

color: blue;

}

The dot indicates that the selector targets a class.
`,
    },

    {
      heading: 'Real-world Example: Navigation Bar',

      content: `
Classes are frequently used in navigation menus.

Example Classes:

• navbar

• nav-item

• nav-link

These classes help style and organize menu components.
`,
    },

    {
      heading: 'Real-world Example: Product Card',

      content: `
An e-commerce card may contain:

• product-card

• product-image

• product-title

• product-price

• buy-button

Each class controls a specific part of the component.
`,
    },

    {
      heading: 'Real-world Example: Blog Website',

      content: `
A blog may use classes such as:

• article

• author

• category

• comment

• sidebar

Classes make large websites easier to manage.
`,
    },

    {
      heading: 'Difference Between Class and HTML Tag',

      content: `
HTML tags define structure.

Classes provide identification and styling.

Example:

<p class="warning">

Important Notice

</p>

Here:

• p defines the element

• warning identifies the element
`,
    },

    {
      heading: 'Common Uses of Classes',

      content: `
Classes are commonly used for:

• Layouts

• Buttons

• Navigation

• Cards

• Forms

• Alerts

• Tables

• Product Listings

Almost every modern webpage uses classes extensively.
`,
    },

    {
      heading: 'Advantages of Class Attribute',

      content: `
• Reusable styling

• Better organization

• Cleaner code

• Easy JavaScript access

• Faster development

• Improved maintainability
`,
    },

    {
      heading: 'Best Practices for Using Classes',

      content: `
Recommended practices:

• Use meaningful names

• Avoid unnecessary classes

• Keep naming consistent

• Reuse existing classes

• Follow project conventions

Good class management improves code quality.
`,
    },

    {
      heading: 'Common Beginner Mistakes',

      content: `
Many beginners:

• Use random class names

• Create duplicate classes

• Use too many classes

• Write unclear names

• Mix naming conventions

A clear naming strategy helps avoid confusion.
`,
    },

    {
      heading: 'Important Points About HTML Class Attribute',

      content: `
• Class identifies HTML elements

• Multiple elements can share a class

• One element can have multiple classes

• Classes are used in CSS and JavaScript

• CSS class selectors use a dot (.)

• Classes improve code reusability

The class attribute is one of the most important concepts in HTML and CSS development.
`,
    },
  ],

  codeExamples: [
    {
      title: 'Basic Class Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

<h1 class="title">

Learn HTML

</h1>

</body>

</html>`,

      output:
        'The heading is assigned a class named title.',
    },

    {
      title: 'Multiple Elements with Same Class',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

<h1 class="heading">
Heading One
</h1>

<h2 class="heading">
Heading Two
</h2>

<p class="heading">
Paragraph
</p>

</body>

</html>`,

      output:
        'All elements share the same class name and can receive identical styling.',
    },

    {
      title: 'Multiple Classes Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

<p class="title highlight">

Learn HTML Today

</p>

</body>

</html>`,

      output:
        'The paragraph receives styling from both title and highlight classes.',
    },
  ],

  mcqs: [
    {
      question:
        'Which attribute is used to assign a class name to an element?',

      options: [
        'id',
        'style',
        'class',
        'name'
      ],

      answer: 2,

      explanation:
        'The class attribute assigns a class name to an HTML element.',
    },

    {
      question:
        'Can multiple elements share the same class name?',

      options: [
        'Yes',
        'No'
      ],

      answer: 0,

      explanation:
        'Many elements can use the same class name.',
    },

    {
      question:
        'Which symbol is used before a class selector in CSS?',

      options: [
        '#',
        '.',
        '@',
        '*'
      ],

      answer: 1,

      explanation:
        'CSS uses a dot (.) before class selectors.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is the purpose of the class attribute in HTML?',

      answer:
        'The class attribute groups HTML elements under a common name so they can share CSS styling and be accessed easily through JavaScript.',
    },

    {
      question:
        'What is the difference between a class and an id attribute?',

      answer:
        'A class can be shared by multiple elements, while an id should uniquely identify a single element on a webpage.',
    },
  ],

  nextTopic: 'html-id-attribute',
},
{
  id: 'html-id-attribute',

  title: 'HTML ID Attribute',

  slug: 'html-id-attribute',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '70 min read',

  difficulty: 'Beginner',

  description:
    'Learn HTML ID Attribute deeply including unique identification, CSS styling, JavaScript access, bookmarks, fragment links, Class vs ID, and interview concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Infosys', 'TCS'],

  sections: [
    {
      heading: 'HTML ID Attribute',

      content: `
• What is ID Attribute?

• Why ID is Important

• Syntax of ID

• Unique Identification

• Using ID with CSS

• Using ID with JavaScript

• Fragment Links

• Bookmarks

• Class vs ID

• Best Practices

• Interview Concepts
`,
    },

    {
      heading: 'What is the ID Attribute?',

      content: `
The id attribute is used to uniquely identify an HTML element.

Unlike class names, an id should be assigned to only one element on a webpage.

Syntax:

id="identifier"

Example:

<h1 id="mainHeading">

Learn HTML

</h1>

The id value acts as a unique identifier for the element.
`,
    },

    {
      heading: 'Why is the ID Attribute Important?',

      content: `
The id attribute helps developers target a specific element.

Benefits:

• Unique identification

• CSS styling

• JavaScript access

• Fragment navigation

• Better page interaction

IDs are commonly used in professional web applications.
`,
    },

    {
      heading: 'Basic Syntax of ID',

      content: `
Example:

<p id="welcome">

Welcome to HTML.

</p>

Here:

• id = Attribute

• welcome = Unique Identifier

The browser uses this identifier to locate the element.
`,
    },

    {
      heading: 'Understanding Uniqueness',

      content: `
An id should be unique within a webpage.

Correct:

<h1 id="header">

Website Header

</h1>

Incorrect:

<h1 id="header"></h1>

<h2 id="header"></h2>

Duplicate IDs can create unexpected behavior in CSS and JavaScript.
`,
    },

    {
      heading: 'Using ID with CSS',

      content: `
IDs can be styled using CSS.

Example:

#header {

font-size: 40px;

}

The # symbol is used before an ID selector.

Only the element with that ID receives the styling.
`,
    },

    {
      heading: 'Why Use IDs in CSS?',

      content: `
Benefits:

• Precise targeting

• Unique styling

• Easy identification

• Faster maintenance

IDs are useful when a specific element requires special styling.
`,
    },

    {
      heading: 'Using ID with JavaScript',

      content: `
JavaScript often accesses elements using IDs.

Common Uses:

• Change text

• Update content

• Show messages

• Hide elements

• Create interactions

IDs provide a fast and reliable way to access specific elements.
`,
    },

    {
      heading: 'Fragment Links in HTML',

      content: `
IDs are commonly used with fragment links.

Fragment links navigate to a specific section of the same page.

Example:

<a href="#contact">

Go to Contact Section

</a>

The browser automatically scrolls to the element having that ID.
`,
    },

    {
      heading: 'Creating Bookmarks Using IDs',

      content: `
Step 1:

Create an element with an ID.

<h2 id="about">

About Us

</h2>

Step 2:

Create a link.

<a href="#about">

Go to About Section

</a>

This technique is called bookmarking.
`,
    },

    {
      heading: 'Real-world Use of Fragment Links',

      content: `
Fragment links are useful in:

• Documentation Websites

• Course Notes

• FAQ Pages

• Long Articles

• Landing Pages

Users can quickly jump to important sections.
`,
    },

    {
      heading: 'ID Naming Rules',

      content: `
Good IDs should be:

• Meaningful

• Descriptive

• Easy to understand

Examples:

header

footer

mainContent

contactSection

Avoid unclear names like:

abc

test

x123

Meaningful names improve readability.
`,
    },

    {
      heading: 'ID Naming Best Practices',

      content: `
Recommended naming style:

• main-header

• contact-section

• product-card

• login-form

• footer-links

Consistent naming improves maintainability.
`,
    },

    {
      heading: 'Class vs ID',

      content: `
Class:

• Can be reused

• Multiple elements allowed

• Uses . selector in CSS

Example:

class="card"

ID:

• Must be unique

• One element only

• Uses # selector in CSS

Example:

id="header"

This is one of the most frequently asked interview questions.
`,
    },

    {
      heading: 'When to Use Class?',

      content: `
Use class when:

• Styling multiple elements

• Creating reusable components

• Applying common styles

• Building large designs

Classes are intended for reuse.
`,
    },

    {
      heading: 'When to Use ID?',

      content: `
Use ID when:

• Targeting a single element

• Creating bookmarks

• Accessing elements with JavaScript

• Applying unique styling

IDs are intended for uniqueness.
`,
    },

    {
      heading: 'Real-world Examples of IDs',

      content: `
Common IDs:

• header

• footer

• sidebar

• navbar

• loginForm

• contactSection

These IDs often represent important page sections.
`,
    },

    {
      heading: 'Advantages of ID Attribute',

      content: `
• Unique identification

• Easy navigation

• Better JavaScript interaction

• Special styling support

• Bookmark creation

• Improved page structure
`,
    },

    {
      heading: 'Best Practices for Using IDs',

      content: `
Recommended practices:

• Keep IDs unique

• Use meaningful names

• Avoid duplicate IDs

• Use IDs only when needed

• Prefer classes for reusable styling

Following these practices improves code quality.
`,
    },

    {
      heading: 'Common Beginner Mistakes',

      content: `
Many beginners:

• Use duplicate IDs

• Confuse class and ID

• Use random names

• Overuse IDs for styling

• Ignore naming conventions

These mistakes can make projects difficult to maintain.
`,
    },

    {
      heading: 'Important Points About HTML ID Attribute',

      content: `
• ID uniquely identifies an element

• IDs should not be duplicated

• CSS uses # for ID selectors

• IDs work with JavaScript

• IDs create bookmarks and fragment links

• IDs improve navigation

Understanding IDs is essential for CSS, JavaScript, and webpage navigation.
`,
    },
  ],

  codeExamples: [
    {
      title: 'Basic ID Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

<h1 id="mainHeading">

Learn HTML

</h1>

</body>

</html>`,

      output:
        'The heading is assigned a unique identifier called mainHeading.',
    },

    {
      title: 'Fragment Link Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

<a href="#contact">

Go to Contact Section

</a>

<br><br><br><br><br><br>

<h2 id="contact">

Contact Information

</h2>

</body>

</html>`,

      output:
        'Clicking the link scrolls directly to the Contact Information section.',
    },

    {
      title: 'Class vs ID Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

<div class="card">

Product Card

</div>

<h1 id="mainTitle">

Welcome

</h1>

</body>

</html>`,

      output:
        'The class can be reused, while the ID uniquely identifies the heading.',
    },
  ],

  mcqs: [
    {
      question:
        'Which attribute uniquely identifies an HTML element?',

      options: [
        'class',
        'style',
        'id',
        'name'
      ],

      answer: 2,

      explanation:
        'The id attribute uniquely identifies an HTML element.',
    },

    {
      question:
        'Which symbol is used before an ID selector in CSS?',

      options: [
        '.',
        '#',
        '@',
        '*'
      ],

      answer: 1,

      explanation:
        'The # symbol is used for ID selectors in CSS.',
    },

    {
      question:
        'Can multiple elements share the same ID?',

      options: [
        'Yes',
        'No'
      ],

      answer: 1,

      explanation:
        'An ID should be unique and should not be shared by multiple elements.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is the purpose of the ID attribute in HTML?',

      answer:
        'The ID attribute uniquely identifies an HTML element so it can be targeted by CSS, JavaScript, or fragment links.',
    },

    {
      question:
        'What is the difference between Class and ID in HTML?',

      answer:
        'A class can be reused by multiple elements, whereas an ID should be unique and used for only one element on a webpage.',
    },
  ],

  nextTopic: 'html-iframes',
},
{
  id: 'html-id-attribute',

  title: 'HTML ID Attribute',

  slug: 'html-id-attribute',

  image:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

  readTime: '70 min read',

  difficulty: 'Beginner',

  description:
    'Learn HTML ID Attribute deeply including unique identification, CSS styling, JavaScript access, bookmarks, fragment links, Class vs ID, and interview concepts.',

  companyTags: ['Google', 'Amazon', 'Microsoft', 'Infosys', 'TCS'],

  sections: [
    {
      heading: 'HTML ID Attribute',

      content: `
• What is ID Attribute?

• Why ID is Important

• Syntax of ID

• Unique Identification

• Using ID with CSS

• Using ID with JavaScript

• Fragment Links

• Bookmarks

• Class vs ID

• Best Practices

• Interview Concepts
`,
    },

    {
      heading: 'What is the ID Attribute?',

      content: `
The id attribute is used to uniquely identify an HTML element.

Unlike class names, an id should be assigned to only one element on a webpage.

Syntax:

id="identifier"

Example:

<h1 id="mainHeading">

Learn HTML

</h1>

The id value acts as a unique identifier for the element.
`,
    },

    {
      heading: 'Why is the ID Attribute Important?',

      content: `
The id attribute helps developers target a specific element.

Benefits:

• Unique identification

• CSS styling

• JavaScript access

• Fragment navigation

• Better page interaction

IDs are commonly used in professional web applications.
`,
    },

    {
      heading: 'Basic Syntax of ID',

      content: `
Example:

<p id="welcome">

Welcome to HTML.

</p>

Here:

• id = Attribute

• welcome = Unique Identifier

The browser uses this identifier to locate the element.
`,
    },

    {
      heading: 'Understanding Uniqueness',

      content: `
An id should be unique within a webpage.

Correct:

<h1 id="header">

Website Header

</h1>

Incorrect:

<h1 id="header"></h1>

<h2 id="header"></h2>

Duplicate IDs can create unexpected behavior in CSS and JavaScript.
`,
    },

    {
      heading: 'Using ID with CSS',

      content: `
IDs can be styled using CSS.

Example:

#header {

font-size: 40px;

}

The # symbol is used before an ID selector.

Only the element with that ID receives the styling.
`,
    },

    {
      heading: 'Why Use IDs in CSS?',

      content: `
Benefits:

• Precise targeting

• Unique styling

• Easy identification

• Faster maintenance

IDs are useful when a specific element requires special styling.
`,
    },

    {
      heading: 'Using ID with JavaScript',

      content: `
JavaScript often accesses elements using IDs.

Common Uses:

• Change text

• Update content

• Show messages

• Hide elements

• Create interactions

IDs provide a fast and reliable way to access specific elements.
`,
    },

    {
      heading: 'Fragment Links in HTML',

      content: `
IDs are commonly used with fragment links.

Fragment links navigate to a specific section of the same page.

Example:

<a href="#contact">

Go to Contact Section

</a>

The browser automatically scrolls to the element having that ID.
`,
    },

    {
      heading: 'Creating Bookmarks Using IDs',

      content: `
Step 1:

Create an element with an ID.

<h2 id="about">

About Us

</h2>

Step 2:

Create a link.

<a href="#about">

Go to About Section

</a>

This technique is called bookmarking.
`,
    },

    {
      heading: 'Real-world Use of Fragment Links',

      content: `
Fragment links are useful in:

• Documentation Websites

• Course Notes

• FAQ Pages

• Long Articles

• Landing Pages

Users can quickly jump to important sections.
`,
    },

    {
      heading: 'ID Naming Rules',

      content: `
Good IDs should be:

• Meaningful

• Descriptive

• Easy to understand

Examples:

header

footer

mainContent

contactSection

Avoid unclear names like:

abc

test

x123

Meaningful names improve readability.
`,
    },

    {
      heading: 'ID Naming Best Practices',

      content: `
Recommended naming style:

• main-header

• contact-section

• product-card

• login-form

• footer-links

Consistent naming improves maintainability.
`,
    },

    {
      heading: 'Class vs ID',

      content: `
Class:

• Can be reused

• Multiple elements allowed

• Uses . selector in CSS

Example:

class="card"

ID:

• Must be unique

• One element only

• Uses # selector in CSS

Example:

id="header"

This is one of the most frequently asked interview questions.
`,
    },

    {
      heading: 'When to Use Class?',

      content: `
Use class when:

• Styling multiple elements

• Creating reusable components

• Applying common styles

• Building large designs

Classes are intended for reuse.
`,
    },

    {
      heading: 'When to Use ID?',

      content: `
Use ID when:

• Targeting a single element

• Creating bookmarks

• Accessing elements with JavaScript

• Applying unique styling

IDs are intended for uniqueness.
`,
    },

    {
      heading: 'Real-world Examples of IDs',

      content: `
Common IDs:

• header

• footer

• sidebar

• navbar

• loginForm

• contactSection

These IDs often represent important page sections.
`,
    },

    {
      heading: 'Advantages of ID Attribute',

      content: `
• Unique identification

• Easy navigation

• Better JavaScript interaction

• Special styling support

• Bookmark creation

• Improved page structure
`,
    },

    {
      heading: 'Best Practices for Using IDs',

      content: `
Recommended practices:

• Keep IDs unique

• Use meaningful names

• Avoid duplicate IDs

• Use IDs only when needed

• Prefer classes for reusable styling

Following these practices improves code quality.
`,
    },

    {
      heading: 'Common Beginner Mistakes',

      content: `
Many beginners:

• Use duplicate IDs

• Confuse class and ID

• Use random names

• Overuse IDs for styling

• Ignore naming conventions

These mistakes can make projects difficult to maintain.
`,
    },

    {
      heading: 'Important Points About HTML ID Attribute',

      content: `
• ID uniquely identifies an element

• IDs should not be duplicated

• CSS uses # for ID selectors

• IDs work with JavaScript

• IDs create bookmarks and fragment links

• IDs improve navigation

Understanding IDs is essential for CSS, JavaScript, and webpage navigation.
`,
    },
  ],

  codeExamples: [
    {
      title: 'Basic ID Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

<h1 id="mainHeading">

Learn HTML

</h1>

</body>

</html>`,

      output:
        'The heading is assigned a unique identifier called mainHeading.',
    },

    {
      title: 'Fragment Link Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

<a href="#contact">

Go to Contact Section

</a>

<br><br><br><br><br><br>

<h2 id="contact">

Contact Information

</h2>

</body>

</html>`,

      output:
        'Clicking the link scrolls directly to the Contact Information section.',
    },

    {
      title: 'Class vs ID Example',

      language: 'html',

      code: `<!DOCTYPE html>
<html>

<body>

<div class="card">

Product Card

</div>

<h1 id="mainTitle">

Welcome

</h1>

</body>

</html>`,

      output:
        'The class can be reused, while the ID uniquely identifies the heading.',
    },
  ],

  mcqs: [
    {
      question:
        'Which attribute uniquely identifies an HTML element?',

      options: [
        'class',
        'style',
        'id',
        'name'
      ],

      answer: 2,

      explanation:
        'The id attribute uniquely identifies an HTML element.',
    },

    {
      question:
        'Which symbol is used before an ID selector in CSS?',

      options: [
        '.',
        '#',
        '@',
        '*'
      ],

      answer: 1,

      explanation:
        'The # symbol is used for ID selectors in CSS.',
    },

    {
      question:
        'Can multiple elements share the same ID?',

      options: [
        'Yes',
        'No'
      ],

      answer: 1,

      explanation:
        'An ID should be unique and should not be shared by multiple elements.',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is the purpose of the ID attribute in HTML?',

      answer:
        'The ID attribute uniquely identifies an HTML element so it can be targeted by CSS, JavaScript, or fragment links.',
    },

    {
      question:
        'What is the difference between Class and ID in HTML?',

      answer:
        'A class can be reused by multiple elements, whereas an ID should be unique and used for only one element on a webpage.',
    },
  ],

  nextTopic: 'html-iframes',
},
]
