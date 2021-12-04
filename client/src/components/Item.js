import React, { useState } from "react";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import ItemEdit from "./EditItemForm";

const Item = () => {

  const [showNewForm, setShowNewForm] = useState(false);
  const location = useLocation();
  const {item} = location.state;
  const {category_id, id} = useParams();

  const toggleNewForm = () => {
    setShowNewForm(!showNewForm);
  };

  return (
    <div>
      <Link to={`/categories/${category_id}/items`}>Back to category</Link>
      <p>Name: {item.name}</p>
      <p>Price: {item.price}</p>
      <p>Description: {item.description}</p>
      <button onClick = {toggleNewForm}>{showNewForm ? "Cancel" : "Edit Item"}</button>
      {showNewForm && <ItemEdit item={item} toggleNewForm={toggleNewForm}/>}
    </div>
  );
};

export default Item