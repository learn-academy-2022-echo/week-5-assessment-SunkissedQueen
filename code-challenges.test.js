// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.
// From Developer Luis

describe("codedMessage", ()=> {
  it("takes in a string and returns a coded message", () => {
    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})

// FAIL  ./code-challenges.test.js
// codedMessage
//   ✕ takes in a string and returns a coded message (1 ms)

// ● codedMessage › takes in a string and returns a coded message

//   ReferenceError: codeMessage is not defined
// b) Create the function that makes the test pass.

//Psuedo code
// create function codedMessage
// input is secretCodeWord1,2,3
//  converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0
// I need to replace a character with another character
// Use .replace()
// Used RegEx inside of my .replace to replace characters. /g will look for all occurrences of the character
// So the .replace is changing 'a' --> 4, 'e' --> '3', 'i' --> 1, and 'o' to 0.
// In order for it to not be case sensitive I had to use i inside of my RegEx, g would find all matches, i would make my search case insensitive. These are both mode modifiers. Capital 'E' would not have been replaced otherwise.
// output 
// "L4ck4d41s1c4l"
// "Gobbledygook"
// "3cc3ntr1c"


const codedMessage = (string) => {
return string.replace(/a/gi,'4').replace(/e/gi,'3').replace(/i/gi,'1').replace(/o/gi,'0')
}

// PASS  ./code-challenges.test.js
// codedMessage
//   ✓ takes in a string and returns a coded message (2 ms)
// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.
// From Developer Francisco
// a) Create a test with expects statement using the variable provided.

describe("wordsWithTheLetter",() => {
  it("Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
    
    const letterA = "a"
    // Expected output: ["Mango", "Apricot", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
      
    expect(wordsWithTheLetter(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
    expect(wordsWithTheLetter(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
}) 
// b) Create the function that makes the test pass.
// PSEUDO: The challenge is create a function that would accept the variavle array and the string variable as arguments.
//The function should return the array with only the values that contain the string. In other words, return the word values that have the string letter. The values that do not contain the string letter should not be returned.
//for the function to execute this we would need an iterable that would iterate over the array and return the values providing the string letter.
// for my function i applied the high order function .filter which is used to filter the array on a set condition.
//according  function wordsWithLetter, i passed the array and letter as arguments.
//within my function i set it to return the array argument filtered using .filtered.
//within my High order Function, i set the conditon to iterate the values.
//for every iteration i set the condition to return the values that inluded the letter string.
//i used .include() and i passed the letter argument as the argument to make the iteration to return the array with the values that included the letter argument.
//the .include() method will only specifcally return the values containing the specific letter argument. meaning if the letter was lowercase it will return me only the lowercase letter.
//to ensure that .includes returns the values that contain the letter argument whether its capitalized we must add another .includes() that takes in the letter argument. This time the second letter argument will have the mutator .toUppercase() which will specify that we are also including the values that have the lower case letter OR the uppercase letter

const wordsWithTheLetter = (array, letter) => {
  return array.filter((value) => value.includes(letter) || value.includes(letter.toUpperCase()))

  }


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.
// From Developer Cliff
// a) Create a test with expect statements using the variable provided.

fdescribe("fullHouse", () =>{
  const hand1 = [5, 5, 5, 3, 3]

  const hand2 = [5, 5, 3, 3, 4]
  // Expected output: false
  const hand3 = [5, 5, 5, 5, 4]
  // Expected output: false
  const hand4 = [7, 2, 7, 2, 7]
  // Expected output: true
  it("take in a array of words, and a string containing 1 letter and returns an array of alll the words containing the single letter regardless of capitalization ", () => {
      expect(fullHouse(hand1)).toEqual(true)
      expect(fullHouse(hand2)).toEqual(false)
      expect(fullHouse(hand3)).toEqual(false)
      expect(fullHouse(hand4)).toEqual(true)
      
  });
});
// good fail, utilized fdescribe to focus testing
// Test Suites: 1 failed, 1 total

// b) Create the function that makes the test pass.
// create a function, fullHouse, that takes in an array.
const fullHouse = (array) => {
  // utilize the built in method .sort to organize the numbers from smallest to largest.
  let sorted = array.sort()
  console.log(sorted)
  // write and if statement checking for if i[0]===i[2]&& i[3]===i[4] && i[0]!==i[4] returning true
  if ((sorted[0] === sorted[2])&&(sorted[3]===sorted[4])&&(sorted[0]!==sorted[4])){
  return true
  } 
  // write and if statement checking for if i[0]===i[1]&& i[2]===i[4] && i[0]!==i[4]returning true
  else if((sorted[0] === sorted[1])&&(sorted[2]===sorted[4])&&(sorted[0]!==sorted[4])) {
      return true
   //else return false
  } else {return false}           
}