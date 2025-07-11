function myName() {
    console.log('p');
    console.log('a');
    console.log('r');
    console.log('t');
    console.log('h');
}

myName() // functino call using () wihtout () it will only pass refernece 

function add(num1, num2) {
    return num1 + num2
}
console.log(add(5,'a')); // if you dont pass value it will give NaN

const result = add(5,10);
console.log(result);

// function loginUserMessage(username) {
//     if (username) {
//         return `${username} just logged in`
//     } else console.log('enter value');
    
// }

// console.log(loginUserMessage())

function calculateCartPrice(...num1) { //rest operator.
    return num1
}

console.log(calculateCartPrice(3,5,5,5))

const user ={
    uesrname: 'parth',
    price: 999
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.uesrname} and price is ${anyobject.price}`);
    
}

handleObject(user)


const newArr = [100,200,300,400]

function getArray(num) {
    return num[0]
}
console.log(getArray(newArr))

