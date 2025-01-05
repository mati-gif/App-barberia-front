import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Swal from 'sweetalert2';


// Define the base URL for the API
const API_URL = 'https://shift-management-api-6ade.onrender.com';

export const fetchShifts = createAsyncThunk('fetchShifts', async (_, { rejectWithValue }) => {

    const token = localStorage.getItem('token');
    console.log(token);

    if (!token) {
        return rejectWithValue("No token found");
    }

    try{


        const response = await axios.get(`${API_URL}/api/Shift`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data);

        console.log(response);
        
        return response.data; // Devuelve la lista de cuentas
    }
    catch(error){

        return rejectWithValue(error.response ? error.response.data : error.message);

    }
})