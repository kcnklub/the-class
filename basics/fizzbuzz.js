


// input is divisible by 3 is is going to print "fizz"
// input is divisible by 5 is is going to print "buzz"
// input is divisible by 3 and 5 is is going to print "fizzbuzz"
// input is not divisible by 3 or 5 is is going to print itself.
//
// input is going to be a integer
function fizzBuzz(input) {

    if (input % 3 === 0 && input % 5 === 0) {
        console.log("fizzbuzz")
    } else if (input % 3 === 0) {
        console.log("fizz")
    } else if (input % 5 === 0) {
        console.log("buzz")
    } else {
        console.log(input)
    }

}

for (let i = 0; i < 100; i++) {
    fizzBuzz(i);
}
