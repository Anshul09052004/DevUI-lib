import express from 'express';
import { googleAuth, logout } from '../Controllers/Auth.Controller.js';
const router = express.Router();
router.post('/google', googleAuth);
router.get('/logout', logout);
export default router;