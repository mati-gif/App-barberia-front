import React from 'react'

function Locations() {

    const locations = [
        {
            img: "https://images.myguide-cdn.com/miami/companies/the-spot-barbershop-miami-lakes/large/the-spot-barbershop-miami-lakes-1418592.jpg",
            name:"BONITA SPRINGS"
        },
        {
            img: "https://images.myguide-cdn.com/miami/companies/the-spot-barbershop-cocowalk/large/the-spot-barbershop-cocowalk-1418641.jpg",
            name:"BAYTON BEACH"
        },
        {
            img: "https://images.myguide-cdn.com/miami/companies/the-spot-barbershop-cocowalk/large/the-spot-barbershop-cocowalk-1418644.jpg",
            name:"CORAL WAY"
        }
    ]
    return (
        <>
            <div className=" border-4 border-[#45a] w-full min-h-[80vh] flex  items-center justify-center">

            { locations.map((location) => (
                <div class="rounded-lg w-[30%] h-80 bg-gray-200  shadow-lg p-3 flex flex-col gap-1">
                    <div class=" w-[100%]  h-[100%]  hover:contrast-100">
                        <img src={location.img} alt="" />
                    </div>
                    <div class="flex flex-col gap-4">
                        <div class="flex flex-row justify-between">
                            <div class="flex flex-col">
                                <span class="text-xl font-bold">{location.name}</span>
                            </div>
                        </div>
                        <button class="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2">View this location</button>
                    </div>
                </div>
                )) }
            </div>

        </>
    )
}

export default Locations