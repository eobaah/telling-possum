import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

describe('Queue', () => {

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element (the string "Plato") to the back of the queue.', () => {
      const myQueue = new Queue()
      expect(() => myQueue.enqueue('Plato'))
        .to.alter(() => myQueue.length(), { from: 0, to: 1 })
    })
  })

  context('dequeue()', () => {
    it('removes an element from the back if the cueue.', () => {
      const myQueue = new Queue()
      myQueue.enqueue('Plato')
      myQueue.enqueue('Hypatia')
      myQueue.enqueue('Descartes')
      expect(() => myQueue.dequeue())
        .to.alter(() => myQueue.length(), { from: 3, to: 2 })
    })

    it('attempts to remove an element from an empty cueue.', () => {
      const myQueue = new Queue()
      expect( myQueue.dequeue() ).to.equal(null)
    })

    it('Remove an element from a cueue and returns the element.', () => {
      const myQueue = new Queue()
      myQueue.enqueue('Plato')
      myQueue.enqueue('Hypatia')
      myQueue.enqueue('Descartes')
      expect( myQueue.dequeue() ).to.equal("Descartes")
    })
  })

  context('front()', () => {
    it('returns the front element in queue or null if the queue is empty.', () => {
      const myQueue = new Queue()
      myQueue.enqueue('BMW')
      expect( myQueue.front().data).to.equal('BMW')
    })

    it('returns the back element in the queue or null if the queue is empty.', () => {
      const myQueue = new Queue()
      expect(myQueue.back()).to.equal(null)
    })
  })

  context('length()', () => {
    it('returns the number of elements in the stack.', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      myQueue.enqueue('fred')
      myQueue.enqueue('BMW')
      expect( myQueue.length()).to.equal(3)
    })

    it('returns the 0 for an empty stack', () => {
      const myQueue = new Queue()
      expect( myQueue.length()).to.equal(0)
    })
  })

  context('isEmpty()', () => {
    it('returns the 0 for an empty stack', () => {
      const myQueue = new Queue()
      expect( myQueue.isEmpty() ).to.equal(true)
    })

    it('returns the 0 for an empty stack', () => {
      const myQueue = new Queue()
      myQueue.enqueue('BMW')
      expect( myQueue.isEmpty() ).to.equal(false)
    })
  })
})
