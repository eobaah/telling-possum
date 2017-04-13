class Node {
  constructor(data) {
    this.data = data
    this.next = undefined
  }
}

export default class Queue {

  constructor(data) {
    this.head = undefined
    this.tail = undefined
    this.size = 0;
  }

  enqueue(item) {
    let nextNode = new Node(item)
    if(this.size === 0) {
      this.head = this.tail = nextNode
    } else {
      nextNode.next = this.tail
      this.tail = nextNode
    }
    this.size = this.size + 1
  }

  dequeue() {
    let removable = this.tail
    if(this.tail) {
      this.tail = this.tail.next
      return removable.data
    } else {
      return undefined
    }
    this.size = this.size - 1
  }
  front() {
    if(this.size > 0) {
      return this.head
    } else return undefined
  }

  back() {
    if(this.size > 0) {
      return this.tail
    } else {
      return undefined
    }
  }

  isEmpty() {
    if(this.tail) {
      return false
    } else return true
  }

  length() {
    return this.size
  }
}
