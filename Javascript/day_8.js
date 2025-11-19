//high order function
//filter, reduce, map => these are high order functions
//purano array lai change nagarikana , naya array banauxa map leh

//map leh new array return garxa but forEach does not return any array
const number = [5,10,15,20,25,30];



// //map
// const doubleOfNumber = number.map(
//     item => item * 2
//     //there is no {} braces because we are returning only one line, so we do not need to return value because it automatic return value
// );
// console.log("Double of number: ",number , "is :", doubleOfNumber);

// const doubleOfNumber2 = number.map((item) => {
//     return item * 2;
//     //if we use {} braces then we need to return value explicitly because it does not return value automatically
// });
// console.log("Double of number2: ",number , "is :", doubleOfNumber2);



// //filter
// //filter also return new array but we cal also use conditions in filter
// //it will return new array with only those items which satisfy the condition
// //kunai pani condition true hunxa vane matra filter garxa i.e. value return garxa 
// const evenNumber = number.filter(
//     item => item % 2 === 0
// );
// console.log("Even number from number array: ", number, "is :", evenNumber);



// //reduce
// const sumNumber  = number.reduce(
//     (accumulator, current) => accumulator + current, 0
//     //0 is the initial value of accumulator
//     //accumulator is the previous value and current is the current value from the array
// );
// console.log("Sum of number array: ", number, "is :", sumNumber );


//array of objects
const user  = [
    {
        id : 1,
        name : "Rabin",
        location : "Gadhi",
        active : true,
        salary : 40000,
    },

    {
        id : 2,
        name : "Shyam",
        location : "Kathmandu",
        active : false,
        salary : 50000,
    },

    {
        id : 3,
        name : "Hari",
        location : "Pokhara",
        active : true,
        salary : 60000,
    }   
];



// const name = user.map(
//     item => item.name
// );
// console.log("Name of users: ", name);

//it returns object 
const activeUser = user.filter(
    item => item.active === true
    // or
    // item => item.active // this will also work because true is truthy value
);
console.log("ActiveUsers : ", activeUser);


//it return only names of active users
const activeUsers = user.filter(item => item.active === true).map((item, index)=>{
    return item.name;
});
console.log("ActiveUsers : ", activeUsers);


// const salarySum = user.reduce(
//     (accumulator, current) => accumulator + current.salary, 0
//     //0 is the initial value of accumulator
// );
// console.log("Sum of salary of users: ", salarySum);




























// The syntax for any Math property is : Math.property.
// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.SQRT2    // returns the square root of 2
// Math.SQRT1_2  // returns the square root of 1/2
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E

// The syntax for Math any methods is : Math.method(number)
// Math.round(x)	Returns x rounded to its nearest integer
// Math.ceil(x)	Returns x rounded up to its nearest integer
// Math.floor(x)	Returns x rounded down to its nearest integer
// Math.trunc(x)	Returns the integer part of x (new in ES6)


// Math.sign(x) // Returns the sign of the x, indicating whether x is positive, negative or zero
// Math.trunc() and Math.sign() were added to JavaScript 2015 - ES6.

// Math.pow(x, y) returns the value of x to the power of y:
// Math.sqrt(x) returns the square root of x:
// Math.abs(x) returns the absolute (positive) value of x:
// Math.min(x, y, z, ..., n) returns the lowest value of x, y, z, ..., n:
// Math.max(x, y, z, ..., n) returns the highest value of x, y, z, ..., n:
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive