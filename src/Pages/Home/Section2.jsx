import React from 'react'
import '../../Styles/Section2.css'
import Card from '../../assets/components/Card/Card'
import Items from '../../assets/DataItems/Section4Data'

function Section2() {
  const slicedItem = Items.slice(0, 3)
  console.log("sliced item", slicedItem)
  // slicedItem.map((item,index)=>{
  //     console.log("name of item ",item.name)
  // })



  return (
    <>
      <section className='bg-custom-lightBlue opacity-125 rounded' >

        <div className='font-sourceSerif font-extrabold w-full h-full rounded-md bg-hero-image bg-cover pb-12'>

          <div className=' flex '>
            <h3 className='w-full h-40 font-sourceSerif text-white text-5xl mt-24 mx-12 slide-left'>Foodzy Speciality  <br /> Fresh burger</h3>
          </div>

          <div className='ml-0  flex  flex-wrap justify-evenly mt-[-48vh] slide-left'>

            {
              slicedItem.map((item, index) => {
                return <Card name={item.name} price={item.price} discription={item.discription} image={item.image} />
              })
            }

           

            <div className='slide-right'>
              <img src="/Section2 Images/63bbdce866c7034fc46d6891_image_here.png" alt="" className=' mt-72 rounded-xl' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section2
