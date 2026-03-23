import { useAuthContext } from '@/context/AuthProvider';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <p className="font-josefin text-2xl text-center">Loading...</p>;
  }

  if (user && user.role === 'admin') {
    return <Outlet />;
  } else {
    return <p>You do not have access to this page</p>;
  }
}
