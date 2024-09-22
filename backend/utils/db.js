import mongoose from "mongoose";

 const connectDB = async ()=>{
    await mongoose.connect(process.env.MONGO_URL, {
        dbName: "WorkWise"
    }).then(()=>{
        console.log("Connected to database.")
    }).catch(err=>{
        console.log(`Some error occured while connecting to database: ${err}`)
    })
}

export default connectDB;