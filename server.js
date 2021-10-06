import express from 'express';
import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import connectDB from './db.js';

// configuration
const server = express();
const PORT = process.env.PORT || 5000;

// connecting to the database
connectDB();

// schemas and models
// patient schema
const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  weight: Number,
  height: Number,
  address: String,
  emergencyContactName: String,
  emergencyContactNumber: String,
  doctorIDs: [String],

  // cloud variables
  temp: Number,
  ecg: Number,
  bpm: Number,
  hasFallen: Boolean
});
patientSchema.set('collection', 'doctors');
const patientModel = mongoose.model('patient', patientSchema);

// doctorSchema
const doctorSchema = new mongoose.Schema({
  name: String,
  speciality: String,
  status: Number,
  patientIDs: [String]
});
doctorSchema.set('collection', 'doctors');
const doctorModel = mongoose.model('doctor', doctorSchema);

// server and routes
server.use(express.json());
server.get('/api/patients', asyncHandler(async(req, res) => {
  res.json(await patientModel.find());
}));
server.get('/api/patients/:id', asyncHandler(async(req, res) => {
  res.json(await patientModel.findById(req.params.id));
}));
server.get('/api/doctors', asyncHandler(async(req, res) => {
  res.json(await doctorModel.find());
}));
server.get('/api/doctors/:id', asyncHandler(async(req, res) => {
  res.json(await doctorModel.findById(req.params.id));
}));

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});







