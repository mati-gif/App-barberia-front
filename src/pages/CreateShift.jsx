import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CreateShift() {
    const navigate = useNavigate(); // Declara useNavigate
    const dispatch = useDispatch();
    // const [email, setEmail] = useState('');

    const { status, isLoggedIn, error, token, name } = useSelector((state) => state.authenticateUser);
    const { shifts } = useSelector((state) => state.shiftReducer);
    console.log(shifts);
    const email = useSelector((state) => state.authenticateUser.email) || localStorage.getItem('email');

    console.log(status, isLoggedIn, error, token, name);
    console.log(email);
  return (
    <>
    <div className='border-4 border-yellow-500  min-h-[100vh] '>
        <h1 className="text-3xl font-bold text-center mb-8">Welcome, {name}!</h1>
        {/* <div className="flex justify-center flex-wrap gap-10">
            {shifts && shifts.length > 0 ? (
                shifts.map((shift) => (

                 <ShiftsCard day={shift.day} time={shift.time} service={shift.service} price={shift.price} />   

                ))
            ) : (
                <p className="text-lg font-bold text-center text-red-600">Do not have Shifts yet.</p>
            )}
        </div> */}
    </div>
</>
  )
}

export default CreateShift