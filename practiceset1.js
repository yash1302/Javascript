// try to create a string and add number to it
let a = "yash"
let b = 6
console.log(a+b)

// determine data type of previous question

console.log(typeof (a+b))

// add new thing to an already created object

const a1 = {
    name1: "yash",
    age : 12
}

// here we cannot change a1 as it is constant but we can change variables inside 
// object as the constant is reference to the object

a1['roll_no'] = 130

console.log(a1)

// create a word meaning dictionary of 5 words

const dictionary = {
    word1 : 'meaning1',
    word2 : 'meaning2',
    word3 : 'meaning3',
    word4 : 'meaning4',
    word5 : 'meaning5'
}

// console.log(dictionary.word1)
// it can be also written as this
console.log(dictionary['word1'])
