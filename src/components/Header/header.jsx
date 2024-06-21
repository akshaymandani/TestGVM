import React from 'react'
import "./header.css"
import headreImage from "../../Images/header.png"

const Header = () => {
    return (
        <header className='h-header'>
            <div className='h-header-top'>
                <div className='h-logo'>Xinder</div>
                <nav className='h-nav'>
                    <ul>
                        <li><a href="#">Explore</a></li>
                        <li><a href="#">Solutions</a></li>
                        <li><a href="#">Articles</a></li>
                        <li><a href="#">Sign In</a></li>
                        <li className="h-button"><a href="#">Join Now</a></li>
                    </ul>
                </nav>
            </div>
            <div className='h-header-bottom'>
                <div className='h-left-content'>
                    <div className='hlc-top'>
                        <h1>Search the work of the best artists</h1>
                    </div>
                    <div className='hlc-bottom'>
                        <div className='hlcb-top'>
                            <div className='hlcb-search'>
                                <input type="text" placeholder='search for artists, work name, or category' className='search-box' />
                            </div>
                            <button className='search-button'>Search</button>
                        </div>
                        <div className='hlcb-bottom'>
                            <div className='hlcb-main'>
                                <div className='hlcb-badges'>Oil Painting</div>
                                <div className='hlcb-badges'>Abstract Art</div>
                                <div className='hlcb-badges'>Sculpture</div>
                                <div className='hlcb-badges'>Art Deco</div>
                                <div className='hlcb-badges'>Pop Art</div>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='h-right-content'>
                    <img src={headreImage} alt="" />
                </div>
            </div>
        </header>
    )
}

export default Header