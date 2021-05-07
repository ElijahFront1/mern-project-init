import User from '../models/User.js'
import Role from '../models/Role.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { validationResult } from 'express-validator'

const generateAcessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "12h" })
}

class AuthController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            console.log(req.body)
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: "Registration error", errors })
            }
            const { username, password } = req.body
            const candidate = await User.findOne({ username })
            if (candidate) {
                return res.status(400).json({ message: "A user with this email already exists" })
            }
            const hashPassword = await bcrypt.hash(password, 5)
            const userRole = await Role.findOne({ value: "user" })
            const user = new User({ username, password: hashPassword, roles: [userRole.value] })
            await user.save()
            return res.json({ message: "User created" })
        } catch (e) {
            console.log(e);
            console.log(e);
            res.status(400).json({ message: "Registration failed" })
        }
    }

    async login(req, res) {
        try {
            const { username, password } = req.body
            const user = await User.findOne({ username })
            if (!user) {
                return res.status(400).json({ message: "User with this usrname does not exist" })
            }
            const validPass = bcrypt.compareSync(password, user.password)
            if (!validPass) {
                return res.status(400).json({ message: "The entered password is incorrect" })
            }
            const token = generateAcessToken(user._id, user.roles)
            return res.json({
                token,
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    roles: user.roles
                }
            })
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: "Login failed" })
        }
    }

    async auth(req, res) {
        try {
            const user = await User.findOne({ _id: req.user.id })
            const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: "1h" })
            return res.json({
                token,
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    roles: user.roles
                }
            })
        } catch (e) {
            console.log(e)
            res.send({ message: "Server error" })
        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: "getUsers error" })
        }
    }
}

export default new AuthController();