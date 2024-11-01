import { serve } from "../server/usuarios.mjs"


export const newUsers = async (req, res) => {
    const data = await req?.body
    const newUser = new serve(data)
    const resp = await newUser.save()

    return res.status(200).json({
        "message": `el usuario  ha sido creado`
    })
}
export const getUsers = async (req, res) => {

    try {
        const data = await serve.find()
        return res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }



}
export const getUser = async (req, res) => {

    const { id } = await req.params
    const data = await serve.findOne({ _id: id })
    return res.status(200).json(data)

}


export const userUpdate = async (req, res) => {

    const { id } = await req.params
    const { vouchers, prince } = await req?.body
    const update = await serve.updateOne({ _id: id }, {
        $set: {
            vouchers: vouchers,
            prince: prince
        }

    })
    console.log(update)
    return res.status(200).json({
        "message": `El usuario se ha modificado `
    })

}

export const userDelete = async (req, res) => {
    const { id } = await req.params

    const personas = await serve.deleteOne({ _id: id })
    console.log(personas)
    return res.status(200).json({

        "message": `el usuario ha sido creado`

    })

}


