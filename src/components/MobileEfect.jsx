import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function MobileEfect() {
        useEffect(() => {
            AOS.init();
        }, []);
    return (
        <>
            <div className='bg-[url()] bg-cover bg-center bg-no-repeat  w-full min-h-[80vh]'>
                <div className=' flex justify-center gap-[100px] items-center  w-full h-full'>
                    <div className=' w-[50%] h-[100%] '>
                        <h2 className='text-[#000] text-[50px] font-serif font-bold'>
                            Quality salon
                            Services
                        </h2>
                        <p data-aos="fade-right"
                            // data-aos-offset="400"
                            data-aos-duration="3000"
                            className='mt-3 text-[#000] text-[18px]'
                        >At our diverse salon, we’re committed to providing a full range of salon services that cater to your unique looks and needs. Rest assured, you can know that you’ll leave looking great and feeling refreshed at an affordable price.</p>
                        <h2 className='mt-5 text-[#000] text-[50px] font-serif font-bold'>
                        Our Services Include
                        </h2>
                        <h3 data-aos-duration="3000" data-aos="zoom-in-up" className="text-[#000] text-[20px] font-serif  ">Hair | Waxing | Nails |
                        Eyelashes | Skin Care | Microblading</h3>
                        <p data-aos="fade-right"
                            // data-aos-offset="400"
                            data-aos-duration="3000"
                            className='mt-3 text-[#000] text-[18px]'
                        >
                            We have a talented team of stylists and estheticians who keep up with the latest trends and techniques. No matter the service you choose, our goal is for you to leave satisfied with your look and continue to trust us with all of your beauty concerns.
                        </p>
                        
                    </div>
                    <img className='w-[25vw]'
                        src="https://thespotbarbershop.com/wp-content/uploads/2020/04/THE-SPOT_HOME-iphone-2.gif" alt="" />
                    {/* <img  className='w-[35vw] h-[80vh] rounded-lg '
        src="https://cdn.prod.website-files.com/66e9b8427b526c4c3de82fa8/66eb0db2bd5b674a06a9947b_haircuts.webp" alt="" /> */}
                </div>
            </div>
        </>
    )
}

export default MobileEfect