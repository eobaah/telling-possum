class Prioritynode {
  constructor(data, priority) {
    this.data = data
    this.priority = priority
    this.next = null
  }
}

export default class Priorityqueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(data, priority) {
    let newPNode = new Prioritynode(data, priority)

    // if the queue is empty
    if( this.size === 0 ) {
      this.head = this.tail = newPNode
      this.size++
    } else {
      newPNode.next = this.tail
      this.tail = newPNode
      this.size++
    }
  }

  dequeue() {
    if( this.size === 0 ) {
      return null
    } else {
      let removedNode = this.head
      this.head = this.next
      this.size--
      return removedNode
    }
  }

  front() {
    if(this.head) {
      return this.head;
    } else {
      return null
    }
  }

  back() {
    if(this.tail) {
      return this.tail;
    } else {
      return null
    }
  }

  isEmpty() {
    if( this.size == 0) {
      return true
    } else {
      return false
    }
  }

  length() {
    return this.size
  }
}
