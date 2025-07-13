// var c = 300

// {} known as scope.
let a = 300 //
if(true) {
    let a = 10
    const b = 20  
}

console.log(a);
// console.log(b); // ref error
// console.log(c);

console.log(foo);
var foo = 42;


function one() {
    const username = 'parth'

    function two() {
        const website = 'youtube'
        console.log(username); 
        console.log(a);
        
    }
    // console.log(website);
    two()
    
}

// one()

// if(true) {
//     const username = 'parth'
//     if (username === 'parth') {
//         const website = 'youtube'
//         console.log(username + website);
//     }
//     console.log(website);
    
// }
// console.log(username);

Promise.resolve(5).then(console.log);

