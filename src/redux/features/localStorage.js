"use client"
import { useEffect } from "react"

const storeToken = (value) => {
    if (value) {
        const { access, refresh } = value
        localStorage.setItem('access_token', access)
        localStorage.setItem('refresh_token', refresh)
    }
  }
  
  // const getToken = () => {
  //   // let access_token = localStorage.getItem('access_token')
  //   let refresh_token = localStorage.getItem('refresh_token')
  //   const [access_token, setAccess_token] = useState('')
  //   // return { access_token, refresh_token }
  //   useEffect(() => {
  //     const storedAccess = parseInt(localStorage.getItem('access_token')) || 0;
  //     setCount(storedAccess);
  //   }, []);
  // }
  const getToken = () => {
    let access_token = localStorage.getItem('access_token')
    let refresh_token = localStorage.getItem('refresh_token')
    return { access_token, refresh_token }
  }

  
  
  const removeToken = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
  }
  
  export { storeToken, getToken, removeToken }