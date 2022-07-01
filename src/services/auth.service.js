import axios from "axios";

const API_URL = "http://localhost:5000/auth";

const signup = (email, password) => {
  return axios
    .post(API_URL + "/registration", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const login = (email, password) => {
  console.log(email);
  return axios
    .post(API_URL + "/login", {
      email,
      password,
    })
    .then((response) => {
      console.log(response.data);
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;
