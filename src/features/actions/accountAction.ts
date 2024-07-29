import { createAsyncThunk } from "@reduxjs/toolkit"
import { BASE_URL } from "../../utils/constants"
import type { UserRequest } from "../../utils/interfaces"

export const registerFetch = createAsyncThunk(
  "account/registerFetch",
  async (registerUser:UserRequest, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}/user`, {
        method: "POST",
        body: JSON.stringify(registerUser),
        headers: {
          "Content-Type":"application/json"
        }
      })
      const data = await response.json()
      return data.body
    } catch (e) {
      return console.log(e)
    }
  }
)



