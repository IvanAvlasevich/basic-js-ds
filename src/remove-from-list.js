const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList( head, k ) {
  //Создаем новый объект класса
  let node = new ListNode(-1);
  node.next = head;
  let prevState = node;
  let curState = head;

  while (curState) {
    
    if(curState.value == k){
      prevState.next = curState.next;
      curState = curState.next;
    }else{
      prevState = curState;
      curState = curState.next;
    }
  }
  return node.next
}

// console.debug(removeKFromList([3, 1, 2, 3, 4, 5],3))

module.exports = {
  removeKFromList
};
