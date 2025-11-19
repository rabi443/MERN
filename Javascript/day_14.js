//Task 1
//5gb limit data plan for 1 week  , list of data used per day is given in list  and then display the name of specific day when 5gb data will over.

// const usage = [
//     {day :'sun', data : 0.8},
//     {day :'mon', data : 0.1},
//     {day :'tues', data : 0.2},
//     {day :'wed', data : 0.8},
//     {day :'thur', data : 4.1},
//     {day :'frid', data : 0.2},
//     {day :'sat', data : 0.2}
// ]

// const limit = 5;
// let crossDay = null;
// let expireDay = null;
// usage.reduce((total, current)=>{
//     const newTotal = total+current.data

//     if( crossDay === null && newTotal > limit){
//         crossDay = current.day;
//         console.log("Yor 5gb data will over on ", crossDay);
//         // console.log("total data used is :", newTotal);
//     }else{
//         if(current.day === 'sat' && crossDay === null){
//             expireDay = current.day;
//             console.log("You 5gb data plan has been expired , day :",expireDay ," total data used is: ", newTotal);
//         }
            
//     }
    
//     return newTotal;
// },0);






//task 2
// samipiya has given loan to three person with interest of 10%

// const loan =[
//     {
//         name : "babita", amount : 500000, years : 3
//     },
//     {
//         name : "Keshav", amount : 300000, years : 2
//     },
//     {
//         name : "Shibu", amount : 200000, years : 4
//     }
// ]

// const loanWithInterest = [];
// loan.map((loan) => {
//     const total_interest = ((loan.amount*10)/100)*loan.years;
//     console.log(loan.name, loan.amount, loan.years, total_interest);
//     const loan_browwers = {name : loan.name, amount : loan.amount, years : loan.years, total_interest : total_interest, Total_amount_to_pay_including_interest : loan.amount+total_interest };
//     loanWithInterest.push(loan_browwers);
// }, 0);

// console.log("Initial loan browers details : \n", loan);
// console.log('\n\n Loan Browers details after end of their loan period :\n', loanWithInterest);


