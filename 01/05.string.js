const name = "aastha"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // string interpolation

const gameName = new String('aastha-ar-com')// also a way for string declaration

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) // last index given 4 is not includedin op
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   aastha   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://aastha.com/aastha%20rasekar"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));