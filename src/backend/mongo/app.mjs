import express from "express";
import cors from "cors";
import { connectdb } from "./src/db/connectdb.mjs";
import userRouter from "./src/routes/usersRoute.mjs";
import inventaryRoute from "./src/routes/inventaryRoute.mjs";
import authVerify from "./src/routes/authRoute.mjs";
const app = express()
const port = 3000


try {
    connectdb()
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))


    app.use(inventaryRoute)
    app.use(userRouter)
    app.use(authVerify)


    app.listen(port, () => {
        console.log('listo ')
    })
} catch (error) {
    console.log(error)
}



