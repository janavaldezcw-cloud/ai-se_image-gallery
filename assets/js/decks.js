import { colorMap } from "./colorMap.js";

const fetchedDecks = [];

const decks = [
  {
    _id: "html-basics",
    name: "HTML Basics",
    cards: [
      {
        _id: "1",
        front: "What does HTML stand for?",
        back: "HyperText Markup Language",
      },
      {
        _id: "2",
        front: "What tag creates the largest heading on a page?",
        back: "<h1>",
      },
      {
        _id: "3",
        front: "What tag is used to create a paragraph?",
        back: "<p>",
      },
      {
        _id: "4",
        front: "What tag creates a hyperlink?",
        back: "<a>",
      },
      {
        _id: "5",
        front: "What attribute is required on every <img> tag?",
        back: "alt — it provides alternative text describing the image",
      },
      {
        _id: "6",
        front: "What tag creates an unordered (bulleted) list?",
        back: "<ul>",
      },
      {
        _id: "7",
        front: "What tag creates an ordered (numbered) list?",
        back: "<ol>",
      },
      {
        _id: "8",
        front: "What tag contains a single item in a list?",
        back: "<li>",
      },
      {
        _id: "9",
        front: "What attribute makes a link open in a new tab?",
        back: 'target="_blank"',
      },
      {
        _id: "10",
        front: "What is the root element of every HTML page?",
        back: "<html>",
      },
    ],
    color: colorMap.green,
  },
  {
    _id: "html-semantic",
    name: "Semantic HTML",
    cards: [
      {
        _id: "11",
        front: "What semantic tag represents the top section of a page?",
        back: "<header>",
      },
      {
        _id: "12",
        front: "What semantic tag wraps the main navigation links?",
        back: "<nav>",
      },
      {
        _id: "13",
        front:
          "What semantic tag represents the primary content of the page?",
        back: "<main>",
      },
      {
        _id: "14",
        front:
          "What semantic tag represents a standalone piece of content, like a blog post?",
        back: "<article>",
      },
      {
        _id: "15",
        front:
          "What semantic tag represents a thematic grouping of content?",
        back: "<section>",
      },
      {
        _id: "16",
        front:
          "What semantic tag represents content tangentially related to the main content (e.g., a sidebar)?",
        back: "<aside>",
      },
      {
        _id: "17",
        front:
          "What semantic tag represents the bottom of a page or section?",
        back: "<footer>",
      },
      {
        _id: "18",
        front:
          "What is a key benefit of using semantic HTML over generic <div> tags?",
        back:
          "It improves accessibility, SEO, and makes the code easier to read",
      },
      {
        _id: "19",
        front:
          "What non-semantic tag is commonly used as a generic container?",
        back: "<div>",
      },
      {
        _id: "20",
        front:
          "What non-semantic inline tag is used to style or group inline content?",
        back: "<span>",
      },
    ],
    color: colorMap.blue,
  },
  {
    _id: "css-fundamentals",
    name: "CSS Fundamentals",
    cards: [
      {
        _id: "21",
        front: "What does CSS stand for?",
        back: "Cascading Style Sheets",
      },
      {
        _id: "22",
        front: "What are the three parts of a CSS rule?",
        back: "Selector, property, and value",
      },
      {
        _id: "23",
        front: "How do you select an element by its class in CSS?",
        back: "Use a dot followed by the class name — e.g., .classname",
      },
      {
        _id: "24",
        front: "How do you select an element by its ID in CSS?",
        back: "Use a hash followed by the ID — e.g., #idname",
      },
      {
        _id: "25",
        front: "What CSS property changes text color?",
        back: "color",
      },
      {
        _id: "26",
        front: "What CSS property sets the background color?",
        back: "background-color",
      },
      {
        _id: "27",
        front: "What CSS property controls the size of text?",
        back: "font-size",
      },
      {
        _id: "28",
        front: "What does display: none do to an element?",
        back:
          "Hides the element completely and removes it from the document flow",
      },
      {
        _id: "29",
        front:
          "In the cascade, which selector takes priority: a class or an element selector?",
        back: "A class selector — it has higher specificity",
      },
      {
        _id: "30",
        front: "What does the * selector match?",
        back: "Every element on the page (the universal selector)",
      },
    ],
    color: colorMap.orange,
  },
  {
    _id: "css-box-model",
    name: "CSS Box Model",
    cards: [
      {
        _id: "31",
        front:
          "What are the four parts of the CSS box model, from inside out?",
        back: "Content, padding, border, margin",
      },
      {
        _id: "32",
        front:
          "What CSS property controls the space between the content and the border?",
        back: "padding",
      },
      {
        _id: "33",
        front:
          "What CSS property controls the space outside the border, between elements?",
        back: "margin",
      },
      {
        _id: "34",
        front:
          "What value of box-sizing includes padding and border in an element's total width and height?",
        back: "border-box",
      },
      {
        _id: "35",
        front: "What is the default value of box-sizing?",
        back: "content-box",
      },
      {
        _id: "36",
        front:
          "What shorthand sets top, right, bottom, and left padding in one declaration?",
        back:
          "padding: top right bottom left — e.g., padding: 10px 20px 10px 20px",
      },
      {
        _id: "37",
        front: "What does margin: auto do when applied to a block element?",
        back: "Centers the element horizontally within its container",
      },
      {
        _id: "38",
        front: "What does overflow: hidden do?",
        back: "Clips any content that extends beyond the element's box",
      },
      {
        _id: "39",
        front:
          "What shorthand declaration adds a 1px solid black border on all sides?",
        back: "border: 1px solid black",
      },
      {
        _id: "40",
        front: "What CSS property sets the maximum width of an element?",
        back: "max-width",
      },
    ],
    color: colorMap.pink,
  },
  {
    _id: "css-flexbox",
    name: "CSS Flexbox",
    cards: [
      {
        _id: "41",
        front: "What declaration enables Flexbox on a container?",
        back: "display: flex",
      },
      {
        _id: "42",
        front:
          "What property controls whether flex items are arranged in a row or column?",
        back: "flex-direction",
      },
      {
        _id: "43",
        front: "What property aligns flex items along the main axis?",
        back: "justify-content",
      },
      {
        _id: "44",
        front: "What property aligns flex items along the cross axis?",
        back: "align-items",
      },
      {
        _id: "45",
        front: "What is the default value of flex-direction?",
        back: "row",
      },
      {
        _id: "46",
        front:
          "What value of justify-content places equal space between items but none on the edges?",
        back: "space-between",
      },
      {
        _id: "47",
        front:
          "What value of justify-content and align-items centers items?",
        back: "center",
      },
      {
        _id: "48",
        front:
          "What property allows flex items to wrap onto multiple lines?",
        back: "flex-wrap",
      },
      {
        _id: "49",
        front:
          "What property controls how much a flex item grows relative to its siblings?",
        back: "flex-grow",
      },
      {
        _id: "50",
        front: "What CSS property sets the gap between flex items?",
        back: "gap",
      },
    ],
    color: colorMap.purple,
  },
  {
    _id: "js-basics",
    name: "JavaScript Basics",
    cards: [
      {
        _id: "51",
        front:
          "What keyword declares a variable that can be reassigned later?",
        back: "let",
      },
      {
        _id: "52",
        front: "What keyword declares a variable that cannot be reassigned?",
        back: "const",
      },
      {
        _id: "53",
        front: "Name three primitive data types in JavaScript.",
        back:
          "string, number, and boolean (also: null, undefined, symbol, bigint)",
      },
      {
        _id: "54",
        front: "What does typeof return when called on a string?",
        back: '"string"',
      },
      {
        _id: "55",
        front: "What is the difference between == and === in JavaScript?",
        back:
          "== checks value only (loose equality); === checks both value and type (strict equality)",
      },
      {
        _id: "56",
        front: 'What is the result of 5 + "3" in JavaScript?',
        back: '"53" — the number is coerced to a string and concatenated',
      },
      {
        _id: "57",
        front: "What does console.log() do?",
        back: "Prints a value to the browser developer console",
      },
      {
        _id: "58",
        front: "How do you write a single-line comment in JavaScript?",
        back: "// followed by the comment text",
      },
      {
        _id: "59",
        front: "What does the ! operator do?",
        back: "Negates a boolean value (logical NOT): !true === false",
      },
      {
        _id: "60",
        front: "What values are falsy in JavaScript?",
        back: "false, 0, '' (empty string), null, undefined, and NaN",
      },
    ],
    color: colorMap.yellow,
  },
  {
    _id: "js-functions",
    name: "JavaScript Functions",
    cards: [
      {
        _id: "61",
        front: "What keyword declares a traditional named function?",
        back: "function",
      },
      {
        _id: "62",
        front: "What is a parameter?",
        back:
          "A named variable in the function definition that receives a value when the function is called",
      },
      {
        _id: "63",
        front: "What is an argument?",
        back: "The actual value passed to a function when it is called",
      },
      {
        _id: "64",
        front: "What does the return keyword do?",
        back: "Exits the function and sends a value back to the caller",
      },
      {
        _id: "65",
        front: "What is an arrow function?",
        back:
          "A concise function syntax using => — e.g., const add = (a, b) => a + b",
      },
      {
        _id: "66",
        front: "What is a callback function?",
        back:
          "A function passed as an argument to another function, to be executed later",
      },
      {
        _id: "67",
        front:
          "What is the difference between a function declaration and a function expression?",
        back:
          "Declarations are hoisted to the top of their scope; expressions are not",
      },
      {
        _id: "68",
        front: "What happens if a function has no return statement?",
        back: "It returns undefined by default",
      },
      {
        _id: "69",
        front:
          "What does writing a function name without parentheses (e.g., myFn) do?",
        back: "References the function as a value without calling it",
      },
      {
        _id: "70",
        front: "What is a higher-order function?",
        back:
          "A function that accepts another function as an argument or returns a function",
      },
    ],
    color: colorMap.green,
  },
  {
    _id: "js-arrays",
    name: "JavaScript Arrays",
    cards: [
      {
        _id: "71",
        front: "How do you access the first element of an array called arr?",
        back: "arr[0] — arrays are zero-indexed",
      },
      {
        _id: "72",
        front: "What property returns the number of elements in an array?",
        back: ".length",
      },
      {
        _id: "73",
        front:
          "What method adds one or more elements to the end of an array?",
        back: ".push()",
      },
      {
        _id: "74",
        front:
          "What method removes and returns the last element of an array?",
        back: ".pop()",
      },
      {
        _id: "75",
        front:
          "What method creates a new array by transforming each element with a callback?",
        back: ".map()",
      },
      {
        _id: "76",
        front:
          "What method returns a new array containing only elements that pass a test?",
        back: ".filter()",
      },
      {
        _id: "77",
        front:
          "What method calls a function once for each element without returning a new array?",
        back: ".forEach()",
      },
      {
        _id: "78",
        front:
          "What method returns the first element that satisfies a condition?",
        back: ".find()",
      },
      {
        _id: "79",
        front:
          "What method checks whether at least one element passes a test?",
        back: ".some()",
      },
      {
        _id: "80",
        front: "What method checks whether every element passes a test?",
        back: ".every()",
      },
    ],
    color: colorMap.blue,
  },
  {
    _id: "js-dom",
    name: "JavaScript DOM",
    cards: [
      {
        _id: "81",
        front: "What does DOM stand for?",
        back: "Document Object Model",
      },
      {
        _id: "82",
        front:
          "What method selects the first element that matches a CSS selector?",
        back: "document.querySelector()",
      },
      {
        _id: "83",
        front: "What method selects all elements that match a CSS selector?",
        back: "document.querySelectorAll()",
      },
      {
        _id: "84",
        front:
          "What property gets or sets the visible text content of an element?",
        back: ".textContent",
      },
      {
        _id: "85",
        front:
          "What property gets or sets the HTML markup inside an element?",
        back: ".innerHTML",
      },
      {
        _id: "86",
        front: "What method attaches an event handler to an element?",
        back: ".addEventListener()",
      },
      {
        _id: "87",
        front: "What method creates a new HTML element in JavaScript?",
        back: "document.createElement()",
      },
      {
        _id: "88",
        front: "What method appends a child node to a parent element?",
        back: ".append() or .appendChild()",
      },
      {
        _id: "89",
        front:
          "What property provides access to the list of classes on an element?",
        back: ".classList",
      },
      {
        _id: "90",
        front: "What method adds a class to an element's class list?",
        back: ".classList.add()",
      },
    ],
    color: colorMap.orange,
  },
  {
    _id: "web-tech-terms",
    name: "Web Tech Terms",
    cards: [
      {
        _id: "91",
        front: "What does URL stand for?",
        back: "Uniform Resource Locator",
      },
      {
        _id: "92",
        front: "What does HTTP stand for?",
        back: "HyperText Transfer Protocol",
      },
      {
        _id: "93",
        front: "What does HTTPS add over HTTP?",
        back: "Encryption via SSL/TLS, making communication secure",
      },
      {
        _id: "94",
        front: "What is a web browser?",
        back:
          "A program that retrieves, renders, and displays web pages (e.g., Chrome, Firefox)",
      },
      {
        _id: "95",
        front: "What is a web server?",
        back: "A computer that stores files and responds to client requests",
      },
      {
        _id: "96",
        front: "What is the difference between a client and a server?",
        back:
          "A client requests resources; a server responds with those resources",
      },
      {
        _id: "97",
        front: "What does DNS stand for, and what does it do?",
        back:
          "Domain Name System — it translates domain names (e.g., google.com) into IP addresses",
      },
      {
        _id: "98",
        front: "What is an IP address?",
        back:
          "A unique numerical label identifying each device on a network (e.g., 192.168.1.1)",
      },
      {
        _id: "99",
        front: "What does 'rendering' mean in the context of a browser?",
        back:
          "The process of turning HTML, CSS, and JS into a visual, interactive web page",
      },
      {
        _id: "100",
        front: "What is localhost?",
        back:
          "The loopback address (127.0.0.1) — it refers to your own computer",
      },
    ],
    color: colorMap.pink,
  },
  {
    _id: "dev-tools",
    name: "Developer Tools",
    cards: [
      {
        _id: "101",
        front: "How do you open browser Developer Tools in most browsers?",
        back:
          "Press F12 (or Cmd+Option+I on Mac), or right-click the page and choose Inspect",
      },
      {
        _id: "102",
        front: "What DevTools tab shows the page's HTML structure?",
        back: "Elements (Chrome) or Inspector (Firefox)",
      },
      {
        _id: "103",
        front:
          "What DevTools tab lets you run JavaScript expressions directly?",
        back: "Console",
      },
      {
        _id: "104",
        front: "What DevTools tab shows CSS rules for a selected element?",
        back: "The Styles panel inside the Elements (or Inspector) tab",
      },
      {
        _id: "105",
        front: "What DevTools tab shows network requests made by the page?",
        back: "Network",
      },
      {
        _id: "106",
        front:
          "What does console.error() do differently from console.log()?",
        back: "It prints the message in red and marks it as an error",
      },
      {
        _id: "107",
        front: "What is a breakpoint in DevTools?",
        back:
          "A marker that pauses code execution at a specific line so you can inspect state",
      },
      {
        _id: "108",
        front: "What does 'responsive design mode' in DevTools let you do?",
        back:
          "Preview and test how a page looks at different screen sizes and device types",
      },
      {
        _id: "109",
        front:
          "In the Elements tab, how can you temporarily change a CSS value to test it?",
        back:
          "Click the value in the Styles panel and type a new one — changes are live but not saved",
      },
      {
        _id: "110",
        front:
          "What does a red message in the Console tab usually indicate?",
        back: "A JavaScript runtime error has occurred",
      },
    ],
    color: colorMap.purple,
  },
  {
    _id: "git-basics",
    name: "Git Basics",
    cards: [
      {
        _id: "111",
        front: "What command initializes a new Git repository in a folder?",
        back: "git init",
      },
      {
        _id: "112",
        front: "What command stages a specific file for the next commit?",
        back: "git add <filename>",
      },
      {
        _id: "113",
        front: "What command creates a commit with a descriptive message?",
        back: 'git commit -m "your message here"',
      },
      {
        _id: "114",
        front:
          "What command shows the current state of your working directory?",
        back: "git status",
      },
      {
        _id: "115",
        front: "What command shows the history of commits?",
        back: "git log",
      },
      {
        _id: "116",
        front: "What is a branch in Git?",
        back:
          "An independent line of development that lets you work without affecting the main codebase",
      },
      {
        _id: "117",
        front: "What command creates and switches to a new branch?",
        back: "git checkout -b branch-name",
      },
      {
        _id: "118",
        front: "What does git pull do?",
        back:
          "Fetches changes from a remote repository and merges them into your current branch",
      },
      {
        _id: "119",
        front: "What does git push do?",
        back: "Uploads your local commits to the remote repository",
      },
      {
        _id: "120",
        front: "What is a merge conflict?",
        back:
          "When two branches have made different changes to the same part of a file and Git cannot auto-merge them",
      },
    ],
    color: colorMap.yellow,
  },
];

function getDeckByID(id) {
  return fetchedDecks.find((deck) => deck._id === id);
}

export { decks, fetchedDecks, getDeckByID };
