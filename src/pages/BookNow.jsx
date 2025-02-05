import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker'
import ServiceSelection from '../components/ServiceSelection';
import BarberSelection from '../components/BarberSelection';
import DateTimeSelection from '../components/DateTimeSelection';
import BookingSummary from '../components/BookingSummary';
import { useNavigate } from 'react-router-dom';
import { fetchServices } from '../Redux/actions/servicesActions';
import { fetchBarberShop } from '../Redux/actions/barberShopActions';
// import ServiceSelection from "./components/ServiceSelection.jsx"
// import BarberSelection from "./components/BarberSelection.jsx"
// import DateTimeSelection from "./components/DateTimeSelection.jsx"
// import BookingSummary from "./components/BookingSummary.jsx"




const barbers = [
  { id: 1, name: "Juan Pérez" },
  { id: 2, name: "María García" },
  { id: 3, name: "Carlos Rodríguez" },
]
function BookNow() {
  // const { barberShops } = useSelector((state) => state.barberShopReducer)
  // console.log(barberShops);

  // const availableTimeSlots = {
  //     '2025-02-01': ['10:00', '11:00', '12:00', '13:00', '14:00'],
  //     '2025-02-02': ['10:30', '11:30', '12:30'],
  //     // Puedes agregar más fechas y horarios
  // }

  // const [selectedDate, setSelectedDate] = useState(new Date())
  // const [timeSlots, setTimeSlots] = useState([])
  // const [selectedTime, setSelectedTime] = useState(null)
  // const [customerName, setCustomerName] = useState('')
  // const [customerEmail, setCustomerEmail] = useState('')
  // const [customerPhone, setCustomerPhone] = useState('')
  // const [bookingConfirmed, setBookingConfirmed] = useState(false)

  // // Cada vez que cambia la fecha, actualizamos los horarios disponibles
  // useEffect(() => {
  //     const formattedDate = selectedDate.toISOString().split('T')[0]
  //     if (availableTimeSlots[formattedDate]) {
  //         setTimeSlots(availableTimeSlots[formattedDate])
  //     } else {
  //         setTimeSlots([])
  //     }
  //     setSelectedTime(null) // Reiniciamos la hora seleccionada al cambiar la fecha
  // }, [selectedDate])

  // // Función que simula el envío de la reserva
  // const handleBooking = (e) => {
  //     e.preventDefault()
  //     if (!selectedTime) {
  //         alert('Por favor, selecciona una hora disponible.')
  //         return
  //     }
  //     // Aquí agregarías la lógica para enviar la reserva a tu API
  //     console.log('Reserva confirmada para: ', {
  //         date: selectedDate.toISOString().split('T')[0],
  //         time: selectedTime,
  //         name: customerName,
  //         email: customerEmail,
  //         phone: customerPhone
  //     })
  //     setBookingConfirmed(true)
  // }
  //-----------------------------↑↑↑↑↑↑↑↑↑↑---------------------------------//



  //-----------------------------↓↓↓↓↓↓↓↓↓↓---------------------------------//
  const navigate = useNavigate(); // Declara useNavigate
  const dispatch = useDispatch();

  const { services } = useSelector((item) => item.servicesReducer)
  console.log(services);

  const { status, isLoggedIn, error, token, name, role, loading, id: clientID, id } = useSelector((state) => state.authenticateUser);
  console.log(id);
  console.log(clientID);


  const { barberShops } = useSelector((state) => state.barberShopReducer)
  console.log(barberShops);

  useEffect(() => {

    if (isLoggedIn && token) {
      dispatch(fetchBarberShop()).catch((error) => {
        console.error('Error loading user:', error);
        navigate('/myShifts');
      });

    } else {

      // Redirigir al usuario si no está autenticado
      navigate('/login'); // Cambia '/login' por la ruta de tu página de login
    }
  }, [isLoggedIn, dispatch, navigate])

  useEffect(() => {

    if (isLoggedIn && token) {
      dispatch(fetchServices()).catch((error) => {
        console.error('Error loading user:', error);
        navigate('/myShifts');
      });

    } else {

      // Redirigir al usuario si no está autenticado
      navigate('/login'); // Cambia '/login' por la ruta de tu página de login
    }
  }, [isLoggedIn, dispatch, navigate, token])

  const [step, setStep] = useState(1)
  const [booking, setBooking] = useState({
    service: null,
    barber: null,
    shifts: null,
    clientID: null, // se llenará automáticamente
    payShift: true, // valor por defecto
  })

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const updateBooking = (update) => {
    setBooking({ ...booking, ...update })
  }

  console.log(booking);

  // Cada vez que se actualice el usuario (o su id) asignamos el clientID en booking
  useEffect(() => {
    if (clientID) {
      updateBooking({ clientID });
    }
  }, [clientID]);
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="p-8 w-full">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1">Paso {step} de 4</div>
              <h2 className="text-2xl leading-tight font-bold text-gray-900 mb-6">Reserva tu cita</h2>
              {step === 1 && (
                <ServiceSelection
                  services={services}
                  selectedService={booking.service}
                  onSelectService={(service) => updateBooking({ service })}
                  onNext={nextStep}
                />
              )}
              {step === 2 && (
                <BarberSelection
                  barbers={barbers}
                  selectedBarber={booking.barber}
                  onSelectBarber={(barber) => updateBooking({ barber })}
                  onNext={nextStep}
                  onPrev={prevStep}
                />
              )}
              {step === 3 && (
                <DateTimeSelection
                  onSelectDateTime={(shifts) => updateBooking({ shifts })}
                  onNext={nextStep}
                  onPrev={prevStep}
                />
              )}
              {step === 4 && (
                <BookingSummary booking={booking} onConfirm={() => alert("Reserva confirmada!")} onPrev={prevStep} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookNow