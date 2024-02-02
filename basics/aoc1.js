const fs = require('fs')

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let answer = 0;
const input = fs.readFileSync("./small_input.txt", "utf-8");
console.log(input)
const lines = input.split("\n")
for (const line of lines) {
    if (line === "") {
        continue;
    }
    // create an array of characters
    const characters = line.split("");

    /*
    // find the first and last digits
    const firstDigit = characters.find((value) => numbers.includes(value))
    const lastDigit = characters.findLast((value) => numbers.includes(value))

    // concat first and last digit to get 2 digit value
    const valueForLine = firstDigit + lastDigit;
    console.log(valueForLine);

    // converting our string value to a number.
    const value = parseInt(valueForLine);
    answer = answer + value;*/

    // Kyle's first solution
    let firstDigit;
    let lastDigit;
    for (let character of characters) {
        if (numbers.includes(character)) {
            // do something about it being a number
            console.log(character)
            console.log(line)
            if (firstDigit === undefined) {
                firstDigit = character
            }
            lastDigit = character
        }
    }
    const valueForLine = firstDigit + lastDigit;

    // converting our string value to a number.
    const value = parseInt(valueForLine);
    answer = answer + value;
}

console.log(answer)


/*for (let character of characters) {
    if (numbers.includes(character)) {
        // do something about it being a number
        console.log(character)
        console.log(line)
    }
}*/
