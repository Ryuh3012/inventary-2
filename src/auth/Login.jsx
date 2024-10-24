import Layout from './Layout';
import { Button, Input } from '@nextui-org/react';
import icon from '../assets/Logo.png'
import { useFormik } from 'formik';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

const initialValues = { user: '', password: '' }

const Login = () => {

    const navegation = useNavigate()

    const { handleSubmit, values, handleChange, handleBlur } = useFormik({

        initialValues,
        onSubmit: async (value, { resetForm }) => {
            const data = await axios.post('http://localhost:3000/auth', value)

            if (data.length !== 0) {
                const cookis = new Cookies()
                cookis.set('user', JSON.stringify(data.res[0]))
                return navegation('/inventary')
            }


        }

    })

    return (
        <Layout>
            <section className='container flex justify-center items-center mx-auto lg:h-[calc(100vh-4rem)] p-10 '>
                <div className='bg-white flex rounded-[5px] shadow-md p-5 w-full border-[1px] border-[#C4CEDC] '>
                    <div className='bg-slate-950 flex justify-center items-center w-[50%]'>
                        <img src={icon} />
                    </div>
                    <div className='bg-red-500 flex justify-center items-center w-[50%]'>

                        <form onSubmit={handleSubmit}
                            className='flex gap-4 w-full my-5 flex-col justify-center items-center'
                        >
                            <h1 className='font-bold text-3xl'>Inicio de Sesion </h1>
                            <div className="flex flex-col w-[70%] gap-2">

                                <Input
                                    type="text"
                                    label="Usuario"
                                    name='user'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.user}
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
                            <Button type='submit' className='bg-slate-600 text-white font-bold' > Iniciar Sesion </Button>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Login;
