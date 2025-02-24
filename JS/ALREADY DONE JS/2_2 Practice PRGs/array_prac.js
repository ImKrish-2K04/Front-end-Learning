/*
Quesions:

Q1: create an array of numbers and take input from user to add numbers to this array.
Q2: keep adding numbers to the array in Q1 until 0 is added to the array.
Q3: filter for numbers divisible by 10 from a given array.
Q4: craete an array of square of given numbers.
Q5: use reduce to calculate factorial of a given number of an array of first n natural numbers (n being the number whose factorial needs to be calculated)...
*/

/*
Q1 :

let arr = [];

let ch = prompt("want to add value to array? [y/n]");
let val = null;

while (ch != "n") {
    val = Number(prompt("enter value:"));
    if (val != isNaN(val)) {
        arr.push(val);
    } else {
        console.log("please add a valid number!");
        val = Number(prompt("enter value:"));
    }
    ch = prompt("do you want to add more values?");
}

document.write(arr);

OR

let arr = [];

let ch = prompt("want to add value to array? [y/n]");
let val = null;

while (ch != "n") {
    val = Number(prompt("enter value:"));
    while (true == isNaN(val)) {
        val = Number(prompt("please enter valid input!"));
    }
    arr.push(val);
    ch = prompt("do you want to add more values?");
}

document.write(arr);

Q2 :

let arr = [];
  let val;
  while (val != 0) {
    val = prompt("enter value here");
    arr.push(val);
  }
document.write(arr);

Q3 :

let nums = [10, 14, 20, 8, 35, 16, 70, 24, 40, 42, 56, 80, 63, 72, 88];

let divisibleBy10 = nums.filter((val)=>{
  return val%10 == 0;
})

console.log(divisibleBy10);

Q4 :

let arr = [1,2,3,4,5];

let numSquare = arr.map((val) => {
  return val*val;
})

console.log(numSquare);

Q5 :

let arr = [1, 2, 3, 4, 5];

  let result = arr.reduce((v1, v2) => {
    return v1 * v2;
  });

  console.log(result);
---------------------------------------
  actual factorial finding method! :

  function findFactorial(num) {
    let number = num;
    let temp = 1;

    while (number >= 1) {
      temp = temp * number;
      number -= 1;
    }

    return temp;
  }

  let ch = Number(prompt("enter number to find factorial"));
  let fact = findFactorial(ch);
  console.log(fact);
*/

