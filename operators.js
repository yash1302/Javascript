// arithematic operators
// +,-,*,/,%,**,++,--

let a = 10
console.log("++a = " , ++a);
console.log("a++ = " , a++);
console.log("--a = " , --a);
console.log("a-- = " , a--);
console.log("a = " , a);
console.log("a++ = " , a++);

// assignment operators
// +=
// -=
// *=
// /=
// **=

let assgn = 1;
assgn += assgn + 5;
console.log("assgn = ",assgn);

// comparison operators
// ==
// ===
let a1 = 6
let a2 = '6'

// it only compares both values without considering data type if same return true 
console.log("a1==a2 = ", a1==a2);
// it also checks data values and data types of both variable 
console.log('a1===a2', a1===a2);  

// logical operators
// && --> and
// || --> or
// ! --> not

let x = 3
let y = 3

console.log(x<5 && y<5);
console.log(x<2 && y<5);
console.log(x<2 || y<5);

