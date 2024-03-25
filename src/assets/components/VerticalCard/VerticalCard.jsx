import React from 'react'
import '../../../Styles/Section4CardRightMoveAnimation.css'
import { Link, useNavigate } from 'react-router-dom'

function VerticalCard(props) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/Item_Detail", { state: { id: props.details.id } })
        console.log("id", props.details.id)
    }

    return (
        // <Link to='' key={props.details.id}  name={props.details.name}>
        <>
            <div className='' onClick={handleClick}>
                {/* mx-60 */}
                <div className='group max-w-fit m-auto  '>
                <div className=' group-hover:translate-x-8 transition duration-700  slide-left flex max-w-fit mx-auto text-white  hover:bg-custom-lightBlue h-34 p-4 mt-2 cursor-pointer'>
                    <img className=" w-24 h-24 rounded-full border border-gray-600  p-4" src={props.details.image} alt="" />
                    {/* </div> */}
                    <div className=' ml-6'>
                        <h1 className="text-xl">
                            {props.details.name}
                        </h1>
                        <p className='text-sm text-gray-600 '>{props.details.discription}</p>
                    </div>
                    <h1 className='text-yellow-400'>{props.details.price}</h1>
                    </div>
                </div>
            </div>
        </>
        // </Link>



    )
}

export default VerticalCard
