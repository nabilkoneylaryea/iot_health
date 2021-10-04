import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    id: String,
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

export default mongoose.model('patient', patientSchema);