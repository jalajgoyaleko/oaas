import React from 'react';
import { useStore } from '../../store/zustand';
import UseGeoLocation from '../CustomHooks/UseGeoLocation';

type BtnProps = {
  className: string;
  onClick?: any;
  children?: React.ReactNode;
  key?: number;
  disabled?: boolean;
};

const ButtonGlobal = ({ className, children, key, onClick, disabled }: BtnProps) => {
  const { capturelocation, setCapturelocationData } = useStore();
  const hndlCapturLoction = () => {
    const location = UseGeoLocation();
    setCapturelocationData(location);
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
