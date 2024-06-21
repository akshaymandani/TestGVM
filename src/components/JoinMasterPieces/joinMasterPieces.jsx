import React from 'react'
import "./joinMasterPieces.css"
import image from "../../Images/Pexels Photo by Karolina Grabowska.png"

const JoinMasterPieces = () => {
    return (
        <div className='jm'>
            <div className='jm-left-content'>
                <div className='jmlc-top'>
                    <h1>Add more masterpieces to your growing collection</h1>
                </div>
                <div className='jmlc-bottom'>
                    <div className='jmlcb-top'>
                        {/* <div className='hlcb-search'>
                            <input type="text" placeholder='search for artists, work name, or category' className='search-box' />
                        </div> */}
                        <button className='button'>Join Now</button>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className='jm-right-content'>
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default JoinMasterPieces