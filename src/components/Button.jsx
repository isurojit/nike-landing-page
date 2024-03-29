import React from "react";

const Button = ({ lable, iconURL }) => {
  return (
    <button className="flex items-center gap-2 justify-center px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white rounded-full border-coral-red">
      {lable}Shop Now
      <img
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
};

export default Button;
