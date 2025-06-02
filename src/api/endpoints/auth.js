import api from "../api";

export const login = async (email, password) => {
  const response = await api.post("/Auth/login", { email, password });
  return response.data;
};

export const register = async ({ username, email, password }) => {
  const response = await api.post("/Auth/register", {
    userName: username,
    email,
    password,
  });
  return response.data;
};

