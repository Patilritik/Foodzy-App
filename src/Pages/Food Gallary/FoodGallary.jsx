import React from 'react'
import Section4Data from '../../assets/DataItems/Section4Data'
import '../../Styles/Section2.css'
export default function FoodGallary() {
    return (
        <>
            <div className='w-full bg-food-gallary-image bg-left  flex justify-center items-center m-auto  bg-custom-lightBlue py-48'>

                <div className='bg-cover bg-center'>
                    <h1 className='text-white font-slabo text-5xl font-bold slide-top'>FOOD GALLARY</h1>
                    <img src="/Food Gallary/63bbdce866c70347fb6d68fe_gft.png" alt="" className='absolute right-0 slide-top duration-0' />
                    <img src="/Food Gallary/63bbdce866c703b5f96d68fd_yfdtftyg.png" alt="" className='absolute left-0 top-28 slide-left' />
                </div>

                {/* <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4"> */}
                {/* <div className=' justify-evenly'>
                    {Section4Data.map((item) => {
                        return <img src={item.image} class="rounded-t-lg w-72 h-96 hover:opacity-50 duration-500" />
                    })}

                    
                </div> */}

            </div>




            <div class="relative grid grid-cols-2 gap-2 bg-custom-lightBlue">
                {/* <div> */}
                {Section4Data.map((item) => (

                    <div className=''>
                        <h1 className='z-10 font-bold opacity-0 hover:opacity-100 transition-opacity duration-300 text-4xl text-white font-slabo text-center top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2   relative'>{item.name}</h1>
                        <div className='slide-top'>
                            <img src={item.image} class=" px-24 py-12 hover:opacity-50 duration-500" />
                        </div>
                    </div>
                ))}
              
            </div>


        </>
    )
}
