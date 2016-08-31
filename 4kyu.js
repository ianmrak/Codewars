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
    events.slice().forEach((e) => e.apply(this, args));
  }
}

// Coordinates Validator
// You need to create a function that will validate if given parameters are valid geographical coordinates.

function isValidCoordinates(coordinates){
  let coords = coordinates.split(',');
  if (coords.length > 2) { return false; }
  if (Math.abs(parseInt(coords[0])) > 90 || Math.abs(parseInt(coords[1])) > 180) { 
    return false; 
  }
  for (let i = 0; i < coords.length; i++) {
    let coord = coords[i].trim();
    if (coord.slice(1).match(/-/)) { return false; }
    if (coord.match(/[a-zA-Z]/)) { return false; }
    if (coord.split('.').length > 2) { return false; }
    if (isNaN(parseInt(coord))) { return false; }
  }
  return true;
}

// If a value is provided then the path will be set to that value. Any objects not present within the path will be created automatically in order for the path to be successfully set.

function namespace(root, path, value){
  let pathList = path.split('.');
  if (value) {
    return pathList.reduceRight((obj, c) => { 
      obj[c] = value || obj;
      value = null;
      return obj;
    }, root);
  }
  else {
    let out = root;
    for (let k of pathList) {
      if (!out[k]) { return null; }
      out = out[k];
    }
    return out;
  }
}
