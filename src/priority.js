class Prioritynode {
  constructor(data, priority) {
    this.data = data
    this.priority = priority
    this.next = undefined
    this.prev = undefined
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
    let cursor = this.tail
    let currentNode = this.head

    // if the queue is empty
    if( this.size === 0 ) {
      this.head = this.tail = newPNode
      this.size++
    }

    // if the queue has only a head and tail node
    // if the queue has only a head and tail node
    if( this.size === 1 ) {

      if(this.head.priority >= newPNode.priority){
        this.tail = newPNode
        this.head.next = this.tail
      }else{
        this.tail = this.head
        this.head = newPNode
        this.head.next = this.tail
      }


      // console.log('this.tail1: ', this.tail)
      // console.log('newPNode.priority: ', newPNode.priority)
      // console.log('newPNode: ', newPNode)
      // if( newPNode.priority <= this.tail.priority ) {
      //   console.log('this.tail2: ', this.tail)
      //   let oldNode = this.tail
      //   newPNode.prev = oldNode
      //   oldNode.next = newPNode
      //   this.tail = newPNode
      //   this.size++
      // } else {
      //   let oldNode = this.head
      //   oldNode.prev = newPNode
      //   newPNode.next = oldNode
      //   this.head = newPNode
      //   this.size++
      // }
      this.size++
    }

    console.log('currentNode',currentNode);
    // while(currentNode.next){
    //   if(currentNode.next.priority < newPNode.priority){
    //     newPNode.next = currentNode.next
    //     currentNode.next = newPNode
    //   }else{
    //     currentNode = currentNode.next
    //   }
    // }
    // while( cursor.prev ) {
    //   if(cursor.prev.priority > newPNode.priority) {
    //     newPNode.next = cursor
    //     newPNode.prev = cursor.prev
    //     cursor.prev.next = newPNode
    //     cursor.prev = newPNode
    //   }
    //   cursor.prev = cursor
    // }
    // console.log("priority",cursor.priority)
    //
    // while(cursor.priority < newPNode.priority) {
    //   cursor = cursor.prev
    //
    // }
    // while(cursor.prev) {
    //
    //   cursor.next = this.head
    //   this.head = cursor
    //   console.log("cursor is head: ",cursor)
    // }

  }

}
