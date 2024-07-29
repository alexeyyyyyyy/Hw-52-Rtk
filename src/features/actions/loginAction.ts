import { createAsyncThunk } from "@reduxjs/toolkit"
import type { LoginRequest } from "../../utils/interfaces"
import { BASE_URL } from "../../utils/constants"

export const loginFetch = createAsyncThunk(
  "account,loginFetch",
  async (loginUser: LoginRequest, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginUser),
        redirect: "follow"
      })
      const data = await response.json()
      return data.body
    }catch (e:any) { // хотел сделать string . но не вышло
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)