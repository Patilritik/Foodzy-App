import React, { useState } from 'react'
import '../../../Styles/Section2.css'

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0)


    const Testimonial = ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia dolorem inventore obcaecati, nulla quidem perferendis nesciunt iste blanditiis earum cumque!",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae veritatis nisi in alias expedita rerum magni error quis autem. Iste.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia dolorem inventore obcaecati, nulla quidem perferendis nesciunt iste blanditiis earum cumque!",
    ]

    const prevSlide = () => {
        setActiveIndex((prevIndex) => {
            return prevIndex === 0 ? Testimonial.length - 1 : prevIndex - 1
        })
        console.log("In prev Slide")
    };
    const nextSlide = () => {
        setActiveIndex((prevIndex) => {
           return prevIndex === Testimonial.length - 1 ? 0 : prevIndex + 1
        })
        console.log("In next Slide")
    };

    return (
        <div>
            <div className=' h-64 mr-12  bg-custom-lightBlue p-12 text-gray-500 text-xl space-y-4' >
                <h2>⭐⭐⭐⭐⭐</h2>
                <h2>{Testimonial[activeIndex]}</h2>
                <button className='ml-72 h-10 w-10 border rounded-full mr-2 hover:bg-red-600 slide-left' onClick={prevSlide}><img src="../../../../public/Section 6 Images/63bbdce866c70373ce6d6898_icon (1).png" alt="" className='ml-3' /> </button>
                <button className='ml-78 h-10 w-10 border rounded-full hover:bg-red-600 ' onClick={nextSlide}><img src="../../../../public/Section 6 Images/63bbdce866c703ed4d6d6899_icon (2).png" alt="" className='ml-3' /></button>
            </div>
        </div>
    )
}

export default Carousel
