// array is a collection of multiple types in same variable, it is an object
const myArr = [0,2,3,4,5,6,7,8, 9, 'parth'] // not necessary array must be of same time.

console.log(myArr[8]);

// shallow and deep copies 

// methods of arrays
myArr.push(10)
console.log(myArr);
myArr.pop() // removes the element form last 
myArr.unshift(0) // insert the element from first
console.log(myArr);
myArr.shift()
console.log(myArr); // removes first element in the array 
const newArray = myArr.join() // arrays to string
console.log(typeof newArray);

// slice 
console.log('A', myArr);
const newArray1 = myArr.slice(0,7); // returns new array of give indexs
// console.log('B', myArr);
// console.log(newArray1);

// splice 
const newArray2 = myArr.splice(0,7) // original array is manipulated.
// console.log('C', myArr);

// console.log(newArray2);








