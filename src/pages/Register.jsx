import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@/validations/auth.validation';
import { useRegister } from '@/hooks/useAuth';
import { useState } from 'react';

export default function Register() {
  const [serverError, setServerError] = useState('');
  const { mutate, isPending } = useRegister();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: () => {
        navigate('/login');
      },
      onError: (err) => {
        const message = err?.response?.data?.message || 'Something went wrong';
        setServerError(message);
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg py-4 px-8">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-purple-800 font-josefin">Create account</h1>
          <p className="text-sm text-gray-500 mt-1">Start your journey</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {serverError && (
            <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 p-2 rounded-lg">
              {serverError}
            </div>
          )}
          <FieldSet className="w-full">
            <FieldGroup>
              {/* Username */}
              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input
                  id="username"
                  type="text"
                  placeholder="your username"
                  className="mt-1 focus-visible:ring-purple-800 transition"
                  {...register('username')}
                />
                {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
              </Field>

              {/* Email */}
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 focus-visible:ring-purple-800 transition"
                  {...register('email')}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </Field>

              {/* Phone */}
              <Field>
                <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+994 50 123 45 67"
                  className="mt-1 focus-visible:ring-purple-800 transition"
                  {...register('phoneNumber')}
                />
                {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
                <FieldDescription>Include country code.</FieldDescription>
              </Field>

              {/* Password */}
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="mt-1 focus-visible:ring-purple-800 transition"
                  {...register('password')}
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                <FieldDescription>Minimum 8 characters.</FieldDescription>
              </Field>

              {/* Button */}
              <button
                type="submit"
                disabled={isPending}
                className="w-full mt-2 bg-purple-800 text-white py-2.5 rounded-xl font-medium hover:bg-purple-900 active:scale-[0.99] transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? 'Loading...' : 'Create account'}
              </button>
            </FieldGroup>
          </FieldSet>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{' '}
          <Link to={'/login'} className="text-black font-medium cursor-pointer hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
