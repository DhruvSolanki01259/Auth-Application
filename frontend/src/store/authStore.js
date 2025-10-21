import { create } from "zustand";
import axios from "axios";

axios.defaults.withCredentials = true;

const API_URL = `${import.meta.env.VITE_BACKEND_URL}/api/auth`;
console.log(API_URL);

export const useAuthStore = create((set) => ({
  user: null,
  error: false,
  isLoading: false,
  isCheckingAuth: true,
  isAuthenticate: false,

  signup: async (username, email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/signup`, {
        username,
        email,
        password,
      });
      set({ user: response.data.user, isAuthenticate: true, isLoading: false });
    } catch (error) {
      set({
        error: error.response.data.message || "Error in Signing Up",
        isLoading: false,
      });
      throw error;
    }
  },
}));
