import React from 'react'
import '../App'
import flip from '../images/flipkart.png'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
        <div class="col-md-1">
          <img src={flip} width="120" class="flip" alt="..."/>
        </div>
        <div class="col-md-6">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder='Search For Products , Brands and More' class="inp"/>
        </div>
        <div class="col-md-4 per">
         <Link to="Form"><i class="fa-solid fa-store"></i>Become a Seller</Link>
         <i class="fa-regular fa-user"></i>Sign In
         <i class="fa-solid fa-cart-shopping"></i>Cart
         <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
    </>
  )
}
