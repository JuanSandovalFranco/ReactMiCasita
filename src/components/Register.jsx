import React from 'react'
import ContainerImgLogin from "../components/ContainerImgLogin";
import Input from "../components/Input";
import Boton from '../components/Boton';
import "../css/estilos.css";
import "../css/estilos2.css";
import imagen from "../img/logo.png"
import { useForm } from 'react-hook-form';
import GenerarNuevoId from "../js/GenerarId"
import RegistrarUsuarios from "../js/api"

const Register = () => {

    const { register,handleSubmit , formState: { errors } } = useForm();

    const onSubmit = (data,e) => {
        
        
        if(data.password === data.repeatPassword){

            let dataToSend = {
                id:GenerarNuevoId(),
                identification:data.identification,
                name:data.name,
                address:data.address,
                cellPhone:data.cellPhone,
                email:data.email,
                password:data.password,
                zone:data.zone,
                type:data.type
            }

            RegistrarUsuarios(dataToSend)
            
            alert("Registrado con exito")

            e.target.reset()
        }

        else{
            alert("las contraseñas deben coincidir")
        }

        
    }


    const estilos = {
        "display":"flex",
        "flexDirection":"column",
        "alignItems":"center"
    }

    return (
        <div className="space-login">

            <ContainerImgLogin estilo="auto"></ContainerImgLogin>

            <div className="header__content-box">

            <a href="/">
                        <img style={{"height":"10rem"}} src={imagen} className="header__content-box__image-logo" alt="Logo" width="120" />
            </a>

            
            <form style={estilos} onSubmit={handleSubmit(onSubmit)}>

            <div className="box__input">
            <h2 className="mb-5 mt-5">Nombre</h2>
            <input {...register("name" ,{required:true , minLength:5})} type="text" className="header__content-box__input-login input" placeholder="Nombre" />
            {errors.name &&  <span className="text-danger text-md text-end d-block mt-3 mb-2 alerta">Campo obligatorio(5 o mas caracteres) &#9888;</span>}
            </div>

            <div className="box__input">
            <h2 className="mb-5 mt-5">Identificacion</h2>
            <input {...register("identification" ,{required:true})} type="number" className="header__content-box__input-login input" placeholder="Identificacion" />
            {errors.identification &&  <span className="text-danger mt-3 mb-2 text-end alerta d-block mb-2">Campo obligatorio &#9888;</span>}
            </div>
            
            <div className="box__input">
            <h2 className="mb-5 mt-5">Correo</h2>
            <input {...register("email" ,{required:true , minLength:5})} type="email" className="header__content-box__input-login input" placeholder="Email" />
            {errors.email &&  <span className="text-danger text-md text-end d-block mt-3 mb-2 alerta">Campo obligatorio(5 o mas caracteres) &#9888;</span>}
            </div>

            <div className="box__input">
            <h2 className="mb-5 mt-5">Direccion</h2>
            <input {...register("address" ,{required:true , minLength:5})} type="text" className="header__content-box__input-login input" placeholder="Direccion" />
            {errors.address &&  <span className="text-danger text-md text-end d-block mt-3 mb-2 alerta">Campo obligatorio(5 o mas caracteres) &#9888;</span>}
            </div>

            <div className="box__input">
            <h2 className="mb-5 mt-5">Numero de celular</h2>
            <input {...register("cellPhone" ,{required:true , minLength:5})} type="number" className="header__content-box__input-login input" placeholder="Numero" />
            {errors.cellPhone &&  <span className="text-danger text-md text-end d-block mt-3 mb-2 alerta">Campo obligatorio(5 o mas caracteres) &#9888;</span>}
            </div>

            <div className="box__input">
            <h2 className="mb-5 mt-5">Zona</h2>
            <input {...register("zone" ,{required:true})} type="text" className="header__content-box__input-login input" placeholder="Zona" />
            {errors.address &&  <span className="text-danger text-md text-end d-block mt-3 mb-2 alerta">Campo obligatorio(5 o mas caracteres) &#9888;</span>}
            </div>

            <h2 className="mb-5 mt-5" style={{"fontSize":"2rem"}}>Tipo</h2>
              <select value="ADM"  {...register("type")} style={{"width":"55%"}} className="header__content-box__input-login input">
                  <option value="ADM" selected>Administrador</option>
              </select>

            <div className="box__input">
            <h2 className="mb-5 mt-5">Contraseña</h2>
            <input {...register("password" ,{required:true , minLength:5})} type="password" className="header__content-box__input-login input" placeholder="password" />
            {errors.password &&  <span className="text-danger text-md text-end d-block mt-3 mb-2 alerta">Campo obligatorio(5 o mas caracteres) &#9888;</span>}
            </div>

            <div className="box__input">
            <h2 className="mb-5 mt-5">Repite la contraseña</h2>
            <input {...register("repeatPassword" ,{required:true , minLength:5})} type="password" className="header__content-box__input-login input" placeholder="Repita la contraseña" />
            {errors.repeatPassword &&  <span className="text-danger text-md text-end d-block mt-3 mb-2 alerta">Campo obligatorio(5 o mas caracteres) &#9888;</span>}
            </div>

               <Boton text="Registrarse" fondo="#0d6efd"></Boton>
            
            </form>

            </div>

           

        </div>

        
    )
}

export default Register;


