const express = require('express')
const UserModel = require('../models/user')
const router = express.Router()


router.post('/login', (req, res) => {
    try {
        const { username, password } = req.body

        const user = await UserModel.findOne({
            username, password
        })
        res.send(user)

    } catch (error) {
        return res.status(400).json(error)
    }
})


router.post('/register', (req, res) => {
    try {
        const user = new UserModel(req.body)
        await user.save()
        console.log('user registered');

    } catch (error) {
        return res.status(400).json(error)
    }
})

module.exports = router