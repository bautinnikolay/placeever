const expect = require('expect')
const request = require('supertest')
const http = require('http')

const {app} = require('./../app')
const {Users} = require('./../models/Users')
const {getSocialUser, findOrCreate, setSessionKey} = require('./../middleware/auth')

describe('Auth', () => {

  let user = {
    uid: '111111',
    first_name: 'Tester',
    last_name: 'boy'
  }

  it('Should create new user', (done) => {
    let req = {user}
    findOrCreate(req, {}, () => {
      Users.findOne({where: {uid: user.uid}}).then((res) => {
        expect(res).not.toBeNull()
        done()
      }).catch((e) => {
        return done(e)
      })
    })
  })

  it('Should not create new user', (done) => {
    request(app)
      .post('/signup')
      .send({})
      .expect(400)
      .end(done)
  })

})
