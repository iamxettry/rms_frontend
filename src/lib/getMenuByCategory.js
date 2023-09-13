// http://127.0.0.1:8000/api/menu/menu-list/




const getMenuByCategory =async (category) => {
    try {
       const res= await fetch(`http://127.0.0.1:8000/api/menu/filtered-menu-list/${category}/`,{ next: { revalidate: 10 } })
    
     
       if (!res.ok) {
          return undefined
          
       }
       return res.json()
    } catch (error) {
       return ("Fetch Error")
    }
    
    }
    
    export default getMenuByCategory