import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Node from '../src/node'

chai.use(chaiChange)

describe('Node', () => {
  'use strict'

  it('exists', () => {
    expect(Node).to.be.a('function')
  })

  context('getData', () => {
    it('returns the value of data for instance of constructor', () => {
      const myNode = new Node({data:'apple'})
      expect( myNode.getData().data ).to.equal('apple')
    })
  })
  context('setNext', () => {
    it('sets the pointer for the Node instance', () => {
      const nodeA = new Node({data:'apple'})
      const nodeB = new Node({data:'banana'})
      nodeA.setNext(nodeB)
      expect( nodeA.next.data.data ).to.equal('banana')
    })
  })

  context('getNext', () => {
    it('returns the next node', () => {
      const nodeA = new Node({data:'apple'})
      const nodeB = new Node({data:'banana'})
      nodeA.setNext(nodeB)
      expect( nodeA.getNext().data.data ).to.equal('banana')
    })
  })

  context('getNext', () => {
    it.only('returns the next node as undefined', () => {
      const nodeA = new Node({data:'apple'})
      expect( nodeA.getNext() ).to.equal(undefined)
    })
  })



})
