// A higher-order function is a function that does one of the following:
// Takes another function as an argument.
// Returns another function as its result.


// In this example
// fun2 is a higher-order function because it takes another function (action) as an argument.
// It calls the action function twice.

function fun() {
    console.log("Hello, World!");
}
function fun2(action) {
    action();
    action();
}

fun2(fun);



// Popular Higher Order Functions in JavaScript
// 1. map
// The map function is used to transform an array by applying a callback function to each element. It returns a new array.

const n = [1, 2, 3, 4, 5];
const square = n.map((num) => num * num);
console.log(square);



// 2. filter
// The filter function is used to create a new array containing elements that satisfy a given condition.

const x = [1, 2, 3, 4, 5];
const even = x.filter((num) => num % 2 === 0);
console.log(even);


// 3. reduce
// The reduce function accumulates array elements into a single value based on a callback function.

const y = [1, 2, 3, 4, 5];
const sum = y.reduce((acc, curr) => acc + curr, 0);
console.log(sum);


// 4. forEach
// The forEach function executes a provided function once for each array element.

const z = [1, 2, 3];
z.forEach((num) => console.log(num * 2));


// 5. find
// The find function returns the first element in the array that satisfies a given condition.

const a = [1, 2, 3, 4, 5];
const fEven = a.find((num) => num % 2 === 0);
console.log(fEven);


// 6. some
// The some function checks if at least one array element satisfies a condition. 
//it return boolean value i.e. true or false

const b = [1, 2, 3, 4, 5];
const hasNeg = b.some((num) => num < 0);
console.log(hasNeg);



// 7. every
// The every function checks if all array elements satisfy a condition.
//it return boolean value i.e. true or false

const c = [1, 2, 3, 4, 5];
const allPos = c.every((num) => num > 0);
console.log(allPos)