// variablen

// schleifen
// kopfgesteuerte Schleife - 0:n
let i = 0;
while (i < 10) {
  console.log(i);
  i = i + 1;
}

// fußgesteuerte schleife - 1:n
let j = 0;
do {
  console.log(j);
  j = j + 1;
} while (j < 10);

// zählerbasierte schleife
for (let n = 0; n < 10; n++) {
  console.log(n);
}

// bedingungen

let m = true;
if (m === true) {
  console.log('WAHR');
} else if (false) {
  console.log('was ganz anderes');
} else {
  console.log('FALSCH');
}

let o = 2;
switch (o) {
  case 1:
    console.log('eins');
    break;
  case 2:
    console.log('zwei');
    break;
  default:
    console.log('?');
    break;
}

// funktionen
function add(a, b) {
  const result = a + b;
  return result;
}

const result = add(42, 12);
console.log(result);

// Klassen
class User {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    return `Hallo ${this.firstname} ${this.lastname}`;
  }
}

const basti = new User('Basti', 'Springer');
console.log(basti.greet());
const klaus = new User('Klaus', 'Schneider');
console.log(klaus.greet());
