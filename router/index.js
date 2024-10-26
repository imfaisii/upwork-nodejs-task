import express from 'express';

import { index, _404, countries, salesReps } from '../controllers/api.controller.js';

const router = express.Router();

router.get('/', index);
router.get('/countries', countries);
router.get('/salesrep', salesReps);

router.use(_404);

export default router;