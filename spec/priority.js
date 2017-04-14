import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Priorityqueue from '../src/priority'

describe('Priorityqueue', () => {

  it('exists', () => {
    expect(Priorityqueue).to.be.a('function')
  })

  context('enqueue(data, priority)', () => {
    it('adds an element with the lowest priority to the end of queue.', () => {
      const priorityqueue = new Priorityqueue()
      priorityqueue.enqueue("Hypatia", 900)
      priorityqueue.enqueue("Aristotle", 850)
      priorityqueue.enqueue("Plato", 800)
      expect( priorityqueue.tail.data ).to.equal("Plato")
    })
  })

  context('dequeue()', () => {
    it('removes an element with the lowest priority from the end of queue.', () => {
      const priorityqueue = new Priorityqueue()
      priorityqueue.enqueue("Hypatia", 900)
      priorityqueue.enqueue("Aristotle", 850)
      priorityqueue.enqueue("Plato", 800)
      expect( priorityqueue.dequeue().data ).to.equal("Hypatia")
    })
  })

  context('front()', () => {
    it('returns an element with the highest priority from the front of queue.', () => {
      const priorityqueue = new Priorityqueue()
      priorityqueue.enqueue("Hypatia", 900)
      priorityqueue.enqueue("Aristotle", 850)
      priorityqueue.enqueue("Plato", 800)
      expect( priorityqueue.front().data ).to.equal("Hypatia")
    })
  })

  context('back()', () => {
    it('returns an element with the lowest priority from the end of queue.', () => {
      const priorityqueue = new Priorityqueue()
      priorityqueue.enqueue("Hypatia", 900)
      priorityqueue.enqueue("Aristotle", 850)
      priorityqueue.enqueue("Plato", 800)
      expect( priorityqueue.back().data ).to.equal("Plato")
    })
  })

  context('isEmpty()', () => {
    it('returns true if the queue is empty.', () => {
      const priorityqueue = new Priorityqueue()
      expect( priorityqueue.isEmpty() ).to.equal(true)
    })
  })

  context('length()', () => {
    it.only('returns the number of nodes in the queue.', () => {
      const priorityqueue = new Priorityqueue()
      priorityqueue.enqueue("Hypatia", 900)
      priorityqueue.enqueue("Aristotle", 850)
      priorityqueue.enqueue("Plato", 800)
      expect( priorityqueue.length() ).to.equal(3)
    })
  })

  // context('setPriority(priority)', () => {
  //   it('set the priority for node and return the node object.', () => {
  //     const myPrioritynode = new Prioritynode("BMW", 200)
  //     myPrioritynode.setPriority(400)
  //     expect( myPrioritynode.priority ).to.equal(400)
  //   })
  // })
  //
  // context('setNext(node)', () => {
  //   it('set the next node for the current node and return the node object.', () => {
  //     const myPrioritynodeA = new Prioritynode("BMW", 300)
  //     const myPrioritynodeB = new Prioritynode("Tesla", 400)
  //     myPrioritynodeA.setNext(myPrioritynodeB)
  //     expect( myPrioritynodeA.next.data ).to.equal("Tesla")
  //   })
  // })
  //
  // context('setPrev(node)', () => {
  //   it('set the previous node for the current node and return the node object.', () => {
  //     const myPrioritynodeA = new Prioritynode("BMW", 300)
  //     const myPrioritynodeB = new Prioritynode("Tesla", 400)
  //     myPrioritynodeB.setPrev(myPrioritynodeA)
  //     expect( myPrioritynodeB.prev.data ).to.equal("BMW")
  //   })
  // })
  //
  // context('getPriority()', () => {
  //   it('return the priority of the node.', () => {
  //     const myPrioritynodeA = new Prioritynode("Mercedes", 500)
  //     const myPrioritynodeB = new Prioritynode("Plato", 200)
  //     expect( myPrioritynodeA.getPriority() ).to.equal(500)
  //   })
  // })
  //
  // context('getNext()', () => {
  //   it('return the next node.', () => {
  //     const myPrioritynodeA = new Prioritynode("BMW", 300)
  //     const myPrioritynodeB = new Prioritynode("Tesla", 900)
  //     myPrioritynodeA.setNext(myPrioritynodeB)
  //     myPrioritynodeA.getNext()
  //     expect( myPrioritynodeA.getNext().data ).to.equal("Tesla")
  //   })
  // })
  //
  // context('getPrev()', () => {
  //   it.only('return the previous node.', () => {
  //     const myPrioritynodeA = new Prioritynode("BMW", 300)
  //     const myPrioritynodeB = new Prioritynode("Tesla", 900)
  //     myPrioritynodeA.setNext(myPrioritynodeB)
  //     myPrioritynodeB.setPrev(myPrioritynodeA)
  //     expect( myPrioritynodeB.getPrev().data ).to.equal("BMW")
  //   })
  // })

})
