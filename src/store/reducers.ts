import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({})

const reduxStore = configureStore({ reducer: rootReducer })

export default reduxStore

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch
