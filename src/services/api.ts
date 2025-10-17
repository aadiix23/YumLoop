import axios from "axios";

const BASE_URL = 'https://nondomestically-supersubtle-taisha.ngrok-free.dev/api';

interface SignupData {
  fullname: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

// User signup
export const signupUser = (userData: SignupData) =>
  axios.post(`${BASE_URL}/auth/user/register`, userData);

// User login
export const loginUser = (userData: LoginData) =>
  axios.post(`${BASE_URL}/auth/user/login`, userData);

// Get food items (requires user token)
export const getFoodItems = (token: string) =>
  axios.get(`${BASE_URL}/food`, {
    headers: { Authorization: `Bearer ${token}` },
  });
