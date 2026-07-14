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

]
