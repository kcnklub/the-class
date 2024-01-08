
console.log('Page');

const myString = 'Hello World!';
const myNumber = 42; // integers, floats, doubles
const myBoolean = true;
const myArray = [1, 2, 3, 4, 5];
const mixedArray = [1, 'Hello', true, 3.14];
const john = {
    name: 'John',
    age: 42,
    isMarried: true,
    children: ['Jane', 'Mark', 'Bob'],
    address: {
        street: 'Main Street',
        number: 123,
        city: 'London'
    }
};
const jane = {
    name: 'Jane',
    age: 35,
    isMarried: false,
    children: ['Mary', 'Ann', 'Peter'],
    address: {
        street: 'Main Street',
        number: 123,
        city: 'London'
    },
    dog: {
        name: 'Fido',
        age: 3
    },
    walkDog: () => {
        console.log(`${this.name} is walking a dog!`);
    }
};

jane.walkDog();

let message = "Hello" + " " + "World!";
console.log(`message ${message}!`);
let sum = 1 + 2;
console.log(`sum ${sum}`);
let difference = 5 - 3;
let product = 2 * 3;
let quotient = 10 / 2;
let remainder = 10 % 3;
let x = 1;

const equals = x === 1; // strict equality
console.log(`equals ${equals}`);
const notEquals = x !== 1; // strict inequality
console.log(`notEquals ${notEquals}`);

if (equals) {
    console.log('x is equal to 1');
}
else if (x === 2) {
    console.log('x is equal to 2');
}
else {
    console.log('x is not equal to 1 or 2');
}

console.log(fizz);

let condition = true;
let condition2 = false;

if (condition && condition2) {
    // this code will only run with both condition and condition2 are true
}

let index = 0;
while (index < 10) {
    console.log(`index ${index}`);
    index++;
}

console.log("---------------------")
console.dir(console);

for (let index = 0; index < 10; index++) {
    console.log(`index ${index}`);
}

console.log("---------------------")

for (let index = 10; index > 0; index -= 2) {
    console.log(`index ${index}`);
}

function sayHello(name) {
    console.log(`Hello ${name}!`);
}
sayHello('John');

const sayHello2 = function(name) {
    console.log(`Hello ${name}!`);
};
sayHello2('Jane');

const arrowHello = (name) => {
    console.log(`Hello ${name}!`);
};
