import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import crear from "../assets/crear.png";
import { useFormik } from "formik";
import axios from "axios";

const initialValues = { name: '', dni: '', paymentType: '', prince: '', reference: '', date: '', product: '' }
const methodPayArr = ['', 'pago movil', 'dolares', 'bolivares']

const ModalCreate = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { handleSubmit, values, handleChange, handleBlur } = useFormik({

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

        }

    })

    return (
        <>

            <Button className="bg-lime-300" onPress={onOpen}><img src={crear} className="w-[25px]" />Crear</Button>


            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex justify-center font-bold text-2xl">Nuevo Registro</ModalHeader>
                            <form onSubmit={handleSubmit}>
                                <ModalBody>

                                    <div className="flex w-full gap-3">
                                        <div className='flex flex-col w-full gap-2'>
                                            <label htmlFor="name">Nombre</label>
                                            <input
                                                className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="Introduce el nombre"
                                            />
                                        </div>
                                        <div className='flex flex-col w-full gap-2'>
                                            <label htmlFor="dni">Cedula</label>
                                            <input
                                                type="number"
                                                className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                                                name="dni"
                                                value={values.dni}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="Introduce La cedula"
                                            />
                                        </div>

                                    </div>
                                    <div className='flex flex-col w-full gap-2'>
                                        <label htmlFor="paymentType">Tipo De Pago </label>
                                        <select
                                            className='w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]'
                                            name="paymentType"
                                            value={values.paymentType}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        >
                                            {
                                                methodPayArr.map(e => <option key={e} value={e}>{e}</option>)
                                            }
                                        </select>
                                    </div>
                                    {
                                        values.paymentType == 'pago movil' ?
                                            <div>
                                                <label htmlFor="reference">Referencia</label>
                                                <input
                                                    className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"

                                                    type="text"
                                                    name="reference"
                                                    value={values.reference}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                            </div>
                                            : null
                                    }
                                    <div>
                                        <label htmlFor="">Monto</label>
                                        <input
                                            type="number"
                                            className='w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]'
                                            name="prince"
                                            value={values.prince}
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
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalCreate;
