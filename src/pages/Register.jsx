import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg py-4 px-8">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-purple-800 font-josefin">Create account</h1>
          <p className="text-sm text-gray-500 mt-1">Start your journey</p>
        </div>

        {/* Form */}
        <FieldSet className="w-full">
          <FieldGroup>
            {/* Username */}
            <Field>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input
                id="username"
                type="text"
                placeholder="yourusername"
                name="username"
                className="mt-1 focus-visible:ring-purple-800 transition"
              />
              <FieldDescription>Pick a unique username.</FieldDescription>
            </Field>

            {/* Email */}
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                name="email"
                className="mt-1 focus-visible:ring-purple-800 transition"
              />
            </Field>

            {/* Phone */}
            <Field>
              <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
              <Input
                id="phone"
                type="tel"
                placeholder="+994 50 123 45 67"
                name="phoneNumber"
                className="mt-1 focus-visible:ring-purple-800 transition"
              />
              <FieldDescription>Include country code.</FieldDescription>
            </Field>

            {/* Password */}
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                name="password"
                className="mt-1 focus-visible:ring-purple-800 transition"
              />
              <FieldDescription>Minimum 8 characters.</FieldDescription>
            </Field>

            {/* Button */}
            <button className="w-full mt-2 bg-purple-800 text-white py-2.5 rounded-xl font-medium hover:bg-purple-900 active:scale-[0.99] transition">
              Create account
            </button>
          </FieldGroup>
        </FieldSet>

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
