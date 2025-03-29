import { Router } from 'express';
import apiController from '../controller/apiController';
import rateLimit from '../middleware/rateLimit';

const router = Router();

// router.route('self').get(rateLimit, apiController.self);/
router.use(rateLimit) // This will give access to all routes by default
router.get('/self', apiController.self);
router.get('/health', apiController.health);

export default router;