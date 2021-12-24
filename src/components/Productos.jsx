import React, { useEffect, useState } from 'react'
import { datosUser } from '../js/datosUser'
import BarraUsuario from './BarraUsuario'
import Header from './Header'
import imgShop from "../img/catalogo.jpg"
import { useForm } from 'react-hook-form'
import { ActualizarProductos, BorrarProductos, ObtenerProductos, RegistrarProductos } from '../js/api'
import "../css/productos.css"

const Productos = () => {

    const {register , handleSubmit , formState:{errors}} = useForm()

    const [productos,setProductos] = useState([])
    const [clickRegistrar,setclickRegistrar] = useState(false)

    function setProductFields(product){

        document.getElementById("value-reference").value = product.reference
        document.getElementById("value-brand").value = product.brand
        document.getElementById("value-category").value = product.category
        document.getElementById("value-description").value = product.description
        document.getElementById("value-availability").value = product.availability
        document.getElementById("value-price").value = product.price
        document.getElementById("value-quantity").value = product.quantity
        document.getElementById("value-photography").value = product.photography

        alert("revisa los campos estan listos para actualizar ! ")
    

    }

    const remove = (id) =>{
        
        if(window.confirm("esta seguro de eliminar este usuario? , esta accion es irreversible") == true){
          console.log(id) 
          BorrarProductos(id)
           
        }
         
     }

    const onSubmit = (data,e)=>{

        
        console.log(JSON.stringify(data))
    
        if(clickRegistrar === true){

           
            RegistrarProductos(data)
            
            alert("Registrado con exito")
    
            console.log(e);

            setclickRegistrar(false)

        }
        
        else{

            ActualizarProductos(data)
            alert("Actualizado con exito")
            
        }

        e.target.reset()
        
        

        

    }


    useEffect(() => {
        

        ObtenerProductos().then((data)=>{
            const usuariosData = data.data;
            
            setProductos(usuariosData)
        })
        
    }, [])


    return (
        <>
    
    <Header></Header>

    <div className="box-panel">
      <BarraUsuario name="jonh" email="tupapa"></BarraUsuario>
        
        <div className="content">
                    
        <div className="box-catalog-me">
                <img className="img-catalogo" src={imgShop} alt="" width={400}/>
                <div className="box-message">
                <h2 className="title-catalogo mb-5">Agrega Productos</h2>
                <p className="p-catalog">Añade , Actualiza y elimina productos , haz que tu tienda luzca increible como una gran vitrina fisica</p>
                </div>
            </div>    


    <form className='col-md-' onSubmit={handleSubmit(onSubmit)}>   
    <div className="box-catalog-form">
        
          <div className="box-each-content">
            <h2>Referencia</h2>
            <input
              id="value-reference"
              {...register("reference" , {required:true, min:1})}
              type="text"
              className="box__input--values"
              placeholder="Referencia"
              
            />
            {errors.reference &&  <span className="text-danger text-md text-end d-block mt-3 mb-2 alerta">Campo obligatorio&#9888;</span>}
          </div>

          <div className="box-each-content">
            <h2>Marca</h2>
            <input
              id="value-brand"
              {...register("brand" , {required:true, min:1})}
              type="text"
              className="box__input--values"
              placeholder="Nombre"
              
            />
            {errors.brand &&  <span className="text-danger text-md text-end d-block mt-3 mb-2 alerta">Campo obligatorio&#9888;</span>}

          </div>
          <div className="box-each-content">
            <h2>Categoria</h2>
            <input
              id="value-category"
              {...register("category" , {required:true, minLength:6})}
              type="text"
              className="box__input--values"
              placeholder="Categoria"
              
            />
            {errors.category &&  <span className="text-danger text-md text-end d-block mt-3 mb-2 alerta">Campo obligatorio&#9888;</span>}
          </div>

          <div className="box-each-content">
            <h2>Descripcion</h2>
            <input
              id="value-description"
              {...register("description" , {required:true, min:1})}
              type="text"
              className="box__input--values"
              placeholder="Disponibilidad"
              
            />
            {errors.description &&  <span className="text-danger text-md text-end d-block mt-3 mb-2 alerta">Campo obligatorio&#9888;</span>}
          </div>

          <div className="box-each-content">
            <h2>Precio</h2>
            <input
              id="value-price"
              {...register("price" , {required:true, min:1})}
              type="number"
              className="box__input--values"
              placeholder="Precio"
              
            />
            {errors.price &&  <span className="text-danger text-md text-end d-block mt-3 mb-2 alerta">Campo obligatorio&#9888;</span>}
          </div>

          <div className="box-each-content">
            <h2>Disponibilidad</h2>
            <select {...register("availability" , {required:true, min:1})} id="value-availability" className="box__input--values" >
              <option value="true">Verdad</option>
              <option value="false">Falso</option>
            </select>
            {errors.availability &&  <span className="text-danger text-md text-end d-block mt-3 mb-2 alerta">Campo obligatorio&#9888;</span>}
          </div>

          <div className="box-each-content">
            <h2>Cantidad</h2>
            <input
              id="value-quantity"
              {...register("quantity" , {required:true, min:1})}
              type="number"
              className="box__input--values"
              placeholder="Cantidad"
            />
            {errors.quantity &&  <span className="text-danger text-md text-end d-block mt-3 mb-2 alerta">Campo obligatorio&#9888;</span>}
          </div>

          <div className="box-each-content">
            <h2>Fotografia</h2>
            <input
              id="value-photography"
              {...register("photography" , {required:true, min:1})}
              type="text"
              className="box__input--values"
              placeholder="Contraseña"

            />
            {errors.photography &&  <span className="text-danger text-md text-end d-block mt-3 mb-2 alerta">Campo obligatorio&#9888;</span>}
          </div>

          

          <div className="container grp-btn">
            <button onClick={(e)=>{setclickRegistrar(true)}} className="button btn btn-primary mx-4">
              Agregar
            </button>
            <button className="button btn btn-warning">
              Actualizar
            </button>
          </div>
     
</div>
</form> 
    


            <div id="datos-tabla">
                <table id="data-product" cellSpacing="0">
                    <thead>
                        <tr>
                            <td>Referencia</td>
                            <td>Marca</td>
                            <td>Categoria</td>
                            <td>Descripcion</td>
                            <td>Precio</td>
                            <td>Disponibilidad</td>
                            <td>Cantidad</td>
                            <td>Imagen</td>
                        </tr>
                    </thead>

                    <tbody id="content-to-add">
                    {


                    productos.map((item, index) =>
                    
        

                    <tr key={item.reference}>
                        <td>{item.reference}</td>
                        <td>{item.brand}</td>
                        <td>{item.category}</td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                        <td>{`${item.availability}`}</td>
                        <td>{item.quantity}</td>
                        <td><img src={item.photography} alt="" width={250} /></td>

                        <td>
                            <button onClick={(e)=>{ setProductFields(item) }} className='btn btn-success'>Actualizar</button>
                            <button onClick={(e)=>{ remove(item.reference)}} className='btn btn-danger'>Eliminar</button>
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

export default Productos;
