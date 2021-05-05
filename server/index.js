import express from 'express'
import mongoose from 'mongoose'
import router from './routes/postRouter.js'
import fileUpload from 'express-fileupload'
import corsMiddleware from './middleware/cors.middleware.js'
import authRouter from './routes/authRouter.js'
import dotenv from "dotenv"
dotenv.config()

const PORT = 4000;
const DB_URL = 'mongodb+srv://root:root@cluster0.do9av.mongodb.net/backend-for-beginners-DB?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use(corsMiddleware)
app.use(fileUpload({}))
app.use('/api', router)
app.use('/api/auth', authRouter)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(PORT, () => console.log(`server was started on port ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

startApp()