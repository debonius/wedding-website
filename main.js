const daysLeft = document.querySelector('.days');
const container = document.querySelector('.countdown');
const label = document.querySelector('.countdown .label');
const currentDate = new Date();
const weddingDate = new Date("01-08-2023");

let difference = Math.floor( ( ( currentDate.getTime() - weddingDate.getTime() ) / (1000*3600*24) ) );
difference *= -1;
daysLeft.innerHTML = difference;
daysLeft = 1;
if (daysLeft == 1) {
  container.appendChild = '<span class="label">days<br>left!</span>';
}