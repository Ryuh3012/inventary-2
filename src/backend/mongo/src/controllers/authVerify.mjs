import { serve } from "../server/usuarios.mjs"

export const authVerify = async (req, res) => {


    const { dni, password } = req?.body
    try {
        const data = await serve.findOne({ dni: dni })
        if (data == null) return res.status(401).json({ message: 'Usuario o clave invalidos' })
        if(password !== data.password) return res.status(401).json({ message: 'Usuario o clave invalidos' })
            
        return res.status(200).json({
            message: data
        });

    } catch (error) {
        console.log(error)
    }

}