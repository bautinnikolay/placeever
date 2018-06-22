const expect = require('expect')
const request = require('supertest')

const {app} = require('./../app')
const {Users} = require('./../models/Posts')

describe('Posts', () => {

  it('Should create new post', (done) => {
    done()
  })

  it('Should not create new post', (done) => {
    done()
  })

  it('Should get 401 answer for non-authorize user', (done) => {
    request(app)
      .get('/create')
      .expect(401)
      .end(done)
  })

  it('Should return list of recent posts without news and with text', (done) => {
    done()
  })

  it('Should return one full post', (done) => {
    done()
  })
})
