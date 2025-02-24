/*

let's understand how to use the for loop and how we can apply a name to it and how to use 'break' and 'continue' keywords in the for loop.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i=0; i<10; i++) {
  console.log(arr[i]);
}

let's check for some value in the array, if it is present then do not print it and print the rest,

for (i = 0; i < 10; i++) {
  if (arr[i] === 5) continue;
  else console.log(arr[i]);
}

let's make a condition, in which if the number is found then break out the loop and print the array before the condition succeed!

for (i = 0; i < arr.length; i++) {
  if (arr[i] === 7) break;
  else console.log(arr[i]);
}

now we will learn to assign the name to the loop.

bazooka: for (i = 0; i < arr.length; i++) {
  if (arr[i] === 3) continue;
  else if (arr[i] === 8) break bazooka;
  console.log(arr[i]);
}

*/

console.log("Hello World!");
