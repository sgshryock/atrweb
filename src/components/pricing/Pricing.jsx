import React from "react";
import "./pricing.css";

const Pricing = () => {
  return (
    <div className="p">
      <div className="p-wrapper">
        <h1 className="p-title">Quotes and Pricing Information</h1>
        <h2 className="p-subtitle">
          All repair quotes are provided free of charge upon request.
        </h2>
        <div className="p-c">
          <h2 className="p-c-title">Repair type classifications</h2>
          <ul className="p-c-list">
            <h3 className="p-c-list-title">Category One Repair</h3>
            <li className="p-c-list-item">
              Issue known or identified beforehand, specific component
              replacement requested.
              <p className="p-c-list-p">
                Example: "Broken throttle lever on the die grinder."
                <p className="p-c-list-p2">
                  *ATR assumes the requested quote and repair are for the
                  specified issue only. No futher tear down of the ginder would
                  be performed. If any other abnormalities during the quote or
                  repair process are identified, ATR would notify the customer
                  for decisions going forward.
                </p>
              </p>
            </li>
            <h3 className="p-c-list-title">Category Two Repair</h3>
            <li className="p-c-list-item">
              Issue is unknown, requires analysis or troubleshooting.
              <p className="p-c-list-p">
                Example: "The grinder has no torque, bogs down, makes loud
                noises etc."
                <p className="p-c-list-p2">
                  *These types of issues would require a full disassembly of the
                  tool, and an inspection to look for damaged or worn parts. The
                  repair would then be quoted based on the findings.
                </p>
              </p>
            </li>
            <h3 className="p-c-list-item-note">
              Denial of quoted repairs, tools will be returned unassembled due
              to Safety and Liability of worn or damaged parts or (ATR) will
              dispose of at customers discretion.
            </h3>
          </ul>
        </div>
        <div className="p-l">
          <h2 className="p-l-title">Labor Rate</h2>
          <p className="p-l-p">Current labor rate is $45.00 an hour.</p>
          <p className="p-l-p">
            Labor rate will be charged as 1/2 hour increments; i.e., "screw
            missing, bad collet on grinder etc."
          </p>
          <p className="p-l-p">
            ATR tries its best to offer competive rates for the area. Current
            local competitors' hourly rates for air tool repairs are $65-$85 an
            hour.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
