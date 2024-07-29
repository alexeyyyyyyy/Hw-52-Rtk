import { createSlice } from "@reduxjs/toolkit"
import { registerFetch } from "../actions/accountAction"
import type { User } from "../../utils/interfaces"

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {} as User,
    status: ""
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerFetch.pending, (state) => {
        state.status = "Pending...";
      })
      .addCase(registerFetch.fulfilled,(state,action) => {
        state.user = action.payload;
        state.status = "";
      })
      .addCase(registerFetch.rejected,(state) => {
        state.status = "ERROR!";
      })
  }
})

export default userSlice
