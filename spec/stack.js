import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', () => {
  'use strict'

  it.only('exists', () => {
    expect(Stack).to.be.a('function')
  })

  context('push()', () => {
    it.only('pushes an element to the top of the stack.', () => {
      const myStack = new Stack()

      expect(() => myStack.push('Plato'))
        .to.alter(() => myStack.length(), { from: 0, to: 1 })
    })
  })

  context('pop()', () => {
    it.only('removes an element at the top of the stack.', () => {
      const myStack = new Stack()
      myStack.push('Hypatia')
      myStack.push('Aristotle')
      myStack.push('Plato')

      expect(() => myStack.pop())
        .to.alter(() => myStack.length(), { from: 3, to: 2 })
    })
  })

  context('peek()', () => {
    it('returns the top element in the stack.', () => {
      const myStack = new Stack()

      myStack.push('Plato')

      expect( myStack.peek().data).to.equal('Plato')
    })

    it('returns null if the stack is empty.', () => {
      const myStack = new Stack()

      expect(myStack.peek()).to.equal(null)
    })
  })

  context('length()', () => {
    it('returns the number of elements in the stack.', () => {
      const myStack = new Stack()
      myStack.push('Hypatia')
      myStack.push('Aristotle')
      myStack.push('Plato')

      expect( myStack.length()).to.equal(3)
    })
  })
  context('length()', () => {
    it.only('returns the 0 for an empty stack', () => {
      const myStack = new Stack()
      expect( myStack.length()).to.equal(0)
    })
  })



})
