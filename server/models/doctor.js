import {mongoose, Schema} from 'mongoose';

const doctorSchema = new Schema({
    id: String,
    name: String,
    speciality: String,
    status: Number,
    patientIDs: String
});

export default doctorModel = mongoose.model('doctor', doctorSchema);