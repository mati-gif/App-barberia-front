import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Swal from 'sweetalert2';

// Define the base URL for the API
const API_URL = 'https://shift-management-api-a9a2.onrender.com';

// Register user action
export const registerUser = createAsyncThunk('registerUser', async (userData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${API_URL}/api/User`, userData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
}
);

// Authenticate user action( no tengo un endPoint que traiga al cliente autenticado)
export const authenticateUser = createAsyncThunk('authenticateUser', async (user, { rejectWithValue }) => {
    try {
        const response = await axios.post('https://shift-management-api-a9a2.onrender.com/api/Authentication/authenticate', user);
        console.log("Respuesta de login:", response);

        const token = response.data;
        console.log("Token recibido:", token);

        localStorage.setItem('token', response.data.token);
        console.log("Token almacenado en localStorage:", localStorage.getItem('token'));  // Verifica que el token se almacena correctamente

        // Mostrar alerta de éxito directamente en la acción
        Swal.fire({
            title: 'Login Successful!',
            text: 'You have been logged in successfully.',
            icon: 'success',
            confirmButtonText: 'OK',
        });

        // navigate("/")
        return token;
    
    } catch (error) {

        console.log("entro por el catch y este es el error del back", error);

        const errorBack = error.response.data
        console.log("este es el string del error del back", errorBack);
        return rejectWithValue(errorBack);
    }
}
);

// Load user action
export const loadUser = createAsyncThunk(
    'auth/loadUser',
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${API_URL}/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Logout user action
export const logoutUser = createAsyncThunk(
    'auth/logoutUser',
    async (_, { rejectWithValue }) => {
        try {
            localStorage.removeItem('token');
            return true;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);