import React from 'react';
import './ArtEventsPage.css';
import wildHorseEvent from '../../Images/Picture (4).png';
import greatColors from '../../Images/Picture (5).png';
import fathersDay from '../../Images/Picture (6).png';

const ArtEventsPage = () => {
    return (
        <div className="art-events-page">
            <header className='art-event-main'>
                <h2>Art events</h2>
            </header>
            <div className="events">
                <div className="event-card featured">
                    <img src={wildHorseEvent} alt="Wild Horse Event" />
                    <h3>Wild Horse Event</h3>
                    <p>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                </div>
                <div className="event-card new">
                    <img src={greatColors} alt="Great Colors" />
                    <h3>Great Colors</h3>
                    <p>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                </div>
                <div className="event-card coming-soon">
                    <img src={fathersDay} alt="Happy Father's Day" />
                    <h3>Happy Father's Day</h3>
                    <p>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                </div>
            </div>
        </div>
    );
};

export default ArtEventsPage;
