// src/components/ContactSection.js
import React from 'react';

const ContactSection = () => {
  console.log('ContactSection component rendered');
  return (
    <section id="contact" style={{ backgroundColor: 'lightyellow', padding: '20px' }}>
      <h2>Contact Information</h2>
      <div className="contact-info">
        <p><i className="fas fa-map-marker-alt"></i> 500 College Ave, Swarthmore, PA 19081, USA</p>
        <p><i className="far fa-envelope"></i> <a href="mailto:badong@gmail.com">Send me an email 📧</a></p>
        <p><i className="fas fa-phone"></i> Phone: +1 (610) 604-8734</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/badong1/" target="_blank">Badong Badong</a></p>
        <p>Handshake: <a href="https://app.joinhandshake.com/stu/users/33096003" target="_blank">Badong Badong</a></p>
      </div>
    </section>
  );
};

export default ContactSection;
