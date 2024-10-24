import { Router } from "express";
import { authVerify } from "../controllers/authVerify.mjs";
const router = Router()

router.post('/auth', authVerify)


export default router
