import React from 'react';
import { useStore } from '../../store/zustand';

type ModalProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleOnclick?: () => void;
  attentionmsg?: any;
};
const Modal = ({ showModal, setShowModal, handleOnclick, attentionmsg }: ModalProps) => {
  const { setCameraStatus, setManageVeriyStepinital, setFetchData } = useStore();
  const handleproceed = () => {
    setShowModal(false);
    handleOnclick?.();
    setCameraStatus(false);
    setManageVeriyStepinital();
    setFetchData(true);
  };
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <button
                  className="flex absolute text-lg -right-2.5 -top-2.5 bg-black text-white focus:outline-none font-medium rounded-full p-2 dark:bg-sky"
                  onClick={() => setShowModal(false)}>
                  <span className="w-[8px] h-[8px] text-xl flex justify-center items-center">
                    ×
                  </span>
                </button>
                {/*body*/}
                <div className="flex flex-col justify-center items-center p-10 text-center">
                  <div className="text-xl font-[500]">Attention!</div>
                  <div className="p-6 text-[16px]">{attentionmsg}</div>
                  <div className="mt-4">
                    <button
                      className="bg-sky text-white active:bg-black text-[14px] px-8 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleproceed}>
                      Yes, Proceed
                    </button>
                    <button
                      className="text-red-500 background-transparent px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}>
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
