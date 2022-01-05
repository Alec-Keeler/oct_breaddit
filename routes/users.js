const express = require('express');
const { User } = require('../models');

const router = express.Router()

router.get('/', async (req, res) => {
    const usersRes = await User.findAll()
    // console.log(usersRes)
    res.render('users', { usersRes })
})

router.get('/:id', async (req, res) => {
    console.log(req.params)
    const userId = req.params.id
    const user = await User.findByPk(userId)
    res.render('profile', { user, usersRes: [] })
})

module.exports = router;