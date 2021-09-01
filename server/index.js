import express from 'express'
import 'dotenv/config'

const app = express()
const port = process.env.EXPRESS_PORT || 8080

app.get('/', (req, res) => {
    res.send('hello world!')
})

app.listen(port, () => {
    console.log('App listening at port: ', port)
})