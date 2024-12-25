import Swal from "sweetalert2";
import userAuth from "../hooks/UserAuth";

const Addjob = () => {
  const { user } = userAuth();
  const hnadleForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const jobData = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = jobData;

    newJob.salaryRange = {
      min,
      max,
      currency,
    };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");

    fetch("http://localhost:3000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your jobs is added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <form onSubmit={hnadleForm} className="card-body">
        {/* {job-tile} */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            name="title"
            type="text"
            placeholder="Job Title"
            className="input input-bordered"
            required
          />
        </div>
        {/* {job-company} */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">company</span>
          </label>
          <input
            name="company"
            type="text"
            placeholder="company"
            className="input input-bordered"
            required
          />
        </div>
        {/* {job-Location} */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input
            name="Location"
            type="text"
            placeholder="Job Location"
            className="input input-bordered"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {/* {job-Category} */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">job field </span>
            </label>
            <select
              name="jobField"
              className="select select-ghost w-full max-w-xs"
            >
              <option disabled defaultValue="Pick a job field">
                Pick a Job Field
              </option>
              <option>Enginiaring</option>
              <option>Markating</option>
              <option>web dev</option>
            </select>
          </div>
          {/* {job-Type} */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job type</span>
            </label>
            <select
              name="jobType"
              className="select select-ghost w-full max-w-xs"
            >
              <option disabled defaultValue={`Pick a Job Type`}>
                Pick a Job Type
              </option>
              <option>FullTime</option>
              <option>Part Time</option>
              <option>Remote</option>
            </select>
          </div>
        </div>
        {/* {Salary Range} */}
        <div className=" grid grid-cols-1 md:grid-cols-3 justify-end items-end gap-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary Range</span>
            </label>
            <input
              name="min"
              type="text"
              placeholder="min"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              name="max"
              type="text"
              placeholder="Max"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job type</span>
            </label>
            <select
              name="currency"
              className="select select-ghost w-full max-w-xs"
            >
              <option disabled defaultValue={`Currency`}>
                Currency
              </option>
              <option>BDT</option>
              <option>USD</option>
              <option>IND</option>
            </select>
          </div>
        </div>
        {/* {job-Discription} */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Discription</span>
          </label>
          <textarea
            placeholder="Job Description"
            name="description"
            className="textarea textarea-bordered textarea-lg w-full "
          ></textarea>
        </div>
        {/* {job-Requirements} */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Requirements</span>
          </label>
          <textarea
            placeholder="Each Requirements in a new line"
            name="requirements"
            className="textarea textarea-bordered textarea-lg w-full "
          ></textarea>
        </div>
        {/* {job-Responsibilities} */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Responsibilities</span>
          </label>
          <textarea
            placeholder="Each Responsibilities in a new line"
            name="responsibilities"
            className="textarea textarea-bordered textarea-lg w-full "
          ></textarea>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* {HR Name} */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Name</span>
            </label>
            <input
              name="hr_name"
              type="text"
              placeholder="HR Name"
              defaultValue={user.displayName}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Hr Email</span>
            </label>
            <input
              name="hr_email"
              type="email"
              defaultValue={user.email}
              placeholder="Hr Email"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        {/* {Deadline} */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input
            name="applicationDeadline"
            type="date"
            placeholder="Deadline"
            className="input input-bordered"
            required
          />
        </div>
        {/* {Compan logog} */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company logo</span>
          </label>
          <input
            name="company_logo"
            type="url"
            placeholder="Company logo"
            className="input input-bordered"
            required
          />
        </div>
        {/* submit btn */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Post</button>
        </div>
      </form>
    </div>
  );
};

export default Addjob;
