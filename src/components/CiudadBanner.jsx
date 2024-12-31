import React from 'react'

function CiudadBanner() {
    const features = [
        {
            number: "20",
            description: "The team at Studio-D Brickell has over 20 years of experience in Miami as Hair Stylists. Whether you need a hair cut & blowout, Hydration Treatment with any Color, Balayage, Hair Extensions, Color & Highlights or Hair Relaxer you will receive the absolute best service in Miami, FL."
        },
        {
            number: "45",
            description: "We offer over 45 different Beauty Care Services. So it does not matter what you need done, we will make sure you leave as you want to look. Call Us today and schedule your next great look."
        },
        {
            number: "25",
            description: "Our staff at Studio-D Brickell includes 25 professional Hair Stylists, Nails Artist & Skin Care Technicians all with unique techniques, to satisfy your most demanding style. You deserve to look your best. Count on us to make it possible."
        }
    ]

    return (
        <>
            <section className="relative min-h-screen w-full overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/placeholder.svg?height=1080&width=1920"
                        alt="Miami skyline"
                        className="w-full h-full object-cover"
                    />
                    <div className=" absolute inset-0 
                    bg-[url(https://studio-dbrickell.com/wp-content/uploads/2022/12/shutterstock_1164253027-1-scaled.jpg)] bg-cover bg-center bg-no-repeat" /> {/* Dark blue overlay */}
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl font-light text-gray-200 mb-16">
                        WHY US?
                    </h2>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {features.map((feature, index) => (
                            <div key={index} className="space-y-4">
                                {/* Large Number */}
                                <div className="text-6xl font-bold  md:text-8xl  text-gray-200 tracking-wider">
                                    {feature.number}
                                </div>
                                {/* Description */}
                                <p className="text-gray-300 leading-relaxed ">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CiudadBanner