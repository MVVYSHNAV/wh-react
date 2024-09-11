import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

const KnowMoreButton = () => {
  return (
    <div className="flex justify-center">
      <NavLink to="/aboutus">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-b from-slate-400 to-black dark:from-pink-600 dark:to-black text-white px-8 py-3 rounded-lg font-semibold hover:text-gray-400 transition duration-300"
        >
          Know More
        </motion.button>
      </NavLink>
    </div>
  );
};

export default KnowMoreButton;
