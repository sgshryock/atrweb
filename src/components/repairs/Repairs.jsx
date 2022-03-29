import React from "react";
import "./repairs.css";

const Repairs = () => {
  return (
    <div className="r">
      <div className="r-wrapper">
        <h1 className="r-title">Repairs by Mail</h1>
        <p className="r-p">
          If your business is out of our service area you can send tools for
          estimates or repairs through freight carriers of your choice.
        </p>
        <p className="r-p">
          You may contact us at
          <a href="tel: 3522075716" className="r-link redText">
            &nbsp;352-207-5716&nbsp;
          </a>
          to establish if your location is within our service area.
        </p>
        <p className="r-p">
          All information from the
          <span className="redText"> Pricing and Invoicing </span>
          section below applies; additionally, charges for return freight to
          your business location will be required.
        </p>
      </div>
    </div>
  );
};

export default Repairs;
