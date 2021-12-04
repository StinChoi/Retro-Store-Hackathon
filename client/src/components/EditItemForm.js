import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

const ItemEdit = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { item } = location.state;
  const { id, name: oldName, price: oldPrice, description: oldDescription } = item;

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
    await axios.put(`/api/items/${id}`, newItem);
    navigate(`/items/${id}`);
  };

  const handleDelete = async (e) => {
    await axios.delete(`/api/items/${id}`);
    navigate("/items");
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
          <input value={description} onChange={(e) => setDescription(e.target.value)} />
          <button>Submit Your Changes</button>
        </form>
      </div>
      <button onClick={() => navigate(`/items/${id}`)}>Cancel</button>
    </div>
  );
};

export default ItemEdit;