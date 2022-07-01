import React from "react";
import SubmissionForm from "./SubmissionForm";

const Modal = ({ dataID }) => {
  // console.log(dataID);
  return (
    <>
      <label htmlFor="my-modal-6" className="btn btn-xs btn-warning mr-5">
        Edit
      </label>
      <SubmissionForm dataID={dataID} />
    </>
  );
};

export default Modal;
