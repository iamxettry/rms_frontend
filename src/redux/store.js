import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import darkReducer from './features/darkModeSlice'
import { userApi } from './services/users/userApi'
import orderReducer from './features/orderSlice'
import userReducer from './features/authSlice'
export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    dark:darkReducer,
    counter:orderReducer,
    user:userReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})

setupListeners(store.dispatch)