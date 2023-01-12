import React from 'react';
import UseGeoLocation from '../CustomHooks/UseGeoLocation';

type BtnProps = {
  className: string;
  onClick?: any;
  children?: React.ReactNode;
  key?: number;
  disabled?: boolean;
  capturelocation?: any;
  setCapturelocationData?: React.Dispatch<React.SetStateAction<any | null>>;
};

const ButtonGlobal = ({
  className,
  children,
  key,
  onClick,
  disabled,
  capturelocation,
  setCapturelocationData
}: BtnProps) => {
  const hndlCapturLoction = () => {
    const location = UseGeoLocation();
    setCapturelocationData?.(location);
  };
  console.log('capturelocation', capturelocation);

  capturelocation === 1 ? hndlCapturLoction() : '';

  return (
    <button className={className} onClick={onClick} key={key} disabled={disabled}>
      {children}
    </button>
  );
};

export default ButtonGlobal;
