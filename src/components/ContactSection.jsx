import React from 'react';

const ContactSection = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (res.ok) {
                alert('Message sent successfully!');
                e.target.reset();
            } else {
                alert('Failed to send message');
            }
        } catch (error) {
            console.error(error);
            alert('Error sending message');
        }
    };


    return (
        <section className="contact-section text-white">
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="display-5 fw-light">Planning a stay<br />or have a question?<br />Reach out</h1>
                    <p className="text-light small">your cozy escape at Elkar's Homestay Resort awaits</p>
                    <button className="btn btn-light mt-3 px-4 py-2">CONTACT US</button>
                </div>

                {/* Form Section */}
                <div className="bg-white text-dark rounded p-5 shadow-lg" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div className="row">
                        <div className="col-md-5 mb-4 mb-md-0 d-flex flex-column justify-content-center ">
                            <h1 className="fw-light">Rent your dream<br />Elkar’s getaway</h1>
                            <p className="small text-muted">
                                Fill out the form below to inquire about available rentals and start planning your unforgettable stay in Elkar's Homestay
                            </p>
                        </div>

                        <div className="col-md-7 form">
                            <form onSubmit={handleSubmit}>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label className="form-label small">FIRST NAME</label>
                                        <input type="text" className="form-control" name="firstName" required />
                                    </div>
                                    <div className="col">
                                        <label className="form-label small">LAST NAME</label>
                                        <input type="text" className="form-control" name="lastName" required />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label className="form-label small">E MAIL</label>
                                        <input type="email" className="form-control" name="email" required />
                                    </div>
                                    <div className="col">
                                        <label className="form-label small">PHONE NUMBER</label>
                                        <input type="tel" className="form-control" name="phone" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label small">MESSAGE</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="message"
                                        placeholder="I'd like to discuss property with you."
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn" style={{ backgroundColor: '#f5d4c7' }}>
                                    SEND MESSAGE
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
