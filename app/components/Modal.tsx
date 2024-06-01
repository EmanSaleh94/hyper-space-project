
import React from "react";

const Modal = () => {
  return (
    <>
      <label
        htmlFor="my_modal_7"
        
        className="btn gradi  font-MonumentExtended btn-lg z-10"
      >
        Discover Me!
      </label>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal "  role="dialog">
        <div className="modal-box font-GTAmerica text-center">
          <h3 className="font-bold text-lg">Hello Qaim Alvi! <span>&#128075;</span></h3>
          <p className="py-4">I&apos;m Eman <span>&#x1F467;</span> <br/> Frontend Developer <br/> <br/> You can reach me On: Eman.s.ibrahim94@gmail.com  </p>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>

      </div>
    </>
  );
};

export default Modal;
