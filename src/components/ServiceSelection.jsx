import React from 'react'

function ServiceSelection({ services, selectedService, onSelectService, onNext }) {
    console.log(services);
    console.log(selectedService);
    // console.log(onSelectService);
    
    
    
    return (
        <>
            <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Selecciona un servicio</h3>
                <div className="space-y-4">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-colors ${selectedService?.id === service.id ? "bg-indigo-100 border-indigo-500" : "bg-gray-50 hover:bg-gray-100"
                                }`}
                            onClick={() => onSelectService(service)}
                        >
                            <div>
                                <p className="font-medium text-gray-900">{service.name}</p>
                                <p className="text-sm text-gray-500">Category: {service.category}</p>
                            </div>
                            <p className="text-indigo-600 font-medium">${service.price}</p>
                        </div>
                    ))}
                </div>
                <button
                    className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                    onClick={onNext}
                    disabled={!selectedService}
                >
                    Continuar
                </button>
            </div>
        </>
    )
}

export default ServiceSelection