import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const dbString = process.env.MONGO_DB;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(dbString);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
export default connectDB;
