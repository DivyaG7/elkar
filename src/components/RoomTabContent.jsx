import React from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';
import detail1 from '../assets/detail1.png';
import detail2 from '../assets/detail2.png';
import detail3 from '../assets/detail3.png';
import detail4 from '../assets/detail4.png';

const RoomTabContent = ({
    title,
    tags,
    images,
    description,
    details,
    amenities,
    checkIn,
    checkOut,
}) => {
    return (
        <div className="p-4 rounded">
            {/* Title & Tags */}
            <div>
                <h2 className='fw-bold'>{title}</h2>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="d-flex flex-wrap gap-2 mt-3">
                        {tags.map((tag, idx) => (
                            <span key={idx} className="badge text-dark px-4 py-2 rounded-1" style={{ fontSize: '16px', fontWeight: '500', background: '#E3F6F0', color: '#043927', border: '1px solid #043927' }}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    <Button variant="primary" className="px-4 py-2 mt-3 mt-md-0">Book Now</Button>
                </div>
            </div>

            {/* Image Gallery */}
            <Row className="gx-3 gy-2 mb-4">
                <Col md={8} className='d-flex justify-content-center align-items-center'>
                    <img src={images[0]} alt="main" className="img-fluid rounded w-100" />
                </Col>
                <Col md={4} className='d-flex justify-content-center align-items-center'>
                    <Row className="gy-2">
                        {images.slice(1).map((img, idx) => (
                            <Col xs={6} key={idx}>
                                <img src={img} alt={`sub-${idx}`} className="img-fluid rounded w-100" />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>

            {/* About Section */}
            <h4 className='mt-5 mb-4 fw-bold'>About Room</h4>
            <p className="text-muted">{description}</p>

            {/* Details */}
            <h4 className='mt-5 mb-4 fw-bold'>Details</h4>
            <Card className="p-4 mb-4 border rounded-4 shadow-sm">
                <Row className="text-center">
                    <Col className='col-md-2'><img src={detail1} alt='icon' className='img-fluid mb-4' width={25} /> <br />{details.guests}</Col>
                    <Col className='col-md-2'><img src={detail2} alt='icon' className='img-fluid mb-4' width={25} /> <br />{details.square}</Col>
                    <Col className='col-md-2'><img src={detail3} alt='icon' className='img-fluid mb-4' width={25} /> <br />{details.bedrooms}</Col>
                    <Col className='col-md-2'><img src={detail4} alt='icon' className='img-fluid mb-4' width={25} /> <br />{details.view}</Col>
                </Row>
            </Card>

            {/* Amenities */}
            <h4 className='fw-bold mt-5 mb-4'>Room Amenities</h4>
            <div className="mb-4 border rounded-4 p-4">
                <Row xs={2} md={3} lg={3}>
                    {amenities.map((item, idx) => (
                        <Col key={idx} className="mb-4 d-flex align-items-center gap-2">
                            <img
                                src={item.icon}
                                alt={item.label}
                                style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                            />
                            <span>{item.label}</span>
                        </Col>
                    ))}
                </Row>
                <a href="#" className="text-decoration-underline mt-2 d-inline-block">Show all amenities</a>
            </div>

            {/* Check-in/out times */}
            <Row className="p-4 rounded mt-5">
                <Col md={6}>
                    <h4 className='fw-bold'>Check in Time</h4>
                    <div className='mt-4 shadow p-4 w-50 rounded-4' style={{ background: '#F2F6F7' }}>
                        <p className="mb-2">Early Check In</p>
                        <strong>{checkIn}</strong>
                    </div>
                </Col>
                <Col md={6}>
                    <h4 className='fw-bold'>Check Out Time</h4>
                    <div className='mt-4 shadow p-4 w-50 rounded-4' style={{ background: '#F2F6F7' }}>
                        <p className="mb-2">Check out</p>
                        <strong>{checkOut}</strong>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default RoomTabContent;
