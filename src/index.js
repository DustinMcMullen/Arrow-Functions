import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
const numbersDoubled = numbers.map((x) => x * 2);
console.log(numbersDoubled);

//////Filter - Create a new array by keeping the items that return true.
const numbersOverTen = numbers.filter((num) => num > 10);
console.log(numbersOverTen);

//Reduce - Accumulate a value by doing something to each item in an array.
const sumOfNumbers = numbers.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber;
});
console.log(sumOfNumbers);

////Find - find the first item that matches from an array.
const firstNumberAboveTen = numbers.find((num) => num > 10);
console.log(firstNumberAboveTen);

////FindIndex - find the index of the first item that matches.
const LocOfFirstNumberAboveTen = numbers.findIndex((num) => num > 10);
console.log(LocOfFirstNumberAboveTen);
