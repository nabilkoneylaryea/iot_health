import doctorModel from '../models/doctorModel.js';
import asyncHandler from 'express-async-handler';

//getDoctors function to get all users
export const getDoctors = asyncHandler(async(req, res) => {
    console.log("Getting all doctors");
    const doctors = await doctorModel.find({});
    res.json(doctors);
});

//getDoctorById function to retrieve user by id
export const getDoctorById = asyncHandler(async(req, res) => {
    console.log(`Looking for doctor: ${req.params.id}`);
    const doctor = await doctorModel.findById(req.params.id);

    //if user id match param id send user else throw error
    if(doctor){
        res.json(doctor);
    }else{
        res.status(404).json({message: "Doctor not found"});
        res.status(404);
        throw new Error('Doctor not found');
    }
});