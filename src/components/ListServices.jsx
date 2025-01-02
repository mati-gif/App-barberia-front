import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function ListServices() {
        useEffect(() => {
            AOS.init();
        }, []);
    return (
        <>
            <div className="border-4 bg-black border-purple-500  min-h-[200vh]">
                <div className="max-w-4xl mx-auto text-center ">
                    {/* Razor Icon */}
                    <div className="w-[20vw] h-[20vh] mx-auto border-2 border-[#3f3]">
                        <img
                            src="https://cdn.prod.website-files.com/66e9959dc77a9ebbe055c1e0/66eb16105f2216baa2c252bf_Asset%203-p-500.png"
                            className="w-full h-full"
                            alt=''
                        >

                        </img>
                    </div>

                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl font-bold tracking-wider">
                        OUR PREMIUM SERVICES
                    </h2>

                    {/* Decorative Divider */}
                    <div className="flex items-center justify-center gap-4 py-4">
                        <div   data-aos="fade-left"  data-aos-duration="2000"
                        className="rounded-lg h-[6px] w-[150px] bg-white"></div>
                        <div className="animate-spin [animation-delay:.7s] w-[20px] h-[20px]  bg-[#CD7F32]"></div>
                        <div  data-aos="fade-right"  data-aos-duration="2000"
                        className="rounded-lg h-[6px] w-[150px] bg-white"></div>
                    </div>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Hair wash, complimentary drink, grooming consultation, styling,
                        and massage are <span className="font-semibold">included with all services.</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default ListServices