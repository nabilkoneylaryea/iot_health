import mongoose from 'mongoose';

const doctorSchema = mongoose.Schema({
    id: String,
    name: String,
    speciality: String,
    status: Number,
    patientIDs: [String]
});

const doctorModel = mongoose.model('doctors', doctorSchema);
export default doctorModel;