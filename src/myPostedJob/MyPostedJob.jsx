import { useState } from "react";
import { useEffect } from "react";
import userAuth from "../pages/hooks/UserAuth";
import { Link } from "react-router-dom";

const MyPostedJob = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = userAuth();
  useEffect(() => {
    fetch(`http://localhost:3000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);
  return (
    <div>
      MY jobs {jobs.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Job Title</th>
              <th>Description </th>
              <th>ApplicationCount</th>
              <th>ViewApplications</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, idx) => (
              <tr>
                <th>{idx + 1}</th>
                <td>{job.title}</td>
                <td>{job.discription}</td>
                <td>{job.applicationCount}</td>
                <td>
                  <Link to={`/viewApplications/${job._id}`}>
                    <button>ViewApplications</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJob;