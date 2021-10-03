// import MongoClient from 'mongodb';

// const uri = "mongodb+srv://admin:admin@cluster0.bdcd0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// const connectDB = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const doctorsCollection = client.db("Users").collection("doctors");
//   // perform actions on the collection object
//   const patientsCollection = client.db("Users").collection("patients");
//   client.close();
// });

import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
// import cors from 'cors';
import mongoose from 'mongoose';

const DB = "mongodb+srv://admin:admin@cluster0.bdcd0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

const server = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };
// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "IOT Health Application." });
});

// connect database
mongoose.connect(DB, {})
  .then(() => {
    console.log("Starting DB");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

// listen for requests on previously specified PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


