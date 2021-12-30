const { User, Post, Subbreaddit, sequelize, Sequelize: { Op }  } = require('./models')

async function buildUser(username, email, password, faveBread) {
    const user = User.build({
        username,
        email,
        password,
        faveBread
    })
    await user.save()
    console.log(user)
    await sequelize.close()
};

// buildUser('Pan Pumperickel', 'rawahw@rawaha.com', 'password123', 'pumpernickel');

async function createPost(title, content) {
    const post = await Post.create({
        title,
        content,
        userId: 3,
        subId: 3
    })
    console.log(post);
    await sequelize.close()
};

// createPost('That Bread', 'How to bake bread plz');

async function findUser(userId) {
    const user = await User.findByPk(userId, {
        raw: true
    })
    console.log(user.username)
    await sequelize.close()
};

// findUser(1);

async function findUserByEmail(email) {
    const user = await User.findOne({
        where: {
            email
        },
        raw: true
    })
    console.log(user)
    await sequelize.close()
};

// findUserByEmail('dan@dan.dan')

async function findPostsBySubId(subId) {
    const posts = await Post.findAll({
        where: {
            subId
        },
        raw:true
    });
    console.log(posts)
    await sequelize.close()
};

// findPostsBySubId(1)

async function changePass(userId, password) {
    const user = await User.findByPk(userId)

    user.password = password

    await user.save()


    await sequelize.close()
};

// changePass(1, 'somethingStronger')

async function destroyPost(postId) {
    const post = await Post.findByPk(postId)
    await post.destroy()
    await sequelize.close()
}

// destroyPost(9)

async function findSomePosts(subId, userId) {
    const posts = await Post.findAll({
        raw:true,
        where: {
            subId: subId,
            userId: userId
        }
    })
    console.log(posts);
    await sequelize.close()
}

// findSomePosts(2, 2)

async function findPostByText(keyword) {
    const posts = await Post.findAll({
        where: {
            title: {
                [Op.substring]: keyword
            }
        },
        raw: true
    })
    console.log(posts)
    await sequelize.close()
}

// findPostByText('post')

async function getUserAndPosts(userId) {
    const user = await User.findByPk(userId, {
        // raw: true,
        include: {model: Post}
    })

    console.log(user)
    await sequelize.close()
}

// getUserAndPosts(2)

async function getPostAndStuff(postId) {
    const post = await Post.findByPk(postId, {
        include: [{model: User}, {model: Subbreaddit}]
    })
    console.log(post.Subbreaddit)

    await sequelize.close()
}

getPostAndStuff(5);