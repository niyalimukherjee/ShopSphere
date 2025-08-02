import { useState } from 'react'
import CartIcon from './components/CartIcon/CartIcon'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>

    <CartIcon />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:id' element={<ProductDetail />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
    </>
  )
}

export default App
