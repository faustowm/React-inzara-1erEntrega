import React from 'react'
import { Carrito } from './Carrito'

export const NavBar = () => {
  return (
    <nav className='nav'>
      <ul className='nav-menu'>
      <li ><a className='nav-link' href='#'>Home</a></li>
      <li ><a className='nav-link' href='#'>Carameleras</a></li>
      <li ><a className='nav-link' href='#'>Bandejas</a></li>
      <li ><a className='nav-link' href='#'>Premium</a></li>
      </ul>
  </nav>
  )
}
