console.log("3"> 2);

// comparision to null
console.log(null == 0); // false
console.log(null > 0); // false
console.log(null < 0); // false
console .log(null >= 0); // true
// reson: equality check == and comparision work diffeently
// comparision convert null into 0, treating it as 0 that why null >= 0 is true

//when we compared undefined with anyting always gives false 

//  STRICT ChECK
console.log("2" === 2);// false
// the === not only checks the data but also checks and comapres the datatype