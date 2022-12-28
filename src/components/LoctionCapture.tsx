import React, { useState } from 'react';
import ButtonGlobal from './Common/ButtonGlobal';

type LocationProps = {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};
const LoctionCapture = ({ setCurrentStep }: LocationProps) => {
  const [capturelocation, setCapturelocation] = useState<number>(0);
  const [capturelocationData, setCapturelocationData] = useState<any | null>();

  return (
    <>
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
      <ButtonGlobal
        className="bg-sky hover:bg-black text-white font-semibold mt-8 py-2 px-8 rounded"
        capturelocation={capturelocation}
        setCapturelocationData={setCapturelocationData}
        onClick={() => {
          capturelocation === 0
            ? setCapturelocation((prev) => prev + 1)
            : capturelocationData?.coordinates
            ? setCurrentStep((prev) => prev + 1)
            : '';
        }}>
        Start Location Capture
      </ButtonGlobal>
    </>
  );
};

export default LoctionCapture;
