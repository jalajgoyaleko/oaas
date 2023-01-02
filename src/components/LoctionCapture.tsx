import React from 'react';

type LocationProps = {
  capturelocationData?: any;
};
const LoctionCapture = ({ capturelocationData }: LocationProps) => {
  const data = capturelocationData?.coordinates;
  console.log('data', data);

  return (
    <ul className="list-disc pt-2 pl-5">
      <li className="pb-2">
        Please click the button below to allow browser to capture your location.
      </li>
      <li className="pb-2">
        In browser popup, click &quot;Allow&quot; button to enable location capturing.
      </li>
      <li className="pb-2">
        You will be re-directed to next step after successful location capture.
      </li>
    </ul>
  );
};

export default LoctionCapture;
