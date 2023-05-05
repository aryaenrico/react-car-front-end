import { configureStore } from "@reduxjs/toolkit";
import  mobilReducer  from "./mobil/mobil.slice";


export default configureStore({
      reducer:{
            mobil:mobilReducer
      }
})