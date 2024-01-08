const names = []; // could also create with values ['Kyle', 'Garrett', 'Steven']
names.push('Kyle');
console.log(names.length);

names.push('Garrett');
names.push('Steven');

console.log(names.length);
console.log(names);

// accessing values by index
console.log(names[1]);

// iterate over contents
for (const name of names) {
    console.log(name);
}


// functional helpers
// map
let upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);
console.log(names);

// filter
let containsT = names.filter(name => name.includes('t'));
console.log(containsT);
console.log(names);

// reduce
let nameString = names.reduce((acc, name) => acc + name + ' ', 'Hello! ');
console.log(nameString);
