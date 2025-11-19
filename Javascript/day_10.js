// //callBack function

// function add(a, b, callback) {
//     let sum = a + b;
//     callback(sum);
// };

// function displayResult(result) {
//     console.log("The sum is: " + result);
// };

// add(5, 10, displayResult);


// //promises
// const hello = new Promise((resolve, reject) => {
//     const success = Math.random() > 0.5; // Randomly resolve or reject
//     setTimeout(()=>{
//         if(success){
//             resolve("I am success");
//         }else{
//             reject("I am failure");
//         }
//     },1000); 
// });

// hello.then(result =>{
//     console.log(result);
// }).catch(error => {
//     console.log(error);
// });



//closures

// function outerFunction() {
//   let outerVariable = "I'm from the outer scope!";
  
//   function innerFunction() {
//     console.log(outerVariable); // Accessing outerVariable
//   }
  
//   return innerFunction;
// }

// const closureFunction = outerFunction();
// closureFunction(); // Output: "I'm from the outer scope!"


// The inner function retains access to the outer function's scope even after it has executed
// This is known as a closure, allowing innerFunction to access outerVariable.
// Closures are useful for data encapsulation and creating private variables.
// Closures can also be used to create functions with private state
// and to maintain state across multiple invocations.
// Example of a closure with private state

// function createCounter() {
//   let count = 0; // Private variable

//   return {
//     increment: function() {
//       count++;
//       console.log("Count:", count);
//     },
//     decrement: function() {
//       count--;
//       console.log("Count:", count);
//     },
//     getCount: function() {
//       return count;
//     }
//   };
// }
// const counter = createCounter()
// console.log(typeof counter);
// console.log(counter);
// counter.increment();
// counter.increment();
// counter.increment();
// counter.decrement(); 
// console.log("Current Count:", counter.getCount()); // Current Count: 1



// // example by sir
// function outer(){
//     let name = "I am outer function";
//     function inner(){
//         console.log(name);
//     }
//     return inner;
// }
// const result = outer();
// result(); // Output: I am outer function




// for (let i = 0; i < 60; i++) {
//     setTimeout(() => {
//         console.log("Hello World", i);
//     }, 1000 * i);
// }




// const number = [ 1,2,3,4,4,5,5,6,6,7];
// const result = [...new Set(number)]; // Using Set to remove duplicates
// console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7]

// indexOf, filter  use it to remove duplicates
