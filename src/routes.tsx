import { Routes, Route } from 'react-router-dom';
import { ProtectedRoutes } from './components/ProtectedRoutes';
import { PublicRoutes } from './components/PublicRoutes';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';

const Router = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route path='/shop' element={<ShopPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
