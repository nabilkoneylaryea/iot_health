import {mongoose, Schema} from 'mongoose';

const patientSchema = new Schema({
    name: 'Nabil',
        age: 19,
        weight: 145,
        height: 1.73,
        address: '1006 awesome dr., Gainesville, Fl, 32601',
        emergencyContactName: 'Mom',
        emergencyContactNumber: '727-505-0936',
        doctorIDs: ['d1', 'd2'],

        // cloud variables
        temp: 100,
        ecg: 1,
        bpm: 140,
        hasFallen: false
});