let message = "Hello world!";
console.log(message);

message = "Goodbye world!";
console.log(message);


let names = ["John", "Jane", "Jimbo", "Jedediah"];

let index = 0; // declare index variable
while (index < names.length) { // check condition
    console.log(names[index]);
    index++; // increment index
}

for (let i = 0; i < names.length; i++) { // does all three
    console.log(names[i]);
}

if (names.includes("Kyle")) {
    console.log("John is in the array");
}
if(names.includes("Shannon")) {
    console.log("Kyle is in the array");
}
if (names.includes("John")){
    console.log("Shannon is in the array");
}

console.log("next");

let tina = {
    name: "Tina",
    age: 3,
    hometown: "New York, NY"
}
console.dir(tina);

let hobey = {
    name: "Hobey",
    age: 1,
    hometown: "New York, NY"
}
console.dir(hobey);


console.log(sayHello)

console.log("Before function call")

// call a function
sayHello();

// define a function
function sayHello() {
    console.log("Hello");
}

const something = function() {
    console.log("something");
}

const sayBye = () => {
    console.log("bey");
}

function echo(n)
{
    console.log(n);
}

console.log("calling echo")
echo(1);

// call a function
sayHello();
something();
sayBye();

const anotherMessage = "something " + "something else";
console.log(anotherMessage);

let remainder = 10 % 3;
let isDivisableBy3 = 10 % 3 === 0;

let result = 10 % 3;
console.log(result); // prints 1
result = 10 / 3;
console.log(result);

let isEquals = 10 === 10;


let isNotEquals = !isEquals;

let isLightOn = true;
let isRaining = true;

let isLightOnAndIsRaining = isLightOn && isRaining;
let isLightOnOrIsRaining = isLightOn || isRaining;

console.log("iisLightOnAndIsRaining " + isLightOnAndIsRaining);
console.log("isLightOnOrIsRaining " + isLightOnOrIsRaining);

if (isLightOn) {
    console.log("Light is on");
} else if (isRaining) {
    console.log("It is raining");
} else {
    console.log("Light is off");
}

while (isLightOn) {
    console.log("Light is on");
    isLightOn = false;
}
console.log("Light is off");
console.log("")


let counter = 0;
while (counter < 10) {
    console.log("Counter: " + counter);
    counter++;
}
