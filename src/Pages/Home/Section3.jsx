import React from 'react'
import '../../Styles/Section2.css'

function Section3() {
    return (
        <div>
            <section className='bg-custom-blue opacity-125 h-full w-full font-slabo' >
                <div className='block text-white m-auto text-center'>
                    <h1 className='text-4xl  font-black pt-24 slide-left'>Burger Ingredients</h1>
                    <h1 className='text-4xl font-extrabold p-2  slide-left'>A Better Flavor</h1>
                    <p className='text-gray-300 text-md  slide-left'>Nec feugiat nisl pretium fusce id velit ut. At tempor commodo ullamcorper<br /> Tincidunt dui ornare lectu amet.</p>


                    {/* Discription section */}
                    <div  className='slide-left'>

                        <div className='h-auto inline-block absolute mx-[-48vw] my-12 text-left'>
                            <h1 className='text-xl mb-2'>Pound Ground Beef</h1>
                            <p className='text-gray-300 text-sm '>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Sed, modi?</p>
                            <div className='h-0.5 w-36 ml-60  bg-gray-700 relative mt-[-5vh]'></div>
                            <img src="/Section3 Images/63bbdce866c7035ead6d6896_point.png" className='mx-96 mt-[-2vh]' alt="" />
                        </div>
                        <img src="/Section3 Images/63bbdce866c703668b6d68e8_Group (1).png" className='absolute mt-36' alt="" />
                        <img src="/Section3 Images/63bbdce866c7036e2b6d6873_Shape_03.png" className='absolute mt-48' alt="" />
                        <div className='h-auto inline-block absolute mx-[-48vw] my-48 text-left'>
                            <h1 className='text-xl mb-2'>Fresh Bread</h1>
                            <p className='text-gray-300 text-sm '>Lorem ipsum dolor sit amet<br /> consectetur adipisicing elit. Sed, modi?</p>
                            <div className='h-0.5 w-48 ml-24 mt-[-4vw] bg-gray-700 relative'></div>
                            <img src="/Section3 Images/63bbdce866c7035ead6d6896_point.png" className='mx-72 mt-[-2vh] ' alt="" />
                        </div>
                        <div className='h-auto inline-block absolute mx-[-48vw] my-80 text-left'>
                            <h1 className='text-xl mb-2'>Cup Fine Dry Bread Crumbs</h1>
                            <p className='text-gray-300 text-sm '>Lorem ipsum dolor sit amet<br /> consectetur adipisicing elit. Sed, modi?</p>
                            <div className='h-0.5 w-36 ml-60 mt-[-4vw] bg-gray-700 relative'></div>
                            <img src="/Section3 Images/63bbdce866c7035ead6d6896_point.png" className='mx-96 mt-[-2vh] ' alt="" />
                        </div>

                    </div>

                    <div className='slide-left'>

                        <div className='h-auto inline-block absolute text-right ml-80 mt-16 '>
                            <h1 className='text-xl mb-2'>Large Egg</h1>
                            <p className='text-gray-300 text-sm '>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Sed, modi?</p>
                            <div className='h-0.5 w-72 mx-[-17.5vw] my-[-8vh] bg-gray-700 relative '></div>
                            <img src="/Section3 Images/63bbdce866c7035ead6d6896_point.png" className='mx-[-19vw] my-9' alt="" />
                        </div>
                      
                        <div className='h-auto inline-block absolute ml-[26vw] mt-48 text-right '>
                            <h1 className='text-xl mb-2'>Teaspoon Salt</h1>
                            <p className='text-gray-300 text-sm '>Lorem ipsum dolor sit amet<br /> consectetur adipisicing elit. Sed, modi?</p>
                            <div className='h-0.5 w-40 mx-[-10vw] mt-[-4vw] bg-gray-700 relative'></div>
                            <img src="/Section3 Images/63bbdce866c7035ead6d6896_point.png" className='mx-[-12vw] mt-[-2vh] ' alt="" />
                        </div>
                        <div className='h-auto inline-block absolute ml-[26vw] mt-80 text-right'>
                            <h1 className='text-xl mb-2'>Fresh Bread</h1>
                            <p className='text-gray-300 text-sm '>Lorem ipsum dolor sit amet<br /> consectetur adipisicing elit. Sed, modi?</p>
                            <div className='h-0.5 w-36 mx-[-15vw] mt-[-4vw] bg-gray-700 relative'></div>
                            <img src="/Section3 Images/63bbdce866c7035ead6d6896_point.png" className='mt-[-2vh] mx-[-16.5vw]' alt="" />
                        </div>

                    </div>




                    <img src="/Section3 Images/63bbdce866c7036bc86d6895_Group 112.png " className='m-auto pt-14 slide-top' alt="" />

                </div>
            </section>
        </div>
    )
}

export default Section3
