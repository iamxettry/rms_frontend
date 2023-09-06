import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import darkReducer from './features/darkModeSlice'
import { userApi } from './services/users/userApi'
export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    dark:darkReducer,

  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})

setupListeners(store.dispatch)