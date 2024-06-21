import React from 'react'
import Slider from "react-slick"
import "./carousel.css"


const categories = [
    {
        id: 1,
        name: 'Category 1',
        products: [
            {
                id: 11,
                name: "Flower Decorations",
                description: "by Melvina Spring",
                image: '../../Images/Picture.png'
            },
            {
                id: 12,
                name: "Flower Decorations",
                description: "by Melvina Spring",
                image: '../../Images/Picture1.png'
            },
            {
                id: 13,
                name: "Splash",
                description: "by Rwanda Melflor",
                image: '../../Images/Picture2.png'
            },
            {
                id: 14,
                name: "Colorful Face",
                description: "by Melvina Spring",
                image: '../../Images/Picture3.png'
            }
        ]
    },
    {
        id: 2,
        name: 'Category 2',
        products: [
            {
                id: 21,
                name: "Flower Decorations",
                description: "by Melvina Spring",
                image: '../../Images/Picture.png'
            },
            {
                id: 22,
                name: "Flower Decorations",
                description: "by Melvina Spring",
                image: '../../Images/Picture1.png'
            },
            {
                id: 23,
                name: "Splash",
                description: "by Rwanda Melflor",
                image: '../../Images/Picture2.png'
            },
            {
                id: 24,
                name: "Colorful Face",
                description: "by Melvina Spring",
                image: '../../Images/Picture3.png'
            }
        ]
    }
];

const Carousel = () => {
    const settings = {
        dots: true,
        Infinite: true,
        speed: 500,
        slidesToshow: 1,
        slidersToscroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToshow: 1,
                    slidersToscroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToshow: 1,
                    slidersToscroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToshow: 1,
                    slidersToscroll: 1,
                }
            }
        ]
    }
    return (
        <div>
            <div>
                <h4>Latest masterpieces</h4>
            </div>
            <div className='Carousel-container'>
                <Slider {...settings}>
                    {categories.map(category => (
                        <div key={category.id} className='carousel-item'>
                            <h2>{category.name}</h2>
                            <div className='product-grid'>
                                {category.products.map(product => (
                                    <div key={product.id} className='product-card'>
                                        <img src={product.image} alt="" className='product-image' />
                                        <div className='product-info'>
                                            <h3>{product.name}</h3>
                                            <p>{product.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Carousel