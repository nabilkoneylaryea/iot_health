import express from 'express';
import mongoose from 'mongoose';
import patientRouter from './server/routes/patientRouter.js';
import doctorRouter from './server/routes/doctorRouter.js';

import asyncHandler from 'express-async-handler';

const PORT = process.env.PORT || 5000;

// server and routes
const server = express();
server.use(express.json());
// server.use('/api/patients', patientRouter);
server.use('/api/doctors', doctorRouter);
server.get('/api/test', asyncHandler(async (req, res) => {
  // res.json( await new mongoose.model('test2', new mongoose.Schema({name: [String], age: Number}))({name: ["Nabil", "Jazmine"], age: 19}).save());
  res.json(await mongoose.model('test4', new mongoose.Schema({test: String})).find());
  // res.json(await doctorModel.find());
}));

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});







