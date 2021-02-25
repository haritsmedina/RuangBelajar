const route = require('express').Router()
const User = require('../controllers/userController')
const authentication = require('../middlewares/authentication')
const Subject = require('../controllers/SubjectController')
const Part = require('../controllers/PartController')

route.get('/register',User.create)
route.post('/register',User.createPost)
route.get('/login',User.loginForm)
route.post('/login',User.loginPost)
// route.use(authentication)

route.get('/',Subject.show)
route.get('/add/subject',Subject.add)
route.post('/add/subject',Subject.addPost)

//Parts

route.get('/subject/:id/parts',Part.show)
route.get('/add/parts',Part.add)
route.post('/add/parts',Part.add)

module.exports = route


