
import mongoose from "mongoose"

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected.");
    } catch (error) {
        console.error(`Failed to connect with DB: ${error}`);
    }
}
export default connectDB;
