import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

const JobEdit = (props) => {

  const navigate = useNavigate();
  const { job_id, id, title: oldTitle, salary: oldSalary, company: oldCompany } = props.job;
  const { toggleEditForm, updateUJ } = props;

  const [title, setTitle] = useState(oldTitle);
  const [salary, setSalary] = useState(oldSalary);
  const [company, setCompany] = useState(oldCompany);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newJob = {
      title: title,
      salary: salary,
      company: company,
    };
    await axios.put(`/api/jobs/${id}`, newJob);

    toggleEditForm();
    updateUJ(newJob);
  };

  const handleDelete = async () => {
    await axios.delete(`/api/jobs/${id}`);
    navigate(`/jobs`);
  };

  return (
    <div>
      <h1>Edit {oldTitle}</h1>
      <button onClick={() => handleDelete()}>Delete Job</button>
      <div>
        <form onSubmit={handleSubmit}>
          <p>Job:</p>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <p>Salary:</p>
          <input value={salary} onChange={(e) => setSalary(e.target.value)} />
          <p>Company:</p>
          <input value={company} onChange={(e) => setCompany(e.target.value)} />
          <button>Submit Your Changes</button>
        </form>
      </div>
    </div>
  );
};

export default JobEdit;