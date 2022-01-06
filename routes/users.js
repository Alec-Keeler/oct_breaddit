const express = require('express');
const { User } = require('../db/models');
const csurf = require('csurf');

const csrfProtection = csurf({cookie: true})

const router = express.Router()

const asyncHandler = (handler) => {
    return (req, res, next) => {
        return handler(req, res, next).catch(next);
    };
};

// const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

router.use((req, res, next) => {
    console.log('hello from router wide middleware')
    next()
})

const emailChecker = (req, res, next) => {
    const exp = /^[a-zA-Z0-9-_]*@[a-z]*\.[a-z]{2,3}$/
    if (exp.test(req.body.email)) {
        next()
    } else {
        req.errors = ['Email is invalid']
        next()
    }
}

router.get('/', async (req, res) => {
    const usersRes = await User.findAll()
    console.log('banana?: ', req.banana)
    res.render('users', { usersRes })
})

router.get('/:id(\\d+)', async (req, res) => {
    console.log(req.params)
    const userId = req.params.id
    const user = await User.findByPk(userId)
    res.render('profile', { user, usersRes: [] })
})

router.get('/signup', csrfProtection, (req, res) => {
    res.render('signup', {breads: ['bagel', 'bagguette', 'rye'], body: {}, errors: [], csrfToken: req.csrfToken()})
})

router.post('/signup', emailChecker, csrfProtection, asyncHandler(async(req, res) => {
    console.log(req.errors)
    const { username, email, password, faveBread } = req.body
    if (req.errors.length === 0) {
        try {
            const user = await User.create({
                username,
                email,
                password,
                faveBread
            })
            res.redirect('/users')
        } catch (e) {
            next(e)
        }
    } else {
        res.render('signup', { breads: ['bagel', 'bagguette', 'rye'], body: req.body, errors: req.errors, csrfToken: req.csrfToken() })
    }
}))

module.exports = router;