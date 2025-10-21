import { Check, X } from "lucide-react";

const PasswordCriteria = ({ password }) => {
  const criteria = [
    { label: "At least 6 characters", met: password.length >= 6 },
    { label: "Contains uppercase letter", met: /[A-Z]/.test(password) },
    { label: "Contains lowercase letter", met: /[a-z]/.test(password) },
    { label: "Contains a number", met: /\d/.test(password) },
    { label: "Contains special character", met: /[^A-Za-z0-9]/.test(password) },
  ];

  return (
    <div className='mt-3 space-y-1'>
      {criteria.map((item) => (
        <div
          key={item.label}
          className='flex items-center text-xs'>
          {item.met ? (
            <Check className='size-4 text-cyan-400 drop-shadow-[0_0_6px_rgba(0,255,255,0.8)] mr-2' />
          ) : (
            <X className='size-4 text-fuchsia-500/60 drop-shadow-[0_0_3px_rgba(255,0,255,0.5)] mr-2' />
          )}
          <span
            className={`${
              item.met
                ? "text-cyan-300 drop-shadow-[0_0_6px_rgba(0,255,255,0.6)]"
                : "text-gray-500"
            }`}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

const PasswordStrengthMeter = ({ password }) => {
  const getStrength = (pass) => {
    let strength = 0;
    if (pass.length >= 6) strength++;
    if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
    if (pass.match(/\d/)) strength++;
    if (pass.match(/[^a-zA-Z\d]/)) strength++;
    return strength;
  };

  const strength = getStrength(password);

  const getColor = (strength) => {
    if (strength === 0) return "bg-fuchsia-600";
    if (strength === 1) return "bg-pink-500";
    if (strength === 2) return "bg-purple-500";
    if (strength === 3) return "bg-cyan-500";
    return "bg-green-400";
  };

  const getGlow = (strength) => {
    if (strength === 0) return "shadow-[0_0_10px_rgba(255,0,255,0.7)]";
    if (strength === 1) return "shadow-[0_0_12px_rgba(255,0,200,0.6)]";
    if (strength === 2) return "shadow-[0_0_15px_rgba(150,0,255,0.6)]";
    if (strength === 3) return "shadow-[0_0_20px_rgba(0,255,255,0.7)]";
    return "shadow-[0_0_20px_rgba(0,255,150,0.7)]";
  };

  const getStrengthText = (strength) => {
    if (strength === 0) return "Very Weak";
    if (strength === 1) return "Weak";
    if (strength === 2) return "Fair";
    if (strength === 3) return "Good";
    return "Strong";
  };

  return (
    <div className='mt-3'>
      {/* Header */}
      <div className='flex justify-between items-center mb-1'>
        <span className='text-xs text-gray-400'>Password Strength</span>
        <span
          className={`text-xs ${
            strength < 2
              ? "text-fuchsia-400"
              : strength < 4
              ? "text-purple-300"
              : "text-cyan-300"
          }`}>
          {getStrengthText(strength)}
        </span>
      </div>

      {/* Strength Bars */}
      <div className='flex space-x-1'>
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`h-1.5 w-1/4 rounded-full transition-all duration-300 ${
              index < strength
                ? `${getColor(strength)} ${getGlow(strength)}`
                : "bg-gray-700"
            }`}
          />
        ))}
      </div>

      {/* Criteria List */}
      <PasswordCriteria password={password} />
    </div>
  );
};

export default PasswordStrengthMeter;
