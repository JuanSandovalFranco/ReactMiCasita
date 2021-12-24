import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import RegistrarUsuarios, { ActualizarUsuario, BorrarUsuario, ObtenerUsuarios } from '../js/api'
import { datosUser } from '../js/datosUser'
import GenerarNuevoId from '../js/GenerarId'
import BarraUsuario from './BarraUsuario'
import Header from './Header'

const User = () => {

    const {register , handleSubmit , formState:{errors}} = useForm()

    const [usuarios,setUsuarios] = useState([])
    const [actualizar,setActualizar] = useState({})
    const [ObjetoActualizar , setObjetoActualizar] = useState({})
    const [clickRegistrar,setclickRegistrar] = useState(false)

    function setUserFields(user){
        document.getElementById("value-ident").value = user.identification
        document.getElementById("value-name").value = user.name
        document.getElementById("value-email").value = user.email
        document.getElementById("value-address").value = user.address
        document.getElementById("value-cellphone").value = user.cellPhone
        document.getElementById("value-type").value = user.type
        document.getElementById("value-zone").value = user.zone
        document.getElementById("value-password").value = user.password

        alert("revisa los campos estan listos para actualizar ! ")

      setActualizar({id:user.id})
      
      var objeto = Object.assign({},actualizar)
        

    }

    const onSubmit = (data,e)=>{

        console.log(clickRegistrar);
    
        if(clickRegistrar === true){

            let newUser = {
                id:GenerarNuevoId()
            }
    
           let object = Object.assign({},newUser,data)
    
            RegistrarUsuarios(object)
            
            alert("Registrado con exito")
    
            console.log(e);

            setclickRegistrar(false)

        }
        
        else{

            const dataUser = Object.assign({},actualizar,data)
            ActualizarUsuario(dataUser)
            alert("Actualizado con exito")
            
        }

        e.target.reset()
        window.location.reload()
        

        

    }

    
    const remove = (id) =>{
        
       if(window.confirm("esta seguro de eliminar este usuario? , esta accion es irreversible") == true){
           BorrarUsuario(id)
           window.location.reload()   
       }
        
    }


    useEffect(() => {
        
        console.log("holaa")

        ObtenerUsuarios().then((data)=>{
            const usuariosData = data.data;
            
            setUsuarios(usuariosData)
        })
        
    }, [])



    return (
        <>
        
        <Header></Header>
    <div className="box-panel">
      <BarraUsuario name="jonh" email="tupapa"></BarraUsuario>
        <div className="content">
                    

        
    <form onSubmit={handleSubmit(onSubmit)}>   
        <div className="box__cont__user">
          <h2 className="box__title margin-bottom-40">Añade un usuario</h2>
          <div className="box-box-input">
            <h2>Identificador</h2>
            <input
              id="value-ident"
              {...register("identification" , {required:true, min:1})}
              type="number"
              className="box__input--values"
              placeholder="Identificador"
              
            />
            {errors.identification &&  <span className="text-danger text-md text-end d-block mt-3 mb-2 alerta">Campo obligatorio&#9888;</span>}
          </div>

          <div className="box-box-input">
            <h2>Nombre</h2>
            <input
              id="value-name"
              {...register("name" , {required:true, min:1})}
              type="text"
              className="box__input--values"
              placeholder="Nombre"
              
            />
            {errors.name &&  <span className="text-danger text-md text-end d-block mt-3 mb-2 alerta">Campo obligatorio&#9888;</span>}

          </div>
          <div className="box-box-input">
            <h2>Email</h2>
            <input
              id="value-email"
              {...register("email" , {required:true, minLength:6})}
              type="email"
              className="box__input--values"
              placeholder="Email"
              
            />
            {errors.email &&  <span className="text-danger text-md text-end d-block mt-3 mb-2 alerta">Campo obligatorio&#9888;</span>}
          </div>

          <div className="box-box-input">
            <h2>Direccion</h2>
            <input
              id="value-address"
              {...register("address" , {required:true, min:1})}
              type="text"
              className="box__input--values"
              placeholder="Direccion"
              
            />
            {errors.address &&  <span className="text-danger text-md text-end d-block mt-3 mb-2 alerta">Campo obligatorio&#9888;</span>}
          </div>

          <div className="box-box-input">
            <h2>Numero de telefono</h2>
            <input
              id="value-cellphone"
              {...register("cellPhone" , {required:true, min:1})}
              type="number"
              className="box__input--values"
              placeholder="Numero de telefono"
              
            />
            {errors.cellPhone &&  <span className="text-danger text-md text-end d-block mt-3 mb-2 alerta">Campo obligatorio&#9888;</span>}
          </div>

          <div className="box-box-input">
            <h2>Tipo de usuario</h2>
            <select {...register("type" , {required:true, min:1})} id="value-type" className="box__input--values" >
              <option value="COORD">Coordinador de Zona</option>
              <option value="ASE">Asesor Comercial</option>
              <option value="ADM">Administrador</option>
            </select>
            {errors.type &&  <span className="text-danger text-md text-end d-block mt-3 mb-2 alerta">Campo obligatorio&#9888;</span>}
          </div>

          <div className="box-box-input">
            <h2>Zona</h2>
            <input
              id="value-zone"
              {...register("zone" , {required:true, min:1})}
              type="text"
              className="box__input--values"
              placeholder="Zona"
            />
            {errors.zone &&  <span className="text-danger text-md text-end d-block mt-3 mb-2 alerta">Campo obligatorio&#9888;</span>}
          </div>

          <div className="box-box-input">
            <h2>Contraseña</h2>
            <input
              id="value-password"
              {...register("password" , {required:true, min:1})}
              type="password"
              className="box__input--values"
              placeholder="Contraseña"

            />
            {errors.password &&  <span className="text-danger text-md text-end d-block mt-3 mb-2 alerta">Campo obligatorio&#9888;</span>}
          </div>

          

          <div className="container grp-btn">
            <button onClick={(e)=>{setclickRegistrar(true)}} className="button btn btn-primary mx-4">
              Agregar
            </button>
          </div>
          <div className="container grp-btn">
          <button className="button btn btn-warning">
              Actualizar
            </button>
          </div>
          

        </div>

    </form>
    


        <div id="datos-tabla">
          <table id="data-users" cellSpacing="0">
            <thead>
                
              <tr>
                

                <th>Identificacion</th>
                <th>Nombre</th>
                <th>Direccion</th>
                <th>Telefono</th>
                <th>Email</th>
                <th>Zona</th>
                <th>Tipo</th>
                
            
              </tr>
                
            </thead>

            <tbody id="content-to-add">
                
               
            {


                        usuarios.map((item, index) =>

                        
                        <tr key={item.id}>
                            <td>{item.identification}</td>
                            <td>{item.name}</td>
                            <td>{item.address}</td>
                            <td>{item.cellPhone}</td>
                            <td>{item.email}</td>
                            <td>{item.zone}</td>
                            <td>{item.type}</td>
                            <td>{item.index}</td>

                            <td>
                                <button onClick={(e)=>{ setUserFields(item) }} className='btn btn-success'>Actualizar</button>
                                <button onClick={(e)=>{ remove(item.id)}} className='btn btn-danger'>Eliminar</button>
                            </td>

                        </tr>

            
            )



            }

            </tbody>
          </table>
        </div>


        </div>

    </div>

        
        </>
    )
}

export default User;
