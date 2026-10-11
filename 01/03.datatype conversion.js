let score = "33"
console.log(typeof score); // string

let valueInNumber = Number(score); // convert string to number
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // 33

/*if */ let score1="33abc"
let valueInNumber1 = Number(score1); // convert string to number
console.log(typeof valueInNumber1);//number
console.log(valueInNumber1); // NaN
//NaN means Not a Number, it is a special value that indicates that the value is not a valid number. 
// It is returned when a mathematical operation fails or when a value cannot be converted to a number.

/*if */ let score3= undefined 
let valueInNumber3 = Number(score3); // convert undefined to number
console.log(typeof valueInNumber3); // number
console.log(valueInNumber3); // NaN

let score4= true
let valueInNumber4 = Number(score4); // convert boolean to number
console.log(typeof valueInNumber4); // number
console.log(valueInNumber4); // 1

// why is string conversion confusing 

console.log("3" + 2); // 32
console.log(3 + "2"); // 32
console.log("1" +2 + 2); // 122    first it takes 1 as string and add others also as string
console.log(2 + 2 + "1"); // 41    first it add number as 1st is num and last is string

// Tricky conversion
console.log(+true); // 1
console.log(+""); // 0   these two are are not reccomended to use in production

let gamecounter = 100
++gamecounter
console.log(gamecounter); // 101 // read the copynotebook
