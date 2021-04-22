import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
import fileUpload from 'express-fileupload'

const PORT = 3000;
const DB_URL = 'mongodb+srv://root:root@cluster0.do9av.mongodb.net/backend-for-beginners-DB?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(PORT, () => console.log(`server was started on port ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

startApp()