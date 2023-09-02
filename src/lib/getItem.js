export default async function getItem(id) {

        const res = await fetch(`http://127.0.0.1:8000/api/menu/menu-item/${id}/`, { next: { revalidate: 0 } });
        if (!res.ok) {
            return res.statusText
        }

        
        return await res.json();
    
}