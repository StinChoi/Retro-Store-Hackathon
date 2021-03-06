import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import JobAddForm from "./JobAddForm";


const Jobs = () => {
  const [showNewForm, setShowNewForm] = useState(false);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    let response = await axios.get("/api/jobs");
    setJobs(response.data);
  };

  const toggleNewForm = () => {
    setShowNewForm(!showNewForm);
  }

  const addJob = (job) => {
    setJobs([job, ...jobs]);
  }

  const renderJobs = () => {
    if (jobs.length === 0) {
      return <p>No Jobs Listed</p>
    }
    return jobs.map((job) => {
      return (
        <div key={job.id} className="job-container">
          <p>Title: {job.title}</p>
          <p>Company: {job.company}</p>
          <Link to={`/jobs/${job.id}`} state={{ job }}>View this Job Position</Link>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Careers Listed Below</h1>
      <button onClick={toggleNewForm}>{showNewForm ? "Cancel" : "New Job"}</button>
      {showNewForm && <JobAddForm addJob={addJob} />}
      {renderJobs()}
    </div>
  );
};

export default Jobs;