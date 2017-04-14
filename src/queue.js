class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export default class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(element) {
    let nextNode = new Node(element)
    if( this.size === 0 ) {
      this.head = this.tail = nextNode
    } else {
      nextNode.next = this.tail
      this.tail = nextNode
    }
    this.size++
  }

  dequeue() {
    let dequeued = this.tail;
    if(this.tail) {
      this.tail = this.tail.next
      this.size--
      return dequeued.data;
    } else {
      return null;
    }
  }

  front() {
    if( this.size > 0 ) {
      return this.head;
    } else {
      return null;
    }
  }

  back() {
    if( this.size > 0 ) {
      return this.tail;
    } else {
      return null;
    }
  }

  isEmpty() {
    if(this.tail){
      return false;
    } else {
      return true;
    }
  }

  length() {
    return this.size;
  }

}
