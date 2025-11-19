console.log("Hello, World!");

//example of asynchronous behavior in JavaScript
console.log("first");

setTimeout(() => {
  console.log("second");
}, 2000);

console.log("third");
