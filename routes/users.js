const express = require('express');
const { User } = require('../models');

const router = express.Router()

router.get('/', async (req, res) => {
    const usersRes = await User.findAll()
    // console.log(usersRes)
    res.render('users', { usersRes })
})

router.get('/:id(\\d+)', async (req, res) => {
    console.log(req.params)
    const userId = req.params.id
    const user = await User.findByPk(userId)
    res.render('profile', { user, usersRes: [] })
})

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.post('/signup', (req, res) => {
    console.log("hello from post route")
})

module.exports = router;