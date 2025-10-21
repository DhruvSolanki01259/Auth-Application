import EmailVerification from "./pages/EmailVerification";
import LoadingSpinner from "./components/LoadingSpinner";
import FloatingShape from "./components/FloatingShape";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import { useAuthStore } from "./store/authStore";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return (
      <Navigate
        to='/login'
        replace
      />
    );
  }

  if (!user?.isVerified) {
    return (
      <Navigate
        to='/verify-email'
        replace
      />
    );
  }

  return children;
};

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user?.isVerified) {
    return (
      <Navigate
        to='/'
        replace
      />
    );
  }

  return children;
};

function App() {
  const { user, isAuthenticated } = useAuthStore();

  if (user === undefined && !isAuthenticated) {
    return <LoadingSpinner />;
  }

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
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path='/profile'
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path='/signup'
          element={
            <RedirectAuthenticatedUser>
              <SignUp />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path='/login'
          element={
            <RedirectAuthenticatedUser>
              <LogIn />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path='/verify-email'
          element={
            <RedirectAuthenticatedUser>
              <EmailVerification />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path='/forgot-password'
          element={
            <RedirectAuthenticatedUser>
              <ForgotPassword />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path='/reset-password/:token'
          element={
            <RedirectAuthenticatedUser>
              <ResetPassword />
            </RedirectAuthenticatedUser>
          }
        />
        {/* catch all routes */}
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
