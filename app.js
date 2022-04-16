const express=require('express')
const app=express()
const bodyparser=require('body-parser')
const ejs = require('ejs');

app.use(bodyparser.urlencoded({extended:true}))
app.set('view engine', 'ejs');
app.use(express.static('public'))


app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/trading',(req,res)=>{
    res.render('trading')
})


// let hostname='139.59.92.41';

let port = 80;
app.listen(port);