import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

//MIDDLEWARE ROUTES
import billRoutes from "./routes/billing.js"


//MIDDLEWARS
const app = express();
app.use(express.json());
dotenv.config();

app.use(cors({
    origin: '',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}))


//ROUTES
app.use('/billing', billRoutes)


//MONGODB CONNECTION
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    console.log('MONGO DB connected')
}).catch((err) => console.log(`cant connect because of this error  ${err}`));


// PORT CONNECTION
const PORT = process.env.PORT;
const server = app.listen(PORT, () => console.log(`server started on port : ${PORT}`));