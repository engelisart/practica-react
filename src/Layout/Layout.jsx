import { NavLink, Outlet } from 'react-router-dom';

export const Layoud = () => {
  return (
    <>
      <header>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/users'}>Users</NavLink>
      </header>
      <Outlet />
    </>
  );
};
