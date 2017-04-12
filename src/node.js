'use strict'

export default class Node {

  constructor(data) {
    this.data = data
    this.next = undefined
    this.previous = undefined
  }

  getData() {
    return this.data
  }

  setNext(node) {
    this.next = node
    return this
  }

  setPrevious(node) {
    this.previous = node
    return this
  }

  getNext() {
    return this.next
  }
}

const nodeA = new Node({data: "apple"})
const nodeB = new Node({data: "banana"})
