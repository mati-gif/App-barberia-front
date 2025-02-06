import React from 'react'

function CardBarberShop(props) {
    return (
        <>



            <div
                className=" w-[100%]  shadow-2xl rounded-lg cursor-pointer  py-8 px-6 bg-white flex flex-col items-start  gap-3 transition-all duration-300 group hover:bg-[#202127]"
            >

                <div className="text-xl font-bold  group-hover:text-white text-black/80"> Name BarberShop:</div>
                <p className="font-bold text-2xl group-hover:text-white text-black/80">
                {props.premiseName}
                </p>
                <p className="text-lg text-gray-400 mb-1">Address:</p>
                <p className="text-gray-400 text-2xl">
                {props.address}
                </p>
                <div className='flex flex-wrap'>
                <p className="text-lg text-gray-400 mb-1 ">City: </p>
                </div>
                <p

                    className="text-5xl font-bold self-start group-hover:text-white text-black/80"
                >
                    {props.city}
                </p>
            </div>


        </>
    )
}

export default CardBarberShop