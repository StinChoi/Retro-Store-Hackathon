import React, { useState } from "react";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import ItemEdit from "./EditItemForm";

const Item = () => {

  const location = useLocation();
  const { item } = location.state;
  const { category_id, id } = useParams();
  const [showNewForm, setShowNewForm] = useState(false);
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);
  const [description, setDescription] = useState(item.description);

  const toggleNewForm = () => {
    setShowNewForm(!showNewForm);
  };

  const updateUI = (updatedItem) => {
    setName(updatedItem.name);
    setPrice(updatedItem.price);
    setDescription(updatedItem.description);
  }


  return (
    <div>
      <Link to={`/categories/${category_id}/items`}>Back to category</Link>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
      <button onClick={toggleNewForm}>{showNewForm ? "Cancel" : "Edit Item"}</button>
      {showNewForm && <ItemEdit item={item} toggleNewForm={toggleNewForm} updateUI={updateUI} />}
    </div>
  );
};

export default Item