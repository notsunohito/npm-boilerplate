import {expect} from 'chai'
import HelloWorld from '../src/NpmPackageName'

describe('HelloWorld', ()=> {
  it('returns "Hello World!"', ()=> {
    expect(HelloWorld()).to.equal('Hello World!')
  })
})
