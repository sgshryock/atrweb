import React from "react";
import "./pickup.css";

const Pickup = () => {
  return (
    <div className="pu">
      <div className="pu-wrapper">
        <h2 className="pu-title">Pick-up & Returns</h2>
        <ul className="pu-list">
          <li className="pu-item">Local Pick-Up</li>
          <p className="pu-p">
            ATR provides a weekly pick-up service at customer facilities for air
            tools needing quotes on repairs.
          </p>
          <li className="pu-item">Item Returns</li>
          <p className="pu-p">
            ATR provides the same weekly service at customer facilities for drop
            off of air tools that have compelted their repair process, or need
            to be returned if the customer does not wish to proceed with a
            quoted repair.
          </p>
          <li className="pu-item">Repair Tags</li>
          <p className="pu-p">
            ATR will supply necessary air tool repair tags for the customer.
            These tags can be used by the customer to tag the tool with any
            issues found with it.
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Pickup;
