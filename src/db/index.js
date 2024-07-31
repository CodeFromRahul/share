import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("MONGD DB CONNECT ",connectionInstance)
    } catch (error) {
        console.error("MONGO ERROR ",error)

        process.exit(1)
        
    }
}


export default connectDB