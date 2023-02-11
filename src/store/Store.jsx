
import { configureStore } from "@reduxjs/toolkit";
import Counterslice from "./Counterslice";

// store configuration

const userStore =  configureStore({
   reducer:{
    cart: Counterslice
   },
})

export default userStore;