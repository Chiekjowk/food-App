import React from 'react'
import './Navbar.css'
import { IoHomeOutline } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { GrCart } from "react-icons/gr";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = ({counter,toggle}) => {

    const Menu = () => (
        <>
            <li>
                <a href="/#">
                    <span className='icon'>
                        <IoHomeOutline fontSize={"35px"} />
                    </span>
                    <span className='text'>Home</span>
                </a>
            </li>
            <li>
                <a href="/#">
                    <span className='icon'>
                        <FaClipboardList fontSize={"35px"} />
                    </span>
                    <span className='text'>Menu</span>
                </a>
            </li>
            <li>
                <a href="/#">
                    <span className='icon'>
                        <FaRegHeart fontSize={"35px"} />
                    </span>
                    <span className='text'>Favourites</span>
                </a>
            </li>   
            <li>
                <a href="/#">
                    <span className='icon'>
                        <IoSettingsOutline fontSize={"35px"} />
                    </span>
                    <span className='text'>Settings</span>
                </a>
            </li>    
            <li>
                <a className='logout' href="/#">
                    <span className='icon-logout'>
                    <MdLogout fontSize={"35px"}/>
                    </span>
                    <span className='text'>Log Out</span>
                </a>
            </li>        
        </>
    )

  return (
    <div className='navbar-container'>
        <div className="left">
            <div className="name">
                <h1>Mus<span>Eat</span> Restaurant</h1>
            </div>
            <div className="search"> 
                <input type="text" placeholder='Search Menu here...'/>
            </div>
        </div>
        <div className="cart" onClick={()=> toggle()}>
            <GrCart fontSize={"35px"} className='cartt'/>
            <span className='zero'>{counter}</span>
        </div>
    </div>
  )
}

export default Navbar