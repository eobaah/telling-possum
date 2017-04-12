'use strict'

import Node from '../src/node'

export default class LinkedList {

  constructor(data) {
    this.data = data
    this.head = undefined
    this.tail = undefined
    this.size = 0
  }

  insert(data) {
    const linkedNode = new Node(data)
    this.data = linkedNode
    this.tail = linkedNode
    if(this.size === 0) {
      this.tail = linkedNode
      this.head = linkedNode
    } else {
      this.tail.next = linkedNode
      this.tail = linkedNode
    }
    this.size = this.size + 1
  }

  insertFirst(data) {
    let linkedNode = new Node(data)
    let oldHead = this.head
    this.head = linkedNode
    this.head.next = oldHead
    this.size = this.size + 1
  }

  getHeadNode() {
    return this.head
  }

  getTailNode() {
    return this.tail
  }

  contains(item) {
    let cursor = this.head

    while(cursor) {
      if(cursor.data === item) {
        return true
      } else {
        cursor = cursor.next
      }
    }
    return false
  }

  find(item) {
    let cursor = this.head

    while(cursor) {
      if(cursor.data === item) {
        console.log('cursor: ', cursor);
        return cursor
      } else {
        cursor = cursor.next
      }
    }
    return -1
  }

  isEmpty() {
    if (this.size === 0) {
      return true
    } else false
  }
  // insertAfter(data) {
  //   let linkedNode = new Node(data)
  //   let oldHead = this.head
  //   this.head = linkedNode
  //   this.head.next = oldHead
  //   this.size = this.size + 1
  // }

  insertBefore(item, index) {
    let cursor = this.head
    let itemNode = new Node(item)
    //check if you're inserting into an empty node
    if(this.size === 0) {
      this.head = this.tail = itemNode
      return itemNode
    } else if(this.head.data === index) {
      //what to do if cursor is head
      this.head = itemNode
      this.head.next = cursor
    } else {
      //what to do if cursor is in the middle
      cursor.next = itemNode.next
      itemNode.next = cursor
      return cursor
    }
    this.size = this.size + 1
  }

  insertAfter(item, index) {
    let cursor = this.head
    let itemNode = new Node(item)
    //check if you're inserting into an empty node
    if(this.size === 0) {
      this.head = this.tail = itemNode
    } else if(this.head.data === index) {
      //what to do if cursor is head
      this.head = cursor
      this.head.next = itemNode
    } else if (this.tail.data === index) {
      this.tail = itemNode
    } else {
      //what to do if cursor is in the middle
      itemNode.next = cursor.next.next
      itemNode = cursor.next
      // return cursor
    }
    this.size = this.size + 1
  }

  remove() {
    let removable = this.tail
    if(this.size === 0) {
      return 'there is nothing to remove you dummy'
    } if(this.size === 1) {
      this.head = this.tail = undefined
    } else {
      for (let i =0; i<this.size; i++) {
        if(i.next.next === undefined) {
          previous = i.next
          console.log('previous: ', previous);
          this.tail = previous
          console.log('this.tail: ', this.tail);
        }
      }
    }
    this.size = this.size -1
  }

}//LinkedList end


// linkedList.remove()                // Removes the tail node from the list

// linkedList.removeFirst()           // Removes the head node from the list

// linkedList.clear()                 // Clears the list of all nodes/data
