import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler';
import patientRouter from './server/routes/patientRouter.js';
import doctorRouter from './server/routes/doctorRouter.js';
// import cors from 'cors';

/*
 * Database name: Users
 * Collection 1: doctors
 * Collection 2: patients
 */
const DB = "mongodb+srv://admin:admin@cluster0.bdcd0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

const server = express();
const router = express.Router();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };
// server.use(cors(corsOptions));

// parse requests of content-type - application/json
server.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: true }));

// server.get('/', function (req, res) {
//   res.send('Hello World!')
// })

// routers
server.use('/api/patients', patientRouter);
server.use('/api/doctors', doctorRouter);

// connect database
mongoose.connect(DB, {})
  .then(() => {
    console.log("Starting DB");
    // listen for requests on previously specified PORT
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.log("Error: " + err);
  });








