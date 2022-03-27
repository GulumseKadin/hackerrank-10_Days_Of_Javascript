"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function getSecondLargest(nums) {
  var sortedArray = nums.sort(function (a, b) {
    return a - b;
  });
  var uniqueSortedArray = sortedArray.filter(function (elem, index, k) {
    return index === k.indexOf(elem);
  });

  return uniqueSortedArray[uniqueSortedArray.length - 2];
}
