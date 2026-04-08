import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import MainLayout from './layouts/MainLayout';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import MyProfile from './pages/MyProfile';
import ProductsDashboard from './components/Dashboard/ProductsDashboard';
import CreateProduct from './components/Dashboard/CreateProduct';
import ProductsList from './components/Dashboard/ProductsList';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route element={<DashboardLayout />}>
                <Route path="/admin" element={<Dashboard />}>
                  <Route index element={<MyProfile />} />
                  <Route path="/admin/users" element={<Users />} />
                  <Route path="/admin/my-profile" element={<MyProfile />} />
                  <Route element={<ProductsDashboard />}>
                    <Route path="/admin/products" element={<ProductsList />} />
                    <Route path="/admin/products/create-product" element={<CreateProduct />} />
                  </Route>
                </Route>
                <Route path="/user" element={<Dashboard />}>
                  <Route path="/user/my-profile" element={<MyProfile />} />
                </Route>
              </Route>
            </Route>
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
            </Route>
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
