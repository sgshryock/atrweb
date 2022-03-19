import React from 'react'
import './header.css'
import Repair from '../../img/repair.jpeg'
import Info from '../../img/atrm.png'

const Header = () => {
  return (
    <div className="h">
        <div className="h-left">
            <div className="h-left-wrapper">
                <img src={Repair} alt="" className="h-img" />
            </div>
        </div>
        <div className="h-right">
            <div className="h-right-wrapper">
                <img src={Info} alt="" className="h-img" />
            </div>
        </div>
    </div>
  )
}

export default Header