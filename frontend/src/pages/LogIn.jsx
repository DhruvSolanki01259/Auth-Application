import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { useAuthStore } from "../store/authStore";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='max-w-md w-full bg-gray-900/70 backdrop-blur-xl border border-fuchsia-500/30 shadow-[0_0_20px_rgba(255,0,255,0.2)] rounded-2xl overflow-hidden'>
      <div className='p-8'>
        {/* Heading */}
        <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(255,0,255,0.4)]'>
          Welcome Back
        </h2>

        {/* Input Form */}
        <form onSubmit={handleLogin}>
          <Input
            icon={Mail}
            type='email'
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className='flex justify-start mb-4'>
            <Link
              to='/forgot-password'
              className='text-sm text-cyan-400 hover:text-fuchsia-400 transition-colors duration-200'>
              Forgot password?
            </Link>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type='submit'
            disabled={isLoading}
            className='mt-2 w-full py-3 px-4 font-bold text-white rounded-lg 
                       bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-500 
                       shadow-[0_0_15px_rgba(255,0,255,0.5)] hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] 
                       transition duration-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/70'>
            {isLoading ? (
              <Loader className='w-6 h-6 animate-spin mx-auto' />
            ) : (
              "Log In"
            )}
          </motion.button>
        </form>
      </div>

      {/* Footer */}
      <div className='px-8 py-4 bg-gray-950/60 backdrop-blur-md flex justify-center'>
        <p className='text-sm text-gray-400'>
          Don't have an account?{" "}
          <Link
            to='/signup'
            className='text-cyan-400 hover:text-fuchsia-400 transition-colors duration-200'>
            Sign Up
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default LogIn;
