import doctorModel from '../models/doctor.js';
import asyncHandler from 'express-async-handler';

//getDoctors function to get all users
export const getDoctors = asyncHandler(async(req, res) => {
    const doctors = await doctorModel.find({});
    res.json(doctors);
});

//getDoctorById function to retrieve user by id
export const getDoctorById  = asyncHandler(async(req, res) => {
    const doctor = await doctor.findById(req.params.id);

    //if user id match param id send user else throw error
    if(doctor){
        res.json(doctor);
    }else{
        res.status(404).json({message: "Doctor not found"});
        res.status(404);
        throw new Error('Doctor not found');
    }
});