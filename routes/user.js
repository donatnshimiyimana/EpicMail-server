/* eslint-disable no-undef */
import express from "express";
import Controller from "../controllers/user";

const router = express.Router();

router.post("/auth/signup", Controller.register);
router.post("/auth/login", Controller.login);

export default router;
