import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//MIDDLEWARE ROUTES
import billRoutes from "./routes/billing.js"
import mongoConnect from "./mongoDB/connection.js";


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
mongoConnect();


// PORT CONNECTION
const PORT = process.env.PORT;
const server = app.listen(PORT, () => console.log(`server started on port : ${PORT}`));