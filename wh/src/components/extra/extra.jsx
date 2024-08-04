import React from 'react';
import PropTypes from 'prop-types';

const ToolTip = ({ children, tooltip }) => {
  return (
    <div className='group relative inline-block'>
      {children}
      <span className='invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-purple-400 text-black p-1 rounded absolute top-full z-20 text-xl'>
        {tooltip}
      </span>
    </div>
  );
};

ToolTip.propTypes = {
  children: PropTypes.node.isRequired,
  tooltip: PropTypes.string,
};

export default ToolTip;
