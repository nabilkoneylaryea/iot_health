import express from 'express';
import {getDoctors, getDoctorById} from '../controllers/doctorControllers.js';
const router = express.Router();

router.route('/').get(getDoctors);

router.route('/:id').get(getDoctorById);

export default router;