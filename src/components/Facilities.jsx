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
                <div style={{width: '100%', overflow: 'hidden'}}>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={facility} alt='facility-image' className='img-fluid h-100' />
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center facility-head">
                            <h1>Enter Elkar’s Homestay, our exclusive Hotel Facilities</h1>

                            <div className='row p-3 gap-3 faci-cont'>
                                <div className='col-md-3 col-sm-5 d-flex flex-column justify-content-center align-items-center text-center border gap-3'>
                                    <img src={pick} alt='pickdrop-image' className='img-fluid' />
                                    <p>Pickup & Drop</p>
                                </div>

                                <div className='col-md-3 col-sm-5 d-flex flex-column justify-content-center align-items-center text-center border gap-3'>
                                    <img src={breakfast} alt='breakfast-image' className='img-fluid' />
                                    <p>Breakfast
                                        Complimentary</p>
                                </div>

                                <div className='col-md-3 col-sm-5 d-flex flex-column justify-content-center align-items-center text-center border gap-3'>
                                    <img src={roomservice} alt='roomservice-image' className='img-fluid' />
                                    <p>Room Service</p>
                                </div>

                                <div className='col-md-3 col-sm-5 d-flex flex-column justify-content-center align-items-center text-center border gap-3'>
                                    <img src={admin} alt='admin-image' className='img-fluid' />
                                    <p>Administration</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Facilities