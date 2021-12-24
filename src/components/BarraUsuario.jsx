import React from 'react'
import imageDefault from  "../img/user.png"
import iconCerrarSesion from "../img/cerrar-sesion.png"
import logOut from '../js/LogOut'


const BarraUsuario = (props) => {

    const LogOut = () =>{
        localStorage.removeItem("user");
        logOut()
    }

    return (
    <div className="navbar-user">
           
        <img className="user-icon" src={imageDefault} alt=""/>
        <p id="userName">{props.name}</p>
        <p id="userEmail">{props.email}</p>
       
        <ul className="mt-4">
            <li><a href="/users">Usuarios</a></li>
            <li><a href="/productos">Productos</a></li>
        </ul>

        <div className="box-log-out">
            <img onClick={LogOut} src={iconCerrarSesion} alt="" className="log-out-icon" />
        </div>
    </div>
    )
}

export default BarraUsuario
