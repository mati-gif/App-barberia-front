import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';

const store = configureStore({
    reducer: {
        authenticateUser: authReducer,
        shiftReducer: shiftReducer,
    },
});

export default store;