import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const ItemListContainer = () => {

  let { categoryId } = useParams();
  let [productos, setProductos] = useState([]);
  let [titulo, setTitulo] = useState("Productos");
  
  useEffect(() => {
    const productosRef = collection(db, "productos");

    getDocs(productosRef)
      .then((res) => {
        const fetchedProducts = res.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
        setProductos(fetchedProducts);
      })
     
  }, [categoryId]);
  

  return (
    <div className="item-list-container">
      <h1>{titulo}</h1>
      <ItemList productos={productos} />
    </div>
  )
}