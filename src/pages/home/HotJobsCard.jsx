import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobsCard = ({ job }) => {
  const {
    title,
    company_logo,
    company,
    location,
    description,
    requirements,
    salaryRange,
    _id,
  } = job;
  return (
    <div className="card card-compact bg-base-100 mx-auto shadow-xl">
      <div className="flex items-center gap-5">
        <figure>
          <img src={company_logo} className="w-16" alt="Shoes" />
        </figure>
        <div>
          <h1>{company}</h1>
          <p className="flex items-center gap-1">
            <FaMapMarkerAlt />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body mx-auto">
        <h2 className="card-title">
          {title} <div className="badge badge-secondary">NEW</div>
        </h2>

        <p>{description}</p>
        <div className="flex flex-wrap gap-2">
          {" "}
          {requirements.map((require, idx) => (
            <p key={idx} className="badge badge-outline text-wrap">
              {require}
            </p>
          ))}
        </div>
        <div className="card-actions justify-between items-center ">
          <h1>
            Salary:${salaryRange.min}-{salaryRange.max} {salaryRange.currency}
          </h1>

          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">Apply</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobsCard;

//
// "Software Engineer"
// location
// "Halishohor, Chittagong"
// jobType
// "Hybrid"
// category
// "Engineering"
// applicationDeadline
// "2024-12-31"

// salaryRange
// Object
// min
// 40000
// max
// 60000
// currency
// "bdt"
// description
// "We are seeking a skilled Software Engineer to join our dynamic team. T…"
// company
// "Favorite IT"

// requirements
// Array (4)

// responsibilities
// Array (3)
// status
// "active"
// hr_email
// "hr@techsolutions.com"
// hr_name
// "Farhan Rahman"
// company_logo
// "https://i.ibb.co/mXD5MNf/facebook.png"
