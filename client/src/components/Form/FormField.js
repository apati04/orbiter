import React from 'react';

const FormField = ({ input, label }) => {
  return (
    <div>
      {label}
      <input
        {...input}
        autoComplete='off'
      />
    </div>
  );
};

export default FormField;
