import PropTypes from 'prop-types';
import { motion } from "framer-motion";

const Button = ({ 
  text = 'Get a Seat', 
  bgGradientFrom = 'from-slate-400', 
  bgGradientTo = 'to-black', 
  darkBgGradientFrom = 'dark:from-pink-600', 
  darkBgGradientTo = 'dark:to-black', 
  textColor = 'text-white', 
  hoverTextColor = 'hover:text-gray-400', 
  paddingX = 'px-8', 
  paddingY = 'py-3', 
  shadow = 'shadow-sm', 
  opacity = 'opacity-100', 
  additionalClasses = '' ,
  onClick
}) => {
  return (
    <div className={`relative z-20 mx-auto flex justify-center ${additionalClasses}`}>
      <motion.button whileTap={{ scale: 0.55 }}
        className={`rounded-lg sm:rounded-2xl bg-gradient-to-b ${bgGradientFrom} ${bgGradientTo} ${darkBgGradientFrom} ${darkBgGradientTo} ${paddingX} ${paddingY} font-semibold ${textColor} ${shadow} ${hoverTextColor} drop-shadow-2xl ${opacity} 
          px-3 py-2
          md:px-8 md:py-3
          text-sm
          md:text-xl
          `}
          onClick={onClick}
      >
        {text}
      </motion.button>
    </div>
  );
};

// Prop Types for type-checking
Button.propTypes = {
  text: PropTypes.string,
  bgGradientFrom: PropTypes.string,
  bgGradientTo: PropTypes.string,
  darkBgGradientFrom: PropTypes.string,
  darkBgGradientTo: PropTypes.string,
  textColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
  paddingX: PropTypes.string,
  paddingY: PropTypes.string,
  shadow: PropTypes.string,
  opacity: PropTypes.string,
  additionalClasses: PropTypes.string,
};

export default Button;
