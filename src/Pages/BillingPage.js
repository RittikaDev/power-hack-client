import React, { useEffect, useState } from "react";
import SubmissionForm from "../Pages/SubmissionForm/SubmissionForm";
import Swal from "sweetalert2";

const BillingPage = ({
  bill,
  setBill,
  uiBill,
  search,
  trueID,
  paidTotal,
  update,
}) => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  //   pagination
  useEffect(() => {
    fetch("http://localhost:5000/itemcount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 7);
        setPageCount(pages);
      });
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/items?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setBill(data));
  }, [page, setBill, size]);

  const sumall = bill
    .map((item) => parseInt(item.amount))
    .reduce((prev, curr) => prev + curr, 0);
  paidTotal(sumall);
  const updateData = (id) => {
    console.log(update);
    // setDataUpdate(id);
    // const url = `http://localhost:5000/update-billing/${id}`;
    // fetch(url, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(user),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("success", data);
    //     alert("Profile Updated Successfully!!!");
    //     // e.target.reset();
    //   });
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete-billing/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("deleted", data);
            const remaining = bill.filter((item) => item._id !== id);
            setBill(remaining);
          });
        Swal.fire("Deleted!", "One item has been deleted.", "success");
      }
    });
  };
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
          {trueID ? (
            bill
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
                  <tr key={key}>
                    <td>{bill._id}</td>
                    <td>{bill.name}</td>
                    <td>{bill.email}</td>
                    <td>{bill.phone}</td>
                    <td>{bill.amount}</td>
                    <td>
                      <button onClick={() => updateData(bill._id)}>
                        <label
                          htmlFor="my-modal-6"
                          className="btn btn-xs btn-warning mr-5"
                        >
                          Edit
                        </label>
                      </button>
                      <button
                        className="btn btn-xs btn-error"
                        onClick={() => handleDelete(bill._id)}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                );
              })
          ) : (
            <>
              {uiBill
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
                    <tr key={key}>
                      <td>Generating ID...</td>
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
                    <>
                      <tr key={key}>
                        <td>{bill._id}</td>
                        <td>{bill.name}</td>
                        <td>{bill.email}</td>
                        <td>{bill.phone}</td>
                        <td>{bill.amount}</td>
                        <td>
                          <button className="btn btn-xs btn-warning mr-5">
                            Edit
                          </button>
                          <button className="btn btn-xs btn-error">
                            Cancel
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </>
          )}
        </tbody>
      </table>
      <div className="my-5 ml-0">
        {[...Array(pageCount).keys()].map((number) => (
          <button
            className={
              page === number
                ? "btn btn-primary me-2"
                : "btn btn-outline-primary me-2"
            }
            onClick={() => setPage(number)}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BillingPage;
