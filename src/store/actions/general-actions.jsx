import * as ACTIONS_TYPE from '../actions-type'

export const guardarDataInicio = (campo, valor) => {
    return {
        type: ACTIONS_TYPE.GUARDAR_DATA_INICIO,
        payload: {
            campo,
            valor
        }
    }
}

export const guardarDataUsuario = (data) => {
    return {
        type: ACTIONS_TYPE.GUARDAR_DATA_USUARIO,
        payload: {
            data
        }
    }
}

export const actualizarPasoActual = (direccion) => {
    return {
        type: ACTIONS_TYPE.ACTUALIZAR_PASO_ACTUAL,
        payload: {
            direccion
        }
    }
}

export const borrarDataUsuario = () => {
    return {
        type: ACTIONS_TYPE.BORRAR_DATA_USUARIO
    }
}

export const guardarPlanes = (planes) => {
    return {
        type: ACTIONS_TYPE.GUARDAR_PLANES,
        payload: {
            planes
        }
    }
}

export const seleccionarPlan = (plan) => {
    return {
        type: ACTIONS_TYPE.SELECCIONAR_PLAN,
        payload: {
            plan
        }
    }
}