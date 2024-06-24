import React from 'react'
import { NavBar } from './NavBar'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'

export const Header = () => {

  return (
    <header className="header">
         <Link to="/" className="logo-link">
        <img src="/img/foto1.jpeg" alt="Foto 1" className="logo-img" />
        <img src="/img/foto2.jpeg" alt="Foto 2" className="logo-img" />
        <img src="/img/foto3.jpeg" alt="Foto 3" className="logo-img" />
      </Link>
      <NavBar />
      <CartWidget />
    </header>
  )
}
