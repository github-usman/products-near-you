import React from 'react';

const GoogleMap = () => {
  return (
    <div
      style={{
        height: '200px',
        width: '400px',
        boxShadow: '1px 1px 5px 1px #dad1d1',
        borderRadius: '8px',
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38197.07447384167!2d77.20746851279613!3d28.609591138078375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2c289887b17%3A0x17e087ce57578460!2sKhan%20Market%2C%20Rabindra%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110003!5e0!3m2!1sen!2sin!4v1718937834594!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: '1px solid transparent', borderRadius: '8px' }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
