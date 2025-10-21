import { motion } from "framer-motion";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import Input from "../components/Input";
import { ArrowLeft, Loader, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { isLoading, forgotPassword } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
    setIsSubmitted(true);
  };

  return (
    <div className='relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 overflow-hidden'>
      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='relative max-w-md w-full bg-gray-900/70 backdrop-blur-xl border border-fuchsia-500/30 
          shadow-[0_0_25px_rgba(255,0,255,0.3)] rounded-2xl overflow-hidden'>
        <div className='p-8 sm:p-10'>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className='text-3xl sm:text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text 
              bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 drop-shadow-[0_0_15px_rgba(255,0,255,0.4)]'>
            Forgot Password
          </motion.h2>

          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className='space-y-6'>
              <p className='text-gray-300 text-center'>
                Enter your registered email address and we’ll send you a secure
                link to reset your password.
              </p>

              <Input
                icon={Mail}
                type='email'
                placeholder='Email Address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type='submit'
                disabled={isLoading}
                className='w-full py-3 px-4 font-semibold text-white rounded-lg 
                  bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-500 
                  shadow-[0_0_20px_rgba(255,0,255,0.4)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] 
                  transition duration-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/70'>
                {isLoading ? (
                  <Loader className='size-6 animate-spin mx-auto' />
                ) : (
                  "Send Reset Link"
                )}
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className='text-center'>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className='w-16 h-16 bg-gradient-to-r from-fuchsia-500 to-cyan-400 rounded-full 
                  flex items-center justify-center mx-auto mb-5 shadow-[0_0_20px_rgba(255,0,255,0.4)]'>
                <Mail className='h-8 w-8 text-white' />
              </motion.div>
              <p className='text-gray-300 mb-6'>
                If an account exists for{" "}
                <span className='text-fuchsia-400'>{email}</span>, you’ll
                receive a password reset link shortly.
              </p>
            </motion.div>
          )}
        </div>

        <div className='px-8 py-4 bg-gray-900/60 flex justify-center border-t border-gray-800'>
          <Link
            to='/login'
            className='text-sm text-cyan-400 hover:text-fuchsia-400 flex items-center transition duration-200'>
            <ArrowLeft className='h-4 w-4 mr-2' /> Back to Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
