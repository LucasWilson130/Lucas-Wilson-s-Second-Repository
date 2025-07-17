let myString = "This is a string";
let anotherString = "   Another string"; // 3 blank spaces at the beginning
let hello = "Hello there!";
let myName = "Lucas"; // Replace "Lucas" with your first name

// Slice "is a" from myString
// "is a" starts at index 5 and ends before index 9.
let slicedString = myString.slice(5, 9);
console.log("Sliced 'is a' from myString:", slicedString);

// Use substring to get "the" from "Hello there!" (assuming this was the intention, as "the" is not in anotherString)
// "the" from "Hello there!" starts at index 6 and ends before index 9.
let subStringFromHello = hello.substring(6, 9);
console.log("Substring 'the' from hello:", subStringFromHello);

// If the request for "the" from "anotherString" was literal and an error,
// here's what substring would return (an empty string or part of "Another"):
// let subStringFromAnother = anotherString.substring(startIndex, endIndex);
// console.log("Substring 'the' from anotherString (will be empty or incorrect):", subStringFromAnother);
