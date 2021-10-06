import express from 'express';
// TODO: add back in import for getDoctorById
import {getDoctors} from '../controllers/doctorControllers.js';
const router = express.Router();

router.route('/').get(getDoctors);

// router.route('/:id').get(getDoctorById);

export default router;