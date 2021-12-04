import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

const ItemEdit = (props) => {

  const navigate = useNavigate();
  // const location = useLocation();
  // const { item } = location.state;
  const { category_id, id, name: oldName, price: oldPrice, description: oldDescription } = props.item;
  const{toggleNewForm, updateUI} = props;

  const [name, setName] = useState(oldName);
  const [price, setPrice] = useState(oldPrice);
  const [description, setDescription] = useState(oldDescription);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newItem = {
      name: name,
      price: price,
      description: description,
    };
    await axios.put(`/api/categories/${category_id}/items/${id}`, newItem);
    // setName(newItem.name);
    // setPrice(newItem.price);
    // setDescription(newItem.description);
    // navigate(`/items/${id}`);
    toggleNewForm();
    updateUI(newItem);
  };

  const handleDelete = async () => {
    await axios.delete(`/api/categories/${category_id}/items/${id}`);
    navigate(`/categories/${category_id}/items`);
  };

  return (
    <div>
      <h1>Edit {oldName}</h1>
      <button onClick={() => handleDelete()}>Delete Item</button>
      <div>
        <form onSubmit={handleSubmit}>
          <p>Item:</p>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <p>Price:</p>
          <input value={price} onChange={(e) => setPrice(e.target.value)} />
          <p>Description:</p>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          <br />
          <button>Submit Your Changes</button>
        </form>
      </div>
      {/* <button onClick={() => navigate(`/items/${id}`)}>Cancel</button> */}
    </div>
  );
};

export default ItemEdit;