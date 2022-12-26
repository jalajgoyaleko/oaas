import React from 'react';

type InputProps = {
  type: string;
  id: string;
  className: string;
  placeholder: string;
};

const InputGlobal = ({ type, id, className, placeholder }: InputProps) => {
  return <input type={type} id={id} className={className} placeholder={placeholder} />;
};

export default InputGlobal;
