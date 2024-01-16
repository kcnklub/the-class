const names = []; // could also create with values ['Kyle', 'Garrett', 'Steven']
names.push('Kyle');
console.log(names.length);

names.push('Garrett');
names.push('Steven');

console.log(names.length);
console.log(names);

// accessing values by index
console.log(names[1]);

for (let index = 0; index < names.length; index++) {
    console.log(`index ${names[index]}`);
}

// iterate over contents
for (let index in names) {
    console.log(index);
    console.log(names[index]);
}
for (let name of names) {
    console.log(name);
}

function map(_) {

}


// functional helpers
//
// map
// Allows us to transform each element in the array
let upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);
console.log(names);

// filter
// Allows us to filter out elements from the array
let containsT = names.filter(name => name.includes('t'));
console.log(containsT);
console.log(names);

// reduce
// Allows us to reduce the array to a single value
let nameString = names.reduce(
    (acc, name) => acc + name + ' ',
    'Hello! '
);
console.log(nameString);

const values = [1, 2, 3, 4, 5];
const sum = values.reduce((acc, currentValue) => {
    console.log(`acc ${acc}, currentValue ${currentValue}`);
    return acc + currentValue
}, 0);
console.log(`sum ${sum}`)

// Parsing strings
let data = 'Kyle, kyle, Garrett, Steven';
let namesArray = data.split(', ');
console.log(namesArray);

// Joining strings
let namesString = namesArray.join(', ');
console.log(namesString);

// Sorting
console.log(namesArray.sort());
