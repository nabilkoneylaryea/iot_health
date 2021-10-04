import patientModel from '../models/patient.js';
import asyncHandler from 'express-async-handler';

//getPatients function to get all users
export const getPatients = asyncHandler(async(req, res) => {
    const patients = await patientModel.find({});
    res.json(patients);
})

//getPatientsById function to retrieve user by id
export const getPatientById  = asyncHandler(async(req, res) => {
    const patient = await patient.findById(req.params.id);

    //if user id match param id send user else throw error
    if(patient){
        res.json(patient);
    }else{
        res.status(404).json({message: "Patient not found"});
        res.status(404);
        throw new Error('Patient not found');
    }
})