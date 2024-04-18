import { Router } from 'express';
import { getUsers } from '../queries/users.js';
const router = Router();

router.get('/all', getUsers);

export default router;
