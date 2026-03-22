import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-purple-800 font-josefin">Welcome back</h1>
          <p className="text-sm text-gray-500 mt-1">Login to your account</p>
        </div>

        {/* Form */}
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
              />
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
              />
              <FieldDescription>Must be at least 8 characters.</FieldDescription>
            </Field>

            {/* Button */}
            <button className="w-full mt-2 bg-purple-800 text-white py-2.5 rounded-xl font-medium hover:bg-purple-900 active:scale-[0.99] transition">
              Sign in
            </button>
          </FieldGroup>
        </FieldSet>

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
