import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    name: String,
    imageURL: String
});


export default mongoose.model("cards", cardSchema)