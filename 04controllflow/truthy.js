const userEmail = [2] // string true value, string is empty then it is false, empty [] is consider as true


if(userEmail) console.log('got user email');
else console.log('dont have user email');

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0) {
//     console.log('Array is empty');
    
// }

const emptyObject = {}
if(Object.keys(emptyObject).length === 0) {
    console.log('object is empty');
    
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10;
val1 = null ?? 13
val1 = undefined ?? 134
val1 = null ?? 10 ?? 30

console.log(val1);

// Terniary Operator

// condition ? true : false

const value = 100

value < 40 ? console.log('value is smaller than 40') : console.log('value is greater than 40');

console.log(null == undefined);


