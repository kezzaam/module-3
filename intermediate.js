// Q1. Create a function that takes a string as a parameter and expected the string with the 
// first character of each word changed into a capital letter, as in the example below. 
// Test it with different strings.

function ucFirstLetters(str) {
  // split the string into words
  const words = str.split(" ")
  // map over each word and capitalise the first letter, then concat the rest of the word back into the string
  const capitalised = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  })
  return capitalised.join(" ")
}

console.log(ucFirstLetters("los angeles")) // "Los Angeles"


// Q2. 
// a) Create a function truncate(str, max) that truncates a given string 
// of text if its total length is greater than the max length. 
// It should return either the truncated text, with an ellipsis (…) 
// added to the end if it was too long, or the original text otherwise. 
// b) Write another variant of the truncate function that uses a conditional operator.

function truncate(str, max) {
  // check string length against the max value, if it is greater, slice it from the start to the max
  // concatenate the ...
  // if it's not greater, return the string
  return str.length > max ? str.slice(0, max) + '...' : str
}

console.log(truncate('This text will be truncated if it is too long', 25)) // This text will be truncat...

// Q3. Use the following animals array for the below tasks. 
// Test each one by printing the result to the console. Review the following link for tips:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 
// a) Add 2 new values to the end 
// b) Add 2 new values to the beginning 
// c) Sort the values alphabetically 
// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue 
// e) Write a function findMatchingAnimals(beginsWith) that expected a new array containing all the animals that begin with the beginsWith string. 
// Try to make it work regardless of upper/lower case. 
const animals = ['Tiger', 'Giraffe']
console.log(animals)

animals.push('Elephant', 'Lion')
console.log(animals)

animals.unshift('Antelope', 'Zebra')
console.log(animals)

animals.sort()
console.log(animals)

function replaceMiddleAnimal(newValue) {
  // find the middle animal by dividing the array length by 2, 
  // using Math.floor rounds to the nearest integer in the case that the array doesn't divide evenly
  const middleIndex = Math.floor(animals.length / 2)
  animals[middleIndex] = newValue
}

replaceMiddleAnimal('Rhinoceros')
console.log(animals)

function findMatchingAnimals(beginsWith) {
  // filter through array, change all to lowercase to take care of case sensitivity, 
  // use startsWith() method to check each animal
  const matchingAnimals = animals.filter((animal) =>
    animal.toLowerCase().startsWith(beginsWith.toLowerCase())
  )
  return matchingAnimals
}

console.log(findMatchingAnimals('g'))

console.log(animals)

// Q4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into camel-cased 'marginLeft'. 
// The function should remove all dashes, and uppercase the first letter of each word after a dash. 
// b) Create variants of the camelCase function that use different types of for loops, and 
// c) with and without the conditional operator. 

function camelCase(cssProp) {
  // Split the input string by the dash character to get an array of words.
  let words = cssProp.split("-")
  // Capitalize the first letter of each word after the first word. For loop is initialised to 1, to skip the first word.
  // words[i] is each word, words[i][0] is first letter, change to uppercase then concat the rest back
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  // Join the words back together without the dash character.
  return words.join("")
}
console.log(camelCase('margin-left')) // marginLeft 
console.log(camelCase('background-image')) // backgroundImage 
console.log(camelCase('display')) // display

function camelCase2(cssProp) {
  // split
  const words = cssProp.split("-")
  // forEach loop takes word and index arguments, greater than 0 skips the first word
  words.forEach((word, index) => {
    if (index > 0) {
      words[index] = word[0].toUpperCase() + word.slice(1)
    }
  });
  return words.join("")
}

console.log(camelCase2('margin-left')) // marginLeft 
console.log(camelCase2('background-image')) // backgroundImage 
console.log(camelCase2('display')) // display

// conditional operator version:
function camelCase3(cssProp) {
  // split at the dash
  let words = cssProp.split("-")
  // iterate through each word
  for (let i = 1; i < words.length; i++) {
    // conditional checks if the first character of each word is a dash.  
    // If yes, slice the word to remove the first character, then capitalize the new first character and concatenate the rest of the word. 
    // If no, return the original word.
    // Note in the original version the dash isn't dealt with until the string is joined back up
    words[i] = words[i][0] === "-" ? words[i][1].toUpperCase() + words[i].slice(2) : words[i];
  }

  return words.join("")
}

console.log(camelCase3('margin-left')) // marginLeft 
console.log(camelCase3('background-image')) // backgroundImage 
console.log(camelCase3('display')) // display

// Another way to do it with a conditional and .map method
function camelCase4(cssProp) {
  // Split the input string by the dash character to get an array of words,
  // capitalize each word after the first word using map(),
  // and join the words back together without the dash character using join().
  return cssProp.split("-").map((word, i) => i > 0 ? word[0].toUpperCase() + word.slice(1) : word).join("");
}

console.log(camelCase4('margin-left')) // marginLeft 
console.log(camelCase4('background-image')) // backgroundImage 
console.log(camelCase4('display')) // display

// Q5. Decimal number operations in JavaScript can lead to unexpected results, as in the following:
let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004 

// We can sometimes avoid this using the toFixed function to force the number of decimal places as below, but it’s not always useful: 
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working?

// a) Explain why the above code expected the wrong answer 
console.log(fixedTen, fixedTwenty)
// A  It is concatenating the decimals instead of adding them because toFixed expected a string

// b) Create a function currencyAddition(float1, float2) which safely adds the two decimal numbers float1 and float2 and expected the correct float result. 
function currencyAddition(float1, float2) {
  return parseFloat(float1.toFixed(2)) + parseFloat(float2.toFixed(2));
}

console.log(0.3 == currencyAddition(0.1, 0.2)) // true 

// c) Create a function currencyOperation(float1, float2, operation) which safely performs the given operation (either +, -, / or *) on the two numbers and expected the correct float result. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch may be useful. 
function currencyOperation(float1, float2, operation) {
  switch (operation) {
    case "+":
      return Number((float1 + float2).toFixed(2));
      break;
    case "-":
      return Number((float1 - float2).toFixed(2));
      break;
    case "*":
      return Number((float1 * float2).toFixed(2));
      break;
    case "/":
      return Number((float1 / float2).toFixed(2));
      break;
    default:
      return "Invalid operation";
  }
}

console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true
// test the function with all operators
console.log(currencyOperation(0.1, 0.2, '+')) // 0.3
console.log(currencyOperation(0.1, 0.2, '-')) // -0.1
console.log(currencyOperation(0.1, 0.2, '*')) // 0.02
console.log(currencyOperation(0.1, 0.2, '/')) // 0.5

// d) (Extension) Extend the above function to include a fourth argument numDecimals which allows the operation to support different amounts of decimal places from 1 to 10.

function currencyOperation2(float1, float2, operation, numDecimals) {
  switch (operation) {
    case "+":
      return Number((float1 + float2).toFixed(numDecimals));
    case "-":
      return Number((float1 - float2).toFixed(numDecimals));
    case "*":
      return Number((float1 * float2).toFixed(numDecimals));
    case "/":
      return Number((float1 / float2).toFixed(numDecimals));
    default:
      return "Invalid operation";
  }
}


currencyOperation2(10.5, 5.25, "+", 2); // expected "15.75"
currencyOperation2(10.5, 5.25, "-", 2); // expected "5.25"
currencyOperation2(10.5, 5.25, "*", 2); // expected "55.13"
currencyOperation2(10.5, 5.25, "/", 2); // expected "2.00"
currencyOperation2(10.5, 5.25, "*", 5); // expected "55.12500"

// HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. 
// Test with different values as well as the below:
// I wrote a third function to use a factor for more precision. This took me a while to understand properly.

function currencyOperation(float1, float2, operation, numDecimals) {
  // Calculate the multiplication factor based on the number of decimal places
  const factor = 10 ** numDecimals;

  // Perform the operation on the floats multiplied by the factor
  let result;
  switch (operation) {
    case "+":
      result = (float1 * factor) + (float2 * factor);
      break;
    case "-":
      result = (float1 * factor) - (float2 * factor);
      break;
    case "*":
      result = (float1 * factor) * (float2 * factor) / factor;
      break;
    case "/":
      result = (float1 * factor) / (float2 * factor) * factor;
      break;
    default:
      return "Invalid operation";
  }

  // Format the result to the desired number of decimal places
  return Number((result / factor).toFixed(numDecimals));
}


currencyOperation3(10.5, 5.25, "+", 2); // expected "15.75"
currencyOperation3(10.5, 5.25, "-", 2); // expected "5.25"
currencyOperation3(10.5, 5.25, "*", 2); // expected "55.13"
currencyOperation3(10.5, 5.25, "/", 2).toFixed(2); // expected "2.00" 
currencyOperation3(10.5, 5.25, "*", 5).toFixed(5); // expected "55.12500"


// Q6. Create a function unique(duplicatesArray) which takes an array parameter that may include duplicates. 
// Your function should return an array containing only the unique values from duplicatesArray.
// Test with the following arrays and create another one of your own. 

function unique(duplicatesArray) {
  // empty array to store unique array items
  let result = []
  // iterate through the given array and check if the result array contains the current item
  // if not, then push it to result array
  duplicatesArray.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item)
    }
  })
  // return result array
  return result
}

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ] 
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

// Q7. Use the following array of book objects to practice the array functions for map, find and filter. 
// Test each of your answers to the below tasks. 
const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
  { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
  { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

// a) Write a function getBookTitle(bookId) that uses the find function to return the title of the book object with the matching id. 

function getBookTitle(bookId) {
  // assign find method to a variable so .title can be accessed
  const book = books.find((book) => {
    // return the book object that strictly matches the id 
    return book.id === bookId;
  })
  // if there is a matching book, return the title
  if (book) {
    return book.title
  }
  // if not, display message
  return "Book not found"
}

getBookTitle(4)

// b) Write a function getOldBooks() that uses the filter function to return all book objects written before 1950. 

function getOldBooks() {
  // store filtered books in variable oldBooks
  const oldBooks = books.filter((book) => {
    // return the book year less than 1950
    return book.year < 1950
  })
  // if there are no books filtered into oldBooks
  if (oldBooks.length === 0) {
    return "No books before 1950 found"
  }
  return oldBooks
}

getOldBooks()

// c) Write a function addGenre() that uses the map function to add a new genre property to all of the above books, with the value ‘classic’. 

function addGenre() {
  const classic = books.map((book) => {
    return {
      ...book, // spread operator to copy all existing properties of the book object
      genre: 'classic' // add the new genre property
    }
  })
  return classic
}

console.log(addGenre())

// d) (Extension) Write a function getTitles(authorInitial) that uses map and filter together to return an array of book titles for books written by authors whose names start with authorInitial. 

function getTitles(authorInitial) {
  // filter each book's author to check if it starts with given letter
  const filteredBooks = books
    .filter(book => book.author.startsWith(authorInitial))
    // then chain on map to output the book titles for the filtered books
    .map(book => book.title)
  
  return filteredBooks
}

getTitles("H") // [ 'To Kill a Mockingbird' ]

// e) (Extension) Write a function latestBook() that uses find and forEach to get the book with the most recent publication date.

function latestBook() {
  // set latest to !latest
  let latest = null
  // loop through each book in the books array
  books.forEach(book => {
    // check if there is no latest, or if the book's date is greater than the book in latest
    if (!latest || book.year > latest.year) {
      // assign book to latest
      latest = book
    }
  })
  // loop through books again to find and return the book that is the latest
  const latestMatch = books.find(book => book.year === latest.year)
  return latestMatch
}

latestBook() //{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }

// Q8. The following code creates a new Map object for storing names beginning with A, B, or C with their phone numbers. 
const phoneBookABC = new Map() //an empty map to begin with 
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

// a) Create a new phoneBookDEF Map to store names beginning with D, E or F 
// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values 
const phoneBookDEF = new Map([
  ['Derek', '0423876290'],
  ['Ellen', '0478698872'],
  ['Fred', '0476298356']
])

// c) Update the phone number for Caroline 
phoneBookABC.set('Caroline', '0477123456')

// d) Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map 
function printPhoneBook(contacts) {
  // with a for of loop
  for (let [name, number] of contacts) {
    console.log(`${name}: ${number}`)
  }
}
// e) Combine the contents of the two individual Maps into a single phoneBook Map 
// Make new map with spread operator on previous Maps as arguments
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF])

// f) Print out the full list of names in the combined phone book
// another for of loop to iterate over the keys and print the names
for (let name of phoneBook) {
  console.log(name);
}

// Q9. Given the below salaries object, perform the following tasks. 
let salaries = {
  "Timothy": 35000,
  "David": 25000,
  "Mary": 55000,
  "Christina": 75000,
  "James": 43000
};

// a) Write a function sumSalaries(salaries) that calculates and expected the total of all salaries
function sumSalaries(salaries) {
  let total = 0
  // The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.
  for (let salary of Object.values(salaries)) {
    total += salary
  }
  return total
}

console.log(sumSalaries(salaries)); // Output: 233000


// b) Write a function topEarner(salaries) that calculates and expected the name of the person earning the highest salary
function topEarner(salaries) {
  let highest = 0
  let top = ""
  // The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > highest) {
      highest = salary
      top = name
    }
  }
  return top
}

console.log(topEarner(salaries)); // Output: "Christina"

//Q10. The following code uses the Date object to print the current time and the number of hours that have passed today so far. 
// Extend the code to do the following: 
const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

// a) Print the total number of minutes that have passed so far today
// b) Print the total number of seconds that have passed so far today
// c) Calculate and print your age as: 'I am x years, y months and z days old'
// d) Write a function daysInBetween(date1, date2) which calculates and expected 
// the amount of days in between the two given dates.