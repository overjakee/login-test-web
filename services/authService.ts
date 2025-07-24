import api from './api';

export const login = (credentials: { username: string; password: string }) =>
  api.post('/auth/login', credentials);

export const register = (data: { username: string; password: string }) =>
  api.post('/auth/register', data);
