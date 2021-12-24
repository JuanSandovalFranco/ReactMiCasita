import {useState,useEffect} from 'react';
import ContainerImgLogin from "../components/ContainerImgLogin";
import Input from "../components/Input"
import Boton from '../components/Boton';
import "../css/estilos.css"
import "../css/estilos2.css"
import imagen from "../img/logo.png"
import {verificarSesion} from "../js/verificarSesion"
import {ObtenerUsuarios} from "../js/api"
import {IniciarSesion} from "../js/api"
import { usuarioRol } from '../js/usuarioRol';




const Login = () => {


    const [usuario,setUsuario] = useState({})
    const [correo,setCorreo] = useState("")
    const [password,setPassword] = useState("")
    
   usuarioRol()
    
    console.log(verificarSesion())


    const verificar = ()=>{
    
        IniciarSesion(correo,password).then((data)=>{

            if (data.id != null && data.name != null) {
                
                let guardar = {
                    id:data.id,
                    name:data.name,
                    email:data.email,
                    cellPhone:data.cellPhone,
                    type:data.type,

                }

                guardar = JSON.stringify(guardar)

                localStorage.setItem("user" , guardar)

                const usuario = JSON.parse(localStorage.getItem("user"))

                if(usuario.type === "ADM"){
                    window.location.href = "admin"
                }

                else{
                    window.location.href = "usuario"
                }


            }

        })

    }
    
   

    return (

            <div className="space-login">

                <ContainerImgLogin subClase="image-shoping--altura-100" altura="100vh"></ContainerImgLogin>
                
                <div className="header__content-box">
                    <a href="/">
                        <img style={{"height":"10rem"}} src={imagen} className="header__content-box__image-logo" alt="Logo" width="120" />
                    </a>

                <div className="space-login__div-log-in">
                <h2 style={{"textAlign":"center"}} className="space-login__main-title margin-bottom-40">
                            Inicia Sesion
                </h2>
                <Input  nameclassName="mb-5 mt-5" text="Correo" type="Email" onChange={(e)=>{setCorreo(e.target.value)}} placeholder="Email"></Input>
                <Input nameclassName="mb-5 mt-5" text="Contraseña" type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Contraseña"></Input>
                <Boton onClick={verificar} text="Iniciar Sesion" id="IniciarSesion"></Boton>
                <a href="register.html">
                            <p className="link ya-tienes-cuenta">No tienes cuenta? Registrate</p>
                        </a>
                </div>

                </div>

            </div>


    )
}

export default Login;
