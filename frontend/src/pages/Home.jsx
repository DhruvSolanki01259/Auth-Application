import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile");
  };

  return (
    <div className='relative w-full flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8'>
      {/* Main content card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='relative max-w-3xl w-full bg-gray-900/70 backdrop-blur-xl border border-fuchsia-500/30 
          shadow-[0_0_25px_rgba(255,0,255,0.3)] rounded-2xl overflow-hidden p-8 sm:p-12 text-center'>
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text 
            bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 drop-shadow-[0_0_15px_rgba(255,0,255,0.5)]'>
          Welcome to Auth Application
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className='text-gray-300 mt-4 mb-8 text-base sm:text-lg'>
          This is the main home page of your app. Navigate to different
          sections, explore features, and manage your account seamlessly.
        </motion.p>

        {/* Explore Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={goToProfile}
          className='w-full sm:w-auto py-3 px-8 font-bold text-white rounded-lg 
            bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-500 
            shadow-[0_0_20px_rgba(255,0,255,0.5)] hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] 
            transition duration-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/70'>
          Explore Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;
