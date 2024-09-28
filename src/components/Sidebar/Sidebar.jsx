import React from 'react'
import {useState} from 'react'
import './Sidebar.css'
import logo from '../../assets/PngItem_3334789.png'
import { IoHomeOutline } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
const Sidebar = () => {
    
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
    <div className='sidebar-container'  >
        <div className="logo">
            <img src={logo}  alt="logo"/>
            <h1>Mus<span>Eat</span></h1>
        </div>
        <div className="menu">
            <ul>
               <Menu/>
            </ul>
        </div>
       
    </div>
  )
}

export default Sidebar