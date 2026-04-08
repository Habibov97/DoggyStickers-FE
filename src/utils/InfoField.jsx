export default function InfoField({ icon, label, value, capitalize }) {
  return (
    <div className="bg-slate-800/50 border border-slate-700/40 rounded-xl px-4 py-3">
      <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-1">
        {icon}
        <span>{label}</span>
      </div>
      <p className={`text-sm text-slate-200 font-medium truncate ${capitalize ? 'capitalize' : ''}`}>{value ?? '—'}</p>
    </div>
  );
}
