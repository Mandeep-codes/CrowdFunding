import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { logo } from "../assets";
import { navlinks } from "../constants";

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px]
      ${isActive === name ? "bg-[#2c2f32]" : ""}
      flex justify-center items-center
      ${!disabled ? "cursor-pointer" : "cursor-not-allowed"}
      ${styles}`}
    onClick={handleClick}
  >
    <img
      src={imgUrl}
      alt={name}
      className={`w-1/2 h-1/2 ${
        isActive === name ? "opacity-100" : "opacity-50"
      }`}
    />
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      {/* Logo */}
      <Link to="/">
        <Icon
          styles="w-[52px] h-[52px] bg-[#2c2f32]"
          imgUrl={logo}
          name="logo"
          isActive="logo"
        />
      </Link>

      {/* Nav icons */}
      <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              styles=""
              name={link.name}
              imgUrl={link.imgUrl}
              isActive={isActive}
              disabled={link.disabled}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

