import axios from "axios";
import React, { useState } from "react";

const CateAddForm = (props) => {
  const {addCategory} = props

  const [name, setName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let cateData = {name: name};
    let res = await axios.post(`/api/categories`, cateData);
    addCategory(res.data);
  }

  return (
    <div>
      <h1>Add New Category</h1>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input value = {name} onChange = {(e) => {
          setName(e.target.value);
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

export default CateAddForm;