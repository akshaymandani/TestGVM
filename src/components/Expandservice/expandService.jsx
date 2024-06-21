import React from 'react'
import "./expandService.css"
import icon from "../../Images/icon.png"
import icon1 from "../../Images/icon1.png"
import icon2 from "../../Images/Icon2.png"
import icon3 from "../../Images/Icon3.png"
import icon4 from "../../Images/icon4.png"
import icon5 from "../../Images/icon5.png"

const Service = () => {
    return (
        <div className='service'>
            <h1 style={{ textAlign: 'center' }}>Expanding Service</h1>
            <div className='service-main'>
                <div className='service-item'>
                    <img src={icon} alt="" />
                    <p>Nibh viverra</p>
                </div>
                <div className='service-item'>
                    <img src={icon1} alt="" />
                    <p>Cursus amet</p>
                </div>
                <div className='service-item'>
                    <img src={icon2} alt="" />
                    <p>Ipsum fermentum</p>
                </div>
                <div className='service-item'>
                    <img src={icon3} alt="" />
                    <p>Quisque euismod</p>
                </div>
                <div className='service-item'>
                    <img src={icon4} alt="" />
                    <p>Arcu vulputate</p>
                </div>
                <div className='service-item'>
                    <img src={icon5} alt="" />
                    <p>Cras auctor</p>
                </div>
            </div>
            <button className='service-button'>Find Services</button>
        </div>
    )
}

export default Service
