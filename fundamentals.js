// Q1. What are the results of these expressions? (answer first, then use console.log() to check)

console.log("" + 1 + 0) //10 y
console.log("" - 1 + 0) // -1 y
console.log(true + false) //  1 y
console.log(!true) // false y
console.log(6 / "3") // 2 y
console.log("2" * "3") // 6 y
console.log(4 + 5 + "px") // "9px" n 9px - not a string value because numbers are first
console.log("$" + 4 + 5) // "$9" n $45 because string first converts numbers to strings and concatenates
console.log("4" - 2) // 2 y math operation converts to num
console.log("4px" - 2) // "2px"? probably not n NaN because string is NaN and can't compute
console.log(" -9 " + 5)  //"-4" n -9 5 sees string first then + concatentates, adding the space
console.log(" -9 " - 5)  //-14 n -14 math operation converts to numbers
console.log(null + 1) // null n 1 because null is empty value and is ignored
console.log(undefined + 1) // undefined n Nan because undefined could be a value but it's not a number
console.log(undefined == null) // false n true oops I thought they were not seen as equal
console.log(undefined === null) // false y
console.log(" \t \n" - 2) // undefined n -2 because there is no number in the string to perform math on, string is ignored

//Q2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them?
// A: Strings are sorted differently to numbers meaning the 3 and the 30 come before the 4.
// addition doesn't work properly because with a string the + tells it to concatenate.
// Fix by changing the strings to numbers, removing ""

let three = "3"
let four = "4"
let thirty = "30"

//what is the value of the following expressions?
let addition = three + four // "34" y
let multiplication = three * four // 12 y
let division = three / four // 0.75 y
let subtraction = three - four // -1 y

let lessThan1 = three < four // true
let lessThan2 = thirty < four // false n true because a string, forgot string 30 is seen as lower than string 4

// Q3 Which of the following console.log messages will print? Why?
// The last (1) because 1 is a true value indicating there is data present
// Not quite right, but almost. The statements check if the given value is truthy.
// So ("0") is truthy because it's a non-empty string and will print
// Also any non-zero number is truthy so it will also print.
// Was pretty right with the 1 though

if (0) console.log('#1 zero is true')
if ("0") console.log('#2 zero is true')
if (null) console.log('null is true')
if (-1) console.log('negative is true')
if (1) console.log('positive is true')

// Q4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?
let a = 2, b = 3;
let result = `${a} + ${b} is `;


/*if (a + b < 10) {
    result += 'less than 10';
} else {
    result += 'greater than 10';
}*/
//rewrite
(a + b < 10) ? result += 'less than 10' : result += 'greater than 10';

// += adds onto to the existing result variable (2 + 3 is ). It concatenates to the string
// this adds the same thing onto result each time it's tested.

// Q5. Rewrite the following function using:
// a) function expression syntax, and
// b) arrow function syntax.
// Test each version to make sure they work the same.

/* function getGreeting(name) {
    return 'Hello ' + name + '!';
} */

const getGreeting = function (name) {
    return 'Hello ' + name + '!';
};

console.log(getGreeting('Dan'));

// arrow function. I've used a template literal ${name} in the string to get practise using them.
const greet = (name) => `Hello ${name}!`;

console.log(getGreeting('Linda'));

// Q6.
// a) Complete the inigo object by adding a lastName property and including it in the greeting.
// b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead prints his famous catch phrase to the console.
// c) Update getCatchPhrase to use arrow function syntax and a conditional operator.
const westley = {
    name: 'Westley',
    numFingers: 5
}

const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}

const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
        // NOTE: the this keyword inside a method refers to the object that the method is a property of.
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },
    // note this is different syntax as an object property
    // an arrow function doesn't use const keyword, like greeting above doesn't use function keyword and uses a : instead of = to assign it as an object property.
    getCatchPhrase: (person) => {
        (person.numFingers == 6)
            ? 'You killed my father, prepare to die!'
            : 'Nice to meet you.';
    }
}

inigo.greeting(westley)
inigo.greeting(rugen)
// Is it a bonus that I love the Princess Bride? /* oh, of course! but Princess bride? really?

// Q7. The following object represents a basketball game and keeps track of the score as the game progresses.
// a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works
// b) Add a new method to print the full time final score
// c) Add a new object property to keep track of the number of fouls and a method to increment it, similar but separate to the score. Include the foul count in the half time and full time console messages
// d) Test your object by chaining all the method calls together in different combinations.


// A: to make methods chainable, return the object itself on each method using this
const basketballGame = {
    score: 0,
    fouls: 0,
    freeThrow() {
        this.score++;
        return this;
    },
    basket() {
        this.score += 2;
        return this;
    },
    threePointer() {
        this.score += 3;
        return this;
    },
    foul() {
        this.fouls++;
        return this;
    },
    halfTime() {
        console.log('Halftime score is ' + this.score + ' . Halftime fouls: ' + this.fouls);
        return this;
    },
    fullTime() {
        console.log('Fulltime score is ' + this.score + ' . Fulltime fouls: ' + this.fouls);
        return this;
    }
}

//modify each of the above object methods to enable function chaining as below:
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime().foul().basket().fullTime();


// Q8. The object below represents a single city.
// a) Write a function that takes an object as an argument and uses a for…in loop to access and print to the console each of those object properties and their values. Test it using the sydney object below.
// b) Create a new object for a different city with different properties and call your function again with the new object.

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}

const melbourne = {
    name: 'Melbourne',
    population: 5_151_000,
    state: 'Victoria',
    founded: '30 August 1835',
    timezone: 'Australian Eastern Daylight Time'
}

function getKeys(object) {
    for (const key in object) {
        // key accesses the property name and object[key] accesses the value
        console.log(key + ': ' + object[key]);
    }
}

getKeys(sydney)
getKeys(melbourne)

// Q9. Use the following variables to understand how JavaScript stores objects by reference.
// a) Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift)
// b) Create a new dog2 variable equal to dog1 and give it a new value
// c) Create a new cat2 variable equal to cat1 and change its name property
// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they changed? Why?
// e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent

let teamSports = ["Hockey", "Cricket", "Volleyball"];
let moreSports = teamSports;
moreSports.push("Soccer", "Rugby");
moreSports.unshift("Netball", "Tennis");

console.log(teamSports); //idea with this is to observe the original copy,

let dog1 = "Bingo";
let dog2 = dog1;
dog2 = "Morris";

let cat1 = {
  name: "Fluffy",
  breed: "Siberian",
};
let cat2 = cat1; // this is a what you call shallow copy {...cat1} though points to its memory location, remember objects are stored by reference.
cat2.name = "Shadow";

console.log(teamSports);
console.log(dog1); //hasn't changed because primitives like strings are stored by value, and the values are different

console.log(cat1); //changed, because objects are stored by reference, and cat2 points to the same memory location


let moreSports2 = [...teamSports]
moreSports2.push('Netball')
console.log(teamSports) //doesn't include Netball because moreSports2 was created using a shallow clone

let cat3 = {...cat1}
cat3.name = 'Humperdinck'
console.log(cat1) // still set to Snuggles because cat3 was created using a clone that references a different memory location


//Here's a great article about deep copy vs shallow copy
// https://medium.com/version-1/cloning-an-object-in-javascript-shallow-copy-vs-deep-copy-fa8acd6681e9

// A: original dog1 hasn't changed but cat1 and teamSports has.
// Because dog1 is a string JS copies its value to the new variable
// Objects and arrays are reference data types and point to the same
// data in memory, so you are copying a reference to the data
// use the spread operator to create a shallow copy that won't change the original



// Q10. The following constructor function creates a new Person object with the given name and age values.
// a) Create a new person using the constructor function and store it in a variable
// b) Create a second person using different name and age values and store it in a separate variable
// c) Print out the properties of each person object to the console
// d) Rewrite the constructor function as a class called PersonClass and use it to create a third person using different name and age values. Print it to the console as well.
// e) Add a canDrive method to both the constructor function and the class that returns true if the person is old enough to drive.

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    // adding this. defines the method as a property
    this.canDrive = function () {
        return this.age > 16 ? true : false;
    }
}

//rewrite into class
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }
    // note that method needs to be outside the constructor function
    canDrive() {
        return this.age > 16 ? true : false;
    }
}

const mark = new Person('Mark S.', 44)
const helly = new Person('Helly R.', 37)
const irving = new PersonClass('Irving B.', 66)
const dylan = new PersonClass('Dylan G.', 36)

console.log(mark)
console.log(helly)
console.log(irving)
console.log(dylan)
console.log(mark.canDrive())
console.log(irving.canDrive())