import { createSlice } from "@reduxjs/toolkit"
import type { Login } from "../../utils/interfaces"
import { loginFetch } from "../actions/loginAction"

const loginSlice = createSlice({
  name:"login",
  initialState: {
  login: {} as Login,
    status:""
  },
  reducers:{},
  extraReducers: builder => {
    builder
      .addCase(loginFetch.pending, (state) => {
        state.status = "Pending...";
      })
      .addCase(loginFetch.fulfilled, (state,action) =>{
        state.status = action.payload;
        state.status ="";
      })
      .addCase(loginFetch.rejected,(state) => {
        state.status = "Error!";
      })
  }
})
export default loginSlice