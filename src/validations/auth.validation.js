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
