const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blogs');


const app = express()
const mongodbURL = 'mongodb url'
mongoose.connect(mongodbURL)
    .then((result) => app.listen(3000)) //listen port when database is connected
    .catch((err) => console.log(err))



app.use(express.static('public'))
app.set('view engine', 'ejs');

app.use(morgan('tiny'))



app.get('/', (req, res) => {
    //When all the data in the database is reached, the page will load.
    Blog.find()
        .then((result) => { //contains database information in result
            res.render('index', {
                title: 'Anasayfa',
                blogs: result
            });
        })
        .catch((err) => console.log(err))
})

app.get('/blog/:id', (req, res) => {
    const id = req.params.id
    Blog.findById(id)
        .then((result) => {
            res.render('blog.ejs', {blog: result,title:'Detay'})
        })
        .catch((err)=>{
            res.status(404).render('404', {
                title: '404'
            })
        })

})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Hakkımızda'
    });
})
//yonlendirme
app.get('/about-us', (req, res) => {
    res.render('/about', {
        title: 'Hakkımızda'
    })
})


app.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login'
    })
})




//write a middleware
app.use((req, res) => {
    res.status(404).render('404', {
        title: '404'
    })
})

