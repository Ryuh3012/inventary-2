import { getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import ModalCreate from "../../components/modalCreate";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Layout from "../Layout";


const columns = [

  {
    key: "dni",
    label: "Cedula",
  },
  {
    key: "post",
    label: "Cargo",
  },
  {
    key: "vouchers",
    label: "Vale",
  },
  {
    key: "date",
    label: "Fecha",
  },
  {
    key: "prince",
    label: "Monto",
  },
];
const UsersVali = () => {
  const [info, setInfo] = useState()
  const [state, setstate] = useState();

  const loadGet = async () => {

    const { data } = await axios.get('http://localhost:3000/user')

    return data
  }
  useEffect(() => {

    return async () => {
      const data = await loadGet()
      setstate(data)
    };
  }, []);

  return (
    <Layout>
        <section className="container mx-auto lg:h-[calc(100vh-4rem)] p-10  ">
          <div className='bg-white  rounded-[5px] shadow-md p-5 w-full border-[1px] border-[#C4CEDC]'>
            <h1 className="text-5xl font-mono text-black">Personal</h1>
            <div>
              <div className="flex justify-end p-1">
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
        </section>
    </Layout>

  );
}

export default UsersVali;
