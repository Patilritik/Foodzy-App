import React, { useRef, useState } from 'react'
import Button from '../button/Button'
import { NavLink } from 'react-router-dom'
import Cart from '../Cart/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { change } from '../../../Redux/Slices/ProductSlice'


function Header() {
    const cartDisplay = useSelector((state) => state.Product.value)
    const dispatch = useDispatch();
    const cartItemQty = useSelector((state) => state.CartItem.cart);
    console.log(cartDisplay)
    const cartItemSize = cartItemQty.length;
    console.log("cart item quantity", cartItemQty.length)

    return (
        <>
            <div class="font-slabo flex flex-wrap font-bold bg-gray-800 border-b-2 border-gray-700 ">

                {/* <!-- navbar --> */}
                <nav class="flex justify-between bg-transparent text-white  w-screen">
                    <div class="px-5 xl:px-12 py-6 flex w-full items-center">
                        <a class="text-3xl font-bold font-heading flex " href="#">
                            <img class="h-9" src="/Header Images/beef large.png" alt="logo" />
                            <h1 className='ml-3 font-slabo text-yellow-400'>Foodzy</h1>
                        </a>
                        {/* <!-- Nav Links --> */}
                        <ul class="hidden md:flex px-4 mx-auto  font-heading space-x-12 ">
                            <li><NavLink to="" className={({ isActive }) => `hover:text-yellow-400 duration-500 ${isActive ? "text-yellow-400" : ""}`} >Home</NavLink></li>
                            <li><NavLink to="/About" className={({ isActive }) => `hover:text-yellow-400 duration-500 ${isActive ? "text-yellow-400" : ""}`} >About</NavLink></li>
                            <li><NavLink to="/Our Menu" className={({ isActive }) => `hover:text-yellow-400 duration-500 ${isActive ? "text-yellow-400" : ""}`} >Our Menu</NavLink></li>
                            <li><NavLink to="/Food Gallary" className={({ isActive }) => `hover:text-yellow-400 duration-500 ${isActive ? "text-yellow-400" : ""}`} >Food Gallary</NavLink></li>
                            <li><NavLink to="/Contact" className={({ isActive }) => `hover:text-yellow-400 duration-500 ${isActive ? "text-yellow-400" : ""}`} >Contact</NavLink></li>

                        </ul>
                        {/* <!-- Header Icons --> */}
                        <div class="hidden xl:flex items-center space-x-5 ">
                            <a class="hover:text-gray-200" href="#">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg> */}
                            </a>
                            <a class="flex items-center  cursor-pointer hover:text-yellow-400 duration-500" onClick={() => dispatch(change())}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>

                                {/* cart  */}
                                {/* <button> */}
                                {
                                    cartItemSize ?
                                        <span class="flex absolute -mt-5 ml-4 " >
                                            <span class=" absolute inline-flex h-3 w-3 rounded-full animate-ping bg-yellow-400 opacity-75"></span> 
                                            <span class="relative inline-flex rounded-full h-3 w-3  bg-yellow-500">
                                            </span>
                                        </span>: ""
                                }
                                {/* </button> */}
                            </a>
                            <Button />

                        </div>
                            {cartDisplay === true ? <Cart /> : ""}
                    </div>





                    {/* <!-- Responsive navbar --> */}
                    {/* <a class="xl:hidden  flex mr-6 items-center " href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class=" h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span class="flex absolute -mt-5 ml-4">
                                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                                </span>
                            </span>
                        </a>
                        <span class=" navbar-burger self-center mr-12 " >
                            <svg xmlns="http://www.w3.org/2000/svg" class="xl:hidden h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </span> */}
                </nav>

            </div>

        </>
    )
}

export default Header
