import { API } from '@/src/api/authApi';

export async function loginUser(data: any) {
  const res = await API.post('auth/login', data);
  return res;
}

export async function registerUser(data: any) {
  const res = await API.post('users', data);
  return res;
}
