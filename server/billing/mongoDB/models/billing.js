import mongoose from "mongoose";

const billSchema = new mongoose.Schema({
    user: {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        }
    },
    movie: {
        Id: String,
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        movietime: {
            type: Number,
            required: true,
        },
        payTime: {
            type: String,
            required: true,
        }
    }
})

const bills = mongoose.model('Bills', billSchema);
export default bills;