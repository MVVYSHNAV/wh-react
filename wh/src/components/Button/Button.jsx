import PropTypes from 'prop-types';

const Button = ({ 
  text = 'Get a Seat', 
  bgGradientFrom = 'from-pink-600', 
  bgGradientTo = 'to-black', 
  textColor = 'text-white', 
  hoverTextColor = 'hover:text-gray-400', 
  paddingX = 'px-8', 
  paddingY = 'py-3', 
  shadow = 'shadow-lg', 
  opacity = 'opacity-100', 
  additionalClasses = '' 
}) => {
  return (
    <div className={`relative z-20 mx-auto flex justify-center ${additionalClasses}`}>
      <button
        className={`rounded-full bg-gradient-to-b ${bgGradientFrom} ${bgGradientTo} ${paddingX} ${paddingY} font-semibold ${textColor} ${shadow} ${hoverTextColor} drop-shadow-3xl ${opacity}`}
      >
        {text}
      </button>
    </div>
  );
};

// Prop Types for type-checking
Button.propTypes = {
  text: PropTypes.string,
  bgGradientFrom: PropTypes.string,
  bgGradientTo: PropTypes.string,
  textColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
  paddingX: PropTypes.string,
  paddingY: PropTypes.string,
  shadow: PropTypes.string,
  opacity: PropTypes.string,
  additionalClasses: PropTypes.string,
};

export default Button;
