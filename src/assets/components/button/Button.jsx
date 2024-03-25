import React from 'react'
import { Link } from 'react-router-dom'

function Button() {
    return (
        <div>
            <Link to="/Our Menu">

            <button class="rounded-md cursor-pointer border-none overflow-hidden relative z-100 border group px-2 py-2 bg-red-600">
                <span class="relative z-10 text-white group-hover:text-black text-sm font-bold   duration-500">ORDER ONLINE</span>
                
                <span class="absolute w-full h-full bg-yellow-500  -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                <span class="absolute w-full h-full bg-yellow-500  -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
            </button>
            </Link>
        </div>
    )
}

export default Button
