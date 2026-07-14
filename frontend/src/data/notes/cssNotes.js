export const cssNotes = [
 {
  id: 'css-introduction',
  title: 'CSS Introduction',
  slug: 'css-introduction',
  image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8',
  readTime: '10 min read',
  difficulty: 'Beginner',
  description: 'Learn what CSS is, why it is used, how it works with HTML, the advantages of CSS, different ways to add CSS, syntax, comments, and best practices.',
  companyTags: [
    'TCS',
    'Infosys',
    'Wipro',
    'Accenture',
    'Capgemini',
    'Cognizant'
  ],

  sections: [
    {
      heading: 'What is CSS?',
      content: `
CSS stands for **Cascading Style Sheets**. It is a stylesheet language used to describe how HTML elements should appear on a webpage.

HTML is responsible for creating the structure of a webpage, whereas CSS is responsible for designing and styling that structure.

Think of it like building a house:

• HTML creates the walls, doors, and windows.
• CSS paints the walls, adds decorations, changes layouts, and makes the house attractive.

Without CSS, every webpage would appear as plain black text on a white background.

CSS can control:

• Colors
• Fonts
• Backgrounds
• Borders
• Margins
• Padding
• Animations
• Layouts
• Responsive Design
• Transitions
• Flexbox
• Grid
      `.trim()
    },

    {
      heading: 'Why Do We Need CSS?',
      content: `
Before CSS was introduced, all styling had to be written directly inside HTML elements.

This made websites:

• Difficult to maintain
• Repetitive
• Large in size
• Hard to update

CSS solved these problems by separating content from presentation.

Advantages include:

• Cleaner HTML
• Faster website development
• Easy maintenance
• Reusable styles
• Better performance
• Responsive web design
• Consistent design across multiple pages

Example:

Instead of changing the color of every heading individually, one CSS rule can style every heading on the website.
      `.trim()
    },

    {
      heading: 'How CSS Works',
      content: `
A browser first loads the HTML document.

Then it loads the CSS file.

Finally, it combines both files and displays the beautifully styled webpage.

Flow:

HTML → Browser → CSS → Final Styled Webpage

The browser reads CSS from top to bottom and applies the styles according to the CSS Cascade Rules.
      `.trim()
    },

    {
      heading: 'Features of CSS',
      content: `
Some important features of CSS are:

• Easy to learn
• Lightweight
• Reusable code
• Faster page loading
• Responsive design support
• Animation support
• Cross-browser compatibility
• Better user experience
• Improves website maintainability
• Supports modern layouts like Flexbox and Grid
      `.trim()
    },

    {
      heading: 'Advantages of CSS',
      content: `
Major advantages include:

1. Separation of content and design
2. Less code duplication
3. Easier website maintenance
4. Better accessibility
5. Faster page loading
6. Responsive websites
7. Better SEO because HTML stays clean
8. Consistent design across multiple pages
9. Easier collaboration among developers
10. Professional-looking user interfaces
      `.trim()
    },

    {
      heading: 'Different Ways to Add CSS',
      content: `
There are three ways to use CSS.

1. Inline CSS
   CSS is written inside the HTML element using the style attribute.

2. Internal CSS
   CSS is written inside the <style> tag within the HTML document.

3. External CSS
   CSS is written inside a separate .css file and linked to HTML.

External CSS is the most recommended approach because it is reusable and easier to maintain.
      `.trim()
    },

    {
      heading: 'CSS Syntax',
      content: `
Every CSS rule contains two parts.

1. Selector
2. Declaration Block

Syntax:

selector {
    property: value;
}

Example:

h1 {
    color: blue;
}

Here,

Selector → h1

Property → color

Value → blue

Each declaration ends with a semicolon.
      `.trim()
    },

    {
      heading: 'CSS Comments',
      content: `
Comments help explain the code.

They are ignored by the browser.

Syntax:

/* This is a CSS Comment */

Use comments to explain complex sections of your stylesheet.
      `.trim()
    },

    {
      heading: 'Best Practices',
      content: `
Follow these best practices while writing CSS:

• Keep CSS in external files.
• Use meaningful class names.
• Avoid unnecessary inline styles.
• Organize properties logically.
• Remove unused CSS.
• Write reusable classes.
• Use comments where necessary.
• Keep code properly indented.
• Follow consistent naming conventions.
• Test on multiple browsers.
      `.trim()
    },

    {
      heading: 'Real-World Applications',
      content: `
CSS is used in almost every website and web application.

Examples include:

• E-commerce websites
• Banking applications
• Social media platforms
• Portfolio websites
• Dashboards
• Admin panels
• News websites
• Blogging platforms
• Educational websites
• Company websites

Without CSS, modern websites like Amazon, Flipkart, Google, Facebook, and YouTube would look like plain text documents.
      `.trim()
    }
  ],

  codeExamples: [
    {
      title: 'Basic CSS Example',
      language: 'css',
      code: `body {
    background-color: #f5f5f5;
    font-family: Arial, sans-serif;
}

h1 {
    color: blue;
}

p {
    color: #444;
    font-size: 18px;
}`,
      output: 'The webpage displays a light gray background, blue heading, and dark gray paragraph text.'
    },

    {
      title: 'Inline CSS Example',
      language: 'html',
      code: `<h1 style="color:red;">Welcome</h1>`,
      output: 'The heading appears in red color using inline CSS.'
    },

    {
      title: 'Internal CSS Example',
      language: 'html',
      code: `<style>
h1{
    color:green;
}
</style>`,
      output: 'All h1 elements become green inside that HTML page.'
    },

    {
      title: 'External CSS Example',
      language: 'html',
      code: `<link rel="stylesheet" href="style.css">`,
      output: 'The HTML page loads styles from an external CSS file.'
    }
  ],

  mcqs: [
    {
      question: 'What does CSS stand for?',
      options: [
        'Creative Style Sheets',
        'Computer Style Sheets',
        'Cascading Style Sheets',
        'Colorful Style Sheets'
      ],
      answer: 2,
      explanation: 'CSS stands for Cascading Style Sheets.'
    },
    {
      question: 'Which language is used to style web pages?',
      options: [
        'Java',
        'Python',
        'CSS',
        'SQL'
      ],
      answer: 2,
      explanation: 'CSS is responsible for styling HTML webpages.'
    },
    {
      question: 'Which is the recommended way to use CSS in large projects?',
      options: [
        'Inline CSS',
        'Internal CSS',
        'External CSS',
        'None'
      ],
      answer: 2,
      explanation: 'External CSS keeps code organized and reusable.'
    },
    {
      question: 'Which symbol is used for CSS comments?',
      options: [
        '// comment',
        '<!-- comment -->',
        '# comment',
        '/* comment */'
      ],
      answer: 3,
      explanation: 'CSS comments are written between /* and */.'
    },
    {
      question: 'Which part of CSS selects the HTML element?',
      options: [
        'Property',
        'Selector',
        'Value',
        'Declaration'
      ],
      answer: 1,
      explanation: 'The selector identifies the HTML element to which styles are applied.'
    }
  ],

  interviewQuestions: [
    {
      question: 'What is CSS?',
      answer: 'CSS (Cascading Style Sheets) is a stylesheet language used to control the appearance, layout, and design of HTML documents.'
    },
    {
      question: 'Why is CSS called Cascading?',
      answer: 'It is called Cascading because multiple styles can apply to the same element, and CSS follows a priority system (cascade) to determine which style is used.'
    },
    {
      question: 'What are the different ways to add CSS?',
      answer: 'CSS can be added using Inline CSS, Internal CSS, and External CSS. External CSS is the preferred approach for large projects.'
    },
    {
      question: 'What are the advantages of CSS?',
      answer: 'CSS improves maintainability, separates design from content, reduces code duplication, supports responsive design, improves performance, and provides a consistent user interface.'
    },
    {
      question: 'Why should we use external CSS?',
      answer: 'External CSS allows one stylesheet to control multiple pages, making websites easier to maintain, faster to load, and more consistent.'
    }
  ],

  nextTopic: 'css-syntax'
},
{
  id: 'css-syntax',
  title: 'CSS Syntax',
  slug: 'css-syntax',
  image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
  readTime: '12 min read',
  difficulty: 'Beginner',
  description: 'Learn the complete CSS syntax, including selectors, declaration blocks, properties, values, comments, formatting rules, and best practices for writing clean and maintainable CSS.',
  companyTags: [
    'TCS',
    'Infosys',
    'Wipro',
    'Accenture',
    'Capgemini',
    'Cognizant'
  ],

  sections: [
    {
      heading: 'What is CSS Syntax?',
      content: `
CSS Syntax defines the structure used to write CSS rules.

Every CSS rule tells the browser:

• Which HTML element should be styled.
• Which property should change.
• What value should be assigned.

A CSS rule consists of two main parts:

1. Selector
2. Declaration Block

Understanding CSS syntax is the first step toward writing effective and maintainable stylesheets.
      `.trim()
    },

    {
      heading: 'Basic CSS Syntax',
      content: `
The basic syntax of CSS is:

selector {
    property: value;
}

Example:

h1 {
    color: blue;
}

Here,

Selector → h1

Property → color

Value → blue

The browser reads the selector first and then applies all declarations inside the curly braces.
      `.trim()
    },

    {
      heading: 'Parts of a CSS Rule',
      content: `
A CSS rule contains four important parts.

1. Selector
   Identifies the HTML element.

2. Property
   Specifies what style should change.

3. Value
   Assigns a value to the property.

4. Declaration
   A combination of property and value.

Example:

color: red;

This entire line is called a declaration.
      `.trim()
    },

    {
      heading: 'Understanding Selectors',
      content: `
Selectors tell CSS which HTML elements should receive the styles.

Examples:

h1
p
div
button

Selectors will be covered in detail in the next chapter.
      `.trim()
    },

    {
      heading: 'Declaration Block',
      content: `
Everything inside the curly braces {} is called the Declaration Block.

Example:

h1 {
    color: blue;
    font-size: 30px;
    text-align: center;
}

A declaration block can contain one or many declarations.
      `.trim()
    },

    {
      heading: 'Property and Value',
      content: `
A property defines what should change.

A value specifies the new style.

Examples:

color: red;
font-size: 20px;
background-color: yellow;
margin: 15px;

Each property has specific valid values.
      `.trim()
    },

    {
      heading: 'Semicolon in CSS',
      content: `
Each declaration should end with a semicolon (;).

Example:

h1 {
    color: blue;
    font-size: 30px;
}

Although the last semicolon is optional, it is recommended to always include it to avoid errors when adding new declarations later.
      `.trim()
    },

    {
      heading: 'Curly Braces',
      content: `
Curly braces {} group all declarations together.

Opening brace:

{

Closing brace:

}

Without curly braces, CSS becomes invalid.
      `.trim()
    },

    {
      heading: 'Whitespace and Indentation',
      content: `
Browsers ignore extra spaces and line breaks in CSS.

However, proper indentation improves readability.

Good Example:

h1 {
    color: blue;
    font-size: 32px;
}

Bad Example:

h1{color:blue;font-size:32px;}

Both work, but properly formatted code is easier to maintain.
      `.trim()
    },

    {
      heading: 'CSS Comments',
      content: `
Comments are ignored by browsers.

Syntax:

/* This is a comment */

Comments help explain complex code and improve collaboration among developers.

Example:

/* Header Styling */

h1 {
    color: blue;
}
      `.trim()
    },

    {
      heading: 'Multiple Declarations',
      content: `
A selector can contain multiple declarations.

Example:

p {
    color: black;
    font-size: 18px;
    line-height: 1.6;
    text-align: justify;
}

All declarations are applied together.
      `.trim()
    },

    {
      heading: 'Multiple Selectors',
      content: `
One CSS rule can style multiple elements.

Example:

h1,
h2,
h3 {
    color: navy;
}

This reduces code duplication.
      `.trim()
    },

    {
      heading: 'How the Browser Reads CSS',
      content: `
The browser processes CSS in this order:

1. Reads the selector.
2. Finds matching HTML elements.
3. Reads every declaration.
4. Applies the styles.
5. Displays the styled webpage.

Invalid properties or values are ignored.
      `.trim()
    },

    {
      heading: 'Common Syntax Mistakes',
      content: `
Beginners often make these mistakes:

• Missing semicolon
• Missing colon
• Missing curly braces
• Incorrect property names
• Invalid values
• Wrong selector

Always check your syntax carefully because a small mistake can prevent styles from working correctly.
      `.trim()
    },

    {
      heading: 'Best Practices',
      content: `
Follow these best practices:

• Always indent your code.
• End every declaration with a semicolon.
• Use lowercase property names.
• Group related properties together.
• Write meaningful comments.
• Avoid unnecessary duplication.
• Keep CSS readable and organized.
      `.trim()
    }
  ],

  codeExamples: [
    {
      title: 'Basic CSS Syntax',
      language: 'css',
      code: `h1 {
    color: blue;
}`,
      output: 'Changes the text color of all h1 elements to blue.'
    },
    {
      title: 'Multiple Properties',
      language: 'css',
      code: `p {
    color: #333;
    font-size: 18px;
    line-height: 1.6;
}`,
      output: 'Paragraphs become dark gray with larger font size and improved spacing.'
    },
    {
      title: 'Multiple Selectors',
      language: 'css',
      code: `h1,
h2,
h3 {
    color: navy;
}`,
      output: 'All heading elements (h1, h2, and h3) are displayed in navy blue.'
    },
    {
      title: 'CSS Comment',
      language: 'css',
      code: `/* Header Styling */
h1 {
    color: green;
}`,
      output: 'The browser ignores the comment and applies the green color to all h1 elements.'
    }
  ],

  mcqs: [
    {
      question: 'Which symbol starts a declaration block in CSS?',
      options: [
        '[',
        '(',
        '{',
        '<'
      ],
      answer: 2,
      explanation: 'A declaration block begins with an opening curly brace {.'
    },
    {
      question: 'Which character separates a property and its value?',
      options: [
        ';',
        ':',
        ',',
        '.'
      ],
      answer: 1,
      explanation: 'A colon (:) separates a property from its value.'
    },
    {
      question: 'Which character ends a CSS declaration?',
      options: [
        ':',
        ';',
        ',',
        '#'
      ],
      answer: 1,
      explanation: 'A semicolon (;) ends each CSS declaration.'
    },
    {
      question: 'Which part selects the HTML element?',
      options: [
        'Value',
        'Property',
        'Selector',
        'Comment'
      ],
      answer: 2,
      explanation: 'The selector tells CSS which HTML element should be styled.'
    },
    {
      question: 'Which of the following is a valid CSS declaration?',
      options: [
        'color = red;',
        'color : red;',
        'color -> red;',
        'color => red;'
      ],
      answer: 1,
      explanation: 'A valid declaration follows the format property: value;'
    }
  ],

  interviewQuestions: [
    {
      question: 'What is the basic syntax of CSS?',
      answer: 'The basic CSS syntax is selector { property: value; }. A selector identifies the HTML element, and the declaration block contains one or more property-value pairs.'
    },
    {
      question: 'What is a declaration block in CSS?',
      answer: 'A declaration block is the section enclosed within curly braces {}. It contains one or more CSS declarations.'
    },
    {
      question: 'What is the difference between a property and a value?',
      answer: 'A property defines what style should change, while the value specifies how it should change. Example: color is the property and blue is the value.'
    },
    {
      question: 'Why are semicolons used in CSS?',
      answer: 'Semicolons separate multiple declarations inside a declaration block. Although the final semicolon is optional, it is considered a best practice to always include it.'
    },
    {
      question: 'What happens if CSS contains an invalid property?',
      answer: 'Browsers ignore invalid properties or values and continue processing the remaining valid CSS rules.'
    }
  ],

  nextTopic: 'types-of-css'
},
{
  id: 'css-comments',
  title: 'CSS Comments',
  slug: 'css-comments',
  image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
  readTime: '8 min read',
  difficulty: 'Beginner',
  description: 'Learn how to write CSS comments, understand their syntax, purpose, advantages, best practices, and how comments improve code readability and maintenance.',

  companyTags: [
    'TCS',
    'Infosys',
    'Wipro',
    'Accenture',
    'Capgemini',
    'Cognizant'
  ],

  sections: [
    {
      heading: 'What are CSS Comments?',
      content: `
CSS comments are notes added inside a CSS file to explain the code. They are ignored by web browsers and do not affect the appearance or functionality of a webpage.

Comments are useful for developers because they make CSS code easier to read, understand, and maintain.

Whether you are working individually or in a team, comments help explain why certain styles are used.
      `.trim()
    },

    {
      heading: 'Syntax of CSS Comments',
      content: `
CSS comments begin with /* and end with */.

Syntax:

/* This is a CSS comment */

Everything written between these symbols is ignored by the browser.

Comments can be placed before, after, or between CSS rules.
      `.trim()
    },

    {
      heading: 'Single-Line Comment',
      content: `
Although CSS has only one comment syntax, it can be used to create a single-line comment.

Example:

/* Change heading color */

h1 {
    color: blue;
}

Single-line comments are commonly used to describe the purpose of a CSS rule.
      `.trim()
    },

    {
      heading: 'Multi-Line Comment',
      content: `
CSS comments can span multiple lines.

Example:

/*
This section styles
the website header
and navigation bar.
*/

Multi-line comments are useful for explaining large sections of code.
      `.trim()
    },

    {
      heading: 'Why Use CSS Comments?',
      content: `
Comments provide several benefits:

• Explain complex CSS rules.
• Improve code readability.
• Help during debugging.
• Make teamwork easier.
• Organize large stylesheets.
• Document sections of a project.
• Make future updates easier.
      `.trim()
    },

    {
      heading: 'Where Can Comments Be Used?',
      content: `
Comments can be written almost anywhere inside a CSS file.

Examples include:

• Before selectors
• Between CSS rules
• After declarations
• Before media queries
• Before animation code
• Inside large stylesheets to separate sections

Proper placement of comments improves navigation through the code.
      `.trim()
    },

    {
      heading: 'Real-World Example',
      content: `
In large projects, developers often divide CSS into sections using comments.

Example:

/* Header */
/* Navigation */
/* Hero Section */
/* About Section */
/* Footer */

This makes it easier to locate specific styles quickly.
      `.trim()
    },

    {
      heading: 'Common Mistakes',
      content: `
Some common mistakes include:

• Forgetting to close the comment using */
• Nesting comments inside another comment (not supported).
• Writing unnecessary comments for obvious code.
• Leaving outdated comments after modifying the code.

Always keep comments accurate and up to date.
      `.trim()
    },

    {
      heading: 'Best Practices',
      content: `
Follow these best practices when writing CSS comments:

• Keep comments short and meaningful.
• Explain "why" rather than "what".
• Group related styles using comments.
• Remove unnecessary comments before production if needed.
• Update comments whenever the code changes.
• Use comments consistently throughout the project.
      `.trim()
    },

    {
      heading: 'Interview Tip',
      content: `
Interviewers may ask whether CSS comments affect webpage performance.

The answer is:

No. Browsers ignore CSS comments completely. They are meant only for developers.

However, production CSS files are often minified, which removes comments to reduce file size.
      `.trim()
    }
  ],

  codeExamples: [
    {
      title: 'Basic CSS Comment',
      language: 'css',
      code: `/* Change heading color */

h1 {
    color: blue;
}`,
      output: 'The browser ignores the comment and applies the blue color to all h1 elements.'
    },

    {
      title: 'Multi-Line Comment',
      language: 'css',
      code: `/*
Main Header Styling
Created by Developer
Last Updated: July 2026
*/

header {
    background: black;
    color: white;
}`,
      output: 'The multi-line comment is ignored, while the header receives the specified styles.'
    },

    {
      title: 'Organizing CSS with Comments',
      language: 'css',
      code: `/* Navigation */

nav {
    background: #333;
}

/* Footer */

footer {
    background: #111;
}`,
      output: 'Comments separate different sections of the stylesheet, making it easier to navigate.'
    }
  ],

  mcqs: [
    {
      question: 'Which syntax is used for comments in CSS?',
      options: [
        '// Comment',
        '<!-- Comment -->',
        '/* Comment */',
        '# Comment'
      ],
      answer: 2,
      explanation: 'CSS comments are written between /* and */.'
    },
    {
      question: 'Do CSS comments affect webpage design?',
      options: [
        'Yes',
        'Only in Chrome',
        'Only in Firefox',
        'No'
      ],
      answer: 3,
      explanation: 'Browsers ignore CSS comments completely.'
    },
    {
      question: 'Why are CSS comments used?',
      options: [
        'To increase page speed',
        'To explain code',
        'To change styles',
        'To execute JavaScript'
      ],
      answer: 1,
      explanation: 'Comments help developers understand and maintain the CSS code.'
    },
    {
      question: 'Can CSS comments span multiple lines?',
      options: [
        'No',
        'Only in CSS3',
        'Yes',
        'Only inside media queries'
      ],
      answer: 2,
      explanation: 'CSS comments can span one or multiple lines.'
    },
    {
      question: 'Which of the following is NOT a benefit of CSS comments?',
      options: [
        'Improve readability',
        'Help debugging',
        'Increase website speed',
        'Organize code'
      ],
      answer: 2,
      explanation: 'Comments do not improve website speed; they are meant for developers.'
    }
  ],

  interviewQuestions: [
    {
      question: 'What are CSS comments?',
      answer: 'CSS comments are developer notes written inside a stylesheet using /* */. Browsers ignore them, and they are used to improve code readability and documentation.'
    },
    {
      question: 'How do you write a comment in CSS?',
      answer: 'A CSS comment is written between /* and */. Example: /* This is a comment */.'
    },
    {
      question: 'Can CSS comments be nested?',
      answer: 'No. CSS does not support nested comments. Attempting to nest comments can lead to syntax errors.'
    },
    {
      question: 'Do CSS comments affect webpage performance?',
      answer: 'No. Browsers ignore comments. However, comments are often removed during CSS minification to reduce file size.'
    },
    {
      question: 'Why are comments important in large CSS projects?',
      answer: 'Comments help organize stylesheets, explain complex logic, improve collaboration among developers, and simplify maintenance.'
    }
  ],

  nextTopic: 'css-selectors'
},
{
  id: "css-selectors",
  title: "CSS Selectors",
  slug: "css-selectors",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  readTime: "20 min read",
  difficulty: "Beginner",
  description:
    "Learn CSS Selectors from basic to advanced, including element, class, ID, universal, grouping, attribute, pseudo-class, pseudo-element, combinator selectors, specificity, and best practices.",

  companyTags: [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Capgemini",
    "Cognizant"
  ],

  sections: [
    {
      heading: "What are CSS Selectors?",
      content: `
CSS Selectors are patterns used to select HTML elements that you want to style.

A selector tells the browser:

• Which HTML element should receive the CSS styles.
• Where the styling should be applied.

Without selectors, CSS cannot determine which elements need styling.

Example:

h1 {
    color: blue;
}

Here, h1 is the selector.
      `.trim()
    },

    {
      heading: "Why are Selectors Important?",
      content: `
Selectors are one of the most important concepts in CSS.

They help you:

• Style specific elements.
• Reuse styles.
• Reduce duplicate code.
• Improve maintainability.
• Create responsive layouts.
• Build modern web applications.

Every CSS rule begins with a selector.
      `.trim()
    },

    {
      heading: "Types of CSS Selectors",
      content: `
CSS provides several types of selectors.

• Universal Selector
• Element Selector
• Class Selector
• ID Selector
• Group Selector
• Attribute Selector
• Descendant Selector
• Child Selector
• Adjacent Sibling Selector
• General Sibling Selector
• Pseudo-class Selector
• Pseudo-element Selector

Each selector serves a different purpose.
      `.trim()
    },

    {
      heading: "1. Universal Selector (*)",
      content: `
The Universal Selector selects every element on the webpage.

Syntax:

*

Example:

* {
    margin: 0;
    padding: 0;
}

It is commonly used to remove default browser spacing.
      `.trim()
    },

    {
      heading: "2. Element Selector",
      content: `
The Element Selector selects all elements of a specific HTML tag.

Example:

p {
    color: red;
}

All paragraph elements become red.
      `.trim()
    },

    {
      heading: "3. Class Selector",
      content: `
A Class Selector starts with a dot (.).

Syntax:

.className

Example:

.btn {
    background: blue;
    color: white;
}

Classes can be reused on multiple HTML elements.
      `.trim()
    },

    {
      heading: "4. ID Selector",
      content: `
An ID Selector starts with a hash (#).

Syntax:

#header

Example:

#header {
    background: black;
}

An ID should be unique within an HTML document.
      `.trim()
    },

    {
      heading: "5. Group Selector",
      content: `
A Group Selector applies the same styles to multiple elements.

Example:

h1,
h2,
h3 {
    color: navy;
}

This reduces duplicate CSS.
      `.trim()
    },

    {
      heading: "6. Attribute Selector",
      content: `
Attribute selectors target elements based on their attributes.

Example:

input[type="text"] {
    border: 2px solid blue;
}

Only text input fields receive the styles.
      `.trim()
    },

    {
      heading: "7. Descendant Selector",
      content: `
A Descendant Selector selects elements inside another element.

Example:

div p {
    color: green;
}

Only paragraph elements inside div elements are selected.
      `.trim()
    },

    {
      heading: "8. Child Selector (>)",
      content: `
The Child Selector selects only direct children.

Example:

div > p {
    color: blue;
}

Only direct child paragraphs are selected.
      `.trim()
    },

    {
      heading: "9. Adjacent Sibling Selector (+)",
      content: `
The Adjacent Sibling Selector selects the next immediate sibling.

Example:

h1 + p {
    color: red;
}

Only the first paragraph immediately after an h1 is selected.
      `.trim()
    },

    {
      heading: "10. General Sibling Selector (~)",
      content: `
The General Sibling Selector selects all sibling elements after a specified element.

Example:

h1 ~ p {
    color: orange;
}

All paragraph siblings after the h1 receive the styles.
      `.trim()
    },

    {
      heading: "11. Pseudo-class Selector",
      content: `
Pseudo-classes define a special state of an element.

Examples include:

:hover
:focus
:first-child
:last-child
:nth-child()

Example:

button:hover {
    background: green;
}

The button changes color when hovered.
      `.trim()
    },

    {
      heading: "12. Pseudo-element Selector",
      content: `
Pseudo-elements style a specific part of an element.

Examples:

::before
::after
::first-letter
::first-line
::selection

Example:

p::first-letter {
    font-size: 30px;
}

Only the first letter becomes larger.
      `.trim()
    },

    {
      heading: "Selector Specificity",
      content: `
When multiple selectors target the same element, CSS uses specificity to decide which rule wins.

Priority (Lowest to Highest):

Element Selector
↓

Class Selector
↓

ID Selector
↓

Inline CSS

Higher specificity overrides lower specificity.
      `.trim()
    },

    {
      heading: "Best Practices",
      content: `
• Prefer class selectors for reusable styles.
• Avoid excessive use of ID selectors.
• Use meaningful class names.
• Keep selectors simple.
• Avoid deeply nested selectors.
• Organize CSS logically.
• Use grouping selectors to reduce repetition.
      `.trim()
    }
  ],

  codeExamples: [
    {
      title: "Element Selector",
      language: "css",
      code: `p {
    color: blue;
}`,
      output: "All paragraph elements appear blue."
    },
    {
      title: "Class Selector",
      language: "css",
      code: `.btn {
    background: royalblue;
    color: white;
    padding: 10px;
}`,
      output: "Every element with class='btn' gets a blue background and white text."
    },
    {
      title: "ID Selector",
      language: "css",
      code: `#header {
    background: black;
    color: white;
}`,
      output: "The element with id='header' gets a black background and white text."
    },
    {
      title: "Universal Selector",
      language: "css",
      code: `* {
    margin: 0;
    padding: 0;
}`,
      output: "Default spacing is removed from all HTML elements."
    },
    {
      title: "Attribute Selector",
      language: "css",
      code: `input[type="email"] {
    border: 2px solid green;
}`,
      output: "Only email input fields receive a green border."
    },
    {
      title: "Pseudo-class Selector",
      language: "css",
      code: `button:hover {
    background: green;
}`,
      output: "The button changes its background color when hovered."
    }
  ],

  mcqs: [
    {
      question: "Which selector selects all HTML elements?",
      options: [
        "#",
        ".",
        "*",
        "+"
      ],
      answer: 2,
      explanation: "The Universal Selector (*) selects every element on the webpage."
    },
    {
      question: "Which symbol is used for a Class Selector?",
      options: [
        "#",
        ".",
        "*",
        "@"
      ],
      answer: 1,
      explanation: "A class selector starts with a dot (.)."
    },
    {
      question: "Which symbol is used for an ID Selector?",
      options: [
        ".",
        "#",
        "*",
        "%"
      ],
      answer: 1,
      explanation: "An ID selector starts with the # symbol."
    },
    {
      question: "Which selector targets elements based on attributes?",
      options: [
        "Class Selector",
        "Universal Selector",
        "Attribute Selector",
        "Element Selector"
      ],
      answer: 2,
      explanation: "Attribute selectors target elements using their HTML attributes."
    },
    {
      question: "Which selector has higher specificity?",
      options: [
        "Element Selector",
        "Class Selector",
        "ID Selector",
        "Universal Selector"
      ],
      answer: 2,
      explanation: "ID selectors have higher specificity than class and element selectors."
    }
  ],

  interviewQuestions: [
    {
      question: "What are CSS Selectors?",
      answer: "CSS Selectors are patterns used to select HTML elements so that CSS styles can be applied to them."
    },
    {
      question: "What is the difference between a Class Selector and an ID Selector?",
      answer: "A Class Selector can be reused on multiple HTML elements and starts with a dot (.), whereas an ID Selector should be unique within a page and starts with a hash (#)."
    },
    {
      question: "What is the Universal Selector?",
      answer: "The Universal Selector (*) selects every HTML element on the webpage. It is commonly used to reset default browser styles."
    },
    {
      question: "What is CSS Specificity?",
      answer: "Specificity is the rule that determines which CSS selector takes precedence when multiple selectors target the same element. Inline styles have the highest priority, followed by ID selectors, class selectors, and element selectors."
    },
    {
      question: "Which selector should you prefer in large projects?",
      answer: "Class selectors are preferred because they are reusable, maintainable, and make CSS easier to organize."
    }
  ],

  nextTopic: "css-colors"
},
{
  id: "css-colors",
  title: "CSS Colors",
  slug: "css-colors",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  readTime: "18 min read",
  difficulty: "Beginner",
  description: "Learn CSS Colors from beginner to advanced, including color names, HEX, RGB, RGBA, HSL, HSLA, opacity, transparency, best practices, and accessibility guidelines.",

  companyTags: [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Capgemini",
    "Cognizant"
  ],

  sections: [
    {
      heading: "What are CSS Colors?",
      content: `
CSS Colors are used to define the color of text, backgrounds, borders, shadows, and many other HTML elements.

Colors play a crucial role in improving the appearance and user experience of a website.

Using CSS, developers can create attractive, accessible, and responsive user interfaces.
      `.trim()
    },

    {
      heading: "Why are Colors Important?",
      content: `
Colors improve the visual appearance of a webpage and help users understand content quickly.

Benefits include:

• Better readability
• Improved user experience
• Attractive UI
• Brand identity
• Accessibility
• Visual hierarchy
• Better engagement
      `.trim()
    },

    {
      heading: "Ways to Specify Colors in CSS",
      content: `
CSS provides several ways to define colors.

The most commonly used methods are:

• Color Name
• HEX Color
• RGB Color
• RGBA Color
• HSL Color
• HSLA Color
• Transparent
• CurrentColor
      `.trim()
    },

    {
      heading: "1. Color Names",
      content: `
CSS supports more than 140 predefined color names.

Examples:

• red
• blue
• green
• black
• white
• gray
• orange
• purple
• yellow
• pink

Example:

color: red;
background-color: lightblue;
      `.trim()
    },

    {
      heading: "2. HEX Colors",
      content: `
HEX (Hexadecimal) colors start with the # symbol.

Syntax:

#RRGGBB

Example:

#ff0000 → Red
#00ff00 → Green
#0000ff → Blue
#ffffff → White
#000000 → Black

HEX values range from 00 to FF.
      `.trim()
    },

    {
      heading: "3. RGB Colors",
      content: `
RGB stands for Red, Green, and Blue.

Syntax:

rgb(red, green, blue)

Each value ranges from 0 to 255.

Example:

rgb(255,0,0)
rgb(0,255,0)
rgb(0,0,255)

RGB is commonly used in modern web development.
      `.trim()
    },

    {
      heading: "4. RGBA Colors",
      content: `
RGBA extends RGB by adding an Alpha channel.

Syntax:

rgba(red, green, blue, alpha)

Alpha values range from 0 to 1.

0 = Fully Transparent

1 = Fully Visible

Example:

rgba(255,0,0,0.5)

This creates a semi-transparent red color.
      `.trim()
    },

    {
      heading: "5. HSL Colors",
      content: `
HSL stands for:

H → Hue

S → Saturation

L → Lightness

Example:

hsl(0,100%,50%)

Hue ranges from 0° to 360°.

Saturation and Lightness are percentages.
      `.trim()
    },

    {
      heading: "6. HSLA Colors",
      content: `
HSLA is similar to HSL but includes transparency.

Syntax:

hsla(hue, saturation, lightness, alpha)

Example:

hsla(210,100%,50%,0.4)

Useful for overlays and transparent UI elements.
      `.trim()
    },

    {
      heading: "Transparent Color",
      content: `
CSS provides the keyword:

transparent

Example:

background-color: transparent;

The element has no visible background color.
      `.trim()
    },

    {
      heading: "CurrentColor Keyword",
      content: `
The currentColor keyword uses the element's current text color.

Example:

border: 2px solid currentColor;

This keeps borders consistent with text color.
      `.trim()
    },

    {
      heading: "Opacity",
      content: `
Opacity controls the transparency of an entire element.

Syntax:

opacity: 0.5;

Range:

0 = Invisible

1 = Fully Visible

Example:

img {
    opacity: 0.7;
}

Unlike RGBA, opacity affects the entire element, including its children.
      `.trim()
    },

    {
      heading: "Accessibility and Contrast",
      content: `
Good color contrast improves readability.

Best practices:

• Use dark text on light backgrounds.
• Avoid low-contrast combinations.
• Check WCAG accessibility guidelines.
• Ensure sufficient contrast for visually impaired users.
      `.trim()
    },

    {
      heading: "Best Practices",
      content: `
• Prefer HEX or RGB for consistency.
• Use RGBA or HSLA for transparency.
• Maintain proper color contrast.
• Limit the number of colors in a design.
• Use CSS variables for reusable color palettes.
• Follow your brand's color guidelines.
      `.trim()
    }
  ],

  codeExamples: [
    {
      title: "Using Color Names",
      language: "css",
      code: `h1 {
    color: blue;
}

body {
    background-color: lightgray;
}`,
      output: "The heading appears blue, and the page has a light gray background."
    },
    {
      title: "HEX Colors",
      language: "css",
      code: `h1 {
    color: #ff5733;
}`,
      output: "The heading uses a HEX color value."
    },
    {
      title: "RGB Colors",
      language: "css",
      code: `p {
    color: rgb(0,128,255);
}`,
      output: "Paragraph text is displayed using an RGB color."
    },
    {
      title: "RGBA Colors",
      language: "css",
      code: `div {
    background: rgba(255,0,0,0.5);
}`,
      output: "The div has a semi-transparent red background."
    },
    {
      title: "HSL Colors",
      language: "css",
      code: `button {
    background: hsl(120,100%,40%);
}`,
      output: "The button has a green background defined using HSL."
    },
    {
      title: "Opacity",
      language: "css",
      code: `img {
    opacity: 0.6;
}`,
      output: "The image appears 60% visible."
    }
  ],

  mcqs: [
    {
      question: "Which symbol starts a HEX color?",
      options: ["@", "#", "&", "$"],
      answer: 1,
      explanation: "HEX color values always begin with the # symbol."
    },
    {
      question: "Which color model includes transparency?",
      options: ["RGB", "HEX", "RGBA", "CMYK"],
      answer: 2,
      explanation: "RGBA includes an alpha channel for transparency."
    },
    {
      question: "What is the alpha value range in RGBA?",
      options: ["0 to 100", "1 to 255", "0 to 1", "0 to 360"],
      answer: 2,
      explanation: "The alpha value ranges from 0 (transparent) to 1 (opaque)."
    },
    {
      question: "How many predefined color names does CSS support?",
      options: ["16", "64", "100", "More than 140"],
      answer: 3,
      explanation: "CSS supports more than 140 standard color names."
    },
    {
      question: "Which property controls the transparency of an entire element?",
      options: ["alpha", "opacity", "visibility", "filter"],
      answer: 1,
      explanation: "The opacity property controls the transparency of an entire element."
    }
  ],

  interviewQuestions: [
    {
      question: "What are the different ways to specify colors in CSS?",
      answer: "Colors can be specified using color names, HEX, RGB, RGBA, HSL, HSLA, transparent, and currentColor."
    },
    {
      question: "What is the difference between RGB and RGBA?",
      answer: "RGB defines colors using red, green, and blue values, while RGBA adds an alpha channel to control transparency."
    },
    {
      question: "What is the difference between opacity and RGBA?",
      answer: "Opacity affects the entire element, including its children. RGBA only affects the transparency of the specified color."
    },
    {
      question: "What is the currentColor keyword?",
      answer: "currentColor uses the current text color of an element, making it useful for keeping borders and other properties consistent with the text color."
    },
    {
      question: "Why is color contrast important in web design?",
      answer: "Proper color contrast improves readability, accessibility, and user experience, especially for users with visual impairments."
    }
  ],

  nextTopic: "css-backgrounds"
},
{
  id: "css-backgrounds",
  title: "CSS Backgrounds",
  slug: "css-backgrounds",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  readTime: "22 min read",
  difficulty: "Beginner",
  description: "Learn CSS Backgrounds from beginner to advanced, including background color, image, repeat, attachment, position, size, origin, clip, multiple backgrounds, gradients, and best practices.",

  companyTags: [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Capgemini",
    "Cognizant"
  ],

  sections: [
    {
      heading: "Introduction to CSS Backgrounds",
      content: `
CSS Background properties are used to control the background appearance of HTML elements.

Using CSS backgrounds, developers can add:

• Colors
• Images
• Gradients
• Patterns
• Multiple backgrounds

Backgrounds improve the visual appeal of a webpage and are widely used in modern web design.
      `.trim()
    },

    {
      heading: "Background Properties",
      content: `
CSS provides several background properties.

• background-color
• background-image
• background-repeat
• background-position
• background-size
• background-attachment
• background-origin
• background-clip
• background
      `.trim()
    },

    {
      heading: "1. background-color",
      content: `
The background-color property sets the background color of an element.

Example:

background-color: lightblue;

You can use:

• Color names
• HEX values
• RGB
• RGBA
• HSL
• HSLA
      `.trim()
    },

    {
      heading: "2. background-image",
      content: `
The background-image property sets one or more background images.

Syntax:

background-image: url("image.jpg");

You can also use gradients as background images.
      `.trim()
    },

    {
      heading: "3. background-repeat",
      content: `
The background-repeat property controls whether an image repeats.

Values:

• repeat
• repeat-x
• repeat-y
• no-repeat
• space
• round

Example:

background-repeat: no-repeat;
      `.trim()
    },

    {
      heading: "4. background-position",
      content: `
Specifies where the background image appears.

Common values:

• left
• right
• center
• top
• bottom

Example:

background-position: center center;
      `.trim()
    },

    {
      heading: "5. background-size",
      content: `
Controls the size of the background image.

Common values:

• auto
• cover
• contain
• 100% 100%

Example:

background-size: cover;

Cover is the most commonly used value for hero sections.
      `.trim()
    },

    {
      heading: "6. background-attachment",
      content: `
Controls whether the background scrolls.

Values:

• scroll
• fixed
• local

Example:

background-attachment: fixed;

Used to create the Parallax scrolling effect.
      `.trim()
    },

    {
      heading: "7. background-origin",
      content: `
Defines where the background image starts.

Values:

• padding-box
• border-box
• content-box
      `.trim()
    },

    {
      heading: "8. background-clip",
      content: `
Defines where the background extends.

Values:

• border-box
• padding-box
• content-box

Useful for advanced UI design.
      `.trim()
    },

    {
      heading: "9. Shorthand background Property",
      content: `
All background properties can be combined.

Syntax:

background: color image repeat attachment position / size;

Example:

background: #000 url(hero.jpg) no-repeat center/cover fixed;

This is called the shorthand property.
      `.trim()
    },

    {
      heading: "Multiple Backgrounds",
      content: `
CSS allows multiple background images.

Example:

background-image:
url(top.png),
url(bottom.png);

Images are stacked from top to bottom.
      `.trim()
    },

    {
      heading: "CSS Gradients",
      content: `
Gradients are treated as background images.

Types:

• Linear Gradient
• Radial Gradient
• Conic Gradient

Example:

background: linear-gradient(to right, blue, purple);

Gradients eliminate the need for image files.
      `.trim()
    },

    {
      heading: "Best Practices",
      content: `
• Use optimized background images.
• Prefer background-size: cover for hero sections.
• Compress large images.
• Avoid repeating large images unnecessarily.
• Use gradients where possible.
• Maintain proper color contrast.
• Use shorthand properties to reduce code.
      `.trim()
    }
  ],

  codeExamples: [
    {
      title: "Background Color",
      language: "css",
      code: `body{
    background-color: lightgray;
}`,
      output: "The webpage has a light gray background."
    },
    {
      title: "Background Image",
      language: "css",
      code: `body{
    background-image: url("background.jpg");
}`,
      output: "The specified image appears as the page background."
    },
    {
      title: "Background Cover",
      language: "css",
      code: `body{
    background-image:url("hero.jpg");
    background-size:cover;
    background-repeat:no-repeat;
}`,
      output: "The image covers the entire page without repeating."
    },
    {
      title: "Background Position",
      language: "css",
      code: `div{
    background-position:center;
}`,
      output: "The background image is centered within the element."
    },
    {
      title: "Linear Gradient",
      language: "css",
      code: `body{
    background:linear-gradient(to right,#4facfe,#00f2fe);
}`,
      output: "A smooth blue gradient is displayed across the page."
    },
    {
      title: "Background Shorthand",
      language: "css",
      code: `body{
    background:#000 url("hero.jpg") no-repeat center/cover fixed;
}`,
      output: "The page displays a fixed, centered hero image that covers the viewport."
    }
  ],

  mcqs: [
    {
      question: "Which property sets the background color?",
      options: [
        "color",
        "background",
        "background-color",
        "bg-color"
      ],
      answer: 2,
      explanation: "The background-color property sets the background color of an element."
    },
    {
      question: "Which value prevents a background image from repeating?",
      options: [
        "repeat-x",
        "repeat",
        "no-repeat",
        "fixed"
      ],
      answer: 2,
      explanation: "The no-repeat value prevents the image from repeating."
    },
    {
      question: "Which value makes a background image cover the entire container?",
      options: [
        "contain",
        "cover",
        "100%",
        "auto"
      ],
      answer: 1,
      explanation: "The cover value scales the image to completely cover the container."
    },
    {
      question: "Which property creates a parallax effect?",
      options: [
        "background-position",
        "background-size",
        "background-attachment",
        "background-origin"
      ],
      answer: 2,
      explanation: "background-attachment: fixed is commonly used for parallax effects."
    },
    {
      question: "Which CSS feature can replace background images in many designs?",
      options: [
        "Borders",
        "Gradients",
        "Opacity",
        "Outline"
      ],
      answer: 1,
      explanation: "CSS gradients create smooth color transitions without using image files."
    }
  ],

  interviewQuestions: [
    {
      question: "What are the different background properties in CSS?",
      answer: "CSS background properties include background-color, background-image, background-repeat, background-position, background-size, background-attachment, background-origin, background-clip, and the shorthand background property."
    },
    {
      question: "What is the difference between cover and contain?",
      answer: "cover scales the image to completely cover the container, possibly cropping parts of it. contain scales the image so the entire image is visible, which may leave empty space."
    },
    {
      question: "What is the purpose of background-repeat?",
      answer: "The background-repeat property controls whether and how a background image repeats horizontally or vertically."
    },
    {
      question: "What is the shorthand background property?",
      answer: "The shorthand background property combines multiple background properties into a single declaration, making CSS shorter and easier to read."
    },
    {
      question: "Can CSS use multiple background images?",
      answer: "Yes. CSS allows multiple background images by separating them with commas. The first image is placed on top of the others."
    }
  ],

  nextTopic: "css-borders"
},
{
  id: "css-borders",
  title: "CSS Borders",
  slug: "css-borders",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  readTime: "20 min read",
  difficulty: "Beginner",
  description: "Learn CSS Borders from beginner to advanced, including border styles, width, color, radius, shorthand property, individual borders, border images, and best practices.",

  companyTags: [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Capgemini",
    "Cognizant"
  ],

  sections: [
    {
      heading: "What are CSS Borders?",
      content: `
CSS Borders are used to draw a line around an HTML element. A border surrounds the element's padding and content, helping separate it from other elements on the webpage.

Borders improve the visual appearance of buttons, cards, images, forms, tables, and many other UI components.
      `.trim()
    },

    {
      heading: "Border Properties",
      content: `
CSS provides several properties to control borders.

• border-style
• border-width
• border-color
• border-radius
• border
• border-top
• border-right
• border-bottom
• border-left
• border-image

These properties can be used individually or together.
      `.trim()
    },

    {
      heading: "1. border-style",
      content: `
The border-style property specifies the style of the border.

Common values:

• solid
• dotted
• dashed
• double
• groove
• ridge
• inset
• outset
• none
• hidden

Example:

border-style: solid;
      `.trim()
    },

    {
      heading: "2. border-width",
      content: `
The border-width property defines the thickness of the border.

Values include:

• thin
• medium
• thick
• 1px
• 2px
• 5px

Example:

border-width: 3px;
      `.trim()
    },

    {
      heading: "3. border-color",
      content: `
The border-color property sets the color of the border.

You can use:

• Color names
• HEX
• RGB
• RGBA
• HSL
• HSLA

Example:

border-color: blue;
      `.trim()
    },

    {
      heading: "4. border-radius",
      content: `
The border-radius property creates rounded corners.

Example:

border-radius: 10px;

Common values:

• 5px
• 10px
• 20px
• 50%

A value of 50% creates a circle if the element has equal width and height.
      `.trim()
    },

    {
      heading: "5. Border Shorthand Property",
      content: `
The border shorthand combines multiple border properties.

Syntax:

border: width style color;

Example:

border: 2px solid red;

This is the most commonly used approach.
      `.trim()
    },

    {
      heading: "Individual Borders",
      content: `
CSS allows different borders on each side.

Properties:

• border-top
• border-right
• border-bottom
• border-left

Example:

border-top: 4px solid blue;
border-bottom: 2px dashed red;
      `.trim()
    },

    {
      heading: "Rounded Buttons and Cards",
      content: `
Modern websites use rounded borders extensively.

Examples include:

• Buttons
• Cards
• Input fields
• Profile images
• Navigation menus

Rounded corners create a modern and user-friendly design.
      `.trim()
    },

    {
      heading: "Border Image",
      content: `
The border-image property allows an image to be used as a border.

Syntax:

border-image: url(border.png) 30 round;

Although powerful, it is less commonly used than regular borders.
      `.trim()
    },

    {
      heading: "Best Practices",
      content: `
• Use border shorthand for cleaner code.
• Prefer subtle border colors.
• Use border-radius for modern UI.
• Avoid overly thick borders.
• Maintain consistent border styles throughout the website.
• Use borders to improve visual hierarchy.
      `.trim()
    }
  ],

  codeExamples: [
    {
      title: "Solid Border",
      language: "css",
      code: `div {
    border: 2px solid black;
}`,
      output: "Displays a solid black border around the div."
    },
    {
      title: "Dashed Border",
      language: "css",
      code: `p {
    border: 3px dashed red;
}`,
      output: "Displays a red dashed border around the paragraph."
    },
    {
      title: "Rounded Border",
      language: "css",
      code: `.card {
    border: 1px solid #ccc;
    border-radius: 12px;
}`,
      output: "Creates a card with light gray rounded borders."
    },
    {
      title: "Different Borders on Each Side",
      language: "css",
      code: `.box {
    border-top: 4px solid blue;
    border-right: 2px dashed green;
    border-bottom: 4px solid red;
    border-left: 2px dotted orange;
}`,
      output: "Each side of the box has a different border style and color."
    },
    {
      title: "Circular Image",
      language: "css",
      code: `img {
    border: 3px solid #333;
    border-radius: 50%;
}`,
      output: "The image appears circular with a dark border."
    },
    {
      title: "Border Image",
      language: "css",
      code: `.box {
    border: 20px solid transparent;
    border-image: url("border.png") 30 round;
}`,
      output: "Applies an image as the border around the element."
    }
  ],

  mcqs: [
    {
      question: "Which property specifies the border style?",
      options: [
        "border-type",
        "border-style",
        "border-format",
        "border-design"
      ],
      answer: 1,
      explanation: "The border-style property specifies the appearance of the border."
    },
    {
      question: "Which value creates rounded corners?",
      options: [
        "border-width",
        "border-radius",
        "border-color",
        "border-style"
      ],
      answer: 1,
      explanation: "border-radius is used to round the corners of an element."
    },
    {
      question: "Which shorthand property defines width, style, and color together?",
      options: [
        "border-box",
        "border",
        "border-all",
        "outline"
      ],
      answer: 1,
      explanation: "The border shorthand combines width, style, and color."
    },
    {
      question: "Which border style displays dots?",
      options: [
        "solid",
        "double",
        "dotted",
        "groove"
      ],
      answer: 2,
      explanation: "The dotted value creates a dotted border."
    },
    {
      question: "What value creates a perfect circle for a square element?",
      options: [
        "25%",
        "50%",
        "100%",
        "10px"
      ],
      answer: 1,
      explanation: "border-radius: 50% creates a circle when the element has equal width and height."
    }
  ],

  interviewQuestions: [
    {
      question: "What are CSS Borders?",
      answer: "CSS Borders are lines drawn around an HTML element's content and padding. They help separate elements and improve the visual appearance of a webpage."
    },
    {
      question: "What is the border shorthand property?",
      answer: "The border shorthand combines border-width, border-style, and border-color into a single declaration, for example: border: 2px solid blue;"
    },
    {
      question: "What is the purpose of border-radius?",
      answer: "The border-radius property creates rounded corners. A value of 50% can create a circular shape when applied to a square element."
    },
    {
      question: "Can different border styles be applied to each side of an element?",
      answer: "Yes. CSS provides border-top, border-right, border-bottom, and border-left properties to style each side individually."
    },
    {
      question: "What is border-image in CSS?",
      answer: "The border-image property allows an image to be used as the border of an element. It is useful for decorative borders but is less commonly used than standard border properties."
    }
  ],

  nextTopic: "css-margins"
},
{
  id: "css-margins",
  title: "CSS Margins",
  slug: "css-margins",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  readTime: "22 min read",
  difficulty: "Beginner",
  description: "Learn CSS Margins from beginner to advanced, including margin properties, shorthand, auto margins, negative margins, margin collapse, logical properties, and best practices.",

  companyTags: [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Capgemini",
    "Cognizant"
  ],

  sections: [
    {
      heading: "What are CSS Margins?",
      content: `
CSS Margins create space outside an element's border. They separate one element from another, helping create clean and organized layouts.

Margins are transparent, meaning they do not have a background color. They simply create empty space around an element.

Margins are one of the four parts of the CSS Box Model:

• Content
• Padding
• Border
• Margin (Outer Space)
      `.trim()
    },

    {
      heading: "Why are Margins Important?",
      content: `
Margins improve the overall appearance and readability of a webpage.

Benefits include:

• Creates spacing between elements.
• Prevents elements from touching each other.
• Improves page layout.
• Makes content easier to read.
• Helps create responsive designs.
      `.trim()
    },

    {
      heading: "Margin Properties",
      content: `
CSS provides four individual margin properties.

• margin-top
• margin-right
• margin-bottom
• margin-left

Each property controls the margin on one side of an element.
      `.trim()
    },

    {
      heading: "margin-top",
      content: `
The margin-top property adds space above an element.

Example:

margin-top: 20px;

The element moves downward by creating space above it.
      `.trim()
    },

    {
      heading: "margin-right",
      content: `
The margin-right property adds space to the right side of an element.

Example:

margin-right: 15px;

Useful when placing elements side by side.
      `.trim()
    },

    {
      heading: "margin-bottom",
      content: `
The margin-bottom property adds space below an element.

Example:

margin-bottom: 30px;

Commonly used to separate paragraphs, headings, and sections.
      `.trim()
    },

    {
      heading: "margin-left",
      content: `
The margin-left property adds space on the left side.

Example:

margin-left: 25px;

Often used for alignment and indentation.
      `.trim()
    },

    {
      heading: "Margin Shorthand Property",
      content: `
Instead of writing four separate properties, CSS provides the shorthand property.

Examples:

margin: 20px;

(All four sides)

margin: 20px 10px;

(Top-Bottom | Left-Right)

margin: 20px 15px 10px;

(Top | Left-Right | Bottom)

margin: 20px 15px 10px 5px;

(Top | Right | Bottom | Left)

This is the recommended approach.
      `.trim()
    },

    {
      heading: "Auto Margin",
      content: `
The value auto allows the browser to calculate the margin automatically.

Example:

margin: auto;

A common use is centering a block element.

Example:

width: 300px;
margin: auto;

The element is horizontally centered within its parent container.
      `.trim()
    },

    {
      heading: "Negative Margins",
      content: `
Margins can have negative values.

Example:

margin-top: -20px;

Negative margins pull elements closer together or even overlap them.

Use negative margins carefully, as they can make layouts harder to maintain.
      `.trim()
    },

    {
      heading: "Margin Collapse",
      content: `
Vertical margins between two adjacent block elements may collapse into a single margin.

Example:

Element A:
margin-bottom: 30px;

Element B:
margin-top: 20px;

The resulting space is 30px, not 50px.

This behavior is called Margin Collapse and only occurs with vertical margins.
      `.trim()
    },

    {
      heading: "Logical Margin Properties",
      content: `
CSS also provides logical properties that adapt to different writing directions.

Examples:

• margin-inline-start
• margin-inline-end
• margin-block-start
• margin-block-end

These are useful for multilingual websites.
      `.trim()
    },

    {
      heading: "Best Practices",
      content: `
• Use shorthand whenever possible.
• Maintain consistent spacing throughout the website.
• Avoid excessive negative margins.
• Use auto margins for horizontal centering.
• Prefer Flexbox or Grid for complex layouts instead of relying on margins.
      `.trim()
    }
  ],

  codeExamples: [
    {
      title: "Basic Margin",
      language: "css",
      code: `div {
    margin: 20px;
}`,
      output: "Adds 20px of space around all four sides of the div."
    },
    {
      title: "Individual Margins",
      language: "css",
      code: `h1 {
    margin-top: 30px;
    margin-bottom: 20px;
}`,
      output: "Adds space above and below the heading."
    },
    {
      title: "Margin Shorthand",
      language: "css",
      code: `.box {
    margin: 20px 40px;
}`,
      output: "Adds 20px margin to the top and bottom, and 40px to the left and right."
    },
    {
      title: "Centering with Auto Margin",
      language: "css",
      code: `.container {
    width: 400px;
    margin: auto;
}`,
      output: "Centers the container horizontally within its parent."
    },
    {
      title: "Negative Margin",
      language: "css",
      code: `.card {
    margin-top: -15px;
}`,
      output: "Moves the card upward by 15px."
    },
    {
      title: "Four-Value Margin",
      language: "css",
      code: `.box {
    margin: 10px 20px 30px 40px;
}`,
      output: "Applies different margins to each side of the element."
    }
  ],

  mcqs: [
    {
      question: "What does the margin property control?",
      options: [
        "Space inside the border",
        "Space outside the border",
        "Border thickness",
        "Element width"
      ],
      answer: 1,
      explanation: "Margin controls the transparent space outside an element's border."
    },
    {
      question: "Which shorthand centers a block element horizontally?",
      options: [
        "margin: center;",
        "margin: auto;",
        "margin: middle;",
        "margin: 50%;"
      ],
      answer: 1,
      explanation: "margin: auto; centers a block element horizontally when it has a defined width."
    },
    {
      question: "Can margins have negative values?",
      options: [
        "No",
        "Only in CSS3",
        "Yes",
        "Only margin-top"
      ],
      answer: 2,
      explanation: "Margins can have negative values to pull elements closer together."
    },
    {
      question: "Which margins collapse in normal document flow?",
      options: [
        "Horizontal margins",
        "Vertical margins",
        "All margins",
        "No margins"
      ],
      answer: 1,
      explanation: "Only vertical margins (top and bottom) can collapse."
    },
    {
      question: "Which shorthand applies margins in the order Top, Right, Bottom, Left?",
      options: [
        "margin: 10px 20px;",
        "margin: 10px;",
        "margin: 10px 20px 30px 40px;",
        "margin: auto;"
      ],
      answer: 2,
      explanation: "The four-value shorthand follows the order: Top, Right, Bottom, Left."
    }
  ],

  interviewQuestions: [
    {
      question: "What is the difference between margin and padding?",
      answer: "Margin creates transparent space outside an element's border, while padding creates space inside the border between the content and the border."
    },
    {
      question: "What is margin collapse in CSS?",
      answer: "Margin collapse occurs when the vertical margins of two adjacent block elements overlap, resulting in a single margin equal to the larger of the two values."
    },
    {
      question: "What is the use of margin: auto?",
      answer: "margin: auto is commonly used to horizontally center a block-level element that has a specified width."
    },
    {
      question: "Can margins have negative values?",
      answer: "Yes. Negative margins move elements closer together or cause them to overlap. They should be used carefully."
    },
    {
      question: "Why should developers use the margin shorthand property?",
      answer: "The shorthand property reduces code, improves readability, and makes CSS easier to maintain."
    }
  ],

  nextTopic: "css-padding"
},

]
