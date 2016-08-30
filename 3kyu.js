// You are given a node that is the beginning of a linked list. This list always contains a tail and a loop.

// Your objective is to determine the length of the loop.

function loop_size(node){

  if (!node) { return false; }
  let slow = node;
  let fast = node;
  while(fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if(slow == fast) {
      return findCount(slow, fast);
    }
  }
  return false;

  function findCount(counter, start) {
    let count = 1;
    counter = counter.next;
    while(counter !== start) {
      count++;
      counter = counter.next;
    }
    return count;
  }
}
