
import { Carousel, Button } from 'react-bootstrap';
import slide from '../assets/slide1.png'
import slide2 from '../assets/slide2.png'
import slide3 from '../assets/slide3.png'
import { useNavigate } from 'react-router-dom';



const HeroCarousel = () => {
    const navigate = useNavigate();

    return (
        <div style={{ position: 'relative' }} id='home'>
            {/* Carousel */}
            <Carousel fade indicators={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 caro-img"
                        src={slide}
                        alt="First slide"
                        loading="lazy"
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
                            fontSize: '5rem', fontWeight: '400',
                            marginTop: '70px'
                        }}><span style={{ fontSize: '1rem', letterSpacing: '6px', fontWeight: '400' }}>EMBRACE LIFE SHEPHERD MOVEMENTS</span><br></br>PREMIUM ROOM</h1>

                        <Button
                            variant="light"
                            size="lg"
                            onClick={() => navigate('/room?tab=1')} // tab=1 for first room
                            style={{
                                padding: '12px 32px',
                                backgroundColor: 'transparent',
                                fontWeight: '600',
                                fontSize: '1.2rem',
                                color: '#fff',
                                marginTop: '100px',
                                boxShadow: '0 0 20px rgba(0,0,0,0.4)',
                                border: '1px solid #fff',
                                borderRadius: '30px',
                            }}
                        >
                            
                            BOOK NOW
                        </Button>


                    </Carousel.Caption>


                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 caro-img"
                        src={slide2}
                        alt="Second slide"
                        loading="lazy"
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
                            fontSize: '5rem', fontWeight: '400',
                            marginTop: '70px'
                        }}><span style={{ fontSize: '1rem', letterSpacing: '6px', fontWeight: '400' }}>EMBRACE LIFE SHEPHERD MOVEMENTS</span><br></br>FAMILY ROOM</h1>

                        <Button
                            variant="light"
                            size="lg"
                            onClick={() => navigate('/room?tab=2')} // tab=1 for first room
                            style={{
                                padding: '12px 32px',
                                backgroundColor: 'transparent',
                                fontWeight: '600',
                                fontSize: '1.2rem',
                                color: '#fff',
                                marginTop: '100px',
                                boxShadow: '0 0 20px rgba(0,0,0,0.4)',
                                border: '1px solid #fff',
                                borderRadius: '30px',
                            }}
                        >
                            BOOK NOW
                        </Button>

                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 caro-img"
                        src={slide3}
                        alt="Second slide"
                        loading="lazy"
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
                            fontSize: '5rem', fontWeight: '400',
                            marginTop: '70px'
                        }}><span style={{ fontSize: '1rem', letterSpacing: '6px', fontWeight: '400' }}>EMBRACE LIFE SHEPHERD MOVEMENTS</span><br></br>ELITE ROOM</h1>

                        <Button
                            variant="light"
                            size="lg"
                            onClick={() => navigate('/room?tab=3')} // tab=1 for first room
                            style={{
                                padding: '12px 32px',
                                backgroundColor: 'transparent',
                                fontWeight: '600',
                                fontSize: '1.2rem',
                                color: '#fff',
                                marginTop: '100px',
                                boxShadow: '0 0 20px rgba(0,0,0,0.4)',
                                border: '1px solid #fff',
                                borderRadius: '30px',
                            }}
                        >
                            BOOK NOW
                        </Button>

                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        </div>
    );
};

export default HeroCarousel;
