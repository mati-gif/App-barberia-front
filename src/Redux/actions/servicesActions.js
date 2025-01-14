import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
// import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'; // Importa SweetAlert2

const API_URL = 'https://shift-management-api-6ade.onrender.com';


// Acción asincrónica para crear un préstamo
export const createServices = createAsyncThunk('createServices',
    async (servicesData, { rejectWithValue }) => {

        console.log(servicesData);

        try {

            console.log(servicesData);

            const token = localStorage.getItem('token');

            const response = await axios.post(`${API_URL}/api/Service`, servicesData, {
                headers: {
                    Authorization: `Bearer ${token}`, // Incluye el token en los encabezados
                },
            });


            console.log("Respuesta de crear services:", response);
            Swal.fire({
                icon: 'success',
                title: 'services created successfully',
                text: `Your services has been created successfully.`,
            });
            console.log(response.data);

            return response.data;
        } catch (error) {
            // Captura los mensajes de error del backend

            console.log("entro por el catch y este es el error del back para la solicitud de services", error);

            const errorBack = error.response.data
            console.log("este es el string del error del back para la solicitud de services", errorBack);



            Swal.fire({
                icon: 'error',
                title: 'Error en la solicitud de services',
                text: error.response.data,
            });
            return rejectWithValue(errorBack);
        }
    }
);

export const fetchServices = createAsyncThunk("fetchServices", async (_, { rejectWithValue }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        console.log("token not found");

    }

    try {

        console.log(fetchServices);
        
        const response = await axios.get(`${API_URL}/api/Service`, {

            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        console.log(response);

        console.log(response.data);
        
        return response.data;

    }
    catch (error) {

        return rejectWithValue(error.response ? error.response.data : error.message);
    }


})