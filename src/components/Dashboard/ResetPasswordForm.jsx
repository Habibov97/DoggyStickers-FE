import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaLock } from 'react-icons/fa';
import { resetPasswordSchema } from '@/validations/auth.validation';
import PasswordInput from '@/utils/PasswordInput';
import api from '@/api/axios';

export default function ResetPasswordForm() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(resetPasswordSchema) });

  const onSubmit = async (data) => {
    setLoading(true);
    setStatus(null);
    console.log();

    try {
      await api.post('/users/password', data);
      setStatus({ type: 'success', message: 'Password updated successfully.' });
      reset();
    } catch (err) {
      const message = err?.response?.data?.message || 'Something went wrong.';
      setStatus({ type: 'error', message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-700/50 rounded-2xl p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-8 h-8 rounded-lg bg-violet-600/20 border border-violet-500/25
                        flex items-center justify-center"
        >
          <FaLock size={13} className="text-violet-400" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Reset Password</h3>
          <p className="text-xs text-slate-500">Keep your account secure</p>
        </div>
      </div>

      {/* Status banner */}
      {status && (
        <div
          className={`mb-5 px-4 py-3 rounded-lg text-sm border ${
            status.type === 'success'
              ? 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400'
              : 'bg-red-500/10 border-red-500/25 text-red-400'
          }`}
        >
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">Current Password</label>
          <PasswordInput
            id="password"
            name="password"
            placeholder="Enter current password"
            register={register}
            error={errors.password}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5">New Password</label>
            <PasswordInput
              id="newPassword"
              name="newPassword"
              placeholder="Min. 8 characters"
              register={register}
              error={errors.newPassword}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5">Confirm New Password</label>
            <PasswordInput
              id="repeatPassword"
              name="repeatPassword"
              placeholder="Repeat new password"
              register={register}
              error={errors.repeatPassword}
            />
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="px-5 py-2.5 bg-violet-600 hover:bg-violet-700 active:scale-[0.98]
                       text-white text-sm font-medium rounded-lg transition-all duration-200
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Updating...' : 'Update Password'}
          </button>
        </div>
      </form>
    </div>
  );
}
