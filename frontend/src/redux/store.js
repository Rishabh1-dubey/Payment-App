import { configureStore}  from "@reduxjs/toolkit"
import userSlice from "./userSlice";


const store = configureStore({
    reducer:{
        app:userSlice
    }
})

export default store;