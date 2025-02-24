/*

there is 2 methods for creating a sub-string of the main string.

1) substring(starting-index, ending-index);
2) slice(starting-index, ending-index);

here the substr() method is depricated. so, instead of it we can use its 2 alternatives which have same parameters but they handles them in different ways.

substring():
  - Takes two parameters: startIndex and endIndex.
  - If startIndex is greater than endIndex, substring() will swap the two arguments before extracting the substring.
  - If either argument is negative, it is treated as 0.

slice():
  - Also takes two parameters: startIndex and endIndex.
  - With slice(), negative values can be used to represent a position from the end of the string.
  - If startIndex is greater than endIndex, slice() will return an empty string.

---------------------------------------------------------------------

Ex. of substring(Starting-index, Ending-index) method:

let str = "i am krishna makwana.";
console.log("string :", str);
console.log("\nthe normal example of the substring() method.");
console.log("sub string :", str.substring(5, 13));
console.log(
  "\nwhen the st-ind is greater than end-ind then it will swap those indexes.",
);
console.log("sub string :", str.substring(13, 5));
console.log("\nthe negative indexing is treated as 0th index.");
console.log("sub string :", str.substring(-4, 13));

---------------------------------------------------------------------

Ex. of slice(Starting-index, Ending-index) method:

let str = "i am krishna makwana.";

console.log("string :", str);

console.log("\nthe normal example of the substring() method.");

console.log("sub string :", str.slice(5, 13));

console.log(
  "\nthe slice() will return an empty string if the starting index is greater than the ending index.",
);
console.log("sub string :", str.slice(13, 5));

console.log("\nthe nagative indexes can be used in this method like below:");
console.log("sub string :", str.slice(-16));

console.log("\nNegative indexing is working as the following:");
console.log("----------------------------------------------");
console.log(" k\t r\t i\t s\t h\t n\t a");
console.log("-7\t-6\t-5\t-4\t-3\t-2\t-1");

----------------------------------------------------------------------

let's understand some of the methods of the string.

1) indexOf("word") method:
--------------------------
the indexOf() method returns the index of the first occurrence of the specified word in the string. if the word is not found then it returns -1.

we can provide a starting index also to find the specific occurance we need from the string! like one of the following example.

let str = "komal is my girl friend, but she is a bitch!";
console.log(str + "\n");

console.log(str.indexOf("komal")); //remove the 'a' from the input passed to indexOf() and set it to 'a' and get the index of the first occurrence of the word.
console.log(str.indexOf("is", 15));

2) lastIndexOf("word") method:
------------------------------
the lastIndexOf() method returns the index of the last occurrence of the specified word in the string. if the word is not found then it returns -1.

it will also takes the index from starting of the string if we need a specific occurence of the word.

console.log(str.lastIndexOf("is"));
console.log(str.lastIndexOf("komal"));
console.log(str.lastIndexOf("is", 6)); //starting index of the first 'is' is 6
console.log(str.lastIndexOf("is", 33)); //starting index of the next 'is' is 33

the small but very important thing about the string is that it is immutable.
that means we can't change the string.
to find the length of the string we can use the 'length' property of the string.

str = "yo! what's up?";
console.log("the length of the string : '" + str + "' is :", str.length + ".");

---------------------------------------------------------------------------------

trim(): Removes whitespace from both ends of a string.

trimStart(): Removes whitespace from the beginning of a string.

trimEnd(): Removes whitespace from the end of a string.

replace(): Replaces a specified value in a string with another value.

split(): Splits a string into an array of substrings based on a specified separator.

concat(): Joins two or more strings and returns a new string.

padStart(): Pads the current string with another string until the resulting string reaches the specified length. The padding is applied from the start of the current string.

padEnd(): Pads the current string with another string until the resulting string reaches the specified length. The padding is applied from the end of the current string.

charAt(): Returns the character at a specified index in a string.

charCodeAt(): Returns the Unicode value of the character at a specified index in a string.

codePointAt(): Returns a non-negative integer that is the Unicode code point value.

fromCharCode(): Converts Unicode values into characters.  //depricated

at(): Returns the character at a specified index in a string.

slice(): Extracts a section of a string and returns it as a new string.

substring(): Extracts characters from a string between two specified indices and returns the new sub-string.

substr(): Extracts a specified number of characters from a string, starting at a specified index.

includes(): Checks if a string contains another string.

startsWith(): Checks if a string starts with a specified substring.

endsWith(): Checks if a string ends with a specified substring.

repeat(): Returns a new string with a specified number of copies of the string it was called on.

match(): Retrieves the matches when matching a string against a regular expression.

search(): Searches a string for a specified value and returns the position of the match.

matchAll(): Returns an iterator of all results matching a string against a regular expression.

replaceAll(): Replaces all occurrences of a specified value in a string with another value.

match(): It searches a string for a specified pattern (like a regular expression) and returns the match as an array.

search(): It searches a string for a specified value and returns the index where the value is found. If the value is not found, it returns -1.

matchAll(): It returns an iterator of all the results matching a string against a regular expression.

replaceAll(): It replaces all occurrences of a specified value or pattern in a string with another value.

Examples :

*/

let str = "   Hello, World!   ";

// trim()
console.log(str.trim()); // Output: "Hello, World!"

// trimStart()
console.log(str.trimStart()); // Output: "Hello, World!   "

// trimEnd()
console.log(str.trimEnd()); // Output: "   Hello, World!"

// replace()
console.log(str.replace("World", "Replit")); // Output: "   Hello, Replit!   "

// split()
console.log(str.split(",")); // Output: ["   Hello", " World!   "]

// concat()
let str1 = "Hello, ";
let str2 = "World!";
console.log(str1.concat(str2)); // Output: "Hello, World!"

// padStart()
console.log(str.padStart(20, "*")); // Output: "***   Hello, World!"

// padEnd()
console.log(str.padEnd(20, "*")); // Output: "   Hello, World!***"

// charAt()
console.log(str.charAt(4)); // Output: "o"

// charCodeAt()
console.log(str.charCodeAt(4)); // Output: 111

// codePointAt()
console.log(str.codePointAt(4)); // Output: 111

// slice()
console.log(str.slice(5, 13)); // Output: "Hello, Wo"

// substring()
console.log(str.substring(5, 13)); // Output: "Hello, Wo"

// substr()
console.log(str.substr(5, 8)); // Output: "Hello, W"

// includes()
console.log(str.includes("Hello")); // Output: true

// startsWith()
console.log(str.startsWith("Hello")); // Output: true

// endsWith()
console.log(str.endsWith("World!")); // Output: true

// repeat()
console.log(str.repeat(2)); // Output: "   Hello, World!      Hello, World!   "

let str4 = "Hello, World! Welcome to Replit!";

// match()
console.log(str4.match(/o/g)); // Output: ['o', 'o', 'o']

// search()
console.log(str4.search("World")); // Output: 7

// matchAll()
const regex = /[A-Z]\w+/g;
const matches = [...str4.matchAll(regex)];

matches.forEach((match) => {
  console.log(match[0]);
});

// replaceAll()
console.log(str4.replaceAll("World", "Replit")); // Output: "Hello, Replit! Welcome to Replit!"

// toUpperCase()
let str6 = "hey there! how are you?";
console.log(str6.toUpperCase());

// toLowerCase()
let str7 = "HEY THERE! HOW ARE YOU?";
console.log(str7.toLowerCase());
