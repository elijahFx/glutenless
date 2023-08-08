import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Front from './components/Front'
import Shop from './components/Shop'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Header/>}></Route>
    <div className='wrapper'>
    <Header />
    <Front />
    <Shop />
    <Footer />
    </div>
    </Routes>
  </BrowserRouter>,
)
