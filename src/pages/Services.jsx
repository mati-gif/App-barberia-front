import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Services() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <div className="border-4 border-red-500  min-h-[600vh]">
                <section
                    className=" relative bg-[url(https://thespotbarbershop.com/wp-content/uploads/2024/07/httpsthespotbarbershop.comservices-5-2.jpeg)] bg-cover bg-center bg-no-repeat"
                >
                    <div
                        className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                    ></div>

                    <div
                        className="border-2 border-green-200  flex flex-col items-baseline justify-center relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                    >
                        <div className="flex flex-col justify-end border-2 border-[#48e] h-[100%] max-w-4xl text-center ltr:sm:text-left rtl:sm:text-right">
                            <h1 className="text-5xl font-bold text-[#C57C15] sm:text-5xl">
                                AN EXPERIENCE LIKE NO OTHER

                                {/* <strong className="block font-bold text-[#fff]"> Best Style. </strong> */}
                            </h1>

                        </div>
                        <h2 className='text-3xl  text-[#fff] '>HairCut | Grooming | Hot Towel Shave | Facial Treatments
                        </h2>
                    </div>
                </section>
                <div className="container mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Image Section */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <img
                                src="https://cdn.prod.website-files.com/66e9959dc77a9ebbe055c1e0/66eb2a084a8c78155b00c949_365969987_805714151201257_1669159942215917482_n.avif"
                                alt="Barber applying hot towel treatment"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="space-y-6">
                            <h2 className="text-4xl font-mono md:text-5xl font-bold tracking-tight">
                                SIGNATURE HOT TOWEL TREATMENT
                            </h2>

                            <p data-aos="fade-up"
                                data-aos-duration="2000"
                                className="text-gray-700 leading-relaxed">
                                Indulge in an upscale grooming experience fit for a resident of Miami. This classic barber ritual gently expresses your pors, softens your facial hair and wraps your face in soothing comfort. The calming, spa-like experience prepares your skin for a smooth shave or just helps you relax.
                            </p>

                            <p data-aos="fade-up"
                                data-aos-duration="2000"
                                className="text-gray-700 leading-relaxed">
                                Treat yourself to the ultimate luxury experience. As one of Miami's premier
                                barbershops, we deliver an upscale grooming experience leaving you
                                feeling refreshed and rejuvenated. Treat yourself to the ultimate
                                shave at Barber & Co Miami. Complimentary with all of our services.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-2 gap-8 items-center">


                        {/* Content Section */}
                        <div className="space-y-6">
                            <h2 className="text-4xl font-mono md:text-5xl font-bold tracking-tight">
                                COMPLIMENTARY DRINK WITH EVERY VISIT
                            </h2>

                            <p data-aos="fade-zoom-in"
                                //  data-aos-easing="ease-in-back"
                                data-aos-duration="3000"
                                className="text-gray-700 leading-relaxed">
                                At Barber & Co Miami, luxury goes beyond grooming. Enjoy a complimentary drink with every visit—whether it’s a refreshing cocktail, a brewed coffee, or chilled water—while you relax in our upscale barbershop. It’s just one more way we enhance your premium grooming experience.
                            </p>
                        </div>

                        {/* Image Section */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <img
                                src="https://cdn.prod.website-files.com/66e9959dc77a9ebbe055c1e0/6759d76e35ae9244b2d9e8cc_pexels-airamdphoto-29707925.jpg"
                                alt="Barber applying hot towel treatment"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Image Section */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <img
                                src="https://cdn.prod.website-files.com/66e9959dc77a9ebbe055c1e0/6759f4d0afa1db062123975f_pexels-kevinshrmasc-29650216.jpg"
                                alt="Barber applying hot towel treatment"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="space-y-6">
                            <h2 className="text-4xl font-mono md:text-5xl font-bold tracking-tight">
                                EXPERIENCE HAIR STYLING
                            </h2>

                            <p data-aos="zoom-in-down"
                                //  data-aos-easing="ease-in-back"
                                data-aos-duration="3000"
                                className="text-gray-700 leading-relaxed">
                                Experience upscale hair care tailored to perfection. Our expert stylists craft refined, high-end looks that exude confidence and sophistication. Leave Barber & Co Miami feeling polished, refreshed, and truly luxurious.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services