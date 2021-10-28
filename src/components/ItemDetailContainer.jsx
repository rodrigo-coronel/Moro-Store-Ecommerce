import {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import { getFirestore } from '../services/getFirebase'
import ItemDetail from './ItemDetail'
import Spinner from 'react-bootstrap/Spinner'
import './styles/loader.css'

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState({})
    const {idProducto} = useParams();

    useEffect(() => {
        if (idProducto){
        const dbQuey = getFirestore()
        dbQuey.collection('items').doc(idProducto).get()
        .then(resp => {
            setItem({id: resp.id, ...resp.data()})
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    } else {
        const dbQuey = getFirestore()
            dbQuey.collection('items').get()
            .then(resp => {
                setItem( resp.docs.map(producto => ({id: producto.id, ...producto.data()})))
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }
    
    }, [idProducto])

    return (
        <>
        
            <div className="mt-5 ">
                {loading ?
                (<div  className="container text-center loader">
                    <Spinner animation="border" variant="primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
                ) : <ItemDetail item={item} />}
            </div>

        </>
    )
}

export default ItemDetailContainer
