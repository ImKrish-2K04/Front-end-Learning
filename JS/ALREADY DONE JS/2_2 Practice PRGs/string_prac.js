/*
Q1 : what will the following print in js : 
console.log("har\"".length);
Q2 : explore the following functions of string : includes, startsWith, endsWith
Q3 : write a program to convert a string into a lowercase string..
Q4 : extract the amount of this string : "please give rs 1000"
Q5 : try to change 4th character of a given string. were you able to do it!?
*/

/*
ANS:

Q1 :

console.log("har\"".length); // output : 4

Q2 :

let str = "i am a yodha, i will never accept defeat.";

if(str.includes('yodha')) console.log('it presents');
else console.log("it isn't present");

if(str.startsWith('i')) console.log('it is starts with the provided string');
else console.log("it isn't starts with the provided string");

if(str.endsWith('t')) console.log('it is ends with the provided string');
else console.log("it isn't ends with the provided string");

Q3 :

let str = "I AM A YODHA";
console.log(str.toLowerCase());

Q4 :

let str = "please give rs 1000";
let amount = str.slice(str.indexOf('1'), str.length);
console.log(`we have extracted the amount : ${amount}.`);

OR

let str = "please give rs 1000";
let amount = str.slice(str.indexOf('1'), );
console.log(`we have extracted the amount : ${amount}.`);

Q5 :


*/

