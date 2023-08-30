import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiHeader= {
 
  'Content-Type': 'application/json',

}
const createRequest=(url,payload)=>({url,body:payload, method:'POST', Headers:apiHeader});


// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/users/'  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (payload) =>createRequest(`signup/`,payload),
    }),
    loginUser: builder.mutation({
      query: (payload) =>({
        url: 'login/',
        method: 'POST',
        body: payload,
        Headers:apiHeader
      }),
     
    }),
    getLoggedUser: builder.query({
      query: (access_token) => {
        return {
          url: 'profile/',
          method: 'GET',
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterUserMutation,useLoginUserMutation,useGetLoggedUserQuery } = userApi