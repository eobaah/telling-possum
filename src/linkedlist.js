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

  // insertAfter(data) {
  //   let linkedNode = new Node(data)
  //   let oldHead = this.head
  //   this.head = linkedNode
  //   this.head.next = oldHead
  //   this.size = this.size + 1
  // }

}




// const linkedList = new LinkedList()
// const linkedNode = new Node({key:'bananas'})
// const nodeA = new Node({key: 'plato'})
// const nodeB = new Node({key: 'aristotle'})





// linkedList.insertAfter("apples", "bananas")  // Inserts a node (with data "bananas") after the first node containing "apples"
// linkedList.insertBefore("bananas", "apples") // Inserts a node (with data "apples") before the first node containing "bananas"
// linkedList.getHeadNode()           // Returns the first node in the list
// linkedList.getTailNode()           // Returns the last node in the list
// linkedList.contains("bananas")     // Determines whether or not the list contains the provided data
// linkedList.find("bananas")         // Returns the first node containing the provided data, or -1 if not found
//
//
//
// linkedList.remove()                // Removes the tail node from the list
// linkedList.removeFirst()           // Removes the head node from the list
// linkedList.isEmpty()               // Determines if the list is empty or not
// linkedList.size()                  // Returns the size of the list (number of nodes)
// linkedList.clear()                 // Clears the list of all nodes/data
