export const getAuthToken = () => {
  return localStorage.getItem("x-auth-token");
};

export const setAuthToken = (token) => {
  localStorage.setItem("x-auth-token", token);
};

export const removeAuthToken = () => {
  localStorage.removeItem("x-auth-token");
};
