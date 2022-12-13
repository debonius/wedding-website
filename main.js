const daysLeft = document.querySelector('.days');
const container = document.querySelector('.countdown');
const label = document.querySelector('.countdown .label');
const currentDate = new Date();
const weddingDate = new Date('01-07-2023');
// let wmm = weddingDate.getMonth()+1;
// let wdd = weddingDate.getDate();
// let wyyyy = weddingDate.getFullYear();

// let mm = currentDate.getMonth()+1;
// let dd = currentDate.getDate();
// let yyyy = currentDate.getFullYear();
// let today = `${mm}-${dd}-${yyyy}`;
// let wedding = `0${wmm}-0${wdd}-${wyyyy}`;

// let diff = today - wedding;
// console.log(diff);

const labelDay1 = document.createElement('span');
labelDay1.classList.add('label');
labelDay1.innerHTML = 'day<br>left!';

let difference = Math.round( ( ( currentDate - weddingDate ) / (1000*3600*24) ) );
difference *= -1;
daysLeft.innerHTML = difference;

if (difference == 1) {
  label.remove();
  container.appendChild(labelDay1);
}

console.log(currentDate)
console.log(weddingDate);
console.log(difference)