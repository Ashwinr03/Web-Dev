import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('//ur database with mongodb atlas').then(()=>console.log("DataBase Connected"));
   
}

