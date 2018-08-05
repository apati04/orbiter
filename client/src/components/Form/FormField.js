import React from 'react';

const FormField = ({ input, label, type }) => {
  return (
    <div>
      {label}
      <input
        {...input}
        autoComplete='off'
        type={type}
      />
    </div>
  );
};

export default FormField;
