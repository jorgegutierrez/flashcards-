// src/phrases.js

const phrases = [
    { frontText: "What is React?", backText: "React is a JavaScript library for building user interfaces." },
    { frontText: "What is the difference between class components and functional components in React?", backText: "Class components are ES6 classes that extend from React.Component and can have local state and lifecycle methods, while functional components are JavaScript functions that can accept props and return React elements." },
    { frontText: "What is JSX?", backText: "JSX is a JavaScript extension that allows writing HTML within JavaScript. It compiles to React function calls to create React elements." },
    { frontText: "What is state in React?", backText: "State is an object used to store data that can change in a React component. When the state of a component changes, the component re-renders." },
    { frontText: "What is a prop in React?", backText: "A prop (short for property) is an object passed from a parent component to a child component as an attribute and can contain data that the child uses to render." },
    { frontText: "What are controlled and uncontrolled components in React?", backText: "Controlled components are those where the state of a React component is stored in the component's local state and updated via setState() methods, while uncontrolled components maintain their own internal state and update the DOM directly." },
    { frontText: "What is the purpose of shouldComponentUpdate() in React?", backText: "shouldComponentUpdate() is a lifecycle method of a React component that allows the component to decide whether it should re-render or not. It's used for performance optimization by avoiding unnecessary re-renders." },
    { frontText: "What is context in React?", backText: "Context is a feature of React that allows passing data through the component tree without having to pass props explicitly at every level of the tree." },
    { frontText: "What is a higher-order component (HOC) in React?", backText: "A higher-order component is a function that takes a component and returns a new component with additional functionality. It's commonly used for code reuse, logic abstraction, and cross-cutting concerns." },
    { frontText: "What is React Router?", backText: "React Router is a popular library for adding routing functionality to React applications. It allows defining routes, rendering components based on those routes, and handling navigation in a single-page application." }
  ];
  
  export default phrases;
  