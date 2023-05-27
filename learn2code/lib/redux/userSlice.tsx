import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CourseActive = {
  course: string,
  percentage: number,
}

export type UserState = {
  _id: string | null,
  firstName: string | null,
  lastName: string | null,
  username: string | null,
  email: string | null,
  coursesActive: CourseActive[],
  coursesCompleted: string[],  // Assuming this is an array of course IDs
}

const initialState: UserState = {
  _id: null,
  firstName: null,
  lastName: null,
  username: null,
  email: null,
  coursesActive: [],
  coursesCompleted: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      // Modify the state based on action.payload
      state._id = action.payload._id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.coursesActive = action.payload.coursesActive;
      state.coursesCompleted = action.payload.coursesCompleted;
    },
  },
})

export const { login } = userSlice.actions

export default userSlice.reducer
