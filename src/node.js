export default class Node {
  constructor(data) {
    this.data = data
    this.next = undefined
    this.prev = undefined
  }

  getData() {
    return this.data
  }

  setNext(node) {
    this.next = node
    return this
  }

  setPrev(node) {
    this.prev = node
    return this
  }

  getNext() {
    return this.next
  }

  getPrev() {
    return this.prev
  }

}

  const nodeA = new Node({data: "apple"})
  const nodeB = new Node({data: "banana"})
