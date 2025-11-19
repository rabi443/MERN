// const x = 10;
// console.log(x);

// {
//     const x = 20;
//     console.log(x);
// }

// console.log(x);

// let y = myFunction(4, 3);
// console.log("The value of y is:", y);

// function myFunction(a, b) {
// // Function returns the product of a and b
//   return a * b;
// }


//array methods
let students = ["John", "Jane", "Jim", "Jill", "Saurav", "Sunil", "Amish"]; 
console.log("Orginal Array :", students,"\n\n"); 

// //pop to remove the last element
// let removedStudent = students.pop(); 
// console.log("Removed student:", removedStudent);
// console.log("After pop orginal array:", students,"\n\n");

// // push to add an element to the end
// let addedStudent = students.push("Rabin");  // returns the new length of the array
// console.log("Added student:", addedStudent);
// console.log("After push orginal Array :", students,"\n\n");

// // shift to remove the first element
// let removedStudentFromFirst = students.shift();
// console.log("Removed student from first index :", removedStudentFromFirst);
// console.log("After shift orginal Array :", students,"\n\n"); 

// // unshift to add an element to the beginning
// let addedStudentAtFirst = students.unshift("Alice"); // returns the new length of the array
// console.log("Added student at first:", addedStudentAtFirst);
// console.log("After unshift orginal Array :", students,"\n\n");

// //slice to get a portion of the array from a specific index range excluding last index
// let slicedStudents = students.slice(1, 4); 
// console.log("Sliced students from index 1 to 4:", slicedStudents);
// console.log("Original Array after slice:", students,"\n\n");

// //splice to remove elements from a specific index  here (x, y) x is the starting index and y is the number of elements to remove
// let removedStudentsFromSpecificIndexRange = students.splice(0, 3); // This will remove 3 elements starting from index 0
// console.log("Removed students from index 0 to 2:", removedStudentsFromSpecificIndexRange);
// console.log("After splice:", students,"\n\n");

// //splice is also used to update elements from a specific starting index 
// students.splice(1, 2, "Bob", "Charlie");  // This will remove 2 elements starting from index 1 and add "Bob" and "Charlie" at index 1
// console.log("After updating with splice:", students,"\n\n");




// //concatination
// let newStudents = ["David", "Eve"]; // This is another array of strings
// console.log("New students:", newStudents,"\n\n"); // This will print the newStudents array
// let newArray = [1,2,3]; // This is an array of numbers
// console.log("New array:", newArray,"\n\n"); // This will print the  newArray
// let mergedArray = newStudents.concat(newArray); // This will concatenate the arrays
// // let mergedArray = newStudents + newArray;
// console.log("Merged array:", mergedArray, "\n\n"); // This will print the concatenated array


//join()
let user = ["Rabin", "chaudhary"];
console.log("User array:", user); // This will print the user array
let joinedUser = user.join(" "); // This will join the elements of the array with a space
console.log("Joined user:", joinedUser); // This will print the joined string

//reverse()
let reverseUser = user.reverse(); // This will reverse the order of the elements in the array
console.log("Reversed user:", reverseUser); // This will print the reversed array

// //split() it is used in string only to convert the string in array
// let name= "Rabin Chaudhary";
// console.log("Name:", name);
// let splitName = name.split('');  //('') is used to split string when it reach space between string and space id automatically removed 
// console.log("Split name:", splitName);

// //sort()
// let numbers = [5, 2, 9, 1, 5, 6]; // This is an array of numbers
// console.log("Original array numbers:", numbers); // This will print the original array
// numbers.sort((a,b)=> a - b); // This will sort the array in ascending order
// console.log("Sorted array numbers in ascending order:", numbers); // This will print the sorted array
// numbers.sort((a,b)=> b - a);// This will sort the array in descending order
// console.log("Sorted array numbers in descending order:", numbers); // This will print the sorted array

// let date = new Date("2025-07-28"); // This will create a new Date object
// console.log("Date:", date); // This will print the date object
// console.log(date.getTime()); // This will print the timestamp of the date
// console.log(date.getFullYear()); // This will print the year of the date
// console.log(date.getMonth()+1); // This will print the month of the date
// console.log(date.getDate()); // This will print the day of the month of the date 

// console.log(new Date().toISOString()); // This will print the current date in ISO format    
// console.log(new Date()); //This will print the same as above 