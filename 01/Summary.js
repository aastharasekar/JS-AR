// Datatype 
/* Primitive Datatypes: (call by value)
  7 types; String 
  */

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["spiderman", "ironman", "hulk"];
let myObj = {
    name: "aastha",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);