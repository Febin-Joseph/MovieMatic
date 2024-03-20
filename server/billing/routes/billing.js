import express from 'express';
import { pay } from '../controllers/billing.js';

const router = express.Router();

router.post('/', pay)

export default router;