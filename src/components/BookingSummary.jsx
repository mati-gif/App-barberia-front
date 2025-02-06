import React from 'react'
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { confirmShiftToClient } from '../Redux/actions/shiftActions';
function BookingSummary({ booking, onConfirm, onPrev }) {

    if (!booking.service || !booking.barber || !booking.shifts) {
        return <div>Error: Información de reserva incompleta</div>
    }

    const { id, name } = useSelector((state) => state.authenticateUser);
    console.log(name, id);

    const { confirmShift } = useSelector((state) => state.shiftReducer)

    console.log(confirmShift);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleConfirmShift = () => {

        if (!booking.service || !booking.shifts || !booking.clientID) {
            console.error("Faltan datos en booking");
            return;
        }
        const shiftId = booking.shifts.id;
        const clientId = booking.clientID;
        const servicesId = booking.service.id; // Ajusta si fuera otro campo o array

        // Despachamos la acción con los parámetros requeridos
        dispatch(confirmShiftToClient({ shiftId, clientId, servicesId }))
            .unwrap()
            .then(() => {
                console.log("Confirmación exitosa");
                // Por ejemplo, redirigir o actualizar el estado de la app
                navigate("/myShifts");
            })
            .catch((error) => {
                console.error("Error en la confirmación del turno", error);
            });

    }

    if (!booking.service || !booking.barber || !booking.shifts) {
        return <div>Error: Información de reserva incompleta</div>;
    }
    return (
        <>
            <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Resumen de tu reserva</h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="font-medium">Servicio: {booking.service.name}</p>
                    <p>Categoria: {booking.service.category} </p>
                    <p>Precio: ${booking.service.price}</p>
                    {/* <p className="mt-2">Barbero: {booking.barber}</p> */}
                    <p>
                        Fecha: {`${booking.shifts.day}`}
                        {/* {format(new Date(`${booking.date.toDateString()} ${booking.time}`), "d 'de' MMMM 'a las' HH:mm", {
                            locale: es,
                        })} */}
                    </p>
                    <p>
                        Hora: {booking.shifts.shiftTime}
                    </p>
                    <p>
                        Cliente: {name}
                    </p>
                </div>
                <div className="mt-6 flex justify-between">
                    <button
                        className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
                        onClick={onPrev}
                    >
                        Atrás
                    </button>
                    {/* <button
                        className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                        onClick={onConfirm}
                    >
                        Confirmar reserva
                    </button> */}
                    <button
                        className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
                        // onClick={onConfirm}
                        onClick={() => handleConfirmShift()}
                    >
                        Confirmar reserva
                    </button>
                </div>
            </div>
        </>
    )
}

export default BookingSummary