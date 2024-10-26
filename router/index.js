import express from 'express';
import { RESPONSE } from '../constants/global.js';

const router = express.Router();

router.get('/', async (req, res) => res.status(200).json({ status: RESPONSE.SUCCESS, message: 'Server UP!' }));

export default router;