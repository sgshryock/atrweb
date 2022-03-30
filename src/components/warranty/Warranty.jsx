import React from "react";
import "./warranty.css";

const Warranty = () => {
  return (
    <div className="w">
      <div className="w-wrapper">
        <h2 className="w-title blueText">Warranty</h2>
        <p className="w-p redText bold">
          ATR warrants repairs for 90 days from the date the repair tool is
          returned to the customer.
        </p>
        <p className="w-pn bold">
          *ATR reserves the right to to deny repair warranty coverage due to
          physical damage, neglect, improper use, or lack of normal maintenance
          by the customer.
        </p>
      </div>
    </div>
  );
};

export default Warranty;
