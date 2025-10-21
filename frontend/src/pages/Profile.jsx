import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { Home, LogOut } from "lucide-react";
import { formatDate } from "../utils/formDate";

const Profile = () => {
  const { user, logout, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const goHome = () => {
    navigate("/");
  };

  if (!user) return null;

  return (
    <div className='relative w-full flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8'>
      {/* Profile container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='relative max-w-4xl w-full bg-gray-900/80 backdrop-blur-xl border border-fuchsia-500/30 
          shadow-[0_0_30px_rgba(255,0,255,0.3)] rounded-3xl overflow-hidden p-6 sm:p-12 flex flex-col gap-6'>
        {/* Header with actions */}
        <div className='flex justify-between items-center mb-6'>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className='text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text 
              bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 drop-shadow-[0_0_10px_rgba(255,0,255,0.4)]'>
            Profile
          </motion.h1>
          <div className='flex gap-3'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={goHome}
              className='flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/70 
                hover:bg-indigo-500/90 text-white shadow-lg transition duration-300'
              title='Back to Home'>
              <Home size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              disabled={isLoading}
              className='flex items-center justify-center w-12 h-12 rounded-full bg-fuchsia-500/70 
                hover:bg-fuchsia-500/90 text-white shadow-lg transition duration-300'
              title='Logout'>
              <LogOut size={24} />
            </motion.button>
          </div>
        </div>

        {/* User Information Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className='bg-gray-800/60 p-6 rounded-2xl border border-gray-700 shadow-md'>
            <h2 className='text-xl font-semibold text-fuchsia-400 mb-3'>
              Personal Info
            </h2>
            <p className='text-gray-300'>
              <strong>Username:</strong> {user.username || user.name}
            </p>
            <p className='text-gray-300 mt-1'>
              <strong>Email:</strong> {user.email}
            </p>
          </motion.div>

          {/* Account Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className='bg-gray-800/60 p-6 rounded-2xl border border-gray-700 shadow-md'>
            <h2 className='text-xl font-semibold text-cyan-400 mb-3'>
              Account Info
            </h2>
            <p className='text-gray-300'>
              <strong>Joined:</strong>{" "}
              {new Date(user.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className='text-gray-300 mt-1'>
              <strong>Last Login:</strong> {formatDate(user.lastLogin)}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
