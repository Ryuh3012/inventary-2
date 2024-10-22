import { Button } from "@nextui-org/react";
import Excel from '../assets/exportar.png'
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import * as XLSX from "xlsx";

const loadAllData = async () => {

    const data = axios.get('http://localhost:3000/product')

    return data
}

const ButtonExce = () => {

    const [getAllData, setGetAllData] = useState([]);
    useEffect(() => {
        return async () => {

            const { data } = await loadAllData()
            setGetAllData(data)
        }
    }, []);

    let getData = getAllData?.map(({ paymentType, reference, prince, product }) => {


        let data = {
            'Tipo de pago': paymentType,
            referencia: reference,
            monto: prince,
            productos: product

        }

        return data
    }
    )


    const excel = () => {

        const wb = XLSX.utils.book_new()
        const ws = XLSX.utils.json_to_sheet(getData)
        const date = new Date()

        XLSX.utils.book_append_sheet(wb, ws, 'Inventario')
        XLSX.writeFile(wb, `${date.toLocaleDateString()}.xlsx`)
    }
    return (
        <div className="px-2">
            <Button className="bg-[#459d1f]" onClick={excel} ><img src={Excel} className="w-[25px]" />Excel</Button>
        </div>
    );
}

export default ButtonExce;
