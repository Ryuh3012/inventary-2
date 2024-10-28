import cash from '../assets/cash.png'
import ventas from '../assets/ventas.png'
import increment from '../assets/incrementar.png'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const LoadPrince = async () => {

    const data = await axios.get('http://localhost:3000/product')
    return data

}

const CardInfo = () => {
    const [getPrince, setGetPrince] = useState()

    useEffect(() => {
        return async () => {
            const { data } = await LoadPrince()
            setGetPrince(data)
        };
    }, []);
    let total = 0
    const princeDiary = getPrince?.reduce((num1, num2) => num1 + num2.prince, total
    )

    return (
        <div className="flex justify-between py-3 gap-6 flex sm:flex-nowrap">
            <div className=" flex flex-col justify-center items-center w-[25%] gap-1 bg-white rounded-lg shadow-lg ">
                <img src={cash} className='w-[25%]' />
                <h1 className='lg:text-2xl font-bold sm:text-base'>{princeDiary}$</h1>
                <p className='text-opacity-35 text-black sm:text-base'>Ventas Diarias</p>
            </div >
            <div className=" flex flex-col justify-center items-center w-[25%] gap-1 bg-white rounded-lg shadow-lg ">
                <img src={ventas} className='w-[25%]' />
                <h1 className='lg:text-2xl font-bold sm:text-base'>0$</h1>
                <p className='text-opacity-35 text-black sm:text-base'>Ventas Semanales </p>
            </div>
            <div className=" flex flex-col justify-center items-center w-[25%] gap-1 bg-white rounded-lg shadow-lg   ">
                <img src={increment} className='w-[25%]' />
                <h1 className='lg:text-2xl font-bold sm:text-base'>0$</h1>
                <p className='text-opacity-35 text-black sm:text-base'>Ventas Mensuales</p>
            </div>
        </div>
    );
}

export default CardInfo;
