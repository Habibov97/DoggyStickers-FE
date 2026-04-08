import { Outlet } from 'react-router-dom';
import Navigation from '../components/Dashboard/Navigation';

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-slate-100 dark:bg-slate-950 overflow-hidden">
      <Navigation />
      <main className="flex-1 overflow-y-auto p-8 bg-[#0E172B]">
        <Outlet />
      </main>
    </div>
  );
}
