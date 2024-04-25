import React, { useContext } from "react"

import iconHome from "../img/iconHome.svg"
import Button from "./Button"

import GeneralContext from "../store/contexts/general-context"
import * as GeneralActions from "../store/actions/general-actions"

const ListOfPlans = ({ plans }) => {
    const { dispatch: generalDispatch } = useContext(GeneralContext)

    const seleccionarPlan = (plan) => {
        generalDispatch(GeneralActions.seleccionarPlan(plan))
        generalDispatch(GeneralActions.actualizarPasoActual('next'))
    }

    return (
        <div className="list__plans">
            {plans.map((plan, index) => {
                const { descripcion, nombre, precio } = plan
                return (
                    <div key={index} className="plan">
                        <div className="plan__header">
                            <div className="group">
                                <h1 className="group__name">{nombre}</h1>
                                <h6 className="group__h6">COSTO DEL PLAN</h6>
                                <span className="group__price">$ {precio} al mes</span>
                            </div>
                            <img src={iconHome} alt="iconHome" />
                        </div>

                        <div className="plan__separator" />

                        <ul>
                            {descripcion.map((string, index) => (
                                <li key={index}>{string}</li>
                            ))}
                        </ul>

                        <Button
                            color="secondary"
                            title="Seleccionar Plan"
                            onClick={() => seleccionarPlan(plan)}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default ListOfPlans