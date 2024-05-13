import React from 'react'
import { Carrito } from './Carrito'

export const NavBar = () => {
  return (
    <nav className='nav'>
      <ul className='nav-menu'>
      <li ><a className='nav-link' href='#'>Home</a></li>
      <li ><a className='nav-link' href='#'>Productos</a></li>
      <li ><a className='nav-link' href='#'>Contacto</a></li>
      </ul>
  </nav>
  )
}
