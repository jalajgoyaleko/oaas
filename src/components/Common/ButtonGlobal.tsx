import React from 'react';

type BtnProps = {
  className: string;
  onClick?: () => void;
  children?: React.ReactNode;
  key?: number;
};

const ButtonGlobal = ({ className, onClick, children, key }: BtnProps) => {
  return (
    <button className={className} onClick={onClick} key={key}>
      {children}
    </button>
  );
};

export default ButtonGlobal;
