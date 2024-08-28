import React from 'react';

export default function ImageCard({ children, imgSrc, ...props }) {
  return (
    <div
      {...props}
      className="relative overflow-hidden rounded-2xl shadow-lg group w-full md:w-auto md:p-0 p-5 
                 h-full md:h-auto aspect-square"
    >
      <img
        src={imgSrc}
        alt="Team member"
        className="transition-transform group-hover:scale-110 duration-300 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent sm:p-5 p-5">
        <div className="text-white p-4">{children}</div>
      </div>
    </div>
  );
}


