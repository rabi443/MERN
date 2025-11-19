const arr1 = [1,2,3,4]; // This is an array of numbers
console.log("Initial array :",arr1); // This will access the third element of the array, which is 3

arr1.push(5); // This will add 5 to the end of the array
console.log("After push/adding element (5) at the last index of array :", arr1); // This will print the updated array

arr1.pop(); // This will remove the last element of the array   
console.log("After pop/removing last element from array :", arr1); // This will print the array after removing the last element

arr1.shift(); // This will remove the first element of the array
console.log("After shift/removing first element from array :", arr1); // This will print the array after removing the first element

arr1.unshift(5); // This will add 0 to the beginning of the array
console.log("After unshift/adding 1 element i.e. 5 in starting index :", arr1); // This will print the array after adding 0 to the beginning

arr1.splice(1, 2); // This will remove 2 elements starting from index 1
console.log("After splice/removing 2 elements starting from index 1  :", arr1); // This will print the array after removing elements from index 1

arr1.splice(0,1,10,20,30); //This wil remove 1 element starting from index 0 and add 3 new element starting from index 0
console.log("After splice/updating the array by removing 1 element from 0 index and addimg 3 new element :",arr1);

//slice to get a portion of the array from a specific index range excluding last index
let slicedArray = arr1.slice(1, 3); //(x,y)=> x is starting and y is ending index ending index(y) is not included
console.log("Sliced array from index 1 to 3 but not element of index 3 :", slicedArray);
console.log("Original Array after slice/fetching portion of element from certain index range :", arr1);

arr1.reverse(); // This will reverse the order of the elements in the array
console.log("After reverse of whole array :", arr1); // This will print the reversed array

arr1.sort((a, b) => a - b); // This will sort the array in ascending order
console.log("After sorting the whole array in ascending order :", arr1); // This will print the sorted array

// arr1 = [1,2,3,4]; // This will not work because arr1 is a constant
// arr1 = [5,6,7,8]; // This will not work because arr1 is a constant
// arr1 = []; // This will not work because arr1 is a constant  

console.log("Final array after all operation performed :", arr1); // This will print the final state of the array


// //split() it is used in string only to convert the string in array
// let name= "Rabin Chaudhary";
// console.log("Name:", name);
// let splitName = name.split('');  //('') is used to split string when it reach space between string and space id automatically removed 
// console.log("Split name:", splitName);


// dublication remove
// const number = [ 1,2,3,4,4,5,5,6,6,7];
// const result = [...new Set(number)]; // Using Set to remove duplicates
// console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7]



//closure 

function createCounter() {
  let count = 0; // Private variable

  return {
    increment: function() {
      count++;
      console.log("Count:", count);
    },
    decrement: function() {
      count--;
      console.log("Count:", count);
    },
    getCount: function() {
      return count;
    }
  };
}
const counter = createCounter()
console.log(typeof counter);
console.log(counter);
counter.increment();
counter.increment();
counter.increment();
counter.decrement(); 
console.log("Current Count:", counter.getCount()); // Current Count: 1