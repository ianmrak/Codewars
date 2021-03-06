// Given an array, find the int that appears an odd number of times.

function findOdd(A) {
  let vals = A.reduce((acc, c) => {
    n tripledouble(num1, num2) {
      for (let i = 0; i < 10; i++) {
        if (new RegExp(`${i}{3}`).test(num1) && new RegExp(`${i}{2}`).test(num2)) {
          return 1;
        }
      }
      return 0;
    }
    if (!acc[c]) { acc[c] = 1; }
    else { acc[c]++; } 
    return acc;
  }, {});

  for (let val in vals) {
    if (vals[val] % 2 !== 0) {
      return parseInt(val);
    }
  }
}

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed.

function spinWords(words){
  let arr = words.split(' '),
  out = [];
  for (let i of arr) {
    let val = i.length > 4 ? i.split('').reverse().join('') : i;
    out.push(val);
  }
  return out.join(' ');
}

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder=function(iterable){
  let array = iterable instanceof Array ? iterable : iterable.split(''),
  out = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== out[out.length-1]) {
      out.push(array[i]);
    }
  }
  return out;
}

// Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.

function doneOrNot(board){
  let regions = {};
  for (let i = 0; i < board[0].length; i++) {
    let xRegion = findRegion(i);
    let nums = {};
    for (let j = 0; j < board.length; j++) {
      let yRegion = findRegion(j),
        currentRegion;
      currentRegion = xRegion + '' + yRegion;
      if (!regions[currentRegion]) { regions[currentRegion] = {}; }
      if (nums[board[j][i]] || regions[currentRegion][board[j][i]]) { return "Try again!"; }
      regions[currentRegion][board[j][i]] = true;
      nums[board[j][i]] = true;
    }
  }
  return "Finished!";
}

function findRegion(val) {
  if (val < 3) { return 1; }
  if (val > 2 && val < 6) { return 2; }
  else { return 3; }
}

// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

function comp(array1, array2){
  if (!array2 || !array1) { return false; }
  if (!array1.length || !array2.length) { return true; }
  let squares = {};
  for (let n of array2) {
    if (!squares[n]) { squares[n] = 0; }
    squares[n]++;
  }
  for (let n of array1) {
    let num = n*n;
    if (!squares[num]) { return false; }
    squares[num]-=1;
  }
  return true;
}

// In English and programming, groups can be made using symbols such as "()" and "{}" that change meaning. However, these groups must be closed in the correct order to maintain correct syntax.

function groupCheck(s){
  let brackets = { 
    open: { 
      '{':1, 
      '[':2, 
      '(':3 },
    close: { 
      '}':1,
      ']':2,
      ')':3
    }
  },
  stack = [];
  for (let v of s) {
    if (brackets.open[v]) { stack.push(v); }
    if (brackets.close[v]) {
      if (brackets.close[v] !== brackets.open[stack.pop()]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

function pigIt(str){
  return str.split(' ').map((word) => {
    let first = word.split('')[0],
    rest = word.split('').slice(1).join('');
    return `${rest}${first}${'ay'}`;
  }).join(' ');
}

// Write a function which takes in numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

function tripledouble(num1, num2) {
  let arr1 = num1.toString().split(''),
  arr2 = num2.toString().split(''),
  cache1 = {},
  cache2 = {};
  findPairs(arr1, cache1);
  findPairs(arr2, cache2);

  for (let val in cache1) {
    if (cache1[val] > 2 && cache2[val]) {
      return 1;
    }
  }
  return 0;
}

function findPairs(arr, cache) {
  let counter = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i-1]) {
      counter++;
      if (i === arr.length-1) {
        cache[arr[i]] = counter;
        continue;
      }
    }
    else {
      if (counter > 1) { cache[arr[i-1]] = counter; }
      counter = 1;
    }
  }
}

// BEST SOLUTION - GOOD LORD

function tripledouble(num1, num2) {
  for (let i = 0; i < 10; i++) {
    if (new RegExp(`${i}{3}`).test(num1) && new RegExp(`${i}{2}`).test(num2)) {
      return 1;
    }
  }
  return 0;
}

// Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.

function validate(n){
  let arr = n.toString().split(''),
  start = arr.length % 2 === 0 ? 0 : 1,
  counter = start === 0 ? 1 : 0;
  for (let i = start; i < arr.length; i++) {
    counter++;
    let curr = parseInt(arr[i]);
    let temp = curr;
    if (counter > 1) {
      curr = curr * 2;
      counter = 0;
    }
    arr[i] = curr > 9 ? curr - temp : curr; 
  }
  return arr.reduce((acc,curr) => acc + curr )%10 === 0;
}
