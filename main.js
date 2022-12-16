const daysLeft = document.querySelector('.days');
const container = document.querySelector('.countdown');
const label = document.querySelector('.countdown .label');
const labelDay1 = document.createElement('span');
labelDay1.classList.add('label');
labelDay1.innerHTML = 'day<br>left!';

const today = new Date();
const endDate = new Date(2023,0,7,17,00);

let diff = Math.round( ( ( today - endDate ) / (1000*3600*24) ) );
diff *= -1;
daysLeft.innerHTML = diff;

// console.log(today)
// console.log(endDate);
// console.log(diff)


if (diff == 1) {
  label.remove();
  container.appendChild(labelDay1);
}

let audio = new Audio('audio/bg.mp3');
audio.play();