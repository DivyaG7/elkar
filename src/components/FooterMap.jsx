import React from 'react';

const FooterMap = () => {
    return (
        <div className="map-container" style={{ width: '100%', height: '300px', borderTop: '1px solid #ccc' }}>
            <iframe
                title="Google Map"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3925.9093342879196!2d77.4711944!3d10.2688889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDE2JzA4LjAiTiA3N8KwMjgnMTYuMyJF!5e0!3m2!1sen!2sin!4v1751865882366!5m2!1sen!2sin"
            ></iframe>
        </div>
    );
};

export default FooterMap;
