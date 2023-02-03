import React from 'react';

type LabelProps = {
  className: string;
  children?: React.ReactElement;
};
const Labelglobal = ({ className, children }: LabelProps) => {
  return <label className={className}>{children}</label>;
};

export default Labelglobal;
