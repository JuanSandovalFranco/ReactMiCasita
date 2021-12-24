import React from 'react'

const Boton = (props) => {
    return (
        <button onClick={props.onClick} style={{"backgroundColor":props.fondo}} id="{props.id}" className="button-iniciar-sesion mt-5 mb-5">{props.text}</button>
    )
}


export default Boton;