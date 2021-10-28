import {useCartContext} from '../context/cartContext'
import { Link } from "react-router-dom";
import './styles/cart.css'

const Cart = () => {
    const {cartList, deleteFromCart, precioTotal, borrarLista} = useCartContext()
   
    return (
        <>
        <div className="container mt-5 animate__animated animate__fadeIn">
        {cartList.length === 0?
        
        <div className="text-center cartVacio">
                <p>Tu carrito esta vacio</p> 
            <Link to='/'>   
                <button className="btn btn-outline-primary">Ver mas productos</button>
            </Link>
        </div>
        
        :  

        <>
        {cartList.map(item => <div className="container" key={item.item.id}>
            
            <div className="row borderr pb-2">
                <div className="col-12 col-md-2 text-center ">
                    <img src={item.item.pictureUrl} className="img-fluid" alt="" />
                </div>
            
                <div className="col-12 col-md-4 text-center title">
                    {item.item.title}        
                </div>

                <div className="col-12 col-md-2 text-center quantity">
                    Cantidad: {item.quantity}
                </div>

                <div className="col-12 col-md-2 text-center total">
                    ${item.quantity*item.item.price}
                </div>

                <div className="col-12 col-md-1 text-center deleteProduct">
                    <div onClick={()=>deleteFromCart(item)}><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="#cc0000" className="bi bi-trash sombra" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg></div>
                </div>
                
            </div>


        </div> )} 


                    <div className="subtotal d-flex flex-row-reverse">
                        Total: ${precioTotal()}
                    </div>

                <div className="d-flex justify-content-around mb-5 mt-5 botones">
                        <button className="btn btn-danger" onClick={() =>borrarLista()}>VACIAR CARRITO</button>

                        <Link to='/cart/checkout'>
                            <button className="btn btn-primary">FINALIZAR COMPRA</button>
                        </Link>

                        <Link to='/'>
                            <button className="btn btn-primary">MAS PRODUCTOS</button>
                        </Link>
                </div>
        </>
    
    }
    </div>
        </>
    )
}

export default Cart