import { Layoud } from 'Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { Users } from './Users/Users';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layoud />}>
        <Route index element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Route>
      <Route path="/*" element={<h1>404</h1>} />
    </Routes>
  );
};
