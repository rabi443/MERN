//Task to solve it by your own logic

// //1. reverse the each element of given array and sum it then we get answer 336
// const array = [39, 27, 18, 43, 65];
// let reversedArray = array.map(num =>{
//     return parseInt(num.toString().split('').reverse().join(''));
// });

// let sum = reversedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log("orginal array :",array);
// console.log("Reversed arryay :", reversedArray);
// console.log("Sum of reversed elements:", sum); 

//2. 
// 'javascript'//pass as a argument to a parameterized function
// function > javascript as a argument and parameter 

// const x = "javascript";
// const y = x.split("");
// console.log(y);
// console.log(y.length);
// function checkEvenOdd(str){
//     let even = "";
//     let odd = "";

//     for(let i = 0; i < str.length; i++){
//         if(i % 2 === 0){
//             even += str[i];
//         } else {
//             odd += str[i];
//         }
//     }
//     return {even, odd};
// }
// const result = checkEvenOdd(y);
// console.log("Even indexed characters:", result.even);
// console.log("Odd indexed characters:", result.odd);

//3. 
// inside array there is multiple type of data  like String, number, boolean .
//keep all data type in separrate array

// const array = [1, 2, "Rabin", true, 4, "saurav", false, 8, "Amish", true];

// let numberArray = [];
// let stringArray = [];
// let booleanArray = [];

// array.forEach((value, index)=>{

//     if(typeof value === "number"){
//         numberArray.push(value);
//     }
//     else if(typeof value === "string"){
//         stringArray.push(value);
//     }
//     else if(typeof value === "boolean"){
//         booleanArray.push(value);
//     }
    
// });

// console.log("Number Array:", numberArray);
// console.log("String Array:", stringArray);      
// console.log("Boolean Array:", booleanArray);



//4.
// [23, 65, 87]
// do second digit - first digit in each element

const arrayx = [23, 50, 87];
const resultArray = arrayx.map(num => {
    const digits = num.toString().split('').map(value => parseInt(value));  // instead of map(value => parseInt(value) also can use map(Number)
    return digits[1] - digits[0];
});

const sumResult = resultArray.reduce((acc, curr) => acc + curr, 0);

console.log("Original Array:", arrayx);
console.log("Result Array:", resultArray);
console.log("Sum of Result Array:", sumResult); 



//5.
// print the index value from array whose length is largest 

const studentsname = ["RabinChaudhary", "SauravNepal", "AmishDangal", "ShyamMajhi", "Harinarayan"];
const longestName = studentsname.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
}, "");

console.log("Students Names:", studentsname);
console.log("Longest Name:", longestName);
console.log(typeof longestName); // Output: string