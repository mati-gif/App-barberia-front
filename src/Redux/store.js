import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import shiftReducer from './reducers/shiftReducer';

const store = configureStore({
    reducer: {
        authenticateUser: authReducer,
        shiftReducer: shiftReducer,
    },
});

export default store;