import React from 'react'
import '../../Styles/HeroSection.css'
import '../../Styles/Section2.css'


function HeroSection() {
    return (
        <>

            <section className='bg-custom-blue opacity-150 '>
                <div class="bg-hero-image bg-cover  text-white py-20 ">
                    <div class="container mx-auto flex flex-col md:flex-row items-center my-6 md:my-0">
                        <div class="flex flex-col w-full text-center p-8">
                            <img src="/Hero Section/63bbdce866c70300f16d688a_01.png" className='slide-left w-24 h-24 absolute  mx-24 my-2 z-100 ' alt="" />
                            <h1 class="text-8xl md:text-8xl p-2 font-sourceSerif text-center font-semibold slide-left">WELCOME TO</h1>
                            <img src="/Hero Section/63bbdce866c703a34c6d688e_image_here.png" class ='h-100 w-120  m-auto z-100 my-[-10vh] big  slide-top' alt="image here" />
                            <h1 class="my-[-10vh] foodzy text-8xl md:text-10xl leading-relaxed md:leading-snug mb-2 font-sourceSerif font-semibold ">FOODZY
                            </h1>
                            <img src="/Hero Section/63bbdce866c70369016d686c_02.png " className='w-24 h-24 absolute  right-36 my-36 slide-right' alt="" />
                            <img src="/Hero Section/63bbdce866c703853a6d685c_03.png"className='w-12 h-30 absolute mx-48 bottom-12 slide-left' alt="" />
                            <img src="/Hero Section/63bbdce866c70398be6d688c_04.png" className='w-12 h-30 absolute right-36 my-96 z-100 slide-right' alt="" />
                          
                        </div>
                       
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection
