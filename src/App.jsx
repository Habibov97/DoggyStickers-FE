import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import MainLayout from './layouts/MainLayout';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
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
