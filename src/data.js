const data = [
  {
    id: 1,
    question: "Why do we use useState to store a value vs. a plain variable?",
    info:
      "Because useState is synced with the real time rendering, thus preventing displaying old data.",
  },
  {
    id: 2,
    question: "What is the use of the useEffect Hook?",
    info:
      "It is used when we want to do something after rendering our component.",
  },
  {
    id: 3,
    question: "What do we include in useEffect to prevent infinite loops?",
    info:
      "We include a cleanup function/dependency list to tell our function/eventListener to stop after rendering.",
  },
  {
    id: 4,
    question: "How do we store multiple inputs in useState?",
    info:
      "Rather than creating multiple useState Hooks, we can create one useState and set its value to an object.",
  },
  {
    id: 5,
    question: "Why can't we call a Hook conditionally?",
    info:
      "Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function. By following this rule, you ensure that Hooks are called in the same order each time a component renders. That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls.",
  },
];

export default data;
