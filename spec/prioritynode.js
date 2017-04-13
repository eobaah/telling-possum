import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityNode from '../src/prioritynode'

chai.use(chaiChange)

describe('PriorityNode', () => {

  it('exists', () => {
    expect(PriorityNode).to.be.a('function')
  })

  context('getData', () => {
    it('returns the value of data for instance of constructor', () => {
      const myNode = new PriorityNode('apple', '300')
      expect( myNode.getData() ).to.equal('apple')
    })
  })
  context('setNext', () => {
    it('sets the pointer for the Node instance', () => {
      const nodeA = new PriorityNode('Plato', 250)
      const nodeB = new PriorityNode('Hypatia', 300)
      nodeA.setNext(nodeB)
      expect( nodeA.next.data ).to.equal('Hypatia')
    })
  })

  context('getNext', () => {
    it('returns the next node', () => {
      const nodeA = new PriorityNode('Plato', 250)
      const nodeB = new PriorityNode('Hypatia', 300)
      nodeA.setNext(nodeB)
      expect( nodeA.getNext().data ).to.equal('Hypatia')
    })
  })

  context('getNext', () => {
    it('returns the next node as undefined', () => {
      const nodeA = new PriorityNode('Plato', 250)
      expect( nodeA.getNext() ).to.equal(undefined)
    })
  })
})
