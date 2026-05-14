import express from 'express';
import { generateComponentCode } from '../Controllers/AiComponent.Controller.js';
import { PublishComponent, saveComponent } from '../Controllers/Component.Controller.js';
import isAuth from '../Middlewares/isAuth.js';
const router = express.Router();

router.post('/generate', isAuth, generateComponentCode);
router.post('/save', isAuth, saveComponent);
router.post('/publish', isAuth, PublishComponent);

export default router;