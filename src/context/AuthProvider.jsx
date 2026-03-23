import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './auth-context';
import { currentUser } from '@/api/auth.api';

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function restoreUser() {
      const token = localStorage.getItem('token');

      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const res = await currentUser();
        console.log('ME RESPONSE:', res);

        setUser(res.user ?? res);
      } catch (err) {
        console.log('Session restore failed!', err);
        localStorage.removeItem('token');
      } finally {
        setLoading(false);
      }
    }
    restoreUser();
  }, []);

  const login = (token, userData) => {
    localStorage.setItem('token', token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const value = { user, setUser, loading, login, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};

export { useAuthContext };
