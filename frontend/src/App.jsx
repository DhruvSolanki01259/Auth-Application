import EmailVerification from "./pages/EmailVerification";
import { useAuthStore } from "./store/authStore";
import ForgotEmail from "./pages/ForgotEmail";
import Profile from "./pages/DashBoard";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";

import FloatingShape from "./components/FloatingShape";

import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

const App = () => {
  const { user, isAuthenticated, isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log(`isAuthenticated: ${isAuthenticated}`);
  console.log(`user: ${user}`);

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-fuchsia-900 to-cyan-900 flex items-center justify-center relative overflow-hidden'>
      <Toaster />
      <FloatingShape
        color='bg-fuchsia-500'
        size='w-64 h-64'
        top='-5%'
        left='10%'
        delay={0}
      />
      <FloatingShape
        color='bg-cyan-300'
        size='w-48 h-48'
        top='70%'
        left='80%'
        delay={5}
      />
      <FloatingShape
        color='bg-indigo-500'
        size='w-32 h-32'
        top='40%'
        left='-10%'
        delay={2}
      />

      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/verify-email'
          element={<EmailVerification />}
        />
        <Route
          path='/forgot-password'
          element={<ForgotEmail />}
        />
        <Route
          path='/profile'
          element={<Profile />}
        />
        <Route
          path='/signup'
          element={<SignUp />}
        />
        <Route
          path='/login'
          element={<LogIn />}
        />
      </Routes>
    </div>
  );
};

export default App;
