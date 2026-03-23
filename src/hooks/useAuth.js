import { loginUser, registerUser } from '@/api/auth.api';
import { useMutation } from '@tanstack/react-query';

export const useRegister = () => {
  return useMutation({
    mutationFn: registerUser,
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
  });
};
