import { FaRegUserCircle, FaEnvelope, FaShieldAlt, FaLock } from 'react-icons/fa';
import { useAuthContext } from '@/context/AuthProvider';
import InfoField from '@/utils/InfoField';
import ResetPasswordForm from '@/components/Dashboard/ResetPasswordForm';

export default function MyProfile() {
  const { user } = useAuthContext();

  const initials = user?.username ? user.username.slice(0, 2).toUpperCase() : '??';

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-xl font-bold text-white font-josefin">My Profile</h1>
        <p className="text-sm text-slate-400 mt-0.5">Manage your account details</p>
      </div>

      {/* Profile card */}
      <div className="bg-slate-900 border border-slate-700/50 rounded-2xl overflow-hidden">
        {/* Banner */}
        <div className="h-24 bg-gradient-to-r from-violet-900/60 via-slate-800 to-slate-900 relative">
          <div className="absolute -bottom-8 left-6">
            <div
              className="w-16 h-16 rounded-2xl bg-violet-600 border-4 border-slate-900
                            flex items-center justify-center shadow-lg"
            >
              <span className="text-xl font-bold text-white font-josefin">{initials}</span>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="pt-12 px-6 pb-6">
          <div>
            <h2 className="text-lg font-bold text-white font-josefin">{user?.username}</h2>
            <span
              className="inline-flex items-center gap-1.5 mt-1 px-2.5 py-0.5 rounded-full
                             bg-violet-500/15 border border-violet-500/25 text-violet-400 text-xs font-medium capitalize"
            >
              <FaShieldAlt size={10} />
              {user?.role ?? 'admin'}
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoField icon={<FaRegUserCircle size={14} />} label="Username" value={user?.username} />
            <InfoField icon={<FaEnvelope size={14} />} label="Email" value={user?.email} />
            <InfoField icon={<FaShieldAlt size={14} />} label="Role" value={user?.role} capitalize />
          </div>

          <p className="mt-4 text-xs text-slate-600 flex items-center gap-1.5">
            <FaLock size={10} />
            Profile editing coming soon
          </p>
        </div>
      </div>

      {/* Reset password */}
      <ResetPasswordForm />
    </div>
  );
}
