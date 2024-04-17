import { Router } from 'express';
import controller from '../controllers/users.js';
const router = Router();

router.get('/all', controller.getUsers);

export default router;
