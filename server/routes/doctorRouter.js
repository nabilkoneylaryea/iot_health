import express from 'express';
import {getDoctors, getDoctorById} from '../controllers/doctorControllers.js';
const router = express.Router();

// middleware that is specific to this router
// router.use((req, res, next) => {
//     console.log('Doing something on doctors route ...');
//     next();
// });

// // define the home page route
// router.get('/', function (req, res) {
//   res.send('Doctors homepage')
// })
// // define the about route
// router.get('/:id', function (req, res) {
//   res.send('Doctor id')
// })

router.route('/').get(getDoctors);

router.route('/:id').get(getDoctorById);

export default router;