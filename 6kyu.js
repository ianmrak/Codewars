// Given an array, find the int that appears an odd number of times.

function findOdd(A) {
  let vals = A.reduce((acc, c) => {
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
