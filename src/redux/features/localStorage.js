"use client"
import { useEffect } from "react"

const storeToken = (value) => {
    if (value) {
        const { access, refresh } = value
        localStorage.setItem('access_token', access)
        localStorage.setItem('refresh_token', refresh)
    }
  }
  
 
 // localStorage.js

const getToken = () => {
  if (typeof window !== 'undefined') {
    let access_token = localStorage.getItem('access_token');
    let refresh_token = localStorage.getItem('refresh_token');
    return { access_token, refresh_token };
  } else {
    // Handle the case when running on the server-side (if needed)
    return { access_token: null, refresh_token: null };
  }
};



  
  
  const removeToken = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
  }
  
  export { storeToken, getToken, removeToken }