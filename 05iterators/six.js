const coding = ["js", "ruby", "java", "python", "cpp", 1.2];

// for each does not return any value (imp)
// const result = coding.forEach((item) => {
//     // console.log(item);
//     return item
// })

// console.log(result);

const numbers = [100, 200, 300, 400, 500]
// const result = numbers.filter((num) => num > 300 )
// console.log(result);

// const newnums = []

// numbers.forEach((value) => {
//     if(value > 300) {
//         newnums.push(value)
//         console.log(newnums);
//     }
   
    
// })

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const userBooks = books.filter((book) => (book.genre === 'History'))

const userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks)



