import React from 'react'
import './invoicing.css'
import Pricing from '../../img/pricing_custom.pdf'

const Invoicing = () => {
  return (
    <div className="i">
        <div className="i-wrapper">
            <h2 className="i-title blueText">Pricing and Invoicing</h2>
            <h3 className="i-sub">All repair quotes are provided free of charge upon request.</h3>
            <p className="i-p">
              <span className="redText bold">All pricing is subject to change at any time based on current 
              market labor rates or replacement parts.</span> 
              </p>
              <p className="i-p">
              For the most recent pricing information, call us at:&nbsp;
              <a href="tel: 3522075716" className="i-a redText">352-207-5716</a>
              </p>
              <a href={Pricing} className="i-a blueText" target="_blank">Click Here for a Current Rates Sheet</a>
              <p className="i-p">
              Payments are to be paid in full to <span className="redText bold">ATR Air Tool Repair LLC</span> upon delivery of repaired tools. 
              Payment methods include check, major credit cards, debit cards and cash.
              </p>
              <p className="i-p">
              <strong>
                Checks returned for insufficient funds will have a 
                <span className="redText"> $40.00 fee </span> 
                applied. 
                </strong>
            </p>
        </div>
    </div>
  )
}

export default Invoicing