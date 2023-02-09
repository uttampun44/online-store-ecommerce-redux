
import { configureStore } from "@reduxjs/toolkit";
import Counterslice from "./Counterslice";

export default configureStore({
   reducer:{
    cart: Counterslice
   }
})
