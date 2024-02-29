import express from 'express';
import { pay } from '../controllers/billing.js';

const router = express.Router();

router.get('/', pay)

export default router;