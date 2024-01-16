//Celsius to Fahrenheit = C * 9/5 + 32
//Fahrenheit to Celsius = (F - 32) * 5/9
//9/5 = 1.8
//5/9 = 0.6 (actually 0.55 repeating)

const readlineSync = require('readline-sync');

var type = readlineSync.question("Is your temp in Celsius or Fahrenheit? (C/F)");
console.log(type);

var temp = readlineSync.questionFloat("What is your temp? ");

function c2f(temp) {
    return ((temp * 1.8) + 32);
}

function f2c(temp) {
    return ((temp - 32) * 0.55)
}

function kelvinToC(temp) {
    return ((temp - 273.15))
}
function kelvinToF(temp) {
    let result = ((temp - 273.15))
    return ((result * 1.8) + 32)
}

if (type === 'f' || type === 'F') {
    const result = f2c(temp)
    console.log(result + ' degrees C');
}
else if (type === 'c' || type === 'C') {
    const result = c2f(temp)
    console.log(result + ' degrees F');
}
else if (type === 'k' || type === 'K') {
    const result = kelvinToC(temp)
    const result2 = kelvinToF(temp);
    console.log('That would be ' + result + ' degrees C, or ' + result2 + ' degrees F')
}
else {
    console.log('What the hell is ' + "'" + type + "'? Can't you read? C or F!")
}
