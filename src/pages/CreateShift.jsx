import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loadUser } from '../Redux/actions/authActions';
import { createShifts, fetchShifts } from '../Redux/actions/shiftActions';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { fetchBarberShop } from '../Redux/actions/barberShopActions';

const barbers = [
    { id: 1, name: "John Doe" },
    // { id: 2, name: "Jane Smith" },
];

// const barberShops = [
//     { id: 3, name: "Downtown Barber Shop" },
//     { id: 4, name: "Uptown Hair Studio" },
// ];
function CreateShift() {
    const navigate = useNavigate(); // Declara useNavigate
    const dispatch = useDispatch();
    // const [email, setEmail] = useState('');

    const { status, isLoggedIn, error, token, name, role } = useSelector((state) => state.authenticateUser);
    const { shifts } = useSelector((state) => state.shiftReducer);
    console.log(shifts);
    const email = useSelector((state) => state.authenticateUser.email) || localStorage.getItem('email');

    console.log(status, isLoggedIn, error, token, name);
    console.log(email);
    console.log(role);



    useEffect((shiftData) => {
        if (isLoggedIn && token && email) {
            console.log("entro al if de isLoggedIn y token");

            dispatch(loadUser(email))
                .unwrap().then((user) => {
                    console.log("entro al then de loadUser");
                    // dispatch(fetchShifts())
                    // dispatch(createShifts(shiftData))
                }).catch((error) => {
                    console.error('Error loading user:', error);
                    navigate('/login');
                });

        } else {
            navigate('/login');
        }
    }, [email, isLoggedIn, navigate, dispatch, token, role]);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }


    });
//------------------------------- ↓↓↓↓↓↓↓ ----------------------------------------//



    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedBarber, setSelectedBarber] = useState("");
    const [selectedBarberShop, setSelectedBarberShop] = useState("");

    const { barberShops } = useSelector((state) => state.barberShopReducer)
    console.log(barberShops);


    useEffect(() => {

        if (isLoggedIn && token) {
            dispatch(fetchBarberShop()).catch((error) => {
                console.error('Error loading user:', error);
                navigate('/created-barberShops');
            });

        } else {

            // Redirigir al usuario si no está autenticado
            navigate('/login'); // Cambia '/login' por la ruta de tu página de login
        }
    }, [isLoggedIn, dispatch, navigate])


    const handleDateClick = (info) => {
        setSelectedDay(info.dateStr);
    };

    const handleTimeChange = (event) => {
        const selected = event.target.value;
        const maxTime = "18:00";
    
        // Validar si la hora seleccionada está dentro del rango permitido
        if (selected > maxTime) {
            alert(`Por favor selecciona una hora antes de las ${maxTime}`);
            setSelectedTime(""); // Reinicia el campo si está fuera del rango
        } else {
            setSelectedTime(selected);
        }
    };

    const handleSubmit = () => {
        if (!selectedDay || !selectedTime || !selectedBarber || !selectedBarberShop) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const shiftData = {
            price: 0,
            barberID: selectedBarber,
            barberShopID: selectedBarberShop,
            day: selectedDay,
            shiftTime: selectedTime,
        };

        dispatch(createShifts(shiftData));
    };

    console.log(selectedBarberShop);
    console.log(selectedDay);
    console.log(selectedTime);
    
    
    
    return (

        <>
            <div className=' min-h-[100vh] '>
                <div className=' h-[100px] flex justify-end items-start'>
                    <Link to="/created-shifts">
                        <button className='p-2 bg-[#48e] rounded-lg mt-[5px] border-2 border-[#48e] text-white hover:bg-[#49e]'>
                            Shifts Created
                        </button>
                    </Link>
                </div>
                <h1 className="text-3xl font-bold text-center mb-8">Welcome, {name}!</h1>

                <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Crear Turno</h1>
      
      <div className="mb-4">
        <label className="block font-bold mb-2">Seleccionar Barbero</label>
        <select
          className="p-2 border rounded w-full"
          value={selectedBarber}
          onChange={(e) => setSelectedBarber(e.target.value)}
        >
          <option value="">-- Seleccionar --</option>
          {barbers.map((barber) => (
            <option key={barber.id} value={barber.id}>
              {barber.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">Seleccionar Barbería</label>
        <select
          className="p-2 border rounded w-full"
          value={selectedBarberShop}
          onChange={(e) => setSelectedBarberShop(e.target.value)}
        >
          <option value="">-- Seleccionar --</option>
          {barberShops.map((shop) => (
            <option key={shop.id} value={shop.id}>
              {shop.premiseName}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">Seleccionar Día</label>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
        />
        {selectedDay && (
          <p className="mt-2">Día seleccionado: {selectedDay}</p>
        )}
      </div>


      <div className="mb-4">
        <label className="block font-bold mb-2">Seleccionar Hora</label>
        <input
          type="time"
          className="p-2 border rounded w-full"
          value={selectedTime}
          onChange={handleTimeChange}
          max="19:00"
        />
      </div>

      <button
        className="p-2 bg-blue-500 text-white rounded"
        onClick={handleSubmit}
      >
        Crear Turno
      </button>
    </div>
            </div>
        </>
    )
}

export default CreateShift