/*
Q1 : write a program to print the marks of a student in an object using for loop.
Q2 : write a program in Q1, using for...in loop
Q3 : write a program to print 'try again' until the user enters a correct number.
Q4 : write a function to find mean of 5 numbers...
*/

/*
Q1 :

ex : marks = {harry:90, rohan:98, kamlesh:78};

let marks = {};

let entry = prompt("how many entry you wants?");

for (let i = 1; i <= entry; i++) {
    let sName = prompt("enter your name here");
    let sMarks = prompt("enter your marks here");

    marks[sName] = Number(sMarks);
}

console.log(marks);

Q2 :

let marks = {
    kamlesh : 90,
    dinesh : 77,
    ramesh : 89
}

for (let val in marks) {
    console.log(`marks of ${val} is ${marks[val]}.`);
}

Q3 :

let num = prompt("enter a number");

while (num != 20) {
    num = prompt("not true! please enter again!");
}

if (num == 20) window.alert("well done!!");

Q4 : 

let sum = 0;

function findMean(){
    for (let i in arguments){
        sum += arguments[i];
    }
    let mean = sum / arguments.length;
    return mean;
}

let result = findMean(1,2,3,4,5);
console.log(`mean of entered values is ${result} .`);
*/
