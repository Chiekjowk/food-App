import React, { useEffect } from 'react'
import {useState} from 'react'
import './Home.css'
import Navbar from '.././Navbar/Navbar.jsx'
import Main from '.././Main/Main.jsx'
import Cart from '../Cart/Cart.jsx'

const Products = JSON.parse(window.localStorage.getItem('product'))

const Home = () => {
  const [counter,setCounter] = useState(Products ? Products.length : 0)
  const [product,setProduct] = useState(Products || [])
  const [hide,setHide] = useState(true)


  const toggle = () => {
    console.log("hide  is working")
    hide ? setHide(false) : setHide(true)
  }


  const addCart = () => {
    setCounter(counter + 1)
  }
  const addProduct = (newproduct) => {
    const check = product.find(item => item.id === newproduct.id)
    if(check){
      check.quantity += 1
      return setProduct([...product])
    } else {

      setProduct([...product, newproduct])
    }
    
  }
  const ClearAll= () => {
    setProduct([])
    setCounter(0)
  }
  const DeleteProduct = (newproduct) =>{
    const newProduct = product.filter(item => item.id !== newproduct.id)
    setProduct(newProduct)
  }
  useEffect(()=>{
    window.localStorage.setItem('product',JSON.stringify(product))
  },[product])

  return (
    <div className='home-container'>
        <Navbar counter={counter} toggle={toggle} />
        <Main AddCart={addCart} addProduct={addProduct}/>
        <Cart hide={hide} toggle={toggle} product={product} ClearAll={ClearAll} DeleteProduct={DeleteProduct}/>
    </div>
)
}

export default Home