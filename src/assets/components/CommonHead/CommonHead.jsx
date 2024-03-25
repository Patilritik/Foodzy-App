import React from 'react'
import { Link } from 'react-router-dom'
import '../../../Styles/Section2.css'

export default function CommonHead(props) {
    return (
        <div>
            <div className='bg-hero-image bg-center bg-cover  bg-custom-lightBlue flex justify-between font-slabo text-white font-semibold '>
                <div className='my-24 mx-12 slide-left'>
                    <h1 className='text-5xl  '>{props.name}</h1>


                    <Link to="" >
                        <h3 className='inline text-sm m-4 text-gray-400 hover:text-yellow-400 transition-all duration-500'>HOME</h3>
                    </Link>
                    <Link to="/About">
                        <h3 className='inline text-sm text-gray-400 hover:text-yellow-400 transition-all duration-400'>{props.name}</h3>
                    </Link>
                </div>
                <div className='m-auto slide-right'>
                    <img src="/About/63bbdce866c70338266d68eb_Elements.png" alt="" />
                </div>
            </div>
        </div>
    )
}
