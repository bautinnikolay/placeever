const express = require('express')

let app = express()

let {Users} = require('./models/Users')

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.post('/signup', (req, res) => {
  let newOne = {
    name: req.params.name,
    email: req.params.email,
    place: req.params.place
  }
  Users.create(newOne).then((result) => {
    res.send(result)
  }).catch((e) => {
    res.send(e)
  })
})

app.listen(3000, () => {
  console.log('Server run on port 3000')
})

module.exports = {app}
