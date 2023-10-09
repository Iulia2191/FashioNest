import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItemFavorite: (state,action) => {
      state.products=state.products.filter(item=>item.id !== action.payload)
    },
    resetFavorite: (state) => {
      state.products = []
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToFavorite,removeItemFavorite,resetFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;