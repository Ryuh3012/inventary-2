export const loginValidate = ({
    values,
}) => {
    let errors = {}
    values.dni.toString().replace(/[^0-9]*$/, '')

    if(values.dni.length === 0) {
        errors.dni = 'Debes introducir la cédula'
    }

    if(values.password.length === 0) {
        errors.password = 'Debes introducir la contraseña'
    }
    return errors

}