import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedlist'

chai.use(chaiChange)

describe('LinkedList', () => {
  'use strict'

  it('exists', () => {
    expect(LinkedList).to.be.a('function')
  })

  //Insert
  context('insert', () => {
    it('Inserts a node (with the provided data) to the tail of the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('Plato')
      expect( myLinkedList.tail.data ).to.equal('Plato')
    })
  })

  context('insert', () => {
    it('Inserts a second node (with the provided data) to the tail of the list, and links previos node as head', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('Plato')
      myLinkedList.insert('Aristotle')
      expect( myLinkedList.size ).to.equal(2)
    })
  })

  context('insert', () => {
    it('Inserts a second node (with the provided data) to the tail of the list, and links previos node as head', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('Plato')
      myLinkedList.insert('Aristotle')
      expect( myLinkedList.head.data ).to.equal('Plato')
    })
  })

  context('insert', () => {
    it('Inserts a second node (with the provided data) to the tail of the list, and links previos node as head', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('Plato')
      myLinkedList.insert('Aristotle')
      expect( myLinkedList.tail.data ).to.equal('Aristotle')
    })
  })

  //insertFirst
  context('insertFirst', () => {
    it('Inserts nodes to the front of the linkedLIst and checks the size of the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('Plato')
      myLinkedList.insert('Aristotle')
      myLinkedList.insertFirst('Descartes')
      expect( myLinkedList.size ).to.equal(3)
    })
  })

  context('insertFirst', () => {
    it('Inserts nodes to the front of the linkedLIst and checks the head of the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('Plato')
      myLinkedList.insert('Aristotle')
      myLinkedList.insertFirst('Descartes')
      expect( myLinkedList.head.data ).to.equal('Descartes')
    })
  })
  //
  context('insertFirst', () => {
    it('Inserts nodes to the front of the linkedLIst and checks the tail of the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('Plato')
      myLinkedList.insert('Aristotle')
      myLinkedList.insertFirst('Descartes')
      expect( myLinkedList.tail.data ).to.equal('Aristotle')
    })
  })

  //getHeadNode
  context('getHeadNode', () => {
    it('Returns the first node in the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('Plato')
      myLinkedList.insert('Aristotle')
      myLinkedList.insertFirst('Descartes')
      expect( myLinkedList.getHeadNode().data ).to.equal('Descartes')
    })
  })

  //getTailNode
  context('getTailNode', () => {
    it('Returns the first node in the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('Plato')
      myLinkedList.insert('Aristotle')
      myLinkedList.insertFirst('Descartes')
      expect( myLinkedList.getTailNode().data ).to.equal('Aristotle')
    })
  })

  //contains
  context('contains', () => {
    it('Determines whether or not the list contains the provided data', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('Descartes')
      myLinkedList.insert('Aristotle')
      myLinkedList.insertFirst('Plato')
        myLinkedList.insertFirst('Hypatia')
      expect(myLinkedList.contains('Hypatia')).to.equal(true)
    })
  })

  context('contains', () => {
    it('Return false if item does not exist in the linked list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('Plato')
      myLinkedList.insert('Aristotle')
      myLinkedList.insert('Hypatia')
      expect(myLinkedList.contains('Trump')).to.equal(false)
    })
  })

//find
  context('find', () => {
    it('Returns the first node containing the provided data', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('Aristotle')
      myLinkedList.insert('Hypatia')
      myLinkedList.insertFirst('Plato')
      expect( myLinkedList.find('Aristotle').data ).to.equal('Aristotle')
    })
  })

  context('find', () => {
    it('Returns -1 if node not found', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('Aristotle')
      myLinkedList.insert('Hypatia')
      myLinkedList.insertFirst('Plato')
      expect(myLinkedList.find('Trump')).to.equal(-1)
    })
  })

  //isEmpty
  context('isEmpty', () => {
    it('Determines if the list is empty or not', () => {
      const myLinkedList = new LinkedList()
      expect(myLinkedList.size).to.equal(0)
    })
  })

  //insertBefore
  context('insertBefore(itemBeforeIndex, index)', () => {
    it('Inserts a node (with data "bananas") after the first node containing "apples"', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('Aristotle')
      myLinkedList.insert('Hypatia')
      myLinkedList.insertBefore('Plato', 'Aristotle')
      expect(myLinkedList.head.data).to.equal('Plato')
    })
  })

  context('insertBefore(itemBeforeIndex, index)', () => {
    it('Inserts a node (with data "bananas") if list is empty', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insertBefore('Plato', 'Aristotle')
      expect(myLinkedList.head.data).to.equal('Plato')
    })
  })

  //insertAfter
  context('insertAfter(itemAfterIndex, index)', () => {
    it('Inserts a node (with data "bananas") after the first node containing "apples"', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('Plato')
      myLinkedList.insert('Hypatia')
      myLinkedList.insert('Descartes')
      myLinkedList.insert('Kant')
      myLinkedList.insertAfter('Aristotle', 'Plato')
      expect(myLinkedList.head.next.data).to.equal('Aristotle')
    })
  })

  context('insertAfter(itemAfterIndex, index)', () => {
    it('Inserts a node at the tail end by using insertAfter', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('Plato')
      myLinkedList.insert('Aristotle')
      myLinkedList.insertAfter('Hypatia', 'Aristotle')
      expect(myLinkedList.tail.data).to.equal('Hypatia')
    })
  })

  context('insertAfter(itemAfterIndex, index)', () => {
    it('Checks the size of the linkedList after insertion', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('Plato')
      myLinkedList.insert('Aristotle')
      myLinkedList.insertAfter('Hypatia', 'Aristotle')
      expect(myLinkedList.size).to.equal(3)
    })
  })

  //remove
  context('remove', () => {
    it('Removes the tail node from the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('Plato')
      myLinkedList.insert('Hypatia')
      myLinkedList.insertAfter('Aristotle', 'Plato')
      myLinkedList.remove()
      expect(myLinkedList.tail.data).to.equal('Aristotle')
    })
  })

  context('clear', () => {
    it.only('Clears the list of all nodes/data', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('Plato')
      myLinkedList.insert('Hypatia')
      myLinkedList.insertAfter('Aristotle', 'Plato')
      myLinkedList.clear()
      expect(myLinkedList.head).to.equal(undefined)
    })
  })
  context('clear', () => {
    it.only('Clears the list of all nodes/data', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('Plato')
      myLinkedList.insert('Hypatia')
      myLinkedList.insertAfter('Aristotle', 'Plato')
      myLinkedList.clear()
      expect(myLinkedList.tail).to.equal(undefined)
    })
  })
  context('clear', () => {
    it.only('Clears the list of all nodes/data', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('Plato')
      myLinkedList.insert('Hypatia')
      myLinkedList.clear()
      expect(myLinkedList.size).to.equal(0)
    })
  })


})//closes LinkedList
