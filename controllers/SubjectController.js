const {Subject,Part} = require('../models/index')
class Controller {

    static show(req,res){
        Subject.findAll({
            include: [{
                model: Part
            }]
        })
        .then(
            data=>{
                // console.log(data)
                // res.send(data)
                res.render('home',{data})
            }
        )
        .catch(
            err=>{
                res.send(err)
            }
        )
    }

    static add(req,res){
        res.render('addSubject')
    }

    static addPost(req,res){
        
        Subject.create({
            description : req.body.description,
            category : req.body.category
        })
        .then(data=>{
            res.redirect('/')
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static del(req,res){
        Subject.destroy({
            where: {
                id : +req.params.id
            }
        })
        .then(()=>{
            res.redirect('/')
        })
        .catch(err=>{
            res.send(err)
        })
    }



}

module.exports = Controller