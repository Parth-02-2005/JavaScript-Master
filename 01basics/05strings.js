const name = 'parth'
const repoCount = 20

console.log(name + repoCount);

// string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const string = new String('parth')
console.log(string.toUpperCase());
console.log(string.charAt(3));
console.log(string.indexOf('h'));
console.log(string.substring(0,3));
console.log(string.slice(0,3)); // can accpet neg values as number 
console.log(string.trim()); // eliminates white spaces 
console.log(string.replace('p', 'g')); // find string and replace that character
console.log(string.includes('gandhi'));
console.log(string.split(' '));
console.log(string.concat(...string, name));


