const express = require('express')
const bodyParser = require('body-parser')
const sess = require('express-session')

const {Users} = require('./models/Users')
const {getSocialUser, findOrCreate, setSessionKey, checkAuth, logout} = require('./middleware/auth')

let app = express()

app.disable('x-powered-by')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(sess({
  secret: 'blablabla',
  resave: false,
  saveUninitialized: true,
  cookie: { expires: new Date(Date.now() + 9000000000) }
}))

app.get('/', checkAuth, (req, res) => {
  if(req.auth) {
    res.send({message: 'You are log in'})
  } else {
    res.send('<html><head></head><body><script src=\"//ulogin.ru/js/ulogin.js\"></script><div id="uLogin" data-ulogin="display=small;theme=classic;fields=first_name,last_name;providers=vkontakte,odnoklassniki,mailru,facebook;hidden=other;redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fsignup;mobilebuttons=0;"></div></body></html>')
  }
})

app.post('/signup', getSocialUser, findOrCreate, setSessionKey, (req, res) => {
  res.send({message: 'Auth successfull'})
})

app.get('/create', checkAuth, (req, res) => {
  res.send({message: 'You can create a post or news'})
})

app.get('/logout', logout, (req, res) => {
  res.send('You are log out')
})

app.listen(3000, () => {
  console.log('Server run on port 3001')
})

module.exports = {app}
