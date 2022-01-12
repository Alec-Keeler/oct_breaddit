const express = require('express');
const router = express.Router();
const { Post } = require('../db/models')

router.use((req, res, next) => {
    if (req.session.user) {
        next()
    } else {
        res.redirect('/users/login')
    }
})

const asyncHandler = (handler) => {
    return (req, res, next) => {
        return handler(req, res, next).catch(next);
    };
};

router.get('/', asyncHandler(async(req, res) => {
    const posts = await Post.findAll()
    res.render('posts', {posts})
}))

router.delete('/:id', asyncHandler(async(req, res) => {
    const post = await Post.findByPk(req.params.id)
    await post.destroy()
    res.json({message: "Success"})
}))

// Delete with form
// router.post(`/:id/delete`, asyncHandler(async(req, res) => {
//     const post = await Post.findByPk(req.params.id)
//     await post.destroy()
//     res.redirect('/posts')
// }))

module.exports = router;