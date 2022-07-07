import { combineReducers, configureStore } from '@reduxjs/toolkit';
import catsSlice from './catsSlice';


const rootReducer = combineReducers({
	toolkit: catsSlice
})

export const store = configureStore({
	reducer: rootReducer,
});

export default store;