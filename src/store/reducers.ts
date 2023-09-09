import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { TypedUseSelectorHook } from 'react-redux'

import userSlice from './slices/userSlice'

const rootReducer = combineReducers({
  user: userSlice
})

const reduxStore = configureStore({ reducer: rootReducer })

export default reduxStore

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>();
