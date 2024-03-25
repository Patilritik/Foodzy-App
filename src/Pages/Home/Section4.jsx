import React, { useState } from 'react'
import Section4Data from '../../assets/DataItems/Section4Data'
import VerticalCard from '../../assets/components/VerticalCard/VerticalCard'
import '../../Styles/Section2.css'

function Section4() {
    const [item , setItem] = useState(Section4Data)
    const[active, setActive] = useState("All")

    function FilterData(event){
        
        const countryName = event.target.value
        if(event.target.value === "All"){
            setItem(Section4Data)
            setActive(countryName)
        }
        else{
            let newItem = Section4Data.filter(item => item.country.includes(countryName));
            console.log(item)
            setItem(newItem);
            setActive(countryName)
        }
    }

    return (
        <div className='bg-custom-blue font-slabo h-full pb-12'>
            <div className='slide-left'>

                <h1 className='text-white text-5xl font-bold text-center pt-4'>Most Popular Burger Items</h1>
                <p className='text-center text-gray-300 text-sm mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> Illum laborum ducimus odit quaerat autem nemo dolore quis doloribus perspiciatis illo.</p>
            </div>

            <div className=' w-8/12 m-auto '>
                <ul className=' flex space-x-1 mx-24 p-4 mt-6 text-gray-600 '>

                    <li className={`hover:bg-red-600 hover:text-white w-full text-center p-2 ${active === "All" ? " border-b-2 border-red-500 " : ""}`}  >
                        <button onClick={FilterData}  value={"All"}>  All</button>
                    </li>
                    <li className={`hover:bg-red-600  hover:text-white w-full text-center p-2 ${active === "French" ? " border-b-2 border-red-500 " : ""}`}>
                        <button onClick={FilterData} href="" value={"French"}>
                            French

                        </button>
                    </li>
                    <li className={`hover:bg-red-600 hover:text-white w-full text-center p-2 '${active === "America" ? " border-b-2 border-red-500 " : ""}`}>
                        <button href="" onClick={FilterData} value={"America"}>
                            America

                        </button>
                    </li>
                    <li className={`hover:bg-red-600  hover:text-white w-full text-center p-2 ${active === "Italian" ? " border-b-2 border-red-500 " : ""}`}>
                        <button onClick={FilterData} value={"Italian"}>
                            Italian

                        </button>
                    </li>

                    <li className={`hover:bg-red-600  hover:text-white w-full text-center p-2 ${active === "Bangla" ? " border-b-2 border-red-500 " : ""}`}>
                        <button onClick={FilterData} value={"Bangla"}>
                            Bangla

                        </button>
                    </li>
                    <li className={`hover:bg-red-600  hover:text-white w-full text-center p-2 ${active === "Chinese" ? " border-b-2 border-red-500 " : ""}`}><button  onClick={FilterData} value={"Chinese"}>
                        Chinese
                    </button></li>
                </ul>

            </div>

            <ul>

                {/* Data comming from stored Section4 data folder */}
                {item.map((items, index) => (
                    <li key={item.id} className=''>
                        <VerticalCard details = {items} />

                    </li>
                    
                ))}
            </ul>
        </div>
    )
}

export default Section4
