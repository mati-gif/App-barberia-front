import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
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
            // Navigate("/created-services")
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

export const updatePrice = createAsyncThunk("updatePrice", async ({ id, newPrice }, { rejectWithValue }) => {

    try {


        console.log({ id, newPrice });

        const token = localStorage.getItem("token");
        console.log(token);
        const url = `https://shift-management-api-6ade.onrender.com/api/Service/edit?id=${id}&price=${newPrice}`
        console.log("URL generada para updatePrice:", url);

        const response = await axios.put(url, null, {  // El segundo argumento es el cuerpo (null en este caso)
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response);

        Swal.fire({
            icon: 'success',
            title: 'The price was updated sussesfully',
            text: `The price was updated to ${newPrice}.`,
        });
        const responseData = response.data;
        console.log(responseData);

        return { id, price: newPrice }

    }
    catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error al actualizar el precio',
            text: error.response.data,
        });
        return rejectWithValue(error.response.data);
    }

})


export const deleteServices = createAsyncThunk("deleteServices", async (id, { rejectWithValue }) => {

    try {
        const token = localStorage.getItem("token")
        console.log(token);
        const url = `https://shift-management-api-6ade.onrender.com/api/Service/${id}`
        console.log("URL generada para updatePrice:", url);
        const response = await axios.delete(url, {
            headers:
            {
                Authorization: `Bearer ${token}`
            },
        })
        console.log(response);

        Swal.fire({
            icon: 'success',
            title: 'The services was delete sussesfully',
            text: `The services was delete to .`,
        });

        const responseData = response.data;
        console.log(responseData);

        return responseData


    }
    catch (error){
        Swal.fire({
            icon: 'error',
            title: 'Error to delete services',
            text: error.response.data,
        });
        return rejectWithValue(error.response.data);
    }
})