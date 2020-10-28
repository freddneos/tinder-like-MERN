import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import dotEnv from 'dotenv'

import Cards from './dbCards.js'


// App config
dotEnv.config()
const app = express()
const port = process.env.PORT || process.env.APP_PORT
const connectionUrl = process.env.DB_URL


// Middlewares
app.use(express.json())
app.use(Cors())


// Db configure
mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// Api endpoints
app.get('/', (req, res) => {
    res.status(200).send('hello world')
})
app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (error, data) => {
        if (error) {
            res.status(500).send(error)
        } else {
            res.status(201).send(data)
        }
    })
})
app.get('/tinder/cards', (req, res) => {
    Cards.find((error, data) => {
        if (error) {
            res.status(500).send(error)
        } else {
            res.status(200).send(data)
        }
    })
})

// Listener
app.listen(port, () => {
    console.log("listening port ", port)
})
