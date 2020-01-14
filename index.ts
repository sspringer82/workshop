const basti = {
  name: 'Basti',
  age: 18,
};

greet(basti);

function greet({ age }) {}

const age1 = basti.age;
const name1 = basti.name;
const { name, age } = basti;
