import React from "react";

const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className='relative mb-6'>
      {/* Icon */}
      <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10'>
        <Icon className='size-6 text-white brightness-125 drop-shadow-[0_0_8px_rgba(255,255,255,1)]' />
      </div>

      {/* Input */}
      <input
        className='w-full pl-10 pr-3 py-2 bg-gray-800/70 backdrop-blur-md 
        border border-purple-700/50 rounded-lg text-white placeholder-gray-400
        focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/60 
        shadow-[0_0_10px_rgba(0,255,255,0.1)] focus:shadow-[0_0_20px_rgba(255,0,255,0.3)] transition duration-300'
        {...props}
      />
    </div>
  );
};

export default Input;
