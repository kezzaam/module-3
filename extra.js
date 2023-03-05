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

// This is the simplest code to achieve Program 4. It calls the next function inside each function's setTimeout

// function order() {
//   console.log("Order received");
//   base();
// }

// function base() {
//   console.log("Preparing pizza base");
//   setTimeout(cheese, 2000);
// }

// function cheese() {
//   console.log("Adding cheese");
//   setTimeout(veggies, 500);
// }

// function veggies() {
//   console.log("Sprinkling vegetables");
//   setTimeout(cook, 1000);
// }

// function cook() {
//   console.log("Cooking pizza");
//   setTimeout(ready, 5000);
// }

// function ready() {
//   console.log("Pizza is ready to eat");
// }

// order();

// but... to make the code more flexible:
// each function has a callback - next - which is passed as an argument and called after the set timeout 
// the next function in the order is passed as an argument to next as the third parameter in setTimeout
// function order(next) {
//   console.log("Order received")
//   setTimeout(next, 500, base)
// }

// function base(next) {
//   console.log("Preparing pizza base")
//   setTimeout(next, 500, cheese)
// }

// function cheese(next) {
//   console.log("Adding cheese")
//   setTimeout(next, 500, veggies)
// }

// function veggies(next) {
//   console.log("Sprinkling vegetables")
//   setTimeout(next, 500, cook)
// }

// function cook(next) {
//   console.log("Cooking pizza")
//   setTimeout(next, 500, ready)
// }

// function ready() {
//   console.log("Pizza is ready to eat")
// }

// // calls order with the next function in the process as an argument
// order(base)  
// // but why am I getting console messages twice?
// // the functions are being called twice, once here in the argument and again inside the order function
// // I've been stuck on this problem for a ridiculous amount of time, so I'm moving on! It seems like it should be obvious but I'm just not getting it.


// // Program 5 : Modify the program 4 to use Promises concept and achieve the required result
// function order() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("Order up!")
//       resolve()
//     }, 500)
//   })
// }

// function base() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("Preparing pizza base")
//       resolve()
//     }, 500)
//   })
// }

// function cheese() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("Adding cheese")
//       resolve()
//     }, 1000)
//   })
// }

// function veggies() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("Sprinkling vegetables")
//       resolve()
//     }, 500)
//   })
// }

// function cook() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("Cooking pizza")
//       resolve()
//     }, 1500)
//   })
// }

// function ready() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("Pizza is ready to eat")
//       resolve()
//     }, 2500)
//   })
// }

// order()
//   .then(base)
//   .then(cheese)
//   .then(veggies)
//   .then(cook)
//   .then(ready)
//   .then(function () {
//     console.log("Order finished")
//   })
