import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const applications = useLoaderData();
  const handleStatus = (e, id) => {
    // console.log(e.target.value, id);
    const data = {
      status: e.target.value,
    };
    fetch(`http://localhost:3000/job-application/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "status is update ",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <h1>Applications-{applications.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Email</th>
              <th>Status</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, idx) => (
              <tr key={app._id}>
                <th>{idx + 1}</th>
                <td>{app.Applicat_email}</td>
                <td>{app.status}</td>
                <td>
                  <select
                    onChange={(e) => handleStatus(e, app._id)}
                    defaultValue={app.status}
                    className="select select-bordered select-xs w-full max-w-xs"
                  >
                    <option disabled>Change Status</option>
                    <option>Hired</option>
                    <option>Under Review</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
