import React from "react";
import SubmissionForm from "./SubmissionForm/SubmissionForm";

const Layout = () => {
	return (
		<>
			<div className="navbar bg-base-100 drop-shadow-lg rounded-lg">
				<div className="flex-1">
					<a className="btn btn-ghost normal-case text-xl">Power Hack</a>
				</div>
				<div className="flex-none">
					<ul className="menu menu-horizontal p-0">
						<li>
							<a>Paid Total : 0</a>
						</li>
					</ul>
				</div>
			</div>
			<SubmissionForm />
		</>
	);
};

export default Layout;
