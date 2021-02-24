const route = require('express').Router()
const User = require('../controllers/userController')
const authentication = require('../middlewares/authentication')
// const Subject = require()

route.get('/register',User.create)
route.post('/register',User.createPost)
route.get('/login',User.loginForm)
route.post('/login',User.loginPost)
route.use(authentication)

route.get('/add/Subject',User.loginForm)
// route.get('/',Subject.show)

module.exports = route


