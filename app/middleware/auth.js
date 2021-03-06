const http = require('http')
const {Users} = require('./../models/Users')
const bcrypt = require('bcryptjs')

let getSocialUser = (req, res, next) => {
  http.get(`http://ulogin.ru/token.php?token=${req.body.token}&host=http://localhost:3000`, (res) => {
    res.setEncoding('utf8')
    let rawData = ''
    res.on('data', (chunk) => { rawData += chunk; })
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData)
        req.user = parsedData
        bcrypt.hash(req.user.uid, '$2a$10$RefOwqVNCSP19sffJJyEo4', (err, hash) => {
          req.user.uid = hash
          next()
        })
      } catch (e) {
        console.log(e.message)
        next()
      }
    });
  })
}

let findOrCreate = (req, res, next) => {
  if(req.user === undefined) {
    return res.status(400).send()
  }
  let user = {
    uid: req.user.uid,
    name: req.user.first_name + ' ' + req.user.last_name
  }
  Users.findOrCreate({where: {uid: user.uid}, defaults: {name: user.name}}).then((result) => {
    next()
  }).catch((e) => {
    return res.status(400).send(e)
  })
}

let setSessionKey = (req, res, next) => {
  req.session.bgh22 = req.user.uid
  next()
}

let checkAuth = (req, res, next) => {
  req.auth = false
  if(req.session.bgh22) {
    req.auth = true
  }
  next()
}

let logout = (req, res, next) => {
  req.session.destroy()
  next()
}

module.exports = {getSocialUser, findOrCreate, setSessionKey, checkAuth, logout}
