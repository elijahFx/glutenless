import React from 'react'
import "./header.css"
import logo from "../assets/logo.svg"
import menu from "../assets/menu.svg"

export default function Header() {
  return (
    <>
    <header className='header'>
        
        <a href="glutenless.by"><img src={logo} alt="logo" /></a>
        <img src={menu} alt="menu" className='menu' />
    </header>
    </>
  )
}
