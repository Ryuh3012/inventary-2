import { serve } from "../server/usuarios.mjs"

export const authVerify = async (req, res) => {

    const { user, password } = req?.body
    try {
        const data = await serve.findOne({ name: user })

        if (data == null) return res.status(401).json({ res: 'Usuario o clave invalidos' })

        return res.status(200).json({
            res: rows
        });

    } catch (error) {
        console.log(error)
    }

}