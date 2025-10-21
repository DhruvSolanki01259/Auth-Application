import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='max-w-md w-full bg-gray-900/70 backdrop-blur-xl border border-fuchsia-500/30 
        shadow-[0_0_20px_rgba(255,0,255,0.2)] rounded-2xl overflow-hidden text-center p-8'>
      <h1
        className='text-6xl font-extrabold text-transparent bg-clip-text 
        bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 drop-shadow-[0_0_10px_rgba(255,0,255,0.4)]'>
        404
      </h1>
      <h2 className='text-2xl font-bold mt-4 mb-6 text-white'>
        Page Not Found
      </h2>
      <p className='text-gray-300 mb-6'>
        Oops! The page you are looking for does not exist or has been moved.
      </p>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className='py-3 px-6 font-bold text-white rounded-lg 
          bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-500 
          shadow-[0_0_15px_rgba(255,0,255,0.5)] hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] transition duration-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/70'>
        <Link to='/'>Go Back Home</Link>
      </motion.button>
    </motion.div>
  );
};

export default NotFound;
