import { createSlice } from '@reduxjs/toolkit'

const projectsSlice = createSlice({
  name: 'projects',
  initialState: null,
  reducers: {
    setProjects: (state, action) => state = action.payload,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    resetProjects: state => state = [],
  },
})

export default projectsSlice.reducer
export const { setProjects, resetProjects } = projectsSlice.actions
