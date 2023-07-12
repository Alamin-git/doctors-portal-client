import React from "react";

const ConfirmationModal = ({
   title,
   message,
   closeModal,
   successAction,
   modalData,
}) => {
   return (
      <>
         <input
            type="checkbox"
            id="confirmation_modal"
            className="modal-toggle"
         />
         <div className="modal">
            <form method="dialog" className="modal-box">
               <h3 className="font-bold text-lg">{title}</h3>
               <p className="py-4">{message}</p>
               <div className="modal-action">
                  <label
                     onClick={() => successAction(modalData)}
                     htmlFor="confirmation_modal"
                     className="btn btn-outline"
                  >
                     Yes
                  </label>
                  <batten onClick={closeModal} className="btn btn-outline">
                     Cancel
                  </batten>
               </div>
            </form>
         </div>
      </>
   );
};

export default ConfirmationModal;
