import React, { useContext, useState } from 'react'
import Shoping_bag from '../Assest/Shoping_bag.png'
import Cart from '../Assest/Cart.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { shopContext } from '../../Context/ShopContext'

function Navbar() {
    const [menu,setMenu] = useState("Shop")
    const {getTotacartitem} = useContext(shopContext)
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={Shoping_bag}/>
        <p>GMart</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("Shop")}}> <Link style={ {textDecoration:"none"}} to='/'>Shop</Link> {menu==="Shop"?<hr/>:<div></div>}</li>
        <li onClick={()=>{setMenu("Mens")}}> <Link style={ {textDecoration:"none"}} to='/mens'> Mens </Link> {menu==="Mens"?<hr/>:<div></div>}</li>
        <li onClick={()=>{setMenu("Womens")}}> <Link style={ {textDecoration:"none"}} to='/womens'>  Women </Link>{menu==="Womens"?<hr/>:<div></div>}</li>
        <li onClick={()=>{setMenu("Kids")}}><Link style={ {textDecoration:"none"}} to='/kids'>Kids</Link> {menu==="Kids"?<hr/>:<div></div>}</li>             
      </ul>
      <div className='nav-logo-cart'>
      <button> <Link style={ {textDecoration:"none"}} to='/loginsignup'> Login</Link></button>
       <Link to='/cart'>  <img src={Cart}/>  </Link>      
      <div className='nav-cart-count'>{getTotacartitem()}</div>
      </div>
      
    </div>
  )
}

export default Navbar
