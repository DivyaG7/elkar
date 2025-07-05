import RoomTabContent from '../components/RoomTabContent';
import { Tabs, Tab } from 'react-bootstrap';
import amenity1 from '../assets/amenity1.png'
// import amenity2 from '../assets/amenity2.png'
import amenity3 from '../assets/amenity3.png'
import amenity4 from '../assets/amenity4.png'
import amenity5 from '../assets/amenity5.png'
import img1 from '../assets/premium1.png';
import img2 from '../assets/premium2.png';
import img3 from '../assets/premium3.png';
import img4 from '../assets/premium4.png';
import img5 from '../assets/premium5.png';
import NavbarComponent from '../components/Navbar';
import Footer from '../components/Footer';
import { useSearchParams } from 'react-router-dom';

const Room = () => {

    const [searchParams] = useSearchParams();
    const defaultTab = searchParams.get("tab") || "1";

    const sharedAmenities = [
        { icon: amenity1, label: 'Wifi in lobby' },
        { icon: amenity1, label: 'Wifi in rooms' },
        // { icon: amenity2, label: 'Pool' },
        { icon: amenity3, label: 'Spa' },
        { icon: amenity4, label: 'Parking' },
        { icon: amenity5, label: 'A/C' },
    ];

    return (
        <>
            <NavbarComponent />
            <div className="container mt-5">
                <Tabs defaultActiveKey={defaultTab} className="mb-3" justify>
                    <Tab eventKey="1" title="Premium Room">
                        <RoomTabContent
                            title="Premium Room"
                            tags={['Luxury', 'Nature view', 'Top rating']}
                            images={[img1, img2, img3, img4, img5]}
                            description="Experience luxury in the hills with our premium room offering panoramic views of Kodaikanal’s misty valleys. Elegantly designed with polished wooden floors, plush bedding, and ambient lighting for ultimate comfort. Floor-to-ceiling windows open to a private balcony where clouds greet you each morning. Modern amenities blend seamlessly with nature-inspired interiors for a sophisticated retreat. Perfect for couples or solo travelers seeking a blend of tranquillity, charm, and high-end hospitality."
                            details={{ guests: '2 - Adults', square: '22 m²/237 ft²', bedrooms: 'Bedrooms', view: 'Outdoor View' }}
                            amenities={sharedAmenities}
                            checkIn="12 : 00 pm"
                            checkOut="10 : 00 am"
                        />
                    </Tab>

                    <Tab eventKey="2" title="Family Room">
                        <RoomTabContent
                            title="Family Room"
                            tags={['Luxury', 'Nature view', 'Top rating']}
                            images={[img1, img2, img3, img4, img5]}
                            description="Experience luxury in the hills with our Family Room offering panoramic views of Kodaikanal’s misty valleys. Elegantly designed with polished wooden floors, plush bedding, and ambient lighting for ultimate comfort. Floor-to-ceiling windows open to a private balcony where clouds greet you each morning. Modern amenities blend seamlessly with nature-inspired interiors for a sophisticated retreat. Perfect for couples or solo travelers seeking a blend of tranquillity, charm, and high-end hospitality."
                            details={{ guests: '5  Members ', square: '26 Sqft', bedrooms: '2 - Bedrooms', view: 'Outdoor View' }}
                            amenities={sharedAmenities}
                            checkIn="12 : 00 pm"
                            checkOut="10 : 00 am"
                        />
                    </Tab>

                    <Tab eventKey="3" title="Elite Room">
                        <RoomTabContent
                            title="Elite Room"
                            tags={['Luxury', 'Nature view', 'Top rating']}
                            images={[img1, img2, img3, img4, img5]}
                            description="Experience luxury in the hills with our Elite Room offering panoramic views of Kodaikanal’s misty valleys. Elegantly designed with polished wooden floors, plush bedding, and ambient lighting for ultimate comfort. Floor-to-ceiling windows open to a private balcony where clouds greet you each morning. Modern amenities blend seamlessly with nature-inspired interiors for a sophisticated retreat. Perfect for couples or solo travelers seeking a blend of tranquillity, charm, and high-end hospitality."
                            details={{ guests: '2 - Adults', square: '26 Sqft', bedrooms: 'Bedrooms', view: 'Outdoor View' }}
                            amenities={sharedAmenities}
                            checkIn="12 : 00 pm"
                            checkOut="10 : 00 am"
                        />
                    </Tab>
                </Tabs>
            </div>
            <Footer />
        </>
    );
};

export default Room;
