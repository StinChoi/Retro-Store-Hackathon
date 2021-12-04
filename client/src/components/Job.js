import React from "react";

const Job = (props) => {
  return (
    <div>
      <p>Name: {props.title}</p>
      <p>Salary: {props.salary}</p>
      <p>Company: {props.company}</p>
    </div>
  );
};

export default Job