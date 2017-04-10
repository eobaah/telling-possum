import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
// import babelRegister from 'babel-register'
import node from '../src/node'

chai.use(chaiChange)

describe('node', () => {
  'use strict'

  it.only('getData', () => {
    expect(getData).to.be.a('function')
  })

})
