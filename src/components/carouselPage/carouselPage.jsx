import React from 'react';
// import { Link } from 'react-router-dom';
import './carouselPage.css';
import colorfulFace from '../../Images/Picture (4).png';
import splash from '../../Images/Picture (5).png';
import fenceSpying from '../../Images/Picture (6).png';

const CarouselPage = () => {
    return (
        <div className="carousel-page">
            <div className="hero-section">
                <h1>Be incredible</h1>
                <p>Nec ultricies eget placerat ultricies eleifend dignissim aliquet sapien. Senectus vestibulum, eget erat at et congue cursus pretium.</p>
                <a className="explore-button">Explore Xinder</a>
                {/* <Link to="/events" className="explore-button">Explore Xinder</Link> */}
            </div>
            <div className="carousel">
                <div className="carousel-item"><img src={splash} alt="Splash" /><span>Splash</span></div>
                <div className="carousel-item active"><img src={colorfulFace} alt="Colorful Face" /><span>Colorful Face</span></div>
                <div className="carousel-item"><img src={fenceSpying} alt="Fence Spying" /><span>Fence Spying</span></div>
            </div>
        </div>
    );
};

export default CarouselPage;
