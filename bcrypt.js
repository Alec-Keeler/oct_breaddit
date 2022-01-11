const bcrypt = require('bcryptjs');
const { User } = require('./db/models');

async function generateHash(password) {
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword)
}

// generateHash('hunter12')

// '$2a$10$tL5vJrpZoEUEuSWCPEMmGeqI8wf003NJLKh9PNdBSLYUKWh5h5pf.'

async function compareHash(password, email) {
    // const user = await User.findOne({
    //     where: {
    //         email
    //     }
    // })

    // const hash = user.hashedPassword
    const hash = '$2a$10$tL5vJrpZoEUEuSWCPEMmGeqI8wf003NJLKh9PNdBSLYUKWh5h5pf.'

    const isPass = await bcrypt.compare(password, hash)

    console.log(isPass)
}

compareHash('hunter12')