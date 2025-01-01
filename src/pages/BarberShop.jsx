import React from 'react'
import { Phone } from 'lucide-react'
import BannerInBarberShop from '../components/bannerInBarberShop'
import Locations from '../components/Locations'
function BarberShop() {
    const businessHours = [
        { day: "MON", hours: "9:00 am – 7:00 pm" },
        { day: "TUE", hours: "9:00 am – 7:00 pm" },
        { day: "WED", hours: "9:00 am – 7:00 pm" },
        { day: "THU", hours: "9:00 am – 7:00 pm" },
        { day: "FRI", hours: "9:00 am – 7:00 pm" },
        { day: "SAT", hours: "closed" },
        { day: "SUN", hours: "closed" },
    ]

    return (
        <>
            <div className='border-4 border-red-500  min-h-[250vh] '>
                <div className='border-2 border-[#2e4] min-h-[100vh]'>
                    <section className="container mx-auto px-4 py-12">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            {/* Left Column - Text Content */}
                            <div className="">
                                <h1 className="p-4 border-b-2 border-black text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                                    MEN'S BARBERSHOP & GROOMING SERVICES IN MIAMI
                                </h1>

                                <p className="text-gray-600 leading-relaxed mt-7">
                                    From our signature haircut to straight razor shaves and color services,
                                    we believe attention to details and personal touches makes all the difference.
                                    At Fade Masters of Miami barbershop all of our stylist and barbers are
                                    classically trained. Blending old school and new school techniques with
                                    the latest styles and trends. So you receive a fresh one of a kind look
                                    tailored just for you.
                                </p>

                                <p className="text-gray-600 font-medium">
                                    We look forward to meeting you.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <a
                                        href="tel:786.705.2482"
                                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
                                    >
                                        <Phone className="h-5 w-5" />
                                        786.705.2482
                                    </a>
                                    <button
                                    
                                        className="rounded-lg p-4 bg-gray-600 text-[#fff] hover:bg-gray-700"
                                    >
                                        BOOK NOW
                                    </button>
                                </div>
                            </div>

                            {/* Right Column - Image and Hours */}
                            <div className="flex justify-center border-2 border-[#8f6] w-[104%] h-[80%]">
                                {/* <div className="rounded-lg overflow-hidden shadow-lg">
                                    <img
                                        src="https://thespotbarbershop.com/wp-content/uploads/2024/08/barber-shaving-cutomer-scaled.jpg"
                                        alt="Barber giving a haircut"
                                        className="w-[100%] h-[100%]"
                                    />
                                </div> */}

                                <div className="bg-white w-[100%] rounded-lg shadow-md border-2 border-gray-200 mt-6">
                                    <h2 className="text-xl text-center font-bold mb-4">BUSINESS HOURS</h2>
                                    <div className="">
                                        {businessHours.map((schedule, index) => (
                                            <div
                                                key={index}
                                                className="flex justify-between items-center text-gray-600"
                                            >
                                                <span className="font-medium">{schedule.day}</span>
                                                <span className="text-blue-600">{schedule.hours}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <BannerInBarberShop/>
                <Locations/>
            </div>
        </>
    )
}

export default BarberShop