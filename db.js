import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler';

const DB = "mongodb+srv://admin:admin@cluster0.bdcd0.mongodb.net/Users2?retryWrites=true&w=majority";
const OPTIONS = {
    // serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    // socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };

const connectDB = asyncHandler( async () => {
    const connection = await mongoose.connect(DB, OPTIONS)
        .then((database) => {
        console.log(`Database connected : ${database.connection.host}`);
        })
        .catch((err) => {
        console.log("Error: " + err);
        });
});

export default connectDB