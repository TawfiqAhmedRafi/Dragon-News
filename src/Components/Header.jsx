import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  const date = new Date();
  const day = format(date, "EEEE");
  const rest = format(date, ", MMMM dd yyyy");

  return (
    <div className="flex flex-col items-center gap-3 justify-center">
      <img className="w-[400px]" src={logo} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p>
        <span className="font-semibold ">{day}</span>
        <span className="text-accent">{rest}</span>
      </p>
    </div>
  );
};

export default Header;
