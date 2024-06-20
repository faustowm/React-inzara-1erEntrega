import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const Carrito = () => {

  const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext)

  return (
    <div>
      {carrito.map((prod) => <h1 key={prod.id}>{prod.nombre}: ${prod.precio}: {prod.descripcion}</h1>)}
      {
        carrito.length > 0 ?
        <>
          <h2>Total: ${calcularTotal()}</h2>
          <button onClick={vaciarCarrito}>Vaciar carrito</button>
        </> :
        <h2>¡El carrito está vacío, pero tu hogar no tiene por qué estarlo! 🌟🕯️ </h2>
      }
       </div>
  )
}


