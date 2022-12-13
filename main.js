const daysLeft = document.querySelector('.days');
const container = document.querySelector('.countdown');
const label = document.querySelector('.countdown .label');
const currentDate = new Date();
const weddingDate = new Date("01-08-2023");

const labelDay1 = document.createElement('span');
labelDay1.classList.add('label');
labelDay1.innerHTML = 'day<br>left!';

let difference = Math.floor( ( ( currentDate.getTime() - weddingDate.getTime() ) / (1000*3600*24) ) );
difference *= -1;
daysLeft.innerHTML = difference;

if (difference == 1) {
  label.remove();
  container.appendChild(labelDay1);
}

// test