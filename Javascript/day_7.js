// //JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate.
// //It is often used to transmit data between a server and a web application as an alternative to XML.

// // To parse a string as JSON in JavaScript, use the JSON.parse() method, which converts a JSON-formatted string into a JavaScript object.
// // Using JSON.parse() Method
// // Basic Syntax:
// const jsonString = '{"name": "Rabin", "age": 23, "city": "Gadhi", "country": "Nepal"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name); 
// console.log(typeof(jsonString)); // This will print "string"
// console.log(typeof(jsonObject)); // This will print "object"

// // To convert a JavaScript object to a JSON string, use the JSON.stringify() method.
// // Using JSON.stringify() Method
// // Basic Syntax:
// const jsObject = { name: "Rabin", age: 23, city: "Gadhi", country: "Nepal" };
// const jsonStringified = JSON.stringify(jsObject);
// console.log("jsObject : ", jsonStringified); // This will print the JSON string
// console.log(" type of jsObject : ",typeof(jsObject)); // This will print "object"
// console.log("type of jsonStringified : ",typeof(jsonStringified)); // This will print "string"


// //loops
// // for loop
// let students = ["John", "Jane", "Jack"];
// for (let i = 0; i < students.length; i++) {
//     console.log("Student at index", i, "is", students[i]);
// };

// for (let i = 0; i < 5; i++) {
//     console.log("For loop iteration:", i);
//     };

// // while loop
// let j = 0;
// while (j < 5) {
//     console.log("While loop iteration:", j);
//     j++;
// };

// // do-while loop
// let k = 0;
// do {
//     console.log("Do-while loop iteration:", k);
//     k++;
// } while (k < 5);

// // forEach loop , we donot need to use index in forEach loop,and it doesnot change the original array
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number, index) => {
//     console.log(`forEach loop iteration ${index}:`, number);
// });

// // for...in loop
// const person = { name: "Rabin", age: 23, city: "Gadhi", country: "Nepal" };
// for (const key in person) {
//     console.log(`for...in loop key: ${key}, value: ${person[key]}`);
// };

// // for...of loop
// const fruits = ["Apple", "Banana", "Cherry"];   
// for (const fruit of fruits) {
//     console.log("for...of loop fruit:", fruit);
// };


const students = {
    Ram : 23,
    Shyam : 24, 
    Hari : 25
};

const studentArray = Object.entries(students);
console.log("Student Array : ", studentArray);

// Using forEach to iterate over the studentArray 
studentArray.forEach(([name, age]) => {
    console.log(`Name: ${name}, Age: ${age}`);
});