import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-wrapper">
        <h2 className="a-title blueText">About Us</h2>
        <p className="a-p">
          <span className="redText">
            <strong>ATR Air Tools Repair LLC&nbsp;</strong>
          </span>
          is a recently formed, family owned & operated business, located in
          Silver Springs Florida. We repair all brands and types of handheld
          pneumatic (Air) tools. We do not have a store front; instead, ATR
          picks up and returns tools at Customer locations within our delivery
          range, free of charge. All tools needing repair are inspected at our
          site, after which a free quote is sent to the Customer.
        </p>
        <p className="a-p">
          We believe in offering an honest service at the least minimal cost to
          our Customers. We look forward to offering our services to meet your
          business needs.
        </p>
        <h2 className="a-sig">
          <span className="blueText">
            - The ATR Air Tool Repair Team
            <br />
            &nbsp; &nbsp;
            <a href="mailto:info@atrairtoolrepair.com" className="a-email">
              info@atrairtoolrepair.com
            </a>
            <br/>
            <br/>
            <br/>
          </span>
        </h2>
      </div>
    </div>
  );
};

export default About;
