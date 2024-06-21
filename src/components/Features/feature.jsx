import React from 'react';
import './feature.css';

const categories = [
    { title: 'Vases Family', subtitle: 'Pottery', img: 'path/to/vases-image.jpg' },
    { title: 'Camel Portrait', subtitle: 'Oil Painting', img: 'path/to/camel-portrait.jpg' },
    { title: 'Euforia', subtitle: 'Abstract Painting', img: 'path/to/euforia.jpg' },
    { title: 'Classic Watch', subtitle: 'Object Design', img: 'path/to/classic-watch.jpg' },
    { title: 'White Angel', subtitle: 'Sculpture', img: 'path/to/white-angel.jpg' },
];


function Feature() {

    return (
        <div>
            <header className="feature-header">
                <h1>Featured art categories</h1>
                <a href="#">View All Categories →</a>
            </header>
            <div className="feature-categories">
                {categories.map((category, index) => (
                    <div className="feature-category" key={index}>
                        <img src={category.img} alt={category.title} />
                        <div className="feature-category-info">
                            <h2>{category.title}</h2>
                            <p>{category.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Feature;
