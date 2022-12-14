const daysLeft = document.querySelector('.days');
const container = document.querySelector('.countdown');
const label = document.querySelector('.countdown .label');
const labelDay1 = document.createElement('span');
labelDay1.classList.add('label');
labelDay1.innerHTML = 'day<br>left!';

const startDate = new Date();
const endDate = new Date('01-07-2023');

let diff = Math.round( ( ( startDate - endDate ) / (1000*3600*24) ) );
diff *= -1;
daysLeft.innerHTML = diff;

console.log(startDate)
console.log(endDate);
console.log(diff)


if (diff == 1) {
  label.remove();
  container.appendChild(labelDay1);
}
