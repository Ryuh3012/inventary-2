import { Router } from "express";
import { getUser, getUsers, newUsers, userDelete, userUpdate } from "../controllers/users.mjs";
const router = Router()

router.post('/user', newUsers)
router.get('/user', getUsers)
router.get('/user/:id', getUser)
router.put('/user/:id', userUpdate)
router.delete('/user/:id', userDelete)


export default router
