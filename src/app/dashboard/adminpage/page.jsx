"use client"
import { useEffect, useState } from 'react';

const AdminPage = () => {
  const [adminPageHTML, setAdminPageHTML] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/admin/') // Replace with your Django admin URL
      .then((response) => response.text())
      .then((data) => setAdminPageHTML(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Django Admin Page</h1>
      <div dangerouslySetInnerHTML={{ __html: adminPageHTML }} />
    </div>
  );
};

export default AdminPage;
