const names = ['Natasha', 'Hannah', 'Rachel'];

console.log(names);

console.log(names[1]);

const updatedNames = names.concat('Morgan'); // doesn't alter the existing array, returns a new array

console.log(updatedNames)

console.log(names) // this is still the original array, even after .concat
