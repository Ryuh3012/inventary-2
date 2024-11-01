import Layout from './Layout';
import { Button, Input } from '@nextui-org/react';
import icon from '../assets/Logo.png'
import { useFormik } from 'formik';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import { loginValidate } from '../security/Login/ValidateLogin.mjs';
import { useState } from 'react';

const initialValues = { dni: '', password: '' }


const Login = () => {
    const [errorInternal, setErrorInternal] = useState(null)

    const navegation = useNavigate()

    const { errors, touched, handleSubmit, values, handleChange, handleBlur } = useFormik({

        initialValues,
        onSubmit: async (value,) => {
            const {data} = await axios.post('http://localhost:3000/auth', value)
                .catch(({ response: { data: { message } } }) => {
                    setErrorInternal(message)
                    setTimeout(() => {
                        setErrorInternal(null)
                    }, 3000);

                })
            if (data.length !== 0) {
                const cookis = new Cookies()
                cookis.set('user', JSON.stringify(data.message))
                return navegation('/inventary')
            }


        },
        validate: values => loginValidate({ values })

    })

    return (
        <Layout>
            <section className='container mx-auto p-10 lg:h-[calc(100vh-4rem)] '>
                <div className='bg-white flex rounded-[5px] shadow-md p-5  h-full w-full border-[1px] border-[#C4CEDC] '>
                    <div className=' flex justify-center items-center border-r-1 w-full '>
                        <img src={icon} />
                    </div>
                    <div className=' h-full w-full bg-[#16003f] rounded-[20px] text-white'>

                        <form onSubmit={handleSubmit}
                            className='flex flex-col justify-center items-center gap-5 h-full w-full'>
                            {errorInternal && (<p className="bg-red-600 pl-4 text-white rounded-[3px] p-3">{errorInternal}</p>)}
                            {(errors.password && touched.password) && (<p className="bg-red-600 pl-4 text-white rounded-[3px] p-3">{errors.password}</p>)}
                            {(errors.dni && touched.dni) && (<p className="bg-red-600 pl-4 text-white rounded-[3px] p-3">{errors.dni}</p>)}
                            <h1 className='font-bold text-3xl'>Inicio de Sesion </h1>

                            <div className="flex flex-col w-[70%] gap-2">

                                <Input
                                    label='Cedula'
                                    type="number"
                                    name="dni"
                                    value={values.dni}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Introduce La cedula"
                                />

                            </div>
                            <div className="flex flex-col justify-center items-center w-[70%] gap-2">
                                <Input
                                    type="password"
                                    label="Contraseña"
                                    name='password'
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <Button type='submit' className='bg-green-500 text-white font-bold p-6 ' > Iniciar Sesion </Button>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Login;
