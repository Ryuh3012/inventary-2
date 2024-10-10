import { Router } from "express";
import { getUser, getUsers, newUsers, userDelete, userUpdate } from "../controllers/user.mjs";

const router = Router()

router.post('/product', newUsers)
router.get('/product', getUsers)
router.get('/product/:id', getUser)
router.put('/product/:id', userUpdate)
router.delete('/product/:id', userDelete)


export default router
