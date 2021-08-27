// Endlosschleifen
// while(true);
// do {} while(true);
// for(;;)

// Lokaler Timer
console.log('vor timeout');
setTimeout(() => {
  console.log('im timeout');
}, 1000);
console.log('nach timeout');

// Button Click
console.log('vor click register');
document.querySelector('button').addEventListener('click', () => {
  console.log('Button Clicked');
});
console.log('nach click register');

// Serverkommunikation
console.log('vor server');
fetch('http://localhost:3001/todo')
  .then((response) => {
    if (response.ok) {
      console.log('alles gut');
    } else {
      console.log('nicht ok');
    }
  })
  .catch((error) => console.error('ES IST EIN FEHLER AUFGETRETEN'));
console.log('nach server');

// const response = await fetch('http://localhost:3001/todo');
// if (response.ok) {
//   console.log('alles gut');
// }

console.log('zu ende');
