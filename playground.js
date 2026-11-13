"use strict";

// JavaScript Playground
// Small experiments, utilities and exercises.

// Calculate the sum of numbers.
function sum(numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

// Remove duplicate values from an array.
function unique(values) {
  return [...new Set(values)];
}

// Generate a FizzBuzz sequence.
function fizzBuzz(limit) {
  return Array.from({ length: limit }, (_, index) => {
    const number = index + 1;

    if (number % 15 === 0) return "FizzBuzz";
    if (number % 3 === 0) return "Fizz";
    if (number % 5 === 0) return "Buzz";

    return number;
  });
}

function reverseString(text) {
  return [...text].reverse().join("");
}


function countOccurrences(values, target) {
  return values.filter(value => value === target).length;
}

// Run examples.
console.log("Sum:", sum([1, 2, 3, 4, 5]));
console.log("Empty sum:", sum([]));
console.log("Unique:", unique([1, 2, 2, 3, 3, 4]));
console.log("FizzBuzz:", fizzBuzz(15));
console.log("Reverse:", reverseString("JavaScript"));
console.log("Occurrences:", countOccurrences([1, 2, 2, 3, 2], 2)); // 3
