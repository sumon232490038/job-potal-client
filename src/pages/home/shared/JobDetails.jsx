import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const JobDetails = () => {
  const { title, applicationDeadline, company, _id } = useLoaderData();

  return (
    <div>
      <h1>Job details for {title}</h1>
      <p>Company: {company}</p>
      <p>Deadline: {applicationDeadline}</p>
      <Link to={`/apply/${_id}`}>
        <button className="btn btn-primary">apply now</button>
      </Link>
    </div>
  );
};

export default JobDetails;
