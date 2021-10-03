import {mongoose, Schema} from 'mongoose';

const patientSchema = new Schema({
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

export default patientModel = mongoose.model('patient', patientSchema);