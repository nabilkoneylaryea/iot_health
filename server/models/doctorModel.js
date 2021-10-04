import mongoose from 'mongoose';
const doctorSchema = new mongoose.Schema({
    id: String,
    name: String,
    speciality: String,
    status: Number,
    patientIDs: String
});

export default mongoose.model('doctor', doctorSchema);