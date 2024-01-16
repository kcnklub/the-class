//Write a program that asks for Name, age, favorite activity
//Age must be non-negative number

const readlineSync = require('readline-sync');

var userName = readlineSync.question('What is your name? ')
var age = readlineSync.questionInt('What is your age? ')
var faveActivity = readlineSync.question('What is your favorite thing to do? ')

if (age < 0) {
    age = age * -1
}

console.log('\nName: ' + userName + '\nAge: ' + age + '\nFavorite Activity: ' + faveActivity)