let message = "Hello World";
console.log(message);
message = "Hello Universe";
console.log(message);

const cantChangeMe = "I can't be changed";

// types
const myString = "Hello World";
const myNumber = 123;
const myBoolean = true;
const myArray = [1, 2, 3];
const myObject = { name: "Kyle" };

// operators
const mySum = 1 + 2;
console.log(`mySum ${mySum}`);
const myConcat = "Hello" + " " + "World";
console.log(`myConcat ${myConcat}`);
const equals = 1 === 1;
console.log(`equals ${equals}`);
const notEquals = 1 !== 1;
console.log(`notEquals ${notEquals}`);

// conditionals
if (1 === 1) {
    console.log("1 === 1");
} else {
    console.log("1 !== 1");
}

// functions

function add(a, b) {
    return a + b;
}
const sum = add(1, 2);
console.log(`sum ${sum}`);

const arrowAdd = (a, b) => {
    return a + b;
}
const arrowSum = arrowAdd(1, 2);
console.log(`arrowSum ${arrowSum}`);
