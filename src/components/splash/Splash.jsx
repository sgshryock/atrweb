import React from 'react'
import './splash.css'

const Splash = () => {
  return (
    <div className="s">
        <div className="s-wrapper">
            <div className="s-ms">
                <h1 className="s-ms-title">Our Mission Statement</h1>
                <p className="s-ms-p">
                    We are committed to provide a Quality service at competitive prices,  
                    that meets or exceeds Customer's expectations. We are devoted to the continuous 
                    improvements of the Quality, reliability, value and efficiencies of our services.    
                </p>
            </div>
            <div className="s-qs">
                <h1 className="s-qs-title">Quality Objectives</h1>
                <ul className="s-qs-list">
                    <li className="s-qs-item">Maintain a high level of Customer satisfaction.</li>
                    <li className="s-qs-item">Deliver a defect free product and service.</li>
                    <li className="s-qs-item">Continuous improvement of our operations and efficiencies.</li>
                    <li className="s-qs-item">Provide on time delivery of products and services to our Customers.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Splash