import React from 'react'
import { useForm } from "react-hook-form";


const Input = (props) => {

    const {register , errors , handleSubmit} = useForm();

    return (
        <div className="box__input">
            <h2 className={props.nameClass + " " + "mb-5"}>{props.text}</h2>
            <input name={props.name} type={props.type} onChange={props.onChange} className="header__content-box__input-login input" id={props.id} placeholder={props.placeholder} />
        </div>
    )
}


export default Input;