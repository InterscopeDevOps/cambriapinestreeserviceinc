import React, { useState, useContext } from "react";
import { GlobalDataContext } from '../../context/context';

const ModalPost = () => {
  const [showModal, setShowModal] = useState(true);
  const { rpdata } = useContext(GlobalDataContext);

  return (
    <>
      {showModal ? (
        <>
          <div
            className="relative z-50"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white">
                    <div className="sm:flex sm:items-start">
                      <button
                        className="absolute top-3 right-3 px-2 rounded-full bg-green-500 text-white hover:text-red-600"
                        id="modal-title"
                        onClick={() => setShowModal(false)}
                      >
                        <i className="fa fa-times"></i>
                      </button>
                    </div>
                  </div>
                    <img className="w-full h-[480px] object-fill" src={rpdata?.stock?.[17]} alt="notPost"/>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ModalPost;