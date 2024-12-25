import { useEffect, useState } from "react";
import HotJobsCard from "./HotJobsCard";
import axios from "axios";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/jobs").then((data) => {
      setJobs(data.data);
    });
  }, []);
  return (
    <div className="my-10 mx-auto">
      <div className="mx-auto  grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {jobs.map((job) => (
          <HotJobsCard key={job._id} job={job}></HotJobsCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
