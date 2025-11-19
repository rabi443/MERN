//object inside object
const users = {
  name : "Rabin",
  address : "Aurabani",
  age : 23,
  location : {
  city : "Gadhi",
  street : "School tole"
  }
}

// console.log(users); // This will print the entire object
// console.log(users.name); // This will print the name property of the object

// const {name,age} = users; // This will destructure the name and age properties from the users object
// console.log(name); // This will print the name property of the object
// console.log(age); // This will print the age property of the object

// //array
// const arr1 = [1,2,3,4];
// console.log(arr1);// This will print the entire array
// console.log(arr1[0]); // This will print the first element of the array
// console.log(arr1[2]); // This will print the third element of the array

// //array of arrays i.e. 2D array
// const arr2 = [
//   ['a','b','c','d'],
//   [1,2,3,4]
// ];
// console.log(arr2[0][2]); // This will print the third element of the first array in the 2D array



// Object methods
// const result = Object.entries(users); // This will return an array of key-value pairs in the object
// console.log("result of Object.entries: ", result);

// const result2 = Object.keys(users); // This will return an array of keys in the object
// console.log("result of Object.keys: ", result2);

// const result3 = Object.values(users); // This will return an array of values in the object
// console.log("result of Object.values: ", result3);






// const arr = [['name', 'rabin'], ['age', 23], ['address', 'aurabani']]; // This is an array of key-value pairs
// console.log(arr.name);// This will not work as expected because arr is an array, not an object
// console.log(arr[0][1]); // This will print the value of the first key-value pair in the array

// const obj = Object.fromEntries(arr); // This will convert an array of key-value pairs back to an object
// console.log("result of Object.fromEntries: ", obj); // This will return an object with the keys and values from the array

// console.log(obj.name); // This will print the name property of the object
// console.log(obj.age); // This will print the age property of the object
// console.log(obj.address); // This will print the address property of the object






// // hoisting
// console.log(a);
// var a=6;

// console.log(b);
// const b=5;