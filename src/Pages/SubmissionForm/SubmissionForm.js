import React, { useState } from "react";
import "./SubmissionForm.css";
import axios from "axios";
import useBills from "../../hooks/useBills";
import BillingPage from "../BillingPage";
import Modal from "./Modal";

const SubmissionForm = ({ paidTotal }) => {
  // Form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  console.log(name);
  const [bill, setBill] = useBills([]);
  const [update, setUpdate] = useState([]);
  const [uiBill, setUiBill] = useBills([]);
  const [trueID, setTrueID] = useState(true);
  const [updateTrue, setUpdateTrue] = useState(false);
  const [search, setSearch] = useState("");

  // Errors
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  // Input fields
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
    setPhoneError(false);
  };
  const changePhone = (e) => {
    setPhone(e.target.value);
    setEmailError(false);
    setPhoneError(false);
  };
  const changeAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = () => {
    setUpdateTrue(false);
    // event.preventDefault();
    // const addBill = {
    //   name: event.target.name.value,
    //   email: event.target.email.value,
    //   phone: event.target.phone.value,
    //   amount: event.target.amount.value,
    //   id: "",
    // };
    const emailRegexValidate = /\S+@\S+\.\S+/;
    const validatedEmail = emailRegexValidate.test(email);
    const validatedPhone = phone.length == 11;
    if (validatedEmail && validatedPhone) {
      const addBill = {
        name: name,
        email: email,
        phone: phone,
        amount: amount,
        id: "",
      };
      // axios;
      axios
        .post("http://localhost:5000/add-billing", addBill)
        .then((res) => {
          setTrueID(true);
          setBill([res.data[1], ...bill]);
          if (res.status == 202) {
            setBill([addBill, ...bill]);
          }
        })
        .catch((err) => {
          setTrueID(false);
          setUiBill([addBill, ...uiBill]);
        });
    } else {
      if (!validatedEmail) {
        setEmailError(true);
      }
      if (!validatedPhone) {
        setPhoneError(true);
      }
    }
  };

  return (
    <>
      <div className="navbar bg-base-100 drop-shadow-lg rounded-lg mt-20 mb-5">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered input-info w-full max-w-xs"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <label htmlFor="my-modal-6" className="btn btn-xs btn-warning mr-5">
              Add New Bill
            </label>
          </ul>
        </div>
      </div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="my-modal-6"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="inventory-text mx-16 my-5">
            <div className="inventory-textbox mb-1">
              <h4 className="text-center font-bold">Add Bill</h4>
            </div>
            <p className="inventory-textbox">
              <input
                required
                name="name"
                placeholder="Full Name"
                type="text"
                onBlur={changeName}
              />
            </p>
            <p className="inventory-textbox">
              <input
                required
                name="email"
                placeholder="Email"
                type="email"
                onBlur={changeEmail}
              />
            </p>
            {emailError && (
              <p className="text-red-500">Input A Correct Email</p>
            )}
            <p className="inventory-textbox">
              <input
                required
                name="phone"
                placeholder="Phone"
                type="number"
                onBlur={changePhone}
              />
            </p>
            {phoneError && (
              <p className="text-red-500">Input A Correct Phone Number</p>
            )}
            <p className="inventory-textbox">
              <input
                required
                name="amount"
                placeholder="Paid Amount"
                type="number"
                onBlur={changeAmount}
              />
            </p>
            <div className="modal-action text-center py-2 ">
              {!updateTrue ? (
                <button
                  type="submit"
                  className="btn py-2 mx-auto"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              ) : (
                <button type="submit" className="btn py-2 mx-auto">
                  Update
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <BillingPage
        bill={bill}
        setBill={setBill}
        uiBill={uiBill}
        search={search}
        setTrueID={setTrueID}
        trueID={trueID}
        paidTotal={paidTotal}
        update={update}
      />
    </>
  );
};

export default SubmissionForm;
