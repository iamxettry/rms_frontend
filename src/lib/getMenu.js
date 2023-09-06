// http://127.0.0.1:8000/api/menu/menu-list/




const getMenu =async () => {
   try {
      const res= await fetch('http://127.0.0.1:8000/api/menu/menuitems/',{ next: { revalidate: 0 } })
   
    
      if (!res.ok) {
         return undefined
         
      }
      return res.json()
   } catch (error) {
      return ("Fetch Error")
   }
   
   }
   
   export default getMenu