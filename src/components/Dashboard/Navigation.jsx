import NavigationMenu from './NavigationMenu';
import Profile from './Profile';
import Icon from '../../assets/icon.svg?react';

export default function Navigation() {
  return (
    <aside className="w-64 h-screen flex flex-col bg-slate-900 dark:bg-slate-950 border-r border-slate-700/50 shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 py-5 border-b border-slate-700/50">
        <div className="w-8 h-8 text-violet-400">
          <Icon className="w-full h-full" />
        </div>
        <span className="text-white font-bold text-lg font-josefin tracking-tight">
          Doggy<span className="text-violet-400">Stickers</span>
        </span>
      </div>

      {/* Nav sections */}
      <div className="flex flex-col gap-6 flex-1 px-3 py-5 overflow-y-auto">
        <Profile />
        <div className="h-px bg-slate-700/50" />
        <NavigationMenu />
      </div>

      {/* Bottom badge */}
      <div className="px-5 py-4 border-t border-slate-700/50">
        <p className="text-xs text-slate-500 font-josefin">Admin Panel v1.0</p>
      </div>
    </aside>
  );
}
