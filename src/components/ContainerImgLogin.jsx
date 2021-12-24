import React from 'react'
import "../css/pages/login.css";
import imagen from "../img/shoping.jpg";

const ContainerImgLogin = (props) => {

    const estilo = {
        "height":props.altura,
        "backgroundImage":`url(${imagen})`
    }

    return (
        
        <div style={estilo} className={"space-login__login__image-shoping"+ (props.subClass === undefined ? "":props.subClass) }>
            
        </div>
    )
}

export default ContainerImgLogin;
