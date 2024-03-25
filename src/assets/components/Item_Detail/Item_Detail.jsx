import React, { useRef, useState } from 'react'
import '../../../Styles/Section2.css'
import Item from '../../DataItems/Section4Data'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart , incrementQty } from '../../../Redux/Slices/CartItemSlice';

function Item_Detail() {
  const [Discription, setDiscription] = useState(true)
  const [shipping, setShipping] = useState(false);
  const [Return, setReturn] = useState(false);
  const inputQtyRef = useRef(0);
  const dispatch = useDispatch();
  const location = useLocation();

  console.log("From  All item detail part-> ", Item)

  const item = Item.find((val) => {
    // console.log(location.state.id)
    if (val.id === location.state.id){
        return val
    }

  })
 
  console.log("Matched Item", item)
  const myItem = useSelector((state)=> state.CartItem)
  console.log("cart Item : ", myItem)

  
  const clickHandler = ()=>{
    console.log("input",inputQtyRef.current.value)
    const qty = parseInt(inputQtyRef.current.value);
    item["quantity"] = qty
    // console.log(typeof(parseInt(qty)))
    dispatch(addToCart(item))
    // dispatch(incrementQty(inputQtyRef.current.value, item))
    // alert("dispatched")
  }


  const handleDiscription = () => {
    setDiscription(true)
    setShipping(false);
    setReturn(false)
  }
  const handleShipping = () => {
    setDiscription(false)
    setShipping(true);
    setReturn(false)
  }
  const handleReturn = () => {
    setDiscription(false)
    setShipping(false);
    setReturn(true)
  }

  return (
    <div className='bg-custom-blue text-white flex justify-evenly font-slabo'>
        

      <div class="text-white">
        <div class="p-6 lg:max-w-7xl max-w-4xl mx-auto">
          <div class="grid items-start grid-cols-1 lg:grid-cols-5 gap-12  p-6">
            <div class="lg:col-span-3 w-full lg:sticky top-0 text-center">
              <div class="px-4 py-10   relative">
                <img src={item && item.image} alt="Product" class=" object-cover slide-left" />

              </div>

            </div>
            
            <div class="lg:col-span-2 text pt-24  overflow-hidden">
              <h2 class="text-5xl font-extrabold slide-right">{ item.name}</h2>
              <p className='p-5 pl-0 slide-right'>{item.discription}</p>
              <div class="flex flex-wrap gap-4 mt-6 slide-right">
                <p class="text-4xl font-extrabold slide-right">{item && item.price} USD</p>
                <p className='text-green-400 text-sm font-poppins slide-right'>IN STOCK</p>

              </div>


              <div class="flex flex-wrap gap-4 mt-10 slide-right">
                <input type="number"  ref={inputQtyRef} className='text-black min-w-[100px] px-4 py-2.5 rounded-full w-36 focus:outline-none' min={1} max={10} defaultValue={1} />
                <button onClick={() => clickHandler()} type="button" class="min-w-[200px] px-4 py-3 text-xl bg-red-500  rounded-full hover:bg-red-600 text-white font-bold ">Add to Cart</button>
                {/* dispatch(addToCart(item) */}
              </div>
            </div>
          </div>

          <div className='mx-10 slide-left'>
            <div className='p-[0.6px] h-10 flex justify-around bg-white text-black space-x-1 w-96'>
              <button className='w-full  text-center hover:bg-black hover:text-white' onClick={handleDiscription}>Description</button>
              <button className='w-full  text-center hover:bg-black hover:text-white ' onClick={handleShipping}>Shipping</button>
              <button className='w-full  text-center hover:bg-black hover:text-white ' onClick={handleReturn}>Return</button>
            </div>

            <div className={Discription ? "block" : "hidden"}>

              <div className='my-8 w-8/12 text-justify'>
                <h1 className=' text-xl font-bold '>DESCRIPTION</h1>
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A inventore consequatur nisi neque alias similique exercitationem ad sapiente accusamus, consectetur adipisci voluptates iure ea placeat natus sunt? Illum consectetur in tenetur? Quidem voluptas labore voluptatibus fugiat delectus corporis, dicta ipsa, autem debitis voluptatum porro sunt nemo maiores. Architecto, libero corporis!</p>
              </div>


              <div className='my-8 w-8/12 text-justify'>
                <h1 className='text-xl font-bold'>DETAILS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A inventore consequatur nisi neque alias similique exercitationem ad sapiente accusamus, consectetur adipisci voluptates iure ea placeat natus sunt? Illum consectetur in tenetur? Quidem voluptas labore voluptatibus fugiat delectus corporis, dicta ipsa, autem debitis voluptatum porro sunt nemo maiores. Architecto, libero corporis!</p>
              </div>


              <div className='my-8 w-8/12 text-justify'>
                <h1 className='text-xl font-bold'>PRODUCT MATERIALS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A inventore consequatur nisi neque alias similique exercitationem ad sapiente accusamus, consectetur adipisci voluptates iure ea placeat natus sunt? Illum consectetur in tenetur? Quidem voluptas labore voluptatibus fugiat delectus corporis, dicta ipsa, autem debitis voluptatum porro sunt nemo maiores. Architecto, libero corporis!</p>
              </div>
            </div>

            <div className={`${shipping ? "block" : "hidden"} my-8 w-8/12 text-justify`}>
              <h1 className='font-bold'>SHIPPING</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sunt vitae totam, accusamus aspernatur ipsum ullam veritatis expedita alias quam quia, quidem nesciunt nobis quod sit est iusto modi enim unde dolore eos, ducimus dolorum facere! Iste eligendi voluptas, rerum illo cum dolor nihil similique culpa beatae dolorum aperiam iure!</p>
            </div>

            <div className={`${Return ? "block" : "hidden"} my-8 w-8/12 text-justify`}>
              <h1 className='font-bold'>RETURN</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, necessitatibus odit eaque magnam voluptatem similique blanditiis harum velit suscipit assumenda et? Officia incidunt fugiat illo sunt rem perspiciatis quibusdam dolor in hic? Incidunt quisquam architecto temporibus sint quae, illo provident obcaecati labore libero officia rem fugit explicabo magnam modi saepe ducimus cupiditate ipsum odio nostrum itaque! Exercitationem facilis quam dolores.</p>
            </div>
          </div>
        </div>
      </div>




    </div>
  )
}

export default Item_Detail
