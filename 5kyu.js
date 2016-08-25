// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

var moveZeros = function (arr) {
  let nums = [],
      zeros = [];
  arr.forEach((val) => {
      if (val === 0) { zeros.push(val); }
      else { nums.push(val); }
  });
  return [...nums, ...zeros];
}
