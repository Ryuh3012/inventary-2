import { Button, getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, useDisclosure } from "@nextui-org/react";
import Icon from "../../assets/ojoAbierto.png";
import ModalCreate from "../../components/modalCreate";
import { useState } from "react";
const rows = [
  {
    key: "1",
    name: "Tony Reichert",
    paymentType: "CEO",
    price: "Active",
  },
];

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
    key: "price",
    label: "monto",
  },
  {
    key: "actions",
    label: "accion",
  },
];
const Inventary = () => {
  const [info, setInfo] = useState()
  return (
    <div className=' p-10 flex flex-col gap-6'>
      <h1 className="text-5xl font-bold">Inventario</h1>
      <div className=" flex gap-5 ">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-2xl text-slate-500">Ingresos Mensuales Promedio</p>
          <h2 className="text-3xl font-bold text-green-600"> $</h2>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-2xl text-slate-500">Ventas Mensuales Promedio</p>
          <h2 className="text-3xl font-bold"> </h2>
        </div>
      </div>
      <div>
        <div className="flex justify-end">
          < ModalCreate close={info} isOpen={setInfo} placement="top-center" />
        </div>
        <Table aria-label="Example table with dynamic content">
          <TableHeader columns={columns}>
            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

    </div>
  );
}

export default Inventary;
