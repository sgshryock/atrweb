import React from 'react'
import './invoicing.css'
import Pricing from '../../img/pricing_custom.pdf'

const Invoicing = () => {
  return (
    <div className="i">
        <div className="i-wrapper">
            <h2 className="i-title">Pricing and Invoicing</h2>
            <h3 className="i-sub">All repair quotes are provided free of charge upon request.</h3>
            <p className="i-p">
              <span className="red">All pricing is subject to change at any time based on current 
              market labor rates or replacement parts.</span> <br /> <br />
              For most recent pricing information, contact us via phone at: <a href="tel: 3522075716" className="i-a">352-207-5716</a>
              <br /> <br />
              <a href={Pricing} className="i-a blue" target="_blank">Click Here for a Current Rates Sheet</a>
              <br /><br />
              Payments are due in full to <span className="red">(ATR Air Tool Repair LLC)</span> upon delivery of repaired tools. 
              Payment methods include check, major credit cards, debit cards and cash.
              <br /><br />
              <strong>Checks returned for insufficient funds:</strong> Customers will be charged a <span className="red">$40.00 fee</span> to cover bank
              penalties.
            </p>
        </div>
    </div>
  )
}

export default Invoicing