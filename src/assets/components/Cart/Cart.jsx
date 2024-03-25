import React, { useEffect, useState } from 'react'
import '../../../Styles/Section2.css'
import { useDispatch, useSelector } from 'react-redux'
import { change } from '../../../Redux/Slices/ProductSlice';
import { removeFromCart } from '../../../Redux/Slices/CartItemSlice';



export default function Cart() {
    const dispatch = useDispatch();
    let [totalPrice, settotalPrice] = useState(0)
    const [checkout , setcheckout] = useState("Continue to Checkout")
    const display = useSelector((state) => state.CartItem.cart)
    console.log("In cart component", display)



    settotalPrice = () => {

        display.map((item) => {
            let Itemprice = (parseInt(item.price.slice(1)))
            totalPrice += ((Itemprice) * item.quantity)
            console.log("quantity", item.quantity)
            console.log("mytotal price", totalPrice)
        })
        return totalPrice
    }

   

    settotalPrice(totalPrice)

    const checkoutHandler = ()=>{
        setcheckout("Sorry.... Checkout is not available ")
        setTimeout(() => {
            setcheckout("Continue to Checkout")
        }, 4000);
    }


    return (
        <div  >
            <div className='fixed right-0 w-4/12 bg-white z-10 top-0 h-screen  text-black font-normal slide-right '>
                <div className='flex justify-between p-2'>
                    <h1 className='pl-4 text-black text-center text-2xl font-bold pt-2'>Your Cart</h1>
                    <button onClick={() => dispatch(change())} className='mt-2 bg-red-500 rounded-full w-6 h-6 font-bold'>X</button>
                </div>


                <div className='h-90 mt-2 overflow-y-auto slide-top'>

                {display.length === 0 ? <h1 className='font-bold text-2xl flex justify-center bg-yellow-500 items-center h-screen'>There is Literally nothing in your cart</h1> : display.map((item) => {
                    return (<div>
                        <div className='bg-red-200 rounded-sm p-3 border border-b-white slide-top'>
                            <div className='flex justify-between'>
                                <div className='flex'>
                                    <img src={item.image} alt="" className='w-16 h-16 rounded' />
                                    <div className='text-sm m-2'>
                                        <h1 className='font-bold'>{item.name}</h1>
                                        <h1>{item.price} USD</h1>
                                        <button onClick={() => dispatch(removeFromCart(item))} className='hover:text-red-600 '>Remove</button>
                                    </div>
                                </div>
                                <h1 className='py-4 text-sm'>Quantity : {item.quantity}</h1>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    )
                })}
                </div>


                {/* Grand Total displaying */}
                {display.length === 0 ? "" : <div class="absolute bottom-0 w-full border  border-gray-200 rounded-xl slide-top">
                    <div className='p-4 font-bold text-sm flex justify-between '>
                        <h2>Subtotal</h2>
                        <h2>$ {totalPrice} USD</h2>
                    </div>
                    <button className='p-2 w-full hover:bg-red-600 transition-all ease-in-out duration-500 bg-red-400 m-2 text-white border-none ' onClick={checkoutHandler}>{checkout}</button>

                </div>}
            </div>

            {/* </div> */}
        </div>
    )
}