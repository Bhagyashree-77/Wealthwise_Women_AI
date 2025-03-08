import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const register = async (userData: {
  email: string;
  password: string;
  fullName: string;
}) => {
  const response = await axios.post(`${API_URL}/auth/register`, userData);
  return response.data;
};

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await axios.post(`${API_URL}/auth/login`, credentials);
  return response.data;
};

export const updateProfile = async (profileData: any) => {
  const token = localStorage.getItem('token');
  const response = await axios.put(
    `${API_URL}/users/profile`,
    profileData,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );
  return response.data;
};
