import React, { useState } from "react";
import "./SubmissionForm.css";
import axios from "axios";
import useBills from "../../hooks/useBills";
import BillingPage from "../BillingPage";

const SubmissionForm = () => {
	const [bill, setBill] = useBills([]);
	const [search, setSearch] = useState("");
	const handleSubmit = (event) => {
		event.preventDefault();
		const addBill = {
			name: event.target.name.value,
			email: event.target.email.value,
			phone: event.target.phone.value,
			amount: event.target.amount.value,
		};
		axios.post("http://localhost:5000/add-billing", addBill).then((res) => {
			console.log(res.data[1]);
			setBill([res.data[1], ...bill]);
		});
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
						<label for="my-modal-6" class="btn btn-xs btn-warning mr-5">
							Add New Bill
						</label>
					</ul>
				</div>
			</div>
			<input type="checkbox" id="my-modal-6" class="modal-toggle" />
			<div class="modal modal-bottom sm:modal-middle">
				<div class="modal-box">
					<label
						for="my-modal-6"
						class="btn btn-sm btn-circle absolute right-2 top-2"
					>
						✕
					</label>
					{/* <SubmissionForm /> */}
					<form className="inventory-text mx-16 my-5" onSubmit={handleSubmit}>
						<div className="inventory-textbox mb-1">
							<h4 className="text-center font-bold">Add Bill</h4>
						</div>
						<p className="inventory-textbox">
							<input name="name" placeholder="Full Name" type="text" />
						</p>
						<p className="inventory-textbox">
							<input name="email" placeholder="Email" type="email" />
						</p>
						<p className="inventory-textbox">
							<input name="phone" placeholder="Phone" type="number" />
						</p>
						<p className="inventory-textbox">
							<input name="amount" placeholder="Paid Amount" type="number" />
						</p>
						<div className="modal-action text-center py-2 ">
							<button type="submit" className="btn py-2 mx-auto">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
			<BillingPage bill={bill} search={search} />
		</>
		// powerHack mongo username
		// 0rcp7Z04M2WU9iFe mongo pass
	);
};

export default SubmissionForm;
