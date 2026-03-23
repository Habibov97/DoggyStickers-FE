import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useAuthContext } from '@/context/AuthProvider';
import { useLogin } from '@/hooks/useAuth';
import { loginSchema } from '@/validations/auth.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [serverError, setServerError] = useState('');
  const { login } = useAuthContext();
  const { mutate, isPending } = useLogin();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        login(res.token, res.user);
        navigate('/');
      },
      onError: (err) => {
        const message = err?.response?.data?.message || 'Something went wrong';
        setServerError(message);
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-purple-800 font-josefin">Welcome back</h1>
          <p className="text-sm text-gray-500 mt-1">Login to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {serverError && (
            <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 p-2 rounded-lg">
              {serverError}
            </div>
          )}
          <FieldSet className="w-full">
            <FieldGroup className="space-y-5">
              <Field>
                <FieldLabel htmlFor="username">Email</FieldLabel>
                <Input
                  id="username"
                  type="email"
                  placeholder="you@example.com"
                  name="email"
                  className="mt-1 focus-visible:ring-purple-400 transition"
                  {...register('email')}
                />
                {errors?.email && <p className="text-red-500 text-sm mt-1">{errors?.email?.message}</p>}
                <FieldDescription>Enter your registered email.</FieldDescription>
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  name="password"
                  className="mt-1 focus-visible:ring-purple-400 transition"
                  {...register('password')}
                />
                {errors?.password && <p className="text-red-500 text-sm mt-1">{errors?.password?.message}</p>}
                <FieldDescription>Must be at least 8 characters.</FieldDescription>
              </Field>

              {/* Button */}
              <button
                disabled={isPending}
                className="w-full mt-2 bg-purple-800 text-white py-2.5 rounded-xl font-medium hover:bg-purple-900 active:scale-[0.99] transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? 'Loading...' : 'Sign in'}
              </button>
            </FieldGroup>
          </FieldSet>
        </form>
        {/* Footer */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Don’t have an account?{' '}
          <Link to={'/register'} className="text-purple-800 font-medium cursor-pointer hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
