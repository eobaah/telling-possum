import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Node from '../src/node'

chai.use(chaiChange)

describe('Node', () => {
  'use strict'

  it('exists', () => {
    expect(Node).to.be.a('function')
  })

  context('getData()', () => {
    it('returns the data within the node.', () => {
      const myNode = new Node({data:"apple"})
      myNode.getData()
      expect( myNode.data.data ).to.equal("apple")
    })
  })

  context('setNext(node)', () => {
    it('set the next node for the current node and return the node object.', () => {
      const myNodeA = new Node({data:"BMW"})
      const myNodeB = new Node({data:"Tesla"})
      myNodeA.setNext(myNodeB)
      expect( myNodeA.next.data.data ).to.equal("Tesla")
    })
  })

  context('getNext(node)', () => {
    it('return the next node.', () => {
      const myNodeA = new Node({data:"BMW"})
      const myNodeB = new Node({data:"Tesla"})
      myNodeA.setNext(myNodeB)
      expect( myNodeA.getNext().data.data ).to.equal("Tesla")
    })
  })

})
