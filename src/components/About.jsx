import React from 'react'
import about from '../assets/about.png'
import aboutbg from '../assets/about-bg.png'

const About = () => {
    return (
        <>
            <section className='about' id='about'>
                <div className='about-head'>
                    <div className='container pt-5'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <span>ABOUT US</span>
                                <h1 style={{ fontSize: '5rem' }}>Embrace the<br></br>
                                    Elkar’s<br></br>
                                    Lifestyle</h1>
                            </div>
                            <div className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
                                <div className='abt-container'>
                                    <p style={{ fontSize: '.9rem' }}>Welcome to your home in the hills— Elkar’s Homestay, nestled in the
                                        heart of Kodaikanal’s misty landscapes & Mountain views surrounded
                                        by  plumbs and avacoda farms, tranquil lakes, and the rolling
                                        hills of the Western Ghats, our resort offers the perfect blend of
                                        comfort, nature, and warm hospitality.
                                    </p>
                                    <p style={{ fontSize: '.9rem' }}>Whether you're here to unwind, explore scenic trails, or simply breathe
                                        in the crisp mountain air, we’ve created a space where peace and
                                        beauty come together. Each of our thoughtfully designed rooms
                                        offers stunning views, cozy interiors, and all the modern amenities
                                        you need for a restful and comfort stay.</p>
                                </div>
                                <img src={about} alt='about-image' className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
                <img src={aboutbg} alt='aboutbg' className='img-fluid' loading="lazy" />
            </section>
        </>
    )
}

export default About