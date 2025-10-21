import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import Input from "../components/Input";

import { useAuthStore } from "../store/authStore";
import { useState } from "react";

import { Loader, Lock, Mail, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const { isLoading, error, signup } = useAuthStore();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signup(username, email, password);
      navigate("/verify-email");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='max-w-md w-full bg-gray-900/70 backdrop-blur-xl border border-fuchsia-500/30 
      shadow-[0_0_20px_rgba(255,0,255,0.2)] rounded-2xl overflow-hidden'>
      <div className='p-8'>
        {/* Heading */}
        <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(255,0,255,0.4)]'>
          Create your Account
        </h2>

        {/* Input Form */}
        <form onSubmit={handleSignUp}>
          <Input
            icon={User}
            type='text'
            placeholder='Enter your Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            icon={Mail}
            type='email'
            placeholder='Enter your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            type='password'
            placeholder='Enter your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* ERROR MESSAGE */}
          {error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}

          {/* Password Strength Meter */}
          <PasswordStrengthMeter password={password} />

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type='submit'
            disabled={isLoading}
            className='mt-5 w-full py-3 px-4 font-bold text-white rounded-lg 
            bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-500 
            shadow-[0_0_15px_rgba(255,0,255,0.5)] hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] transition duration-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/70'>
            {isLoading ? (
              <Loader className='w-6 h-6 animate-spin mx-auto' />
            ) : (
              "Sign Up"
            )}
          </motion.button>
        </form>
      </div>

      {/* Footer */}
      <div className='px-8 py-4 bg-gray-950/60 backdrop-blur-md flex justify-center'>
        <p className='text-sm text-gray-400'>
          Already have an account?{" "}
          <Link
            to='/login'
            className='text-cyan-400 hover:text-fuchsia-400 transition-colors duration-200'>
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignUp;
