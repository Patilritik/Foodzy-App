import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard.jsx'
import'../../../Styles/Section2.css'

export default function AboutusCarousal() {

    const profileData = [
        { name: "Valentino Morose", image: "/About/63bbdce866c7036d856d68f4_item_01.jpg", Profession: " Meals Specialist" },
        { name: "Valentina Morose", image: "/About/63bbdce866c703784d6d68f7_pexels-tirachard-kumtanom-887827.png", Profession: " Executive Chef" },
        { name: "Valentinz Morose", image: "/About/63bbdce866c703f4176d68f6_item_02.jpg", Profession: "Restaurant Manager" },

    ]

    return (
        <>
        <div className='bg-custom-blue text-white font-slabo py-12 '>
                <h1 className='text-center text-4xl font-bold py-2 slide-left'>Behind The Taste</h1>
                <p className='text-justify px-72 text-sm text-gray-200 font slide-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt voluptas officia sint, nam ab recusandae tempore natus magni delectus perferendis quaerat ipsum hic aliquid soluta, dolorum fugiat. Autem tenetur officiis, quaerat similique totam deleniti qui vel magnam dolor maiores incidunt.</p>
        </div>
        <div className='bg-custom-blue text-white flex flex-wrap justify-evenly font-slabo '>
            {profileData.map((profile, index) => {
                return <ProfileCard key={index} name={profile.name} image={profile.image} profession={profile.Profession} />
            })}


        </div>

        </>

    )
}
