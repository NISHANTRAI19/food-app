import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice";

const appStore = configureStore({
    reducer: {
        cartSlice,
    }
});

export default appStore;