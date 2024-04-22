import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredProducts: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_PRODUCTS(state, action) {
      const { products, search } = action.payload;
      const tempProducts = products.filter((product) => {
        const productName = product.name ?? ''; // Use empty string if name is undefined
        const productCategory = product.category ?? ''; // Use empty string if category is undefined

        return (
          productName.toLowerCase().includes(search.toLowerCase()) ||
          productCategory.toLowerCase().includes(search.toLowerCase())
        );
      });


      state.filteredProducts = tempProducts;
    },
  },
});

export const { FILTER_PRODUCTS } = filterSlice.actions;

export const selectFilteredPoducts = (state) => state.filter.filteredProducts;

export default filterSlice.reducer;
