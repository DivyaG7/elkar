import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import Modal from 'react-modal';
import slide from '../assets/slide.png'
import slide2 from '../assets/slide2.png'
import playbtn from '../assets/playbtn.png'

Modal.setAppElement('#root'); // Important for accessibility

const HeroCarousel = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleOpenModal = () => setModalIsOpen(true);
    const handleCloseModal = () => setModalIsOpen(false);

    return (
        <div style={{ position: 'relative' }} id='home'>
            {/* Carousel */}
            <Carousel fade indicators={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 caro-img"
                        src={slide}
                        alt="First slide"
                    />
                    <Carousel.Caption className="mb-5" style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        textAlign: 'center',
                        background: 'rgba(0,0,0,0.3)', // optional dark overlay
                    }}>


                        <h1 style={{
                            fontSize: '7rem', fontWeight: '400',
                            marginTop: '70px'
                        }}><span style={{ fontSize: '1rem', letterSpacing: '6px', fontWeight: '400' }}>EMBRACE LIFE SHEPHERD MOVEMENTS</span><br></br>ELKAR’S LIVING</h1>

                        <Button
                            variant="light"
                            size="lg"
                            onClick={handleOpenModal}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                lineHeight: '1',
                                padding: '0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 0 20px rgba(0,0,0,0.4)',
                                marginTop: '100px'
                            }}
                        >
                            <img src={playbtn} alt='playbtn' className='img-fluid w-75' />
                        </Button>

                    </Carousel.Caption>


                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 caro-img"
                        src={slide2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className="mb-5" style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        textAlign: 'center',
                        background: 'rgba(0,0,0,0.3)',  // optional dark overlay
                    }} >
                        <h1 style={{
                            fontSize: '7rem', fontWeight: '400',
                            marginTop: '70px'
                        }}><span style={{ fontSize: '1rem', letterSpacing: '6px', fontWeight: '400' }}>EMBRACE LIFE SHEPHERD MOVEMENTS</span><br></br>ELKAR’S LIVING</h1>

                        <Button
                            variant="light"
                            size="lg"
                            onClick={handleOpenModal}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                lineHeight: '1',
                                padding: '0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 0 20px rgba(0,0,0,0.4)',
                                marginTop: '100px'
                            }}
                        >
                            <img src={playbtn} alt='playbtn' className='img-fluid w-75' />
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Video Modal */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                contentLabel="Video Modal"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        zIndex: 9999, // super high to cover everything
                    },
                    content: {
                        background: 'black',
                        padding: 0,
                        inset: 0,
                        border: 'none',
                        overflow: 'hidden',
                    }
                }}
            >
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <video
                        src="/your-video.mp4"
                        controls
                        autoPlay
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <Button
                        variant="danger"
                        onClick={handleCloseModal}
                        style={{
                            position: 'absolute',
                            top: 20,
                            right: 20,
                            zIndex: 9999
                        }}
                    >
                        ✖
                    </Button>
                </div>
            </Modal>

        </div>
    );
};

export default HeroCarousel;
