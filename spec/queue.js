import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe('Queue', () => {
  'use strict'

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue', () => {
    it('Adds an element to the back of the queue.', () => {
      const myQueue = new Queue()
      myQueue.enqueue('Plato')
      expect((myQueue.head.data)).to.equal('Plato')
    })
  })

  context('dequeue', () => {
    it('Removes an element from the front of the queue.', () => {
      const dequeue = new Queue()
      dequeue.enqueue('Plato')
      expect(dequeue.dequeue()).to.equal('Plato')
    })
  })

  context('front', () => {
    it('Returns the front element in queue', () => {
      const myQueue = new Queue()
      myQueue.enqueue('Plato')
      myQueue.enqueue('Aristotle')
      expect(myQueue.head.data).to.equal('Plato')
    })
  })

  context('front', () => {
    it('Check the front and returns undefined if the queue is empty', () => {
      const front = new Queue()
      expect(front.front()).to.equal(undefined)
    })
  })

  context('back', () => {
    it('Returns the back element in the queue.', () => {
      const back = new Queue()
      back.enqueue('Plato')
      expect(back.back().data).to.equal('Plato')
    })
  })

  context('back', () => {
    it('Returns null for the back element of an empty queue.', () => {
      const back = new Queue()
      expect(back.back()).to.equal(undefined)
    })
  })

  context('isEmpty', () => {
    it('Returns false if the queue is not empty. ', () => {
      const isEmpty = new Queue()
      isEmpty.enqueue('Plato')
      expect(isEmpty.isEmpty()).to.equal(false);
    })
  })

  context('isEmpty()', () => {
    it('Returns true if the queue is empty. ', () => {
      const isEmpty = new Queue()
      expect(isEmpty.isEmpty()).to.equal(true);
    })
  })

  context('length()', () => {
    it('returns the number of elements in the queue ', () => {
      const length = new Queue()
      length.enqueue('Plato')
      length.enqueue('Aristotle')
      expect(length.length()).to.equal(2);
    })
  })

})
