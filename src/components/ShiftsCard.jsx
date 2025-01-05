import React from 'react'

function ShiftsCard(props) {
    return (
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 w-80 flex flex-col justify-between items-stretch border-gray-300 border rounded-xl shadow-lg overflow-hidden md:w-96">
            <div className="bg-blue-600 text-white p-4">
                <h2 className="text-lg font-bold">Day</h2>
                {/* <p className="modificar_vin   text-xl opacity-90 ">
        <span className=' text-green-600'>{props.number.substring(0,4)}</span>
        <span className=''>{props.number.substring(4,7)}</span>
        </p> */}

                <p className="modificar_vin   text-xl opacity-90 ">
                    <span className=' text-green-400 font-bold'>
                        {props.day}
                    </span>
                    <span className='font-bold'>
                        {props.time }
                    </span>
                </p>
            </div>
            <div className="p-6 space-y-4">
                <div className="flex items-end  w-full  space-x-3  ">
                    <DollarSignIcon className="h-7 w-7 text-green-500 mb-1 " />
                    <div className='w-full '>
                        <p className="text-lg text-gray-600   w-full">price:</p>
                        <p className="text-3xl font-bold  w-full ">{props.price}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3">
                    <CalendarIcon className="text-blue-600" />
                    <div>
                        <p className="text-md text-gray-600">services:</p>
                        <p className="text-md">{props.services}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShiftsCard