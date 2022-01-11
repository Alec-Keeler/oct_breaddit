const express = require('express');
const cookieParser = require('cookie-parser')
const path = require('path')
const session = require('express-session');
// const { User } = require('./models');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

const app = express();
app.set('view engine', 'pug')
app.use(express.urlencoded({extended: false}));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'))

app.use((err, req, res, next) => {
    console.log('DO WE SEE THIS???')
    next()
})
app.use((req, res, next) => {
    req.banana = true

    next()
})
app.use(cookieParser('secretKey'))
app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: false
}))

app.use((req, res, next) => {
    req.session.banana = "This is a banana"
    next()
})

app.use('/users', usersRouter)
app.use('/banana', usersRouter)
app.use('/posts', postsRouter)

app.get('/', (req, res) => {
    console.log(res)
    res.send('some message')
})

app.get(/^\/[abc]+$/, (req, res) => {
    res.send('regex route')
})

// app.all('*', (req, res) => {
//     res.send('hello from catch all')
// })
app.use((req, res, next) => {
    const error = new Error('Page Not Found')
    error.status = 404
    console.log(req.method, req.path)
    console.log("404???")
    next(error)
})

app.use((err, req, res, next) => {
    // if (!err.status === 404) {
        console.log(err)
        console.log("hello from error handler")
    // }
})

app.use((err, req, res, next) => {
    console.log('this is the second error handler')
})

module.exports = app;