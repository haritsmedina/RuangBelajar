const {User} = require('../models/index')
const {compare,hash} = require('../helpers/bcrypt')

class Controller {
    static create (req,res){
        res.render('register')
    }

    static createPost (req,res){
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        })
        .then(
            (data)=>{
                console.log(data)
                res.redirect('/login')
            }
        )
        .catch(
            err=>{
                res.send(err)
            }
        )
    }

    static loginForm (req,res) {
        console.log(req.query)
        let error 
        if(req.query.message){
          error = req.query.message
        }
        res.render('login',{error})
    }

    static loginPost (req,res) {
        
        const login = {
            email: req.body.email,
            password: req.body.password 
        }
        User.findOne({
            where : {email : login.email}
        })
        .then(
            (user)=>{
                // console.log(user, 'INI USER')

                if(compare(login.password,user.password)&&(user.role === 'admin')){
                    req.session.admin = true
                    res.redirect('/add/Subject')
                }else if(compare(login.password,user.password)&&(user.role ==='user')){
                    req.session.admin = false
                    res.redirect('/add/Subject')
                }else {
                    console.log('gaktuh masuk sini')
                    res.redirect('/login?message=Invalid Username/password')
                }
            }
        )
        .catch(
            err=>{
                console.log('masuk catch')
                res.redirect('/login?message=Invalid Username/password')
            }

        )
    }
}

module.exports = Controller