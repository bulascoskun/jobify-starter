import { Router } from 'express';
const router = Router();

import {
  validateLoginInput,
  validateRegisterInput,
} from '../middleware/validationMiddleWare.js';
import { login, logout, register } from '../controllers/authController.js';

router.route('/register').post(validateRegisterInput, register);
router.route('/login').post(validateLoginInput, login);
router.route('/logout').get(logout);

export default router;
