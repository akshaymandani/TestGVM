import React from 'react';
import './MasterpieceCard.css';

function MasterpieceCard({ title, author, image, tag }) {
    return (
        <div className="masterpiece-card">
            <img src={image} alt={title} className="masterpiece-image" />
            <div className="masterpiece-info">
                <h2>{title}</h2>
                <p>by {author}</p>
            </div>
        </div>
    );
}

export default MasterpieceCard;
