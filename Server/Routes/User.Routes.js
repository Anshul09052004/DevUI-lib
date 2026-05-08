import express from "express";
import { getUser } from "../Controllers/User.controller.js";
import isAuth from "../Middlewares/isAuth.js";
const router = express.Router();

router.get("/current-user", isAuth, getUser);
export default router;