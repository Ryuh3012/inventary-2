import express from "express";
import cors from "cors";
import { connectdb } from "./src/db/connectdb.mjs";
import userRouter from "./src/routes/userRouter.mjs";
const app = express()
const port = 3000


try {

    connectdb()
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))

    app.use(userRouter)

    app.listen(port, () => {
        console.log('listo ')
    })
} catch (error) {
    console.log(error)
}



