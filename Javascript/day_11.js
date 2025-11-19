// day 10
// question.1 [123,456,789,101]
// answer[321,654,987,101]
const num = [123,456,789,101];
const result =num.map(item => {
  return Number(item.toString().split('').reverse().join(''));
})
console.log (result);


// // question.2 [111,324,444,643]
// // answer[*11,*24,*44,*64]
// let num2 = [111, 324, 444, 643];

// const result2 = num2.map(item => {
//  if (item === 643) {
//     let z = item.toString().split('').splice(0,2);

//     return `*${z.join('')}`; 
    
//   }
//   else{ 
//     let value = item.toString().split('');
//     let x = value.splice(0,1,'*');

//     return value.join('');
//   }
 
// });

// console.log(result2); 




// question.3(homework) [111,324,444,643]
// answer[1,2,4,6]