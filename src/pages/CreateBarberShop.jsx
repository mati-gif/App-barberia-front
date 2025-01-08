import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createBarberShop } from '../Redux/actions/barberShopActions';
import Swal from 'sweetalert2';

function CreateBarberShop() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    // const { status, isLoggedIn, error, token, name } = useSelector((state) => state.authenticateUser);
    // console.log(status, isLoggedIn, error);
    // console.log(name);
    // console.log(token);


    const { premiseName, city, address, status, error, loading } = useSelector((state) => state.barberShopReducer)

    console.log(premiseName);
    console.log(city);
    console.log(address);
    console.log(status);
    console.log(error);
    console.log(loading);
    // Estado local para manejar los cambios
    const [formData, setFormData] = useState({
        premiseName: premiseName || "",
        address: address || "",
        city: city || "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Actualiza el estado local del formulario
        setFormData({
            ...formData,
            [name]: value,
        });

    };

    const handleSubmit = async () => {

        console.log("Entro por la funcion");

        try {
            // let barberShopData = {
            //     premiseName: premiseName,
            //     address: address,
            //     city: city
            // }
            // console.log(barberShopData);

            console.log(formData);


            await dispatch(createBarberShop(formData)).unwrap();

            console.log(formData);
            
            // // Si la creación del préstamo es exitosa
            await Swal.fire({
                icon: "success",
                title: "BarberShop created successfully",
                text: "The BarberShop has been created successfully.",
            });



        } catch (error) {

            await Swal.fire({
                icon: "error",
                title: "Error",
                text: error,
            });


            console.log(error);

            const newErrors = {};

            console.log("error en la variable newError", newErrors);

        }
    }




    return (
        <div className='border-4 border-blue-500  min-h-[100vh] '>
            <div className='border-2 border-[#e78] h-[100px] flex justify-end items-start'>
                <button className='p-2 bg-[#48e] rounded-lg mt-[5px] border-2 border-[#48e] text-white hover:bg-[#49e]'>
                    BarberShops Created
                </button>
            </div>
            <h2 className="text-3xl font-bold text-center mb-8">Complete the form to create a new BarberShop</h2>


            <div className="flex justify-center items-center min-h-screen">
                <div
                    className="max-w-sm w-full rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200 dark:border-gray-700"
                >
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold">Complete with the form</h1>

                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="premiseName"
                            >BarberShop Name </label
                            >
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                id="premiseName"
                                name='premiseName'
                                required=""
                                placeholder='Type a name for BarberShop'
                                value={formData.premiseName}
                                onChange={handleChange}

                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="Address"
                            >Address </label
                            >
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                id="Address"
                                required=""
                                placeholder='Type an address for BarberShop'
                                value={formData.address}
                                onChange={handleChange}
                                name='address'
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="city"
                            >City </label
                            >
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                id="city"
                                required=""
                                placeholder='Type a city for BarberShop'
                                value={formData.city}
                                onChange={handleChange}
                                name='city'
                            />
                        </div>

                        <button
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-[#4285F4] text-white"
                            onClick={handleSubmit}
                            type='button'
                        >
                            <div className="flex items-center justify-center">
                                Create a BarberShop
                            </div>
                        </button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default CreateBarberShop