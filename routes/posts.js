const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.session.user) {
        next()
    } else {
        res.redirect('/users/login')
    }
})

router.get('/', (req, res) => {
    res.send('you got to the posts router')
})

module.exports = router;