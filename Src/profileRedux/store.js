import { configureStore } from "@reduxjs/toolkit";
import profileslice from "./slice";


const store = configureStore({
    reducer:
    {
        user:profileslice,
    },
});
 

export default store;