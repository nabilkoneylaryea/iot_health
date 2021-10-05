import express from 'express';
import {getPatients, getPatientById} from '../controllers/patientControllers.js';
const router = express.Router();

router.route('/').get(getPatients);

router.route('/:id').get(getPatientById);

export default router;