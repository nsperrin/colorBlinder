'use strict';

let express = require('express');
let router = express.Router();
let DBModule = require('../util/database');
let db = new DBModule(null,null,'color_blinder');

/* GET home page. */
router.get('/', function(req, res) {
    req.session.state = req.session.state || 'uHome';
    req.session.userData = req.session.userData || {};
    req.session.save();
    res.render('index', { title: 'ColorBlinder' });
});

router.get('/getUserData', function(req,res){
    res.json({userData:req.session.userData||{}});
});

router.get('/getState', function(req,res){
    res.json({state:req.session.state||'uHome'});
});


router.post('/saveState', function(req, res){
    req.session.state = req.body.state || 'uHome';
    req.session.save();
    res.status(200);
});

router.post('/login', function(req,res){
    db.login(req.body,(err,userData)=>{
        req.session.userData = userData;
        req.session.save();
        if(err) res.status(400).send({error:err});//to change later for more robust error handling
        else res.status(200);
    });
});

router.post('/signUp', function(req,res){
    db.signUp(req.body,(err,userData)=>{
        req.session.userData = userData;
        if(err) res.status(400).send({error:err});//to change later for more robust error handling
        else res.status(200);
    });});

router.get('/logout', function(req,res){
    req.session.destroy(function(){
        res.status(200);
    });
});

router.post('/saveScheme', function(req,res){
    db.saveScheme(req.session.userData,req.body,(err,userData)=>{
        req.session.userData = userData;
        if(err) res.status(400).send({error:err});// to change later for more robust error handling
        else res.status(200);
    });
});

router.post('/deleteScheme', function(req,res){
    db.saveScheme(req.session.userData,req.body,(err,userData)=>{
        req.session.userData = userData;
        if(err) res.status(400).send({error:err});// to change later for more robust error handling
        else res.status(200);
    });
});

module.exports = router;
