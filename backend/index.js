import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import reviewRoute from "./Routes/reviews.js";
import userRoute from "./Routes/user.js";
import authRoute from "./Routes/auth.js";
import bookingRoute from "./Routes/booking.js"; 
import furnitureDataRoute from "./Routes/furnitureData.js";

dotenv.config()
const app = express()
const port = process.env.PORT || 8000;
const corsOptions = {
    origin:true,
    credentials:true
}

//database connection
mongoose.set('strictQuery',false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL,{
        
        })
        console.log('MongoDB database connected');

    } catch (err) {
        console.log('MongoDB databse connection failed ')
    }

};

//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/user', userRoute); 
app.use('/api/v1/booking', bookingRoute);
app.use('/api/v1/reviews', reviewRoute);
app.use('/api/v1/furnitureData', furnitureDataRoute);

app.listen(port, ()=>{
    connect();
    console.log("server listening on port" , port);
})

