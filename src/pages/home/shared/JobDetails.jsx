import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { title, applicationDeadline, company } = useLoaderData();

  return (
    <div>
      <h1>Job details for {title}</h1>
      <p>Company: {company}</p>
      <p>Deadline: {applicationDeadline}</p>
      <button className="btn btn-primary">apply now</button>
    </div>
  );
};

export default JobDetails;
