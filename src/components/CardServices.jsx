import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchServices, updatePrice } from '../Redux/actions/servicesActions';

function CardServices(props) {
    const dispatch = useDispatch();

    const { services } = useSelector((item) => item.servicesReducer)
    console.log(services);
    const { isLoggedIn, token } = useSelector((state) => state.authenticateUser);
    console.log(isLoggedIn);
    console.log(token);
    // const { id } = useParams(); // Obtén el id de la URL
    const navigate = useNavigate(); // Hook para navegar programáticamente
    const [isEditting, setIsEditting] = useState(false)
    const [newPrice, setNewPrice] = useState("");

    const handleChange = (e) => {

        const value = e.target.value;
        console.log(value);
        setNewPrice(value)

    }
    const handleEdit = (id) => {

        console.log("se hizo clic en la funcion");

        const findId = services.find((cc) => cc.id === parseInt(id))
        console.log(findId);

        setIsEditting(true)
    }

    const handleCancel = () => {
        setIsEditting(false)
        setNewPrice("")
    }

    const handleSave = (id) => {
        if (newPrice && !isNaN(newPrice)) {
            dispatch(updatePrice({ id, newPrice: parseFloat(newPrice) })) // Asegúrate de enviar un número válido
                .then(() => {
                    setIsEditting(false);
                    setNewPrice(""); // Limpiamos el campo de entrada
                })
                .catch((error) => console.error("Error updating price:", error));
        } else {
            Swal.fire({
                icon: "error",
                title: "Invalid Price",
                text: "Please enter a valid price.",
            });
        }
    };
    

    
    useEffect(() => {
        console.log("se ejecuto este useEffect");
        
        // setNewPrice(newPrice)
        // console.log(services.price);
        
        
    }, [dispatch,newPrice])
    return (
        <>

            <div
                className="mx-auto border-4 border-[#8aa] w-full rounded-lg  border-stone bg-stone-100 p-4 shadow-lg sm:p-6 lg:p-8"
            >
                <div className="flex items-center gap-4">
                    <p className="font-medium sm:text-lg text-emerald-600">{props.name}</p>
                </div>
                <p className="mt-4 text-gray-600">{props.category}
                </p>
                {isEditting ? (
                    <>
                        {/* <div className="mt-4"> */}
                        <label className="block text-gray-600">
                            New Price:
                            <input
                                type="number"
                                value={newPrice}
                                onChange={handleChange}
                                className=" w-full rounded-lg border border-gray-300 "
                            />
                        </label>
                        {/* </div> */}
                        <div className="mt-6 sm:flex sm:gap-4">
                            <button
                                onClick={() => handleSave(props.id)}
                                className="inline-block w-full rounded-lg bg-emerald-500 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-emerald-700 sm:w-auto"
                            >
                                Save
                            </button>
                            <button
                                onClick={handleCancel}
                                className="inline-block w-full rounded-lg bg-gray-500 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-gray-700 sm:w-auto"
                            >
                                Cancel
                            </button>
                        </div>
                    </>

                ) : (

                    <>
                        <p className="mt-4 text-gray-600">Precio: {props.price} $</p>
                        <div className="mt-6 sm:flex sm:gap-4">
                            <button
                                onClick={() => handleEdit(props.id)}
                                className="inline-block w-full rounded-lg bg-emerald-500 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-emerald-700 sm:w-auto"
                            >
                                Edit
                            </button>
                            <button
                                className="mt-2 inline-block w-full rounded-lg bg-red-500 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-red-700 sm:mt-0 sm:w-auto"
                            >
                                Delete
                            </button>
                        </div>
                    </>
                )


                }



                {/* <div className="mt-6 sm:flex sm:gap-4">
                    <button onClick={() => handleEdit(props.id)}
                    
                        className="inline-block w-full rounded-lg bg-emerald-500 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-emerald-700 sm:w-auto"
                    >
                        Edit
                    </button>

                    <button
                        className="mt-2 inline-block w-full rounded-lg bg-red-500 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-red-700 sm:mt-0 sm:w-auto"
                    >
                        Delete
                    </button>
                </div> */}
            </div>

        </>
    )
}

export default CardServices