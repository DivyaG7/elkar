import React from 'react'
import facility from '../assets/facility.png'
import pick from '../assets/pickdrop.png'
import breakfast from '../assets/breakfast.png'
import roomservice from '../assets/roomservice.png'
import admin from '../assets/administration.png'

const Facilities = () => {
    return (
        <>
            <section className='facility' id='amenties'>
                <div style={{ width: '100%', overflow: 'hidden' }}>
                    <div className="row p-0">
                        <div className="col-md-6 p-0 m-0">
                            <img src={facility} alt='facility-image' className='img-fluid h-100' loading="lazy" />
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-between align-items-center p-0 m-0">
                            <h1 className='pe-5 ps-5 fw-bold'>Enter Elkar’s Homestay, our exclusive Hotel Facilities</h1>

                            <div className='row pt-3 pb-3 pe-5 ps-5 gap-3 faci-cont'>
                                <div className='col-md-3 col-sm-5 d-flex flex-column justify-content-center align-items-center text-center border gap-3'>
                                    <img src={pick} alt='pickdrop-image' className='img-fluid' loading="lazy" />
                                    <p>Pickup & Drop</p>
                                </div>

                                <div className='col-md-3 col-sm-5 d-flex flex-column justify-content-center align-items-center text-center border gap-3'>
                                    <img src={breakfast} alt='breakfast-image' className='img-fluid' loading="lazy" />
                                    <p>Breakfast
                                        Complimentary</p>
                                </div>

                                <div className='col-md-3 col-sm-5 d-flex flex-column justify-content-center align-items-center text-center border gap-3'>
                                    <img src={roomservice} alt='roomservice-image' className='img-fluid' loading="lazy" />
                                    <p>Room Service</p>
                                </div>

                                <div className='col-md-3 col-sm-5 d-flex flex-column justify-content-center align-items-center text-center border gap-3'>
                                    <img src={admin} alt='admin-image' className='img-fluid' loading="lazy" />
                                    <p>Administration</p>
                                </div>
                            </div>

                            <div className='d-flex justify-content-end align-items-end pt-3 pb-3 pe-5 ps-5' style={{ backgroundColor: '#043927' }}>
                                <p className='text-white'>24 Hrs, Front Desk, 24 Hrs, Power Backup, Caller ID Phones in All Rooms, Coat Brush,Complimentary Water Bottle in the Room, Complimentary Wi-Fi, Fitness Centre, In room Electronic safe, Iron and Iron Board,Luggage Storage, Mini Bar on !st day of Check in, Satellite TV Channels,  valet Parking</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='e-pass'>
                    <h1>Escape to the Mist. Stay for the Magic</h1>
                    <p>A once in a lifetime wellness experience in an idyllic setting, inviting you to <br></br>
                        discover and connect with yourself and your vital rhythm.</p>
                    <button>Get  E -Pass</button>
                </div>
            </section>
        </>
    )
}

export default Facilities