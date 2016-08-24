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
