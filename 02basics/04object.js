// const tinder = new Object(); // singleton object.
const tinder = {} // non singleton object.


tinder.id = '123abc'
tinder.name = 'parth gandhi'
tinder.isLoggedIn = false

// console.log(tinder);

// object nesting
const regularUser = {
    email: 'parthgandhi@gmail.com',
    fullname: {
        userfullname: {
            firstname: 'parth',
            lastname: 'gandhi'
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: 'a',
    2: 'b',
    3: 'c'
}

const obj2 = {
    4: 'd',
    5: 'e',
    6: 'f'
}
// merge two objects 
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) // using {} is garuntee which gives result in {} only.
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: 'example@gmail.com'
    }, 
    {
        id: 2, 
        email: 'example1@gmail.com'
    }
]

console.log(users[1].email)

console.log(tinder);

console.log(Object.keys(tinder)) // extract key from object
console.log(Object.values(tinder)) // extract value from object
console.log(Object.entries(tinder)) // array into array

console.log(Object.hasOwn(tinder, 'ravan'));



