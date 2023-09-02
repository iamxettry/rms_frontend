// http://127.0.0.1:8000/api/menu/menu-list/



const getMenu =async () => {
    const res= await fetch('http://127.0.0.1:8000/api/menu/menu-list/', { next: { revalidate: 0 } })
   
    
    if (!res.ok) {
       return undefined
       
    }
    return res.json()
   }
   
   export default getMenu