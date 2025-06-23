import React from 'react';

const Message = ({ text }) => {
  return (
    <p style={{ fontWeight: 'bold', fontSize: 18, minHeight: 24 }}>
      {text}
    </p>
  );
};

export default Message;
