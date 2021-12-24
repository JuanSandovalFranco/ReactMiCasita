import React,{useState,useEffect} from "react";
import "../css/layout/header.css";
import logo from "../img/logo.png"
 

const Header = () =>{

    return(

    <header className="header">
      <div className="header__container">
        <a href="/">
        <img src={logo} alt="Logo" width="70"/>
        </a>

        <ul className="header__container__lista-ingresar">
          <a href="users.html">
            <li className="header__container__lista-ingresar__i-usuario">
              Usuarios
            </li>
          </a>

          <a href="register">
            <li className="header__container__lista-ingresar__i-registrarse">
              Registrarse
            </li>
          </a>

          <a href="login">
            <li className="header__container__lista-ingresar__i-sesion">
              Iniciar Sesion &rarr;
            </li>
          </a>
        </ul>
      </div>
    </header>

    )
}

export default Header;