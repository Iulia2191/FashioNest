import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import cartReducer from './cartReducer';
import favoriteReducer from './favoriteReducer';


const rootReducer = combineReducers({
  cart: cartReducer,
  favorite: favoriteReducer,
});


export const store = configureStore({
  reducer: rootReducer,
});
