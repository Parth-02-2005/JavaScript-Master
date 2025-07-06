// Immediately Invoked Function Expressions (IIFE)


// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();

// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('parth')

let x = 5;
(function() {
  console.log(x);
  let x = 10;
})();
