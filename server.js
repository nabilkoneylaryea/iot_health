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
import mongoose from 'mongoose';

const DB = "mongodb+srv://admin:admin@cluster0.bdcd0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(DB, {})
  .then(() => {
    console.log("Starting DB");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

http.createServer((req, res) => {

}).listen(PORT);
