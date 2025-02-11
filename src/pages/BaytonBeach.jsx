import React from 'react'

function BaytonBeach() {
    return (
        <>
            <div className=" min-h-[300vh]">
                <section
                    className=" relative bg-[url(https://thespotbarbershop.com/wp-content/uploads/2016/11/Miracle.jpg)] bg-cover bg-center bg-no-repeat"
                >
                    <div
                        className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                    ></div>

                    <div
                        className="  flex flex-col items-baseline justify-center relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                    >
                        <div className="flex flex-col justify-end  h-[100%] max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                            <h1 className="text-5xl font-bold text-[#fff] sm:text-5xl">
                                Boyton Beach

                                {/* <strong className="block font-bold text-[#fff]"> Best Style. </strong> */}
                            </h1>

                        </div>
                        <h2 className='text-3xl  text-[#fff] sm:text-5xl'>398 N Congress Ave, Boynton Beach, FL 33426</h2>
                    </div>
                </section>
                <div className=' w-full gap-[30px] min-h-[100vh] flex justify-center items-center'>
                    <div className='flex flex-col gap-4  min-h-[100%] w-[35%]'>
                        <h2 className='text-[#545454] text-[30px] font-bold '>
                            BARBERSHOP - BOYNTON BEACH
                        </h2>
                        <h3 className='text-[#545454] text-[16px] font-bold '>
                            Hours of Operation:
                        </h3>
                        <div className="space-y-1">
                            <p><span className="font-medium">Monday – Friday</span>: 8:00 AM – 8:00 PM</p>
                            <p><span className="font-medium">Saturday</span>: 9:00 AM – 7:00 PM</p>
                            <p><span className="font-medium">Sunday</span>: CLOSED</p>
                        </div>
                        <div>
                            <h2 className="text-lg font-medium text-gray-700 mb-2">November:</h2>
                            <div className="space-y-1 pl-4">
                                <p>• Thanksgiving Day (11/28): 8:00 AM – 4:00 PM</p>
                                <p>• Black Friday (11/29): 11:00 AM – 8:00 PM</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-medium text-gray-700 mb-2">December:</h2>
                            <div className="space-y-1 pl-4">
                                <p>• Christmas Eve (12/24): 8:00 AM – 4:00 PM</p>
                                <p>• Christmas Day (12/25): CLOSED</p>
                                <p>• New Year's Eve (12/31): 8:00 AM – 4:00 PM</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-medium text-gray-700 mb-2">January:</h2>
                            <div className="space-y-1 pl-4">
                                <p>• New Year's Day (01/01): CLOSED</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-medium text-gray-700 mb-2">Address:</h2>
                            <div className="space-y-1 pl-4">
                                <p>398 N Congress Ave,
                                    Boynton Beach, FL 33426</p>
                            </div>
                        </div>
                        <div className='m-auto'>
                            <button className='rounded-lg p-4 bg-[#C57C15] text-[#fff] hover:bg-[#C57C26]'>
                                Book Now
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4  min-h-[100%] w-[35%]'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11768.703357387763!2d-80.089704!3d26.531247!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8df98c4733dd7%3A0x3dfd882a6c9ecc92!2sThe%20Spot%20Barbershop%20-%20Boynton%20Beach!5e1!3m2!1sen!2sus!4v1735832739555!5m2!1sen!2sus"
                            width="461"
                            height="700"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>


                <div className='   h-[80vh] flex flex-col justify-center items-center'>
                    <div
                        class=" w-[30%]  h-[66%] p-6 relative overflow-hidden"
                    >
                        <h2 className='text-[#545454] text-center text-2xl font-bold'>Sign Up - Haircut Giveaway</h2>
                        <div className="flex-shrink-0 w-[100%] flex justify-center ">
                        </div>
                        <form class="w-full mt-4 space-y-3 ">
                            <div>
                                <input
                                    class="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                                    placeholder="First Name"
                                    id="FirstName"
                                    name="FirstName"
                                    type="text"
                                />
                            </div>
                            <div>
                                <input
                                    class="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                                    placeholder="Last Name"
                                    id="LastName"
                                    name="LastName"
                                    type="text"
                                />
                            </div>
                            <div>
                                <input
                                    class="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                                    placeholder="Email"
                                    id="Email"
                                    name="Email"
                                    type="email"
                                />
                            </div>
                            <div>
                                <input
                                    class="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                                    placeholder="Password"
                                    id="password"
                                    name="password"
                                    type="password"
                                />
                            </div>

                            <button
                                class="w-full justify-center py-1 bg-[#C57C15] hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2"
                                id="Register"
                                name="Register"
                                type="submit"
                            >
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BaytonBeach