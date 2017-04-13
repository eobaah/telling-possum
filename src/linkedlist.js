'use strict'


class Node {
  constructor(data) {
    this.data = data;
    this.next = undefined;
  }
}

export default class LinkedList {
  constructor() {
    this.head = undefined
    this.tail = undefined
    this.size = 0

  }

  getHeadNode() {
    return this.head
  }

  getTailNode() {
    return this.tail
  }

  insert(data) {
    let linkedNode = new Node(data)
    if (this.size === 0) {
      this.head = linkedNode
      this.tail = linkedNode
    } else {
     this.tail.next = linkedNode
     this.tail = linkedNode
    }
     this.size++
  }

  insertFirst(data) {
    let linkedNode = new Node(data)
      let oldHead = this.head
      this.head = linkedNode
      this.head.next = oldHead
      this.size++
  }

  contains(input) {
    let currentNode = this.head

    while( currentNode ) {
      if( currentNode.data === input ) {
        return true
      } else {
        currentNode = currentNode.next
      }
    }
    return false
  }

  find(input) {
    let currentNode = this.head

    while( currentNode ) {
      if( currentNode.data === input ) {
        return currentNode
      }
      if(currentNode === this.tail && input !== this.tail.data){
        return -1
      } else {
        currentNode = currentNode.next
      }
    }
  }

  insertBefore(before, after) {
  let beforeNode = new Node(before)
  let currentNode = this.head


  // if LinkedList is empty
  if( this.size === 0 ) {
    this.head = this.tail = beforeNode
    this.size++
  }

  // if after node is at front
  if( this.head.data === after ) {
    this.size++
    beforeNode.next = this.head
    this.head = beforeNode
  }

  // if after node is in the middle
  while( currentNode.next ) {
    if( currentNode.next.data === after ) {
      this.size++
      currentNode.next = beforeNode.next
      beforeNode.next = currentNode
      return currentNode
    }
    currentNode = currentNode.next
  }
  return after + " does not exist in this linked list"
}

  insertAfter(before, after) {
  let afterNode = new Node(after)
  let currentNode = this.head


  // if LinkedList is empty
  if( this.size === 0 ) {
    this.head = this.tail = afterNode
    this.size++
  }

  // if after node is at front
  if( this.head.data === before ) {
    this.size++
    afterNode.next = this.head.next
    this.head.next = afterNode
  }

  // if node is at the end
  if( this.tail.data === before ) {
    this.size++
    this.tail.next = afterNode
  }

  // if after node is in the middle
  while( currentNode.next ) {
    if( currentNode.next.data === before ) {
      this.size++
      afterNode.next = currentNode.next.next
      currentNode.next.next = afterNode
      return afterNode
    }
    currentNode = currentNode.next
  }
  return after + " does not exist in this linked list"
}

  isEmpty() {
    if(this.size === 0) {
      return true
    } else {
      return false
    }
  }

  remove() {
      let currentNode = this.head
      // if list is empty
      if(this.size === 0) {
        return "There is nothing to remove"
    }

      // if list has one item
      if (this.size === 1) {
        this.head = this.tail = undefined
        this.size--
        return this
    }

      // if there is 2
      if ( currentNode.next === this.tail) {
        this.tail = currentNode
        this.size--
        return this
    }
      // if there is more than 2
      while(currentNode.next.next !== this.tail) {
        currentNode = currentNode.next
      }
      this.tail = currentNode.next
      currentNode.next.next = undefined
      this.size--
      return this
  }

  removeFirst() {

      // if list is empty
      if(this.size === 0) {
        return "There is nothing to remove"
    }

      // if list has one item
      if (this.size === 1) {
        this.head = this.tail = undefined
        this.size--
        return this
    }

      // if there is 2
      if ( this.head.next ) {
        this.head = this.head.next
        this.size--
        return this
    }
  }

  longness() {
    return this.size
  }

  clear() {
    let cursor = this.head
    // the list is empty
    if( this.size === 0 ) {
      return "The list is already empty... idiot!!!"
    } else {
      this.head = this.tail = undefined
      this.size = 0
    }       
  }
}

let linkedList = new LinkedList()
