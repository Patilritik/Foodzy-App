import React from 'react'
import Button from '../../assets/components/button/Button'
import '../../Styles/Section2.css'

function Section5() {
  return (
    <div className='h-fit w-full bg-Food-delivery-image bg-bottom bg-cover text-white font-slabo py-24'>
        
        <div className='text-4xl text-white font-bold right-40  -rotate-45 absolute mt-0 mr-24'>
            Fast & Free<br/> <span className=' bg-yellow-500 text-4xl p-1 '>DELIVERY</span>
        </div>
        <div className='pl-8  slide-left'>
        <h1 className='text-5xl font-bold '>Food delivering <br/>amazing experience</h1>
        <p className='text-gray-500 text-md font-bold mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,<br/> perspiciatis at minus autem quia impedit?</p>
        </div>
        <div className='mt-12 ml-9 slide-left'>
            <Button/>
        </div>
      
    </div>
  )
}

export default Section5
