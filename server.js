import express from 'express';
import mongoose from 'mongoose';
import patientRouter from './server/routes/patientRouter.js';
import doctorRouter from './server/routes/doctorRouter.js';
// import asyncHandler from 'express-async-handler';
// import bodyParser from 'body-parser';

/*
 * Database name: Users
 * Collection 1: doctors
 * Collection 2: patients
 */
const DB = "mongodb+srv://admin:admin@cluster0.bdcd0.mongodb.net/Users?retryWrites=true&w=majority";
const OPTIONS = {
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity,
  useUnifiedTopology: true,
  useNewUrlParser: true,

};
const PORT = process.env.PORT || 5000;

// connect database
mongoose.connect(DB, OPTIONS)
  .then(() => {
    console.log("Connecting to DB...");

    // server and routes
    const server = express();
    // parse requests of content-type - application/json
    // server.use(bodyParser.json());
    // parse requests of content-type - application/x-www-form-urlencoded
    // server.use(bodyParser.urlencoded({ extended: true }));
    server.use(express.json());
    server.use('/api/patients', patientRouter);
    server.use('/api/doctors', doctorRouter);
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}...`);
    });
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

// mongoose configurations
// mongoose.set('bufferCommands', false);
mongoose.set('debug', true);
// mongoose.set('bufferTimeoutMS', 500);








