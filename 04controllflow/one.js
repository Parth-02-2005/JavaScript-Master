// if

// if(condition) {

// }

// comparision operators
// <, >, <=, !=, !==
let score = 200
if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);
const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2"), console.log('test3'); // known as shorthand notation, implict scope

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");

}

const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard && 2==3) {  // && all the condition must be true
    console.log('allow to buy');
    
}


// || OR condition any one of them condition must be true.
