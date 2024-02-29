import mongoose from "mongoose";

const mongoConnect = async (req, res) => {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(async () => {
        console.log('MONGO DB connected')
    }).catch((err) => console.log(`cant connect because of this error  ${err}`));
}

export default mongoConnect;