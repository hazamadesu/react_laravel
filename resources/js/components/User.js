import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
  },[])

  const getUsers = async () => {
    const response = await axios.get('/api/user');
    setUsers(response.data.users)
  }

  return (
        <div>
            <h1>Userページ</h1>
            <ul>
                { users.map((user) =>
                  <li key={user.id}>
                    {user.name}
                    <Link to={`user/${user.id}`} className="ml-3">詳細</Link>
                  </li>)
                }
            </ul>
        </div>
    );
}

export default User;
