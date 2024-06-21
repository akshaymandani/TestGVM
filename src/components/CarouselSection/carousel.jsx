import React from 'react';
import './carousel.css';
import MasterpieceCard from './MasterpieceCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const masterpieces = [
    {
        title: "Flower Decorations",
        author: "Melvina Spring",
        image: "../../Images/Picture.png",
        tag: "Promoted",
    },
    {
        title: "Flower Decorations",
        author: "Melvina Spring",
        image: "../../Images/Picture.png",
        tag: "Featured",
    },
    {
        title: "Splash",
        author: "Raweda Mellor",
        image: "../../Images/Picture.png",
    },
    {
        title: "Colorful Face",
        author: "Melvina Spring",
        image: "../../Images/Picture.png",
    },
];

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className="Feature">
            <header className="Feature-header">
                <h1>Latest masterpieces</h1>
                <button className="discover-more">Discover More Masterpieces</button>
            </header>
            <div className="masterpieces-gallery">
                <Slider {...settings}>
                    {masterpieces.map((masterpiece, index) => (
                        <MasterpieceCard key={index} {...masterpiece} />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Carousel;

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
}
