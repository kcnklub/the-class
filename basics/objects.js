// You can think of objects as key value pairs of information.
let person = {
    name: 'Kyle'
};

// You can access the values of an object using dot notation
console.log(person.name);
// or bracket notation
console.log(person['name']);

// You can add new properties to an object
person.age = 25;
console.log(person);

// You can also update existing properties
person.age = 26;
console.log(person);

// You can also delete properties
delete person.age; // I haven't seen this used.
console.log(person);

// you can also add functions to objects
person.sayHello = function(name) {
    console.log('Hello! ' + name);
}
console.log(person);
person.sayHello("Garrett");


const tina = {
    name: 'Tina',
    hungry: true,
};
tina.bark();
tina.eat();

const bark = function(dog) {
    console.log(dog.name + 'woof woof');
}
const eat = function(dog) {
    if (dog.hungry) {
        dog.hungry = false;
        console.log('That was yummy!');
    } else {
        console.log('No thanks! I am full.');
    }
}

bark(tina);
eat(tina);

// You can also use the this keyword to access properties of the objects
person.talkToSelf = function() {
    console.log("We are talking to ourselves")
    console.log(this)
    console.log('Hello! ' + this.name);
}
person.talkToSelf();

// arrow functions do not have their own this keyword
// so you can't use them to access properties of the object
person.anotherSelf = () => {
    console.log('Hello! ' + this.name); // this.name is undefined
}
person.anotherSelf();


// common use cases for objects
//
// 1. to represent a single entity
let blogPost = {
    title: 'My Blog Post',
    body: 'Lorem ipsum dolor sit amet.',
    createdBy: 'Kyle',
    views: 0,
    comments: [
        {
            username: 'Garrett',
            body: 'Lorem ipsum dolor sit amet.'
        }
    ],
};

// 2. to encapsulate data and behavior
let post = {
    title: 'My Blog Post',
    body: 'Lorem ipsum dolor sit amet.',
    views: 0,
    comments: [
        {
            username: 'Garrett',
            body: 'Lorem ipsum dolor sit amet.'
        }
    ],
    // adding this function to that you can add behavior to the object
    addComment: function(comment) {
        this.comments.push(comment);
    }
};

post.addComment({ username: 'Tina', body: 'Lorem ipsum dolor sit amet.' });

post.comments.push({ username: 'Tina', body: 'Lorem ipsum dolor sit amet.' });

// 3. to pass around data in your application
function printPost(post) {
    console.log(post.title + ' - ' + post.body);
}
printPost(post);
