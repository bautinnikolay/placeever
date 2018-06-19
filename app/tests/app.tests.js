const expect = require('expect')
const request = require('supertest')

const app = require('./../app')
const {Users} = require('./../models/Users')

describe('Registration', () => {
  it('Should create new user and return it', (done) => {
    let user = {
      name: 'Nikolay',
      email: 'test@test.com',
      place: 'Moscow'
    }

    request(app)
      .post('/signup')
      .send(user)
      .expect(200)
      .expect((res) => {
        console.log(res.body)
      })
      .end((err, res) => {
        if(err) {
          return done(err)
        }
        Users.findAll({
          where: {email: 'test@test.com'}
        }).then((res) => {
          expect(res).not.toBe(undefined)
          return Users.destroy({
            where: {email: 'test@test.com'}
          })
        }).then((res) => {
          console.log(res)
          done()
        }).catch((e) => done(e))
      })
  })
})
