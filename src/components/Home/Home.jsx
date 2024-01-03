import { useEffect, useState } from 'react';
import { fetchUsers } from '../../api/api';

export const Home = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    setLoader(true);

    try {
      const resalt = await fetchUsers();
      setLoader(false);
      return setUsers(resalt.users);
    } catch (err) {
      setLoader(false);
      return setError(err.message);
    }
  };

  return (
    <>
      <h2>Home</h2>
      {loader ? (
        <h3>...Loader</h3>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <ul>
          {users.map(user => {
            return <li key={user.id}>{user.lastName}</li>;
          })}
        </ul>
      )}
    </>
  );
};
