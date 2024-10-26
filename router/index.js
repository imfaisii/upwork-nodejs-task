import express from 'express';

import { countries, index } from '../controllers/api.controller.js';

const router = express.Router();

router.get('/', index);
router.get('/countries', countries);

export default router;