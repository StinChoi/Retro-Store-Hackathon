import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Job from "./Job";


const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    getJobs();
  }, []);
  const getJobs = async () => {
    let response = await axios.get("/api/jobs");
    setJobs(response.data);
  };

  // Adding jobs here?

  const renderJobs = () => {
    if (jobs.length === 0) {
      return <p>No Jobs Listed</p>
    }
    return jobs.map((job) => {
      return (
        <div>
          <p>Job Available</p>
          <p>{jobs.title}</p>
          <p>{jobs.salary}</p>
          <p>{jobs.company}</p>
          <Link to={`/jobs/${job.id}`}>View Here</Link>
        </div>
      );
    })
  };
  return (
    <div>
      <h1>Careers Listed Below</h1>
      {/* <JobForm addJob={addJob} /> */}
      {renderJobs()};
    </div>
  );
};

export default Jobs;