import React from 'react'

function BarberSelection({ barberShops,barbers, selectedBarber, onSelectBarber, onNext, onPrev }) {
    console.log(barbers,selectedBarber);
    console.log(barberShops);
    
    return (

        <>
            <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Elige tu barbero</h3>
                <div className="grid grid-cols-2 gap-4">
                    {barbers.map((barber) => (
                        <div
                            key={barber.id}
                            className={`p-4 rounded-lg cursor-pointer transition-colors ${selectedBarber?.id === barber.id ? "bg-indigo-100 border-indigo-500" : "bg-gray-50 hover:bg-gray-100"
                                }`}
                            onClick={() => onSelectBarber(barber)}
                        >
                            <p className="font-medium text-gray-900">{barber.name}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-6 flex justify-between">
                    <button
                        className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
                        onClick={onPrev}
                    >
                        Atrás
                    </button>
                    <button
                        className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                        onClick={onNext}
                        disabled={!selectedBarber}
                    >
                        Continuar
                    </button>
                </div>
            </div>
        </>
    )
}

export default BarberSelection