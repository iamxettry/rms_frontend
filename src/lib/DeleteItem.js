export default async function DeleteItem(id) {
  const res = await fetch(
    `http://127.0.0.1:8000/api/menu/menu-item/${id}/`,
    { cache: "no-store" },
    {
      method: "DELETE",
    }
  );
  if (!res.ok) {
    return res.statusText;
  }

  return await res.json();
}
