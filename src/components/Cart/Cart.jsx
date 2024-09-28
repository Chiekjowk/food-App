import './Cart.css'
import { IoCloseOutline } from "react-icons/io5";
import { data } from '../../data.js'


const Cart = ({hide,toggle,product,ClearAll,DeleteProduct}) => {
    const total = product.reduce((acc, item) => acc + (+item.price * item.quantity), 0)
   console.log(data)

  return (
    <div  className="cart-container" style={{right: hide ? "-390px" : 0}} >
        <IoCloseOutline onClick={()=> toggle()}/>
        <h1>You Orders:</h1>
        <div className="total">
            The Total : ${total.toFixed(2)}
        </div>
        <button className='clr-btn' onClick={()=> ClearAll()}>clear all</button>
        <div className="carrt">
            {product && product.map((item)=> {
                return (
                    <div className="cart-item" key={item.id}>
                        <div className="cart-image">
                            <img src={item.img} alt="image"/>
                        </div>
                        <div className="cart-details">
                            <h3>{item.name}</h3>
                            <p>({item.quantity})</p>
                            <p>$ {item.price}</p>
                            <button className='del-btn' onClick={()=> DeleteProduct(item)}>Delete</button>
                        </div>
                     
                    </div>
                )
            })}
            <div className="checkout">
                <button className='place'>Place an order</button>
            </div>
        </div>
        
        
    </div>
  )
}

export default Cart