import { NavLink } from 'react-router-dom';
import { ImProfile } from 'react-icons/im';
import { FaRegUserCircle } from 'react-icons/fa';
import { useAuthContext } from '@/context/AuthProvider';

const profileItems = [
  { to: '/admin/users', icon: <FaRegUserCircle size={16} />, label: 'Users' },
  { to: '/admin/my-profile', icon: <ImProfile size={16} />, label: 'My Profile' },
];

const activeClass = 'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ' + 'bg-violet-600 text-white';

const inactiveClass =
  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ' +
  'text-slate-400 hover:text-white hover:bg-slate-700/60 transition-colors duration-200';

export default function Profile() {
  const { user, logout } = useAuthContext();

  return (
    <div className="flex flex-col gap-1">
      {/* User info card */}
      <div className="flex items-center gap-3 px-3 py-3 mb-2 rounded-lg bg-slate-800/60 border border-slate-700/40">
        <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center shrink-0">
          <span className="text-xs font-bold text-white uppercase">{user?.username?.[0] ?? '?'}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white truncate">{user?.username}</p>
          <p className="text-xs text-violet-400 font-medium capitalize">{user?.role ?? 'admin'}</p>
        </div>
      </div>

      <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 px-3 mb-1">Profile</p>

      {profileItems.map(({ to, icon, label }) => (
        <NavLink key={to} to={to} className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
          <span className="shrink-0">{icon}</span>
          <span>{label}</span>
        </NavLink>
      ))}

      {/* Logout */}
      <button
        onClick={logout}
        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium 
                   text-slate-400 hover:text-red-400 hover:bg-red-500/10 
                   transition-colors duration-200 mt-1 w-full text-left"
      >
        <span className="shrink-0 text-base">→</span>
        <span>Logout</span>
      </button>
    </div>
  );
}
