const select = document.querySelector('select');
const para = document.querySelector('p');


select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

console.log(choice);

if (choice === 'Pre-Seed') {
  para.textContent = 'No Winter. 0-5 Million USD';
} else if (choice === 'Seed') {
  para.textContent = 'Slight Winter. 5-10 Million USD';
} else if (choice === 'SeriesA') {
  para.textContent = 'Winter. Expect drop in valuations';
} else if (choice === 'SeriesB') {
  para.textContent = 'Heavy Winter. Expect big drop in valuations';
} 
 else if (choice === 'SeriesC') {
  para.textContent = 'Strong Winter. Expect a downround';
} 

 else if (choice === 'SeriesD') {
  para.textContent = 'Umm Why are you even here?';
} 
else {
  para.textContent = 'hehe';
}
}
