import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const loginUser = async (email, password) => {
  const { data } = await axios.post(`${API_URL}/auth/login`, {
    email,
    password,
  });
  return data;
};

export const registerUser = async (name, email, phone, password) => {
  const { data } = await axios.post(`${API_URL}/auth/signup`, {
    name,
    email,
    phone,
    password,
  });
  return data;
};

export const weatherCity = async (key) => {
  const { data } = await axios.get(`${API_URL}/weather/${key}`);
  return data;
};
