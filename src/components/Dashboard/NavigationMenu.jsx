import { NavLink } from 'react-router-dom';
import { PiStickerDuotone } from 'react-icons/pi';
import { FaBorderAll } from 'react-icons/fa';

const menuItems = [
  { to: '/admin/products', icon: <PiStickerDuotone size={18} />, label: 'Products' },
  { to: '/admin/orders', icon: <FaBorderAll size={16} />, label: 'Orders' },
];

const activeClass = 'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ' + 'bg-violet-600 text-white';

const inactiveClass =
  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ' +
  'text-slate-400 hover:text-white hover:bg-slate-700/60 transition-colors duration-200';

export default function NavigationMenu() {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 px-3 mb-1">Menu</p>
      {menuItems.map(({ to, icon, label }) => (
        <NavLink key={to} to={to} className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
          <span className="shrink-0">{icon}</span>
          <span>{label}</span>
        </NavLink>
      ))}
    </div>
  );
}
