import mongoose from "mongoose";

export const connectDB = async () =>{
    try{
        const connect = mongoose.connect(process.env.MONGO_URL)
        console.log("DB connected succesfully")
    }catch(error){
        console.log("error in connecting to DB");
        process.exit(1)
        
    }
}