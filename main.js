const daysLeft = document.querySelector('.days');
const currentDate = new Date();
const weddingDate = new Date("01-08-2023");

let difference = Math.floor( ( ( currentDate.getTime() - weddingDate.getTime() ) / (1000*3600*24) ) );
difference *= -1;
// console.log(currentDate);
// console.log(weddingDate);
// console.log(difference);
daysLeft.innerHTML = difference;