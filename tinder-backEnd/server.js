import express from "express"
import mongoose from "mongoose";
import cors from 'cors';
import Cards from "./dbCards.js"


// App config

const app = express()
const port = process.env.PORT || 8001
const connectionURL =
    "mongodb+srv://<admin>:idboufker123Tamanar@cluster0.3kiib.mongodb.net/tinder-db?retryWrites=true&w=majority"
// Middlewares

app.use(express.json)
app.use(cors)

// DB config
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

// API Endpoints
app.get('/', (req, res) => {
    // Means Okay
    res.status(200).send("Hello World !!!");
});

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data)
        }
    })
});

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

// Listener

app.listen(port, () => {
    console.log(`listening on localhost : ${port}`);
})