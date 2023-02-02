import React from 'react';
import UseGeoLocation from '../CustomHooks/UseGeoLocation';

type BtnProps = {
  className: string;
  onClick?: any;
  children?: React.ReactNode;
  key?: number;
  capturelocation?: any;
  setCapturelocationData?: React.Dispatch<React.SetStateAction<any | null>>;
};

const ButtonGlobal = ({
  className,
  children,
  key,
  capturelocation,
  onClick,
  setCapturelocationData
}: BtnProps) => {
  const handlecall = () => {
    const location = UseGeoLocation();
    setCapturelocationData?.(location);
  };
  capturelocation === 1 ? handlecall() : '';

  return (
    <button className={className} onClick={onClick} key={key}>
      {children}
    </button>
  );
};

export default ButtonGlobal;
