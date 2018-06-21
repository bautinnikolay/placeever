const express = require('express')
const bodyParser = require('body-parser')
const sess = require('express-session')

const {Users} = require('./models/Users')
const {getSocialUser, findOrCreate, setSessionKey} = require('./middleware/auth')

let app = express()

app.disable('x-powered-by')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(sess({
  secret: 'blablabla',
  resave: false,
  saveUninitialized: true
}))

app.get('/', (req, res) => {
  if(req.session.bgh22) {
    res.send('You are logged in')
  } else {
    res.send('<html><head></head><body><script src=\"//ulogin.ru/js/ulogin.js\"></script><div id="uLogin" data-ulogin="display=small;theme=classic;fields=first_name,last_name;providers=vkontakte,odnoklassniki,mailru,facebook;hidden=other;redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fsignup;mobilebuttons=0;"></div></body></html>')
  }
})

app.post('/signup', getSocialUser, findOrCreate, setSessionKey, (req, res) => {
  res.status(200).send({message: 'Auth successfull'})
})

app.listen(3000, () => {
  console.log('Server run on port 3000')
})

module.exports = {app}
