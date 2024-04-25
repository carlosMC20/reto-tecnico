import React, { useState, useContext } from "react"
import Select from "./Select"
import Input from "./Input"
import Checkbox from "./Checkbox"
import Button from "./Button"

import family from '../img/family.png'

import GeneralContext from "../store/contexts/general-context"
import * as GeneralActions from "../store/actions/general-actions"
import * as Funciones from "../utils/funciones"

const Home = () => {
    const { state: generalState, dispatch: generalDispatch } = useContext(GeneralContext)

    const [ isLoading, setIsLoading ] = useState(false)
    const [ privacy, setPrivacy ] = useState(false)
    const [ comunication, setComunication ] = useState(false)

    const onChangeDataInicial = (campo, valor) => {
        let nValue = valor !== '' && !isNaN(valor) ? parseInt(Funciones.obtenerReglaNumerico(valor)) : ''
        generalDispatch(GeneralActions.guardarDataInicio(campo, nValue))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        if (generalState.usuario.numDocumento.length < 8) {
            alert("Ingrese correctamente el número de documento")
            return
        }
      
        if (generalState.usuario.numCelular.length < 9) {
            alert("Ingrese correctamente el número de celular")
            return
        }
      
        if (!privacy) {
            alert("Debe aceptar la Política de Privacidad")
            return
        }
      
        if (!comunication) {
            alert("Debe aceptar la Política Comunicaciones Comerciales")
            return
        }

        try {
            setIsLoading(true)
            const urlUser = "https://rimac-front-end-challenge.netlify.app/api/user.json"
            let response = await fetch(urlUser)
            let data = await response.json()
            
            let edad = Funciones.obtenerEdadExacta(data.birthDay)
            const usuario = {
                edad,
                nombre: data.name,
                apellidos: data.lastName
            }

            generalDispatch(GeneralActions.guardarDataUsuario(usuario))
            generalDispatch(GeneralActions.actualizarPasoActual('next'))
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="home">
            <div className="home__image">
                <img src={family} alt="familia" className="home__image img" />
            </div>
            <form className="home__info info" onSubmit={handleSubmit}>
                <div className="info__group group">
                    <div className="group__title">
                        <span className="group__title--tag">Seguro Salud Flexible</span>
                        <h1 className="group__title--text">Creado para ti y tu familia</h1>
                    </div>

                    <div className="group__image">
                        <img src={family} alt="familia" />
                    </div>
                </div>

                <div className="info__separator" />

                <p className="info__p">
                    Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
                    asesoría. 100% online.
                </p>
                <div className="info__controls">
                    <div className="info__controls--group">
                        <Select/>
                        <Input
                            type="text"
                            label="Nro. de documento"
                            name="nro_document"
                            border={true}
                            value={generalState.usuario.numDocumento !== null ? generalState.usuario.numDocumento : ''}
                            onChange={(value) => onChangeDataInicial('numDocumento', value)}
                            maxLength={8}
                            error={true}
                        />
                    </div>
                    <Input
                        type="text"
                        label="Celular"
                        name="phone"
                        value={generalState.usuario.numCelular !== null ? generalState.usuario.numCelular : ''}
                        onChange={(value) => onChangeDataInicial('numCelular', value)}
                        maxLength={9}
                        error={true}
                    />
                </div>

                <div className="info__terms">
                    <Checkbox
                        label="Acepto la Política de Privacidad"
                        checked={privacy}
                        setChecked={setPrivacy}
                    />
                    <Checkbox
                        label="Acepto la Política Comunicaciones Comerciales"
                        checked={comunication}
                        setChecked={setComunication}
                    />

                    <a
                        href="https://imagescdn.rimac.com/blt446954286ce4e6ec/61bb4b60aac9397f423166be/TERMINOS-Y-CONDICIONES.pdf"
                        className="info__terms--a"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Aplican Términos y Condiciones.
                    </a>
                </div>

                <Button title="Cotiza aquí" isLoading={isLoading} />
            </form>
        </section>
    )
}

export default Home