import React from 'react'

function Maps() {
    return (
        <>
            <div id='contact' className=" border-4 border-[#45a] w-full min-h-[80vh]">
                <h2 className="text-[50px] font-serif font-bold text-center">
                    Where Find Us
                </h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114974.14840615666!2d-80.32400041379378!3d25.772474688326014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b71b5078f4b1%3A0xc16900e0f78c6f4d!2sFRESH%20%26%20FADED%20BARBERSHOP!5e0!3m2!1ses!2sar!4v1735681442931!5m2!1ses!2sar"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}

export default Maps