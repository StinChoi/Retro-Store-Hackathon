import axios from "axios";
import React, { useState } from "react";

const JobAddForm = (props) => {
  const {addJob} = props

  const [title, setTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let jobData = {
      title: title, 
      salary: salary, 
      company: company
    };
    let res = await axios.post(`/api/jobs`, jobData);
    addJob(res.data);
  }

  return (
    <div>
      <h1>Post New Job</h1>
      <form onSubmit={handleSubmit}>
        <p>Title</p>
        <input value = {title} onChange = {(e) => {
          setTitle(e.target.value);
          }
        }/>
        <p>Salary</p>
        <input value = {salary} onChange = {(e) => {
          setSalary(e.target.value);
          }
        }/>
        <p>Company</p>
        <input value = {company} onChange = {(e) => {
          setCompany(e.target.value);
          }
        }/>
        <br/>
        <br/>
        <button>Add</button>
      </form>
      <hr />
    </div>
  );
};

export default JobAddForm;