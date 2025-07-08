// singleton -> when we declare as a literals 

// Object.create() // constructor

const mysum = Symbol('unique')

// object literals 
const JsUser = {
    name: 'parth gandhi',
    'full name': 'parth mahendra gandhi',
    [mysum]: 'hallo',
    age: 21,
    location: 'vadodara',
    email: 'parthgandhi@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ['monday', 'staurday']
}

// access value in object 
console.log(JsUser.name); // parth gandhi
console.log(JsUser['email']);
console.log(JsUser['full name']);
console.log(JsUser['mysum']);

// change the value of object 
JsUser.name = 'gandhi parth mahendra'
// Object.freeze(JsUser) // using freeze object will not be change.

// console.log(JsUser);

JsUser.greeting = function() {
    console.log('hello', JsUser.name);
    
}
console.log(JsUser.greeting);





