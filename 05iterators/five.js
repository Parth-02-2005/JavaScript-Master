const coding = ['js', 'python', 'java', 'cpp']

// coding.forEach((value) => {
//     console.log(value);
    
// })

// function printMe(item) {
//     console.log(item);
    
// }

// coding.forEach(printMe)

// coding.forEach((item, index, array) => {
//     console.log(item, index, array);
    
// }) 

// foreach accepts threee parameters 

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((value) => console.log(value.languageFileName));