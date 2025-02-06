import React from "react";

function BannerInBarberShop() {
    return (
        <div className="bg-[url(https://fademastersofmiami.com/wp-content/uploads/2024/03/vimeobg.jpg)] bg-cover bg-center bg-no-repeat border-4 border-[#45a] w-full h-[50vh]">
            <h2 className="text-[#fff] text-[50px] font-serif font-bold text-center">
                Our Locations
            </h2>
            <div className=" h-[50%] flex justify-center items-center">
                <button className="flex flex-col justify-center items-center bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-y-3">
                    Locations
                    <svg
                        className="w-5 h-5 transform rotate-90"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default BannerInBarberShop;
