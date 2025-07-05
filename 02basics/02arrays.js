const marvelheros = ['thor', 'ironman', 'spiderman']
const dc = ['superman', 'flash', 'batman']

// marvelheros.push(dc); //array is a single element

// console.log(marvelheros);
// let ans = marvelheros.concat(dc) // returns an new array merge two arrays.
// console.log(ans);

// spread operator
const allnewheros = [...marvelheros, ...dc]
// console.log(allnewheros);

const anotherarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const ansarray = anotherarray.flat(Infinity)
console.log(ansarray);

