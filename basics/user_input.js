const readline = require('readline-sync');

let name = readline.question('Who are you?\n');
let isString = typeof name === 'string';
if (!isString) {
    throw new Error('Name must be a string!');
}

let age = parseInt(readline.question('How old are you in years?\n'));
if (isNaN(age)) {
    throw new Error('Age must be a number!');
}

let favoriteFood = readline.question('What is your favorite food?\n');
isString = typeof favoriteFood === 'string';
if (!isString) {
    throw new Error('Name must be a string!');
}

console.log(`Name:          ${name}`);
console.log(`Age:           ${age}`);
console.log(`Favorite food: ${favoriteFood}`);
