import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import MobileEfect from '../components/MobileEfect';
import CiudadBanner from '../components/CiudadBanner';
import Maps from '../components/Maps';
import { useSelector } from 'react-redux';
function Home() {
    useEffect(() => {
        AOS.init();
    }, []);
    const services = [
        {
            title: "HAIR",
            image: "https://cdn.prod.website-files.com/66e9959dc77a9ebbe055c1e0/66f2c30a02fb99ab19138d28_Shaving%20Cream.avif",
        },
        {
            title: "BODY WAXING",
            image: "https://b541f621df59ce97c38c.cdn6.editmysite.com/uploads/b/b541f621df59ce97c38c6ecd7adfd9863682cc048c4c023b16cdcb59c9efd8d3/2024-10-10_01-00-03_1728536420.jpg?width=400&dpr=1",

        },
        {
            title: "NAILS",
            image: "https://cdn.prod.website-files.com/66e9b8427b526c4c3de82fa8/66f2f05c43327497a6417002_Fade.jpg",

        },
        {
            title: "BROWS & LASHES",
            image: "https://b541f621df59ce97c38c.cdn6.editmysite.com/uploads/b/b541f621df59ce97c38c6ecd7adfd9863682cc048c4c023b16cdcb59c9efd8d3/WhatsApp%20Image%202024-09-28%20at%207.44.29%20PM_1728536306.jpeg?width=2400&optimize=medium",
        }
    ]

    const {  token } = useSelector((state) => state.authenticateUser);


    console.log(token);
    
    return (
        <>
            <div className='  min-h-[550vh] '>
                <section
                    className="relative bg-[url(https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w)] bg-cover bg-center bg-no-repeat"
                >
                    <div
                        className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                    ></div>

                    <div
                        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                    >
                        <div className="flex flex-col justify-end  h-[80%] max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                            <h1 className="text-3xl font-bold text-[#fff] sm:text-5xl">
                                Let us find your

                                <strong className="block font-bold text-[#fff]"> Best Style. </strong>
                            </h1>

                            <div className="mt-8 flex flex-wrap gap-4 text-center">
                                <a
                                    href="#"
                                    className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                                >
                                    Get Started
                                </a>

                                <a
                                    href="#"
                                    className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <div className=' w-full h-[100vh] flex justify-center items-center'>
                    <div data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        // data-aos-duration="3000"

                        className="relative w-full max-w-md mx-auto">
                        {/* Striped background */}
                        <div className="absolute bg-[url(https://studio-dbrickell.com/wp-content/uploads/2022/12/2-1.jpg)] bg-cover bg-center bg-no-repeat 
                        -top-[10%] -left-[15%] w-full h-full ">
                            <div className="relative w-full h-full overflow-hidden">
                                <div className="absolute inset-0">
                                </div>
                            </div>
                        </div>
                        {/* -top-[100%] bottom-[-80px] -left-[75%] */}
                        {/* Main image */}
                        <div className="relative bg-white ">
                            <img
                                src="https://cdn.prod.website-files.com/66e9959dc77a9ebbe055c1e0/66f2dd90f95241db310063ad_Shave%20Closeup.avif"
                                alt="Portrait"
                                className="w-full h-auto relative z-10 "
                            />
                        </div>
                    </div>

                    <div data-aos="fade-left"
                        // data-aos-offset="400"
                        data-aos-duration="3000"

                        // data-aos-easing="ease-in-sine"
                        className=' w-[50%] h-[75%]'>
                        <h2 className='text-[#000] text-[50px] font-serif font-bold'>Welcome To
                            BARBER SHOP</h2>
                        <h3 className="text-[#000] text-[30px] font-serif  ">Come As You Are, Leave At Your Best</h3>
                        <p data-aos="fade-left"
                            // data-aos-offset="400"
                            data-aos-duration="3000"
                            className='mt-3 text-[#000] text-[18px]'>High-quality beauty services that build your confidence and transform your looks are what you can expect with every trip you take to Studio-D Brickell. We are your premier high-end salon in Miami, FL, that delivers the looks and styles you desire that will keep heads turning. Whether you’re looking for a fabulous hairstyle, eyelash extensions, Keratin treatment, or another personalized salon service, you’ve come to the right place.
                        </p>
                        <div className='flex justify-center items-center'>
                            <button data-aos="fade-up"
                                data-aos-duration="3000"
                                className='bg-[#000] text-[#fff] px-4 py-2 mt-4 rounded-md hover:bg-[#181818] hover:text-[#fff]'>
                                Book Now
                            </button>
                        </div>

                    </div>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <div key={index} className="relative group overflow-hidden">
                            {/* Image container with hover effect */}
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            </div>

                            {/* Title */}
                            <div className="absolute bottom-6 left-0 w-full text-center">
                                <h3 className="text-white text-xl font-light tracking-wider">
                                    {service.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
                <MobileEfect/>
                <CiudadBanner/>
                <Maps/>
            </div>
        </>
    )
}

export default Home