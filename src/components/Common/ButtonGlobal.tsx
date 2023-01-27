import React from 'react';
import UseGeoLocation from '../CustomHooks/UseGeoLocation';

type BtnProps = {
  className: string;
  onClick?: any;
  children?: React.ReactNode;
  disabled?: boolean;
  setCapturelocationData?: React.Dispatch<React.SetStateAction<any | null>>;
  getLocation?: boolean;
};

const ButtonGlobal = ({
  className,
  children,
  onClick,
  disabled,
  setCapturelocationData,
  getLocation
}: BtnProps) => {
  const hndlCapturLoction = () => {
    const location = UseGeoLocation();
    setCapturelocationData?.(location);
  };

  if (getLocation === true) {
    hndlCapturLoction();
  }

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default ButtonGlobal;
