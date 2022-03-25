import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items:
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('cart') || '[]')
      : null,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    // actions
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        // the item remove from the basket.
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove product(id: ${action.payload.id} as is not in the basket)`
        );
      }
      state.items = newBasket;
      localStorage.removeItem('cart');
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items?.reduce((total, item) => total + item.price, 0);
export default basketSlice.reducer;
