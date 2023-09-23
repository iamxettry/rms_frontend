// http://127.0.0.1:8000/api/menu/menu-list/




const getMenu =async (num=null,category=null) => {
   try {
      let url = `http://127.0.0.1:8000/api/menu/menuitems/`;
     
      if (num!==null && category !== null) {
         url += `?num_items=${num}&category=${category}`;
      }
      const res = await fetch(url);
   
      if (!res.ok) {
         return undefined
         
      }
      return res.json()
   } catch (error) {
      return ("Fetch Error")
   }
   
   }
   
   export default getMenu