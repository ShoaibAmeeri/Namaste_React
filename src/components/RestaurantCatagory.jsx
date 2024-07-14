import React from 'react'
import ItemMenuCard from './ItemMenuCard'

function RestaurantCatagory({data}) {
    
  return (
    <div className='w-6/12 mx-auto my-4 bg-gray-50 border shadow-lg p-4'>
        {/* accordian header */}
        <div className=' flex justify-between'>
            <span className='font-bold text-lg '> {data.title} : ({data.itemCards.length})</span>
            <span>⬇</span>
        {/* accordian body */}

        </div>
        {data.itemCards.map((i)=>(
            <ItemMenuCard data={i} />
        ))}
    </div>
  )
}

export default RestaurantCatagory