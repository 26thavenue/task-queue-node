import express, { type Application } from 'express'
import dotenv from 'dotenv'
import bull from 'bull'

const app:Application = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(8080, () => {
    console.log('Server is running on port 3000')
})