import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

const CateEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {currentCategory} = location.state
  const { id, name: initialName} = currentCategory

  const [name, setName] = useState(initialName);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let cateData = {name: name};
    await axios.put(`/api/categories/${id}`, cateData);
    navigate(`/categories/${id}/items`);
  }

  

  return (
    <div>
      <h1>Edit "{initialName}"</h1>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input value = {name} onChange = {(e) => {
          setName(e.target.value);
          }
        }/>
        <br/>
        <br/>
        <button>Update</button>
      </form>
      <hr />
    </div>
  );
};

export default CateEdit;


