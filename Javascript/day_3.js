const person = {
  name : "Rabin",
  age: 25,
  address : {
    street : "school tole",
    city : "Gadhi",
    country : "Nepal"
  },
  location : "random place "
}
// console.log("Rabin ko age: " , person.age);
// console.log("country", person.address.country);




//destructuring
// const{name,age} = person;
// console.log("name: ", name);

// const arr = [1,2,3,4]
// const [a,b,c,d] = arr 
// console.log(a)






//spread operators to add more poperties to an object
// const spread = {
//   ...person,
//   college : "himalayan",
//   contact : "12345"
// }
// console.log("spread", spread)

//spread to merge two objects or arrays
// const obj1 = {a: 1, b: 2};
// const obj2 = {c: 3, d: 4};
// const merged = {...obj1, ...obj2};
// console.log("Merged object:", merged);

//spread to pass an array as arguments to a function
// const sum = (a, b, c) => a + b + c;
// const numbers = [1, 2, 3];
// const result = sum(...numbers);
// console.log("Sum of numbers:", result);

//spread to copy/clone an array or object
// const originalArray = [1, 2, 3]; 
// const copiedArray = [...originalArray];
// console.log("Copied array:", copiedArray);







//rest operator
// const {name,age,...rest} = person 
// console.log("name: ", name);
// console.log("age: ", age);
// console.log(rest);





//String concatenation
// const firstName = "Rabin"
// const lastName = "Chaudhary"
// const fullName = firstName + " " + lastName
// console.log("FullName : ",fullName)






//template literals
// const age = 24;
// const intro = `My Name is ${firstName} and I am ${age} years old`

// console.log("my intro:", intro)





// const arr1 = [1,2,3,4]
// const arr2 = [5,6,7,8]

// const result = arr1.concat(arr2)
// console.log("result of concat: ", result)




// const a = 1
// const b = '1'

// console.log(a==b)
// console.log(a===b)



console.log(typeof 5);
console.log(typeof "5");
console.log(typeof null); //this is historical bug of javascript, null is an object
console.log(typeof undefined);