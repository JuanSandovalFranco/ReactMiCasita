
export const usuarioRol = ()=>{

    if(localStorage.getItem("user") != null){

        const data = JSON.parse(localStorage.getItem("user"))
    
        if(data.type === "ADM"){
            window.location.href = "admin"
        }
    
        else{
            window.location.href = "usuario"
        }
    
    }

    else{
        
    }
}