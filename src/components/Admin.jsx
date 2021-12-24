import React from 'react'
import BarraUsuario from "./BarraUsuario"
import Header from "./Header"
import "../css/pages/panel.css"
import { datosUser } from '../js/datosUser'



const Admin = () => {
    return (

        <>

    <Header></Header>
    <div className="box-panel">
      <BarraUsuario name="jonh" email="tupapa"></BarraUsuario>
        <div class="content">
                    
            <div class= "alert alert-success alt-custom">
                <h3 id="nameusuario">Bienvenido de nuevo administrador      {datosUser().name}</h3>
            </div>

        </div>

    </div>
        
        
        </>
        


    )
}

export default Admin
