class Node {
  constructor(data) {
    this.data = data;
    this.next = undefined;
  }
}

export default class Queue {
  constructor(data) {
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

const queue = new Queue()

queue.enqueue("Plato") // adds an element (the string "foo") to the back of the queue.
queue.dequeue() // returns and removes the front element in the queue or null if the queue is empty.
queue.front() // returns the front element in queue or null if the queue is empty.
queue.back() // returns the back element in the queue or null if the queue is empty.
queue.isEmpty() // returns true if the queue is empty or false if not.
queue.length() // returns the number of elements in the queue
