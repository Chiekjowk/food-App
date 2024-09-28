import React from 'react'
import './Main.css'
import img1 from '../../assets/PngItem_52667.png'
import img2 from '../../assets/PngItem_1663694.png'
import img3 from '../../assets/PngItem_35652.png'
import img4 from '../../assets/PngItem_2010268.png'
import { data } from '../../data.js'
const Main = ({AddCart, addProduct}) => {
 const AddProductToCart = (value)=>{
    AddCart()
    addProduct(value)
 }
  return (
    <div className='main-container'>
        <div className="list-items">
            <div className="list-box">
                <img src={img1} alt="Burger" />
                <h2>Burgers</h2>
            </div>
            <div className="list-box">
                <img src={img2} alt="Burger" />
                <h2>Noodles</h2>
                
            </div>
            <div className="list-box">
                <img src={img3} alt="Burger" />
                <h2>Chicken</h2>
            </div>
            <div className="list-box">
                <img src={img4} alt="Burger" />
                <h2>Desserts</h2>
            </div>
        </div>
        <div className="products">
                {data.map((value) => {
                    return (
                        
                        <div className="product-box" key={value.id}>
                          
                            <div className="image">
                                <img src={value.img} alt="Burger" />
                            </div>
                            <div className="des ">
                                <div className="info" ></div>
                                <h3>{value.name}</h3>
                                <p>${value.price}</p>
                                <button className='btn' 
                                onClick={() => AddProductToCart(value)}
                                >Add to Cart</button>
                            </div>
                        </div>
                    )
                })}
        </div>
    </div>
  )
}

export default Main