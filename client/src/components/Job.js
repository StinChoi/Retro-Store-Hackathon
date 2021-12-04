import React, { useState } from "react";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import JobEdit from "./JobEditForm";

const Job = () => {

  const location = useLocation();
  const { job } = location.state;
  // const { job_id, id } = useParams();
  const [showEditForm, setShowEditForm] = useState(false);
  const [title, setTitle] = useState(job.title);
  const [salary, setSalary] = useState(job.salary);
  const [company, setCompany] = useState(job.company);

  const toggleEditForm = () => {
    setShowEditForm(!showEditForm);
  };

  const updateUJ = (updatedJob) => {
    setTitle(updatedJob.title);
    setSalary(updatedJob.salary);
    setCompany(updatedJob.company);
  };

  return (
    <div>
      <Link to={`/jobs`}>Back to Job Listings</Link>
      <p>Name: {title}</p>
      <p>Salary: {salary}</p>
      <p>Company: {company}</p>
      <button onClick={toggleEditForm}>{showEditForm ? "Cancel" : "Update"}</button>
      {showEditForm && <JobEdit job={job} toggleEditForm={toggleEditForm} updateUJ={updateUJ} />}
    </div>
  );
};

export default Job;