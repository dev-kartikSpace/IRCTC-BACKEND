import client from './client';

export const authApi = {
  sendOtp: (data) => client.post('/auth/send-otp', data).then((r) => r.data),
  verifyOtp: (otp) => client.post('/auth/verify-otp', { otp }).then((r) => r.data),
  login: (email, password) => client.post('/auth/login', { email, password }).then((r) => r.data),
  googleAuth: (idToken) => client.post('/auth/google-auth', { idToken }).then((r) => r.data),
  getProfile: () => client.get('/users/user/profile').then((r) => r.data),
};
