import { useEffect, useState } from 'react';

function UserDisplay() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (user) {
    return <div>Welcome, {user.name}!</div>;
  } else {
    return null;
  }
}