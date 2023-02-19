import React from "react";
import "./header.css";
import Tools from "../../img/toolsImg.png";
import Info from "../../img/ATR_info.png";

const Header = () => {
  return (
    <div className="h">
      <div className="h-wrapper">
        <div className="h-left">
          <img src={Tools} alt="" className="h-img left" />
        </div>
        <div className="h-right">
          <img src={Info} alt="" className="h-img right" />
        </div>
      </div>
    </div>
  );
};

export default Header;