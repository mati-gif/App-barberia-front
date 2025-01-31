import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Swal from 'sweetalert2';


// Define the base URL for the API
const API_URL = 'https://shift-management-api-6ade.onrender.com';

export const fetchShifts = createAsyncThunk('fetchShifts', async (_, { rejectWithValue }) => {

    const token = localStorage.getItem('token');
    // console.log(token);

    if (!token) {
        return rejectWithValue("No token found");
    }

    try {


        const response = await axios.get(`${API_URL}/api/Shift`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data);

        console.log(response);

        return response.data; // Devuelve la lista de cuentas
    }
    catch (error) {

        return rejectWithValue(error.response ? error.response.data : error.message);

    }
})

export const createShifts = createAsyncThunk("createShifts", async (shiftData, { rejectWithValue }) => {


    // console.log(shiftData);

    const token = localStorage.getItem("token")

    if (!token) {
        console.log("token not found");
    }

    try {

        console.log(shiftData);

        const response = await axios.post(`${API_URL}/api/Shift`, shiftData, {

            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        console.log("respuesta de crear un turno", response);
        Swal.fire({
            icon: 'success',
            title: 'shift created successfully',
            text: `Your shift has been created successfully.`,
        });

        console.log(response.data);

        return response.data;

    } catch (error) {


        console.log("entro por el catch y este es el error del back para la solicitud de shift", error);

        const errorBack = error.response.data
        console.log("este es el string del error del back para la solicitud de shift", errorBack);



        Swal.fire({
            icon: 'error',
            title: 'Error en la solicitud de shifts',
            text: error.response.data,
        });
        return rejectWithValue(errorBack);
    }
})

export const deleteShift = createAsyncThunk("deleteShift", async (id, { rejectWithValue }) => {

    try {

        const token = localStorage.getItem("token")
        const url = `https://shift-management-api-6ade.onrender.com/api/Shift/${id}`
        console.log("URL generada para updatePrice:", url);

        const response = await axios.delete(url, {

            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        console.log(response);

        Swal.fire({
            icon: 'success',
            title: 'The Shifts was delete sussesfully',
            text: `The Shifts was delete to .`,
        });

        // Retorna el id del turno eliminado como payload
        console.log(id);
        
        return { id };  // Esto será lo que llega al reducer

        // const responseData = response.data;
        // console.log(responseData);

        // return responseData
    }
    catch (error) {


        Swal.fire({
            icon: 'error',
            title: 'Error to delete services',
            text: error.response.data,
        });
        return rejectWithValue(error.response.data);
    }
})