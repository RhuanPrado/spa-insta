import { createSlice } from '@reduxjs/toolkit'
import { User } from 'src/models/user'

const userSlice = createSlice({
  name: 'user',
  initialState: null as User,
  reducers: {
    setUser: (state, action) => state = action.payload,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    resetUser: state => state = null,
  },
})

export default userSlice.reducer
export const { setUser, resetUser } = userSlice.actions
