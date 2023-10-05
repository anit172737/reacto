const Menu = [
  {
    question: "What is Javascript ?",
    answer:
      "JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language used to create interactive web applications. While it is most well-known as the scripting language for Web pages, it is versatile programming language because it is used for both frontend and backend side.",
  },
  {
    question: "Is javascript synchronous or asynchronous ?",
    answer:
      "JavaScript is a synchronous single-threaded( just one line of code may be run at once ) language but with help of event loop and promise javascript used to do asynchronous programming.",
  },
  {
    question: "How many data types in javascript ?",
    answer:
      "There are 8 data types in javascript - 1. String, 2. Number, 3. Boolean, 4. Undefined, 5. Null, 6. Symbol, 7. BigInt, 8. Object",
  },
  {
    question: "Define primitive and non-primitive data types' ?",
    answer:
      "'Primitive' data types are predefined data types provided by javascript. it is also known as in-built data types. 'Non-primitive' data types are derived from primitive data types. it is also knows as derived data types or reference data types.' ",
  },
  {
    question: "Differece between 'undefined' and 'not defined' ?",
    answer:
      "Undefined means variable has been declared but not given a value, while Not defined means variable does'nt exist.",
  },
  {
    question: "What is Event Loop ?",
    answer:
      "Event loop constantly checks whether call stack is empty or not. if it is empty then event loop added new functions from the event queue. if it is not then the current function call is processed.",
  },
  {
    question: "What is Destructuring ?",
    answer:
      "Destructuring help us to unpack values from arrays and objects and assign them to separate variables in simple and smooth way.",
  },
  {
    question: "What is Promise ?",
    answer:
      "Promise is a way to handle asynchronous oprations, it referes as a value which will resolve or reject. Promise has three phases Pending, Fullfilled and Failed.",
  },
  {
    question: "What is Closures ?",
    answer:
      "A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.",
  },
  {
    question: "What is Hoisting ?",
    answer:
      "Hoisting refers to the process whereby variable or function declaration move to the top of their respective scope, means we can access or use variables or functions before declaration. ",
  },
  {
    question: "What is Prototype ?",
    answer:
      "All javascript objects inherites properties and methods from a prototype. prototype is blue print of object properties and methods.",
  },
  {
    question: "What is Currying ?",
    answer:
      "It is a javascript technique in that transforms the function of multiple agruments into several functions of single argument in sequence.",
  },
  {
    question: "What is Babel ?",
    answer:
      "Babel is a javascript compiler, which is converts ECMAScript 2015+(ES6+) code into backward compatible version of javascript in current or older browser.",
  },
  {
    question: "What is Webpack ?",
    answer:
      "Webpack is a module bundler, it is used to resolving web of dependancies and merging files into a optimize bundle for browser. the goal is to reducing the number of requests for files when user visits the web page.",
  },
  {
    question: "What is code splitting ?",
    answer:
      "Code splitting is a process of splitting the application's bundle into smaller chunks. The goal is to improve initial load time of application by loading the code which is required to run that page.",
  },
  {
    question: "What is Rendering ?",
    answer:
      "Code splitting is a process of splitting the application's bundle into smaller chunks. The goal is to improve initial load time of application by loading the code which is required to run that page.",
  },
  {
    question: "What is CSR and SSR ?",
    answer:
      "CSR stands for Client Side Rendering and SSR stands for Server Side Rendering.",
  },
  {
    question: "What is CORS ?",
    answer:
      "CORS stands for Cross Origin Resource Sharing. it is mechanism by data or any resource of a site could be shared intentionally with the third party website when there is a need.",
  },
  {
    question: "What is Cookies ?",
    answer:
      "Cookies is a just a textual information about website. when we visit a particular website, some information is saved by our local system so that when we visit the same website again, this website able to recognize us and shows us the result according our preferences.",
  },
  {
    question: "What is Tree Shaking ?",
    answer: "It is commonly used term in javascript for dead-code elimination",
  },
];

export default Menu;
