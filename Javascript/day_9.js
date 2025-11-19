// day 9 
// conditional oprators
//1. if else 
// let duhabiTemp = 32;
// if (duhabiTemp >20){
//   console.log("hot")
// }
// else{
//   console.log("normal")
// }

// // 2. Swith case
// let product = 'noodles';
// switch (product){
//   case "thuppa": 
//     console.log("hari like thuppa");
//     break;
//   case "chowmin":
//     console.log("ram like chowmin");
//   default:
//     console.log("i am preety i like noodles")
// }

// //  Ternary Operator
// // eg1
// let customerType = "premium";
// let discount = customerType === "premium" ? "10%" : "0%";
// console.log(discount); 

// // eg2
// let inStock = false;
// let status = inStock ? "Available" : "Out of stock";
// console.log(status); 

// // nexted Ternary Operator
let temp = 32;
let birt = temp >35 ?"very hot" : temp >25 ? "warm" :temp >15 ? "normal" :"cold";
console.log(birt);

// // eg2
// const role = "Admin";
// const access = role == "superAdmin"
//   ? "Full Access"
//   : role == "Admin"
//   ? "Limited Access"
//   : role == "user"
//   ? "Read Only"
//   : "No Access";

// console.log(access);



// practice(class work)


// //if else
// let age= 20;
// if (age>18){
//   console.log("can vote")
// }
// else{
//   console.log("cant vote")
// }


// // switch case
// let product = 'thuppa';
// switch (product){
//   case "thuppa": 
//     console.log("hari like thuppa");
//     break;
//   case "momo":
//     console.log("ram like momo");
//     break;
//   default:
//     console.log("i am preety i like noodles")
// }

// //Ternary Operator
// let veg ="potato";
// let status = veg ?"i like potato" :"i dont like potato"
// console.log(status)

// // callback
// function hero (callback){
//   console.log("i am hero");
//   callback();
// }

// function villen (){
//   console.log("i am villien");
// }
// hero (villen);



// //callback hell function
// function first(callback) {
//   setTimeout(() => {
//     console.log("first");
//     callback();
//   }, 1000);
// }

// function second(callback) {
//   setTimeout(() => {
//     console.log("second");
//     callback();
//   }, 1000);
// }

// function third() {
//   setTimeout(() => {
//     console.log("third");
//   }, 1000);
// }

// // // Run in order: first → second → third
// first(() => {
//   second(() => {
//     third();
//    });
//  });