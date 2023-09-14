
const getCategoryList= async ()=>{
    
    try {

        const res =await fetch(`http://127.0.0.1:8000/api/menu/category/`)
        if (res.ok) {
            
            return await res.json() ;
        }else{
            return await res.json()
        }
    } catch (error) {
        return 'Network Error'
    }
    


}

export default getCategoryList