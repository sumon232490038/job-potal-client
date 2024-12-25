import { useEffect, useState } from "react";
import userAuth from "../../hooks/UserAuth";
import axios from "axios";

const MyApplications = () => {
  const { user } = userAuth();
  const [myJobs, setMyJobs] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/job-applications?email=${user.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setMyJobs(res.data);
        // console.log(res.data);
      });
  }, [user.email]);

  return (
    <div>
      <h1>My Jobs collections:{myJobs.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          {myJobs.map((job) => (
            <tbody key={job._id}>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.company}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn ">X</button>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
