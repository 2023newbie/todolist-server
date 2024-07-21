import express from "express";
import { createAccount, loginAccount } from "../controllers/account.js";

const router = express.Router()

router.post('/signup', createAccount)
router.post('/login', loginAccount)

export default router