//TASK : 1.
//12 month work  and bellow 90% attendence  then  no bonus
// >12 month work and >= 90% attendence then  1000 rs bonus in each month 
//to get bonus attendence most be >= 90%

// const worker = [
//     {workerName : 'Ram', totalWorkingMonth : 30, attendence : 90 },
//     {workerName : 'Shyam', totalWorkingMonth : 18, attendence : 80},
//     {workerName : 'Hari', totalWorkingMonth : 13, attendence : 95},
//     {workerName : 'Saurav', totalWorkingMonth : 20, attendence : 89 },
//     {workerName : 'Amish', totalWorkingMonth : 12, attendence : 95}
// ];

// worker.map((list) => {
//     list.totalWorkingMonth > 12 && list.attendence >= 90 ? console.log("workerName : ",list.workerName, ", totalWorkingMonth : ",
//     list.totalWorkingMonth, ", attendence : ",list.attendence, ", bonus : ", (list.totalWorkingMonth-12)*1000) : console.log("workerName : ",list.workerName, ", totalWorkingMonth : ",list.totalWorkingMonth, 
//     ", attendence : ", list.attendence,   ", bonus : ",(list.totalWorkingMonth-12)*0)
// });


//TASK : 2.
//ktm to brt  traveling night bus
//total 20 sit from 1 to 20
//some are already booked
//show unbooked sit
//book unbooked sit
//if sit no. are from out of range i.e. >20 then show invalid sit

// const NightBus = [
//     {sitNo : 5, status : true},
//     {sitNo : 8, status : true},
//     {sitNo : 2, status : true},
//     {sitNo : 3, status : true},
//     {sitNo : 12, status : true},
//     {sitNo : 15, status : true},
//     {sitNo : 18, status : true},
//     {sitNo : 19, status : true},
//     {sitNo : 14, status : true},
// ];

// function bookSit(sitNo){

//     if(NightBus.find((num) => sitNo === num.sitNo)){
//         console.log("Sorry sit number : ", sitNo, ", has already booked.");
//     }else if(sitNo > 20){
//         console.log("Sorry Invalid sit number : ", sitNo, " , you are trying to book!");
//     }else{
//         let currentSit = {sitNo : sitNo, status : true}
//         NightBus.push(currentSit);
//         console.log("You have successfully booked sit number : ", sitNo);
//     }
// }

// bookSit(13);











// function booking(bookedseat, action, seatNumber){
//     if(seatNumber < 1 || seatNumber > 20){
//         return 'invalid Seat';
//     }

//     if(action === 'booked'){
//         if(bookedseat.include(seatNumber)){
//             return "already booked";
//         }else {
//             bookedseat.push(seatNumber)
//             return `seat ${seatNumber} booked vayeko xa`
//         }
//     }
// }

// const availableseat = totatSeat.filter()








function getAvailableSeats(bookedSeats){
    const totalSeats = Array.from({length:20}, (_, i) => i+1);
    // console.log(totalSeats)
    const availableSeats = totalSeats.filter(seat => !bookedSeats.includes(seat))

    const sleepAvailable = availableSeats.filter(seat=>seat>=1 && seat <=10)
    const normalAvailable = availableSeats.filter(seat=>seat>=11 && seat <=20)

    return { availableSeats,
             sleepAvailable,
             normalAvailable
            };
}

const bookedSeats = [2,3,8,10,13];
const result = getAvailableSeats(bookedSeats);
console.log(typeof result);
console.log(result.availableSeats); // All available seats
console.log(result.sleepAvailable); // Available seats 1–10
console.log(result.normalAvailable);













// // Total seats
// const totalSeats = 20;

// // Keep track of booked seats
// let bookedSeats = [2, 5, 8]; // Example: seats already booked

// // Function to display current seat status
// function showSeats() {
//     let availableSeats = [];
//     for (let i = 1; i <= totalSeats; i++) {
//         if (!bookedSeats.includes(i)) {
//             availableSeats.push(i);
//         }
//     }
//     console.log("\n\nBooked seats:", bookedSeats.join(", ") || "None");
//     console.log("Available seats:", availableSeats.join(", ") || "None");
// }

// // Function to book a seat
// function bookSeat(seatNo) {
//     if (seatNo < 1 || seatNo > totalSeats) {
//         console.log(`Seat ${seatNo} → Invalid seat number`);
//     } else if (bookedSeats.includes(seatNo)) {
//         console.log(`Seat ${seatNo} → Already booked`);
//     } else {
//         bookedSeats.push(seatNo);
//         console.log(`Seat ${seatNo} → Successfully booked`);
//     }
//     showSeats(); // Show updated status
// }

// // Example usage:
// showSeats();      // Show current status
// bookSeat(5);      // Already booked
// bookSeat(15);     // Successfully booked
// bookSeat(25);     // Invalid seat
// bookSeat(8);      // Already booked
// bookSeat(1);      // Successfully booked
