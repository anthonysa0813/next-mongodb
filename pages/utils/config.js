import mongoose from "mongoose";

const CONN = {
    isConnected : false
}

export const connectDB = async () => {
    try {
        if( CONN.isConnected) return;
        const db = await mongoose.connect(process.env.MONGO_URL)
        CONN.isConnected = db.connections[0].readyState
        console.log("Connected to Mongo db", CONN.isConnected)
    } catch (error) {   
        console.log(error)
    }
}