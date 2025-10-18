import React from "react";
import classImg from "../../assets/class.png";
import Swimming from "../../assets/swimming.png";
import play from "../../assets/playground.png";
const Qzone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-bold mb-5">QZone</h2>
      <div className="space-y-5">
        <img src={Swimming} alt="" />
        <img src={classImg} alt="" />
        <img src={play} alt="" />
        
      </div>
    </div>
  );
};

export default Qzone;
