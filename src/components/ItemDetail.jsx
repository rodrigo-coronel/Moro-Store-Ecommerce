import React from 'react'
import { useCartContext } from '../context/cartContext'
import ItemCount from './ItemCount'
import './styles/detail.css'

const ItemDetail = ({item}) => {
    
    const {addToCart} = useCartContext()

    const onAdd = (cant)=> {
        addToCart(item, cant)
        
    }
    return (
        <>
            <div className="container animate__animated animate__fadeIn">
                <div className="row">
                   
                                <div className="col-12 col-lg-6 detailColor">
                                    <div className="itemImage text-center">
                                        <img src={item.pictureUrl} className="img-fluid" alt=""/> 
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 detailColor">
                                    <div className="itemTitle text-center">
                                        {item.title}   
                                    </div>
                                    <div className="itemPrice text-center mt-3">
                                        ${item.price}    
                                    </div>
                                    <div className="itemCount text-center mt-5">
                                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                                    </div>
                                </div>

                                <div className="itemDescription detailColor">
                                    <p className="textDescription">
                                       {item.description}
                                    </p>
                                </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail
