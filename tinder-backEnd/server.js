import express from "express"
import mongoose from "mongoose";


// App config
const app = express()
const port = process.env.PORT || 8001
const connectionURL ="mongodb+srv://<addmin>:idboufker123Tamanar@cluster0.3kiib.mongodb.net/tinder-db?retryWrites=true&w=majority"
// Middlewares

// DB config
mongoose.connect(connectionURL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
});

// API Endpoints
app.get('/', (req, res) => {
    // Means Okay
    res.status(200).send("Hello World !!!");
    // console.log("Hello World");
})

// Listener

app.listen(port, () => {
    console.log(`listening on localhost : ${port}`);
})