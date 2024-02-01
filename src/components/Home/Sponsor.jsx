import React from 'react'
import aven from "../../images/Aven.png";
import amara from "../../images/Amara.png";
import circle from "../../images/Circle.png";
import kyan from "../../images/Kyan.png";
import treva from "../../images/Treva.png";

function Sponsor() {
  return (
    <div className='p-24'>
        <h4 className="text-[#0052CC] font-semibold text-xl text-center mb-12">5,000+ high-impact teams rely on Fieldx</h4>
        <div className='flex justify-between items-center'>
            <img src={aven} alt="" />
            <img src={amara} alt="" />
            <img src={circle} alt="" />
            <img src={kyan} alt="" />
            <img src={treva} alt="" />
        </div>
    </div>
  )
}

export default Sponsor