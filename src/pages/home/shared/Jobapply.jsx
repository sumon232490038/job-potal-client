import { useParams } from "react-router-dom";
import userAuth from "../../hooks/UserAuth";
import Swal from "sweetalert2";

const Jobapply = () => {
  const { id } = useParams();
  const { user } = userAuth();

  const handleApplyForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedinUrl.value;
    const github = form.githubUrl.value;
    const resume = form.resumeUrl.value;

    console.log(resume, linkedin, github);
    const userJobInfo = {
      job_id: id,
      Applicat_email: user.email,
      linkedin,
      github,
      resume,
    };

    console.log(userJobInfo);

    fetch("http://localhost:3000/job-application", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userJobInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="my-10">
      <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
        <h1 className="text-center text-2xl font-bold">
          Best wish for your job
        </h1>
        <form onSubmit={handleApplyForm} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Linkedin URL</span>
            </label>
            <input
              type="url"
              placeholder="LinkedinUrl"
              name="linkedinUrl"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">GitHub Url</span>
            </label>
            <input
              type="url"
              placeholder="Github URL"
              name="githubUrl"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Resume Url</span>
            </label>
            <input
              type="url"
              placeholder="resume URL"
              name="resumeUrl"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Apply</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Jobapply;
