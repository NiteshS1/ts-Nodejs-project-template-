import { Router } from 'express';
import apiController from '../controller/apiController';

const router = Router();

// router.route('self').get(apiController.self);
router.get('/self', apiController.self);

export default router;