import { z } from 'zod';

export const registerSchema = z.object({
  username: z.string().min(3, 'Username must be minimum 4 character'),
  email: z.email('Email is not valid'),
  phoneNumber: z.string().min(7, 'Phone number is not valid'),
  password: z.string().min(8, 'Password must be minimum 8 character'),
});

export const loginSchema = z.object({
  email: z.email('Email is not valid'),
  password: z.string().min(8, 'Password must be minimum 8 character'),
});

export const resetPasswordSchema = z
  .object({
    password: z.string().min(1, 'Current password is required'),
    newPassword: z.string().min(8, 'Must be at least 8 characters'),
    repeatPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((d) => d.newPassword === d.repeatPassword, {
    message: "Passwords don't match",
    path: ['repeatPassword'],
  });
