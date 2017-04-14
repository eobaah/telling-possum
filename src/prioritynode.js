export default class Prioritynode {
  constructor(data, priority) {
    this.data = data
    this.priority = priority
    this.next = undefined
    this.prev = undefined
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

  setPrev(node) {
    this.prev = node
    return this
  }

  getPriority() {
    return this.priority
  }

  getNext() {
    return this.next
  }

  getPrev() {
    return this.prev
  }

}
