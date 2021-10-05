// const express = require('express');
// const router = express.Router();
// const getPatients = require('../controllers/patientControllers')

import express from 'express';
import {getPatients, getPatientById} from '../controllers/patientControllers.js';
const router = express.Router();

router.route('/').get(getPatients);

router.route('/:id').get(getPatientById);

export default router;