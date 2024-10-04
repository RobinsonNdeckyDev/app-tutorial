// authService.js

const API_URL = "http://127.0.0.1:8000/api/auth/login";

export const loginService = async (email, password) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Failed to authenticate");
  }

  const data = await response.json();
  // Assuming the response includes a token and user role
  const { token, role } = data;

  // Save the token in localStorage for session persistence
  localStorage.setItem("authToken", token);
  localStorage.setItem("userRole", role);

  return { token, role };
};

export const getRole = () => {
  return localStorage.getItem("userRole");
};

export const logout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("userRole");
};
