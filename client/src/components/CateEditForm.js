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


// import React from "react";

// const CateEdit = (props) => {
//   const {id, name} = props.category;

//   return (
//     <div>
//       <h1>Update {props.category.name} Form</h1>
//       <form action = {`/api/categories/${id}`} method = "post">
//         <input type = "hidden" name = "_method" value = "patch" />
//         <p>Name:</p>
//         <input defaultValue={name} name = "category[name]" />
//         <br />
//         <br />
//         <button type = "submit">Update</button>
//       </form>
//     </div>
//   )
// };

// export default CateEdit;