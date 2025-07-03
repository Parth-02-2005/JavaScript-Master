let score = '33asdf'

console.log(typeof(score));

let valueInNumber = Number(score) // converting a string score to number 
console.log(valueInNumber); // NaN not a number

console.log(typeof(valueInNumber));

// '33' => 33
// '33aasdf' => NaN
// 'true' => 1

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
