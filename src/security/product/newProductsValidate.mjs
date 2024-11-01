export const registerValidate = ({ values }) => {

    let errors = {}


    values.dni.toString().replace(/[^0-9]*$/, '')

    if (values.dni.length === 0) {
        errors.dni = 'Debes introducir la cédula'
    }
    if (values.name.length === 0) {
        errors.name = 'Debes introducir el Nombre'
    }
    if (values.prince.length === 0) {
        errors.prince = 'Debes seleccionar un cargo'
    }
    return errors

}