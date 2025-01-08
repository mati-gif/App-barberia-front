import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
// import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'; // Importa SweetAlert2



const API_URL = 'https://shift-management-api-6ade.onrender.com';

// Acción asincrónica para crear un préstamo
export const createBarberShop = createAsyncThunk( 'createBarberShop',
    async (barberShopData, { rejectWithValue }) => {

    console.log(barberShopData);
            
        try {

            console.log(barberShopData);
            
            const token = localStorage.getItem('token');

            const response = await axios.post(`${API_URL}/api/BarberShop`, barberShopData, {
                headers: {
                    Authorization: `Bearer ${token}`, // Incluye el token en los encabezados
                },
            });


            console.log("Respuesta de crear barberShop:", response);
            Swal.fire({
                icon: 'success',
                title: 'BarberShop created successfully',
                text: `Your BarberShop has been created successfully.`,
            });
            console.log(response.data);

            return response.data;
        } catch (error) {
            // Captura los mensajes de error del backend

            console.log("entro por el catch y este es el error del back para la solicitud de barberShop", error);

            const errorBack = error.response.data
            console.log("este es el string del error del back para la solicitud de barberShop", errorBack);



            Swal.fire({
                icon: 'error',
                title: 'Error en la solicitud de barberShop',
                text: error.response.data,
            });
            return rejectWithValue(errorBack);
        }
    }
);