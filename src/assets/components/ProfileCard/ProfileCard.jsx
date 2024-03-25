import React from 'react'

export default function ProfileCard(props) {
    return (
        <>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4 slide-top">
                <div>
                    <img class="rounded-t-lg w-72 h-96 hover:opacity-50 duration-500" src={props.image} alt="" />
                    <h1 className='text-xl text-center'>{props.name}</h1>
                    <p className='text-sm text-center text-gray-400'>
                        {props.profession} 
                    </p>
                    
                </div>
            </div>
        </>
    )
}
