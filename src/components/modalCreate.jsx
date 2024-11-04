import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Select, SelectItem } from "@nextui-org/react";
import crear from "../assets/crear.png";
import { useFormik } from "formik";
import axios from "axios";
import { registerValidate } from "../security/product/newProductsvalidate.mjs";

const initialValues = { name: '', dni: '', paymentType: '', prince: '', reference: '', date: '' }
const methodPayArr = ['', 'pago movil', 'dolares', 'bolivares']

const ModalCreate = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { errors, touched, handleSubmit, handleChange, handleBlur, values: { name, dni, paymentType, prince, reference } } = useFormik({

        initialValues,
        onSubmit: async (value, { resetForm }) => {
            const { name, dni, paymentType, prince, reference } = value
            const date = new Date().toLocaleDateString()
            try {
                const data = await axios.post('http://localhost:3000/product', {
                    data: {
                        name,
                        dni,
                        paymentType,
                        prince,
                        reference,
                        date
                    }
                })
                console.log(data)
            } catch (error) {
                console.log(error)
            }
            window.location.replace('');
            return resetForm()

        },
        validate: (values) => registerValidate( {values} )

    })

    return (
        <>

            <Button className="bg-lime-300" onPress={onOpen}><img src={crear} className="w-[25px]" />Crear</Button>


            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <div className=" bg-[#656c1e]">
                            <ModalHeader className="flex justify-center font-bold text-2xl">Nuevo Registro</ModalHeader>
                            <form onSubmit={handleSubmit}>
                                {(errors.name && touched.name) && (<p className="bg-red-600 pl-4 text-white rounded-[3px] py-1">{errors.name}</p>)}
                                {(errors.dni && touched.dni) && (<p className="bg-red-600 pl-4 text-white rounded-[3px] py-1">{errors.dni}</p>)}
                                {(errors.prince && touched.prince) && (<p className="bg-red-600 pl-4 text-white rounded-[3px] py-1">{errors.prince}</p>)}

                                <ModalBody >
                                    <div className="flex w-full gap-3">
                                        <div className='flex flex-col w-full gap-2'>
                                            <Input
                                                name="name"
                                                label="Nombre"
                                                value={name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                required={true}
                                                placeholder="Introduce el Nombre"
                                            />

                                        </div>
                                        <div className='flex flex-col w-full gap-2'>
                                            <Input
                                                type="number"
                                                label="cedula"
                                                name="dni"
                                                value={dni}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="Introduce La cedula"
                                            />
                                        </div>

                                    </div>
                                    <div className='flex flex-col w-full gap-2'>

                                        <Select
                                            label="Tipo De Pago"
                                            name="paymentType"
                                            value={paymentType}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        >
                                            {methodPayArr.map(e => <SelectItem key={e}>{e}</SelectItem>)}
                                        </Select>

                                    </div>
                                    {
                                        paymentType == 'pago movil' ?
                                            <div>
                                                <Input

                                                    label="Referencia"
                                                    type="text"
                                                    name="reference"
                                                    value={reference}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                            </div>
                                            : null
                                    }
                                    <div>
                                        <Input
                                            label='Monto'
                                            type="number"
                                            name="prince"
                                            value={prince}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </div>

                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button color="primary" type="submit" onPress={onClose}>
                                        Action
                                    </Button>
                                </ModalFooter>
                            </form>
                        </div>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalCreate;
