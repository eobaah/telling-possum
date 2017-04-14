import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedlist'

chai.use(chaiChange)

describe('LinkedList', () => {

  it('exists', () => {
    expect(LinkedList).to.be.a('function')
  })

  context('getHeadNode()', () => {
    it('Returns the first node in the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("BMW")
      myLinkedList.insert("Tesla")
      myLinkedList.insert("Mercedes")
      myLinkedList.insertFirst("Lexus")
      expect(myLinkedList.getHeadNode().data).to.equal("Lexus")
    })

    it('Returns the first node in the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("BMW")
      myLinkedList.insert("Tesla")
      myLinkedList.insert("Mercedes")
      expect(myLinkedList.getHeadNode().data).to.equal("BMW")
    })
  })

  context('getTailNode()', () => {
    it('Returns the last node in the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("BMW")
      myLinkedList.insert("Tesla")
      myLinkedList.insert("Mercedes")
      myLinkedList.insertFirst("Lexus")
      expect(myLinkedList.getTailNode().data).to.equal("Mercedes")
    })

    it('Returns the last node in the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("BMW")
      expect(myLinkedList.getTailNode().data).to.equal("BMW")
    })
  })

  context('insert()', () => {
    it('Inserts a node (with the provided data) to an empty linked list, and sets the head to equal the tail ', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("BMW")
      expect(myLinkedList.head).to.equal(myLinkedList.tail)
    })

    it('Inserts multiple nodes (with the provided data) to an empty linked list, and checks the value of the head ', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("BMW")
      myLinkedList.insert("Tesla")
      expect(myLinkedList.head.data).to.equal("BMW")
    })

    it('Inserts multiple nodes (with the provided data) to an empty linked list, and checks the value of the head ', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("BMW")
      myLinkedList.insert("Tesla")
      expect(myLinkedList.tail.data).to.equal("Tesla")
    })

    it('Inserts multiple nodes (with the provided data) to an empty linked list, and checks the value of the head ', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("BMW")
      myLinkedList.insert("Tesla")
      expect(myLinkedList.head.next.data).to.equal("Tesla")
    })

    it('Inserts multiple nodes (with the provided data) to an empty linked list, and checks the value of the head ', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("BMW")
      myLinkedList.insert("Tesla")
      myLinkedList.insert("Mercedes")
      expect(myLinkedList.size).to.equal(3)
    })
  })

  context('insertFirst()', () => {
    it('Inserts nodes (with the provided data) to the front of the linked list and checks the size of the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("BMW")
      myLinkedList.insert("Tesla")
      myLinkedList.insertFirst("Mercedes")
      expect(myLinkedList.size).to.equal(3)
      expect(myLinkedList.head.data).to.equal("Mercedes")
      expect(myLinkedList.tail.data).to.equal("Tesla")
    })
  })

  context('contains(input)', () => {
    it('Determines whether or not the list contains the provided data', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("BMW")
      myLinkedList.insert("Tesla")
      myLinkedList.insert("Lexus")
      myLinkedList.insertFirst("Mercedes")
      expect(myLinkedList.contains("Lexus")).to.equal(true)
      expect(myLinkedList.contains("BMW")).to.equal(true)
      expect(myLinkedList.contains("Ford")).to.equal(false)
    })
  })

  context('find( input )', () => {
    it('Returns the first node containing the provided data, or -1 if not found', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("BMW")
      myLinkedList.insert("Tesla")
      myLinkedList.insert("Lexus")
      myLinkedList.insert("Ford")
      myLinkedList.insertFirst("Mercedes")
      expect(myLinkedList.find("Ford").data).to.equal("Ford")
      expect(myLinkedList.find("Porsche")).to.equal(-1)
    })
  })

  context('insertBefore( before, after )', () => {
    it('Inserts a node (with data "before") before the first node containing "after"', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("BMW")
      myLinkedList.insert("Tesla")
      myLinkedList.insert("Lexus")
      myLinkedList.insert("Mercedes")
      myLinkedList.insertBefore("Ford", "BMW")
      expect(myLinkedList.head.next.data).to.equal("BMW")
    })

    it('Inserts a node after the first node containing "before"', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("BMW")
      myLinkedList.insert("Tesla")
      myLinkedList.insert("Lexus")
      myLinkedList.insert("Mercedes")
      myLinkedList.insertAfter("BMW", "Bentley")
      expect(myLinkedList.head.next.data).to.equal("Bentley")
    })
  })

  context('insertAfter( before, after )', () => {
    it('Inserts a node after the first node containing "before"', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("BMW")
      myLinkedList.insert("Tesla")
      myLinkedList.insert("Lexus")
      myLinkedList.insert("Mercedes")
      expect( ()=> myLinkedList.insertAfter("Tesla", "Volkswagen") ).to.alter( ()=> myLinkedList.length(), { from: 4, to: 5 })
    })
  })

  context('remove()', () => {
    it('Remove the last node with a list with many items', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("BMW")
      myLinkedList.insert("Lexus")
      myLinkedList.insert("Mercedes")
      myLinkedList.remove()
      expect(myLinkedList.tail.data).to.equal("Lexus")
    })

    it('Remove the last node from an empty list', () => {
      const myLinkedList = new LinkedList()
      expect(myLinkedList.remove()).to.equal("There is nothing to remove")
    })
  })

  context('removeFirst()', () => {
    it('Remove the first node with a list with many items', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("BMW")
      myLinkedList.insert("Lexus")
      myLinkedList.insert("Mercedes")
      myLinkedList.removeFirst()
      expect(myLinkedList.head.data).to.equal("Lexus")
    })

    it('Remove the first node from an empty list', () => {
      const myLinkedList = new LinkedList()
      expect(myLinkedList.removeFirst()).to.equal("There is nothing to remove")
    })
  })

  context('length()', () => {
    it('Remove the first node with a list with many items', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("BMW")
      myLinkedList.insert("Lexus")
      myLinkedList.insert("Mercedes")
      myLinkedList.insert("Tesla")
      myLinkedList.insert("Ford")
      expect( myLinkedList.length() ).to.equal(5)
    })

    it('Remove the first node from an empty list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("Ford")
      myLinkedList.removeFirst("Ford")
      expect( myLinkedList.length() ).to.equal(0)
    })
  })

  context('clear()', () => {
    it('Remove the first node with a list with many items', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("BMW")
      myLinkedList.insert("Lexus")
      myLinkedList.insert("Mercedes")
      myLinkedList.insert("Tesla")
      myLinkedList.insert("Ford")
      myLinkedList.clear()
      expect( myLinkedList.head ).to.equal(undefined)
      expect( myLinkedList.tail ).to.equal(undefined)
    })

    it('Remove the first node from an empty list', () => {
      const myLinkedList = new LinkedList()
      expect( myLinkedList.clear() ).to.equal("The list is already empty... idiot!!!")
    })

    it('Remove the first node from an empty list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert("BMW")
      myLinkedList.insert("Lexus")
      myLinkedList.insert("Mercedes")
      myLinkedList.insert("Tesla")
      myLinkedList.insert("Ford")
      myLinkedList.clear()
      expect( myLinkedList.length() ).to.equal(0)
    })
  })

})
