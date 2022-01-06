const express = require('express');
const cookieParser = require('cookie-parser')
const path = require('path')
// const { User } = require('./models');
const usersRouter = require('./routes/users')

const app = express();
app.set('view engine', 'pug')
app.use(express.urlencoded({extended: false}));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'))


app.use((req, res, next) => {
    req.banana = true

    next()
})
app.use(cookieParser())

app.use('/users', usersRouter)
app.use('/banana', usersRouter)


app.get('/', (req, res) => {
    console.log(res)
    res.send('some message')
})

app.get(/^\/[abc]+$/, (req, res) => {
    res.send('regex route')
})

app.all('*', (req, res) => {
    res.send('hello from catch all')
})

// /users, /users-word, /users_word, /users/
// /users/someword, /users/:id/posts

// const port = 8080
// app.listen(port, () => console.log(`Listening on port ${port}...`))

module.exports = app;