import { ObtenerUsuarios } from "./api";


export const verificarSesion = async() =>{

    var verify = false;

    const datos = await ObtenerUsuarios()

    if(localStorage.getItem("user") != null){
        datos.data.map((e)=>{
            console.log(e)
        })
    }

    else{

    }
        
}

