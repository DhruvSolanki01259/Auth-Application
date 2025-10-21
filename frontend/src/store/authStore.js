import { create } from "zustand";
import axios from "axios";

axios.defaults.withCredentials = true;

const API_URL = `${import.meta.env.VITE_BACKEND_URL}/api/auth`;
// console.log(API_URL);

export const useAuthStore = create((set) => ({
  user: null,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  isAuthenticated: false,

  signup: async (username, email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/signup`, {
        username,
        email,
        password,
      });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response.data.message || "Error in Signing Up",
        isLoading: false,
      });
      throw error;
    }
  },

  verifyEmail: async (code) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/verify-email`, { code });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
      return response.data;
    } catch (error) {
      set({
        error: error.response.data.message || "Error Verifying Email",
        isLoading: false,
      });
      throw error;
    }
  },

  checkAuth: async () => {
    set({});
    try {
      const response = await axios.get(`${API_URL}/check-auth`);
      console.log(response);
      set({
        user: response.data.user,
        isAuthenticated: true,
        isCheckingAuth: false,
      });
    } catch (error) {
      set({
        error: null,
        isAuthenticated: false,
        isCheckingAuth: false,
      });
    }
  },
}));
