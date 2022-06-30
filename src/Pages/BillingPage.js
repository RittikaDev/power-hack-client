import React from "react";
import useBills from "../hooks/useBills";
import SubmissionForm from "./SubmissionForm/SubmissionForm";

const BillingPage = ({ bill, search }) => {
	// const [bill, setBill] = useBills([]);
	console.log(bill);
	return (
		<div className="overflow-x-auto mt-10">
			<table className="table w-full">
				<thead>
					<tr>
						<th>Billing ID</th>
						<th>Full Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Paid Amount</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{bill
						.filter((val) => {
							if (search == "") {
								return val;
							} else if (
								val.name.toLowerCase().includes(search.toLowerCase())
							) {
								return val;
							} else if (
								val.email.toLowerCase().includes(search.toLowerCase())
							) {
								return val;
							} else if (
								val.phone.toLowerCase().includes(search.toLowerCase())
							) {
								return val;
							} else if (
								val.amount.toLowerCase().includes(search.toLowerCase())
							) {
								return val;
							}
						})
						.map((bill, key) => {
							return (
								<tr>
									<td>{bill._id}</td>
									<td>{bill.name}</td>
									<td>{bill.email}</td>
									<td>{bill.phone}</td>
									<td>{bill.amount}</td>
									<td>
										<button className="btn btn-xs btn-warning mr-5">
											Edit
										</button>
										<button className="btn btn-xs btn-error">Cancel</button>
									</td>
								</tr>
							);
						})}
					{/* {bill.map((bill) => (
						<tr>
							<td>{bill._id}</td>
							<td>{bill.name}</td>
							<td>{bill.email}</td>
							<td>{bill.phone}</td>
							<td>{bill.amount}</td>
							<td>
								<button className="btn btn-xs btn-warning mr-5">Edit</button>
								<button className="btn btn-xs btn-error">Cancel</button>
							</td>
						</tr>
					))} */}
				</tbody>
			</table>
			{/* <input type="checkbox" id="my-modal-6" class="modal-toggle" />
			<div class="modal modal-bottom sm:modal-middle">
				<div class="modal-box">
					<label
						for="my-modal-6"
						class="btn btn-sm btn-circle absolute right-2 top-2"
					>
						✕
					</label>
					<SubmissionForm />
				</div>
			</div> */}
		</div>
	);
};

export default BillingPage;
