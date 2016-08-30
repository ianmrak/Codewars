// n this kata, you will create an object that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

function pickPeaks(arr){
  let out = {pos:[],peaks:[]};
  for (let i = 1; i < arr.length-1; i++) {
    if (arr[i] > arr[i-1] && arr[i] >= arr[i+1]) {
      out.peaks.push(arr[i]);
      out.pos.push(i);
    }
  }
  return out;
}

// In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

function permutations(string) {
  let perms = {};
  function permute(input, current) {
    if (!input.length) {
      perms[current.join('')] = true;
    }
    for (let i = 0; i < input.length; i++) {
      let newCurrent = current.slice();
      let newInput = input.slice();
      newCurrent.push(input[i]);
      newInput.splice(i,1);
      permute(newInput, newCurrent);
    }
  }
  permute(string.split(''), []);
  return Object.keys(perms);
}

// Advanced Events

function Event() {
  let events = [];
  this.subscribe = function(...args) {
    return args.reduce((e, c) => {
      if (c instanceof Function) { e.push(c); }
      return e;
    }, events);
  }
  this.unsubscribe = function(...args) {
    events.reduceRight((e, c, ci) => {
      args.forEach((arg, ai) => {
        if (arg === c) {
          args.splice(ai, 1);
          e.splice(ci,1); 
        }
      });
      return e;
    }, events);
  }
  this.emit = function(...args) {
    let copy = events.slice();
    for (let e of copy) {
      e.apply(this, args);
    }
  }
}
