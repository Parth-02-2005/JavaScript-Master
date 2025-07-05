const user = {
    username: 'parth',
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this); // refers to the user prints all key : value of user
        
    }
}

user.welcomeMessage() 
console.log(this); // global context this refers to an empty object

// In node env this keyword refers to empty


function foo() {
    console.log(this);
    
}

foo()

console.log(typeof(NaN));

console.log(1 + "1" - 1);

// const addtwo = (a, b) => {
//     return a + b
// }

// console.log(addtwo(5,5));


