import axios from "axios";


export async function ObtenerUsuarios(){
    try {
        const data =  await axios.get("http://localhost:8080/api/user/all")

        return data;
    } catch (error) {
        console.log(error);
    }
    
}

export default async function RegistrarUsuarios(datauser){
    try {
        const data =  await axios.post("http://localhost:8080/api/user/new" , datauser)

    } catch (error) {
        console.log(error);
    }
    
}

export async function IniciarSesion(correo,password){
    
    const req = await fetch("http://localhost:8080/api/user/" + correo + "/" + password ,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }

    })

    const datos = await req.json()
    
    return datos;
    
}

export const  ActualizarUsuario = async (data) => {
    try{
        const peticion = await axios.put("http://localhost:8080/api/user/update" , data)
    }

    catch(e){
        console.log(e);
    }
}



export async function BorrarUsuario(id){
    try{
        const peticion = await axios.delete("http://localhost:8080/api/user/" + id)
    }

    catch(e){
        console.log(e);
    }
}



export async function ObtenerProductos(){
    try {
        const data =  await axios.get("http://localhost:8080/api/cleaningproduct/all")

        return data;
    } catch (error) {
        console.log(error);
    }
    
}

export  async function RegistrarProductos(products){
    try {
        const data =  await axios.post("http://localhost:8080/api/cleaningproduct/new" , products)

    } catch (error) {
        console.log(error);
    }
    
}



export const  ActualizarProductos = async (data) => {
    try{
        const peticion = await axios.put("http://localhost:8080/api/cleaningproduct/update" , data)
    }

    catch(e){
        console.log(e);
    }
}



export async function BorrarProductos(id){
    try{
        const peticion = await axios.delete("http://localhost:8080/api/cleaningproduct/" + id)
    }

    catch(e){
        console.log(e);
    }
}