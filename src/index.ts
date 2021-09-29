import './loadEnv';
import express from 'express';
import router from './routes/index'
import { connectDb } from './mongoDb'
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
connectDb()

app.use('/api', router)

app.listen(port, () => {
    console.log(`server run in port -> ${port}`)
})