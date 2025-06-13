const questionsData = {
  JavaScript: {
    general: [
      {
        question: "What is JavaScript?",
        answer: "JavaScript is a scripting language used to create and control dynamic website content."
      },
      {
        question: "What is closure?",
        answer: "A closure is a function that retains access to its lexical scope even when executed outside that scope."
      },
      {
        question: "What is DOM?",
        answer: "DOM stands for Document Object Model, a programming interface for HTML and XML documents."
      },
      {
        question: "What is the difference between == and ===?",
        answer: "== compares values after type coercion, while === compares both value and type."
      },
      {
        question: "What is an array in JavaScript?",
        answer: "An array is a special variable that can hold more than one value at a time."
      },
      {
        question: "What is NaN in JavaScript?",
        answer: "NaN stands for Not-a-Number, a value representing an undefined or unrepresentable number."
      },
      {
        question: "What is the use of 'let' keyword?",
        answer: "'let' is used to declare block-scoped variables."
      },
      {
        question: "What is the purpose of the 'this' keyword?",
        answer: "'this' refers to the object from which the function was called."
      },
      {
        question: "What is a promise in JavaScript?",
        answer: "A Promise is an object that represents the eventual completion or failure of an asynchronous operation."
      },
      {
        question: "What is event bubbling?",
        answer: "Event bubbling is the concept where an event starts from the deepest element and bubbles up to its parents."
      },
      {
        question: "What is hoisting?",
        answer: "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope."
      },
      {
        question: "What are arrow functions?",
        answer: "Arrow functions are a shorter syntax for writing function expressions."
      },
      {
        question: "What is setTimeout?",
        answer: "setTimeout is a function that executes a piece of code after a specified delay."
      },
      {
        question: "What is JSON?",
        answer: "JSON stands for JavaScript Object Notation, used for storing and exchanging data."
      },
      {
        question: "What is an object in JavaScript?",
        answer: "An object is a standalone entity with properties and type."
      },
      {
        question: "What are callbacks?",
        answer: "A callback is a function passed into another function as an argument."
      },
      {
        question: "What is the use of 'typeof' operator?",
        answer: "'typeof' returns the type of a variable."
      },
      {
        question: "What is a function expression?",
        answer: "A function expression is a function assigned to a variable."
      },
      {
        question: "What is the use of 'async' keyword?",
        answer: "'async' defines an asynchronous function that returns a promise."
      },
      {
        question: "What is the difference between null and undefined?",
        answer: "null is an assigned value; undefined means a variable has been declared but not assigned."
      }
    ],
    riddles: [
      { question: "I can store values, but I'm not a box. I’m used in loops and logic. What am I?", answer: "A variable." },
      { question: "I live in the browser but run code. I’m essential for the web. What am I?", answer: "JavaScript." },
      { question: "I help handle the unexpected, like errors in disguise. I try and catch the issue. What am I?", answer: "try-catch block." },
      { question: "I'm called before I'm defined, a quirky feature you might find. What am I?", answer: "Hoisting." },
      { question: "I bind ‘this’ tightly and make code short and sprightly. What am I?", answer: "Arrow function." },
      { question: "I come back later with a result or failure. You can await me. What am I?", answer: "Promise." },
      { question: "I surround a block, create scope, and start with 'function'. What am I?", answer: "Function block." },
      { question: "You compare me with triple care. I check both value and type. What am I?", answer: "===" },
      { question: "I'm undefined but not null. I'm what’s not assigned yet. What am I?", answer: "undefined." },
      { question: "You call me with a timeout, and I delay execution. What am I?", answer: "setTimeout." },
      { question: "I listen for events, and I respond to clicks and keys. What am I?", answer: "Event listener." },
      { question: "I'm the outer space that closures remember. What am I?", answer: "Lexical scope." },
      { question: "I'm an array method that checks each item and returns true or false. What am I?", answer: "filter." },
      { question: "I hold named data in key-value pairs. I'm not an array. What am I?", answer: "Object." },
      { question: "I'm the mechanism behind async/await. What am I?", answer: "Promise." },
      { question: "I look like JSON but allow trailing commas and comments. What am I?", answer: "JavaScript object literal." },
      { question: "I'm a loop that never ends unless you tell me to break. What am I?", answer: "while(true)." },
      { question: "I log messages to the developer's console. What am I?", answer: "console.log." },
      { question: "I'm not false, but I'm treated as false in conditions. I'm a tricky one. What am I?", answer: "Falsy value." },
      { question: "I'm the DOM method to grab an element by ID. What am I?", answer: "getElementById." }
    ]
  },

  HTML: {
    general: [
      {
        question: "What does HTML stand for?",
        answer: "HyperText Markup Language."
      },
      {
        question: "What tag is used to insert an image?",
        answer: "The <img> tag."
      },
      {
        question: "Which tag is used to create a hyperlink?",
        answer: "<a> tag."
      },
      {
        question: "What tag defines a table row?",
        answer: "<tr> tag."
      },
      {
        question: "What is the root element of an HTML document?",
        answer: "<html>."
      },
      {
        question: "Which tag is used to define a paragraph?",
        answer: "<p> tag."
      },
      {
        question: "What tag is used to create a list item?",
        answer: "<li> tag."
      },
      {
        question: "What does the <head> tag contain?",
        answer: "Metadata like title, links, and scripts."
      },
      {
        question: "How do you create a checkbox in HTML?",
        answer: "Using <input type='checkbox'>."
      },
      {
        question: "What does the <br> tag do?",
        answer: "Inserts a line break."
      },
      {
        question: "What tag is used to embed a video?",
        answer: "<video> tag."
      },
      {
        question: "What tag is used for headings?",
        answer: "<h1> to <h6> tags."
      },
      {
        question: "What is a semantic element in HTML?",
        answer: "An element that clearly describes its meaning, like <article> or <section>."
      },
      {
        question: "How do you comment in HTML?",
        answer: "<!-- comment -->."
      },
      {
        question: "What tag is used for form input?",
        answer: "<input> tag."
      },
      {
        question: "What does the <title> tag do?",
        answer: "Sets the title in the browser tab."
      },
      {
        question: "What is the use of the <meta> tag?",
        answer: "Provides metadata like charset and viewport."
      },
      {
        question: "What is the difference between <div> and <span>?",
        answer: "<div> is block-level; <span> is inline."
      },
      {
        question: "How do you make a text bold?",
        answer: "Using <b> or <strong>."
      },
      {
        question: "How do you add a comment in HTML?",
        answer: "By using <!-- and -->."
      }
    ],
    riddles: [
      { question: "I create the structure but not the style. Who am I?", answer: "HTML." },
      { question: "I start every document, I’m the root of all tags. What am I?", answer: "<html>." },
      { question: "I’m seen in tabs, but not in the body. I give pages names. What am I?", answer: "<title>." },
      { question: "I break the line but not the code. I’m just one tag. What am I?", answer: "<br>." },
      { question: "I show up bold but I’m not strong. What tag am I?", answer: "<b>." },
      { question: "I create links and can take you far. What tag am I?", answer: "<a>." },
      { question: "I'm the skeleton of your form. What tag am I?", answer: "<form>." },
      { question: "I group elements together but have no meaning. What tag am I?", answer: "<div>." },
      { question: "I'm a self-closing tag that shows a picture. What am I?", answer: "<img>." },
      { question: "I make lists look neat, starting with bullets. What am I?", answer: "<ul>." },
      { question: "I'm a label, but I don't show anything. I go with inputs. What am I?", answer: "<label>." },
      { question: "I’m the comment in your code. You’ll never see me show. What am I?", answer: "<!-- Comment -->." },
      { question: "I represent time or dates. I'm not just a paragraph. What tag am I?", answer: "<time>." },
      { question: "I structure your content like a chapter. I'm used semantically. What tag am I?", answer: "<section>." },
      { question: "I go in the <head> but define character sets and more. What tag am I?", answer: "<meta>." },
      { question: "I'm not visible, but I run the show. I add interactivity. What tag am I?", answer: "<script>." },
      { question: "I’m used in tables and make up rows. What tag am I?", answer: "<tr>." },
      { question: "I collect user input like a short sentence. What tag am I?", answer: "<input>." },
      { question: "I allow users to pick one from many. What tag am I?", answer: "<select>." },
      { question: "I give you options in a dropdown. What tag am I?", answer: "<option>." }
    ]
  },

  CSS: {
    general: [
      {
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets."
      },
      {
        question: "What is the use of z-index?",
        answer: "z-index controls the vertical stacking order of elements."
      },
      {
        question: "How do you add CSS to HTML?",
        answer: "Using <style> tag, inline styles, or external stylesheet."
      },
      {
        question: "What is a class selector in CSS?",
        answer: "A selector that targets elements with a specific class name, using '.'"
      },
      {
        question: "How do you select an element by ID?",
        answer: "Using # followed by the ID name."
      },
      {
        question: "What is the box model in CSS?",
        answer: "It includes margins, borders, padding, and the content itself."
      },
      {
        question: "What is the default position of elements?",
        answer: "Static."
      },
      {
        question: "What does the display: none do?",
        answer: "Hides the element from the page layout."
      },
      {
        question: "What is the use of flexbox?",
        answer: "It helps in designing a flexible responsive layout structure."
      },
      {
        question: "What property is used to change text color?",
        answer: "color."
      },
      {
        question: "What is the use of the float property?",
        answer: "It is used to place elements beside each other."
      },
      {
        question: "How do you make a background image not repeat?",
        answer: "Use background-repeat: no-repeat;"
      },
      {
        question: "What is a pseudo-class?",
        answer: "A keyword added to selectors that specifies a special state of the element, like :hover."
      },
      {
        question: "How do you make text italic in CSS?",
        answer: "Use font-style: italic;"
      },
      {
        question: "What does 'inherit' mean in CSS?",
        answer: "It inherits the property value from the parent element."
      },
      {
        question: "What is the difference between em and rem?",
        answer: "em is relative to the parent, rem is relative to the root."
      },
      {
        question: "What is the use of media queries?",
        answer: "To apply different styles for different devices/screen sizes."
      },
      {
        question: "How do you make a circle using CSS?",
        answer: "Set border-radius: 50% on a square element."
      },
      {
        question: "What is specificity in CSS?",
        answer: "It determines which CSS rule is applied when multiple rules match the same element."
      },
      {
        question: "How do you center a div using flex?",
        answer: "Use display: flex; justify-content: center; align-items: center;"
      }
    ],
    riddles: [
      { question: "I add color but no content. I am everywhere but seen nowhere. Who am I?", answer: "CSS." },
      { question: "I’m the reason elements are styled. I cascade. What am I?", answer: "CSS rules." },
      { question: "I'm used for spacing outside borders. What property am I?", answer: "margin." },
      { question: "I'm used for spacing inside borders. What property am I?", answer: "padding." },
      { question: "I'm used to change the font size. What property am I?", answer: "font-size." },
      { question: "I can make text bold. What property am I?", answer: "font-weight." },
      { question: "I turn a block into a flex container. What property am I?", answer: "display: flex." },
      { question: "I’m a color overlay that’s partially transparent. What value am I?", answer: "rgba." },
      { question: "I control stacking in 3D space. What property am I?", answer: "z-index." },
      { question: "I change based on screen width. What am I?", answer: "Media query." },
      { question: "I float to the left or right. What property am I?", answer: "float." },
      { question: "I’m used to align children vertically and horizontally. What layout method am I?", answer: "Flexbox." },
      { question: "I draw a boundary around elements. What property am I?", answer: "border." },
      { question: "I center items inside flex containers. What property am I?", answer: "justify-content or align-items." },
      { question: "I can be none, block, or inline. What property am I?", answer: "display." },
      { question: "I style links when hovered. What pseudo-class am I?", answer: ":hover." },
      { question: "I transition between two styles smoothly. What property am I?", answer: "transition." },
      { question: "I loop infinitely, adding motion. What feature am I?", answer: "animation." },
      { question: "I apply a drop shadow. What property am I?", answer: "box-shadow." },
      { question: "I remove the bullet points in a list. What property am I?", answer: "list-style-type: none." }
    ]
  }
};

export default questionsData;
