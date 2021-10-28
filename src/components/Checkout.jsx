import React from 'react'
import {useState} from 'react'
import { useForm } from 'react-hook-form'
import {useCartContext} from '../context/cartContext'
import {getFirestore} from '../services/getFirebase'
import { Link } from "react-router-dom";
import  firebase  from 'firebase'
import "./styles/checkout.css"
import './styles/loader.css'

const Checkout = () => {
    const {cartList, precioTotal, borrarLista} = useCartContext()
    const [formData, setFormData] = useState({
        name: '',
        tel: '',
        email: ''
    })
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
    
        e.target.reset();
        let orden = {}
        orden.date = firebase.firestore.Timestamp.fromDate(new Date());      
        orden.buyer = formData
        orden.total = precioTotal(); 
        orden.items = cartList.map(cartItem => {
            const id = cartItem.item.id
            const title = cartItem.item.title
            const price = cartItem.item.price * cartItem.quantity
            
            return {id, title, price}
        })

    const db = getFirestore()
    db.collection('orders').add(orden)
    .then(resp => alert('tu codigo de compra es: ' + resp.id))
    .catch(err=> console.log(err))
    .finally(()=>
        setFormData({
        name: '',
        tel: '',
        email: ''
    }),
        borrarLista()
    )

    const itemsToUpdate = db.collection('items').where(
        firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i=> i.item.id)
    )

    const batch = db.batch();

    itemsToUpdate.get()
        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartList.find(item => item.item.id === docSnapshot.id).quantity
                })
            })    
        })
    }   

    function handleOnChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        
        <div className="container mt-5 animate__animated animate__fadeIn">
        {cartList.length === 0?
            <div className="text-center loader animate__animated animate__fadeIn">
                <p>Gracias por tu compra!</p> 
                <Link to='/'>   
                    <button className="btn btn-outline-primary">Ver mas productos</button>
                </Link>
            </div>

            :

            <form className="row contenedorForm" onSubmit={handleSubmit(onSubmit)} onChange={handleOnChange}>
                
                        <label>Nombre</label>
                        <input
                            className="form-control my-2" type='text' placeholder='ingrese su nombre' name='name' value={formData.name}    
                            {...register("name", { 
                                required:{
                                    value: true,
                                    message: 'Su nombre es requerido' 
                                }
                            })}   
                        />  
                        <span className="text-danger text-small d-block mb-2">
                            {errors?.name?.message}
                        </span>

                        <label>Telefono</label>
                        <input 
                            className="form-control my-2" type='number' placeholder='ingrese su nro de tel' name='tel' value={formData.tel}
                            {...register("tel", { 
                                required:{
                                    value: true,
                                    message: 'Su telefono es requerido' 
                                },
                                minLength:{
                                    value: 8,
                                    message: 'Su telefono debe tener al menos 8 numeros' 
                                }
                            })}
                        />
                        <span className="text-danger text-small d-block mb-2">
                            {errors?.tel?.message}
                        </span>

                        <label>Email</label>
                        <input 
                            className="form-control my-2" type='text' placeholder='ingrese su email' name='email' value={formData.email}
                            {...register("email", { 
                                required:{
                                    value: true,
                                    message: 'Su email es requerido' 
                                },
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "El formato no es correcto"
                                  }
                            })}         
                        /> 
                        <span className="text-danger text-small d-block mb-2">
                            {errors?.email?.message}
                        </span>
                        <label>Confirmar Email</label>
                        <input 
                            className="form-control my-2" type='text' placeholder='confirme su email' name='email2' 
                            {...register("email2", { 
                                required:{
                                    value: true,
                                    message: 'Su email es requerido' 
                                },
                                
                            })}         
                        /> 
                        <span className="text-danger text-small d-block mb-2">
                            {errors?.email2?.message}
                        </span>

                        <button className="btn btn-primary my-2 enviar">ENVIAR</button> 
                                       
            </form>
            }
        </div>
    )
}

export default Checkout
