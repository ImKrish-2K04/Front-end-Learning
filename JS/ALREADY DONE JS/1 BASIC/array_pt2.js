/*
in this tut we are going to learn something more about array which is left in the array_pt1.js file!

first of all we are going to learn 'delete' keyword!
this keyword is used to delete the value of the array.
like following code ...

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("before using delete keyword...");
console.log(arr1);
delete arr1[1];
arr1 = arr1.filter((test) => test !== undefined);
console.log("\nafter using delete keyword...");
console.log(arr1);

let's understand the code above because it will be tricky to understand it perfectly if we are going to use it first time!

when we will use the delete keyword with array then it will delete the specified value, but it is not going to release the array index so it can be assigned to the next value of that array or we can say it will not going to be freed and will be assigned by undefined.

this will not convenient for the fresher, so we have to use the filter() method to filter the undefined values from the array.

this filter() method is filters out the array values as per the test provided to it and creates a new array with the filtered value as per the test. here the filter() method will iterates automatically until the array is not over.

here in the filter() we have provided the following test:
" (test) => test !== undefined " : here the 'test' is a variable which will be assigned by the array values in each iterations and it is also a parameter of the arrow function. in that function there is only one statement which tests the value of the 'test' variable and if it is not equal to undefined then it is going to return the value of that variable.

we can use splice() method instead of delete keyword!

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("use of delete keyword...\n");

let ch = 15;

let success = 0;

arr1.forEach((val, ind) => {
  if (val === ch) {
    delete arr1[ind];
    arr1.filter((test) => test !== undefined);
    success = 1;
  }
});

if (success === 0) console.log(ch + " is not present in the array!");
else if (success === 1) console.log(ch + " is deleted from the array!");

--------------------------------------------------------------------------

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let's understand 2 best methods for iterate array.

1. forEach() method

the syntax of forEach() method is forEach(function(value, index, array){})

arr2.forEach(function (val, ind) {
  console.log(val + " is present at index " + ind + " in the array.");
});

2. for...of loop

the syntax for for...of loop is for(let variable of array){} is always used for iterate the values of array which is very simple to fetch the array values as below!

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let val of arr2) {
  console.log(val);
}

--------------------------------------------------------------------------

the use of template literal !

let a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`hello no. ${a1[6]}\nWelcome to BLUE-LOCK`);

*/
