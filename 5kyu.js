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

// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

function cakes(recipe, available) {
  let totals = {};
  for (let item in recipe) {
    if (!available[item]) { return 0; }
    let total = available[item];
    while(total > 0) {
      if (!totals[item]) { totals[item] = 0; }
      if (total - recipe[item] >= 0) {
        totals[item]++;
      }
      total -= recipe[item];
    }
  }
  return totals[Object.keys(totals).reduce((a,b) => {
    a = totals[a] > totals[b] ? b : a;
    return a;
  })];
}
