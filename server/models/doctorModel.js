import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
    id: String,
    name: String,
    speciality: String,
    status: Number,
    patientIDs: [String]
});

doctorSchema.set('collection', 'doctors');

const doctorModel = mongoose.model('doctor', doctorSchema);
export default doctorModel;