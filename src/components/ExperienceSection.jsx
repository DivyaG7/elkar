import React, { useState } from 'react';
import jeep from '../assets/Jeep.png'
import campfire from '../assets/campfire.png'
import hill from '../assets/hill.png'
import tracking from '../assets/tracking.png'
import honeymoon from '../assets/honeymoon.png'

const activities = [
    { title: "CAMPFIRE", image: campfire },
    { title: "HILL CLIMBING", image: hill },
    { title: "JEEP SAFARI", image: jeep },
    { title: "TREKKING", image: tracking },
    { title: "HONEYMOON", image: honeymoon },
];

const ExperienceSection = () => {
    const [activeIndex, setActiveIndex] = useState(2); // default active: Jeep Safari

    return (
        <>
        <div className='experience pt-5 pb-5 pe-2 ps-2'>
            <h1>Escape to the Mist. Stay <br></br>for the Magic</h1>
            <p>A once in a lifetime wellness experience in an idyllic setting, inviting you to <br></br>
            discover and connect with yourself and your vital rhythm.</p>
        </div>
            <section className="experience-section" style={{ backgroundImage: `url(${activities[activeIndex].image})` }}>
                <div className="overlay">
                    {activities.map((activity, idx) => (
                        <div
                            key={idx}
                            className={`activity-column ${idx === activeIndex ? 'active' : ''}`}
                            onMouseEnter={() => setActiveIndex(idx)}
                        >
                            <span className="activity-title">{activity.title}</span>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ExperienceSection;
