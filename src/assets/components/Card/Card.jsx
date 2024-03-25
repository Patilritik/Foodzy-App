import React from 'react'
import Button from '../button/Button'

function Card(props) {

    console.log(props)


    return (
     
        <>


            <div class="w-60 h-75 max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-transparent dark:border-gray-700 mt-96 mx-4 ">
                <div class="flex justify-end px-4 pt-4">

                </div>
                <div class="flex flex-col items-center pb-10">
                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={props.image} alt="Bonnie image" />
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.name}</h5>
                    <span class="p-4 text-sm text-gray-500 dark:text-gray-400">{props.discription}</span>
                    <div class="flex mt-4 md:mt-6 gap-2">
                        <div className='rounded-full bg-yellow-500 h-10 w-10 text-center p-1.5'>{props.price}</div>
                        <Button />
                    </div>


                </div>
            </div>


        </>



    )
}

export default Card
