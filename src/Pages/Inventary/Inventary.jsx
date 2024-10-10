import { getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import Cash from "../../assets/cash.png";
import promer from "../../assets/promedio.png";
import ModalCreate from "../../components/modalCreate";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


const columns = [
  {
    key: "dni",
    label: "Cedula",
  },
  {
    key: "name",
    label: "Nombre",
  },
  {
    key: "paymentType",
    label: "Tipo de pago",
  },
  {
    key: "reference",
    label: "Referencia",
  },
  {
    key: "date",
    label: "fecha",
  },
  {
    key: "prince",
    label: "monto",
  },
  {
    key: "actions",
    label: "accion",
  },
];
const Inventary = () => {
  const [info, setInfo] = useState()
  const [state, setstate] = useState();


  const loadGet = async () => {

    const { data } = await axios.get('http://localhost:3000/product')

    return data
  }
  useEffect(() => {

    return async () => {
      const data = await loadGet()
      setstate(data)
    };
  }, []);

  return (
    <div className=' container p-4 flex flex-col gap-6'>
      <h1 className="text-5xl font-mono ">Inventario</h1>
      <div className=" flex justify-between">
        <div className=" bg-white  w-[40%]  rounded-lg shadow-lg divide-y divide-blue-100">
          <div className="flex flex-col justify-center items-center">
            <img src={Cash} className="w-[60px]" />
            <p className="text-1xl text-green-700">Ingresos Mensuales Promedio</p>
          </div>
          <div className="flex justify-center items-center">
            <h2 className="text-3xl font-bold text-green-600"> $0</h2>
          </div>
        </div >
        <div className="bg-white p-2 w-[40%]  rounded-lg shadow-lg divide-y divide-blue-100">
          <div className="flex flex-col justify-center items-center">
            <img src={promer} className="w-[50px] " />
            <p className="text-1xl text-blue-700">Ventas Mensuales Promedio</p>
          </div>
          <div className="flex justify-center items-center">
            <h2 className="text-3xl font-bold"> 0</h2>
          </div>
        </div>
      </div>
      <div>
        <div className="flex  justify-end">
          < ModalCreate close={info} isOpen={setInfo} placement="top-center" />
        </div>
        <Table aria-label="Example table with dynamic content">
          <TableHeader columns={columns}
          >
            {(column) =>
              <TableColumn key={column.key}>{column.label}</TableColumn>}
          </TableHeader>
          <TableBody items={state}>
            {
              state?.map(user => (
                <TableRow key={user._id}>

                  {(columnKey) => {
                    // if (columnKey === 'edit') return <TableCell><ModalCases data={data} close={info} isOpen={setInfo} /></TableCell>
                    return <TableCell>{getKeyValue(user, columnKey)}</TableCell>
                  }}

                </TableRow>
              ))

            }

          </TableBody>
        </Table>


      </div>

    </div>
  );
}

export default Inventary;
