import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from "../data/productos.json";
import { ItemDetail } from './ItemDetail';

const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [producto, setProducto] = useState(undefined);

    useEffect(() => {
        setProducto(data.find((prod) => prod.id === parseInt(itemId)));
    }, [itemId])
    

    return (
      <div className='item-detail-container'>
         {producto ? <ItemDetail producto={producto}  /> : "Espere..."} 
      </div>
    )
  }

export default ItemDetailContainer