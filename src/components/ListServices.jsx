import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function ListServices() {
    useEffect(() => {
        AOS.init();
    }, []);

    const servicios = [
        {
            name: "ROYAL MASK",
            img:"https://thespotbarbershop.com/wp-content/uploads/2023/05/facial-wax-on-mans-face.jpg",
            price: "$18.00",
            description: "PURIFIES THE SKIN BY DISSOLVING AND DISLODGING THE BUILDUP OF IMPURITIES"
        },
        {
            name:"CLASSIC HAIRCUT",
            img:"https://thespotbarbershop.com/wp-content/uploads/2023/06/ClassicHaircut-512x768.jpg",
            price: "$25.00",
            description:"CLASSIC STYLE HAIRCUT HALF GUARD AND UP"
        },
        {
            name:"SKIN / BALD FADE",
            img:"https://thespotbarbershop.com/wp-content/uploads/2023/06/Skin-Bald-Fade.jpg",
            price: "$30.00",
            description:"MODERN STYLE HAIRCUT ZERO GUARD WITH BLADE FINISH"
        },
        {
            name:"EDGE-UP/LINE-UP",
            img:"https://thespotbarbershop.com/wp-content/uploads/2023/06/EdgeUp-LineUp.jpg",
            price: "$23.00",
            description:"OUTLINE REFRESH RAZOR DETAILING"
        },        
        {
            name:"ROYAL SHAVE",
            img:"https://thespotbarbershop.com/wp-content/uploads/2023/06/RoyalShave.jpg",
            price: "$32.00",
            description:"TRADITIONAL RAZOR SHAVE WITH HOT TOWEL & LATHER"
        },        
        {
            name:"REGULAR BEARD",
            img:"https://thespotbarbershop.com/wp-content/uploads/2023/06/RegularBeard.jpg",
            price: "$25.00",
            description:"BEARD SERVICE - TRIMMING SCULPTING - BLADE EDGING"
        },       
        {
            name:"WAX",
            img:"https://thespotbarbershop.com/wp-content/uploads/2023/05/man-with-hairwax-on-nose-and-ear.jpg",
            price: "$18.00",
            description:"NOSE WAX | EAR WAX | EYEBROW WAX EACH SERVICE CHARGED SEPARATELY"
        },        
        {
            name:"EYEBROW DETAILING",
            img:"https://thespotbarbershop.com/wp-content/uploads/2023/06/EyebrowDetailing.jpg",
            price: "$10.00",
            description:"EYEBROW TRIM"
        },        
        {
            name:"ALL-SCISSOR LAYERED HAIRCUT",
            img:"https://thespotbarbershop.com/wp-content/uploads/2024/10/barber-cutting-hair-with-only-scissors.jpg",
            price: "$20.00",
            description:"EYALL-SHEAR HAIRCUT ADDING TEXTURE AND A TAILORED LENGTH, WITH NOT CLIPPERS INVOLVED"
        },
        {
            name:"EXECUTIVE PACKAGE",
            img:"https://thespotbarbershop.com/wp-content/uploads/2023/06/ExecutivePackage.jpg",
            price: "$120.00",
            description:"1 HOUR EXPERIENCE | HAIRCUT HOT TOWEL SHAVE | EAR/NOSE WAX ROYAL MASK | BEARD TRIMMING SCULPTING / STYLING"
        },
    ]
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
                    <h2 data-aos="zoom-in"
                        data-aos-duration="3000"
                        className="mt-[40px] text-3xl text-[#fff] md:text-3xl font-bold tracking-wider">
                        OUR PREMIUM SERVICES
                    </h2>

                    {/* Decorative Divider */}
                    <div className="flex items-center justify-center gap-4 py-4">
                        <div data-aos="fade-left" data-aos-duration="2000"
                            className="rounded-lg h-[6px] w-[150px] bg-white"></div>
                        <div className="animate-spin [animation-delay:.7s] w-[20px] h-[20px]  bg-[#CD7F32]"></div>
                        <div data-aos="fade-right" data-aos-duration="2000"
                            className="rounded-lg h-[6px] w-[150px] bg-white"></div>
                    </div>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Hair wash, complimentary drink, grooming consultation, styling,
                        and massage are <span className="font-semibold">included with all services.</span>
                    </p>
                </div>

                <div className='flex justify-center items-center  gap-4 flex-wrap'>


                

                {servicios.map((servicio, index) => (
                    <div
                        class="mt-[100px] card shadow-[0px_4px_16px_px_#367E08] h-[400px] w-[280px] group gap-[0.5em] rounded-[1.5em] relative flex justify-end flex-col p-[1.5em] z-[1] overflow-hidden"
                    >
                        <div class="absolute top-0 left-0 h-full w-full bg-[#111111]">

                            <img src={servicio.img} alt="" />

                        </div>

                        <div
                            class="container text-white z-[2] relative font-nunito flex flex-col gap-[0.5em]"
                        >


                            <div class="flex justify-center items-center h-fit w-fit gap-[0.5em]">
                                <div
                                    class="border-2 border-white rounded-[0.5em] text-[#000] bg-white font-nunito text-[1em] font-normal px-[0.5em] py-[0.05em] hover:bg-transparent hover:text-[#fff] duration-300 cursor-pointer"
                                >
                                    <p>
                                        {servicio.name}
                                    </p>
                                </div>
                                <div
                                    class="border-2 border-white rounded-[0.5em] text-[#000] bg-white font-nunito text-[1em] font-normal px-[0.5em] py-[0.05em] hover:bg-transparent hover:text-[#fff] duration-300 cursor-pointer"
                                >
                                    <p>{servicio.price}</p>
                                </div>
                            </div>
                        </div>
                        <p
                            class=" font-semibold block text-white  relative h-[0em] group-hover:h-[7em] leading-[1.2em] duration-500 overflow-hidden"
                        >
                                {servicio.description}
                        </p>
                    </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default ListServices