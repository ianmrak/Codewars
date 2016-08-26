// Create a function named divisors that takes an integer and returns an array with all of the integer's divisors(except for 1 and the number itself).

function divisors(integer) {
  let divisors = [];
  for (let i = 2; i <= Math.floor(integer/2); i++) {
    if (integer % i === 0) {
      divisors.push(i);
    }
  }
  return divisors.length ? divisors : `${integer} is prime`;
};

// Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

function order(words){
  if (!words) { return ''; }
  let wordArr = words.split(' '),
    output = [];
  for (let word of wordArr) {
    let index = word.match(/\d/);
    output[index-1] = word;
  }
  return output.join(' ');
}

// Welcome. In this kata, you are asked to square every digit of a number.

function squareDigits(num){
  let nums = num.toString().split(''),
  squaredNums = '';
  for (let num of nums) {
    squaredNums += Math.pow(num, 2);
  }
  return parseInt(squaredNums);
}

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

function titleCase(title, minorWords='') {
  let titleArr = title.split(' '),
  ignores = {};
  minorWords.split(' ').forEach(word => ignores[word.toLowerCase()] = true );
  return titleArr.map((word, index) => {
    if (ignores[word.toLowerCase()] && index !== 0) {
      return word.toLowerCase();
    }
    else {
      return word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase();
    }
  }).join(' ');
}

// Welcome. In this kata you are required to, given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it. 

function alphabetPosition(text) {
  let nums = [],
  letters = text.split('');
  for (let i of letters) {
    if (i.match(/^[a-zA-Z]+$/)) {
      nums.push(i.toUpperCase().charCodeAt(0) - 64);
    }
  }
  return nums.join(' ');
}

// Given a string of words and numbers. Extract the expression including: 1. the operator: either addition or subtraction 2. the two numbers that we are operating on.

function calculate(string) {
  let arr = string.split(' ');
  let math = [];
  for (let i of arr) {
    if (parseInt(i)) {
      math.push(parseInt(i));
    }
    if (i === 'gains' || i === 'loses') {
      math.push(i);
    }
  }
  return math[1] === 'gains' ? math[0]+math[2] : math[0]-math[2];
}
