const obj = {
  name: 'Paul',
  address: {
    street: 'Sesamstraße',
  },
};

function doSomething(input) {
  const clone = { ...input };
  // const clone = JSON.parse(JSON.stringify(input));
  clone.name = 'Dieter';
  clone.address.street = 'Mainstreet';

  return clone;
}

console.log(obj);
const c = doSomething(obj);
console.log(c);
console.log(obj);
