import React from 'react'
import '../../Styles/Section6style.css'
import Carousel from '../../assets/components/Testimonial_Carousel/Carousel'
import '../../Styles/Section2.css'

export default function Section6() {
    return (
        <>
            <div className=' bg-custom-blue mt-[-1vh] text-white font-slabo py-36 pl-16'>


                <div className='flex items-center space-x-72'>

                    <span className='w-2/5 '>
                    <span className='text-gray-500 slide-left'>Customer reviews</span>
                    <span className='slide-left flex text-9xl font-bold animate-[counter_7s_ease-in-out_forwards] tabular-nums [counter-set:_num_var(--num)] before:content-[counter(num)]'>+</span>
                    </span>

                    {/* Testimonial side */}
                    {/* <div className=' h-60 mr-12 ml-72 bg-custom-lightBlue p-12 text-gray-500 text-xl space-y-4' >
                        <h2>⭐⭐⭐⭐⭐</h2>
                        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia dolorem inventore obcaecati, nulla quidem perferendis nesciunt iste blanditiis earum cumque!</h2>
                    <button className='ml-72'> + </button>
                    <button className='ml-78'> - </button>
                    </div> */}
                    <div className='slide-top w-3/5'>
                        <Carousel />
                    </div>
                </div>
            </div>
        </>
    )
}
