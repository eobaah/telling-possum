'use strict'

export default class Node {

  constructor(data, priority) {
    this.data = data
    this.priority = priority
    this.next = undefined
    this.previous = undefined
  }

  getData() {
    return this.data
  }

  setPriority(newPriority) {
    this.priority = newPriority
    return this
  }

  setNext(node) {
    this.next = node
    return this
  }

  setPrevious(node) {
    this.previous = node
    return this
  }

  getPriority() {
    return this.priority
  }

  getNext() {
    return this.next
  }

  getPrevious() {
    return this.previous
  }
}
