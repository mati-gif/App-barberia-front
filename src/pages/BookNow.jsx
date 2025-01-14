import React from 'react'
import { useSelector } from 'react-redux';

function BookNow() {
    const { barberShops } = useSelector((state) => state.barberShopReducer)
    console.log(barberShops);
    return (
        <div className='border-4 border-orange-500  min-h-[100vh] '>
            <select name="" id="">
                <option value="0">Select an Option</option>
                {

                    barberShops.map((item)=>{
                        <>
                        <option value={item.id}>{item.name}</option>
                        </>
                    })
                }
            </select>

        </div>
    )
}

export default BookNow