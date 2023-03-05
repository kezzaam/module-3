// // Class exercise

// // base class - a blueprint
// class Vehicle {
//     constructor(speed) {
//         this.speed = speed
//     }

//     move() {
//         console.log(`move at ${this.speed} speed`)
//     }

// }

// // instances of the Vehicle class
// let sprint = new Vehicle("Medium / Slow")

// let run = new Vehicle("Slow")

// let walk = new Vehicle("Very Slow")

// walk.move()
// run.move()
// sprint.move()

// // extends class

// class Car extends Vehicle {
//     constructor(speed) {
//         // gets property from parent Vehicle
//         super(speed)
//     }

//     drive() {
//         console.log(`Driving at ${this.speed}`)
//     }
// }

// let ford = new Car("100mph")

// ford.drive()

// class Plane extends Vehicle {
//     constructor(speed){
//         super(speed)
//     }

//     fly(){
//         console.log(`Flying at ${this.speed}`)
//     }
// }

// // Pizza 

// // Program 1: 

// // Requirement is to mimic the Pizza Making/Ordering procedure. Output of the program should be in the below
// // order
// // Started preparing Pizza
// // Pizza Base is Prepared
// // Cheese is added on Pizza
// // Veggies are added on Pizza
// // Pizza is heated
// // Pizza is ready

// function order() {
//     console.log("Order recieved")
// }

// function base() {
//     console.log("Preparing pizza base")
// }

// function cheese() {
//     console.log("Adding cheese")
// }

// function veggies() {
//     console.log("Sprinkling vegetables")
// }

// function cook() {
//     console.log("Cooking pizza")
// }

// function ready() {
//     console.log("Pizza is ready to eat")
// }

// order()
// base()
// cheese()
// veggies()
// cook()
// ready()

// // Program 2:
// // Replace the above normal function with Javascript Expression functions format

// const order = function() {
//     console.log("Order recieved")
// }

// const base = function() {
//     console.log("Preparing pizza base")
// }

// const cheese = function() {
//     console.log("Adding cheese")
// }

// const veggies = function() {
//     console.log("Sprinkling vegetables")
// }

// const cook = function() {
//     console.log("Cooking pizza")
// }

// const ready = function() {
//     console.log("Pizza is ready to eat")
// }

// order()
// base()
// cheese()
// veggies()
// cook()
// ready()

// // Program 3:
// // Replace the Program 1 with arrow functions

// const order = () => {
//     console.log("Order recieved")
// }

// const base = () => {
//     console.log("Preparing pizza base")
// }

// const cheese = () => {
//     console.log("Adding cheese")
// }

// const veggies = () => {
//     console.log("Sprinkling vegetables")
// }

// const cook = () => {
//     console.log("Cooking pizza")
// }

// const ready = () => {
//     console.log("Pizza is ready to eat")
// }

// order()
// base()
// cheese()
// veggies()
// cook()
// ready()

// Program 4: For the program 1 make the functions asynchronous by using
// setTimeOut for different operations with
// different time durations. The output of this program should give the output in the order (Use callback pattern to
// solve this issue)

// setTimeout arguments - function to be executed after the timeout, timeout delay, argument for the function
 
  function order(next) {
    console.log("Order up!")
    setTimeout(next, 500, base)
  }
  
  function base(next) {
    console.log("Preparing pizza base")
    setTimeout(next, 500, cheese)
  }
  
  function cheese(next) {
    console.log("Adding cheese")
    setTimeout(next, 500, veggies)
  }
  
  function veggies(next) {   
    console.log("Sprinkling vegetables")
    setTimeout(next, 500, cook)
  }
  
  function cook(next) {
    console.log("Cooking pizza")
    setTimeout(next, 500, ready)
  }
  
  function ready() {
    console.log("Pizza is ready to eat")
  }

  // For some reason I struggled to understand this one. So I broke it down carefully.
  // func: The next function in the sequence to be run.
  // callback: A function to be called when the entire sequence is finished.
  function next(func, callback) {
    // The func argument is a function that takes another function as its argument. 
    // Each function in the sequence calls the next function in the sequence when it's finished by passing it 
    // as an argument to the function it received as an argument.
    func(function(nextFunc) {
        // The recursive call to next() keeps the sequence going until the final step (ready()) is reached. 
        // When ready() is called without any arguments, the sequence is finished and callback() is called 
        // to signify that the entire process is complete.
        next(nextFunc, callback)
      }
    )
  }
  
  next(order)
  

// // Program 5 : Modify the program 4 to use Promises concept and achieve the required result
// function order() {
//     return new Promise(function(resolve, reject) {
//       setTimeout(function() {
//         console.log("Order received");
//         resolve();
//       }, 1000);
//     });
//   }
  
//   function base() {
//     return new Promise(function(resolve, reject) {
//       setTimeout(function() {
//         console.log("Preparing pizza base");
//         resolve();
//       }, 1000);
//     });
//   }
  
//   function cheese() {
//     return new Promise(function(resolve, reject) {
//       setTimeout(function() {
//         console.log("Adding cheese");
//         resolve();
//       }, 1000);
//     });
//   }
  
//   function veggies() {
//     return new Promise(function(resolve, reject) {
//       setTimeout(function() {
//         console.log("Sprinkling vegetables");
//         resolve();
//       }, 1000);
//     });
//   }
  
//   function cook() {
//     return new Promise(function(resolve, reject) {
//       setTimeout(function() {
//         console.log("Cooking pizza");
//         resolve();
//       }, 1000);
//     });
//   }
  
//   function ready() {
//     return new Promise(function(resolve, reject) {
//       setTimeout(function() {
//         console.log("Pizza is ready to eat");
//         resolve();
//       }, 1000);
//     });
//   }
  
//   order()
//     .then(base)
//     .then(cheese)
//     .then(veggies)
//     .then(cook)
//     .then(ready)
//     .then(function() {
//       console.log("Pizza is finished");
//     });