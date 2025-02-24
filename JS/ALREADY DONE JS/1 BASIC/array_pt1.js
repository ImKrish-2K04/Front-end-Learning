/*
Way 1 to declare the array:
let arr1 = ["val1", "val2", "val3", "val4"]

Way 2 to declare the array:
let arr2 = new Array("a1", "a2", "a3", "a4", "a5")

by the following you can display the array list in the console:
console.log(arr1)

by the following you can display the table of array indexes and values in the console:
console.table(arr1)

---------------------------------------------------------------------------------

to concat 2 or more arrays in JS, we have to use the concat() function as follows,

let arr1 = arr2.concat(arr3,arr4,arrN)

a real EX. :

let arr1 = ["val1", "val2", "val3", "val4"];
let arr2 = new Array(10, 20, 30, 40, 50);
let arr3 = arr1.concat(arr2);
console.table(arr3);

---------------------------------------------------------------------------------

now let's find the length of the array:

let arr4 = new Array(1, 2, 3, 4, 5)
console.log('the length of arr4 is' , arr4.length + '.')

---------------------------------------------------------------------------------

let's understand the working of the following forEach() method's working flow!

first of all, we are using the forEach() method alongside the array 'arr4', and it is going to iterate over the array's values and display them in the console. but we have written some functionality in that method, so it is not going to display all the array's values in the console, why it is? let's understand!

in the forEach() method, we have defined one function which is an anonymous function, and that function is going to be executed for each value of the array. the function haves the parameter 'names' which is going to be the value of the array over each iteration. in that function we have provided the 'if' condition statement, which looks for the matching of the 'names' variable's value as does it is matching with the string 'krishna' or not!? if yes, then it is going to display the value of the 'names' variable in the console else it is not going to do anything and iterate the next value of the array until the array is not complete or the value is not found!

let arr4 = ["krishna", "ramesh", "dinesh", "suresh", "mahesh"];

arr4.forEach(function (names) {
  if (names == "krishna") {
    console.log("length of the value 'krishna' is", names.length);
  }
});

---------------------------------------------------------------------------------

let's understand how to add the values into the begining and the end of an array.

let arr5 = ["Mango", "Banana", "Orange", "Apple"];

console.log("before doing anything the array looks like:");
console.log(arr5);

arr5.unshift("Papaya");

console.log("\nafter adding the value 'Papaya' in the begining of the array:");
console.log(arr5);

arr5.push("Grapes");

console.log("\nafter adding the value 'Grapes' in the end of the array:");
console.log(arr5);

here, unshift(values) method is used for adding or we can say for pushing the values at the begining of an array.

More, the push(values) method is used for adding or we can say for pushing the values at the end of an array.

---------------------------------------------------------------------------------

now, let's understand how to remove the value from the begining and the end of an array.

let arr5 = ["Papaya", "Mango", "Banana", "Orange", "Apple", "Grapes"];

console.log("before doing anything the array looks like:");
console.log(arr5);

arr5.shift();

console.log(
  "\nafter removing the 'Papaya' value from the begining of the array:",
);
console.log(arr5);

arr5.pop();

console.log("\nafter removing the 'Grapes' value from the end of the array:");
console.log(arr5);

---------------------------------------------------------------------------------

let's understand how to remove some values from the middle of an array!
this is about the splice(Starting-index, no-of-values) method!

the splice() method is used to splice or we can say slice a part of an array.
this can be done by giving the information of the index number of the array, and the number of values to be removed from that array means slice from that array.

for ex. on a birthday of someone, we are slicing the cake like 1/4th piece of cake is sliced, so it is removed from the original cake and returned as a new cake's piece and the original cake has rest of 3/4 area left of cake now... this is the same way of using splice with array...

here, we have to understand that the slice we have defined is removed from that array and for use it in another array, we have to define the new array and then we have to assign that splice() method to the new array before slicing.

let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("the array before anything!:");
console.log(arr6);

console.log("\nthe array after splicing!:");
console.log(arr6.splice(4, 3));

---------------------------------------------------------------------------------

for creating an empty array, we can do this : 'let arr = [];'

let's checks whether the value is present in the array or not! and if it is present then how to find its position in the array!

to find the presence of the value in the array we can use arrayName.includes(value) method.

to find the position of the value in the array we can use arrayName.indexOf(value) method.

real EX. :

let arr7 = ["krishna", "ramesh", "dinesh", "mukesh"];

arr7.forEach(function (name) {
  if (name == "mukesh") {
    console.log("the value '" + name + "' is present in the array.");
    console.log(
      "the index of the value '" + name + "' is,",
      arr7.indexOf("mukesh"),
    );
  }
});

---------------------------------------------------------------------------------

now, we are going to learn how to generate an array from a string and how to generate a string from an array!

let's understand how to generate an array from a string!

there are 2 method which are individually used for these tasks to which we are going to learn!

1. split() method
the split() method is used to split the string into the values of the array, these values are the substring of the string which is seperated from the string by the given seperator in the method.
this is done by giving a parameter to this method, is the seperator.

real EX. :

let str = "i am a software engineer.";
let strArr = str.split(" ");
console.log(strArr);

2. join() method

the join() method is used to join the values of the array. these values are combined into a string and to create a perfect string, we have to give a seperator.

real EX. :

let arr8 = ["I", "am", "a", "Software", "Engineer."];
let str = arr8.join(" ");
console.log(str);

---------------------------------------------------------------------------------

now there is just a few things left related to an array!
like a multidimensional array is left to understand..
it is just a simple like nesting of an array in an array!

let's understand the multidimensional array!

let arr9 = [
  ["val1", "val2", "val3", "val4"],
  ["a1", "a2", "a3", ["b1", "b2", "b3", "b4"], "a4"],
  ["s1", "s2", "s3", "s4"],
];
console.log("the complete array: \n", arr9, "\n");

console.log("the fraction of an array or the specific value of the array:");
console.log(arr9[1][3][2]);

*/
