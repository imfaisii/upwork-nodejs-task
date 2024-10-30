import express from 'express';

import { index, _404, countriesIndex, salesRepsIndex, optimalIndex } from '../controllers/api.controller.js';

const router = express.Router();

router.get('/', index);
router.get('/countries', countriesIndex);
router.get('/salesrep', salesRepsIndex);
router.get('/optimal', optimalIndex);

router.use(_404);

export default router;