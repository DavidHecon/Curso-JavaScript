import React from 'react';

const InputNumber = ({ value, onChange, disabled }) => {
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder="Escribe un número"
      min="1"
      max="100"
      style={{ width: '100%', padding: 8, fontSize: 16 }}
    />
  );
};

export default InputNumber;
