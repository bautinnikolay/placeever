const expect = require('expect')
const request = require('supertest')

const {app} = require('./../app')
const {Users} = require('./../models/Users')

describe('Auth', () => {

  it('Should create new user and delete it in the end of test', (done) => {
    request(app)
      .post('/signup')
      .send({token: '8d559cd2e03668628d2b22a1365f7c6c'})
      .expect(200)
      .expect((res) => {
        expect(res.body.message).toBe('Auth successfull')
      })
      .end((err, res) => {
        if(err) {
          return done(err)
        }
        Users.findOne({where: {uid: '271118348'}}).then((res) => {
          expect(res).not.toBe(undefined)
          return Users.destroy({where: {id: res.id}})
        }).then((res) => done()).catch((e) => done(e))
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
