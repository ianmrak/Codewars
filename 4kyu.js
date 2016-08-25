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
