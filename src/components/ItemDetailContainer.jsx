import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { ItemDetail } from './ItemDetail';
import "./css/main.css"

const ItemDetailContainer = () => {

  let { itemId } = useParams();
  let [producto, setProducto] = useState(undefined);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "productos", itemId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No existe el documento");
        }
      } catch (error) {
        console.error("Error al recuperar el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [itemId]);


  return (
    <div className='item-detail-container'>
      {producto ? <ItemDetail producto={producto} /> : "Espere..."}
    </div>
  )
}

export default ItemDetailContainer