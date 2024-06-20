import { User } from "backend/models/user.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const { JWT } = process.env

const register = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })

        if (user !== null) {
            return next(409, "Email in use!")
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const verificationToken = crypto.randomUUID()

        const newUser = await User.create({email, password: hashedPassword, verificationToken})

        res.status(201).send({user: {email: newUser.email}})
    } catch (error) {
        next(error)
    }
}

const logIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })

        if (user === null) {
            return next(401, "Email or password is wrong!")
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return next(401, "Email or password is wrong!")
        }

        if (user.verify === false) {
            return next(401, "Please verify your mail!")
        }

        const token = jwt.sign({id: user._id, email: user.email}, JWT)

        await User.findByIdAndUpdate(user._id, {token}, {new: true})

        res.status(200).send({token: token, user: {email: user.email}})
    } catch (error) {
        next(error)
    }
}

const logOut = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {token: null}, {new:true})

        res.status(204).end()
    } catch (error) {
        next(error)
    }
}

export { register, logIn, logOut }