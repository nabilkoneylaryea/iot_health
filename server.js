// import http from 'http';
const express = require('express');
const bodyParser = require('body-parser');
// import cors from 'cors';
const mongoose = require('mongoose');

// routers
const patientsRouter = require('./server/routes/patients');
const doctorsRouter = require('./server/routes/doctors');

// import MongoClient from 'mongodb';

// const uri = "mongodb+srv://admin:admin@cluster0.bdcd0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// const connectDB = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const doctorsCollection = client.db("Users").collection("doctors");
//   // perform actions on the collection object
//   const patientsCollection = client.db("Users").collection("patients");
//   client.close();
// });

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

server.get('/', function (req, res) {
  res.send('Hello World!')
})
// routers
server.use('/patients', patientsRouter);
server.use('/doctors', doctorsRouter);

// connect database
mongoose.connect(DB, {})
  .then(() => {
    // listen for requests on previously specified PORT
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
    console.log("Starting DB");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });





