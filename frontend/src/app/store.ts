import { configureStore } from '@reduxjs/toolkit'
import companyPrepReducer from '../features/companyPrep/companyPrepSlice'

export const store = configureStore({
  reducer: {
    companyPrep: companyPrepReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
