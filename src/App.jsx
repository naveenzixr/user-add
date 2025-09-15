import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '', age: '', city: '' });

  // 🔍 Retrieve data
  useEffect(() => {
    fetch('http://localhost:5000/get-users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  // ➕ Add data
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/add-user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    .then(() => {
      
      window.location.reload();
    });
  };

  return (
    <div className="container">
      <div className="header">
         <h1 className="text-2xl mb-4">User List</h1>

      </div>
     
      <div className="holder">
         <form onSubmit={handleSubmit} className="mb-4">
        <input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input type="number" placeholder="Age" onChange={(e) => setFormData({ ...formData, age: e.target.value })} />
        <input type="text" placeholder="City" onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
        <button type="submit">Add User</button>
      </form>

      <ul className="user-list">
  {users.map((user, index) => (
    <li key={index} className="user-card">
      <h3>{user.name}</h3>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>
    </li>
  ))}
</ul>


      </div>

     
    </div>
  );
}

export default App;
