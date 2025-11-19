//1. create an object with name, age, and skills
const user = {
    name: "Rabin Chaudhary",
    age: 25,
    skills: ["JavaScript", "React", "Node.js"]
}
console.log("User Object:", user);
document.write("User Object: " + JSON.stringify(user));

//2. convert the object to an array of key-value pairs from qsn 1 and print the result
const array_user = Object.entries(user);
console.log("\n\nAfter converting the user object to an array :", array_user);
document.write("<br><br>After converting the user object to an array : " + JSON.stringify(array_user));

//3. convert the array back to an object from qsn 2 and print the result
const object_user = Object.fromEntries(array_user);
console.log("\n\nAfter converting the array_user back to ab object :", object_user);
document.write("<br><br>After converting the array_user back to an object : " + JSON.stringify(object_user));

//4. Log/print user details using templete literals
console.log(`\n\nUser Name : ${user.name}, Age : ${user.age}, Skills : ${user.skills.join(",")}`);
document.write("<br><br>User Name : " + user.name + ", Age : " + user.age + ", Skills : " + user.skills.join(","));

//5. use setTimeout() to print "User Saved." after 3 seconds
setTimeout(() => {
    console.log("\n\nUser Saved.");
    // document.write("<br><br>User Saved.");
},3000);

//6. Destructurethe original object to get the name and skills only and then print those values
const {name, skills} = user;
console.log(`\n\nAfter destructuring the user object , Name: ${name}, Skills: ${skills.join(", ")}`);
document.write("<br><br>After destructuring the user object , Name: " + name + ", Skills: " + skills.join(", "));

//7. create  a new array like [["country", "Nepal"]] and merge it wiyth the array_user 
// from qsn 2 using the spread operator and print the final merged array
const newArray = [["Country", "Nepal"]];
const mergedArray = [...array_user, ...newArray];
console.log("\n\nMerged Array :",mergedArray);
document.write("<br><br>Merged Array : " + JSON.stringify(mergedArray));

//8. From the original object remove the age property (using object destructuring  
// or rest operator) and print the new object containing remaining details
const {age, ...newUserObject} = user;
console.log("\n\nNew User Object without age property:", newUserObject);
document.write("<br><br>New User Object without age property: " + JSON.stringify(newUserObject));