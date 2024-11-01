export const registerValidate = ({ values }) => {

    let errors = {}

    
    values.dni.toString().replace(/[^0-9]*$/, '')

    if (values.dni.length === 0) {
        errors.dni = 'Debes introducir la cédula'
    }
    if (values.password.length === 0) {
        errors.password = 'Debes introducir la contraseña'
    }
    if (values.name.length === 0) {
        errors.name = 'Debes introducir el Nombre'
    }
    if (values.post.length === 0) {
        errors.post = 'Debes seleccionar un cargo'
    }
    return errors

}